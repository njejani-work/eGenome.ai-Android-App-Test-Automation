// AUTO-GENERATED from locators/MainScreen29.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen29Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:22:11.307Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  transactionHistoryText: ["android=new UiSelector().text(\"Transaction History\")", "//android.widget.TextView[@text=\"Transaction History\"]"],
  yourTransactionHistoryText: ["android=new UiSelector().text(\"Your transaction history\")", "//android.widget.TextView[@text=\"Your transaction history\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.HorizontalScrollView[1]"],
  allBtn: ["~All", "//android.view.ViewGroup[@content-desc=\"All\"]"],
  allText: ["android=new UiSelector().text(\"All\")", "//android.widget.TextView[@text=\"All\"]"],
  capturedBtn: ["~Captured", "//android.view.ViewGroup[@content-desc=\"Captured\"]"],
  capturedText: ["android=new UiSelector().text(\"Captured\")", "//android.widget.TextView[@text=\"Captured\"]"],
  refundedBtn: ["~Refunded", "//android.view.ViewGroup[@content-desc=\"Refunded\"]"],
  refundedText: ["android=new UiSelector().text(\"Refunded\")", "//android.widget.TextView[@text=\"Refunded\"]"],
  failedBtn: ["~Failed", "//android.view.ViewGroup[@content-desc=\"Failed\"]"],
  failedText: ["android=new UiSelector().text(\"Failed\")", "//android.widget.TextView[@text=\"Failed\"]"],
  authorizedBtn: ["~Authorized", "//android.view.ViewGroup[@content-desc=\"Authorized\"]"],
  authorizedText: ["android=new UiSelector().text(\"Authorized\")", "//android.widget.TextView[@text=\"Authorized\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ScrollView[1]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  noTransactionsYetText: ["android=new UiSelector().text(\"No Transactions Yet\")", "//android.widget.TextView[@text=\"No Transactions Yet\"]"],
  whenYouMakePaymentsText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[3]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  createdBtn: ["~Created", "//android.view.ViewGroup[@content-desc=\"Created\"]"],
  createdText: ["android=new UiSelector().text(\"Created\")", "//android.widget.TextView[@text=\"Created\"]"],
};

class MainScreen29 extends BasePage {
  constructor() {
    super(L, ["allBtn","capturedBtn","refundedBtn"]);
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

  /** TextView "Transaction History" */
  get transactionHistoryText() {
    return $(L.transactionHistoryText[0]);
  }

  /** TextView "Your transaction history" */
  get yourTransactionHistoryText() {
    return $(L.yourTransactionHistoryText[0]);
  }

  /** HorizontalScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get allBtn() {
    return $(L.allBtn[0]);
  }

  /** TextView "All" */
  get allText() {
    return $(L.allText[0]);
  }

  /** ViewGroup */
  get capturedBtn() {
    return $(L.capturedBtn[0]);
  }

  /** TextView "Captured" */
  get capturedText() {
    return $(L.capturedText[0]);
  }

  /** ViewGroup */
  get refundedBtn() {
    return $(L.refundedBtn[0]);
  }

  /** TextView "Refunded" */
  get refundedText() {
    return $(L.refundedText[0]);
  }

  /** ViewGroup */
  get failedBtn() {
    return $(L.failedBtn[0]);
  }

  /** TextView "Failed" */
  get failedText() {
    return $(L.failedText[0]);
  }

  /** ViewGroup */
  get authorizedBtn() {
    return $(L.authorizedBtn[0]);
  }

  /** TextView "Authorized" */
  get authorizedText() {
    return $(L.authorizedText[0]);
  }

  /** ScrollView */
  get list2() {
    return $(L.list2[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "No Transactions Yet" */
  get noTransactionsYetText() {
    return $(L.noTransactionsYetText[0]);
  }

  /** TextView "When you make payments or receive money," */
  get whenYouMakePaymentsText() {
    return $(L.whenYouMakePaymentsText[0]);
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
  get createdBtn() {
    return $(L.createdBtn[0]);
  }

  /** TextView "Created" */
  get createdText() {
    return $(L.createdText[0]);
  }
}

export { MainScreen29 as MainScreen29Class, L as MainScreen29Locators };
export default new MainScreen29();
