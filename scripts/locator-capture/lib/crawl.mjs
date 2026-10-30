// Crawl mode: explores the app by itself (depth-first), tapping elements and capturing each new screen.
import { sleep } from './capture.mjs';

const label = (e) => e.resourceId?.split(':id/').pop() || e.contentDesc || e.text?.slice(0, 30) || e.cls.split('.').pop();

export async function crawl(capturer, { log = console.log } = {}) {
  const { driver, store, config } = capturer;
  const cc = config.crawl;
  const appPackage = capturer.appPackage;
  const started = Date.now();
  const visited = new Map(); // screen -> Set(element key) already tapped there
  const globalNav = new Set(); // element keys that navigate the same way from anywhere (bottom nav, etc.)
  let actions = 0;
  let stopped = false;

  process.once('SIGINT', () => {
    stopped = true;
    log('\n  Stopping after current action...');
  });

  const outOfBudget = () =>
    stopped || actions >= cc.maxActions || Date.now() - started > cc.maxMinutes * 60_000;

  const settle = async () => {
    await sleep(cc.settleMs);
    return capturer.stableSnapshot();
  };

  const textOf = (e) => [e.resourceId, e.hint, e.text, e.contentDesc].join(' ');

  async function fillInputs(analysis) {
    for (const e of analysis.elements.filter((x) => x.input && x.enabled)) {
      if (e.text && e.text !== e.hint) continue; // already filled
      const rule = cc.inputs.find((r) => r.match.test(textOf(e)));
      if (!rule) continue;
      try {
        const el = await driver.$(e.locators[0].selector);
        await el.setValue(rule.value);
      } catch {}
    }
    try {
      if (await driver.isKeyboardShown()) await driver.hideKeyboard();
    } catch {}
  }

  async function tap(e) {
    for (const loc of e.locators) {
      try {
        const el = await driver.$(loc.selector);
        if (await el.isExisting()) {
          await el.click();
          return true;
        }
      } catch {}
    }
    return false;
  }

  // Tap "back / up / close / cancel" style elements last so the screen is explored first
  const LAST = /navigate up|\bback\b|close|cancel|dismiss|skip/i;
  function candidates(name, analysis) {
    const done = visited.get(name) || new Set();
    const list = analysis.elements.filter(
      (e) =>
        (e.clickable || e.checkable || e.longClickable) &&
        e.enabled &&
        !e.input &&
        !e.scrollable &&
        !done.has(e.key) &&
        !globalNav.has(e.key) &&
        !cc.denylist.test(textOf(e))
    );
    return list.sort((a, b) => LAST.test(textOf(a)) - LAST.test(textOf(b)));
  }

  async function relaunch() {
    try {
      await driver.terminateApp(appPackage);
    } catch {}
    await driver.activateApp(appPackage);
    return settle();
  }

  // Return to `target` screen: press back, and if that fails relaunch + replay the path.
  async function returnTo(target, path) {
    const here = await capturer.stableSnapshot();
    if (capturer.identify(here) === target) return here;
    for (let i = 0; i < 2; i++) {
      await driver.back();
      const snap = await settle();
      if (capturer.identify(snap) === target) return snap;
    }
    log(`    ↺ back didn't reach ${target}; relaunching and replaying ${path.length} step(s)`);
    let snap = await relaunch();
    for (const step of path) {
      await fillInputs(snap.analysis);
      const e = snap.analysis.elements.find((x) => x.key === step.key);
      if (!e || !(await tap(e))) return null;
      snap = await settle();
    }
    return capturer.identify(snap) === target ? snap : null;
  }

  async function explore(snap, path) {
    const r = await capturer.save(snap);
    const name = r.name;
    if (r.isNew) log(`${'  '.repeat(path.length)}+ ${name} (${r.elementCount} elements)`);
    else if (r.added.length) log(`${'  '.repeat(path.length)}~ ${name} +${r.added.length}`);
    if (path.length >= cc.maxDepth) return;
    if (!visited.has(name)) visited.set(name, new Set());

    while (!outOfBudget()) {
      const todo = candidates(name, snap.analysis);
      if (!todo.length) return;
      const e = todo[0];
      visited.get(name).add(e.key);

      await fillInputs(snap.analysis);
      if (!(await tap(e))) continue;
      actions++;
      let after = await settle();

      // Left the app (browser, dialer, system settings...)
      if (after.analysis.package && after.analysis.package !== appPackage) {
        log(`${'  '.repeat(path.length)}  ⤴ "${label(e)}" left the app; going back`);
        await driver.back();
        after = await settle();
        if (after.analysis.package !== appPackage) {
          await driver.activateApp(appPackage);
          after = await settle();
        }
      }

      const known = capturer.identify(after);
      const nextName = known || null;
      if (nextName === name) {
        // Same screen, maybe a new state (dialog closed, expanded section) - merge new elements
        const s = await capturer.save(after);
        if (s.added.length) log(`${'  '.repeat(path.length)}~ ${name} +${s.added.length} (after "${label(e)}")`);
        snap = after;
        continue;
      }

      const step = { key: e.key, label: label(e) };
      if (known && visited.has(known)) {
        // Already explored (or being explored up the stack): just merge any new elements
        await capturer.save(after, { screenshot: false });
        store.addTransition(name, known, step.label);
        globalNav.add(e.key); // e.g. bottom-nav tab / toolbar back: no need to tap it on every screen
      } else {
        await explore(after, [...path, step]);
        store.addTransition(name, capturer.identify(after) || 'unknown', step.label);
      }

      if (outOfBudget()) return;
      if (!candidates(name, snap.analysis).length) return; // nothing left here; caller navigates on
      const back = await returnTo(name, path);
      if (!back) {
        log(`${'  '.repeat(path.length)}  ✗ could not return to ${name}; skipping rest of it`);
        return;
      }
      snap = back;
    }
  }

  log(`  Crawling ${appPackage} (max depth ${cc.maxDepth}, ${cc.maxActions} actions, ${cc.maxMinutes} min). Ctrl+C to stop.\n`);
  const first = await capturer.stableSnapshot();
  await explore(first, []);
  log(`\n  Done: ${actions} actions, ${Object.keys(store.index.screens).length} screens in ${Math.round((Date.now() - started) / 1000)}s`);
}
