// AUTO-GENERATED from locators/PhoneNumberHintScreen.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends PhoneNumberHintScreenClass { async login(phone) { ... } }
// Screen: (no title) | activity: .auth.api.credentials.assistedsignin.ui.PhoneNumberHintActivity | updated: 2026-10-28T08:32:50.930Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  startYourHealthJourneyText: ["android=new UiSelector().text(\"Start your health\njourney today\")", "//android.widget.TextView[@text=\"Start your health\njourney today\"]"],
  logInOrSignText: ["android=new UiSelector().text(\"Log in or Sign up\")", "//android.widget.TextView[@text=\"Log in or Sign up\"]"],
  btn: ["~󰅀", "//android.widget.Button[@content-desc=\"󰅀\"]"],
  text: ["android=new UiSelector().text(\"󰅀\")", "//android.widget.TextView[@text=\"󰅀\"]"],
  el91Text: ["android=new UiSelector().text(\"+91\")", "//android.widget.TextView[@text=\"+91\"]"],
  enterYourMobileNumberInput: ["android=new UiSelector().text(\"Enter your mobile number\")", "//android.widget.EditText[@text=\"Enter your mobile number\"]"],
  sendOtpBtn: ["~Send OTP", "//android.view.ViewGroup[@content-desc=\"Send OTP\"]"],
  sendOtpText: ["android=new UiSelector().text(\"Send OTP\")", "//android.widget.TextView[@text=\"Send OTP\"]"],
  bySubmittingYouAuthorizeText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[3]"],
};

class PhoneNumberHintScreen extends BasePage {
  constructor() {
    super(L, []);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "Start your health
journey today" */
  get startYourHealthJourneyText() {
    return $(L.startYourHealthJourneyText[0]);
  }

  /** TextView "Log in or Sign up" */
  get logInOrSignText() {
    return $(L.logInOrSignText[0]);
  }

  /** Button */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "󰅀" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "+91" */
  get el91Text() {
    return $(L.el91Text[0]);
  }

  /** EditText "Enter your mobile number" */
  get enterYourMobileNumberInput() {
    return $(L.enterYourMobileNumberInput[0]);
  }

  /** ViewGroup */
  get sendOtpBtn() {
    return $(L.sendOtpBtn[0]);
  }

  /** TextView "Send OTP" */
  get sendOtpText() {
    return $(L.sendOtpText[0]);
  }

  /** TextView "By submitting, you authorize eGenome.ai " */
  get bySubmittingYouAuthorizeText() {
    return $(L.bySubmittingYouAuthorizeText[0]);
  }
}

export { PhoneNumberHintScreen as PhoneNumberHintScreenClass, L as PhoneNumberHintScreenLocators };
export default new PhoneNumberHintScreen();
