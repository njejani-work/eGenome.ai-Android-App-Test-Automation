import BasePage, { S } from './BasePage.js';
import OtpPage from './OtpPage.js';
import OnboardingPage from './OnboardingPage.js';
import SystemDialogs from './components/SystemDialogs.js';
import HomePage from './HomePage.js';
import { getUser } from '../data/users.js';

// Captured as: MainScreen ("Start your health journey" / "Log in or Sign up")
const SEL = {
  headline: S.textStarts('Start your health'),
  title: S.text('Log in or Sign up'),
  countryCodeBtn: S.desc('\u{F0140}'), // chevron next to +91 (icon glyph)
  countryCode: S.text('+91'),
  phoneInput: S.cls('android.widget.EditText', 0), // only input on this screen; placeholder "Enter your mobile number"
  sendOtpBtn: S.desc('Send OTP'),
  sending: S.desc('Sending...'),
  consent: S.textStarts('By submitting'),
};

// Captured as: ChooseAPhoneNumberScreen - Google's "Choose a phone number" sheet that pops up
// on the login screen (on its own after sign-out, or when the phone field gets focus). Tests dismiss it and type the number themselves.
const HINT = {
  title: S.id('com.google.android.gms:id/title'),
  cancel: S.id('com.google.android.gms:id/cancel'),
  number: S.id('com.google.android.gms:id/phone_number'),
};

class LoginPage extends BasePage {
  get layoutSpec() { return 'Login'; }

  get anchors() {
    return [SEL.title, SEL.sendOtpBtn];
  }

  get headline() { return $(SEL.headline); }
  get countryCodeBtn() { return $(SEL.countryCodeBtn); }
  get countryCode() { return $(SEL.countryCode); }
  get phoneInput() { return $(SEL.phoneInput); }
  get sendOtpBtn() { return $(SEL.sendOtpBtn); }
  get sendingIndicator() { return $(SEL.sending); }
  get consentText() { return $(SEL.consent); }

  /** Closes Google's phone-number picker if it opened. */
  async dismissPhoneHint(timeout = 2500) {
    const cancel = await $(HINT.cancel);
    if (await cancel.waitForDisplayed({ timeout }).catch(() => false)) {
      await cancel.click();
      await cancel.waitForExist({ timeout: 5000, reverse: true });
      return true;
    }
    return false;
  }

  /** Types a 10-digit mobile number (a leading +91 / 91 / 0 is stripped). */
  async enterPhone(phone) {
    const digits = String(phone).replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
    const input = await $(SEL.phoneInput);
    await input.waitForDisplayed();
    await input.click();
    await this.dismissPhoneHint();
    await input.clearValue().catch(() => {});
    await input.setValue(digits);
    await this.hideKeyboard();
  }

  /** Types exactly what is given (no clean-up), e.g. to check that letters are rejected. */
  async typeRawPhone(text) {
    const input = await $(SEL.phoneInput);
    await input.waitForDisplayed();
    await input.click();
    await this.dismissPhoneHint(1500);
    await input.clearValue().catch(() => {});
    if (text) await input.setValue(text);
    await this.hideKeyboard();
  }

  /** Text currently in the phone field. */
  async getPhone() {
    return (await $(SEL.phoneInput)).getText();
  }

  async tapSendOtp() {
    await this.tap(SEL.sendOtpBtn);
  }

  /** Two quick taps on Send OTP (checks the button can't trigger a second request). */
  async doubleTapSendOtp() {
    const btn = await $(SEL.sendOtpBtn);
    await btn.waitForDisplayed();
    await btn.click();
    await btn.click().catch(() => {}); // the button may already be gone / disabled
  }

  /** Gets past anything shown before the login screen: intro carousel (Skip) and Google's number picker. */
  async open() {
    await OnboardingPage.skipIfShown(3000);
    await this.dismissPhoneHint(3000);
    return this.waitForOpen(20000);
  }

  /** Enter the number, tap "Send OTP" and wait for the OTP screen. */
  async requestOtp(phone) {
    await this.open();
    await this.enterPhone(phone);
    await this.tapSendOtp();
    await OtpPage.waitForOpen(30000);
  }

  /**
   * Full OTP login: phone -> Send OTP -> 6-digit code -> Continue -> permission dialogs -> Home.
   * @param {{phone: string, otp: string}} user  defaults to the user from .env (test/data/users.js)
   */
  async login(user = getUser()) {
    await this.requestOtp(user.phone);
    await OtpPage.submitOtp(user.otp);
    await SystemDialogs.handleAll({ allow: true });
    await HomePage.waitForOpen(30000);
  }

  /** Logs in only when the login screen is showing (keeps an existing session). */
  async ensureLoggedIn(user = getUser()) {
    await SystemDialogs.handleAll({ timeout: 2000 });
    if (await HomePage.isOpen(3000)) return;
    await OnboardingPage.skipIfShown(3000);
    await this.dismissPhoneHint(2000);
    if (await this.isOpen(10000)) await this.login(user);
    await HomePage.waitForOpen(30000);
  }
}

export default new LoginPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
export const PHONE_HINT_LOCATORS = HINT;
