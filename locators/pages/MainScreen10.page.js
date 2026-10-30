// AUTO-GENERATED from locators/MainScreen10.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen10Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:56:42.669Z
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
  completePaymentBtn: ["~Complete Payment", "//android.view.ViewGroup[@content-desc=\"Complete Payment\"]"],
  completePaymentText: ["(//android.widget.TextView[@text=\"Complete Payment\"])[1]", "android=new UiSelector().text(\"Complete Payment\")"],
  secureCheckoutInstantActivationText: ["android=new UiSelector().text(\"Secure checkout • Instant activation\")", "//android.widget.TextView[@text=\"Secure checkout • Instant activation\"]"],
  dailyRoutineText: ["android=new UiSelector().text(\"Daily Routine\")", "//android.widget.TextView[@text=\"Daily Routine\"]"],
  el20261028Text: ["android=new UiSelector().text(\"2026-10-28\")", "//android.widget.TextView[@text=\"2026-10-28\"]"],
  btn: ["~󰸘", "//android.view.ViewGroup[@content-desc=\"󰸘\"]"],
  text4: ["android=new UiSelector().text(\"󰸘\")", "//android.widget.TextView[@text=\"󰸘\"]"],
  el1DayStreakBtn: ["~1, Day Streak", "//android.view.ViewGroup[@content-desc=\"1, Day Streak\"]"],
  el1Text: ["android=new UiSelector().text(\"1\")", "//android.widget.TextView[@text=\"1\"]"],
  dayStreakText: ["android=new UiSelector().text(\"Day Streak\")", "//android.widget.TextView[@text=\"Day Streak\"]"],
  el20Text: ["android=new UiSelector().text(\"20%\")", "//android.widget.TextView[@text=\"20%\"]"],
  overallText: ["android=new UiSelector().text(\"Overall\")", "//android.widget.TextView[@text=\"Overall\"]"],
  mealsText: ["android=new UiSelector().text(\"Meals\")", "//android.widget.TextView[@text=\"Meals\"]"],
  exerciseText: ["android=new UiSelector().text(\"Exercise\")", "//android.widget.TextView[@text=\"Exercise\"]"],
  text5: ["android=new UiSelector().text(\"󰉚\")", "//android.widget.TextView[@text=\"󰉚\"]"],
  dinner0800PmText: ["android=new UiSelector().text(\"Dinner  ·  08:00 PM (latest)\")", "//android.widget.TextView[@text=\"Dinner  ·  08:00 PM (latest)\"]"],
  mealText: ["android=new UiSelector().text(\"Meal\")", "//android.widget.TextView[@text=\"Meal\"]"],
  el1TbspGheeText: ["android=new UiSelector().text(\"1 tbsp ghee\")", "//android.widget.TextView[@text=\"1 tbsp ghee\"]"],
  bottleGuardVegetableText: ["android=new UiSelector().text(\"bottle guard vegetable\")", "//android.widget.TextView[@text=\"bottle guard vegetable\"]"],
  el3MoreItemsBtn: ["~+3 more items", "//android.view.ViewGroup[@content-desc=\"+3 more items\"]"],
  el3MoreItemsText: ["android=new UiSelector().text(\"+3 more items\")", "//android.widget.TextView[@text=\"+3 more items\"]"],
  text6: ["android=new UiSelector().text(\"󰄴\")", "//android.widget.TextView[@text=\"󰄴\"]"],
  el1Of5TasksText: ["android=new UiSelector().text(\"1 of 5 tasks done today\")", "//android.widget.TextView[@text=\"1 of 5 tasks done today\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  paymentRequiredText: ["android=new UiSelector().text(\"PAYMENT REQUIRED\")", "//android.widget.TextView[@text=\"PAYMENT REQUIRED\"]"],
  completeYourPaymentToText: ["android=new UiSelector().text(\"Complete your payment to continue with your health report.\")", "//android.widget.TextView[@text=\"Complete your payment to continue with your health report.\"]"],
  paymentText: ["android=new UiSelector().text(\"Payment\")", "//android.widget.TextView[@text=\"Payment\"]"],
  secureText: ["android=new UiSelector().text(\"Secure\")", "//android.widget.TextView[@text=\"Secure\"]"],
  instantText: ["android=new UiSelector().text(\"Instant\")", "//android.widget.TextView[@text=\"Instant\"]"],
  text8: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  securePaymentProcessingText: ["android=new UiSelector().text(\"Secure payment processing\")", "//android.widget.TextView[@text=\"Secure payment processing\"]"],
  text9: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  instantAccessAfterPaymentText: ["android=new UiSelector().text(\"Instant access after payment\")", "//android.widget.TextView[@text=\"Instant access after payment\"]"],
  fullHealthReportIncludedText: ["android=new UiSelector().text(\"Full health report included\")", "//android.widget.TextView[@text=\"Full health report included\"]"],
  completePaymentText2: ["(//android.widget.TextView[@text=\"Complete Payment\"])[2]", "android=new UiSelector().text(\"Complete Payment\")"],
};

class MainScreen10 extends BasePage {
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

  /** ViewGroup */
  get completePaymentBtn() {
    return $(L.completePaymentBtn[0]);
  }

  /** TextView "Complete Payment" */
  get completePaymentText() {
    return $(L.completePaymentText[0]);
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
  get text4() {
    return $(L.text4[0]);
  }

  /** ViewGroup */
  get el1DayStreakBtn() {
    return $(L.el1DayStreakBtn[0]);
  }

  /** TextView "1" */
  get el1Text() {
    return $(L.el1Text[0]);
  }

  /** TextView "Day Streak" */
  get dayStreakText() {
    return $(L.dayStreakText[0]);
  }

  /** TextView "20%" */
  get el20Text() {
    return $(L.el20Text[0]);
  }

  /** TextView "Overall" */
  get overallText() {
    return $(L.overallText[0]);
  }

  /** TextView "Meals" */
  get mealsText() {
    return $(L.mealsText[0]);
  }

  /** TextView "Exercise" */
  get exerciseText() {
    return $(L.exerciseText[0]);
  }

  /** TextView "󰉚" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Dinner  ·  08:00 PM (latest)" */
  get dinner0800PmText() {
    return $(L.dinner0800PmText[0]);
  }

  /** TextView "Meal" */
  get mealText() {
    return $(L.mealText[0]);
  }

  /** TextView "1 tbsp ghee" */
  get el1TbspGheeText() {
    return $(L.el1TbspGheeText[0]);
  }

  /** TextView "bottle guard vegetable" */
  get bottleGuardVegetableText() {
    return $(L.bottleGuardVegetableText[0]);
  }

  /** ViewGroup */
  get el3MoreItemsBtn() {
    return $(L.el3MoreItemsBtn[0]);
  }

  /** TextView "+3 more items" */
  get el3MoreItemsText() {
    return $(L.el3MoreItemsText[0]);
  }

  /** TextView "󰄴" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "1 of 5 tasks done today" */
  get el1Of5TasksText() {
    return $(L.el1Of5TasksText[0]);
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

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
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
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView "Secure payment processing" */
  get securePaymentProcessingText() {
    return $(L.securePaymentProcessingText[0]);
  }

  /** TextView "" */
  get text9() {
    return $(L.text9[0]);
  }

  /** TextView "Instant access after payment" */
  get instantAccessAfterPaymentText() {
    return $(L.instantAccessAfterPaymentText[0]);
  }

  /** TextView "Full health report included" */
  get fullHealthReportIncludedText() {
    return $(L.fullHealthReportIncludedText[0]);
  }

  /** TextView "Complete Payment" */
  get completePaymentText2() {
    return $(L.completePaymentText2[0]);
  }
}

export { MainScreen10 as MainScreen10Class, L as MainScreen10Locators };
export default new MainScreen10();
