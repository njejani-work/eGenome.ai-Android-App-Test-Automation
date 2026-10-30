// Turns raw run data (reports/runs/<id>/meta.json + workers/*.json) into what the dashboard reads:
//   reports/runs/<id>/run.json      full run (also handy for CI / other tools)
//   reports/data/runs/<id>.js       same, as a script the dashboard can load from file://
//   reports/data/index.js           list of runs + per-test history
//   reports/index.html              the dashboard
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TEMPLATE = path.join(path.dirname(fileURLToPath(import.meta.url)), 'template', 'index.html');
const ABORTED_AFTER_MS = 30 * 60 * 1000;

const readJson = (f, fallback = null) => {
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return fallback; }
};

function writeFile(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, file);
}

const asScript = (assign, data) => `${assign}${JSON.stringify(data)};\n`;

function totalsOf(tests) {
  // warnings: tests (not hooks) with at least one warning (they also count as passed/failed);
  // warningMessages: every warning raised in the run
  const t = { tests: 0, passed: 0, failed: 0, skipped: 0, warnings: 0, passedWithWarnings: 0, warningMessages: 0, steps: 0, stepsFailed: 0, stepsPassed: 0, stepsWarned: 0, layoutChecks: 0, layoutPassed: 0, layoutFailed: 0, layoutWarnings: 0, layoutSkipped: 0, hooks: 0, hooksFailed: 0 };
  for (const e of tests) {
    t.warningMessages += e.warnings || 0;
    if (e.type !== 'hook' && e.warnings) { t.warnings++; if (e.status === 'passed') t.passedWithWarnings++; }
    if (e.type === 'hook') {
      t.hooks++;
      if (e.status === 'failed') t.hooksFailed++;
    } else {
      t.tests++;
      if (e.status === 'passed') t.passed++;
      else if (e.status === 'failed') t.failed++;
      else if (e.status === 'skipped') t.skipped++;
    }
    t.steps += e.steps.length;
    t.stepsFailed += e.steps.filter((s) => s.status === 'failed').length;
    t.stepsPassed += e.steps.filter((s) => s.status === 'passed').length;
    t.stepsWarned += e.steps.filter((s) => s.warnings?.length).length;
    // layout checks (Layer 1): every individual check inside verifyLayout() steps
    for (const s of e.steps) {
      const L = s.layout?.summary;
      if (!L) continue;
      t.layoutChecks += L.total || 0;
      t.layoutPassed += L.passed || 0;
      t.layoutFailed += L.failed || 0;
      t.layoutWarnings += L.warnings || 0;
      t.layoutSkipped += L.skipped || 0;
    }
  }
  return t;
}

/** Merge meta + worker files for one run. Returns the run object. */
export function buildRun(reportsDir, runId) {
  const runDir = path.join(reportsDir, 'runs', runId);
  const meta = readJson(path.join(runDir, 'meta.json'), { id: runId, startedAt: Date.now() });
  const workersDir = path.join(runDir, 'workers');
  const workers = fs.existsSync(workersDir)
    ? fs.readdirSync(workersDir).filter((f) => f.endsWith('.json')).map((f) => readJson(path.join(workersDir, f))).filter(Boolean)
    : [];
  workers.sort((a, b) => a.cid.localeCompare(b.cid, undefined, { numeric: true }));

  const tests = workers.flatMap((w) => w.entries.map((e) => ({ ...e, cid: w.cid, warnings: (e.steps || []).reduce((n, st) => n + (st.warnings?.length || 0), 0) })));
  const totals = totalsOf(tests);
  const updatedAt = Math.max(meta.startedAt || 0, ...workers.map((w) => w.updatedAt || 0));

  let status;
  if (meta.finishedAt) status = totals.failed || totals.hooksFailed || meta.exitCode ? 'failed' : 'passed';
  else status = Date.now() - updatedAt > ABORTED_AFTER_MS ? 'aborted' : 'running';

  const run = {
    ...meta,
    status,
    updatedAt,
    durationMs: (meta.finishedAt || updatedAt) - meta.startedAt,
    device: workers.find((w) => w.device && Object.keys(w.device).length)?.device || meta.device || {},
    specs: [...new Set(workers.flatMap((w) => w.specs))],
    totals,
    tests,
  };
  writeFile(path.join(runDir, 'run.json'), JSON.stringify(run, null, 1));
  writeFile(path.join(reportsDir, 'data', 'runs', `${runId}.js`), asScript(`(window.DASHBOARD_RUNS=window.DASHBOARD_RUNS||{})[${JSON.stringify(runId)}]=`, run));
  return run;
}

function listRunIds(reportsDir) {
  const dir = path.join(reportsDir, 'runs');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((d) => fs.existsSync(path.join(dir, d, 'meta.json'))).sort().reverse();
}

/** Rebuild the run list + test history, delete runs beyond keepRuns. */
export function buildIndex(reportsDir, { keepRuns = 30, projectName = 'App Tests', rebuildRuns = false } = {}) {
  const ids = listRunIds(reportsDir);
  // Retention
  for (const old of ids.slice(keepRuns)) {
    try {
      fs.rmSync(path.join(reportsDir, 'runs', old), { recursive: true, force: true });
      fs.rmSync(path.join(reportsDir, 'data', 'runs', `${old}.js`), { force: true });
    } catch {}
  }
  const kept = ids.slice(0, keepRuns);
  const runs = [];
  const history = new Map(); // key -> {suite,title,results:[]}
  for (const id of kept) {
    let run = rebuildRuns ? null : readJson(path.join(reportsDir, 'runs', id, 'run.json'));
    if (!run || run.status === 'running') run = buildRun(reportsDir, id);
    runs.push({
      id: run.id, startedAt: run.startedAt, finishedAt: run.finishedAt, durationMs: run.durationMs, status: run.status,
      environment: run.environment, trigger: run.trigger, host: run.host, device: run.device, specs: run.specs, totals: run.totals,
    });
    for (const t of run.tests.filter((x) => x.type === 'test')) {
      const key = `${t.suite} › ${t.title}`;
      if (!history.has(key)) history.set(key, { key, suite: t.suite, title: t.title, file: t.file, results: [] });
      history.get(key).results.push({ runId: run.id, status: t.status, durationMs: t.durationMs, testId: t.id });
    }
  }
  const index = {
    projectName,
    generatedAt: Date.now(),
    runs,
    tests: [...history.values()].map((h) => ({ ...h, results: h.results.slice(0, 20) })),
  };
  writeFile(path.join(reportsDir, 'data', 'index.js'), asScript('window.DASHBOARD_INDEX=', index));
  // Tiny file the open dashboard polls to notice a run starting / finishing (works from file://)
  const head = runs[0] || {};
  writeFile(path.join(reportsDir, 'data', 'latest.js'), asScript('window.DASHBOARD_LATEST=', { id: head.id || null, status: head.status || null, finishedAt: head.finishedAt || null, generatedAt: index.generatedAt }));
  ensureTemplate(reportsDir);
  return index;
}

export function ensureTemplate(reportsDir) {
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.copyFileSync(TEMPLATE, path.join(reportsDir, 'index.html'));
}

/** Copy the dashboard with only the newest `count` runs into another folder (used for deliverables). */
export function exportSnapshot(reportsDir, outDir, { count = 5, projectName } = {}) {
  const ids = listRunIds(reportsDir).slice(0, count);
  for (const id of ids) {
    const src = path.join(reportsDir, 'runs', id);
    const dst = path.join(outDir, 'runs', id);
    fs.mkdirSync(dst, { recursive: true });
    for (const f of ['meta.json', 'run.json', 'run.log']) if (fs.existsSync(path.join(src, f))) fs.copyFileSync(path.join(src, f), path.join(dst, f));
    if (fs.existsSync(path.join(src, 'workers'))) fs.cpSync(path.join(src, 'workers'), path.join(dst, 'workers'), { recursive: true });
    if (fs.existsSync(path.join(src, 'screenshots'))) fs.cpSync(path.join(src, 'screenshots'), path.join(dst, 'screenshots'), { recursive: true });
  }
  buildIndex(outDir, { keepRuns: count, projectName, rebuildRuns: true });
  return ids;
}
