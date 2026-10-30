#!/usr/bin/env node
// Generates Layer 1 layout specs (test/layout/specs/<Name>.json) from the screens captured in locators/.
//
//   npm run layout:generate              create specs that don't exist yet (reviewed specs are never touched)
//   npm run layout:generate -- --force   regenerate unreviewed specs too
//   npm run layout:generate -- Login Otp only these specs
//
// Captures merge every state the tool saw on a screen (typed text, loaders, scrolled content), so only
// the FIRST snapshot of each capture is used (elements first seen within 2 s of the screen's first capture).
// For a cleaner baseline taken from the live app, use `npm run layout:baseline` instead.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);
const dotenv = (await import('dotenv')).default;
dotenv.config({ path: path.join(ROOT, '.env'), quiet: true });

const { treeFromCapture } = await imp('test/support/layout/hierarchy.js');
const { buildSpec } = await imp('test/support/layout/spec-builder.js');
const { SPECS_DIR, specPath, loadSpec, nameTokens } = await imp('test/support/layout/index.js');
const { CATALOG } = await imp('test/pageobjects/catalog.js');

/** spec name -> catalog page + capture (first viewport of the screen) */
export const SCREENS = [
  { spec: 'Onboarding', page: 'OnboardingPage', capture: 'MainScreen37' },
  { spec: 'Login', page: 'LoginPage', capture: 'MainScreen' },
  { spec: 'Otp', page: 'OtpPage', capture: 'MainScreen35' },
  { spec: 'Home', page: 'HomePage', capture: 'MainScreen2', scrollTop: true },
  { spec: 'SwitchProfile', page: 'SwitchProfileSheet', capture: 'MainScreen9' },
  { spec: 'MonthlyProgress', page: 'MonthlyProgressPage', capture: 'October2026Screen', scrollTop: true },
  { spec: 'Reports', page: 'ReportsPage', capture: 'MainScreen12', scrollTop: true },
  { spec: 'ReportDetail', page: 'ReportDetailPage', capture: 'MainScreen14', scrollTop: true },
  { spec: 'Premium', page: 'PremiumPage', capture: 'MainScreen13', scrollTop: true },
  { spec: 'Settings', page: 'SettingsPage', capture: 'MainScreen18', scrollTop: true },
  { spec: 'SignOutDialog', page: 'SettingsPage (sign out)', capture: 'MainScreen36' },
  { spec: 'Profile', page: 'ProfilePage', capture: 'MainScreen20', scrollTop: true },
  { spec: 'EditProfile', page: 'EditProfilePage', capture: 'MainScreen21', scrollTop: true },
  { spec: 'Addresses', page: 'AddressesPage', capture: 'MainScreen26' },
  { spec: 'Dependents', page: 'DependentsPage', capture: 'MainScreen27' },
  { spec: 'TransactionHistory', page: 'TransactionHistoryPage', capture: 'MainScreen29' },
];

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.filter((a) => !a.startsWith('--'));
const userNames = [process.env.TEST_USER_NAME, process.env.TEST_USER2_NAME, process.env.TEST_DEPENDENT_NAME].filter(Boolean);
const ts = (s) => Date.parse(s);

// Full-screen size from any capture's window root (dialogs/sheets only cover part of the screen)
function screenOf(tree) {
  const root = tree.all.find((e) => /action_bar_root$/.test(e.rid) && e.bounds.x1 === 0 && e.bounds.y1 === 0);
  return root ? { w: root.bounds.x2, h: root.bounds.y2 } : null;
}
let defaultScreen = null;
for (const f of fs.readdirSync(path.join(ROOT, 'locators')).filter((x) => x.endsWith('.json') && !x.startsWith('_'))) {
  try {
    const els = Object.values(JSON.parse(fs.readFileSync(path.join(ROOT, 'locators', f), 'utf8')).elements || {}).map((e) => e.attributes);
    defaultScreen = screenOf(treeFromCapture(els));
    if (defaultScreen) break;
  } catch {}
}

fs.mkdirSync(SPECS_DIR, { recursive: true });
let made = 0;
for (const s of SCREENS) {
  if (only.length && !only.includes(s.spec)) continue;
  const existing = loadSpec(s.spec);
  if (existing && (existing.reviewed || !force)) {
    console.log(`  = ${s.spec.padEnd(20)} kept (${existing.reviewed ? 'reviewed' : 'exists - use --force to regenerate'})`);
    continue;
  }
  const file = path.join(ROOT, 'locators', `${s.capture}.json`);
  if (!fs.existsSync(file)) { console.log(`  ! ${s.spec.padEnd(20)} capture ${s.capture} not found`); continue; }
  const cap = JSON.parse(fs.readFileSync(file, 'utf8'));
  const t0 = ts(cap.firstCaptured);
  const first = Object.entries(cap.elements)
    .filter(([, e]) => !e.firstSeen || ts(e.firstSeen) - t0 < 2000)
    .map(([name, e]) => ({ ...e.attributes, key: e.key, name }));
  const tree = treeFromCapture(first);
  const screen = screenOf(tree) || defaultScreen;
  if (!screen) { console.log(`  ! ${s.spec.padEnd(20)} screen size unknown`); continue; }
  const pageLocators = CATALOG.find((c) => c.page === s.page)?.locators || {};
  try {
    const spec = buildSpec(tree, screen, { spec: s.spec, page: s.page, source: `capture:${s.capture}`, scrollTop: s.scrollTop, userNames, nameTokens: nameTokens(), pageLocators, previous: existing });
    fs.writeFileSync(specPath(s.spec), `${JSON.stringify(spec, null, 2)}\n`);
    made++;
    console.log(`  + ${s.spec.padEnd(20)} ${String(Object.keys(spec.elements).length).padStart(3)} elements, ${String(spec.rules.length).padStart(3)} rules  (from ${s.capture}, ${screen.w}x${screen.h})`);
  } catch (e) {
    console.log(`  ! ${s.spec.padEnd(20)} ${e.message}`);
  }
}
console.log(`\n  ${made} spec(s) written to ${path.relative(process.cwd(), SPECS_DIR)}. Review them, then set "reviewed": true.\n`);
