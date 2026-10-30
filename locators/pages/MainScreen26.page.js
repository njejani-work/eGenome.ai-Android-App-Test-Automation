// AUTO-GENERATED from locators/MainScreen26.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen26Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:53:34.596Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  manageAddressesText: ["android=new UiSelector().text(\"Manage Addresses\")", "//android.widget.TextView[@text=\"Manage Addresses\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  homeServiceablePrimaryHomeBtn: ["~, Home, SERVICEABLE, PRIMARY, Home Address, 123, Main Street, Main Street\nJacobpura, Haryana - 122001", "//android.view.ViewGroup[@content-desc=\", Home, SERVICEABLE, PRIMARY, Home Address, 123, Main Street, Main Street\nJacobpura, Haryana - 122001\"]"],
  text: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  serviceableText: ["(//android.widget.TextView[@text=\"SERVICEABLE\"])[1]", "android=new UiSelector().text(\"SERVICEABLE\")"],
  primaryText: ["android=new UiSelector().text(\"PRIMARY\")", "//android.widget.TextView[@text=\"PRIMARY\"]"],
  homeAddressText: ["(//android.widget.TextView[@text=\"Home Address\"])[1]", "android=new UiSelector().text(\"Home Address\")"],
  btn: ["(//android.view.ViewGroup[@content-desc=\"\"])[1]", "~"],
  text2: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  el123MainStreetMainText: ["android=new UiSelector().text(\"123, Main Street, Main Street\nJacobpura, Haryana - 122001\")", "//android.widget.TextView[@text=\"123, Main Street, Main Street\nJacobpura, Haryana - 122001\"]"],
  homeServiceableHomeAddressBtn: ["~, Home, SERVICEABLE, Home Address, sdg, as\nSector 10, Haryana - 122001", "//android.view.ViewGroup[@content-desc=\", Home, SERVICEABLE, Home Address, sdg, as\nSector 10, Haryana - 122001\"]"],
  text3: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  homeText2: ["(//android.widget.TextView[@text=\"Home\"])[2]", "android=new UiSelector().text(\"Home\")"],
  serviceableText2: ["(//android.widget.TextView[@text=\"SERVICEABLE\"])[2]", "android=new UiSelector().text(\"SERVICEABLE\")"],
  homeAddressText2: ["(//android.widget.TextView[@text=\"Home Address\"])[2]", "android=new UiSelector().text(\"Home Address\")"],
  text4: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  sdgAsSector10Text: ["android=new UiSelector().text(\"sdg, as\nSector 10, Haryana - 122001\")", "//android.widget.TextView[@text=\"sdg, as\nSector 10, Haryana - 122001\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  btn2: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  addressAddedSuccessfullyText: ["android=new UiSelector().text(\"Address added successfully!\")", "//android.widget.TextView[@text=\"Address added successfully!\"]"],
  familyNetworkText: ["android=new UiSelector().text(\"Family Network\")", "//android.widget.TextView[@text=\"Family Network\"]"],
  memberText: ["android=new UiSelector().text(\"member\")", "//android.widget.TextView[@text=\"member\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  el1Text: ["(//android.widget.TextView[@text=\"1\"])[1]", "android=new UiSelector().text(\"1\")"],
  membersText: ["android=new UiSelector().text(\"Members\")", "//android.widget.TextView[@text=\"Members\"]"],
  el1Text2: ["(//android.widget.TextView[@text=\"1\"])[2]", "android=new UiSelector().text(\"1\")"],
  relationsText: ["android=new UiSelector().text(\"Relations\")", "//android.widget.TextView[@text=\"Relations\"]"],
  el0Text: ["android=new UiSelector().text(\"0\")", "//android.widget.TextView[@text=\"0\"]"],
  minorsText: ["android=new UiSelector().text(\"Minors\")", "//android.widget.TextView[@text=\"Minors\"]"],
  userProfilesText: ["android=new UiSelector().text(\"User Profiles\")", "//android.widget.TextView[@text=\"User Profiles\"]"],
  jmJohnyMarkSpouseBtn: ["~JM, , Johny Mark, Spouse, 30y, ", "//android.view.ViewGroup[@content-desc=\"JM, , Johny Mark, Spouse, 30y, \"]"],
  jmText: ["android=new UiSelector().text(\"JM\")", "//android.widget.TextView[@text=\"JM\"]"],
  text8: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  johnyMarkText: ["android=new UiSelector().text(\"Johny Mark\")", "//android.widget.TextView[@text=\"Johny Mark\"]"],
  spouseText: ["android=new UiSelector().text(\"Spouse\")", "//android.widget.TextView[@text=\"Spouse\"]"],
  el30yText: ["android=new UiSelector().text(\"30y\")", "//android.widget.TextView[@text=\"30y\"]"],
  text9: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
};

class MainScreen26 extends BasePage {
  constructor() {
    super(L, ["homeServiceablePrimaryHomeBtn","homeServiceableHomeAddressBtn","jmJohnyMarkSpouseBtn"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** TextView "Manage Addresses" */
  get manageAddressesText() {
    return $(L.manageAddressesText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get homeServiceablePrimaryHomeBtn() {
    return $(L.homeServiceablePrimaryHomeBtn[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "Home" */
  get homeText() {
    return $(L.homeText[0]);
  }

  /** TextView "SERVICEABLE" */
  get serviceableText() {
    return $(L.serviceableText[0]);
  }

  /** TextView "PRIMARY" */
  get primaryText() {
    return $(L.primaryText[0]);
  }

  /** TextView "Home Address" */
  get homeAddressText() {
    return $(L.homeAddressText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "123, Main Street, Main Street
Jacobpura," */
  get el123MainStreetMainText() {
    return $(L.el123MainStreetMainText[0]);
  }

  /** ViewGroup */
  get homeServiceableHomeAddressBtn() {
    return $(L.homeServiceableHomeAddressBtn[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "Home" */
  get homeText2() {
    return $(L.homeText2[0]);
  }

  /** TextView "SERVICEABLE" */
  get serviceableText2() {
    return $(L.serviceableText2[0]);
  }

  /** TextView "Home Address" */
  get homeAddressText2() {
    return $(L.homeAddressText2[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "sdg, as
Sector 10, Haryana - 122001" */
  get sdgAsSector10Text() {
    return $(L.sdgAsSector10Text[0]);
  }

  /** ViewGroup */
  get goBackBtn() {
    return $(L.goBackBtn[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** ViewGroup */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** View */
  get homeBtn() {
    return $(L.homeBtn[0]);
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

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Address added successfully!" */
  get addressAddedSuccessfullyText() {
    return $(L.addressAddedSuccessfullyText[0]);
  }

  /** TextView "Family Network" */
  get familyNetworkText() {
    return $(L.familyNetworkText[0]);
  }

  /** TextView "member" */
  get memberText() {
    return $(L.memberText[0]);
  }

  /** ScrollView */
  get list2() {
    return $(L.list2[0]);
  }

  /** TextView "1" */
  get el1Text() {
    return $(L.el1Text[0]);
  }

  /** TextView "Members" */
  get membersText() {
    return $(L.membersText[0]);
  }

  /** TextView "1" */
  get el1Text2() {
    return $(L.el1Text2[0]);
  }

  /** TextView "Relations" */
  get relationsText() {
    return $(L.relationsText[0]);
  }

  /** TextView "0" */
  get el0Text() {
    return $(L.el0Text[0]);
  }

  /** TextView "Minors" */
  get minorsText() {
    return $(L.minorsText[0]);
  }

  /** TextView "User Profiles" */
  get userProfilesText() {
    return $(L.userProfilesText[0]);
  }

  /** ViewGroup */
  get jmJohnyMarkSpouseBtn() {
    return $(L.jmJohnyMarkSpouseBtn[0]);
  }

  /** TextView "JM" */
  get jmText() {
    return $(L.jmText[0]);
  }

  /** TextView "" */
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView "Johny Mark" */
  get johnyMarkText() {
    return $(L.johnyMarkText[0]);
  }

  /** TextView "Spouse" */
  get spouseText() {
    return $(L.spouseText[0]);
  }

  /** TextView "30y" */
  get el30yText() {
    return $(L.el30yText[0]);
  }

  /** TextView "" */
  get text9() {
    return $(L.text9[0]);
  }
}

export { MainScreen26 as MainScreen26Class, L as MainScreen26Locators };
export default new MainScreen26();
