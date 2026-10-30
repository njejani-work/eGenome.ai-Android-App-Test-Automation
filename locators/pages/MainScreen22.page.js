// AUTO-GENERATED from locators/MainScreen22.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen22Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:51:41.297Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  editProfileText: ["android=new UiSelector().text(\"Edit Profile\")", "//android.widget.TextView[@text=\"Edit Profile\"]"],
  saveBtn: ["~Save", "//android.view.ViewGroup[@content-desc=\"Save\"]"],
  saveText: ["android=new UiSelector().text(\"Save\")", "//android.widget.TextView[@text=\"Save\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  genderText: ["android=new UiSelector().text(\"GENDER\")", "//android.widget.TextView[@text=\"GENDER\"]"],
  maleBtn: ["~Male, ", "//android.view.ViewGroup[@content-desc=\"Male, \"]"],
  maleText: ["android=new UiSelector().text(\"Male\")", "//android.widget.TextView[@text=\"Male\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  healthInformationText: ["android=new UiSelector().text(\"Health Information\")", "//android.widget.TextView[@text=\"Health Information\"]"],
  heightInText: ["android=new UiSelector().text(\"HEIGHT (IN)\")", "//android.widget.TextView[@text=\"HEIGHT (IN)\"]"],
  el5Input: ["android=new UiSelector().text(\"5\")", "//android.widget.EditText[@text=\"5\"]"],
  el4Input: ["android=new UiSelector().text(\"4\")", "//android.widget.EditText[@text=\"4\"]"],
  ftText: ["android=new UiSelector().text(\"ft\")", "//android.widget.TextView[@text=\"ft\"]"],
  inText: ["android=new UiSelector().text(\"in\")", "//android.widget.TextView[@text=\"in\"]"],
  weightKgText: ["android=new UiSelector().text(\"WEIGHT (KG)\")", "//android.widget.TextView[@text=\"WEIGHT (KG)\"]"],
  el56Input: ["android=new UiSelector().text(\"56\")", "//android.widget.EditText[@text=\"56\"]"],
  kgText: ["android=new UiSelector().text(\"kg\")", "//android.widget.TextView[@text=\"kg\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  contactInformationText: ["android=new UiSelector().text(\"Contact Information\")", "//android.widget.TextView[@text=\"Contact Information\"]"],
  emailAddressText: ["android=new UiSelector().text(\"Email Address\")", "//android.widget.TextView[@text=\"Email Address\"]"],
  enterEmailAddressInput: ["android=new UiSelector().text(\"Enter email address\")", "//android.widget.EditText[@text=\"Enter email address\"]"],
  phoneNumberText: ["android=new UiSelector().text(\"PHONE NUMBER *\")", "//android.widget.TextView[@text=\"PHONE NUMBER *\"]"],
  el919999999999Text: ["android=new UiSelector().text(\"+919999999999\")", "//android.widget.TextView[@text=\"+919999999999\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  dateOfBirthText: ["android=new UiSelector().text(\"DATE OF BIRTH \")", "//android.widget.TextView[@text=\"DATE OF BIRTH \"]"],
  september21992Text: ["android=new UiSelector().text(\"September 2, 1992\")", "//android.widget.TextView[@text=\"September 2, 1992\"]"],
  dateOfBirthCannotText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[4]"],
};

class MainScreen22 extends BasePage {
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
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "Health Information" */
  get healthInformationText() {
    return $(L.healthInformationText[0]);
  }

  /** TextView "HEIGHT (IN)" */
  get heightInText() {
    return $(L.heightInText[0]);
  }

  /** EditText "5" */
  get el5Input() {
    return $(L.el5Input[0]);
  }

  /** EditText "4" */
  get el4Input() {
    return $(L.el4Input[0]);
  }

  /** TextView "ft" */
  get ftText() {
    return $(L.ftText[0]);
  }

  /** TextView "in" */
  get inText() {
    return $(L.inText[0]);
  }

  /** TextView "WEIGHT (KG)" */
  get weightKgText() {
    return $(L.weightKgText[0]);
  }

  /** EditText "56" */
  get el56Input() {
    return $(L.el56Input[0]);
  }

  /** TextView "kg" */
  get kgText() {
    return $(L.kgText[0]);
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

  /** TextView "Contact Information" */
  get contactInformationText() {
    return $(L.contactInformationText[0]);
  }

  /** TextView "Email Address" */
  get emailAddressText() {
    return $(L.emailAddressText[0]);
  }

  /** EditText "Enter email address" */
  get enterEmailAddressInput() {
    return $(L.enterEmailAddressInput[0]);
  }

  /** TextView "PHONE NUMBER *" */
  get phoneNumberText() {
    return $(L.phoneNumberText[0]);
  }

  /** TextView "+919999999999" */
  get el919999999999Text() {
    return $(L.el919999999999Text[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "DATE OF BIRTH " */
  get dateOfBirthText() {
    return $(L.dateOfBirthText[0]);
  }

  /** TextView "September 2, 1992" */
  get september21992Text() {
    return $(L.september21992Text[0]);
  }

  /** TextView "Date of birth cannot be changed for secu" */
  get dateOfBirthCannotText() {
    return $(L.dateOfBirthCannotText[0]);
  }
}

export { MainScreen22 as MainScreen22Class, L as MainScreen22Locators };
export default new MainScreen22();
