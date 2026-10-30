// AUTO-GENERATED from locators/MainScreen5.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen5Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:56:09.548Z
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
  makeTodayDay1Text: ["android=new UiSelector().text(\"Make today Day 1\")", "//android.widget.TextView[@text=\"Make today Day 1\"]"],
  mealsBtn: ["~Meals", "//android.view.ViewGroup[@content-desc=\"Meals\"]"],
  mealsText: ["android=new UiSelector().text(\"Meals\")", "//android.widget.TextView[@text=\"Meals\"]"],
  exerciseBtn: ["~Exercise", "//android.view.ViewGroup[@content-desc=\"Exercise\"]"],
  exerciseText: ["android=new UiSelector().text(\"Exercise\")", "//android.widget.TextView[@text=\"Exercise\"]"],
  supplementsBtn: ["~Supplements", "//android.view.ViewGroup[@content-desc=\"Supplements\"]"],
  supplementsText: ["android=new UiSelector().text(\"Supplements\")", "//android.widget.TextView[@text=\"Supplements\"]"],
  earlyMorning0700Btn: ["~󰖜, Early Morning , 󰑊,  07:00 AM, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰖜, Early Morning , 󰑊,  07:00 AM, 󰅀\"]"],
  text4: ["android=new UiSelector().text(\"󰖜\")", "//android.widget.TextView[@text=\"󰖜\"]"],
  earlyMorningText: ["android=new UiSelector().text(\"Early Morning \")", "//android.widget.TextView[@text=\"Early Morning \"]"],
  text5: ["(//android.widget.TextView[@text=\"󰑊\"])[1]", "android=new UiSelector().text(\"󰑊\")"],
  el0700AmText: ["android=new UiSelector().text(\" 07:00 AM\")", "//android.widget.TextView[@text=\" 07:00 AM\"]"],
  text6: ["(//android.widget.TextView[@text=\"󰅀\"])[1]", "android=new UiSelector().text(\"󰅀\")"],
  lukewarmWaterWithAloeText: ["android=new UiSelector().text(\"Lukewarm Water with aloe vera gel\")", "//android.widget.TextView[@text=\"Lukewarm Water with aloe vera gel\"]"],
  el200MlText: ["android=new UiSelector().text(\" (200 ml)\")", "//android.widget.TextView[@text=\" (200 ml)\"]"],
  doneBtn: ["~󰄬, Done", "//android.view.ViewGroup[@content-desc=\"󰄬, Done\"]"],
  text7: ["android=new UiSelector().text(\"󰄬\")", "//android.widget.TextView[@text=\"󰄬\"]"],
  doneText: ["android=new UiSelector().text(\"Done\")", "//android.widget.TextView[@text=\"Done\"]"],
  skipBtn: ["~󰅖, Skip", "//android.view.ViewGroup[@content-desc=\"󰅖, Skip\"]"],
  text8: ["android=new UiSelector().text(\"󰅖\")", "//android.widget.TextView[@text=\"󰅖\"]"],
  skipText: ["android=new UiSelector().text(\"Skip\")", "//android.widget.TextView[@text=\"Skip\"]"],
  alternateBtn: ["~󰓡, Alternate", "//android.view.ViewGroup[@content-desc=\"󰓡, Alternate\"]"],
  text9: ["android=new UiSelector().text(\"󰓡\")", "//android.widget.TextView[@text=\"󰓡\"]"],
  alternateText: ["(//android.widget.TextView[@text=\"Alternate\"])[1]", "android=new UiSelector().text(\"Alternate\")"],
  breakfast1000AmBtn: ["~󰟈, Breakfast , 󰑊,  10:00 AM, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰟈, Breakfast , 󰑊,  10:00 AM, 󰅀\"]"],
  text10: ["android=new UiSelector().text(\"󰟈\")", "//android.widget.TextView[@text=\"󰟈\"]"],
  breakfastText: ["android=new UiSelector().text(\"Breakfast \")", "//android.widget.TextView[@text=\"Breakfast \"]"],
  text11: ["(//android.widget.TextView[@text=\"󰑊\"])[2]", "android=new UiSelector().text(\"󰑊\")"],
  el1000AmText: ["android=new UiSelector().text(\" 10:00 AM\")", "//android.widget.TextView[@text=\" 10:00 AM\"]"],
  text12: ["(//android.widget.TextView[@text=\"󰅀\"])[2]", "android=new UiSelector().text(\"󰅀\")"],
  lunch200PmBtn: ["~󰉜, Lunch , 󰑊,  2:00 PM, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰉜, Lunch , 󰑊,  2:00 PM, 󰅀\"]"],
  text13: ["android=new UiSelector().text(\"󰉜\")", "//android.widget.TextView[@text=\"󰉜\"]"],
  lunchText: ["android=new UiSelector().text(\"Lunch \")", "//android.widget.TextView[@text=\"Lunch \"]"],
  el200PmText: ["android=new UiSelector().text(\" 2:00 PM\")", "//android.widget.TextView[@text=\" 2:00 PM\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  dinner0800PmBtn: ["~󰩰, Dinner , 󰑊,  08:00 PM (latest), 󰅀", "//android.view.ViewGroup[@content-desc=\"󰩰, Dinner , 󰑊,  08:00 PM (latest), 󰅀\"]"],
  text14: ["android=new UiSelector().text(\"󰩰\")", "//android.widget.TextView[@text=\"󰩰\"]"],
  dinnerText: ["android=new UiSelector().text(\"Dinner \")", "//android.widget.TextView[@text=\"Dinner \"]"],
  el0800PmLatestText: ["android=new UiSelector().text(\" 08:00 PM (latest)\")", "//android.widget.TextView[@text=\" 08:00 PM (latest)\"]"],
  pathToHealthInsightsText: ["android=new UiSelector().text(\"Path To Health Insights\")", "//android.widget.TextView[@text=\"Path To Health Insights\"]"],
  el0Of5Text: ["android=new UiSelector().text(\"0 of 5\")", "//android.widget.TextView[@text=\"0 of 5\"]"],
  cauliflowerOnionKneadedJowarText: ["android=new UiSelector().text(\"Cauliflower/ Onion kneaded jowar roti\")", "//android.widget.TextView[@text=\"Cauliflower/ Onion kneaded jowar roti\"]"],
  el1Text: ["(//android.widget.TextView[@text=\" (1)\"])[1]", "android=new UiSelector().text(\" (1)\")"],
  mintChutneyOrCurdText: ["android=new UiSelector().text(\"mint chutney or curd\")", "//android.widget.TextView[@text=\"mint chutney or curd\"]"],
  el2TablespoonOr60Text: ["android=new UiSelector().text(\" (2 tablespoon or 60 ml)\")", "//android.widget.TextView[@text=\" (2 tablespoon or 60 ml)\"]"],
  text15: ["(//android.widget.TextView[@text=\"󰄬\"])[2]", "android=new UiSelector().text(\"󰄬\")"],
  doneText2: ["(//android.widget.TextView[@text=\"Done\"])[2]", "android=new UiSelector().text(\"Done\")"],
  text16: ["(//android.widget.TextView[@text=\"󰅖\"])[2]", "android=new UiSelector().text(\"󰅖\")"],
  skipText2: ["(//android.widget.TextView[@text=\"Skip\"])[2]", "android=new UiSelector().text(\"Skip\")"],
  text17: ["(//android.widget.TextView[@text=\"󰓡\"])[2]", "android=new UiSelector().text(\"󰓡\")"],
  alternateText2: ["(//android.widget.TextView[@text=\"Alternate\"])[2]", "android=new UiSelector().text(\"Alternate\")"],
  el1TbspGheeText: ["android=new UiSelector().text(\"1 tbsp ghee\")", "//android.widget.TextView[@text=\"1 tbsp ghee\"]"],
  bottleGuardVegetableText: ["android=new UiSelector().text(\"bottle guard vegetable\")", "//android.widget.TextView[@text=\"bottle guard vegetable\"]"],
  el1BowlText: ["(//android.widget.TextView[@text=\" (1 bowl)\"])[1]", "android=new UiSelector().text(\" (1 bowl)\")"],
  sautVeggiesText: ["android=new UiSelector().text(\"sauté veggies\")", "//android.widget.TextView[@text=\"sauté veggies\"]"],
  el1BowlText2: ["(//android.widget.TextView[@text=\" (1 bowl)\"])[2]", "android=new UiSelector().text(\" (1 bowl)\")"],
  oatsRagiBesanJowarText: ["android=new UiSelector().text(\"oats/ ragi/ besan / jowar/ Channa-barley roti\")", "//android.widget.TextView[@text=\"oats/ ragi/ besan / jowar/ Channa-barley roti\"]"],
  el1Text2: ["(//android.widget.TextView[@text=\" (1)\"])[2]", "android=new UiSelector().text(\" (1)\")"],
  curdText: ["android=new UiSelector().text(\"curd\")", "//android.widget.TextView[@text=\"curd\"]"],
  halfBowlText: ["android=new UiSelector().text(\" (half bowl)\")", "//android.widget.TextView[@text=\" (half bowl)\"]"],
  text18: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  text19: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  lunch200PmBtn2: ["~󰉜, Lunch , 󰑊,  2:00 PM, Alternate, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰉜, Lunch , 󰑊,  2:00 PM, Alternate, 󰅀\"]"],
};

class MainScreen5 extends BasePage {
  constructor() {
    super(L, ["doneBtn","alternateBtn","lunch200PmBtn2"]);
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

  /** TextView "Make today Day 1" */
  get makeTodayDay1Text() {
    return $(L.makeTodayDay1Text[0]);
  }

  /** ViewGroup */
  get mealsBtn() {
    return $(L.mealsBtn[0]);
  }

  /** TextView "Meals" */
  get mealsText() {
    return $(L.mealsText[0]);
  }

  /** ViewGroup */
  get exerciseBtn() {
    return $(L.exerciseBtn[0]);
  }

  /** TextView "Exercise" */
  get exerciseText() {
    return $(L.exerciseText[0]);
  }

  /** ViewGroup */
  get supplementsBtn() {
    return $(L.supplementsBtn[0]);
  }

  /** TextView "Supplements" */
  get supplementsText() {
    return $(L.supplementsText[0]);
  }

  /** ViewGroup */
  get earlyMorning0700Btn() {
    return $(L.earlyMorning0700Btn[0]);
  }

  /** TextView "󰖜" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Early Morning " */
  get earlyMorningText() {
    return $(L.earlyMorningText[0]);
  }

  /** TextView "󰑊" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView " 07:00 AM" */
  get el0700AmText() {
    return $(L.el0700AmText[0]);
  }

  /** TextView "󰅀" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Lukewarm Water with aloe vera gel" */
  get lukewarmWaterWithAloeText() {
    return $(L.lukewarmWaterWithAloeText[0]);
  }

  /** TextView " (200 ml)" */
  get el200MlText() {
    return $(L.el200MlText[0]);
  }

  /** ViewGroup */
  get doneBtn() {
    return $(L.doneBtn[0]);
  }

  /** TextView "󰄬" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Done" */
  get doneText() {
    return $(L.doneText[0]);
  }

  /** ViewGroup */
  get skipBtn() {
    return $(L.skipBtn[0]);
  }

  /** TextView "󰅖" */
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView "Skip" */
  get skipText() {
    return $(L.skipText[0]);
  }

  /** ViewGroup */
  get alternateBtn() {
    return $(L.alternateBtn[0]);
  }

  /** TextView "󰓡" */
  get text9() {
    return $(L.text9[0]);
  }

  /** TextView "Alternate" */
  get alternateText() {
    return $(L.alternateText[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn() {
    return $(L.breakfast1000AmBtn[0]);
  }

  /** TextView "󰟈" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Breakfast " */
  get breakfastText() {
    return $(L.breakfastText[0]);
  }

  /** TextView "󰑊" */
  get text11() {
    return $(L.text11[0]);
  }

  /** TextView " 10:00 AM" */
  get el1000AmText() {
    return $(L.el1000AmText[0]);
  }

  /** TextView "󰅀" */
  get text12() {
    return $(L.text12[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn() {
    return $(L.lunch200PmBtn[0]);
  }

  /** TextView "󰉜" */
  get text13() {
    return $(L.text13[0]);
  }

  /** TextView "Lunch " */
  get lunchText() {
    return $(L.lunchText[0]);
  }

  /** TextView " 2:00 PM" */
  get el200PmText() {
    return $(L.el200PmText[0]);
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

  /** ViewGroup */
  get dinner0800PmBtn() {
    return $(L.dinner0800PmBtn[0]);
  }

  /** TextView "󰩰" */
  get text14() {
    return $(L.text14[0]);
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

  /** TextView "Cauliflower/ Onion kneaded jowar roti" */
  get cauliflowerOnionKneadedJowarText() {
    return $(L.cauliflowerOnionKneadedJowarText[0]);
  }

  /** TextView " (1)" */
  get el1Text() {
    return $(L.el1Text[0]);
  }

  /** TextView "mint chutney or curd" */
  get mintChutneyOrCurdText() {
    return $(L.mintChutneyOrCurdText[0]);
  }

  /** TextView " (2 tablespoon or 60 ml)" */
  get el2TablespoonOr60Text() {
    return $(L.el2TablespoonOr60Text[0]);
  }

  /** TextView "󰄬" */
  get text15() {
    return $(L.text15[0]);
  }

  /** TextView "Done" */
  get doneText2() {
    return $(L.doneText2[0]);
  }

  /** TextView "󰅖" */
  get text16() {
    return $(L.text16[0]);
  }

  /** TextView "Skip" */
  get skipText2() {
    return $(L.skipText2[0]);
  }

  /** TextView "󰓡" */
  get text17() {
    return $(L.text17[0]);
  }

  /** TextView "Alternate" */
  get alternateText2() {
    return $(L.alternateText2[0]);
  }

  /** TextView "1 tbsp ghee" */
  get el1TbspGheeText() {
    return $(L.el1TbspGheeText[0]);
  }

  /** TextView "bottle guard vegetable" */
  get bottleGuardVegetableText() {
    return $(L.bottleGuardVegetableText[0]);
  }

  /** TextView " (1 bowl)" */
  get el1BowlText() {
    return $(L.el1BowlText[0]);
  }

  /** TextView "sauté veggies" */
  get sautVeggiesText() {
    return $(L.sautVeggiesText[0]);
  }

  /** TextView " (1 bowl)" */
  get el1BowlText2() {
    return $(L.el1BowlText2[0]);
  }

  /** TextView "oats/ ragi/ besan / jowar/ Channa-barley" */
  get oatsRagiBesanJowarText() {
    return $(L.oatsRagiBesanJowarText[0]);
  }

  /** TextView " (1)" */
  get el1Text2() {
    return $(L.el1Text2[0]);
  }

  /** TextView "curd" */
  get curdText() {
    return $(L.curdText[0]);
  }

  /** TextView " (half bowl)" */
  get halfBowlText() {
    return $(L.halfBowlText[0]);
  }

  /** TextView "" */
  get text18() {
    return $(L.text18[0]);
  }

  /** TextView "" */
  get text19() {
    return $(L.text19[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn2() {
    return $(L.lunch200PmBtn2[0]);
  }
}

export { MainScreen5 as MainScreen5Class, L as MainScreen5Locators };
export default new MainScreen5();
