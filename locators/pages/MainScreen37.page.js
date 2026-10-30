// AUTO-GENERATED from locators/MainScreen37.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen37Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T08:41:03.066Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]"],
  discoverYourBiologicalAgeText: ["android=new UiSelector().text(\"Discover Your Biological Age & Get Personalized Plans\")", "//android.widget.TextView[@text=\"Discover Your Biological Age & Get Personalized Plans\"]"],
  skipBtn: ["~Skip", "//android.view.ViewGroup[@content-desc=\"Skip\"]"],
  skipText: ["android=new UiSelector().text(\"Skip\")", "//android.widget.TextView[@text=\"Skip\"]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]"],
  nationalReferenceLaboratoryInText: ["android=new UiSelector().text(\"National Reference Laboratory in Delhi NCR\")", "//android.widget.TextView[@text=\"National Reference Laboratory in Delhi NCR\"]"],
};

class MainScreen37 extends BasePage {
  constructor() {
    super(L, ["skipBtn"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ViewPager */
  get list() {
    return $(L.list[0]);
  }

  /** RecyclerView */
  get list2() {
    return $(L.list2[0]);
  }

  /** TextView "Discover Your Biological Age & Get Perso" */
  get discoverYourBiologicalAgeText() {
    return $(L.discoverYourBiologicalAgeText[0]);
  }

  /** ViewGroup */
  get skipBtn() {
    return $(L.skipBtn[0]);
  }

  /** TextView "Skip" */
  get skipText() {
    return $(L.skipText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "National Reference Laboratory in Delhi N" */
  get nationalReferenceLaboratoryInText() {
    return $(L.nationalReferenceLaboratoryInText[0]);
  }
}

export { MainScreen37 as MainScreen37Class, L as MainScreen37Locators };
export default new MainScreen37();
