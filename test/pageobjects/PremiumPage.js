import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen13 ("eGenome Premium" plan screen, opened from "Complete Payment").
const SEL = {
  title: S.text('eGenome Premium'),
  backBtn: S.desc('Go back'),
  oldPrice: S.text('₹11,988'),
  price: S.textMatches('₹[\\d,]+'),
  perYear: S.textStarts('per year'),
  emiOption: S.descContains('EMI Starts'),
  oneTimeOption: S.descContains('/Year, one-time'),
  noAutoRenewal: S.text('No Auto Renewal'),
  paymentError: S.textContains('Payment processing failed'),
  paymentMethod: (name) => S.desc(name), // 'mastercard' | 'visa' | 'google pay' | 'phonepe' | 'upi'
  // NOT CAPTURED: the button that opens Razorpay (below the fold). Generic guess - verify on device.
  payBtn: S.descMatches('(?i)^(pay|proceed|continue|subscribe|buy|get premium|upgrade).*'),
};

class PremiumPage extends BasePage {
  get layoutSpec() { return 'Premium'; }

  get anchors() {
    return [SEL.title];
  }

  get emiOption() { return $(SEL.emiOption); }
  get oneTimeOption() { return $(SEL.oneTimeOption); }
  get paymentError() { return $(SEL.paymentError); }
  get payBtn() { return $(SEL.payBtn); }

  /** Visible plan prices, e.g. ["₹11,988", "₹9,999"] */
  async getPrices() {
    const els = await $$(SEL.price);
    const out = [];
    for (const e of els) out.push(await e.getText());
    return out;
  }

  /** 'emi' | 'one-time' */
  async choosePlan(plan) {
    await this.tap(plan === 'emi' ? SEL.emiOption : SEL.oneTimeOption, { scroll: true });
  }

  async hasPaymentMethod(name) {
    return this.exists(SEL.paymentMethod(name));
  }

  async proceedToPayment() {
    await this.tap(SEL.payBtn, { scroll: true });
  }

  async hasPaymentError() {
    return this.exists(SEL.paymentError);
  }

  async close() {
    await this.tap(SEL.backBtn);
  }
}

export default new PremiumPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
