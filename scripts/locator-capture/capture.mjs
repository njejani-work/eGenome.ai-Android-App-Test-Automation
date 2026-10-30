#!/usr/bin/env node
// Locator capture for Android apps (Appium UiAutomator2 + WebdriverIO).
//
//   node scripts/locator-capture/capture.mjs watch [--attach]   capture screens while YOU navigate
//   node scripts/locator-capture/capture.mjs crawl [--attach]   let the script explore the app itself
//   node scripts/locator-capture/capture.mjs import <source.xml> [--name LoginScreen] [--activity .LoginActivity]
//   node scripts/locator-capture/capture.mjs list
//   node scripts/locator-capture/capture.mjs rename <OldScreen> <NewScreen>
//   node scripts/locator-capture/capture.mjs merge <IntoScreen> <FromScreen>
//   node scripts/locator-capture/capture.mjs pages              regenerate all page classes
//
// Output (in ./locators by default):
//   <Screen>.json            locators per element (primary + fallbacks + attributes)
//   pages/<Screen>.page.js   WebdriverIO page class   pages/BasePage.js
//   screenshots/<Screen>.png _screens.json (screen index + navigation map)
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import defaultConfig from './config.mjs';
import { Store } from './lib/store.mjs';
import { analyze } from './lib/parser.mjs';
import { detectFormat, writePage, writeAllPages } from './lib/pagegen.mjs';
import { connect, Capturer } from './lib/capture.mjs';
import { watch } from './lib/watch.mjs';
import { crawl } from './lib/crawl.mjs';

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i > -1 ? args[i + 1] : undefined;
};

async function loadConfig() {
  const custom = opt('config');
  if (!custom) return defaultConfig;
  const mod = await import(pathToFileURL(path.resolve(custom)).href);
  return mod.default;
}

function usage() {
  const src = fs.readFileSync(new URL(import.meta.url), 'utf8');
  console.log(src.split('\n').slice(1, 17).map((l) => l.replace(/^\/\/ ?/, '')).join('\n'));
}

async function main() {
  const config = await loadConfig();
  const store = new Store(config.outputDir, { threshold: config.screenMatchThreshold });
  const format = detectFormat(config.pageObjectFormat);

  switch (cmd) {
    case 'watch':
    case 'crawl': {
      const pkg = config.capabilities['appium:appPackage'];
      if (!pkg || pkg === 'com.example.app' /* placeholder */) {
        console.warn('  ! Set appium:appPackage in scripts/locator-capture/config.mjs (or APP_PACKAGE env var).');
        if (cmd === 'crawl') process.exit(1);
      }
      console.log(`  Connecting to Appium at ${config.appium.hostname}:${config.appium.port}${config.appium.path} ...`);
      const driver = await connect(config, { attach: flag('attach') });
      const capturer = new Capturer(driver, store, config, format);
      try {
        if (cmd === 'watch') await watch(capturer);
        else await crawl(capturer);
      } finally {
        // Ends the Appium session only; the app keeps running (dontStopAppOnReset)
        await driver.deleteSession().catch(() => {});
      }
      writeAllPages(store.dir, store, format); // refresh anchors now that all screens are known
      summary(store);
      break;
    }
    case 'import': {
      const file = args[1];
      if (!file) throw new Error('import needs a page source XML file');
      const xml = fs.readFileSync(file, 'utf8');
      const analysis = analyze(xml, {
        appPackage: config.capabilities['appium:appPackage'],
        ignorePackages: config.ignorePackages,
      });
      const activity = opt('activity') || '';
      const name =
        opt('name') || store.match(analysis, activity)?.name || store.suggestScreenName(analysis, activity);
      const { data, added, isNew } = store.save(name, analysis, { activity });
      writePage(store.dir, data, format);
      console.log(`  ${isNew ? '+ NEW' : '~'} ${name}: ${Object.keys(data.elements).length} elements (${added.length} new)`);
      break;
    }
    case 'list':
      summary(store);
      break;
    case 'rename':
      store.rename(args[1], args[2]);
      writePage(store.dir, store.load(args[2]), format);
      console.log(`  renamed ${args[1]} -> ${args[2]}`);
      break;
    case 'merge':
      writePage(store.dir, store.merge(args[1], args[2]), format);
      console.log(`  merged ${args[2]} into ${args[1]}`);
      break;
    case 'pages':
      console.log(writeAllPages(store.dir, store, format).map((f) => '  ' + path.relative(process.cwd(), f)).join('\n'));
      break;
    default:
      usage();
  }
}

function summary(store) {
  const screens = Object.entries(store.index.screens);
  console.log(`\n  ${screens.length} screen(s) in ${path.relative(process.cwd(), store.dir) || '.'}/`);
  for (const [n, s] of screens) console.log(`    ${n.padEnd(32)} ${String(s.elementCount).padStart(3)} elements  ${s.activity || ''}`);
}

main().catch((e) => {
  console.error(`  ✗ ${e.message}`);
  if (/ECONNREFUSED|connect/i.test(e.message)) console.error('    Is Appium running? Start it with: npx appium');
  process.exit(1);
});
