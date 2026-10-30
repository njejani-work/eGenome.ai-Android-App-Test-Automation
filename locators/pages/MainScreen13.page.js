// AUTO-GENERATED from locators/MainScreen13.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen13Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:21:51.461Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  eGenomePremiumText: ["android=new UiSelector().text(\"eGenome Premium\")", "//android.widget.TextView[@text=\"eGenome Premium\"]"],
  pushYourBoundariesAndText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[2]"],
  el11988Text: ["android=new UiSelector().text(\"₹11,988\")", "//android.widget.TextView[@text=\"₹11,988\"]"],
  el9999Text: ["android=new UiSelector().text(\"₹9,999\")", "//android.widget.TextView[@text=\"₹9,999\"]"],
  perYearText: ["android=new UiSelector().text(\"per year*\")", "//android.widget.TextView[@text=\"per year*\"]"],
  saveUpTo1000Text: ["android=new UiSelector().text(\"Save up to ₹1000 annually by using EMI\")", "//android.widget.TextView[@text=\"Save up to ₹1000 annually by using EMI\"]"],
  freeText: ["android=new UiSelector().text(\"Free\")", "//android.widget.TextView[@text=\"Free\"]"],
  premiumText: ["android=new UiSelector().text(\"Premium\")", "//android.widget.TextView[@text=\"Premium\"]"],
  hassleFreeBloodTestText: ["android=new UiSelector().text(\"Hassle-free Blood Test\")", "//android.widget.TextView[@text=\"Hassle-free Blood Test\"]"],
  text2: ["(//android.widget.TextView[@text=\"—\"])[1]", "android=new UiSelector().text(\"—\")"],
  text3: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  healthEvaluationReportText: ["android=new UiSelector().text(\"Health Evaluation Report\")", "//android.widget.TextView[@text=\"Health Evaluation Report\"]"],
  text4: ["(//android.widget.TextView[@text=\"—\"])[2]", "android=new UiSelector().text(\"—\")"],
  text5: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  mastercardView: ["~mastercard", "//com.horcrux.svg.SvgView[@content-desc=\"mastercard\"]"],
  visaView: ["~visa", "//com.horcrux.svg.SvgView[@content-desc=\"visa\"]"],
  googlePayView: ["~google pay", "//com.horcrux.svg.SvgView[@content-desc=\"google pay\"]"],
  phonepeView: ["~phonepe", "//com.horcrux.svg.SvgView[@content-desc=\"phonepe\"]"],
  upiView: ["~upi", "//com.horcrux.svg.SvgView[@content-desc=\"upi\"]"],
  emiStarts899MonthBtn: ["~EMI Starts @ ₹899/Month, Limited Time Offer", "//android.view.ViewGroup[@content-desc=\"EMI Starts @ ₹899/Month, Limited Time Offer\"]"],
  limitedTimeOfferText: ["android=new UiSelector().text(\"Limited Time Offer\")", "//android.widget.TextView[@text=\"Limited Time Offer\"]"],
  emiStarts899MonthText: ["android=new UiSelector().text(\"EMI Starts @ ₹899/Month\")", "//android.widget.TextView[@text=\"EMI Starts @ ₹899/Month\"]"],
  el9999YearOneBtn: ["~₹9,999/Year, one-time", "//android.view.ViewGroup[@content-desc=\"₹9,999/Year, one-time\"]"],
  el9999YearOneText: ["android=new UiSelector().text(\"₹9,999/Year, one-time\")", "//android.widget.TextView[@text=\"₹9,999/Year, one-time\"]"],
  noAutoRenewalText: ["android=new UiSelector().text(\"No Auto Renewal\")", "//android.widget.TextView[@text=\"No Auto Renewal\"]"],
  personalizedDietPlanText: ["android=new UiSelector().text(\"Personalized Diet Plan\")", "//android.widget.TextView[@text=\"Personalized Diet Plan\"]"],
  workoutAndLifestylePlansText: ["android=new UiSelector().text(\"Workout and Lifestyle Plans\")", "//android.widget.TextView[@text=\"Workout and Lifestyle Plans\"]"],
  freeWeighingScaleAfterText: ["android=new UiSelector().text(\"Free weighing scale after 6 months\")", "//android.widget.TextView[@text=\"Free weighing scale after 6 months\"]"],
  paymentProcessingFailedText: ["android=new UiSelector().text(\"Payment processing failed\")", "//android.widget.TextView[@text=\"Payment processing failed\"]"],
};

class MainScreen13 extends BasePage {
  constructor() {
    super(L, ["emiStarts899MonthBtn","el9999YearOneBtn","mastercardView"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ViewGroup */
  get goBackBtn() {
    return $(L.goBackBtn[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "eGenome Premium" */
  get eGenomePremiumText() {
    return $(L.eGenomePremiumText[0]);
  }

  /** TextView "Push your boundaries and kick off your w" */
  get pushYourBoundariesAndText() {
    return $(L.pushYourBoundariesAndText[0]);
  }

  /** TextView "₹11,988" */
  get el11988Text() {
    return $(L.el11988Text[0]);
  }

  /** TextView "₹9,999" */
  get el9999Text() {
    return $(L.el9999Text[0]);
  }

  /** TextView "per year*" */
  get perYearText() {
    return $(L.perYearText[0]);
  }

  /** TextView "Save up to ₹1000 annually by using EMI" */
  get saveUpTo1000Text() {
    return $(L.saveUpTo1000Text[0]);
  }

  /** TextView "Free" */
  get freeText() {
    return $(L.freeText[0]);
  }

  /** TextView "Premium" */
  get premiumText() {
    return $(L.premiumText[0]);
  }

  /** TextView "Hassle-free Blood Test" */
  get hassleFreeBloodTestText() {
    return $(L.hassleFreeBloodTestText[0]);
  }

  /** TextView "—" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "Health Evaluation Report" */
  get healthEvaluationReportText() {
    return $(L.healthEvaluationReportText[0]);
  }

  /** TextView "—" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** SvgView */
  get mastercardView() {
    return $(L.mastercardView[0]);
  }

  /** SvgView */
  get visaView() {
    return $(L.visaView[0]);
  }

  /** SvgView */
  get googlePayView() {
    return $(L.googlePayView[0]);
  }

  /** SvgView */
  get phonepeView() {
    return $(L.phonepeView[0]);
  }

  /** SvgView */
  get upiView() {
    return $(L.upiView[0]);
  }

  /** ViewGroup */
  get emiStarts899MonthBtn() {
    return $(L.emiStarts899MonthBtn[0]);
  }

  /** TextView "Limited Time Offer" */
  get limitedTimeOfferText() {
    return $(L.limitedTimeOfferText[0]);
  }

  /** TextView "EMI Starts @ ₹899/Month" */
  get emiStarts899MonthText() {
    return $(L.emiStarts899MonthText[0]);
  }

  /** ViewGroup */
  get el9999YearOneBtn() {
    return $(L.el9999YearOneBtn[0]);
  }

  /** TextView "₹9,999/Year, one-time" */
  get el9999YearOneText() {
    return $(L.el9999YearOneText[0]);
  }

  /** TextView "No Auto Renewal" */
  get noAutoRenewalText() {
    return $(L.noAutoRenewalText[0]);
  }

  /** TextView "Personalized Diet Plan" */
  get personalizedDietPlanText() {
    return $(L.personalizedDietPlanText[0]);
  }

  /** TextView "Workout and Lifestyle Plans" */
  get workoutAndLifestylePlansText() {
    return $(L.workoutAndLifestylePlansText[0]);
  }

  /** TextView "Free weighing scale after 6 months" */
  get freeWeighingScaleAfterText() {
    return $(L.freeWeighingScaleAfterText[0]);
  }

  /** TextView "Payment processing failed" */
  get paymentProcessingFailedText() {
    return $(L.paymentProcessingFailedText[0]);
  }
}

export { MainScreen13 as MainScreen13Class, L as MainScreen13Locators };
export default new MainScreen13();
