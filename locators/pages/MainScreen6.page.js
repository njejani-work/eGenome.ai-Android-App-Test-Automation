// AUTO-GENERATED from locators/MainScreen6.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen6Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:41:05.155Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  johnDoeSelfBtn: ["~John Doe, Self, , , ", "//android.view.ViewGroup[@content-desc=\"John Doe, Self, , , \"]"],
  johnDoeText: ["android=new UiSelector().text(\"John Doe\")", "//android.widget.TextView[@text=\"John Doe\"]"],
  selfText: ["android=new UiSelector().text(\"Self\")", "//android.widget.TextView[@text=\"Self\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  breakfast1000AmBtn: ["~󰟈, Breakfast , 󰑊,  10:00 AM, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰟈, Breakfast , 󰑊,  10:00 AM, 󰅀\"]"],
  text4: ["android=new UiSelector().text(\"󰟈\")", "//android.widget.TextView[@text=\"󰟈\"]"],
  breakfastText: ["android=new UiSelector().text(\"Breakfast \")", "//android.widget.TextView[@text=\"Breakfast \"]"],
  text5: ["(//android.widget.TextView[@text=\"󰑊\"])[1]", "android=new UiSelector().text(\"󰑊\")"],
  el1000AmText: ["android=new UiSelector().text(\" 10:00 AM\")", "//android.widget.TextView[@text=\" 10:00 AM\"]"],
  text6: ["(//android.widget.TextView[@text=\"󰅀\"])[1]", "android=new UiSelector().text(\"󰅀\")"],
  lunch200PmBtn: ["~󰉜, Lunch , 󰑊,  2:00 PM, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰉜, Lunch , 󰑊,  2:00 PM, 󰅀\"]"],
  text7: ["android=new UiSelector().text(\"󰉜\")", "//android.widget.TextView[@text=\"󰉜\"]"],
  lunchText: ["android=new UiSelector().text(\"Lunch \")", "//android.widget.TextView[@text=\"Lunch \"]"],
  text8: ["(//android.widget.TextView[@text=\"󰑊\"])[2]", "android=new UiSelector().text(\"󰑊\")"],
  el200PmText: ["android=new UiSelector().text(\" 2:00 PM\")", "//android.widget.TextView[@text=\" 2:00 PM\"]"],
  text9: ["(//android.widget.TextView[@text=\"󰅀\"])[2]", "android=new UiSelector().text(\"󰅀\")"],
  dinner0800PmBtn: ["~󰩰, Dinner , 󰑊,  08:00 PM (latest), 󰅀", "//android.view.ViewGroup[@content-desc=\"󰩰, Dinner , 󰑊,  08:00 PM (latest), 󰅀\"]"],
  text10: ["android=new UiSelector().text(\"󰩰\")", "//android.widget.TextView[@text=\"󰩰\"]"],
  dinnerText: ["android=new UiSelector().text(\"Dinner \")", "//android.widget.TextView[@text=\"Dinner \"]"],
  el0800PmLatestText: ["android=new UiSelector().text(\" 08:00 PM (latest)\")", "//android.widget.TextView[@text=\" 08:00 PM (latest)\"]"],
  pathToHealthInsightsText: ["android=new UiSelector().text(\"Path To Health Insights\")", "//android.widget.TextView[@text=\"Path To Health Insights\"]"],
  el0Of5Text: ["android=new UiSelector().text(\"0 of 5\")", "//android.widget.TextView[@text=\"0 of 5\"]"],
  text11: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  scheduleText: ["android=new UiSelector().text(\"Schedule\")", "//android.widget.TextView[@text=\"Schedule\"]"],
  text12: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  collectText: ["android=new UiSelector().text(\"Collect\")", "//android.widget.TextView[@text=\"Collect\"]"],
  analyzeText: ["android=new UiSelector().text(\"Analyze\")", "//android.widget.TextView[@text=\"Analyze\"]"],
  habitsText: ["android=new UiSelector().text(\"Habits\")", "//android.widget.TextView[@text=\"Habits\"]"],
  reportText: ["(//android.widget.TextView[@text=\"Report\"])[1]", "android=new UiSelector().text(\"Report\")"],
  viewFullJourneyBtn: ["~View Full Journey", "//android.view.ViewGroup[@content-desc=\"View Full Journey\"]"],
  viewFullJourneyText: ["android=new UiSelector().text(\"View Full Journey\")", "//android.widget.TextView[@text=\"View Full Journey\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText2: ["(//android.widget.TextView[@text=\"Report\"])[2]", "android=new UiSelector().text(\"Report\")"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
};

class MainScreen6 extends BasePage {
  constructor() {
    super(L, []);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** ViewGroup */
  get johnDoeSelfBtn() {
    return $(L.johnDoeSelfBtn[0]);
  }

  /** TextView "John Doe" */
  get johnDoeText() {
    return $(L.johnDoeText[0]);
  }

  /** TextView "Self" */
  get selfText() {
    return $(L.selfText[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn() {
    return $(L.breakfast1000AmBtn[0]);
  }

  /** TextView "󰟈" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Breakfast " */
  get breakfastText() {
    return $(L.breakfastText[0]);
  }

  /** TextView "󰑊" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView " 10:00 AM" */
  get el1000AmText() {
    return $(L.el1000AmText[0]);
  }

  /** TextView "󰅀" */
  get text6() {
    return $(L.text6[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn() {
    return $(L.lunch200PmBtn[0]);
  }

  /** TextView "󰉜" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Lunch " */
  get lunchText() {
    return $(L.lunchText[0]);
  }

  /** TextView "󰑊" */
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView " 2:00 PM" */
  get el200PmText() {
    return $(L.el200PmText[0]);
  }

  /** TextView "󰅀" */
  get text9() {
    return $(L.text9[0]);
  }

  /** ViewGroup */
  get dinner0800PmBtn() {
    return $(L.dinner0800PmBtn[0]);
  }

  /** TextView "󰩰" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Dinner " */
  get dinnerText() {
    return $(L.dinnerText[0]);
  }

  /** TextView " 08:00 PM (latest)" */
  get el0800PmLatestText() {
    return $(L.el0800PmLatestText[0]);
  }

  /** TextView "Path To Health Insights" */
  get pathToHealthInsightsText() {
    return $(L.pathToHealthInsightsText[0]);
  }

  /** TextView "0 of 5" */
  get el0Of5Text() {
    return $(L.el0Of5Text[0]);
  }

  /** TextView "" */
  get text11() {
    return $(L.text11[0]);
  }

  /** TextView "Schedule" */
  get scheduleText() {
    return $(L.scheduleText[0]);
  }

  /** TextView "" */
  get text12() {
    return $(L.text12[0]);
  }

  /** TextView "Collect" */
  get collectText() {
    return $(L.collectText[0]);
  }

  /** TextView "Analyze" */
  get analyzeText() {
    return $(L.analyzeText[0]);
  }

  /** TextView "Habits" */
  get habitsText() {
    return $(L.habitsText[0]);
  }

  /** TextView "Report" */
  get reportText() {
    return $(L.reportText[0]);
  }

  /** ViewGroup */
  get viewFullJourneyBtn() {
    return $(L.viewFullJourneyBtn[0]);
  }

  /** TextView "View Full Journey" */
  get viewFullJourneyText() {
    return $(L.viewFullJourneyText[0]);
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
  get reportText2() {
    return $(L.reportText2[0]);
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

export { MainScreen6 as MainScreen6Class, L as MainScreen6Locators };
export default new MainScreen6();
