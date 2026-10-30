// AUTO-GENERATED from locators/MainScreen36.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen36Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:32:43.376Z
import BasePage from './BasePage.js';

const L = {
  signOutText: ["(//android.widget.TextView[@text=\"Sign Out\"])[1]", "android=new UiSelector().text(\"Sign Out\")"],
  areYouSureYouText: ["android=new UiSelector().text(\"Are you sure you want to sign out of your account?\")", "//android.widget.TextView[@text=\"Are you sure you want to sign out of your account?\"]"],
  cancelBtn: ["~Cancel", "//android.view.ViewGroup[@content-desc=\"Cancel\"]"],
  cancelText: ["android=new UiSelector().text(\"Cancel\")", "//android.widget.TextView[@text=\"Cancel\"]"],
  signOutBtn: ["~Sign Out", "//android.view.ViewGroup[@content-desc=\"Sign Out\"]"],
  signOutText2: ["(//android.widget.TextView[@text=\"Sign Out\"])[2]", "android=new UiSelector().text(\"Sign Out\")"],
};

class MainScreen36 extends BasePage {
  constructor() {
    super(L, ["cancelBtn","signOutBtn"]);
  }

  /** TextView "Sign Out" */
  get signOutText() {
    return $(L.signOutText[0]);
  }

  /** TextView "Are you sure you want to sign out of you" */
  get areYouSureYouText() {
    return $(L.areYouSureYouText[0]);
  }

  /** ViewGroup */
  get cancelBtn() {
    return $(L.cancelBtn[0]);
  }

  /** TextView "Cancel" */
  get cancelText() {
    return $(L.cancelText[0]);
  }

  /** ViewGroup */
  get signOutBtn() {
    return $(L.signOutBtn[0]);
  }

  /** TextView "Sign Out" */
  get signOutText2() {
    return $(L.signOutText2[0]);
  }
}

export { MainScreen36 as MainScreen36Class, L as MainScreen36Locators };
export default new MainScreen36();
