// Worker-side step recorder.
//
// Every public async page-object call made from a spec becomes a "step" (see instrument()),
// every WebdriverIO assertion becomes an "assertion" step, and low-level actions done inside
// a step (tap, type, scroll...) are listed under it. After each step a screenshot is saved and
// the step is marked passed/failed (with the error). Results are written to
// reports/runs/<runId>/workers/<cid>.json after every test, so a crash never loses a run.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { options } from './options.js';

const state = {
  enabled: false,
  runId: null,
  cid: '0-0',
  runDir: null,
  shotDir: null,
  specs: [],
  device: {},
  entries: [], // tests + hooks, in execution order
  current: null, // test or hook currently running
  activeStep: null,
  depth: 0,
  lastElement: null, // last page-object element getter read (for assertion titles)
  testCounter: 0,
};

// ---------------------------------------------------------------- helpers

const now = () => Date.now();

const PRIVATE_USE = /[\uE000-\uF8FF]|[\u{F0000}-\u{FFFFD}]/gu;
const showGlyphs = (s) => String(s).replace(PRIVATE_USE, (c) => `\\u${c.codePointAt(0).toString(16).toUpperCase()}`);

/** Short human description of a selector string. */
export function describeSelector(sel) {
  if (sel == null) return '';
  const s = String(sel);
  if (s.startsWith('android=new UiSelector()')) {
    const map = {
      description: 'desc =', descriptionContains: 'desc contains', descriptionStartsWith: 'desc starts with',
      descriptionMatches: 'desc matches', text: 'text =', textContains: 'text contains', textStartsWith: 'text starts with',
      textMatches: 'text matches', resourceId: 'id =', resourceIdMatches: 'id matches', className: 'class =',
    };
    const parts = [...s.matchAll(/\.(\w+)\(("(?:[^"\\]|\\.)*"|\d+)\)/g)].map(([, fn, raw]) => {
      if (fn === 'instance') return `#${raw}`;
      let arg = raw;
      try { arg = JSON.parse(raw); } catch {}
      return `${map[fn] || fn} "${showGlyphs(arg)}"`;
    });
    if (parts.length) return parts.join(' and ').replace(/ and #/g, ' #');
  }
  if (s.startsWith('android=')) return showGlyphs(s.slice(8, 140));
  if (s.startsWith('~')) return `desc = "${showGlyphs(s.slice(1))}"`;
  return showGlyphs(s.length > 140 ? `${s.slice(0, 137)}...` : s);
}

function serializeError(err) {
  if (!err) return null;
  const message = showGlyphs(err.message || String(err));
  const stack = (err.stack || '')
    .split('\n')
    .filter((l) => !/node_modules|node:internal/.test(l))
    .slice(0, 12)
    .join('\n');
  return { name: err.name || 'Error', message, stack: showGlyphs(stack) };
}

const ACRONYMS = { otp: 'OTP', id: 'ID', bmi: 'BMI', url: 'URL', rca: 'RCA' };
function humanize(name) {
  const words = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/\s+/).map((w) => w.toLowerCase());
  return words.map((w, i) => ACRONYMS[w] || (i === 0 ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
}

function fmtArg(v, secret) {
  if (secret) return '"••••••"';
  if (v == null) return String(v);
  if (typeof v === 'string') return JSON.stringify(v.length > 60 ? `${v.slice(0, 57)}...` : v);
  if (typeof v === 'object') {
    const o = {};
    for (const [k, val] of Object.entries(v)) o[k] = /otp|password|token/i.test(k) ? '••••••' : val;
    const j = JSON.stringify(o);
    return j.length > 80 ? `${j.slice(0, 77)}...` : j;
  }
  return String(v);
}

const pad = (n, w = 2) => String(n).padStart(w, '0');

function writeJsonAtomic(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, file);
}

function logLine(text) {
  if (!state.enabled) return;
  const line = `${new Date().toISOString()} [${state.cid}] ${text}\n`;
  try { fs.appendFileSync(path.join(state.runDir, 'run.log'), line); } catch {}
  if (options.verbose) process.stdout.write(line);
}

async function screenshot(label) {
  if (!state.enabled || options.screenshots === 'none' || typeof driver === 'undefined') return null;
  const t = state.current;
  const file = path.join(state.shotDir, `t${pad(t?.index ?? 0, 3)}-${label}.png`);
  try {
    fs.mkdirSync(state.shotDir, { recursive: true });
    await driver.saveScreenshot(file);
    return path.relative(path.join(options.reportsDir), file).split(path.sep).join('/');
  } catch {
    return null; // session gone / app crashed - keep going
  }
}

const shouldShoot = (status) => options.screenshots === 'all' || (options.screenshots === 'failures' && status === 'failed');

// ---------------------------------------------------------------- lifecycle (called from hooks.js)

export function init({ runId, cid, specs, device }) {
  state.enabled = Boolean(runId);
  if (!state.enabled) return;
  state.runId = runId;
  state.cid = cid || '0-0';
  state.runDir = path.join(options.reportsDir, 'runs', runId);
  state.shotDir = path.join(state.runDir, 'screenshots', state.cid);
  state.specs = (specs || []).map((s) => path.relative(process.cwd(), s.startsWith('file:') ? fileURLToPath(s) : s).split(path.sep).join('/'));
  state.device = device || {};
  fs.mkdirSync(state.shotDir, { recursive: true });
  flush();
  logLine(`worker started: ${state.specs.join(', ')}`);
}

const relFile = (f) => {
  if (!f) return state.specs[0] || '';
  const abs = String(f).startsWith('file:') ? fileURLToPath(f) : f;
  return path.relative(process.cwd(), abs).split(path.sep).join('/');
};

function begin(type, { title, suite, file }) {
  const entry = {
    id: `${state.cid}-${pad(++state.testCounter, 3)}`,
    index: state.testCounter,
    type, // 'test' | 'hook'
    title,
    suite: suite || '',
    file: relFile(file),
    status: 'running',
    start: now(),
    durationMs: 0,
    steps: [],
  };
  state.current = entry;
  state.depth = 0;
  state.activeStep = null;
  return entry;
}

export function startTest(info) {
  if (!state.enabled) return;
  const e = begin('test', info);
  logLine(`▶ TEST ${e.suite} › ${e.title}`);
}

export function startHook(info) {
  if (!state.enabled) return;
  begin('hook', info);
}

/** Finish the current test/hook. */
export async function end({ passed, error, retries, logcat } = {}) {
  const e = state.current;
  if (!state.enabled || !e) return;
  e.durationMs = now() - e.start;
  e.status = passed ? 'passed' : 'failed';
  if (retries && retries.attempts) e.retries = retries.attempts;
  if (!passed) {
    e.error = serializeError(error);
    // Final state of the screen, unless the last step already captured the failure
    const last = e.steps[e.steps.length - 1];
    if (options.screenshots !== 'none' && !(last && last.status === 'failed' && last.screenshot)) {
      e.failureScreenshot = await screenshot('failure');
    }
    if (logcat && logcat.length) e.logcat = logcat;
  }
  // Hooks that did nothing interesting aren't worth showing
  const keep = e.type === 'test' || e.steps.length > 0 || !passed;
  if (keep) state.entries.push(e);
  logLine(`${passed ? '✔' : '✖'} ${e.type.toUpperCase()} ${e.title} (${(e.durationMs / 1000).toFixed(1)}s)${passed ? '' : ` - ${e.error?.message?.split('\n')[0]}`}`);
  state.current = null;
  flush();
}

/** Tests mocha skipped (e.g. after a failing before-all hook). */
export function recordSkipped(tests) {
  if (!state.enabled) return;
  const seen = new Set(state.entries.map((e) => `${e.suite}›${e.title}`));
  for (const t of tests) {
    if (seen.has(`${t.suite}›${t.title}`)) continue;
    state.entries.push({
      id: `${state.cid}-${pad(++state.testCounter, 3)}`, index: state.testCounter, type: 'test',
      title: t.title, suite: t.suite, file: t.file || state.specs[0] || '', status: 'skipped', start: now(), durationMs: 0, steps: [],
    });
  }
  flush();
}

export function flush() {
  if (!state.enabled) return;
  try {
    writeJsonAtomic(path.join(state.runDir, 'workers', `${state.cid}.json`), {
      cid: state.cid,
      specs: state.specs,
      device: state.device,
      updatedAt: now(),
      entries: state.current ? [...state.entries, state.current] : state.entries,
    });
  } catch {}
}

// ---------------------------------------------------------------- steps

/**
 * Record a step. Use directly in specs for things that aren't page-object calls:
 *   await step('Clear app data', () => driver.execute('mobile: clearApp', { appId }));
 */
export async function step(title, fn, { kind = 'step', call } = {}) {
  if (!state.enabled || !state.current) return fn();
  if (state.depth > 0) {
    logAction(call || title);
    return fn();
  }
  const s = {
    n: state.current.steps.length + 1,
    title,
    call,
    kind,
    status: 'running',
    start: now() - state.current.start,
    durationMs: 0,
    actions: [],
  };
  state.current.steps.push(s);
  state.activeStep = s;
  state.depth++;
  const t0 = now();
  try {
    const result = await fn();
    s.status = 'passed';
    return result;
  } catch (err) {
    s.status = 'failed';
    s.error = serializeError(err);
    throw err;
  } finally {
    s.durationMs = now() - t0;
    state.depth--;
    state.activeStep = null;
    if (shouldShoot(s.status)) s.screenshot = await screenshot(`s${pad(s.n, 3)}`);
    logLine(`  ${s.status === 'passed' ? '✓' : '✗'} ${s.n}. ${call || title} (${s.durationMs}ms)${s.error ? ` - ${s.error.message.split('\n')[0]}` : ''}${s.warnings?.length ? ` [${s.warnings.length} warning(s)]` : ''}`);
    flush();
  }
}

/** Attach extra data to the running step (e.g. layout results). `warnings` are appended. */
export function annotate(data) {
  const s = state.activeStep;
  if (!state.enabled || !s) return;
  for (const [k, v] of Object.entries(data)) {
    if (k === 'warnings') { if (v && v.length) s.warnings = [...(s.warnings || []), ...v]; }
    else s[k] = v;
  }
}

/** Low-level action inside the current step (tap, type, scroll...). */
export function logAction(action, target, value) {
  const s = state.activeStep;
  if (!state.enabled || !s) return;
  const a = { t: now() - state.current.start, action };
  if (target != null) a.target = typeof target === 'string' ? describeSelector(target) : String(target);
  if (value != null) a.value = /OTP digit|otp/i.test(String(target)) ? '•' : String(value).slice(0, 60);
  s.actions.push(a);
}

/** toBeDisplayed -> "is displayed", toHaveText -> "has text", with .not -> "is not displayed" */
function matcherPhrase(matcher, negated) {
  const m = matcher.match(/^to(Be|Have)?(.*)$/);
  if (!m) return matcher;
  const rest = m[2].replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
  if (m[1] === 'Be') return `is ${negated ? 'not ' : ''}${rest}`;
  if (m[1] === 'Have') return `${negated ? 'does not have' : 'has'} ${rest}`;
  const verb = { contain: 'contains', equal: 'equals', match: 'matches' }[rest] || rest;
  return `${negated ? 'not ' : ''}${verb}`;
}

/** Called from the afterAssertion hook. */
export async function recordAssertion({ matcherName, expectedValue, options: opts, result }) {
  if (!state.enabled || !state.current || state.depth > 0) return;
  const el = state.lastElement && now() - state.lastElement.at < 5000 ? state.lastElement.name : null;
  state.lastElement = null;
  const negated = opts && opts.isNot;
  const expected = expectedValue === undefined ? '' : fmtArg(expectedValue);
  const call = `expect(${el || '…'})${negated ? '.not' : ''}.${matcherName}(${expected})`;
  // result.pass is the matcher's raw outcome; with .not the assertion succeeds when it's false
  const ok = negated ? !(result && result.pass) : !!(result && result.pass);
  const s = {
    n: state.current.steps.length + 1,
    title: `Check ${el || 'value'} ${matcherPhrase(matcherName, negated)}${expected ? ` ${expected}` : ''}`,
    call,
    kind: 'assertion',
    status: ok ? 'passed' : 'failed',
    start: now() - state.current.start,
    durationMs: 0,
    actions: [],
  };
  if (!ok) {
    let msg = '';
    try { msg = typeof result.message === 'function' ? result.message() : String(result.message || ''); } catch {}
    s.error = { name: 'AssertionError', message: showGlyphs(msg.replace(/\x1b\[[0-9;]*m/g, '')), stack: '' };
  }
  state.current.steps.push(s);
  if (shouldShoot(s.status)) s.screenshot = await screenshot(`s${pad(s.n, 3)}`);
  logLine(`  ${ok ? '✓' : '✗'} ${s.n}. ${call}`);
  flush();
}

// ---------------------------------------------------------------- instrumentation

const SKIP = new Set(['exists', 'textOf', 'descOf', 'hideKeyboard']);

function isGetter(obj, prop) {
  for (let o = obj; o && o !== Object.prototype; o = Object.getPrototypeOf(o)) {
    const d = Object.getOwnPropertyDescriptor(o, prop);
    if (d) return typeof d.get === 'function';
  }
  return false;
}

/**
 * Wrap a page object so each public async method call from a spec is recorded as a step.
 * Element getters are noted so the next assertion can say which element it checked.
 */
export function instrument(page, name) {
  const label = name.replace(/Page$|Sheet$/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
  return new Proxy(page, {
    get(target, prop) {
      if (typeof prop !== 'string') return Reflect.get(target, prop, target);
      if (isGetter(target, prop)) {
        state.lastElement = { name: `${name}.${prop}`, at: now() };
        return Reflect.get(target, prop, target);
      }
      const v = Reflect.get(target, prop, target);
      if (typeof v !== 'function') return v;
      if (v.constructor?.name !== 'AsyncFunction' || SKIP.has(prop) || prop.startsWith('_')) return v.bind(target);
      return (...args) => {
        // Mask OTP codes (4-8 digit strings passed to *Otp* methods); phone numbers stay visible
        const isCode = (a) => /otp/i.test(prop) && typeof a === 'string' && /^\d{4,8}$/.test(a);
        const call = `${name}.${prop}(${args.map((a) => fmtArg(a, isCode(a))).join(', ')})`;
        return step(`${label} · ${humanize(prop)}`, () => v.apply(target, args), { kind: 'action', call });
      };
    },
  });
}

export const recorderState = state; // for tests/debugging
