import BasePage, { S } from '../BasePage.js';
import { logAction } from '../../support/dashboard/recorder.js';
import { APP_ID } from '../../support/app.js';

// Bottom tab bar shown on Home, Report and Settings (captured: ~Home / ~Report / ~Settings).
export const LOCATORS = {
  homeTab: S.desc('Home'),
  reportTab: S.desc('Report'),
  settingsTab: S.desc('Settings'),
};
class BottomNav extends BasePage {
  get anchors() {
    return [S.desc('Home'), S.desc('Settings')];
  }

  get homeTab() { return $(S.desc('Home')); }
  get reportTab() { return $(S.desc('Report')); }
  get settingsTab() { return $(S.desc('Settings')); }

  /**
   * Makes sure the tab bar is on screen. If a previous step left a pushed screen open
   * (Premium, a report, a Settings sub-screen...), presses Back until the tabs show again,
   * so one failed test doesn't make every following test fail too.
   */
  async ensureVisible(maxBacks = 4) {
    if (await this.isOpen(2000)) return;
    for (let i = 0; i < maxBacks; i++) {
      await driver.back();
      if ((await driver.queryAppState(APP_ID)) !== 4) await driver.activateApp(APP_ID); // Back left the app
      if (await this.isOpen(2000)) { logAction('recovered tab bar', `after ${i + 1} Back press(es)`); return; }
    }
  }

  async openHome() {
    await this.ensureVisible();
    await this.tap(S.desc('Home'));
  }

  async openReports() {
    await this.ensureVisible();
    await this.tap(S.desc('Report'));
  }

  async openSettings() {
    await this.ensureVisible();
    await this.tap(S.desc('Settings'));
  }
}

export default new BottomNav();
