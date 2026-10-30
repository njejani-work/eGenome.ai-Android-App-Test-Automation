// WebdriverIO hooks that feed the dashboard. Wired in wdio.conf.js:
//   import { withDashboard } from './test/support/dashboard/hooks.js';
//   export const config = withDashboard(baseConfig);
// Every hook is defensive: a reporting problem must never fail a test.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { options } from './options.js';
import * as rec from './recorder.js';
import { buildRun, buildIndex } from './builder.js';

const CURRENT = () => path.join(options.reportsDir, '.current-run');
const safe = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (e) {
    if (options.verbose) console.warn('[dashboard]', e);
  }
};

const pad = (n) => String(n).padStart(2, '0');
function newRunId() {
  const d = new Date();
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function runIdForWorker() {
  if (process.env.DASHBOARD_RUN_ID) return process.env.DASHBOARD_RUN_ID;
  try { return fs.readFileSync(CURRENT(), 'utf8').trim(); } catch { return null; }
}

function deviceFrom(caps = {}) {
  const g = (k) => caps[k] ?? caps[`appium:${k}`];
  return {
    name: g('deviceName'),
    udid: g('udid'),
    model: g('deviceModel'),
    manufacturer: g('deviceManufacturer'),
    platform: caps.platformName,
    platformVersion: g('platformVersion'),
    apiLevel: g('deviceApiLevel'),
    screen: g('deviceScreenSize'),
    app: g('appPackage'),
    appVersion: process.env.APP_VERSION || undefined,
  };
}

/** describe/it titles from a spec file, used to list tests mocha skipped. */
function specTests(file) {
  try {
    const src = fs.readFileSync(file, 'utf8');
    const out = [];
    let suite = '';
    const re = /\b(describe|it)(?:\.only|\.skip)?\(\s*(['"`])((?:\\.|(?!\2).)*)\2/g;
    for (let m; (m = re.exec(src)); ) {
      if (m[1] === 'describe') suite = m[3];
      else out.push({ suite, title: m[3], file: path.relative(process.cwd(), file).split(path.sep).join('/') });
    }
    return out;
  } catch {
    return [];
  }
}

let logcatOk = null; // decided on first use (options are read lazily)
async function drainLogcat() {
  if (logcatOk === null) logcatOk = options.logcat;
  if (!logcatOk) return [];
  try {
    return (await driver.getLogs('logcat')) || [];
  } catch {
    logcatOk = false; // not supported by this driver/session
    return [];
  }
}

function tailLogcat(lines) {
  const fmt = (l) => `${new Date(l.timestamp).toISOString().slice(11, 23)} ${l.level || ''} ${l.message}`.trim();
  const relevant = lines.filter((l) => /egenome|ReactNativeJS|AndroidRuntime|FATAL|Exception/i.test(l.message || ''));
  return (relevant.length ? relevant.slice(-80) : lines.slice(-50)).map(fmt);
}

const hookTitle = (hookName) => {
  const m = String(hookName || '').match(/"((?:before|after) (?:all|each))"/);
  return m ? `${m[1][0].toUpperCase()}${m[1].slice(1)} hook` : String(hookName || 'Hook');
};

export function createHooks() {
  return {
    // ---------------- launcher process
    onPrepare: safe(async (config) => {
      const id = newRunId();
      process.env.DASHBOARD_RUN_ID = id;
      const runDir = path.join(options.reportsDir, 'runs', id);
      fs.mkdirSync(runDir, { recursive: true });
      fs.writeFileSync(CURRENT(), id);
      fs.writeFileSync(
        path.join(runDir, 'meta.json'),
        JSON.stringify({
          id,
          startedAt: Date.now(),
          environment: options.environment,
          trigger: process.env.CI ? 'ci' : 'local',
          host: { os: `${os.type()} ${os.release()}`, node: process.version, user: os.userInfo().username, machine: os.hostname() },
          specPattern: config.specs,
          args: process.argv.slice(2).join(' '),
        }, null, 1)
      );
      buildIndex(options.reportsDir, { keepRuns: options.keepRuns, projectName: options.projectName });
      console.log(`\n  Dashboard run ${id} -> ${path.relative(process.cwd(), path.join(options.reportsDir, 'index.html'))}\n`);
    }),

    onComplete: safe(async (exitCode, config, caps, results) => {
      const id = process.env.DASHBOARD_RUN_ID || runIdForWorker();
      if (!id) return;
      const metaFile = path.join(options.reportsDir, 'runs', id, 'meta.json');
      const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
      Object.assign(meta, { finishedAt: Date.now(), exitCode, results });
      fs.writeFileSync(metaFile, JSON.stringify(meta, null, 1));
      const run = buildRun(options.reportsDir, id);
      buildIndex(options.reportsDir, { keepRuns: options.keepRuns, projectName: options.projectName });
      const t = run.totals;
      console.log(`\n  Dashboard: ${t.passed} passed, ${t.failed} failed, ${t.skipped} skipped, ${t.steps} steps`);
      console.log(`  Open ${path.join(options.reportsDir, 'index.html')}  (or: npm run dashboard)\n`);
    }),

    // ---------------- worker process
    before: safe(async (capabilities, specs) => {
      rec.init({
        runId: runIdForWorker(),
        cid: process.env.WDIO_WORKER_ID,
        specs,
        device: deviceFrom({ ...capabilities, ...(driver?.capabilities || {}) }),
      });
    }),

    beforeHook: safe(async (test, context, hookName) => {
      rec.startHook({ title: hookTitle(hookName), suite: test?.parent || test?.title || '', file: test?.file });
    }),

    afterHook: safe(async (test, context, result = {}, hookName) => {
      await rec.end({ passed: !result.error, error: result.error });
      void hookName;
    }),

    beforeTest: safe(async (test) => {
      await drainLogcat();
      rec.startTest({ title: test.title, suite: test.parent, file: test.file });
    }),

    afterTest: safe(async (test, context, { error, passed, retries } = {}) => {
      const logcat = passed ? [] : tailLogcat(await drainLogcat());
      await rec.end({ passed, error, retries, logcat });
      // Keep the dashboard current while the run is in progress
      const id = runIdForWorker();
      if (id) buildRun(options.reportsDir, id);
    }),

    afterAssertion: safe(async (params) => {
      await rec.recordAssertion(params);
    }),

    after: safe(async (result, capabilities, specs) => {
      rec.recordSkipped(specs.flatMap((s) => specTests(s.startsWith('file:') ? fileURLToPath(s) : s)));
      const id = runIdForWorker();
      if (id) buildRun(options.reportsDir, id);
    }),
  };
}

/** Add the dashboard hooks to a WDIO config, keeping any hooks it already has. */
export function withDashboard(baseConfig) {
  const merged = { ...baseConfig };
  for (const [name, fn] of Object.entries(createHooks())) {
    const existing = baseConfig[name];
    merged[name] = existing ? [...[].concat(existing), fn] : fn;
  }
  return merged;
}
