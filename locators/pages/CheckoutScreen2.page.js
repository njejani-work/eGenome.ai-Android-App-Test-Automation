// AUTO-GENERATED from locators/CheckoutScreen2.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends CheckoutScreen2Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.razorpay.CheckoutActivity | updated: 2026-10-28T07:45:01.451Z
import BasePage from './BasePage.js';

const L = {
  razorpayCheckoutView: ["android=new UiSelector().text(\"Razorpay Checkout\")", "//android.webkit.WebView[@text=\"Razorpay Checkout\"]"],
};

class CheckoutScreen2 extends BasePage {
  constructor() {
    super(L, []);
  }

  /** WebView "Razorpay Checkout" */
  get razorpayCheckoutView() {
    return $(L.razorpayCheckoutView[0]);
  }
}

export { CheckoutScreen2 as CheckoutScreen2Class, L as CheckoutScreen2Locators };
export default new CheckoutScreen2();
