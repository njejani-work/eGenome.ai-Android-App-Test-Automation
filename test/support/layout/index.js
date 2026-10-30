// Layer 1 layout verification: text, state, proportional position/size and relations of every
// element on a screen, compared with a reviewed spec in test/layout/specs/<Name>.json.
//
// Use from a page object (recorded as a dashboard step):   await LoginPage.verifyLayout();
// Settings (.env):
//   LAYOUT_CHECKS=on     fail the test on layout differences (default)
//   LAYOUT_CHECKS=warn   record differences on the dashboard but don't fail
//   LAYOUT_CHECKS=off    skip layout checks
//   LAYOUT_UPDATE=true   re-baseline: write the spec from the current screen instead of checking
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSource } from './hierarchy.js';
import { buildSpec } from './spec-builder.js';
import { evaluate } from './check.js';
import { annotate, recorderState } from '../dashboard/recorder.js';

export const SPECS_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'layout', 'specs');
export const specPath = (name) => path.join(SPECS_DIR, `${name}.json`);

export function loadSpec(name) {
  try { return JSON.parse(fs.readFileSync(specPath(name), 'utf8')); } catch { return null; }
}

const NAME_VARS = ['TEST_USER_NAME', 'TEST_USER2_NAME', 'TEST_DEPENDENT_NAME'];
const userNames = () => NAME_VARS.map((k) => process.env[k]).filter(Boolean);
/** [['TEST_USER_NAME', 'John Doe'], ...] longest first - account names are stored in specs as {{TOKENS}} */
export const nameTokens = () => NAME_VARS.map((k) => [k, process.env[k]]).filter(([, v]) => v).sort((a, b) => b[1].length - a[1].length);

/** Keep the page source next to the run, so a spec can be rebuilt from it later (npm run layout:accept). */
function saveSource(name, xml) {
  try {
    if (!recorderState.runDir) return null;
    const dir = path.join(recorderState.runDir, 'layout');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${name}.xml`), xml);
    return `layout/${name}.xml`;
  } catch { return null; }
}

let dpiCache;
async function displayDensity() {
  if (dpiCache !== undefined) return dpiCache;
  try { dpiCache = Number(await driver.getDisplayDensity()) || null; } catch { dpiCache = null; }
  return dpiCache;
}

/** Page source once the UI stops changing (animations, loaders). */
async function stableSource(tries = 4) {
  let prev = await driver.getPageSource();
  for (let i = 0; i < tries; i++) {
    await driver.pause(350);
    const next = await driver.getPageSource();
    if (next === prev) return next;
    prev = next;
  }
  return prev;
}

async function pageLocatorsFor(pageName) {
  if (!pageName) return {};
  const { CATALOG } = await import('../../pageobjects/catalog.js');
  return CATALOG.find((c) => c.page === pageName)?.locators || {};
}

/**
 * Check (or, with LAYOUT_UPDATE=true, re-baseline) one screen.
 * @param {string} name   spec name, e.g. 'Login'
 * @param {{ page?: object }} opts  the page object (used to hide the keyboard / scroll to top)
 */
export async function checkLayout(name, { page } = {}) {
  const mode = (process.env.LAYOUT_CHECKS || 'on').toLowerCase();
  const update = process.env.LAYOUT_UPDATE === 'true';
  if (mode === 'off' && !update) return { skipped: true };
  if (!name) throw new Error('verifyLayout(): this page has no layout spec name');

  const spec = loadSpec(name);
  if (!spec && !update) {
    throw new Error(`No layout spec "${name}" (${path.relative(process.cwd(), specPath(name))}). Run npm run layout:generate, or npm run layout:baseline to record it from the device.`);
  }

  // Same conditions every time: keyboard hidden, scrolled to the top when the spec says so
  try { if (page?.hideKeyboard) await page.hideKeyboard(); } catch {}
  if (spec?.scrollTop && page?.scrollToTop) { try { await page.scrollToTop(); } catch {} }
  const xml = await stableSource();
  const sourceFile = saveSource(name, xml);
  const tree = parseSource(xml);

  if (update) {
    const pageName = spec?.page || page?.constructor?.name;
    const built = buildSpec(tree, tree.screen, {
      spec: name, page: pageName, source: 'device', scrollTop: spec?.scrollTop ?? false,
      userNames: userNames(), nameTokens: nameTokens(), pageLocators: await pageLocatorsFor(pageName), previous: spec,
    });
    fs.mkdirSync(SPECS_DIR, { recursive: true });
    fs.writeFileSync(specPath(name), `${JSON.stringify(built, null, 2)}\n`);
    annotate({ layout: { spec: name, updated: true, elements: Object.keys(built.elements).length, rules: built.rules.length } });
    return { updated: true, spec: built };
  }

  const result = evaluate(spec, tree, { dpi: await displayDensity() });
  const failed = result.results.filter((r) => r.status === 'failed');
  const warnings = result.results.filter((r) => r.status === 'warning');
  annotate({
    layout: {
      spec: name,
      source: sourceFile,
      reviewed: Boolean(spec.reviewed),
      mode,
      aspectMatches: result.aspectMatches,
      screen: result.screen,
      baseline: spec.baseline,
      summary: result.summary,
      // keep the report small: every failure/warning, plus passed/skipped rows without detail
      results: result.results.map((r) => (r.status === 'passed' ? { type: r.type, target: r.target, status: r.status } : r)),
      elements: result.elements,
    },
    warnings: warnings.map((w) => w.message),
  });

  if (failed.length && mode !== 'warn') {
    const lines = failed.slice(0, 12).map((f) => `  - ${f.message || `${f.type} ${f.target}`}`);
    if (failed.length > 12) lines.push(`  … and ${failed.length - 12} more`);
    throw new Error(`Layout "${name}": ${failed.length} of ${result.summary.total} checks failed${spec.reviewed ? '' : ' (spec not reviewed yet)'}\n${lines.join('\n')}`);
  }
  return result;
}
