// AUTO-GENERATED from locators/MainScreen23.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen23Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:51:02.188Z
import BasePage from './BasePage.js';

const L = {
  selectGenderText: ["android=new UiSelector().text(\"Select Gender\")", "//android.widget.TextView[@text=\"Select Gender\"]"],
  btn: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  maleBtn: ["~, Male, ", "//android.view.ViewGroup[@content-desc=\", Male, \"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  maleText: ["android=new UiSelector().text(\"Male\")", "//android.widget.TextView[@text=\"Male\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  femaleBtn: ["~, Female", "//android.view.ViewGroup[@content-desc=\", Female\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  femaleText: ["android=new UiSelector().text(\"Female\")", "//android.widget.TextView[@text=\"Female\"]"],
  otherBtn: ["~, Other", "//android.view.ViewGroup[@content-desc=\", Other\"]"],
  text5: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  otherText: ["android=new UiSelector().text(\"Other\")", "//android.widget.TextView[@text=\"Other\"]"],
  preferNotToSayBtn: ["~, Prefer not to say", "//android.view.ViewGroup[@content-desc=\", Prefer not to say\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  preferNotToSayText: ["android=new UiSelector().text(\"Prefer not to say\")", "//android.widget.TextView[@text=\"Prefer not to say\"]"],
};

class MainScreen23 extends BasePage {
  constructor() {
    super(L, ["maleBtn","femaleBtn","otherBtn"]);
  }

  /** TextView "Select Gender" */
  get selectGenderText() {
    return $(L.selectGenderText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** ViewGroup */
  get maleBtn() {
    return $(L.maleBtn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "Male" */
  get maleText() {
    return $(L.maleText[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** ViewGroup */
  get femaleBtn() {
    return $(L.femaleBtn[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Female" */
  get femaleText() {
    return $(L.femaleText[0]);
  }

  /** ViewGroup */
  get otherBtn() {
    return $(L.otherBtn[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Other" */
  get otherText() {
    return $(L.otherText[0]);
  }

  /** ViewGroup */
  get preferNotToSayBtn() {
    return $(L.preferNotToSayBtn[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Prefer not to say" */
  get preferNotToSayText() {
    return $(L.preferNotToSayText[0]);
  }
}

export { MainScreen23 as MainScreen23Class, L as MainScreen23Locators };
export default new MainScreen23();
