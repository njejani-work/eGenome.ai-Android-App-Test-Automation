// AUTO-GENERATED from locators/MainScreen32.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen32Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:55:25.038Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  cancelSubscriptionText: ["android=new UiSelector().text(\"Cancel Subscription\")", "//android.widget.TextView[@text=\"Cancel Subscription\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  currentPlanText: ["android=new UiSelector().text(\"Current Plan\")", "//android.widget.TextView[@text=\"Current Plan\"]"],
  monthlyPlanText: ["android=new UiSelector().text(\"Monthly Plan\")", "//android.widget.TextView[@text=\"Monthly Plan\"]"],
  statusText: ["android=new UiSelector().text(\"Status:\")", "//android.widget.TextView[@text=\"Status:\"]"],
  activeText: ["android=new UiSelector().text(\"ACTIVE\")", "//android.widget.TextView[@text=\"ACTIVE\"]"],
  priceText: ["android=new UiSelector().text(\"Price:\")", "//android.widget.TextView[@text=\"Price:\"]"],
  el99900MonthlyText: ["android=new UiSelector().text(\"₹999.00 / monthly\")", "//android.widget.TextView[@text=\"₹999.00 / monthly\"]"],
  activeUntilText: ["android=new UiSelector().text(\"Active Until:\")", "//android.widget.TextView[@text=\"Active Until:\"]"],
  oct022025Text: ["android=new UiSelector().text(\"Oct 02, 2025\")", "//android.widget.TextView[@text=\"Oct 02, 2025\"]"],
  youAreAboutToText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[9]"],
  noteThatThisActionText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[10]"],
  pleaseSelectAReasonText: ["android=new UiSelector().text(\"Please select a reason to cancel\")", "//android.widget.TextView[@text=\"Please select a reason to cancel\"]"],
  iDidnTUseBtn: ["~I didn't use it enough / my needs have changed", "//android.view.ViewGroup[@content-desc=\"I didn't use it enough / my needs have changed\"]"],
  iDidnTUseText: ["android=new UiSelector().text(\"I didn't use it enough / my needs have changed\")", "//android.widget.TextView[@text=\"I didn't use it enough / my needs have changed\"]"],
  itFeltTooExpensiveBtn: ["~It felt too expensive for what I got", "//android.view.ViewGroup[@content-desc=\"It felt too expensive for what I got\"]"],
  itFeltTooExpensiveText: ["android=new UiSelector().text(\"It felt too expensive for what I got\")", "//android.widget.TextView[@text=\"It felt too expensive for what I got\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen32 extends BasePage {
  constructor() {
    super(L, ["iDidnTUseBtn"]);
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

  /** TextView "Current Plan" */
  get currentPlanText() {
    return $(L.currentPlanText[0]);
  }

  /** TextView "Monthly Plan" */
  get monthlyPlanText() {
    return $(L.monthlyPlanText[0]);
  }

  /** TextView "Status:" */
  get statusText() {
    return $(L.statusText[0]);
  }

  /** TextView "ACTIVE" */
  get activeText() {
    return $(L.activeText[0]);
  }

  /** TextView "Price:" */
  get priceText() {
    return $(L.priceText[0]);
  }

  /** TextView "₹999.00 / monthly" */
  get el99900MonthlyText() {
    return $(L.el99900MonthlyText[0]);
  }

  /** TextView "Active Until:" */
  get activeUntilText() {
    return $(L.activeUntilText[0]);
  }

  /** TextView "Oct 02, 2025" */
  get oct022025Text() {
    return $(L.oct022025Text[0]);
  }

  /** TextView "You are about to cancel this subscriptio" */
  get youAreAboutToText() {
    return $(L.youAreAboutToText[0]);
  }

  /** TextView "Note that this action is irreversible an" */
  get noteThatThisActionText() {
    return $(L.noteThatThisActionText[0]);
  }

  /** TextView "Please select a reason to cancel" */
  get pleaseSelectAReasonText() {
    return $(L.pleaseSelectAReasonText[0]);
  }

  /** ViewGroup */
  get iDidnTUseBtn() {
    return $(L.iDidnTUseBtn[0]);
  }

  /** TextView "I didn't use it enough / my needs have c" */
  get iDidnTUseText() {
    return $(L.iDidnTUseText[0]);
  }

  /** ViewGroup */
  get itFeltTooExpensiveBtn() {
    return $(L.itFeltTooExpensiveBtn[0]);
  }

  /** TextView "It felt too expensive for what I got" */
  get itFeltTooExpensiveText() {
    return $(L.itFeltTooExpensiveText[0]);
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

export { MainScreen32 as MainScreen32Class, L as MainScreen32Locators };
export default new MainScreen32();
