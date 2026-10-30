#!/usr/bin/env node
// Accept the layout a dashboard run actually saw as the new baseline for one or more specs.
// Use it when a layout check failed but the screenshot shows the screen is correct
// (e.g. the spec was generated from a capture taken mid-scroll or in another state).
//
//   npm run layout:accept -- latest Home Premium     (specs that failed in the latest run)
//   npm run layout:accept -- 20261028-161906          (every spec that failed in that run)
//   npm run layout:accept -- latest --all            (every spec checked in the run, failed or not)
//   add --dry to only print what would change, --patch to only adjust the existing spec
//
// Runs save each checked screen's page source (reports/runs/<id>/layout/<Spec>.xml). When it's there the
// spec is REBUILT from it - every element on the screen, as the current builder sees it. Otherwise the
// existing spec is patched as described below.
//
// What it changes, per spec: element boxes that moved, enabled/clickable state that changed,
// and the relation rules (inside / order / gap) recomputed from the new boxes. Any other rule
// that failed (sameRow, align, centerX, noOverlap) is removed and listed. Text changes are
// NOT accepted automatically - they're printed so you can decide. The spec stays "reviewed": false.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '../..');
const RUNS = path.join(ROOT, 'reports', 'runs');
const SPECS = path.join(ROOT, 'test', 'layout', 'specs');

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const patchOnly = args.includes('--patch');
const all = args.includes('--all');
const [runArg = 'latest', ...only] = args.filter((a) => !a.startsWith('--'));
const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);
(await import('dotenv')).default.config({ path: path.join(ROOT, '.env'), quiet: true });
const runId = runArg === 'latest'
  ? fs.readdirSync(RUNS).filter((d) => fs.existsSync(path.join(RUNS, d, 'run.json'))).sort().pop()
  : runArg;
if (!runId) { console.error('No runs found in reports/runs'); process.exit(1); }
const run = JSON.parse(fs.readFileSync(path.join(RUNS, runId, 'run.json'), 'utf8'));

// Collect the last layout result per spec in this run
const layouts = new Map();
(function walk(o) {
  if (Array.isArray(o)) return o.forEach(walk);
  if (o && typeof o === 'object') {
    if (o.layout && o.layout.spec && o.layout.results) layouts.set(o.layout.spec, o.layout);
    Object.values(o).forEach(walk);
  }
})(run);

const r4 = (n) => Math.round(n * 10000) / 10000;
const targets = only.length ? only : [...layouts].filter(([, l]) => all || l.summary?.failed > 0).map(([n]) => n);
if (!targets.length) { console.log(`Run ${runId}: no failed layout checks to accept.`); process.exit(0); }

for (const name of targets) {
  const L = layouts.get(name);
  const file = path.join(SPECS, `${name}.json`);
  if (!L) { console.log(`- ${name}: not checked in run ${runId}, skipped`); continue; }
  if (!fs.existsSync(file)) { console.log(`- ${name}: no spec file, skipped`); continue; }
  if (L.aspectMatches === false) { console.log(`- ${name}: run used a different screen shape than the baseline, skipped`); continue; }
  const spec = JSON.parse(fs.readFileSync(file, 'utf8'));
  const xmlFile = path.join(RUNS, runId, 'layout', `${name}.xml`);
  if (!patchOnly && fs.existsSync(xmlFile)) {
    const { parseSource } = await imp('test/support/layout/hierarchy.js');
    const { buildSpec } = await imp('test/support/layout/spec-builder.js');
    const { nameTokens } = await imp('test/support/layout/index.js');
    const { CATALOG } = await imp('test/pageobjects/catalog.js');
    const tree = parseSource(fs.readFileSync(xmlFile, 'utf8'));
    const names = ['TEST_USER_NAME', 'TEST_USER2_NAME', 'TEST_DEPENDENT_NAME'].map((k) => process.env[k]).filter(Boolean);
    const built = buildSpec(tree, tree.screen, {
      spec: name, page: spec.page, source: `run:${runId}`, scrollTop: spec.scrollTop, userNames: names, nameTokens: nameTokens(),
      pageLocators: CATALOG.find((c) => c.page === spec.page)?.locators || {}, previous: spec,
    });
    const before = new Set(Object.keys(spec.elements)), after = Object.keys(built.elements);
    const added = after.filter((n) => !before.has(n));
    const kinds = Object.values(built.elements).reduce((k, e) => {
      const t = e.match?.leaf ? 'shapes' : e.icon ? 'icons' : e.dynamic ? 'live values' : 'fixed text/labels';
      k[t] = (k[t] || 0) + 1; return k;
    }, {});
    console.log(`\n${name}: rebuilt from the screen in run ${runId} - ${after.length} elements (was ${before.size}), ${built.rules.length} rules`);
    console.log(`  ${Object.entries(kinds).map(([k, v]) => `${v} ${k}`).join(', ')}`);
    const cal = built.rules.find((r) => r.type === 'calendarGrid');
    if (cal) console.log('  calendar grid: every day checked against its weekday column');
    if (added.length) console.log(`  new: ${added.slice(0, 25).join(', ')}${added.length > 25 ? ` … +${added.length - 25}` : ''}`);
    if (!dry) fs.writeFileSync(file, JSON.stringify(built, null, 2) + '\n');
    continue;
  }
  const changes = [];
  const actual = new Map(L.elements.filter((e) => e.actual).map((e) => [e.name, e.actual]));
  const boxOf = (n) => actual.get(n) || spec.elements[n]?.box;

  for (const res of L.results.filter((x) => x.status === 'failed')) {
    const el = spec.elements[res.target];
    if (res.type === 'box' && el && actual.get(res.target)) {
      const a = actual.get(res.target);
      for (const k of el.boxKeys || ['x', 'y', 'w', 'h']) el.box[k] = r4(a[k]);
      changes.push(`box ${res.target}: ${res.actual}`);
    } else if (res.type === 'state' && el) {
      el.enabled = !/disabled/.test(res.actual);
      el.clickable = !/not clickable/.test(res.actual);
      changes.push(`state ${res.target}: ${res.actual}`);
    } else if (res.type === 'text') {
      changes.push(`NOT accepted - text ${res.target}: "${res.actual}" (expected "${res.expected}"); edit the spec by hand if this is intended`);
    } else if (res.type === 'presence' || res.type === 'onScreen') {
      changes.push(`NOT accepted - ${res.message}`);
    }
  }

  // Rules: recompute inside / order / gap from the new boxes; drop other failed rules.
  const H = spec.baseline.h / spec.baseline.w; // height fraction -> width fraction
  const failedTargets = new Set(L.results.filter((x) => x.status === 'failed').map((x) => `${x.type}|${x.target}`));
  const rules = [];
  for (const r of spec.rules || []) {
    if (r.type === 'inside') {
      const c = boxOf(r.el), p = boxOf(r.parent), s = 2 / spec.baseline.w;
      const ok = c && p && c.x >= p.x - s && c.y >= p.y - s && c.x + c.w <= p.x + p.w + s && c.y + c.h <= p.y + p.h + s;
      if (ok) rules.push(r); else changes.push(`rule removed: ${r.el} inside ${r.parent}`);
    } else if (r.type === 'order') {
      const before = r.els.join(' → ');
      const els = [...r.els].sort((a, b) => (boxOf(a)?.y ?? 0) - (boxOf(b)?.y ?? 0));
      if (els.join(' → ') !== before) changes.push(`order: ${els.join(' → ')}`);
      rules.push({ ...r, els });
    } else if (r.type === 'gap') {
      let [a, b] = [boxOf(r.above), boxOf(r.below)];
      let rule = { ...r };
      if (a && b && b.y < a.y) { [a, b] = [b, a]; rule = { ...rule, above: r.below, below: r.above }; }
      if (!a || !b) { rules.push(r); continue; }
      const value = r4((b.y - (a.y + a.h)) * H);
      if (value < 0) { changes.push(`rule removed: gap ${r.above} ↕ ${r.below} (they overlap now)`); continue; }
      if (Math.abs(value - r.value) > 0.0001) changes.push(`gap ${rule.above} ↕ ${rule.below}: ${r4(r.value)} → ${value}`);
      rules.push({ ...rule, value });
    } else {
      const key = r.type === 'noOverlap' ? null : `${r.type}|${r.els ? r.els.join(', ') : r.el}`;
      const failed = r.type === 'noOverlap'
        ? L.results.some((x) => x.type === 'noOverlap' && x.status === 'failed')
        : [...failedTargets].some((t) => t.startsWith(`${r.type}|`) && (r.els || [r.el]).some((n) => t.includes(n)));
      if (failed) changes.push(`rule removed: ${r.type} ${key ? key.split('|')[1] : ''} (failed in this run)`);
      else rules.push(r);
    }
  }
  spec.rules = rules;
  spec.reviewed = false;
  spec.notes = [...(spec.notes || []), `Re-baselined from dashboard run ${runId} with layout:accept.`];

  console.log(`\n${name} (${changes.length} change${changes.length === 1 ? '' : 's'})`);
  for (const c of changes) console.log(`  - ${c}`);
  if (!dry) fs.writeFileSync(file, JSON.stringify(spec, null, 2) + '\n');
}
console.log(dry ? '\nDry run - nothing written.' : `\nSpecs updated from run ${runId}. Re-run the suite to confirm.`);
