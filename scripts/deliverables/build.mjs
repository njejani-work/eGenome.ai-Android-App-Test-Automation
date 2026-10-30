#!/usr/bin/env node
// Builds the tester hand-over package in ./deliverables (npm run deliverables).
// Everything is regenerated from the project, so re-run it after changing locators, page objects or specs.
//
//   node scripts/deliverables/build.mjs [--runs 5] [--out deliverables]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DOCS = path.join(ROOT, 'scripts', 'deliverables', 'docs');
const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : def;
};
const OUT = path.resolve(ROOT, arg('out', 'deliverables'));
const RUNS = Number(arg('runs', 5));

const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);
const dotenv = (await import('dotenv')).default;
dotenv.config({ path: path.join(ROOT, '.env'), quiet: true });

const { CATALOG } = await imp('test/pageobjects/catalog.js');
const { describeSelector } = await imp('test/support/dashboard/recorder.js');
const { exportSnapshot } = await imp('test/support/dashboard/builder.js');
const { options } = await imp('test/support/dashboard/options.js');

// ------------------------------------------------------------------ helpers
const SECTIONS = {
  start: '01-Getting-Started',
  locators: '02-Locators',
  pages: '03-Page-Objects',
  cases: '04-Test-Cases',
  data: '05-Test-Data',
  reports: '06-Execution-Reports',
  issues: '07-Known-Issues',
  tools: '08-Tools-and-How-To',
};
const out = (...p) => path.join(OUT, ...p);
const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };
const copy = (src, dst) => { if (fs.existsSync(src)) { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); return true; } return false; };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const PRIVATE_USE = /[\uE000-\uF8FF]|[\u{F0000}-\u{FFFFD}]/gu;
const glyphs = (s) => String(s).replace(PRIVATE_USE, (c) => `\\u${c.codePointAt(0).toString(16).toUpperCase()}`);
const hasGlyph = (s) => /[\uE000-\uF8FF]|[\u{F0000}-\u{FFFFD}]/u.test(String(s));
const csvCell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const csv = (rows) => `﻿${rows.map((r) => r.map(csvCell).join(',')).join('\r\n')}\r\n`; // BOM so Excel reads UTF-8
const today = new Date();
const stamp = today.toISOString().slice(0, 16).replace('T', ' ');
const mdEsc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

function strategyOf(sel) {
  const m = String(sel).match(/^android=new UiSelector\(\)\.(\w+)\(/);
  if (m) return { description: 'Accessibility label (exact)', descriptionContains: 'Accessibility label (contains)', descriptionStartsWith: 'Accessibility label (starts with)', descriptionMatches: 'Accessibility label (regex)', text: 'Text (exact)', textContains: 'Text (contains)', textStartsWith: 'Text (starts with)', textMatches: 'Text (regex)', resourceId: 'Resource ID', resourceIdMatches: 'Resource ID (regex)', className: 'Class + index' }[m[1]] || `UiSelector.${m[1]}`;
  if (String(sel).startsWith('//') || String(sel).startsWith('(//')) return 'XPath';
  if (String(sel).startsWith('~')) return 'Accessibility label (exact)';
  return 'Other';
}

/** key -> inline comment, for one `const NAME = {` block of a module. */
function blockNotes(moduleRel, block) {
  const src = fs.readFileSync(path.join(ROOT, 'test', 'pageobjects', moduleRel), 'utf8');
  const start = src.search(new RegExp(`(?:export\\s+)?const\\s+${block}\\s*=\\s*\\{`));
  if (start < 0) return {};
  const end = src.indexOf('\n};', start);
  const notes = {};
  let above = []; // full-line comments directly above an entry
  for (const line of src.slice(start, end).split('\n')) {
    const c = line.match(/^\s+\/\/\s*(.+)$/);
    if (c) { above.push(c[1].trim()); continue; }
    const k = line.match(/^\s{2}(\w+):/);
    if (!k) { above = []; continue; }
    const m = line.match(/,\s*\/\/\s*(.+)$/); // trailing comment after the entry's comma
    const note = [...above, m ? m[1].trim() : ''].filter(Boolean).join(' ');
    if (note) notes[k[1]] = note;
    above = [];
  }
  return notes;
}

/** Turn a selector map into rows; function selectors are shown as templates. */
function locatorRows(entry) {
  const notes = blockNotes(entry.module, entry.block);
  const rows = [];
  for (const [key, val] of Object.entries(entry.locators || {})) {
    let sel = val;
    let template = false;
    if (typeof val === 'function') {
      const params = (val.toString().match(/^\(?([^)=]*?)(?:\s*=[^)]*)?\)?\s*=>/) || [, ''])[1].split(',').map((p) => p.trim()).filter(Boolean);
      sel = val(...params.map((p) => `{${p}}`));
      sel = String(sel).replace(/\\{1,2}\{(\w+)\\{1,2}\}/g, '{$1}');
      template = true;
    }
    if (typeof sel !== 'string') continue;
    const flags = [];
    if (template) flags.push('Template - fill in {placeholders}');
    if (hasGlyph(sel)) flags.push('Icon glyph (fragile - ask devs for a testID)');
    if (/NOT CAPTURED|guess/i.test(notes[key] || '')) flags.push('NOT VERIFIED - not captured yet');
    if (/instance\(\d+\)|\)\[\d+\]$/.test(sel)) flags.push('Index-based');
    rows.push({
      page: entry.page, screen: entry.screen, area: entry.area, element: key,
      strategy: strategyOf(sel), selector: glyphs(sel), readable: describeSelector(sel),
      notes: [notes[key], ...flags].filter(Boolean).join(' · '), source: `test/pageobjects/${entry.module}`,
    });
  }
  return rows;
}

// ------------------------------------------------------------------ 02 Locators
function buildLocators() {
  const dir = out(SECTIONS.locators);
  const shotsSrc = path.join(ROOT, 'locators', 'screenshots');
  const all = [];
  const pages = CATALOG.map((entry) => {
    const rows = locatorRows(entry);
    all.push(...rows);
    const shots = [];
    entry.captures.forEach((cap, i) => {
      const name = `${entry.page.replace(/[^\w-]+/g, '-').replace(/-+$/, '')}${i ? `-${i + 1}` : ''}.png`;
      if (copy(path.join(shotsSrc, `${cap}.png`), path.join(dir, 'screenshots', name))) shots.push({ file: `screenshots/${name}`, capture: cap });
    });
    return { entry, rows, shots };
  });

  write(path.join(dir, 'locators.csv'), csv([
    ['Area', 'Screen', 'Page object', 'Element', 'Strategy', 'Selector (WebdriverIO)', 'Readable', 'Notes', 'Source file'],
    ...all.map((r) => [r.area, r.screen, r.page, r.element, r.strategy, r.selector, r.readable, r.notes, r.source]),
  ]));
  write(path.join(dir, 'locators.json'), JSON.stringify(pages.map(({ entry, rows, shots }) => ({
    page: entry.page, screen: entry.screen, area: entry.area, source: `test/pageobjects/${entry.module}`, captures: entry.captures, screenshots: shots.map((s) => s.file),
    elements: Object.fromEntries(rows.map((r) => [r.element, { strategy: r.strategy, selector: r.selector, readable: r.readable, notes: r.notes || undefined }])),
  })), null, 2));

  // Raw capture data (what the locator-capture tool recorded)
  const rawSrc = path.join(ROOT, 'locators');
  if (fs.existsSync(rawSrc)) {
    for (const f of fs.readdirSync(rawSrc).filter((x) => x.endsWith('.json'))) copy(path.join(rawSrc, f), path.join(dir, 'raw-capture', f));
  }

  const areas = [...new Set(CATALOG.map((e) => e.area))];
  const flagged = all.filter((r) => /NOT VERIFIED|Icon glyph|Index-based/.test(r.notes));
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Locator Catalogue</title>
<style>
:root{--bg:#f4f4f2;--s:#fcfcfb;--b:#e2e1dc;--t:#0b0b0b;--t2:#52514e;--m:#7a7974;--a:#2a78d6;--w:#b26b00;--code:#f0efec}
@media (prefers-color-scheme:dark){:root{--bg:#121211;--s:#1a1a19;--b:#34342f;--t:#f0efec;--t2:#c3c2b7;--m:#8f8e86;--a:#3987e5;--w:#fab219;--code:#242422}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--t);font:14px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:1240px;margin:0 auto;padding:24px 16px 60px}a{color:var(--a)}h1{margin:0 0 4px;font-size:22px}h2{font-size:17px;margin:32px 0 8px}h3{margin:0;font-size:15px}
.muted{color:var(--m)}.toc{display:flex;flex-wrap:wrap;gap:6px 14px;margin:14px 0 0;font-size:13px}
.card{background:var(--s);border:1px solid var(--b);border-radius:10px;margin-top:12px;overflow:hidden}
.head{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;padding:14px 16px;border-bottom:1px solid var(--b)}.head .src{margin-left:auto;font:12px ui-monospace,Menlo,Consolas,monospace;color:var(--m)}
.body{display:flex;gap:16px;padding:14px 16px}.shots{display:flex;gap:8px;flex:none;align-items:flex-start;flex-wrap:wrap;max-width:300px}
.shots a{display:block}.shots img{width:140px;border-radius:8px;border:1px solid var(--b);display:block}.shots span{display:block;font-size:11px;color:var(--m);text-align:center;margin-top:2px}
.tbl{overflow-x:auto;flex:1;min-width:0}table{width:100%;border-collapse:collapse}th{text-align:left;font-size:12px;color:var(--m);padding:6px 8px;border-bottom:1px solid var(--b);white-space:nowrap}
td{padding:7px 8px;border-bottom:1px solid var(--b);vertical-align:top}tr:last-child td{border-bottom:0}
code{font:12px ui-monospace,Menlo,Consolas,monospace;background:var(--code);padding:1px 5px;border-radius:4px;overflow-wrap:anywhere}
.el{font-weight:600;white-space:nowrap}.st{font-size:12px;color:var(--t2);white-space:nowrap}.rd{display:block;color:var(--t2);font-size:12px;margin-top:3px}.note{font-size:12px;color:var(--t2)}.flag{color:var(--w);font-weight:600}
input{border:1px solid var(--b);background:var(--s);color:var(--t);border-radius:8px;padding:7px 10px;font:inherit;width:100%;max-width:420px;margin-top:14px}
@media(max-width:760px){.body{flex-direction:column}.shots{max-width:none}.shots img{width:110px}}
</style></head><body><div class="wrap">
<h1>Locator Catalogue</h1>
<div class="muted">eGenome Android app · ${CATALOG.length} screens · ${all.length} locators · generated ${esc(stamp)} from <code>test/pageobjects</code></div>
<p class="note">Selectors are written for WebdriverIO (<code>$('…')</code>). <b>Readable</b> is a plain-English version. Templates contain <code>{placeholders}</code> that the page object fills in at runtime. ${flagged.length ? `<span class="flag">${flagged.length} locator(s) are flagged</span> - see the Notes column.` : ''}</p>
<input type="search" id="q" placeholder="Filter by screen, element or selector" aria-label="Filter locators">
<div class="toc">${areas.map((a) => `<span><b>${esc(a)}:</b> ${pages.filter((p) => p.entry.area === a).map((p) => `<a href="#${esc(p.entry.page.replace(/\W+/g, '-'))}">${esc(p.entry.screen)}</a>`).join(' · ')}</span>`).join('')}</div>
${areas.map((a) => `<h2>${esc(a)}</h2>${pages.filter((p) => p.entry.area === a).map(({ entry, rows, shots }) => `
<section class="card" id="${esc(entry.page.replace(/\W+/g, '-'))}" data-s="${esc(`${entry.page} ${entry.screen} ${rows.map((r) => `${r.element} ${r.selector}`).join(' ')}`.toLowerCase())}">
<div class="head"><h3>${esc(entry.screen)}</h3><span class="muted">${esc(entry.page)}</span><span class="src">test/pageobjects/${esc(entry.module)}</span></div>
<div class="body"><div class="shots">${shots.map((s) => `<a href="${esc(s.file)}" target="_blank"><img src="${esc(s.file)}" alt="${esc(entry.screen)}" loading="lazy"><span>${esc(s.capture)}</span></a>`).join('') || '<span class="muted">No screenshot</span>'}</div>
<div class="tbl"><table><thead><tr><th>Element</th><th>Strategy</th><th>Selector</th><th>Notes</th></tr></thead><tbody>
${rows.map((r) => `<tr><td class="el">${esc(r.element)}</td><td class="st">${esc(r.strategy)}</td><td><code>${esc(r.selector)}</code><span class="rd">${esc(r.readable)}</span></td><td class="note">${esc(r.notes).replace(/(NOT VERIFIED[^·]*|Icon glyph[^·]*|Index-based)/g, '<span class="flag">$1</span>')}</td></tr>`).join('')}
</tbody></table></div></div></section>`).join('')}`).join('')}
</div><script>
document.getElementById('q').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('section.card').forEach(s=>{s.style.display=!q||s.dataset.s.includes(q)?'':'none'})});
</script></body></html>`;
  write(path.join(dir, 'Locator-Catalog.html'), html);

  // Layer 1 layout specs (expected text / proportional boxes / relations per screen)
  const specDir = path.join(ROOT, 'test', 'layout', 'specs');
  const specs = fs.existsSync(specDir) ? fs.readdirSync(specDir).filter((f) => f.endsWith('.json')).sort() : [];
  let lmd = `# Layout specs (Layer 1)\n\nGenerated ${stamp}. Each JSON file in \`layout-specs/\` describes one screen: the expected text of every element, its position and size as a **share of the screen** (x/y/w/h, 0-1), and relations: order top to bottom, same row, left/right alignment, centring, inside-a-button, spacing, no overlap. Tests check them with \`<Page>.verifyLayout()\`; results appear on the dashboard (click a step's screenshot to see expected vs actual boxes).\n\n| Screen spec | Page object | Elements | Rules | Reviewed | Source |\n|---|---|---|---|---|---|\n`;
  for (const f of specs) {
    try {
      const sp = JSON.parse(fs.readFileSync(path.join(specDir, f), 'utf8'));
      copy(path.join(specDir, f), path.join(dir, 'layout-specs', f));
      lmd += `| ${sp.spec} | ${sp.page} | ${Object.keys(sp.elements).length} | ${sp.rules.length} | ${sp.reviewed ? 'yes' : '**no**'} | ${sp.source} |\n`;
    } catch {}
  }
  lmd += `\nTolerances (per spec, \`tolerance\`): position ±2% of screen, size ±3%, alignment ±1.2% of width, centring ±1.5%, spacing ±2.5% of width. Absolute positions are only compared on screens with the baseline's aspect ratio; on other screen shapes only the relations are checked.\n\n**Reviewing a spec:** compare it with the design and the screenshot in \`screenshots/\`, fix values, remove checks that shouldn't apply (delete them from an element's \`checks\`, or add the element name to \`ignore\`), then set \`"reviewed": true\` in the project's \`test/layout/specs/<Screen>.json\`.\n`;
  write(path.join(dir, 'Layout-Specs.md'), lmd);
  copy(path.join(DOCS, 'locators-README.md'), path.join(dir, 'README.md'));
  return { count: all.length, screens: CATALOG.length, flagged: flagged.length };
}

// ------------------------------------------------------------------ 03 Page objects
function parseClasses(src) {
  const classes = [];
  const re = /class\s+(\w+)\s+extends\s+BasePage\s*\{/g;
  for (let m; (m = re.exec(src)); ) {
    let depth = 0, i = m.index + m[0].length - 1;
    for (; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}' && --depth === 0) break;
    }
    const body = src.slice(m.index + m[0].length, i);
    const lines = body.split('\n');
    const members = [];
    let doc = [];
    for (let k = 0; k < lines.length; k++) {
      const line = lines[k];
      const one = line.match(/^ {2}\/\*\*\s*(.*?)\s*\*\/\s*$/);
      if (one) { doc = [one[1]]; continue; }
      if (/^ {2}\/\*\*/.test(line)) {
        doc = [];
        for (; k < lines.length && !lines[k].includes('*/'); k++) {
          const t = lines[k].replace(/^\s*\/?\*+\s?/, '').trim();
          if (t) doc.push(t);
        }
        continue;
      }
      const sig = line.match(/^ {2}(async\s+)?(get\s+)?(\w+)\s*\(([^)]*)\)\s*\{/);
      if (sig && sig[3] !== 'constructor' && sig[3] !== 'anchors') {
        members.push({ name: sig[3], getter: Boolean(sig[2]), async: Boolean(sig[1]), params: sig[4].trim(), doc: doc.join(' ') });
      }
      if (line.trim() && !/^ {2}\/\//.test(line)) doc = sig ? [] : doc;
    }
    classes.push({ name: m[1], members });
  }
  return classes;
}

function buildPageObjects() {
  const dir = out(SECTIONS.pages);
  const files = ['components/BottomNav.js', 'components/SystemDialogs.js', 'OnboardingPage.js', 'LoginPage.js', 'OtpPage.js', 'HomePage.js', 'SwitchProfileSheet.js', 'MonthlyProgressPage.js', 'ReportsPage.js', 'ReportDetailPage.js', 'PremiumPage.js', 'RazorpayCheckoutPage.js', 'SettingsPage.js', 'ProfilePage.js', 'EditProfilePage.js', 'AddressesPage.js', 'DependentsPage.js', 'AccountPages.js'];
  const base = parseClasses(fs.readFileSync(path.join(ROOT, 'test/pageobjects/BasePage.js'), 'utf8').replace('export default class BasePage {', 'class BasePage extends BasePage {'));
  let md = `# Page Object Reference\n\nGenerated ${stamp} from \`test/pageobjects/\`. Import page objects in specs from \`test/pageobjects/index.js\`:\n\n\`\`\`js\nimport { LoginPage, HomePage, SettingsPage, MENU } from '../pageobjects/index.js';\n\`\`\`\n\nEvery call to an **action** (async method) from a spec is logged as a step on the dashboard, with a screenshot. **Elements** are WebdriverIO element getters, for example \`await expect(LoginPage.sendOtpBtn).toBeDisplayed()\`.\n\n## Contents\n\n`;
  const sections = [];
  let methodCount = 0;
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, 'test/pageobjects', f), 'utf8');
    const header = (src.match(/^\/\/ (Captured as:.*)$/m) || [, ''])[1];
    for (const c of parseClasses(src)) {
      const getters = c.members.filter((x) => x.getter);
      const methods = c.members.filter((x) => !x.getter);
      methodCount += methods.length;
      md += `- [${c.name}](#${c.name.toLowerCase()})\n`;
      sections.push(`## ${c.name}\n\nSource: \`test/pageobjects/${f}\`${header ? `  \n${header}` : ''}\n\n` +
        (methods.length ? `**Actions**\n\n| Method | Description |\n|---|---|\n${methods.map((x) => `| \`${x.async ? 'await ' : ''}${c.name}.${x.name}(${mdEsc(x.params)})\` | ${mdEsc(x.doc) || ''} |`).join('\n')}\n\n` : '') +
        (getters.length ? `**Elements**\n\n${getters.map((x) => `\`${x.name}\``).join(', ')}\n\n` : ''));
    }
  }
  md += `- [BasePage (inherited by all)](#basepage-inherited-by-all)\n\n${sections.join('')}`;
  const b = base[0];
  if (b) md += `## BasePage (inherited by all)\n\nSource: \`test/pageobjects/BasePage.js\`. These helpers are available on every page object.\n\n| Method | Description |\n|---|---|\n${b.members.filter((x) => !x.getter).map((x) => `| \`${x.name}(${mdEsc(x.params)})\` | ${mdEsc(x.doc)} |`).join('\n')}\n\n### Selector helpers (\`S\`)\n\n| Helper | Matches |\n|---|---|\n| \`S.desc(t)\` | accessibility label equals t |\n| \`S.descContains(t)\` / \`S.descStarts(t)\` / \`S.descMatches(re)\` | label contains / starts with / matches regex |\n| \`S.text(t)\` / \`S.textContains(t)\` / \`S.textStarts(t)\` / \`S.textMatches(re)\` | visible text |\n| \`S.id(id)\` / \`S.idMatches(re)\` | resource-id |\n| \`S.cls(className, n)\` | n-th element of a class |\n| \`S.fieldAfter(label, n)\` | n-th input after a caption |\n| \`S.textAfter(label, n)\` | n-th text after a caption |\n| \`S.clickableAfter(label, n)\` | n-th tappable element after a caption |\n`;
  write(path.join(dir, 'Page-Object-Reference.md'), md);
  return { methods: methodCount };
}

// ------------------------------------------------------------------ 04 Test cases
function latestRuns() {
  const dir = path.join(options.reportsDir, 'runs');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).sort().reverse().map((id) => {
    try { return JSON.parse(fs.readFileSync(path.join(dir, id, 'run.json'), 'utf8')); } catch { return null; }
  }).filter((r) => r && r.status !== 'running');
}

function buildTestCases(runs) {
  const dir = out(SECTIONS.cases);
  const specDir = path.join(ROOT, 'test', 'specs');
  const walk = (d) => (fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? (e.name.startsWith('_') ? [] : walk(path.join(d, e.name))) : e.name.endsWith('.js') ? [path.join(d, e.name)] : [])) : []);
  const files = walk(specDir).sort();
  const SUITE_ORDER = ['smoke', 'regression', 'layout', 'extended'];
  files.sort((a, b) => SUITE_ORDER.indexOf(path.basename(path.dirname(a))) - SUITE_ORDER.indexOf(path.basename(path.dirname(b))) || a.localeCompare(b));
  const cases = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    const suiteName = path.basename(path.dirname(file)) === 'specs' ? 'other' : path.basename(path.dirname(file));
    const src = fs.readFileSync(file, 'utf8');
    const lines = src.split('\n');
    const prefix = path.basename(file).replace(/\.(e2e|spec|test)?\.?js$/, '').replace(/^\d+-/, '').replace(/\W+/g, '-').toUpperCase();
    let describeTitle = '';
    let n = 0;
    const its = [];
    lines.forEach((line, i) => {
      const d = line.match(/\bdescribe\(\s*(['"`])(.+?)\1/);
      if (d) describeTitle = d[2];
      const t = line.match(/\bit(\.skip)?\(\s*(['"`])((?:\\.|(?!\2).)+)\2/);
      if (t) its.push({ i, pending: Boolean(t[1]), raw: t[3].replace(/\\'/g, "'"), suite: describeTitle });
    });
    its.forEach((it, k) => {
      n++;
      const body = lines.slice(it.i, k + 1 < its.length ? its[k + 1].i : lines.length).join('\n');
      const id = (it.raw.match(/^([A-Z]{3}-\d{2,3})\b/) || [, `TC-${prefix}-${String(n).padStart(2, '0')}`])[1];
      const priority = (it.raw.match(/\[(P\d)\]/) || [, ''])[1];
      const needs = (it.raw.match(/\[needs: ([^\]]+)\]/) || [, ''])[1];
      const title = it.raw.replace(/^[A-Z]{3}-\d{2,3}\s*/, '').replace(/\[P\d\]\s*/, '').replace(/\s*\[needs: [^\]]+\]/, '').trim();
      const layoutChecks = [...body.matchAll(/(\w+)\.verify(SignOut)?Layout\(/g)].map((m) => (m[2] ? 'SignOutDialog' : m[1].replace(/Page$|Sheet$/, '')));
      let last = null;
      const hits = [];
      for (const r of runs) {
        const hit = r.tests.find((x) => x.type === 'test' && x.title === it.raw && x.suite === it.suite);
        if (hit) { hits.push(hit); if (!last) last = { run: r, test: hit }; }
      }
      cases.push({
        id, suiteName, priority, suite: it.suite, title, needs, pending: it.pending, file: rel, line: it.i + 1,
        layout: [...new Set(layoutChecks)].join(', '),
        expected: title.charAt(0).toUpperCase() + title.slice(1),
        steps: last ? last.test.steps.map((s) => `${s.n}. ${s.title}`) : [],
        lastStatus: it.pending ? 'pending' : last ? last.test.status : 'not run yet',
        lastRun: last ? last.run.id : '',
        duration: last ? `${(last.test.durationMs / 1000).toFixed(1)} s` : '',
        passRate: hits.length ? `${hits.filter((x) => x.status === 'passed').length}/${hits.length}` : '',
      });
    });
  }
  write(path.join(dir, 'Test-Cases.csv'), csv([
    ['ID', 'Test suite', 'Priority', 'Area', 'Test case', 'Expected result', 'Layout checks (Layer 1)', 'Automated', 'Prerequisite', 'Automated steps (latest run)', 'Spec file', 'Line', 'Last status', 'Last run', 'Duration', 'Passed (kept runs)'],
    ...cases.map((c) => [c.id, c.suiteName, c.priority, c.suite, c.title, c.expected, c.layout, c.pending ? 'Pending' : 'Yes', c.needs, c.steps.join('\n'), c.file, c.line, c.lastStatus, c.lastRun, c.duration, c.passRate]),
  ]));
  const bySuite = (name) => cases.filter((c) => c.suiteName === name);
  const suites = [...new Set(cases.map((c) => c.suiteName))];
  let md = `# Test Cases\n\nGenerated ${stamp} from \`test/specs/\`${runs.length ? ` and the latest ${runs.length} run(s) in \`reports/\`` : ''}. Open \`Test-Cases.csv\` in Excel for a sortable sheet.\n\n`;
  md += `| Suite | Automated | Pending | With layout checks | Command |\n|---|---|---|---|---|\n${suites.map((sn) => { const c = bySuite(sn); return `| ${sn} | ${c.filter((x) => !x.pending).length} | ${c.filter((x) => x.pending).length} | ${c.filter((x) => x.layout).length} | \`npm run test:${sn}\` |`; }).join('\n')}\n\n`;
  for (const sn of suites) {
    md += `## ${sn.charAt(0).toUpperCase() + sn.slice(1)}\n\n| ID | P | Area | Test case | Layout | Status |\n|---|---|---|---|---|---|\n`;
    md += bySuite(sn).map((c) => `| ${c.id} | ${c.priority} | ${mdEsc(c.suite)} | ${mdEsc(c.title)}${c.needs ? ` _(needs: ${mdEsc(c.needs)})_` : ''} | ${c.layout} | ${c.lastStatus}${c.lastRun ? ` (${c.lastRun})` : ''} |`).join('\n');
    md += '\n\n';
  }
  md += '## Details\n\n';
  for (const c of cases.filter((x) => !x.pending)) {
    md += `### ${c.id} - ${c.title}\n\n- **Suite:** ${c.suiteName} · ${c.suite}${c.priority ? ` · ${c.priority}` : ''}\n- **Spec:** \`${c.file}\` (line ${c.line})\n- **Expected result:** ${c.expected}\n${c.layout ? `- **Layout checks:** ${c.layout}\n` : ''}- **Last status:** ${c.lastStatus}${c.lastRun ? ` (run ${c.lastRun}, ${c.duration})` : ''}\n\n${c.steps.length ? `**Steps (as automated, from the latest run):**\n\n${c.steps.join('  \n')}\n\n` : '_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._\n\n'}`;
  }
  write(path.join(dir, 'Test-Cases.md'), md);
  return { count: cases.length, automated: cases.filter((c) => !c.pending).length, pending: cases.filter((c) => c.pending).length };
}

// ------------------------------------------------------------------ 06 Reports
function buildReports(runs) {
  const dir = out(SECTIONS.reports);
  const ids = exportSnapshot(options.reportsDir, path.join(dir, 'dashboard'), { count: RUNS, projectName: options.projectName });
  copy(path.join(DOCS, 'dashboard-guide.md'), path.join(dir, 'HOW-TO-READ-THE-DASHBOARD.md'));
  const r = runs[0];
  let md = `# Latest Run Summary\n\nGenerated ${stamp}. The full interactive report is in \`dashboard/index.html\`. It contains the newest ${ids.length} run(s), with step-by-step screenshots.\n\n`;
  if (!r) {
    md += '_No finished runs found in `reports/`. Run `npm run wdio`, then `npm run deliverables` again._\n';
  } else {
    const t = r.totals;
    md += `| | |\n|---|---|\n| Run | \`${r.id}\` |\n| Started | ${new Date(r.startedAt).toLocaleString()} |\n| Duration | ${(r.durationMs / 1000).toFixed(1)} s |\n| Result | **${r.status.toUpperCase()}** - ${t.passed} passed, ${t.failed} failed, ${t.skipped} skipped |\n| Steps | ${t.steps} (${t.stepsFailed} failed) |\n| Device | ${[r.device?.manufacturer, r.device?.model || r.device?.name].filter(Boolean).join(' ')} · Android ${r.device?.platformVersion || '?'} |\n| Environment | ${r.environment || ''} |\n\n`;
    const failed = r.tests.filter((x) => x.status === 'failed');
    md += failed.length ? '## Failures\n\n' : '## Failures\n\nNone - all tests passed.\n';
    for (const x of failed) {
      const s = x.steps.find((y) => y.status === 'failed');
      const shot = s?.screenshot || x.failureScreenshot;
      md += `### ${x.title}\n\n- Suite: ${x.suite}\n- Failed at: ${s ? `step ${s.n} - ${s.title} (\`${s.call || ''}\`)` : 'test body / hook'}\n- Error: \`${mdEsc((s?.error || x.error)?.message?.split('\n')[0] || '')}\`\n${shot ? `- Screenshot: [${shot}](dashboard/${shot})\n` : ''}\n`;
    }
  }
  write(path.join(dir, 'Latest-Run-Summary.md'), md);
  return { runs: ids.length };
}

// ------------------------------------------------------------------ static sections
function buildStatic() {
  copy(path.join(DOCS, 'setup-guide.md'), out(SECTIONS.start, 'SETUP-GUIDE.md'));
  copy(path.join(ROOT, 'README.md'), out(SECTIONS.start, 'PROJECT-README.md'));
  copy(path.join(ROOT, '.env.example'), out(SECTIONS.start, 'env.example.txt'));
  copy(path.join(DOCS, 'test-data.md'), out(SECTIONS.data, 'TEST-DATA.md'));
  copy(path.join(ROOT, '.env.example'), out(SECTIONS.data, 'env.example.txt'));
  copy(path.join(DOCS, 'known-issues.md'), out(SECTIONS.issues, 'KNOWN-ISSUES.md'));
  copy(path.join(ROOT, 'scripts', 'locator-capture', 'README.md'), out(SECTIONS.tools, 'LOCATOR-CAPTURE-GUIDE.md'));
  copy(path.join(DOCS, 'how-to.md'), out(SECTIONS.tools, 'HOW-TO.md'));
}

// ------------------------------------------------------------------ main
fs.mkdirSync(OUT, { recursive: true });
const runs = latestRuns();
buildStatic();
const loc = buildLocators();
const po = buildPageObjects();
const tc = buildTestCases(runs);
const rep = buildReports(runs);

const index = fs.readFileSync(path.join(DOCS, 'index.md'), 'utf8')
  .replace('{{GENERATED}}', stamp)
  .replace('{{STATS}}', [
    `- **${loc.screens}** screens and **${loc.count}** locators documented${loc.flagged ? `, ${loc.flagged} of them flagged for attention` : ''}`,
    `- **${po.methods}** page-object actions`,
    `- **${tc.automated}** automated test cases (+${tc.pending} pending, listed with their prerequisites)`,
    `- **${rep.runs}** recent run(s) in the dashboard snapshot${runs[0] ? `. Latest: \`${runs[0].id}\` - ${runs[0].status}, ${runs[0].totals.passed}/${runs[0].totals.tests} passed` : ''}`,
  ].join('\n'));
write(out('README.md'), index);

console.log(`\n  Deliverables written to ${path.relative(process.cwd(), OUT) || OUT}/`);
console.log(`   ${loc.screens} screens / ${loc.count} locators · ${po.methods} page-object actions · ${tc.automated} automated + ${tc.pending} pending test cases · ${rep.runs} run(s) in dashboard snapshot\n`);
