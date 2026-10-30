// AUTO-GENERATED from locators/MainScreen15.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen15Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:50:10.388Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  month1ReportText: ["android=new UiSelector().text(\"Month 1 Report\")", "//android.widget.TextView[@text=\"Month 1 Report\"]"],
  downloadReportBtn: ["~Download report", "//android.widget.Button[@content-desc=\"Download report\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView[1]"],
  bioMarkersBtn: ["~Bio Markers", "//android.view.ViewGroup[@content-desc=\"Bio Markers\"]"],
  bioMarkersText: ["android=new UiSelector().text(\"Bio Markers\")", "//android.widget.TextView[@text=\"Bio Markers\"]"],
  planBtn: ["~Plan", "//android.view.ViewGroup[@content-desc=\"Plan\"]"],
  planText: ["android=new UiSelector().text(\"Plan\")", "//android.widget.TextView[@text=\"Plan\"]"],
  dietPlanBtn: ["~Diet Plan", "//android.view.ViewGroup[@content-desc=\"Diet Plan\"]"],
  dietPlanText: ["android=new UiSelector().text(\"Diet Plan\")", "//android.widget.TextView[@text=\"Diet Plan\"]"],
  bioAgeBtn: ["~Bio Age", "//android.view.ViewGroup[@content-desc=\"Bio Age\"]"],
  bioAgeText: ["android=new UiSelector().text(\"Bio Age\")", "//android.widget.TextView[@text=\"Bio Age\"]"],
  rcaBtn: ["~RCA", "//android.view.ViewGroup[@content-desc=\"RCA\"]"],
  rcaText: ["android=new UiSelector().text(\"RCA\")", "//android.widget.TextView[@text=\"RCA\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]"],
  list3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]"],
  yourDailyDietPlanText: ["android=new UiSelector().text(\"Your Daily Diet Plan \")", "//android.widget.TextView[@text=\"Your Daily Diet Plan \"]"],
  yourPersonalizedDietPlanText: ["android=new UiSelector().text(\"Your personalized diet plan for the week \")", "//android.widget.TextView[@text=\"Your personalized diet plan for the week \"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el1200KcalTodayText: ["android=new UiSelector().text(\"1200 kcal today\")", "//android.widget.TextView[@text=\"1200 kcal today\"]"],
  list4: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.HorizontalScrollView[1]"],
  sunBtn: ["~Sun", "//android.view.ViewGroup[@content-desc=\"Sun\"]"],
  sunText: ["android=new UiSelector().text(\"Sun\")", "//android.widget.TextView[@text=\"Sun\"]"],
  monBtn: ["~Mon", "//android.view.ViewGroup[@content-desc=\"Mon\"]"],
  monText: ["android=new UiSelector().text(\"Mon\")", "//android.widget.TextView[@text=\"Mon\"]"],
  tueBtn: ["~Tue", "//android.view.ViewGroup[@content-desc=\"Tue\"]"],
  tueText: ["android=new UiSelector().text(\"Tue\")", "//android.widget.TextView[@text=\"Tue\"]"],
  wedBtn: ["~Wed", "//android.view.ViewGroup[@content-desc=\"Wed\"]"],
  wedText: ["android=new UiSelector().text(\"Wed\")", "//android.widget.TextView[@text=\"Wed\"]"],
  thuBtn: ["~Thu", "//android.view.ViewGroup[@content-desc=\"Thu\"]"],
  thuText: ["android=new UiSelector().text(\"Thu\")", "//android.widget.TextView[@text=\"Thu\"]"],
  friBtn: ["~Fri", "//android.view.ViewGroup[@content-desc=\"Fri\"]"],
  list5: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  earlyMorning0700Btn: ["~, Early Morning, 07:00 AM, Hydration, anti-inflammatory", "//android.view.ViewGroup[@content-desc=\", Early Morning, 07:00 AM, Hydration, anti-inflammatory\"]"],
  text4: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  earlyMorningText: ["android=new UiSelector().text(\"Early Morning\")", "//android.widget.TextView[@text=\"Early Morning\"]"],
  view: ["(//android.view.ViewGroup[@content-desc=\"\"])[1]", "~"],
  text5: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  el0700AmText: ["android=new UiSelector().text(\"07:00 AM\")", "//android.widget.TextView[@text=\"07:00 AM\"]"],
  hydrationAntiInflammatoryText: ["android=new UiSelector().text(\"Hydration, anti-inflammatory\")", "//android.widget.TextView[@text=\"Hydration, anti-inflammatory\"]"],
  lukewarmWaterWithAloeText: ["android=new UiSelector().text(\"Lukewarm Water with aloe vera gel\")", "//android.widget.TextView[@text=\"Lukewarm Water with aloe vera gel\"]"],
  el200MlText: ["android=new UiSelector().text(\"200 ml\")", "//android.widget.TextView[@text=\"200 ml\"]"],
  breakfast1000AmBtn: ["~, Breakfast, 10:00 AM, Complex carbs, fiber", "//android.view.ViewGroup[@content-desc=\", Breakfast, 10:00 AM, Complex carbs, fiber\"]"],
  text6: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  breakfastText: ["android=new UiSelector().text(\"Breakfast\")", "//android.widget.TextView[@text=\"Breakfast\"]"],
  view2: ["(//android.view.ViewGroup[@content-desc=\"\"])[1]", "~"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el1000AmText: ["android=new UiSelector().text(\"10:00 AM\")", "//android.widget.TextView[@text=\"10:00 AM\"]"],
  complexCarbsFiberText: ["android=new UiSelector().text(\"Complex carbs, fiber\")", "//android.widget.TextView[@text=\"Complex carbs, fiber\"]"],
  btn: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text8: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  fullReportBtn: ["~Full Report", "//android.view.ViewGroup[@content-desc=\"Full Report\"]"],
  fullReportText: ["android=new UiSelector().text(\"Full Report\")", "//android.widget.TextView[@text=\"Full Report\"]"],
  el51Text: ["android=new UiSelector().text(\"51\")", "//android.widget.TextView[@text=\"51\"]"],
  el33Text: ["android=new UiSelector().text(\"33\")", "//android.widget.TextView[@text=\"33\"]"],
  showDetailsBtn: ["~, Show Details", "//android.view.ViewGroup[@content-desc=\", Show Details\"]"],
  showDetailsText: ["android=new UiSelector().text(\"Show Details\")", "//android.widget.TextView[@text=\"Show Details\"]"],
  text9: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  lunch200PmBtn: ["~, Lunch, 2:00 PM, Balanced meal", "//android.view.ViewGroup[@content-desc=\", Lunch, 2:00 PM, Balanced meal\"]"],
  text10: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  lunchText: ["android=new UiSelector().text(\"Lunch\")", "//android.widget.TextView[@text=\"Lunch\"]"],
  el200PmText: ["android=new UiSelector().text(\"2:00 PM\")", "//android.widget.TextView[@text=\"2:00 PM\"]"],
  balancedMealText: ["android=new UiSelector().text(\"Balanced meal\")", "//android.widget.TextView[@text=\"Balanced meal\"]"],
  earlyMorning0700Btn2: ["~, Early Morning, 07:00 AM, Antioxidant, detox", "//android.view.ViewGroup[@content-desc=\", Early Morning, 07:00 AM, Antioxidant, detox\"]"],
  antioxidantDetoxText: ["android=new UiSelector().text(\"Antioxidant, detox\")", "//android.widget.TextView[@text=\"Antioxidant, detox\"]"],
  detoxDrinkAbcText: ["android=new UiSelector().text(\"Detox Drink ABC\")", "//android.widget.TextView[@text=\"Detox Drink ABC\"]"],
  el1GlassText: ["android=new UiSelector().text(\"1 glass\")", "//android.widget.TextView[@text=\"1 glass\"]"],
  breakfast1000AmBtn2: ["~, Breakfast, 10:00 AM, Fiber, healthy fats", "//android.view.ViewGroup[@content-desc=\", Breakfast, 10:00 AM, Fiber, healthy fats\"]"],
  fiberHealthyFatsText: ["android=new UiSelector().text(\"Fiber, healthy fats\")", "//android.widget.TextView[@text=\"Fiber, healthy fats\"]"],
  lunch200PmBtn2: ["~, Lunch, 2:00 PM, Veggies, fiber", "//android.view.ViewGroup[@content-desc=\", Lunch, 2:00 PM, Veggies, fiber\"]"],
  veggiesFiberText: ["android=new UiSelector().text(\"Veggies, fiber\")", "//android.widget.TextView[@text=\"Veggies, fiber\"]"],
  dinner0800PmBtn: ["~, Dinner, 08:00 PM (latest), Veggies, healthy fats", "//android.view.ViewGroup[@content-desc=\", Dinner, 08:00 PM (latest), Veggies, healthy fats\"]"],
  text11: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  dinnerText: ["android=new UiSelector().text(\"Dinner\")", "//android.widget.TextView[@text=\"Dinner\"]"],
  el0800PmLatestText: ["android=new UiSelector().text(\"08:00 PM (latest)\")", "//android.widget.TextView[@text=\"08:00 PM (latest)\"]"],
  veggiesHealthyFatsText: ["android=new UiSelector().text(\"Veggies, healthy fats\")", "//android.widget.TextView[@text=\"Veggies, healthy fats\"]"],
  el1TbspGheeText: ["android=new UiSelector().text(\"1 tbsp ghee\")", "//android.widget.TextView[@text=\"1 tbsp ghee\"]"],
  el1Text: ["android=new UiSelector().text(\"1\")", "//android.widget.TextView[@text=\"1\"]"],
  bottleGuardVegetableText: ["android=new UiSelector().text(\"bottle guard vegetable\")", "//android.widget.TextView[@text=\"bottle guard vegetable\"]"],
  el1BowlText: ["android=new UiSelector().text(\"1 bowl\")", "//android.widget.TextView[@text=\"1 bowl\"]"],
  sautVeggiesText: ["android=new UiSelector().text(\"sauté veggies\")", "//android.widget.TextView[@text=\"sauté veggies\"]"],
  el1BowlText2: ["(//android.widget.TextView[@text=\"1 bowl\"])[2]", "android=new UiSelector().text(\"1 bowl\")"],
  oatsRagiBesanJowarText: ["(//android.widget.TextView[@text=\"oats/ ragi/ besan / jowar/ Channa-barley roti\"])[1]", "android=new UiSelector().text(\"oats/ ragi/ besan / jowar/ Channa-barley roti\")"],
  el1Text2: ["(//android.widget.TextView[@text=\"1\"])[2]", "android=new UiSelector().text(\"1\")"],
  curdText: ["android=new UiSelector().text(\"curd\")", "//android.widget.TextView[@text=\"curd\"]"],
  halfBowlText: ["android=new UiSelector().text(\"half bowl\")", "//android.widget.TextView[@text=\"half bowl\"]"],
  btn2: ["~", "//android.view.ViewGroup[@content-desc=\"\"]"],
  text12: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el1BowlVegetableKhichdiText: ["android=new UiSelector().text(\"1 bowl Vegetable khichdi\")", "//android.widget.TextView[@text=\"1 bowl Vegetable khichdi\"]"],
  lowFatCurdText: ["android=new UiSelector().text(\"low fat curd\")", "//android.widget.TextView[@text=\"low fat curd\"]"],
  saladText: ["android=new UiSelector().text(\"salad\")", "//android.widget.TextView[@text=\"salad\"]"],
  text13: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  cauliflowerOnionKneadedJowarText: ["android=new UiSelector().text(\"Cauliflower/ Onion kneaded jowar roti\")", "//android.widget.TextView[@text=\"Cauliflower/ Onion kneaded jowar roti\"]"],
  mintChutneyOrCurdText: ["android=new UiSelector().text(\"mint chutney or curd\")", "//android.widget.TextView[@text=\"mint chutney or curd\"]"],
  el2TablespoonOr60Text: ["android=new UiSelector().text(\"2 tablespoon or 60 ml\")", "//android.widget.TextView[@text=\"2 tablespoon or 60 ml\"]"],
  sampleText: ["(//android.widget.TextView[@text=\"SAMPLE\"])[1]", "android=new UiSelector().text(\"SAMPLE\")"],
  earlyMorning0700Btn3: ["~, Early Morning, 07:00 AM, Antioxidant support", "//android.view.ViewGroup[@content-desc=\", Early Morning, 07:00 AM, Antioxidant support\"]"],
  antioxidantSupportText: ["android=new UiSelector().text(\"Antioxidant support\")", "//android.widget.TextView[@text=\"Antioxidant support\"]"],
  greenTeaText: ["android=new UiSelector().text(\"Green Tea\")", "//android.widget.TextView[@text=\"Green Tea\"]"],
  el1CupText: ["android=new UiSelector().text(\"1 cup\")", "//android.widget.TextView[@text=\"1 cup\"]"],
  breakfast1000AmBtn3: ["~, Breakfast, 10:00 AM, Complex carbs", "//android.view.ViewGroup[@content-desc=\", Breakfast, 10:00 AM, Complex carbs\"]"],
  complexCarbsText: ["android=new UiSelector().text(\"Complex carbs\")", "//android.widget.TextView[@text=\"Complex carbs\"]"],
  sampleText2: ["(//android.widget.TextView[@text=\"SAMPLE\"])[2]", "android=new UiSelector().text(\"SAMPLE\")"],
  dinner0800PmBtn2: ["~, Dinner, 08:00 PM (latest), Healthy fats", "//android.view.ViewGroup[@content-desc=\", Dinner, 08:00 PM (latest), Healthy fats\"]"],
  healthyFatsText: ["android=new UiSelector().text(\"Healthy fats\")", "//android.widget.TextView[@text=\"Healthy fats\"]"],
  karelaVegetableText: ["android=new UiSelector().text(\"karela vegetable\")", "//android.widget.TextView[@text=\"karela vegetable\"]"],
  oatsRagiBesanJowarText2: ["(//android.widget.TextView[@text=\"oats/ ragi/ besan / jowar/ Channa-barley roti\"])[2]", "android=new UiSelector().text(\"oats/ ragi/ besan / jowar/ Channa-barley roti\")"],
  gheeText: ["android=new UiSelector().text(\"ghee\")", "//android.widget.TextView[@text=\"ghee\"]"],
  el1TablespoonText: ["android=new UiSelector().text(\"1 tablespoon\")", "//android.widget.TextView[@text=\"1 tablespoon\"]"],
  spinach100gmBoiledChickpeaText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[3]"],
};

class MainScreen15 extends BasePage {
  constructor() {
    super(L, ["sunBtn","monBtn","tueBtn"]);
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

  /** TextView "Month 1 Report" */
  get month1ReportText() {
    return $(L.month1ReportText[0]);
  }

  /** Button */
  get downloadReportBtn() {
    return $(L.downloadReportBtn[0]);
  }

  /** TextView "" */
  get text2() {
    return $(L.text2[0]);
  }

  /** HorizontalScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** ViewGroup */
  get bioMarkersBtn() {
    return $(L.bioMarkersBtn[0]);
  }

  /** TextView "Bio Markers" */
  get bioMarkersText() {
    return $(L.bioMarkersText[0]);
  }

  /** ViewGroup */
  get planBtn() {
    return $(L.planBtn[0]);
  }

  /** TextView "Plan" */
  get planText() {
    return $(L.planText[0]);
  }

  /** ViewGroup */
  get dietPlanBtn() {
    return $(L.dietPlanBtn[0]);
  }

  /** TextView "Diet Plan" */
  get dietPlanText() {
    return $(L.dietPlanText[0]);
  }

  /** ViewGroup */
  get bioAgeBtn() {
    return $(L.bioAgeBtn[0]);
  }

  /** TextView "Bio Age" */
  get bioAgeText() {
    return $(L.bioAgeText[0]);
  }

  /** ViewGroup */
  get rcaBtn() {
    return $(L.rcaBtn[0]);
  }

  /** TextView "RCA" */
  get rcaText() {
    return $(L.rcaText[0]);
  }

  /** ViewPager */
  get list2() {
    return $(L.list2[0]);
  }

  /** RecyclerView */
  get list3() {
    return $(L.list3[0]);
  }

  /** TextView "Your Daily Diet Plan " */
  get yourDailyDietPlanText() {
    return $(L.yourDailyDietPlanText[0]);
  }

  /** TextView "Your personalized diet plan for the week" */
  get yourPersonalizedDietPlanText() {
    return $(L.yourPersonalizedDietPlanText[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "1200 kcal today" */
  get el1200KcalTodayText() {
    return $(L.el1200KcalTodayText[0]);
  }

  /** HorizontalScrollView */
  get list4() {
    return $(L.list4[0]);
  }

  /** ViewGroup */
  get sunBtn() {
    return $(L.sunBtn[0]);
  }

  /** TextView "Sun" */
  get sunText() {
    return $(L.sunText[0]);
  }

  /** ViewGroup */
  get monBtn() {
    return $(L.monBtn[0]);
  }

  /** TextView "Mon" */
  get monText() {
    return $(L.monText[0]);
  }

  /** ViewGroup */
  get tueBtn() {
    return $(L.tueBtn[0]);
  }

  /** TextView "Tue" */
  get tueText() {
    return $(L.tueText[0]);
  }

  /** ViewGroup */
  get wedBtn() {
    return $(L.wedBtn[0]);
  }

  /** TextView "Wed" */
  get wedText() {
    return $(L.wedText[0]);
  }

  /** ViewGroup */
  get thuBtn() {
    return $(L.thuBtn[0]);
  }

  /** TextView "Thu" */
  get thuText() {
    return $(L.thuText[0]);
  }

  /** ViewGroup */
  get friBtn() {
    return $(L.friBtn[0]);
  }

  /** ScrollView */
  get list5() {
    return $(L.list5[0]);
  }

  /** ViewGroup */
  get earlyMorning0700Btn() {
    return $(L.earlyMorning0700Btn[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Early Morning" */
  get earlyMorningText() {
    return $(L.earlyMorningText[0]);
  }

  /** ViewGroup */
  get view() {
    return $(L.view[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "07:00 AM" */
  get el0700AmText() {
    return $(L.el0700AmText[0]);
  }

  /** TextView "Hydration, anti-inflammatory" */
  get hydrationAntiInflammatoryText() {
    return $(L.hydrationAntiInflammatoryText[0]);
  }

  /** TextView "Lukewarm Water with aloe vera gel" */
  get lukewarmWaterWithAloeText() {
    return $(L.lukewarmWaterWithAloeText[0]);
  }

  /** TextView "200 ml" */
  get el200MlText() {
    return $(L.el200MlText[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn() {
    return $(L.breakfast1000AmBtn[0]);
  }

  /** TextView "" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Breakfast" */
  get breakfastText() {
    return $(L.breakfastText[0]);
  }

  /** ViewGroup */
  get view2() {
    return $(L.view2[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "10:00 AM" */
  get el1000AmText() {
    return $(L.el1000AmText[0]);
  }

  /** TextView "Complex carbs, fiber" */
  get complexCarbsFiberText() {
    return $(L.complexCarbsFiberText[0]);
  }

  /** ViewGroup */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "" */
  get text8() {
    return $(L.text8[0]);
  }

  /** ViewGroup */
  get fullReportBtn() {
    return $(L.fullReportBtn[0]);
  }

  /** TextView "Full Report" */
  get fullReportText() {
    return $(L.fullReportText[0]);
  }

  /** TextView "51" */
  get el51Text() {
    return $(L.el51Text[0]);
  }

  /** TextView "33" */
  get el33Text() {
    return $(L.el33Text[0]);
  }

  /** ViewGroup */
  get showDetailsBtn() {
    return $(L.showDetailsBtn[0]);
  }

  /** TextView "Show Details" */
  get showDetailsText() {
    return $(L.showDetailsText[0]);
  }

  /** TextView "" */
  get text9() {
    return $(L.text9[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn() {
    return $(L.lunch200PmBtn[0]);
  }

  /** TextView "" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Lunch" */
  get lunchText() {
    return $(L.lunchText[0]);
  }

  /** TextView "2:00 PM" */
  get el200PmText() {
    return $(L.el200PmText[0]);
  }

  /** TextView "Balanced meal" */
  get balancedMealText() {
    return $(L.balancedMealText[0]);
  }

  /** ViewGroup */
  get earlyMorning0700Btn2() {
    return $(L.earlyMorning0700Btn2[0]);
  }

  /** TextView "Antioxidant, detox" */
  get antioxidantDetoxText() {
    return $(L.antioxidantDetoxText[0]);
  }

  /** TextView "Detox Drink ABC" */
  get detoxDrinkAbcText() {
    return $(L.detoxDrinkAbcText[0]);
  }

  /** TextView "1 glass" */
  get el1GlassText() {
    return $(L.el1GlassText[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn2() {
    return $(L.breakfast1000AmBtn2[0]);
  }

  /** TextView "Fiber, healthy fats" */
  get fiberHealthyFatsText() {
    return $(L.fiberHealthyFatsText[0]);
  }

  /** ViewGroup */
  get lunch200PmBtn2() {
    return $(L.lunch200PmBtn2[0]);
  }

  /** TextView "Veggies, fiber" */
  get veggiesFiberText() {
    return $(L.veggiesFiberText[0]);
  }

  /** ViewGroup */
  get dinner0800PmBtn() {
    return $(L.dinner0800PmBtn[0]);
  }

  /** TextView "" */
  get text11() {
    return $(L.text11[0]);
  }

  /** TextView "Dinner" */
  get dinnerText() {
    return $(L.dinnerText[0]);
  }

  /** TextView "08:00 PM (latest)" */
  get el0800PmLatestText() {
    return $(L.el0800PmLatestText[0]);
  }

  /** TextView "Veggies, healthy fats" */
  get veggiesHealthyFatsText() {
    return $(L.veggiesHealthyFatsText[0]);
  }

  /** TextView "1 tbsp ghee" */
  get el1TbspGheeText() {
    return $(L.el1TbspGheeText[0]);
  }

  /** TextView "1" */
  get el1Text() {
    return $(L.el1Text[0]);
  }

  /** TextView "bottle guard vegetable" */
  get bottleGuardVegetableText() {
    return $(L.bottleGuardVegetableText[0]);
  }

  /** TextView "1 bowl" */
  get el1BowlText() {
    return $(L.el1BowlText[0]);
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
  get oatsRagiBesanJowarText() {
    return $(L.oatsRagiBesanJowarText[0]);
  }

  /** TextView "1" */
  get el1Text2() {
    return $(L.el1Text2[0]);
  }

  /** TextView "curd" */
  get curdText() {
    return $(L.curdText[0]);
  }

  /** TextView "half bowl" */
  get halfBowlText() {
    return $(L.halfBowlText[0]);
  }

  /** ViewGroup */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "" */
  get text12() {
    return $(L.text12[0]);
  }

  /** TextView "1 bowl Vegetable khichdi" */
  get el1BowlVegetableKhichdiText() {
    return $(L.el1BowlVegetableKhichdiText[0]);
  }

  /** TextView "low fat curd" */
  get lowFatCurdText() {
    return $(L.lowFatCurdText[0]);
  }

  /** TextView "salad" */
  get saladText() {
    return $(L.saladText[0]);
  }

  /** TextView "" */
  get text13() {
    return $(L.text13[0]);
  }

  /** TextView "Cauliflower/ Onion kneaded jowar roti" */
  get cauliflowerOnionKneadedJowarText() {
    return $(L.cauliflowerOnionKneadedJowarText[0]);
  }

  /** TextView "mint chutney or curd" */
  get mintChutneyOrCurdText() {
    return $(L.mintChutneyOrCurdText[0]);
  }

  /** TextView "2 tablespoon or 60 ml" */
  get el2TablespoonOr60Text() {
    return $(L.el2TablespoonOr60Text[0]);
  }

  /** TextView "SAMPLE" */
  get sampleText() {
    return $(L.sampleText[0]);
  }

  /** ViewGroup */
  get earlyMorning0700Btn3() {
    return $(L.earlyMorning0700Btn3[0]);
  }

  /** TextView "Antioxidant support" */
  get antioxidantSupportText() {
    return $(L.antioxidantSupportText[0]);
  }

  /** TextView "Green Tea" */
  get greenTeaText() {
    return $(L.greenTeaText[0]);
  }

  /** TextView "1 cup" */
  get el1CupText() {
    return $(L.el1CupText[0]);
  }

  /** ViewGroup */
  get breakfast1000AmBtn3() {
    return $(L.breakfast1000AmBtn3[0]);
  }

  /** TextView "Complex carbs" */
  get complexCarbsText() {
    return $(L.complexCarbsText[0]);
  }

  /** TextView "SAMPLE" */
  get sampleText2() {
    return $(L.sampleText2[0]);
  }

  /** ViewGroup */
  get dinner0800PmBtn2() {
    return $(L.dinner0800PmBtn2[0]);
  }

  /** TextView "Healthy fats" */
  get healthyFatsText() {
    return $(L.healthyFatsText[0]);
  }

  /** TextView "karela vegetable" */
  get karelaVegetableText() {
    return $(L.karelaVegetableText[0]);
  }

  /** TextView "oats/ ragi/ besan / jowar/ Channa-barley" */
  get oatsRagiBesanJowarText2() {
    return $(L.oatsRagiBesanJowarText2[0]);
  }

  /** TextView "ghee" */
  get gheeText() {
    return $(L.gheeText[0]);
  }

  /** TextView "1 tablespoon" */
  get el1TablespoonText() {
    return $(L.el1TablespoonText[0]);
  }

  /** TextView "spinach (100gm), boiled chickpea(100gm)," */
  get spinach100gmBoiledChickpeaText() {
    return $(L.spinach100gmBoiledChickpeaText[0]);
  }
}

export { MainScreen15 as MainScreen15Class, L as MainScreen15Locators };
export default new MainScreen15();
