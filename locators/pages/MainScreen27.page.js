// AUTO-GENERATED from locators/MainScreen27.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen27Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:54:04.183Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  familyNetworkText: ["android=new UiSelector().text(\"Family Network\")", "//android.widget.TextView[@text=\"Family Network\"]"],
  memberText: ["android=new UiSelector().text(\"member\")", "//android.widget.TextView[@text=\"member\"]"],
  btn: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  el1Text: ["(//android.widget.TextView[@text=\"1\"])[1]", "android=new UiSelector().text(\"1\")"],
  membersText: ["android=new UiSelector().text(\"Members\")", "//android.widget.TextView[@text=\"Members\"]"],
  el1Text2: ["(//android.widget.TextView[@text=\"1\"])[2]", "android=new UiSelector().text(\"1\")"],
  relationsText: ["android=new UiSelector().text(\"Relations\")", "//android.widget.TextView[@text=\"Relations\"]"],
  el0Text: ["android=new UiSelector().text(\"0\")", "//android.widget.TextView[@text=\"0\"]"],
  minorsText: ["android=new UiSelector().text(\"Minors\")", "//android.widget.TextView[@text=\"Minors\"]"],
  userProfilesText: ["android=new UiSelector().text(\"User Profiles\")", "//android.widget.TextView[@text=\"User Profiles\"]"],
  jmJohnyMarkSpouseBtn: ["~JM, , Johny Mark, Spouse, 30y, , , +919311235766", "//android.view.ViewGroup[@content-desc=\"JM, , Johny Mark, Spouse, 30y, , , +919311235766\"]"],
  jmText: ["android=new UiSelector().text(\"JM\")", "//android.widget.TextView[@text=\"JM\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  johnyMarkText: ["android=new UiSelector().text(\"Johny Mark\")", "//android.widget.TextView[@text=\"Johny Mark\"]"],
  spouseText: ["android=new UiSelector().text(\"Spouse\")", "//android.widget.TextView[@text=\"Spouse\"]"],
  el30yText: ["android=new UiSelector().text(\"30y\")", "//android.widget.TextView[@text=\"30y\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el919311235766Text: ["android=new UiSelector().text(\"+919311235766\")", "//android.widget.TextView[@text=\"+919311235766\"]"],
  editBtn: ["~, Edit", "//android.view.ViewGroup[@content-desc=\", Edit\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  editText: ["android=new UiSelector().text(\"Edit\")", "//android.widget.TextView[@text=\"Edit\"]"],
  removeBtn: ["~, Remove", "//android.view.ViewGroup[@content-desc=\", Remove\"]"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  removeText: ["android=new UiSelector().text(\"Remove\")", "//android.widget.TextView[@text=\"Remove\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen27 extends BasePage {
  constructor() {
    super(L, ["jmJohnyMarkSpouseBtn","editBtn","removeBtn"]);
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

  /** TextView "Family Network" */
  get familyNetworkText() {
    return $(L.familyNetworkText[0]);
  }

  /** TextView "member" */
  get memberText() {
    return $(L.memberText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
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
  get text3() {
    return $(L.text3[0]);
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
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "+919311235766" */
  get el919311235766Text() {
    return $(L.el919311235766Text[0]);
  }

  /** ViewGroup */
  get editBtn() {
    return $(L.editBtn[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Edit" */
  get editText() {
    return $(L.editText[0]);
  }

  /** ViewGroup */
  get removeBtn() {
    return $(L.removeBtn[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Remove" */
  get removeText() {
    return $(L.removeText[0]);
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

export { MainScreen27 as MainScreen27Class, L as MainScreen27Locators };
export default new MainScreen27();
