// AUTO-GENERATED from locators/MainScreen33.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen33Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:55:27.921Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  cancelSubscriptionText: ["(//android.widget.TextView[@text=\"Cancel Subscription\"])[1]", "android=new UiSelector().text(\"Cancel Subscription\")"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  itFeltTooExpensiveBtn: ["~It felt too expensive for what I got", "//android.view.ViewGroup[@content-desc=\"It felt too expensive for what I got\"]"],
  itFeltTooExpensiveText: ["android=new UiSelector().text(\"It felt too expensive for what I got\")", "//android.widget.TextView[@text=\"It felt too expensive for what I got\"]"],
  iFoundABetterBtn: ["~I found a better or more local app/service", "//android.view.ViewGroup[@content-desc=\"I found a better or more local app/service\"]"],
  iFoundABetterText: ["android=new UiSelector().text(\"I found a better or more local app/service\")", "//android.widget.TextView[@text=\"I found a better or more local app/service\"]"],
  technicalIssuesOrPoorBtn: ["~Technical issues or poor app experience", "//android.view.ViewGroup[@content-desc=\"Technical issues or poor app experience\"]"],
  technicalIssuesOrPoorText: ["android=new UiSelector().text(\"Technical issues or poor app experience\")", "//android.widget.TextView[@text=\"Technical issues or poor app experience\"]"],
  iFacedBillingOrBtn: ["~I faced billing or payment issues", "//android.view.ViewGroup[@content-desc=\"I faced billing or payment issues\"]"],
  iFacedBillingOrText: ["android=new UiSelector().text(\"I faced billing or payment issues\")", "//android.widget.TextView[@text=\"I faced billing or payment issues\"]"],
  otherBtn: ["~Other", "//android.view.ViewGroup[@content-desc=\"Other\"]"],
  otherText: ["android=new UiSelector().text(\"Other\")", "//android.widget.TextView[@text=\"Other\"]"],
  cancelSubscriptionView: ["~Cancel Subscription", "//android.view.ViewGroup[@content-desc=\"Cancel Subscription\"]"],
  cancelSubscriptionText2: ["(//android.widget.TextView[@text=\"Cancel Subscription\"])[2]", "android=new UiSelector().text(\"Cancel Subscription\")"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen33 extends BasePage {
  constructor() {
    super(L, ["iFoundABetterBtn","technicalIssuesOrPoorBtn","iFacedBillingOrBtn"]);
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

  /** TextView "Cancel Subscription" */
  get cancelSubscriptionText() {
    return $(L.cancelSubscriptionText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get itFeltTooExpensiveBtn() {
    return $(L.itFeltTooExpensiveBtn[0]);
  }

  /** TextView "It felt too expensive for what I got" */
  get itFeltTooExpensiveText() {
    return $(L.itFeltTooExpensiveText[0]);
  }

  /** ViewGroup */
  get iFoundABetterBtn() {
    return $(L.iFoundABetterBtn[0]);
  }

  /** TextView "I found a better or more local app/servi" */
  get iFoundABetterText() {
    return $(L.iFoundABetterText[0]);
  }

  /** ViewGroup */
  get technicalIssuesOrPoorBtn() {
    return $(L.technicalIssuesOrPoorBtn[0]);
  }

  /** TextView "Technical issues or poor app experience" */
  get technicalIssuesOrPoorText() {
    return $(L.technicalIssuesOrPoorText[0]);
  }

  /** ViewGroup */
  get iFacedBillingOrBtn() {
    return $(L.iFacedBillingOrBtn[0]);
  }

  /** TextView "I faced billing or payment issues" */
  get iFacedBillingOrText() {
    return $(L.iFacedBillingOrText[0]);
  }

  /** ViewGroup */
  get otherBtn() {
    return $(L.otherBtn[0]);
  }

  /** TextView "Other" */
  get otherText() {
    return $(L.otherText[0]);
  }

  /** ViewGroup */
  get cancelSubscriptionView() {
    return $(L.cancelSubscriptionView[0]);
  }

  /** TextView "Cancel Subscription" */
  get cancelSubscriptionText2() {
    return $(L.cancelSubscriptionText2[0]);
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

export { MainScreen33 as MainScreen33Class, L as MainScreen33Locators };
export default new MainScreen33();
