// AUTO-GENERATED from locators/CheckoutScreen.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends CheckoutScreenClass { async login(phone) { ... } }
// Screen: (no title) | activity: com.razorpay.CheckoutActivity | updated: 2026-10-28T08:20:11.357Z
import BasePage from './BasePage.js';

const L = {
  primaryWebviewBtn: ["~primary_webview", "//android.webkit.WebView[@content-desc=\"primary_webview\"]"],
};

class CheckoutScreen extends BasePage {
  constructor() {
    super(L, ["primaryWebviewBtn"]);
  }

  /** WebView */
  get primaryWebviewBtn() {
    return $(L.primaryWebviewBtn[0]);
  }
}

export { CheckoutScreen as CheckoutScreenClass, L as CheckoutScreenLocators };
export default new CheckoutScreen();
