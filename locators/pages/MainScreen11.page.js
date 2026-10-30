// AUTO-GENERATED from locators/MainScreen11.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen11Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:43:32.677Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  monthlyProgressText: ["android=new UiSelector().text(\"Monthly Progress\")", "//android.widget.TextView[@text=\"Monthly Progress\"]"],
  trackYourHealthJourneyText: ["android=new UiSelector().text(\"Track your health journey\")", "//android.widget.TextView[@text=\"Track your health journey\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]"],
  el0Text: ["android=new UiSelector().text(\"0%\")", "//android.widget.TextView[@text=\"0%\"]"],
  el00Text: ["(//android.widget.TextView[@text=\"0/0\"])[1]", "android=new UiSelector().text(\"0/0\")"],
  completedText: ["android=new UiSelector().text(\"Completed\")", "//android.widget.TextView[@text=\"Completed\"]"],
  el00Text2: ["(//android.widget.TextView[@text=\"0/0\"])[2]", "android=new UiSelector().text(\"0/0\")"],
  mealsText: ["(//android.widget.TextView[@text=\"Meals\"])[1]", "android=new UiSelector().text(\"Meals\")"],
  exerciseText: ["(//android.widget.TextView[@text=\"Exercise\"])[1]", "android=new UiSelector().text(\"Exercise\")"],
  supplementsText: ["(//android.widget.TextView[@text=\"Supplements\"])[1]", "android=new UiSelector().text(\"Supplements\")"],
  mealsBtn: ["~Meals", "//android.view.ViewGroup[@content-desc=\"Meals\"]"],
  mealsText2: ["(//android.widget.TextView[@text=\"Meals\"])[2]", "android=new UiSelector().text(\"Meals\")"],
  exerciseBtn: ["~Exercise", "//android.view.ViewGroup[@content-desc=\"Exercise\"]"],
  exerciseText2: ["(//android.widget.TextView[@text=\"Exercise\"])[2]", "android=new UiSelector().text(\"Exercise\")"],
  supplementsBtn: ["~Supplements", "//android.view.ViewGroup[@content-desc=\"Supplements\"]"],
  supplementsText2: ["(//android.widget.TextView[@text=\"Supplements\"])[2]", "android=new UiSelector().text(\"Supplements\")"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  earlyMorning0700Btn: ["~󰖜, Early Morning, 07:00 AM, 🌟 Antioxidant, detox, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰖜, Early Morning, 07:00 AM, 🌟 Antioxidant, detox, 󰅀\"]"],
  text2: ["android=new UiSelector().text(\"󰖜\")", "//android.widget.TextView[@text=\"󰖜\"]"],
  earlyMorningText: ["android=new UiSelector().text(\"Early Morning\")", "//android.widget.TextView[@text=\"Early Morning\"]"],
  el0700AmText: ["android=new UiSelector().text(\"07:00 AM\")", "//android.widget.TextView[@text=\"07:00 AM\"]"],
  antioxidantDetoxText: ["android=new UiSelector().text(\"🌟 Antioxidant, detox\")", "//android.widget.TextView[@text=\"🌟 Antioxidant, detox\"]"],
  text3: ["(//android.widget.TextView[@text=\"󰅀\"])[1]", "android=new UiSelector().text(\"󰅀\")"],
  breakfast1000AmBtn: ["~󰟈, Breakfast, 10:00 AM, 🌟 Protein, fiber, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰟈, Breakfast, 10:00 AM, 🌟 Protein, fiber, 󰅀\"]"],
  text4: ["android=new UiSelector().text(\"󰟈\")", "//android.widget.TextView[@text=\"󰟈\"]"],
  breakfastText: ["android=new UiSelector().text(\"Breakfast\")", "//android.widget.TextView[@text=\"Breakfast\"]"],
  el1000AmText: ["android=new UiSelector().text(\"10:00 AM\")", "//android.widget.TextView[@text=\"10:00 AM\"]"],
  proteinFiberText: ["android=new UiSelector().text(\"🌟 Protein, fiber\")", "//android.widget.TextView[@text=\"🌟 Protein, fiber\"]"],
  text5: ["(//android.widget.TextView[@text=\"󰅀\"])[2]", "android=new UiSelector().text(\"󰅀\")"],
  lunch200PmBtn: ["~󰉜, Lunch, 2:00 PM, 🌟 Veggies, fiber, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰉜, Lunch, 2:00 PM, 🌟 Veggies, fiber, 󰅀\"]"],
  text6: ["android=new UiSelector().text(\"󰉜\")", "//android.widget.TextView[@text=\"󰉜\"]"],
  lunchText: ["android=new UiSelector().text(\"Lunch\")", "//android.widget.TextView[@text=\"Lunch\"]"],
  el200PmText: ["android=new UiSelector().text(\"2:00 PM\")", "//android.widget.TextView[@text=\"2:00 PM\"]"],
  veggiesFiberText: ["android=new UiSelector().text(\"🌟 Veggies, fiber\")", "//android.widget.TextView[@text=\"🌟 Veggies, fiber\"]"],
  dinner0800PmBtn: ["~󰩰, Dinner, 08:00 PM (latest), 🌟 Protein, veggies, 󰅀", "//android.view.ViewGroup[@content-desc=\"󰩰, Dinner, 08:00 PM (latest), 🌟 Protein, veggies, 󰅀\"]"],
  text7: ["android=new UiSelector().text(\"󰩰\")", "//android.widget.TextView[@text=\"󰩰\"]"],
  dinnerText: ["android=new UiSelector().text(\"Dinner\")", "//android.widget.TextView[@text=\"Dinner\"]"],
  el0800PmLatestText: ["android=new UiSelector().text(\"08:00 PM (latest)\")", "//android.widget.TextView[@text=\"08:00 PM (latest)\"]"],
  proteinVeggiesText: ["android=new UiSelector().text(\"🌟 Protein, veggies\")", "//android.widget.TextView[@text=\"🌟 Protein, veggies\"]"],
  detoxDrinkAbcText: ["android=new UiSelector().text(\"Detox Drink ABC\")", "//android.widget.TextView[@text=\"Detox Drink ABC\"]"],
  el1GlassText: ["(//android.widget.TextView[@text=\"1 glass\"])[1]", "android=new UiSelector().text(\"1 glass\")"],
  el1ScoopProteinShakeText: ["android=new UiSelector().text(\"1 scoop Protein shake\")", "//android.widget.TextView[@text=\"1 scoop Protein shake\"]"],
  el1Text: ["(//android.widget.TextView[@text=\"1\"])[1]", "android=new UiSelector().text(\"1\")"],
  chiaSeedText: ["android=new UiSelector().text(\"chia seed\")", "//android.widget.TextView[@text=\"chia seed\"]"],
  el1TablespoonText: ["android=new UiSelector().text(\"1 tablespoon\")", "//android.widget.TextView[@text=\"1 tablespoon\"]"],
  el1BowlAnyLeafyText: ["android=new UiSelector().text(\"1 bowl Any leafy vegetable\")", "//android.widget.TextView[@text=\"1 bowl Any leafy vegetable\"]"],
  el1Text2: ["(//android.widget.TextView[@text=\"1\"])[2]", "android=new UiSelector().text(\"1\")"],
  saladText: ["android=new UiSelector().text(\"salad\")", "//android.widget.TextView[@text=\"salad\"]"],
  el1BowlText: ["(//android.widget.TextView[@text=\"1 bowl\"])[1]", "android=new UiSelector().text(\"1 bowl\")"],
  buttermilkText: ["(//android.widget.TextView[@text=\"buttermilk\"])[1]", "android=new UiSelector().text(\"buttermilk\")"],
  el1GlassText2: ["(//android.widget.TextView[@text=\"1 glass\"])[2]", "android=new UiSelector().text(\"1 glass\")"],
  oatsRagiBesanJowarText: ["(//android.widget.TextView[@text=\"oats/ ragi/ besan / jowar/ Channa-barley roti\"])[1]", "android=new UiSelector().text(\"oats/ ragi/ besan / jowar/ Channa-barley roti\")"],
  el1BowlTofuCurryText: ["android=new UiSelector().text(\"1 bowl tofu curry\")", "//android.widget.TextView[@text=\"1 bowl tofu curry\"]"],
  sautVeggiesText: ["android=new UiSelector().text(\"sauté veggies\")", "//android.widget.TextView[@text=\"sauté veggies\"]"],
  el1BowlText2: ["(//android.widget.TextView[@text=\"1 bowl\"])[2]", "android=new UiSelector().text(\"1 bowl\")"],
  oatsRagiBesanJowarText2: ["(//android.widget.TextView[@text=\"oats/ ragi/ besan / jowar/ Channa-barley roti\"])[2]", "android=new UiSelector().text(\"oats/ ragi/ besan / jowar/ Channa-barley roti\")"],
  buttermilkText2: ["(//android.widget.TextView[@text=\"buttermilk\"])[2]", "android=new UiSelector().text(\"buttermilk\")"],
};

class MainScreen11 extends BasePage {
  constructor() {
    super(L, ["earlyMorning0700Btn","breakfast1000AmBtn","lunch200PmBtn"]);
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

  /** TextView "Monthly Progress" */
  get monthlyProgressText() {
    return $(L.monthlyProgressText[0]);
  }

  /** TextView "Track your health journey" */
  get trackYourHealthJourneyText() {
    return $(L.trackYourHealthJourneyText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "0%" */
  get el0Text() {
    return $(L.el0Text[0]);
  }

  /** TextView "0/0" */
  get el00Text() {
    return $(L.el00Text[0]);
  }

  /** TextView "Completed" */
  get completedText() {
    return $(L.completedText[0]);
  }

  /** TextView "0/0" */
  get el00Text2() {
    return $(L.el00Text2[0]);
  }

  /** TextView "Meals" */
  get mealsText() {
    return $(L.mealsText[0]);
  }

  /** TextView "Exercise" */
  get exerciseText() {
    return $(L.exerciseText[0]);
  }

  /** TextView "Supplements" */
  get supplementsText() {
    return $(L.supplementsText[0]);
  }

  /** ViewGroup */
  get mealsBtn() {
    return $(L.mealsBtn[0]);
  }

  /** TextView "Meals" */
  get mealsText2() {
    return $(L.mealsText2[0]);
  }

  /** ViewGroup */
  get exerciseBtn() {
    return $(L.exerciseBtn[0]);
  }

  /** TextView "Exercise" */
  get exerciseText2() {
    return $(L.exerciseText2[0]);
  }

  /** ViewGroup */
  get supplementsBtn() {
    return $(L.supplementsBtn[0]);
  }

  /** TextView "Supplements" */
  get supplementsText2() {
    return $(L.supplementsText2[0]);
  }

  /** ScrollView */
  get list2() {
    return $(L.list2[0]);
  }

  /** ViewGroup */
  get earlyMorning0700Btn() {
    return $(L.earlyMorning0700Btn[0]);
  }

  /** TextView "󰖜" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "Early Morning" */
  get earlyMorningText() {
    return $(L.earlyMorningText[0]);
  }

  /** TextView "07:00 AM" */
  get el0700AmText() {
    return $(L.el0700AmText[0]);
  }

  /** TextView "🌟 Antioxidant, detox" */
  get antioxidantDetoxText() {
    return $(L.antioxidantDetoxText[0]);
  }

  /** TextView "󰅀" */
  get text3() {
    return $(L.text3[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn() {
    return $(L.breakfast1000AmBtn[0]);
  }

  /** TextView "󰟈" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Breakfast" */
  get breakfastText() {
    return $(L.breakfastText[0]);
  }

  /** TextView "10:00 AM" */
  get el1000AmText() {
    return $(L.el1000AmText[0]);
  }

  /** TextView "🌟 Protein, fiber" */
  get proteinFiberText() {
    return $(L.proteinFiberText[0]);
  }

  /** TextView "󰅀" */
  get text5() {
    return $(L.text5[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn() {
    return $(L.lunch200PmBtn[0]);
  }

  /** TextView "󰉜" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Lunch" */
  get lunchText() {
    return $(L.lunchText[0]);
  }

  /** TextView "2:00 PM" */
  get el200PmText() {
    return $(L.el200PmText[0]);
  }

  /** TextView "🌟 Veggies, fiber" */
  get veggiesFiberText() {
    return $(L.veggiesFiberText[0]);
  }

  /** ViewGroup */
  get dinner0800PmBtn() {
    return $(L.dinner0800PmBtn[0]);
  }

  /** TextView "󰩰" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Dinner" */
  get dinnerText() {
    return $(L.dinnerText[0]);
  }

  /** TextView "08:00 PM (latest)" */
  get el0800PmLatestText() {
    return $(L.el0800PmLatestText[0]);
  }

  /** TextView "🌟 Protein, veggies" */
  get proteinVeggiesText() {
    return $(L.proteinVeggiesText[0]);
  }

  /** TextView "Detox Drink ABC" */
  get detoxDrinkAbcText() {
    return $(L.detoxDrinkAbcText[0]);
  }

  /** TextView "1 glass" */
  get el1GlassText() {
    return $(L.el1GlassText[0]);
  }

  /** TextView "1 scoop Protein shake" */
  get el1ScoopProteinShakeText() {
    return $(L.el1ScoopProteinShakeText[0]);
  }

  /** TextView "1" */
  get el1Text() {
    return $(L.el1Text[0]);
  }

  /** TextView "chia seed" */
  get chiaSeedText() {
    return $(L.chiaSeedText[0]);
  }

  /** TextView "1 tablespoon" */
  get el1TablespoonText() {
    return $(L.el1TablespoonText[0]);
  }

  /** TextView "1 bowl Any leafy vegetable" */
  get el1BowlAnyLeafyText() {
    return $(L.el1BowlAnyLeafyText[0]);
  }

  /** TextView "1" */
  get el1Text2() {
    return $(L.el1Text2[0]);
  }

  /** TextView "salad" */
  get saladText() {
    return $(L.saladText[0]);
  }

  /** TextView "1 bowl" */
  get el1BowlText() {
    return $(L.el1BowlText[0]);
  }

  /** TextView "buttermilk" */
  get buttermilkText() {
    return $(L.buttermilkText[0]);
  }

  /** TextView "1 glass" */
  get el1GlassText2() {
    return $(L.el1GlassText2[0]);
  }

  /** TextView "oats/ ragi/ besan / jowar/ Channa-barley" */
  get oatsRagiBesanJowarText() {
    return $(L.oatsRagiBesanJowarText[0]);
  }

  /** TextView "1 bowl tofu curry" */
  get el1BowlTofuCurryText() {
    return $(L.el1BowlTofuCurryText[0]);
  }

  /** TextView "sauté veggies" */
  get sautVeggiesText() {
    return $(L.sautVeggiesText[0]);
  }

  /** TextView "1 bowl" */
  get el1BowlText2() {
    return $(L.el1BowlText2[0]);
  }

  /** TextView "oats/ ragi/ besan / jowar/ Channa-barley" */
  get oatsRagiBesanJowarText2() {
    return $(L.oatsRagiBesanJowarText2[0]);
  }

  /** TextView "buttermilk" */
  get buttermilkText2() {
    return $(L.buttermilkText2[0]);
  }
}

export { MainScreen11 as MainScreen11Class, L as MainScreen11Locators };
export default new MainScreen11();
