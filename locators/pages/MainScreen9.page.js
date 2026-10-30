// AUTO-GENERATED from locators/MainScreen9.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen9Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:42:31.275Z
import BasePage from './BasePage.js';

const L = {
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]"],
  switchProfileText: ["android=new UiSelector().text(\"Switch Profile\")", "//android.widget.TextView[@text=\"Switch Profile\"]"],
  chooseWhichProfileToText: ["android=new UiSelector().text(\"Choose which profile to use\")", "//android.widget.TextView[@text=\"Choose which profile to use\"]"],
  btn2: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  johnDoeSelfBtn: ["~, , John Doe, Self, ", "//android.view.ViewGroup[@content-desc=\", , John Doe, Self, \"]"],
  text2: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  johnDoeText: ["android=new UiSelector().text(\"John Doe\")", "//android.widget.TextView[@text=\"John Doe\"]"],
  selfText: ["android=new UiSelector().text(\"Self\")", "//android.widget.TextView[@text=\"Self\"]"],
  johnyMarkSpouseBtn: ["~, Johny Mark, spouse", "//android.view.ViewGroup[@content-desc=\", Johny Mark, spouse\"]"],
  text5: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  johnyMarkText: ["android=new UiSelector().text(\"Johny Mark\")", "//android.widget.TextView[@text=\"Johny Mark\"]"],
  spouseText: ["android=new UiSelector().text(\"spouse\")", "//android.widget.TextView[@text=\"spouse\"]"],
  addProfileBtn: ["~, Add Profile", "//android.view.ViewGroup[@content-desc=\", Add Profile\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  addProfileText: ["android=new UiSelector().text(\"Add Profile\")", "//android.widget.TextView[@text=\"Add Profile\"]"],
};

class MainScreen9 extends BasePage {
  constructor() {
    super(L, ["johnDoeSelfBtn","johnyMarkSpouseBtn","addProfileBtn"]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "Switch Profile" */
  get switchProfileText() {
    return $(L.switchProfileText[0]);
  }

  /** TextView "Choose which profile to use" */
  get chooseWhichProfileToText() {
    return $(L.chooseWhichProfileToText[0]);
  }

  /** ViewGroup */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get johnDoeSelfBtn() {
    return $(L.johnDoeSelfBtn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "John Doe" */
  get johnDoeText() {
    return $(L.johnDoeText[0]);
  }

  /** TextView "Self" */
  get selfText() {
    return $(L.selfText[0]);
  }

  /** ViewGroup */
  get johnyMarkSpouseBtn() {
    return $(L.johnyMarkSpouseBtn[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Johny Mark" */
  get johnyMarkText() {
    return $(L.johnyMarkText[0]);
  }

  /** TextView "spouse" */
  get spouseText() {
    return $(L.spouseText[0]);
  }

  /** ViewGroup */
  get addProfileBtn() {
    return $(L.addProfileBtn[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Add Profile" */
  get addProfileText() {
    return $(L.addProfileText[0]);
  }
}

export { MainScreen9 as MainScreen9Class, L as MainScreen9Locators };
export default new MainScreen9();
