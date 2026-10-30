// AUTO-GENERATED from locators/MainScreen2.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen2Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:22:37.398Z
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
  youRightNowText: ["android=new UiSelector().text(\"You, right now\")", "//android.widget.TextView[@text=\"You, right now\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.HorizontalScrollView[1]"],
  weightGood56KgBtn: ["~, Weight, GOOD, 56 kg, 49, 58, 66, , 2 kg under ideal", "//android.view.ViewGroup[@content-desc=\", Weight, GOOD, 56 kg, 49, 58, 66, , 2 kg under ideal\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  weightText: ["android=new UiSelector().text(\"Weight\")", "//android.widget.TextView[@text=\"Weight\"]"],
  goodText: ["(//android.widget.TextView[@text=\"GOOD\"])[1]", "android=new UiSelector().text(\"GOOD\")"],
  el56KgText: ["android=new UiSelector().text(\"56 kg\")", "//android.widget.TextView[@text=\"56 kg\"]"],
  el49Text: ["android=new UiSelector().text(\"49\")", "//android.widget.TextView[@text=\"49\"]"],
  el58Text: ["android=new UiSelector().text(\"58\")", "//android.widget.TextView[@text=\"58\"]"],
  el66Text: ["android=new UiSelector().text(\"66\")", "//android.widget.TextView[@text=\"66\"]"],
  text5: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  el2KgUnderIdealText: ["android=new UiSelector().text(\"2 kg under ideal\")", "//android.widget.TextView[@text=\"2 kg under ideal\"]"],
  bmiGood212Btn: ["~, BMI, GOOD, 21.2, 15, 18.5, 25, 30, 40, , Normal", "//android.view.ViewGroup[@content-desc=\", BMI, GOOD, 21.2, 15, 18.5, 25, 30, 40, , Normal\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  bmiText: ["android=new UiSelector().text(\"BMI\")", "//android.widget.TextView[@text=\"BMI\"]"],
  goodText2: ["(//android.widget.TextView[@text=\"GOOD\"])[2]", "android=new UiSelector().text(\"GOOD\")"],
  el212Text: ["android=new UiSelector().text(\"21.2\")", "//android.widget.TextView[@text=\"21.2\"]"],
  el15Text: ["android=new UiSelector().text(\"15\")", "//android.widget.TextView[@text=\"15\"]"],
  el185Text: ["android=new UiSelector().text(\"18.5\")", "//android.widget.TextView[@text=\"18.5\"]"],
  el25Text: ["android=new UiSelector().text(\"25\")", "//android.widget.TextView[@text=\"25\"]"],
  el30Text: ["android=new UiSelector().text(\"30\")", "//android.widget.TextView[@text=\"30\"]"],
  el40Text: ["android=new UiSelector().text(\"40\")", "//android.widget.TextView[@text=\"40\"]"],
  text7: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  normalText: ["android=new UiSelector().text(\"Normal\")", "//android.widget.TextView[@text=\"Normal\"]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.HorizontalScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[3]"],
  actionNeededCompletePaymentBtn: ["~, ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Complete Payment, Secure checkout • Instant activation", "//android.view.ViewGroup[@content-desc=\", ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Complete Payment, Secure checkout • Instant activation\"]"],
  text8: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  actionNeededText: ["android=new UiSelector().text(\"ACTION NEEDED\")", "//android.widget.TextView[@text=\"ACTION NEEDED\"]"],
  completePaymentText: ["(//android.widget.TextView[@text=\"Complete Payment\"])[1]", "android=new UiSelector().text(\"Complete Payment\")"],
  paymentRequiredText: ["android=new UiSelector().text(\"PAYMENT REQUIRED\")", "//android.widget.TextView[@text=\"PAYMENT REQUIRED\"]"],
  completeYourPaymentToText: ["android=new UiSelector().text(\"Complete your payment to continue with your health report.\")", "//android.widget.TextView[@text=\"Complete your payment to continue with your health report.\"]"],
  paymentText: ["android=new UiSelector().text(\"Payment\")", "//android.widget.TextView[@text=\"Payment\"]"],
  secureText: ["android=new UiSelector().text(\"Secure\")", "//android.widget.TextView[@text=\"Secure\"]"],
  instantText: ["android=new UiSelector().text(\"Instant\")", "//android.widget.TextView[@text=\"Instant\"]"],
  text9: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  securePaymentProcessingText: ["android=new UiSelector().text(\"Secure payment processing\")", "//android.widget.TextView[@text=\"Secure payment processing\"]"],
  text10: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  instantAccessAfterPaymentText: ["android=new UiSelector().text(\"Instant access after payment\")", "//android.widget.TextView[@text=\"Instant access after payment\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  bodyFatAcg17Btn: ["~, Body Fat, ACG, 17 %, 10%, 15%, 20%, , Fitness", "//android.view.ViewGroup[@content-desc=\", Body Fat, ACG, 17 %, 10%, 15%, 20%, , Fitness\"]"],
  text11: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  bodyFatText: ["android=new UiSelector().text(\"Body Fat\")", "//android.widget.TextView[@text=\"Body Fat\"]"],
  acgText: ["android=new UiSelector().text(\"ACG\")", "//android.widget.TextView[@text=\"ACG\"]"],
  el17Text: ["android=new UiSelector().text(\"17 %\")", "//android.widget.TextView[@text=\"17 %\"]"],
  el10Text: ["android=new UiSelector().text(\"10%\")", "//android.widget.TextView[@text=\"10%\"]"],
  el15Text2: ["android=new UiSelector().text(\"15%\")", "//android.widget.TextView[@text=\"15%\"]"],
  el20Text: ["android=new UiSelector().text(\"20%\")", "//android.widget.TextView[@text=\"20%\"]"],
  fitnessText: ["android=new UiSelector().text(\"Fitness\")", "//android.widget.TextView[@text=\"Fitness\"]"],
  actionNeededCompletePaymentBtn2: ["~, ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Secure checkout • Instant activation", "//android.view.ViewGroup[@content-desc=\", ACTION NEEDED, Complete Payment, PAYMENT REQUIRED, Complete your payment to continue with your health report., Payment, Secure, Instant, , Secure payment processing, , Instant access after payment, , Full health report included, Secure checkout • Instant activation\"]"],
  fullHealthReportIncludedText: ["android=new UiSelector().text(\"Full health report included\")", "//android.widget.TextView[@text=\"Full health report included\"]"],
  completePaymentBtn: ["~Complete Payment", "//android.view.ViewGroup[@content-desc=\"Complete Payment\"]"],
  completePaymentText2: ["(//android.widget.TextView[@text=\"Complete Payment\"])[2]", "android=new UiSelector().text(\"Complete Payment\")"],
  secureCheckoutInstantActivationText: ["android=new UiSelector().text(\"Secure checkout • Instant activation\")", "//android.widget.TextView[@text=\"Secure checkout • Instant activation\"]"],
  dailyRoutineText: ["android=new UiSelector().text(\"Daily Routine\")", "//android.widget.TextView[@text=\"Daily Routine\"]"],
  btn2: ["~󰸘", "//android.view.ViewGroup[@content-desc=\"󰸘\"]"],
  text12: ["android=new UiSelector().text(\"󰸘\")", "//android.widget.TextView[@text=\"󰸘\"]"],
};

class MainScreen2 extends BasePage {
  constructor() {
    super(L, ["weightGood56KgBtn","bodyFatAcg17Btn"]);
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

  /** TextView "You, right now" */
  get youRightNowText() {
    return $(L.youRightNowText[0]);
  }

  /** HorizontalScrollView */
  get list2() {
    return $(L.list2[0]);
  }

  /** ViewGroup */
  get weightGood56KgBtn() {
    return $(L.weightGood56KgBtn[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Weight" */
  get weightText() {
    return $(L.weightText[0]);
  }

  /** TextView "GOOD" */
  get goodText() {
    return $(L.goodText[0]);
  }

  /** TextView "56 kg" */
  get el56KgText() {
    return $(L.el56KgText[0]);
  }

  /** TextView "49" */
  get el49Text() {
    return $(L.el49Text[0]);
  }

  /** TextView "58" */
  get el58Text() {
    return $(L.el58Text[0]);
  }

  /** TextView "66" */
  get el66Text() {
    return $(L.el66Text[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "2 kg under ideal" */
  get el2KgUnderIdealText() {
    return $(L.el2KgUnderIdealText[0]);
  }

  /** ViewGroup */
  get bmiGood212Btn() {
    return $(L.bmiGood212Btn[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "BMI" */
  get bmiText() {
    return $(L.bmiText[0]);
  }

  /** TextView "GOOD" */
  get goodText2() {
    return $(L.goodText2[0]);
  }

  /** TextView "21.2" */
  get el212Text() {
    return $(L.el212Text[0]);
  }

  /** TextView "15" */
  get el15Text() {
    return $(L.el15Text[0]);
  }

  /** TextView "18.5" */
  get el185Text() {
    return $(L.el185Text[0]);
  }

  /** TextView "25" */
  get el25Text() {
    return $(L.el25Text[0]);
  }

  /** TextView "30" */
  get el30Text() {
    return $(L.el30Text[0]);
  }

  /** TextView "40" */
  get el40Text() {
    return $(L.el40Text[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Normal" */
  get normalText() {
    return $(L.normalText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** ViewGroup */
  get actionNeededCompletePaymentBtn() {
    return $(L.actionNeededCompletePaymentBtn[0]);
  }

  /** TextView "" */
  get text8() {
    return $(L.text8[0]);
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
  get text9() {
    return $(L.text9[0]);
  }

  /** TextView "Secure payment processing" */
  get securePaymentProcessingText() {
    return $(L.securePaymentProcessingText[0]);
  }

  /** TextView "" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Instant access after payment" */
  get instantAccessAfterPaymentText() {
    return $(L.instantAccessAfterPaymentText[0]);
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

  /** ViewGroup */
  get bodyFatAcg17Btn() {
    return $(L.bodyFatAcg17Btn[0]);
  }

  /** TextView "" */
  get text11() {
    return $(L.text11[0]);
  }

  /** TextView "Body Fat" */
  get bodyFatText() {
    return $(L.bodyFatText[0]);
  }

  /** TextView "ACG" */
  get acgText() {
    return $(L.acgText[0]);
  }

  /** TextView "17 %" */
  get el17Text() {
    return $(L.el17Text[0]);
  }

  /** TextView "10%" */
  get el10Text() {
    return $(L.el10Text[0]);
  }

  /** TextView "15%" */
  get el15Text2() {
    return $(L.el15Text2[0]);
  }

  /** TextView "20%" */
  get el20Text() {
    return $(L.el20Text[0]);
  }

  /** TextView "Fitness" */
  get fitnessText() {
    return $(L.fitnessText[0]);
  }

  /** ViewGroup */
  get actionNeededCompletePaymentBtn2() {
    return $(L.actionNeededCompletePaymentBtn2[0]);
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

  /** ViewGroup */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "󰸘" */
  get text12() {
    return $(L.text12[0]);
  }
}

export { MainScreen2 as MainScreen2Class, L as MainScreen2Locators };
export default new MainScreen2();
