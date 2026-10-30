// AUTO-GENERATED from locators/MainScreen28.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen28Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:53:57.568Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  editDependentText: ["android=new UiSelector().text(\"Edit Dependent\")", "//android.widget.TextView[@text=\"Edit Dependent\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  personalInformationText: ["android=new UiSelector().text(\"Personal Information\")", "//android.widget.TextView[@text=\"Personal Information\"]"],
  firstNameText: ["android=new UiSelector().text(\"First Name\")", "//android.widget.TextView[@text=\"First Name\"]"],
  text2: ["(//android.widget.TextView[@text=\"*\"])[1]", "android=new UiSelector().text(\"*\")"],
  johnyInput: ["android=new UiSelector().text(\"Johny\")", "//android.widget.EditText[@text=\"Johny\"]"],
  lastNameText: ["android=new UiSelector().text(\"Last Name\")", "//android.widget.TextView[@text=\"Last Name\"]"],
  text3: ["(//android.widget.TextView[@text=\"*\"])[2]", "android=new UiSelector().text(\"*\")"],
  markInput: ["android=new UiSelector().text(\"Mark\")", "//android.widget.EditText[@text=\"Mark\"]"],
  dateOfBirthText: ["android=new UiSelector().text(\"Date of Birth\")", "//android.widget.TextView[@text=\"Date of Birth\"]"],
  september111996Btn: ["~September 11, 1996, ", "//android.view.ViewGroup[@content-desc=\"September 11, 1996, \"]"],
  september111996Text: ["android=new UiSelector().text(\"September 11, 1996\")", "//android.widget.TextView[@text=\"September 11, 1996\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  genderText: ["android=new UiSelector().text(\"Gender\")", "//android.widget.TextView[@text=\"Gender\"]"],
  femaleBtn: ["~, Female, ", "//android.view.ViewGroup[@content-desc=\", Female, \"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  femaleText: ["android=new UiSelector().text(\"Female\")", "//android.widget.TextView[@text=\"Female\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  updateDependentBtn: ["~Update Dependent", "//android.view.ViewGroup[@content-desc=\"Update Dependent\"]"],
  updateDependentText: ["android=new UiSelector().text(\"Update Dependent\")", "//android.widget.TextView[@text=\"Update Dependent\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen28 extends BasePage {
  constructor() {
    super(L, ["september111996Btn","femaleBtn","updateDependentBtn"]);
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

  /** TextView "Edit Dependent" */
  get editDependentText() {
    return $(L.editDependentText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "Personal Information" */
  get personalInformationText() {
    return $(L.personalInformationText[0]);
  }

  /** TextView "First Name" */
  get firstNameText() {
    return $(L.firstNameText[0]);
  }

  /** TextView "*" */
  get text2() {
    return $(L.text2[0]);
  }

  /** EditText "Johny" */
  get johnyInput() {
    return $(L.johnyInput[0]);
  }

  /** TextView "Last Name" */
  get lastNameText() {
    return $(L.lastNameText[0]);
  }

  /** TextView "*" */
  get text3() {
    return $(L.text3[0]);
  }

  /** EditText "Mark" */
  get markInput() {
    return $(L.markInput[0]);
  }

  /** TextView "Date of Birth" */
  get dateOfBirthText() {
    return $(L.dateOfBirthText[0]);
  }

  /** ViewGroup */
  get september111996Btn() {
    return $(L.september111996Btn[0]);
  }

  /** TextView "September 11, 1996" */
  get september111996Text() {
    return $(L.september111996Text[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Gender" */
  get genderText() {
    return $(L.genderText[0]);
  }

  /** ViewGroup */
  get femaleBtn() {
    return $(L.femaleBtn[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Female" */
  get femaleText() {
    return $(L.femaleText[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** ViewGroup */
  get updateDependentBtn() {
    return $(L.updateDependentBtn[0]);
  }

  /** TextView "Update Dependent" */
  get updateDependentText() {
    return $(L.updateDependentText[0]);
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

export { MainScreen28 as MainScreen28Class, L as MainScreen28Locators };
export default new MainScreen28();
