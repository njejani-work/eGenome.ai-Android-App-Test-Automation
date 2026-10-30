// AUTO-GENERATED from locators/MainScreen35.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen35Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:19:13.004Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  btn: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  otpPleaseText: ["android=new UiSelector().text(\"OTP, please\")", "//android.widget.TextView[@text=\"OTP, please\"]"],
  pleaseEnterTheCodeText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[2]"],
  otpDigit1Input: ["~OTP digit 1", "//android.widget.EditText[@content-desc=\"OTP digit 1\" and @text=\"0\"]", "android=new UiSelector().text(\"0\")"],
  otpDigit2Input: ["~OTP digit 2", "//android.widget.EditText[@content-desc=\"OTP digit 2\" and @text=\"7\"]", "android=new UiSelector().text(\"7\")"],
  otpDigit3Input: ["~OTP digit 3", "//android.widget.EditText[@content-desc=\"OTP digit 3\" and @text=\"0\"]", "android=new UiSelector().text(\"0\")"],
  otpDigit4Input: ["~OTP digit 4", "//android.widget.EditText[@content-desc=\"OTP digit 4\" and @text=\"7\"]", "android=new UiSelector().text(\"7\")"],
  otpDigit5Input: ["~OTP digit 5", "//android.widget.EditText[@content-desc=\"OTP digit 5\" and @text=\"0\"]", "android=new UiSelector().text(\"0\")"],
  otpDigit6Input: ["~OTP digit 6", "//android.widget.EditText[@content-desc=\"OTP digit 6\"]"],
  sendOtpViaWhatsView: ["~Send OTP via WhatsApp", "//android.view.ViewGroup[@content-desc=\"Send OTP via WhatsApp\"]"],
  sendOtpViaWhatsText: ["android=new UiSelector().text(\"Send OTP via WhatsApp\")", "//android.widget.TextView[@text=\"Send OTP via WhatsApp\"]"],
  resendOtpIn45sView: ["~Resend OTP in 45s", "//android.view.ViewGroup[@content-desc=\"Resend OTP in 45s\"]"],
  resendOtpIn45sText: ["android=new UiSelector().text(\"Resend OTP in 45s\")", "//android.widget.TextView[@text=\"Resend OTP in 45s\"]"],
  continueView: ["~Continue", "//android.view.ViewGroup[@content-desc=\"Continue\"]"],
  continueText: ["android=new UiSelector().text(\"Continue\")", "//android.widget.TextView[@text=\"Continue\"]"],
  byTappingOnSendText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView[1]"],
};

class MainScreen35 extends BasePage {
  constructor() {
    super(L, ["otpDigit1Input","otpDigit2Input","otpDigit3Input"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "OTP, please" */
  get otpPleaseText() {
    return $(L.otpPleaseText[0]);
  }

  /** TextView "Please enter the code we just sent to +9" */
  get pleaseEnterTheCodeText() {
    return $(L.pleaseEnterTheCodeText[0]);
  }

  /** EditText "0" */
  get otpDigit1Input() {
    return $(L.otpDigit1Input[0]);
  }

  /** EditText "7" */
  get otpDigit2Input() {
    return $(L.otpDigit2Input[0]);
  }

  /** EditText "0" */
  get otpDigit3Input() {
    return $(L.otpDigit3Input[0]);
  }

  /** EditText "7" */
  get otpDigit4Input() {
    return $(L.otpDigit4Input[0]);
  }

  /** EditText "0" */
  get otpDigit5Input() {
    return $(L.otpDigit5Input[0]);
  }

  /** EditText */
  get otpDigit6Input() {
    return $(L.otpDigit6Input[0]);
  }

  /** ViewGroup */
  get sendOtpViaWhatsView() {
    return $(L.sendOtpViaWhatsView[0]);
  }

  /** TextView "Send OTP via WhatsApp" */
  get sendOtpViaWhatsText() {
    return $(L.sendOtpViaWhatsText[0]);
  }

  /** ViewGroup */
  get resendOtpIn45sView() {
    return $(L.resendOtpIn45sView[0]);
  }

  /** TextView "Resend OTP in 45s" */
  get resendOtpIn45sText() {
    return $(L.resendOtpIn45sText[0]);
  }

  /** ViewGroup */
  get continueView() {
    return $(L.continueView[0]);
  }

  /** TextView "Continue" */
  get continueText() {
    return $(L.continueText[0]);
  }

  /** TextView "By tapping on "Send OTP via WhatsApp", y" */
  get byTappingOnSendText() {
    return $(L.byTappingOnSendText[0]);
  }
}

export { MainScreen35 as MainScreen35Class, L as MainScreen35Locators };
export default new MainScreen35();
