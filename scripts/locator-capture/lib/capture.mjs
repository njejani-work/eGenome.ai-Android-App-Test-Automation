// Connects to Appium and captures the current screen into the store.
import fs from 'node:fs';
import path from 'node:path';
import { remote } from 'webdriverio';
import { analyze } from './parser.mjs';
import { writePage } from './pagegen.mjs';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function connect(config, { attach = false } = {}) {
  const capabilities = { ...config.capabilities };
  if (attach) {
    // Don't (re)launch or reset anything: work with whatever is on screen now
    capabilities['appium:autoLaunch'] = false;
    capabilities['appium:noReset'] = true;
  }
  return remote({ ...config.appium, capabilities, logLevel: 'silent', connectionRetryCount: 1 });
}

export class Capturer {
  constructor(driver, store, config, format) {
    this.driver = driver;
    this.store = store;
    this.config = config;
    this.format = format;
    this.appPackage = config.capabilities['appium:appPackage'];
  }

  async snapshot() {
    const xml = await this.driver.getPageSource();
    let activity = '';
    try {
      activity = await this.driver.getCurrentActivity();
    } catch {}
    const analysis = analyze(xml, { appPackage: this.appPackage, ignorePackages: this.config.ignorePackages });
    return { xml, activity, analysis };
  }

  /** Waits until the UI stops changing (animations, loaders) and returns the stable snapshot. */
  async stableSnapshot({ checks = this.config.watch.stableChecks, interval = 400, maxTries = 12 } = {}) {
    let snap = await this.snapshot();
    let same = 1;
    for (let i = 0; i < maxTries && same < checks; i++) {
      await sleep(interval);
      const next = await this.snapshot();
      same = next.analysis.structureHash === snap.analysis.structureHash ? same + 1 : 1;
      snap = next;
    }
    return snap;
  }

  /** Identify the screen for a snapshot without saving. */
  identify(snap) {
    const m = this.store.match(snap.analysis, snap.activity);
    return m ? m.name : null;
  }

  /**
   * Save the snapshot. `forceName` saves under that name (new or existing) instead of auto-matching.
   * @returns {{ name, isNew, added, elementCount }}
   */
  async save(snap, { forceName, screenshot = true } = {}) {
    const name = forceName || this.identify(snap) || this.store.suggestScreenName(snap.analysis, snap.activity);
    const { data, added, isNew } = this.store.save(name, snap.analysis, { activity: snap.activity });
    const dir = this.store.dir;
    if (this.config.saveScreenshots && screenshot && (isNew || added.length)) {
      fs.mkdirSync(path.join(dir, 'screenshots'), { recursive: true });
      try {
        await this.driver.saveScreenshot(path.join(dir, 'screenshots', `${name}.png`));
      } catch {}
    }
    if (this.config.saveRawXml) {
      fs.mkdirSync(path.join(dir, 'raw'), { recursive: true });
      fs.writeFileSync(path.join(dir, 'raw', `${name}.xml`), snap.xml);
    }
    writePage(dir, data, this.format);
    return { name, isNew, added, elementCount: Object.keys(data.elements).length };
  }

  async captureNow(opts = {}) {
    const snap = await this.stableSnapshot();
    return { snap, ...(await this.save(snap, opts)) };
  }
}
