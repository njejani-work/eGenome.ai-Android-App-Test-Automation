// AUTO-GENERATED from locators/MainScreen3.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen3Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:40:48.338Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  johnDoeSelfBtn: ["~John Doe, Self, , , ", "//android.view.ViewGroup[@content-desc=\"John Doe, Self, , , \"]"],
  johnDoeText: ["android=new UiSelector().text(\"John Doe\")", "//android.widget.TextView[@text=\"John Doe\"]"],
  selfText: ["android=new UiSelector().text(\"Self\")", "//android.widget.TextView[@text=\"Self\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  actionNeededCompletePaymentBtn: ["~, ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Secure checkout • Instant activation", "//android.view.ViewGroup[@content-desc=\", ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Secure checkout • Instant activation\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  actionNeededText: ["android=new UiSelector().text(\"ACTION NEEDED\")", "//android.widget.TextView[@text=\"ACTION NEEDED\"]"],
  completePaymentText: ["(//android.widget.TextView[@text=\"Complete Payment\"])[1]", "android=new UiSelector().text(\"Complete Payment\")"],
  paymentRequiredText: ["android=new UiSelector().text(\"PAYMENT REQUIRED\")", "//android.widget.TextView[@text=\"PAYMENT REQUIRED\"]"],
  completeYourPaymentToText: ["android=new UiSelector().text(\"Complete your payment to continue with your health report.\")", "//android.widget.TextView[@text=\"Complete your payment to continue with your health report.\"]"],
  paymentText: ["android=new UiSelector().text(\"Payment\")", "//android.widget.TextView[@text=\"Payment\"]"],
  secureText: ["android=new UiSelector().text(\"Secure\")", "//android.widget.TextView[@text=\"Secure\"]"],
  instantText: ["android=new UiSelector().text(\"Instant\")", "//android.widget.TextView[@text=\"Instant\"]"],
  text5: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  securePaymentProcessingText: ["android=new UiSelector().text(\"Secure payment processing\")", "//android.widget.TextView[@text=\"Secure payment processing\"]"],
  text6: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  instantAccessAfterPaymentText: ["android=new UiSelector().text(\"Instant access after payment\")", "//android.widget.TextView[@text=\"Instant access after payment\"]"],
  fullHealthReportIncludedText: ["android=new UiSelector().text(\"Full health report included\")", "//android.widget.TextView[@text=\"Full health report included\"]"],
  completePaymentBtn: ["~Complete Payment", "//android.view.ViewGroup[@content-desc=\"Complete Payment\"]"],
  completePaymentText2: ["(//android.widget.TextView[@text=\"Complete Payment\"])[2]", "android=new UiSelector().text(\"Complete Payment\")"],
  secureCheckoutInstantActivationText: ["android=new UiSelector().text(\"Secure checkout • Instant activation\")", "//android.widget.TextView[@text=\"Secure checkout • Instant activation\"]"],
  dailyRoutineText: ["android=new UiSelector().text(\"Daily Routine\")", "//android.widget.TextView[@text=\"Daily Routine\"]"],
  el20261028Text: ["android=new UiSelector().text(\"2026-10-28\")", "//android.widget.TextView[@text=\"2026-10-28\"]"],
  btn: ["~󰸘", "//android.view.ViewGroup[@content-desc=\"󰸘\"]"],
  text7: ["android=new UiSelector().text(\"󰸘\")", "//android.widget.TextView[@text=\"󰸘\"]"],
  el0DayStreakBtn: ["~0, Day Streak", "//android.view.ViewGroup[@content-desc=\"0, Day Streak\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen3 extends BasePage {
  constructor() {
    super(L, []);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ViewGroup */
  get johnDoeSelfBtn() {
    return $(L.johnDoeSelfBtn[0]);
  }

  /** TextView "John Doe" */
  get johnDoeText() {
    return $(L.johnDoeText[0]);
  }

  /** TextView "Self" */
  get selfText() {
    return $(L.selfText[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get actionNeededCompletePaymentBtn() {
    return $(L.actionNeededCompletePaymentBtn[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "ACTION NEEDED" */
  get actionNeededText() {
    return $(L.actionNeededText[0]);
  }

  /** TextView "Complete Payment" */
  get completePaymentText() {
    return $(L.completePaymentText[0]);
  }

  /** TextView "PAYMENT REQUIRED" */
  get paymentRequiredText() {
    return $(L.paymentRequiredText[0]);
  }

  /** TextView "Complete your payment to continue with y" */
  get completeYourPaymentToText() {
    return $(L.completeYourPaymentToText[0]);
  }

  /** TextView "Payment" */
  get paymentText() {
    return $(L.paymentText[0]);
  }

  /** TextView "Secure" */
  get secureText() {
    return $(L.secureText[0]);
  }

  /** TextView "Instant" */
  get instantText() {
    return $(L.instantText[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Secure payment processing" */
  get securePaymentProcessingText() {
    return $(L.securePaymentProcessingText[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Instant access after payment" */
  get instantAccessAfterPaymentText() {
    return $(L.instantAccessAfterPaymentText[0]);
  }

  /** TextView "Full health report included" */
  get fullHealthReportIncludedText() {
    return $(L.fullHealthReportIncludedText[0]);
  }

  /** ViewGroup */
  get completePaymentBtn() {
    return $(L.completePaymentBtn[0]);
  }

  /** TextView "Complete Payment" */
  get completePaymentText2() {
    return $(L.completePaymentText2[0]);
  }

  /** TextView "Secure checkout • Instant activation" */
  get secureCheckoutInstantActivationText() {
    return $(L.secureCheckoutInstantActivationText[0]);
  }

  /** TextView "Daily Routine" */
  get dailyRoutineText() {
    return $(L.dailyRoutineText[0]);
  }

  /** TextView "2026-10-28" */
  get el20261028Text() {
    return $(L.el20261028Text[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "󰸘" */
  get text7() {
    return $(L.text7[0]);
  }

  /** ViewGroup */
  get el0DayStreakBtn() {
    return $(L.el0DayStreakBtn[0]);
  }

  /** View */
  get homeBtn() {
    return $(L.homeBtn[0]);
  }

  /** TextView "Home" */
  get homeText() {
    return $(L.homeText[0]);
  }

  /** View */
  get reportBtn() {
    return $(L.reportBtn[0]);
  }

  /** TextView "Report" */
  get reportText() {
    return $(L.reportText[0]);
  }

  /** View */
  get settingsBtn() {
    return $(L.settingsBtn[0]);
  }

  /** TextView "Settings" */
  get settingsText() {
    return $(L.settingsText[0]);
  }
}

export { MainScreen3 as MainScreen3Class, L as MainScreen3Locators };
export default new MainScreen3();
