// Base class + selector helpers for the eGenome Android app (React Native, UiAutomator2).
//
// Why not the raw generated locators? The app is React Native: almost nothing has a
// resource-id, and accessibility labels (content-desc) often embed icon-font glyphs and
// live data, e.g. "\uEAE8, Transaction History, \uEB3C" or "John Doe, Self, ...".
// The page models below use the captured labels with *partial* matching
// (descriptionContains / descriptionMatches), which survives data and icon changes.

import { logAction } from '../support/dashboard/recorder.js';

const q = (s) => JSON.stringify(String(s));

/**
 * Rewrites a regex so it contains no backslashes (\d -> [0-9], \. -> [.], \+ -> [+] ...).
 * Backslashes inside a UiSelector string get doubled on the way to the device, which turns
 * "\d" into "a literal backslash, then d" - so every *Matches selector with a backslash
 * silently never matched. Character classes mean the same thing without any escaping.
 */
export function noBackslash(pattern) {
  const p = String(pattern);
  let out = '';
  let inClass = false;
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    if (c === '\\' && i + 1 < p.length) {
      const n = p[++i];
      if (n === 'd') out += inClass ? '0-9' : '[0-9]';
      else if (/[A-Za-z0-9]/.test(n) || ']^\\-'.includes(n)) out += c + n; // no class equivalent; left as is
      else out += inClass ? n : `[${n}]`;
      continue;
    }
    if (c === '[' && !inClass) {
      inClass = true;
      out += c;
      if (p[i + 1] === '^') out += p[++i];
      if (p[i + 1] === ']') out += p[++i];
      continue;
    }
    if (c === ']' && inClass) inClass = false;
    out += c;
  }
  return out;
}
const qre = (s) => q(noBackslash(s));
const lit = (s) => (String(s).includes('"') ? `'${s}'` : `"${s}"`);

/** Selector builders (strings usable with $ / $$). */
export const S = {
  desc: (s) => `android=new UiSelector().description(${q(s)})`,
  descContains: (s) => `android=new UiSelector().descriptionContains(${q(s)})`,
  descStarts: (s) => `android=new UiSelector().descriptionStartsWith(${q(s)})`,
  descMatches: (re) => `android=new UiSelector().descriptionMatches(${qre(re)})`,
  text: (s) => `android=new UiSelector().text(${q(s)})`,
  textContains: (s) => `android=new UiSelector().textContains(${q(s)})`,
  textStarts: (s) => `android=new UiSelector().textStartsWith(${q(s)})`,
  textMatches: (re) => `android=new UiSelector().textMatches(${qre(re)})`,
  id: (rid) => `android=new UiSelector().resourceId(${q(rid)})`,
  idMatches: (re) => `android=new UiSelector().resourceIdMatches(${qre(re)})`,
  cls: (cls, instance = 0) => `android=new UiSelector().className(${q(cls)}).instance(${instance})`,
  /** n-th EditText after a visible label, e.g. fieldAfter('FIRST NAME') */
  fieldAfter: (label, n = 1) => `//*[starts-with(@text, ${lit(label)})]/following::android.widget.EditText[${n}]`,
  /** n-th clickable element after a visible label */
  clickableAfter: (label, n = 1) => `//*[starts-with(@text, ${lit(label)})]/following::*[@clickable="true"][${n}]`,
  /** n-th TextView after a visible label (read a value next to its caption) */
  textAfter: (label, n = 1) => `//*[starts-with(@text, ${lit(label)})]/following::android.widget.TextView[normalize-space(@text) != ''][${n}]`,
};

/** Escape a string for use inside descriptionMatches / textMatches (Java regex). */
export const re = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default class BasePage {
  /** Selectors that identify the screen; any one of them being displayed = screen is open. */
  get anchors() {
    return [];
  }

  get name() {
    return this.constructor.name;
  }

  /** Layout spec name in test/layout/specs (null = no layout spec for this screen). */
  get layoutSpec() {
    return null;
  }

  /**
   * Layer 1 layout check: text, state, proportional position/size and relations of the
   * screen's elements against test/layout/specs/<name>.json. See test/support/layout.
   */
  async verifyLayout(name = this.layoutSpec) {
    const { checkLayout } = await import('../support/layout/index.js');
    return checkLayout(name, { page: this });
  }

  async isOpen(timeout = 0) {
    try {
      await driver.waitUntil(() => this.#anyAnchorDisplayed(), { timeout: Math.max(timeout, 1), interval: 250 });
      return true;
    } catch {
      return false;
    }
  }

  async waitForOpen(timeout = 20000) {
    logAction('wait for screen', this.name);
    await driver.waitUntil(() => this.#anyAnchorDisplayed(), {
      timeout,
      interval: 300,
      timeoutMsg: `${this.name} did not open within ${timeout}ms`,
    });
    return this;
  }

  async #anyAnchorDisplayed() {
    for (const sel of this.anchors) {
      const el = await $(sel);
      if ((await el.isExisting()) && (await el.isDisplayed())) return true;
    }
    return false;
  }

  async exists(sel) {
    return (await $(sel)).isExisting();
  }

  /** Tap an element; scrolls vertically to it first when `scroll` is true. */
  async tap(sel, { scroll = false, timeout = 10000 } = {}) {
    logAction('tap', sel);
    if (scroll) await this.scrollTo(sel);
    const el = await $(sel);
    await el.waitForDisplayed({ timeout, timeoutMsg: `${this.name}: not displayed: ${sel}` });
    await el.click();
  }

  async type(sel, value, { scroll = false, clear = true } = {}) {
    logAction('type', sel, value);
    if (scroll) await this.scrollTo(sel);
    const el = await $(sel);
    await el.waitForDisplayed({ timeoutMsg: `${this.name}: input not displayed: ${sel}` });
    if (clear) await el.clearValue().catch(() => {});
    await el.setValue(String(value));
    await this.hideKeyboard();
  }

  async textOf(sel) {
    const el = await $(sel);
    await el.waitForExist();
    return el.getText();
  }

  async descOf(sel) {
    const el = await $(sel);
    await el.waitForExist();
    return el.getAttribute('content-desc');
  }

  /**
   * Scroll the main content until `sel` is displayed.
   * direction: 'down' reveals content further down the page, 'up' goes back to the top.
   */
  async scrollTo(sel, { direction = 'down', maxScrolls = 10, area } = {}) {
    logAction(`scroll ${direction} to`, sel);
    for (let i = 0; i <= maxScrolls; i++) {
      const el = await $(sel);
      if ((await el.isExisting()) && (await el.isDisplayed())) return el;
      if (i === maxScrolls) break;
      const canScroll = await driver.execute('mobile: scrollGesture', {
        ...(area || (await this.#contentArea())),
        direction,
        percent: 0.7,
      });
      if (!canScroll) {
        // Reached the end: one last look, then try the other direction once
        const last = await $(sel);
        if (await last.isExisting()) return last;
        if (direction === 'down') return this.scrollTo(sel, { direction: 'up', maxScrolls, area });
        break;
      }
    }
    throw new Error(`${this.name}: could not scroll to ${sel}`);
  }

  async scrollToTop() {
    const area = await this.#contentArea();
    for (let i = 0; i < 10; i++) {
      const more = await driver.execute('mobile: scrollGesture', { ...area, direction: 'up', percent: 1 });
      if (!more) break;
    }
  }

  /** Swipe a horizontal strip (tab bar, chips) until `sel` is displayed. `rowSel` is any visible element in that strip. */
  async swipeRowTo(sel, rowSel, { maxSwipes = 6 } = {}) {
    logAction('swipe to', sel);
    for (const direction of ['left', 'right']) {
      for (let i = 0; i < maxSwipes; i++) {
        const el = await $(sel);
        if ((await el.isExisting()) && (await el.isDisplayed())) return el;
        const row = await $(rowSel);
        const { y } = await row.getLocation();
        const { height } = await row.getSize();
        const { width } = await driver.getWindowSize();
        await driver.execute('mobile: swipeGesture', {
          left: Math.round(width * 0.1), top: Math.round(y), width: Math.round(width * 0.8), height: Math.max(Math.round(height), 10),
          direction, percent: 0.6,
        });
      }
    }
    throw new Error(`${this.name}: could not find ${sel} in horizontal list`);
  }

  async #contentArea() {
    const { width, height } = await driver.getWindowSize();
    // Leave the status bar / bottom navigation out of the gesture
    return { left: Math.round(width * 0.1), top: Math.round(height * 0.2), width: Math.round(width * 0.8), height: Math.round(height * 0.55) };
  }

  async hideKeyboard() {
    try {
      if (await driver.isKeyboardShown()) await driver.hideKeyboard();
    } catch {}
  }

  /** In-app back arrow when present, otherwise the Android back button. */
  async goBack() {
    logAction('back');
    const back = await $(S.desc('Go back'));
    if (await back.isExisting()) await back.click();
    else await driver.back();
  }
}
