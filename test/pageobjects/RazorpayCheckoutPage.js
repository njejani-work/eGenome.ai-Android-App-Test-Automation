import BasePage, { S } from './BasePage.js';

// Captured as: CheckoutScreen3 (com.razorpay.CheckoutActivity). Razorpay renders a web view,
// exposed to UiAutomator2 as native nodes, so text/hint locators are used.
// CheckoutScreen / CheckoutScreen2 were just its loading states.
const SEL = {
  title: S.text('Razorpay Checkout'),
  totalLabel: S.text('Total Amount'),
  totalValue: S.textAfter('Total Amount'),
  planName: S.text('Annual Plan'),
  contactHeading: S.text('Contact details'),
  mobileInput: '//android.widget.EditText[@hint="Mobile number" or @text="Mobile number"]',
  mobileInputAny: S.cls('android.widget.EditText', 0),
  continueBtn: S.text('Continue'),
  backBtn: S.text('Go back'),
  // "Are you sure you want to exit?" dialog
  yesExit: S.text('Yes, exit'),
  continueToPayment: S.text('Continue to payment'),
};

class RazorpayCheckoutPage extends BasePage {
  get anchors() {
    return [SEL.totalLabel, SEL.contactHeading];
  }

  get mobileInput() { return $(SEL.mobileInput); }
  get continueBtn() { return $(SEL.continueBtn); }

  /** Waits through the loading states (it takes a few seconds to render). */
  async waitForOpen(timeout = 45000) {
    return super.waitForOpen(timeout);
  }

  /** e.g. "₹9,999" */
  async getTotal() {
    return this.textOf(SEL.totalValue);
  }

  async enterMobile(number) {
    const sel = (await this.exists(SEL.mobileInput)) ? SEL.mobileInput : SEL.mobileInputAny;
    await this.type(sel, String(number).replace(/\D/g, '').slice(-10));
  }

  async continue() {
    await this.tap(SEL.continueBtn, { scroll: true });
  }

  /** Back from checkout - shows the "Are you sure?" dialog. */
  async openExitDialog() {
    if (await this.exists(SEL.backBtn)) await this.tap(SEL.backBtn);
    else await driver.back();
    await $(SEL.yesExit).waitForDisplayed({ timeout: 10000, timeoutMsg: 'Exit confirmation did not appear' });
  }

  /** "Continue to payment" on the exit dialog - stays in checkout. */
  async continuePayment() {
    await this.tap(SEL.continueToPayment);
  }

  /** Leave checkout without paying (handles the confirmation dialog). */
  async exit() {
    if (await this.exists(SEL.backBtn)) await this.tap(SEL.backBtn);
    else await driver.back();
    const yes = await $(SEL.yesExit);
    if (await yes.waitForDisplayed({ timeout: 5000 }).catch(() => false)) await yes.click();
  }
}

export default new RazorpayCheckoutPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
