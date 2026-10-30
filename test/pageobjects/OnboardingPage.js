import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen37 - intro carousel shown on a fresh install / after clearing app data,
// before the login screen. "Skip" (top right) goes straight to login.
const SEL = {
  skipBtn: S.desc('Skip'),
  carousel: 'android=new UiSelector().className("androidx.viewpager.widget.ViewPager")',
  slideTitle: S.textStarts('Discover Your Biological Age'),
  labBadge: S.textStarts('National Reference Laboratory'),
};

class OnboardingPage extends BasePage {
  get layoutSpec() { return 'Onboarding'; }

  get anchors() {
    return [SEL.skipBtn, SEL.slideTitle];
  }

  get skipBtn() { return $(SEL.skipBtn); }
  get slideTitle() { return $(SEL.slideTitle); }
  get labBadge() { return $(SEL.labBadge); }

  async skip() {
    await this.waitForOpen();
    await this.tap(SEL.skipBtn);
    await $(SEL.skipBtn).waitForExist({ timeout: 10000, reverse: true });
  }

  /** Taps Skip if the intro is showing; returns true when it did. */
  async skipIfShown(timeout = 3000) {
    if (!(await this.isOpen(timeout))) return false;
    await this.skip();
    return true;
  }
}

export default new OnboardingPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
