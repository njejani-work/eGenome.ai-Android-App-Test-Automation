// AUTO-GENERATED from locators/MainScreen21.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen21Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:52:00.309Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  editProfileText: ["android=new UiSelector().text(\"Edit Profile\")", "//android.widget.TextView[@text=\"Edit Profile\"]"],
  saveBtn: ["~Save", "//android.view.ViewGroup[@content-desc=\"Save\"]"],
  saveText: ["android=new UiSelector().text(\"Save\")", "//android.widget.TextView[@text=\"Save\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  btn: ["~, ", "//android.view.ViewGroup[@content-desc=\", \"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  tapToChangePhotoText: ["android=new UiSelector().text(\"Tap to change photo\")", "//android.widget.TextView[@text=\"Tap to change photo\"]"],
  maxSize10MbText: ["android=new UiSelector().text(\"Max size: 10MB • JPEG, PNG, WebP\")", "//android.widget.TextView[@text=\"Max size: 10MB • JPEG, PNG, WebP\"]"],
  personalInformationText: ["android=new UiSelector().text(\"Personal Information\")", "//android.widget.TextView[@text=\"Personal Information\"]"],
  firstNameText: ["android=new UiSelector().text(\"FIRST NAME *\")", "//android.widget.TextView[@text=\"FIRST NAME *\"]"],
  johnInput: ["android=new UiSelector().text(\"John\")", "//android.widget.EditText[@text=\"John\"]"],
  lastNameText: ["android=new UiSelector().text(\"LAST NAME *\")", "//android.widget.TextView[@text=\"LAST NAME *\"]"],
  doeInput: ["android=new UiSelector().text(\"Doe\")", "//android.widget.EditText[@text=\"Doe\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  dateOfBirthText: ["android=new UiSelector().text(\"DATE OF BIRTH \")", "//android.widget.TextView[@text=\"DATE OF BIRTH \"]"],
  september21992Text: ["android=new UiSelector().text(\"September 2, 1992\")", "//android.widget.TextView[@text=\"September 2, 1992\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  dateOfBirthCannotText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[5]"],
  genderText: ["android=new UiSelector().text(\"GENDER\")", "//android.widget.TextView[@text=\"GENDER\"]"],
  maleBtn: ["~Male, ", "//android.view.ViewGroup[@content-desc=\"Male, \"]"],
  maleText: ["android=new UiSelector().text(\"Male\")", "//android.widget.TextView[@text=\"Male\"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  healthInformationText: ["android=new UiSelector().text(\"Health Information\")", "//android.widget.TextView[@text=\"Health Information\"]"],
};

class MainScreen21 extends BasePage {
  constructor() {
    super(L, []);
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

  /** TextView "Edit Profile" */
  get editProfileText() {
    return $(L.editProfileText[0]);
  }

  /** ViewGroup */
  get saveBtn() {
    return $(L.saveBtn[0]);
  }

  /** TextView "Save" */
  get saveText() {
    return $(L.saveText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "Tap to change photo" */
  get tapToChangePhotoText() {
    return $(L.tapToChangePhotoText[0]);
  }

  /** TextView "Max size: 10MB • JPEG, PNG, WebP" */
  get maxSize10MbText() {
    return $(L.maxSize10MbText[0]);
  }

  /** TextView "Personal Information" */
  get personalInformationText() {
    return $(L.personalInformationText[0]);
  }

  /** TextView "FIRST NAME *" */
  get firstNameText() {
    return $(L.firstNameText[0]);
  }

  /** EditText "John" */
  get johnInput() {
    return $(L.johnInput[0]);
  }

  /** TextView "LAST NAME *" */
  get lastNameText() {
    return $(L.lastNameText[0]);
  }

  /** EditText "Doe" */
  get doeInput() {
    return $(L.doeInput[0]);
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

  /** TextView "DATE OF BIRTH " */
  get dateOfBirthText() {
    return $(L.dateOfBirthText[0]);
  }

  /** TextView "September 2, 1992" */
  get september21992Text() {
    return $(L.september21992Text[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Date of birth cannot be changed for secu" */
  get dateOfBirthCannotText() {
    return $(L.dateOfBirthCannotText[0]);
  }

  /** TextView "GENDER" */
  get genderText() {
    return $(L.genderText[0]);
  }

  /** ViewGroup */
  get maleBtn() {
    return $(L.maleBtn[0]);
  }

  /** TextView "Male" */
  get maleText() {
    return $(L.maleText[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Health Information" */
  get healthInformationText() {
    return $(L.healthInformationText[0]);
  }
}

export { MainScreen21 as MainScreen21Class, L as MainScreen21Locators };
export default new MainScreen21();
