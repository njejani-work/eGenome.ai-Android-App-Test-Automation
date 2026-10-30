import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen35 ("OTP, please"), shown after "Send OTP" on the login screen.
// Six single-digit inputs labelled "OTP digit 1" ... "OTP digit 6".
const SEL = {
  title: S.text('OTP, please'),
  sentTo: S.textStarts('Please enter the code we just sent to'),
  digit: (n) => S.desc(`OTP digit ${n}`),
  anyDigit: S.descStarts('OTP digit '),
  continueBtn: S.desc('Continue'),
  resendTimer: S.descMatches('Resend OTP in \\d+s'), // countdown while resend is disabled
  resend: S.descStarts('Resend OTP'),
  whatsapp: S.desc('Send OTP via WhatsApp'),
  backBtn: S.desc('\uEA28'), // back arrow icon, top left
};

const OTP_LENGTH = 6;

class OtpPage extends BasePage {
  get layoutSpec() { return 'Otp'; }

  get anchors() {
    return [SEL.title, SEL.anyDigit];
  }

  get title() { return $(SEL.title); }
  get sentToText() { return $(SEL.sentTo); }
  get continueBtn() { return $(SEL.continueBtn); }
  get resendBtn() { return $(SEL.resend); }
  get whatsappBtn() { return $(SEL.whatsapp); }
  get backBtn() { return $(SEL.backBtn); }

  digitInput(n) {
    return $(SEL.digit(n));
  }

  /** Phone number from "Please enter the code we just sent to +91..." */
  async getSentToNumber() {
    const text = await this.textOf(SEL.sentTo);
    return (text.match(/\+?\d[\d\s-]{6,}/) || [''])[0].replace(/[\s-]/g, '');
  }

  /** Types the code one digit per box. */
  async enterOtp(code) {
    const digits = String(code).replace(/\D/g, '');
    if (digits.length !== OTP_LENGTH) throw new Error(`OTP must be ${OTP_LENGTH} digits, got "${code}"`);
    for (let i = 0; i < OTP_LENGTH; i++) {
      const box = await $(SEL.digit(i + 1));
      await box.waitForDisplayed({ timeoutMsg: `OTP digit ${i + 1} not displayed` });
      await box.clearValue().catch(() => {});
      await box.setValue(digits[i]);
    }
    await this.hideKeyboard();
  }

  /** Values currently in the six boxes, e.g. "123456". */
  async getEnteredOtp() {
    let out = '';
    for (let i = 1; i <= OTP_LENGTH; i++) out += await (await $(SEL.digit(i))).getText();
    return out;
  }

  async tapContinue() {
    await this.tap(SEL.continueBtn);
  }

  /** Enter the code and tap Continue (if the app hasn't already moved on by itself). */
  async submitOtp(code) {
    await this.waitForOpen();
    await this.enterOtp(code);
    const btn = await $(SEL.continueBtn);
    if (await btn.isExisting()) await btn.click();
  }

  /** Seconds left before "Resend OTP" is enabled (0 when it's available). */
  async getResendSeconds() {
    const timer = await $(SEL.resendTimer);
    if (!(await timer.isExisting())) return 0;
    return Number((await timer.getAttribute('content-desc')).match(/\d+/)[0]);
  }

  async resendOtp() {
    await driver.waitUntil(async () => (await this.getResendSeconds()) === 0, { timeout: 90000, interval: 1000 });
    await this.tap(SEL.resend);
  }

  async back() {
    await this.tap(SEL.backBtn);
  }
}

export default new OtpPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
