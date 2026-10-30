// AUTO-GENERATED from locators/MainScreen18.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen18Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:23:34.617Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  jdJohnDoeAccountBtn: ["~JD, , John Doe, Account Holder, Tap to manage profile, ", "//android.view.ViewGroup[@content-desc=\"JD, , John Doe, Account Holder, Tap to manage profile, \"]"],
  jdText: ["android=new UiSelector().text(\"JD\")", "//android.widget.TextView[@text=\"JD\"]"],
  johnDoeText: ["android=new UiSelector().text(\"John Doe\")", "//android.widget.TextView[@text=\"John Doe\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  accountHolderText: ["android=new UiSelector().text(\"Account Holder\")", "//android.widget.TextView[@text=\"Account Holder\"]"],
  text2: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  tapToManageProfileText: ["android=new UiSelector().text(\"Tap to manage profile\")", "//android.widget.TextView[@text=\"Tap to manage profile\"]"],
  appearanceText: ["android=new UiSelector().text(\"Appearance\")", "//android.widget.TextView[@text=\"Appearance\"]"],
  lightBtn: ["~, Light", "//android.view.ViewGroup[@content-desc=\", Light\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  lightText: ["android=new UiSelector().text(\"Light\")", "//android.widget.TextView[@text=\"Light\"]"],
  darkBtn: ["~, Dark", "//android.view.ViewGroup[@content-desc=\", Dark\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  darkText: ["android=new UiSelector().text(\"Dark\")", "//android.widget.TextView[@text=\"Dark\"]"],
  systemBtn: ["~, System", "//android.view.ViewGroup[@content-desc=\", System\"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  systemText: ["android=new UiSelector().text(\"System\")", "//android.widget.TextView[@text=\"System\"]"],
  accountManagement2View: ["~, Account Management, 2", "//android.view.ViewGroup[@content-desc=\", Account Management, 2\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  accountManagementText: ["android=new UiSelector().text(\"Account Management\")", "//android.widget.TextView[@text=\"Account Management\"]"],
  btn: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el2Text: ["android=new UiSelector().text(\"2\")", "//android.widget.TextView[@text=\"2\"]"],
  manageAddressesBtn: ["~, Manage Addresses, ", "//android.view.ViewGroup[@content-desc=\", Manage Addresses, \"]"],
  text8: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  manageAddressesText: ["android=new UiSelector().text(\"Manage Addresses\")", "//android.widget.TextView[@text=\"Manage Addresses\"]"],
  text9: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  manageDependentsBtn: ["~, Manage Dependents, ", "//android.view.ViewGroup[@content-desc=\", Manage Dependents, \"]"],
  text10: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  manageDependentsText: ["android=new UiSelector().text(\"Manage Dependents\")", "//android.widget.TextView[@text=\"Manage Dependents\"]"],
  premiumFeatures3View: ["~Premium Features, 3", "//android.view.ViewGroup[@content-desc=\"Premium Features, 3\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
};

class MainScreen18 extends BasePage {
  constructor() {
    super(L, ["jdJohnDoeAccountBtn","lightBtn","darkBtn"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get jdJohnDoeAccountBtn() {
    return $(L.jdJohnDoeAccountBtn[0]);
  }

  /** TextView "JD" */
  get jdText() {
    return $(L.jdText[0]);
  }

  /** TextView "John Doe" */
  get johnDoeText() {
    return $(L.johnDoeText[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "Account Holder" */
  get accountHolderText() {
    return $(L.accountHolderText[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "Tap to manage profile" */
  get tapToManageProfileText() {
    return $(L.tapToManageProfileText[0]);
  }

  /** TextView "Appearance" */
  get appearanceText() {
    return $(L.appearanceText[0]);
  }

  /** ViewGroup */
  get lightBtn() {
    return $(L.lightBtn[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "Light" */
  get lightText() {
    return $(L.lightText[0]);
  }

  /** ViewGroup */
  get darkBtn() {
    return $(L.darkBtn[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Dark" */
  get darkText() {
    return $(L.darkText[0]);
  }

  /** ViewGroup */
  get systemBtn() {
    return $(L.systemBtn[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "System" */
  get systemText() {
    return $(L.systemText[0]);
  }

  /** ViewGroup */
  get accountManagement2View() {
    return $(L.accountManagement2View[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Account Management" */
  get accountManagementText() {
    return $(L.accountManagementText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "2" */
  get el2Text() {
    return $(L.el2Text[0]);
  }

  /** ViewGroup */
  get manageAddressesBtn() {
    return $(L.manageAddressesBtn[0]);
  }

  /** TextView "" */
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView "Manage Addresses" */
  get manageAddressesText() {
    return $(L.manageAddressesText[0]);
  }

  /** TextView "" */
  get text9() {
    return $(L.text9[0]);
  }

  /** ViewGroup */
  get manageDependentsBtn() {
    return $(L.manageDependentsBtn[0]);
  }

  /** TextView "" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Manage Dependents" */
  get manageDependentsText() {
    return $(L.manageDependentsText[0]);
  }

  /** ViewGroup */
  get premiumFeatures3View() {
    return $(L.premiumFeatures3View[0]);
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

  /** ScrollView */
  get list2() {
    return $(L.list2[0]);
  }
}

export { MainScreen18 as MainScreen18Class, L as MainScreen18Locators };
export default new MainScreen18();
