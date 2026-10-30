// AUTO-GENERATED from locators/MainScreen14.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen14Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:49:53.998Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  month1ReportText: ["android=new UiSelector().text(\"Month 1 Report\")", "//android.widget.TextView[@text=\"Month 1 Report\"]"],
  downloadReportBtn: ["~Download report", "//android.widget.Button[@content-desc=\"Download report\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView[1]"],
  reportHomeBtn: ["~Report Home", "//android.view.ViewGroup[@content-desc=\"Report Home\"]"],
  reportHomeText: ["android=new UiSelector().text(\"Report Home\")", "//android.widget.TextView[@text=\"Report Home\"]"],
  bioMarkersBtn: ["~Bio Markers", "//android.view.ViewGroup[@content-desc=\"Bio Markers\"]"],
  bioMarkersText: ["android=new UiSelector().text(\"Bio Markers\")", "//android.widget.TextView[@text=\"Bio Markers\"]"],
  planBtn: ["~Plan", "//android.view.ViewGroup[@content-desc=\"Plan\"]"],
  planText: ["android=new UiSelector().text(\"Plan\")", "//android.widget.TextView[@text=\"Plan\"]"],
  dietPlanBtn: ["~Diet Plan", "//android.view.ViewGroup[@content-desc=\"Diet Plan\"]"],
  dietPlanText: ["android=new UiSelector().text(\"Diet Plan\")", "//android.widget.TextView[@text=\"Diet Plan\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]"],
  list3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]"],
  list4: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.HorizontalScrollView[1]"],
  summaryBtn: ["~Summary", "//android.view.ViewGroup[@content-desc=\"Summary\"]"],
  summaryText: ["android=new UiSelector().text(\"Summary\")", "//android.widget.TextView[@text=\"Summary\"]"],
  heartBtn: ["~Heart", "//android.view.ViewGroup[@content-desc=\"Heart\"]"],
  heartText: ["(//android.widget.TextView[@text=\"Heart\"])[1]", "android=new UiSelector().text(\"Heart\")"],
  bloodSugarBtn: ["~Blood Sugar", "//android.view.ViewGroup[@content-desc=\"Blood Sugar\"]"],
  bloodSugarText: ["(//android.widget.TextView[@text=\"Blood Sugar\"])[1]", "android=new UiSelector().text(\"Blood Sugar\")"],
  vitaminsBtn: ["~Vitamins", "//android.view.ViewGroup[@content-desc=\"Vitamins\"]"],
  vitaminsText: ["(//android.widget.TextView[@text=\"Vitamins\"])[1]", "android=new UiSelector().text(\"Vitamins\")"],
  list5: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  yourHealthAtAText: ["android=new UiSelector().text(\"Your Health at a Glance\")", "//android.widget.TextView[@text=\"Your Health at a Glance\"]"],
  heartNeedsCareBtn: ["~🫀, Heart, Needs care", "//android.view.ViewGroup[@content-desc=\"🫀, Heart, Needs care\"]"],
  text3: ["android=new UiSelector().text(\"🫀\")", "//android.widget.TextView[@text=\"🫀\"]"],
  heartText2: ["(//android.widget.TextView[@text=\"Heart\"])[2]", "android=new UiSelector().text(\"Heart\")"],
  needsCareText: ["android=new UiSelector().text(\"Needs care\")", "//android.widget.TextView[@text=\"Needs care\"]"],
  bloodSugarGreatBtn: ["~🍯, Blood Sugar, Great!", "//android.view.ViewGroup[@content-desc=\"🍯, Blood Sugar, Great!\"]"],
  text4: ["android=new UiSelector().text(\"🍯\")", "//android.widget.TextView[@text=\"🍯\"]"],
  bloodSugarText2: ["(//android.widget.TextView[@text=\"Blood Sugar\"])[2]", "android=new UiSelector().text(\"Blood Sugar\")"],
  greatText: ["android=new UiSelector().text(\"Great!\")", "//android.widget.TextView[@text=\"Great!\"]"],
  vitaminsWatchItBtn: ["~💊, Vitamins, Watch it", "//android.view.ViewGroup[@content-desc=\"💊, Vitamins, Watch it\"]"],
  text5: ["android=new UiSelector().text(\"💊\")", "//android.widget.TextView[@text=\"💊\"]"],
  vitaminsText2: ["(//android.widget.TextView[@text=\"Vitamins\"])[2]", "android=new UiSelector().text(\"Vitamins\")"],
  watchItText: ["(//android.widget.TextView[@text=\"Watch it\"])[1]", "android=new UiSelector().text(\"Watch it\")"],
  defenseWatchItBtn: ["~🛡️, Defense, Watch it", "//android.view.ViewGroup[@content-desc=\"🛡️, Defense, Watch it\"]"],
  text6: ["android=new UiSelector().text(\"🛡️\")", "//android.widget.TextView[@text=\"🛡️\"]"],
  defenseText: ["android=new UiSelector().text(\"Defense\")", "//android.widget.TextView[@text=\"Defense\"]"],
  watchItText2: ["(//android.widget.TextView[@text=\"Watch it\"])[2]", "android=new UiSelector().text(\"Watch it\")"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  el1BiomarkerText: ["android=new UiSelector().text(\"1 biomarker\")", "//android.widget.TextView[@text=\"1 biomarker\"]"],
  apoBHeartBorderlineBtn: ["~🫀, Apo-B, heart, Borderline Low, 61, mg/dl, <68, 68-80, 80-120, 120-138, >138, ApoB is widely considered a more accurate predictor of cardiovascular risk than LDL cholesterol alone. For most adults, a level below 90 mg/dL is optimal, while high-risk individuals (such as those with diabetes) often aim for below 65–70 mg/dL. An elevated ApoB indicates a high concentration of particles that can penetrate and stick to the arterial lining, leading to plaque formation., , View Source", "//android.view.ViewGroup[@content-desc=\"🫀, Apo-B, heart, Borderline Low, 61, mg/dl, <68, 68-80, 80-120, 120-138, >138, ApoB is widely considered a more accurate predictor of cardiovascular risk than LDL cholesterol alone. For most adults, a level below 90 mg/dL is optimal, while high-risk individuals (such as those with diabetes) often aim for below 65–70 mg/dL. An elevated ApoB indicates a high concentration of particles that can penetrate and stick to the arterial lining, leading to plaque formation., , View Source\"]"],
  bioAgeBtn: ["~Bio Age", "//android.view.ViewGroup[@content-desc=\"Bio Age\"]"],
  bioAgeText: ["android=new UiSelector().text(\"Bio Age\")", "//android.widget.TextView[@text=\"Bio Age\"]"],
  text8: ["android=new UiSelector().text(\"🎯\")", "//android.widget.TextView[@text=\"🎯\"]"],
  letSTransformYourText: ["android=new UiSelector().text(\"Let's Transform Your Health Together!\")", "//android.widget.TextView[@text=\"Let's Transform Your Health Together!\"]"],
  yourPersonalizedActionPlanText: ["android=new UiSelector().text(\"Your personalized action plan\")", "//android.widget.TextView[@text=\"Your personalized action plan\"]"],
  hereSYourSimpleText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[4]"],
  importantDoThisFirstText: ["android=new UiSelector().text(\"🚨Important: Do This First!\")", "//android.widget.TextView[@text=\"🚨Important: Do This First!\"]"],
  text9: ["android=new UiSelector().text(\"📞\")", "//android.widget.TextView[@text=\"📞\"]"],
  callYourDoctorTodayText: ["android=new UiSelector().text(\"Call Your Doctor Today\")", "//android.widget.TextView[@text=\"Call Your Doctor Today\"]"],
  scheduleAConsultationToText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[8]"],
  yourGoal1200HappyText: ["android=new UiSelector().text(\"🎯 Your Goal: 1200 Happy Calories\")", "//android.widget.TextView[@text=\"🎯 Your Goal: 1200 Happy Calories\"]"],
  thinkQualityOverQuantityText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[2]"],
  text10: ["android=new UiSelector().text(\"✅\")", "//android.widget.TextView[@text=\"✅\"]"],
  eatMoreText: ["android=new UiSelector().text(\"Eat More\")", "//android.widget.TextView[@text=\"Eat More\"]"],
  spinachSalmonLentilsText: ["android=new UiSelector().text(\"Spinach, Salmon, Lentils\")", "//android.widget.TextView[@text=\"Spinach, Salmon, Lentils\"]"],
  text11: ["android=new UiSelector().text(\"❌\")", "//android.widget.TextView[@text=\"❌\"]"],
  eatLessText: ["android=new UiSelector().text(\"Eat Less\")", "//android.widget.TextView[@text=\"Eat Less\"]"],
  blackTeaWhiteRiceText: ["android=new UiSelector().text(\"Black Tea, White Rice, Soda\")", "//android.widget.TextView[@text=\"Black Tea, White Rice, Soda\"]"],
  text12: ["android=new UiSelector().text(\"🕐\")", "//android.widget.TextView[@text=\"🕐\"]"],
  finishDinnerBy8Text: ["android=new UiSelector().text(\"Finish dinner by 8 PM\")", "//android.widget.TextView[@text=\"Finish dinner by 8 PM\"]"],
  givesYourBody14Text: ["android=new UiSelector().text(\"Gives your body 14 hours to rest!\")", "//android.widget.TextView[@text=\"Gives your body 14 hours to rest!\"]"],
  seeMyWeeklyMenuBtn: ["~, See My Weekly Menu Plan, ", "//android.view.ViewGroup[@content-desc=\", See My Weekly Menu Plan, \"]"],
  text13: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  seeMyWeeklyMenuText: ["android=new UiSelector().text(\"See My Weekly Menu Plan\")", "//android.widget.TextView[@text=\"See My Weekly Menu Plan\"]"],
  text14: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  yourMovementPlanText: ["android=new UiSelector().text(\"🏃Your Movement Plan\")", "//android.widget.TextView[@text=\"🏃Your Movement Plan\"]"],
  regularMovementIsOneText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[1]"],
  mondayText: ["android=new UiSelector().text(\"Monday\")", "//android.widget.TextView[@text=\"Monday\"]"],
  el30MinBriskWalkingText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[3]"],
  tuesdayText: ["android=new UiSelector().text(\"Tuesday\")", "//android.widget.TextView[@text=\"Tuesday\"]"],
  el30MinLowImpactText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[5]"],
  wednesdayText: ["android=new UiSelector().text(\"Wednesday\")", "//android.widget.TextView[@text=\"Wednesday\"]"],
  el30MinBriskWalkingText2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[7]"],
  thursdayText: ["android=new UiSelector().text(\"Thursday\")", "//android.widget.TextView[@text=\"Thursday\"]"],
  el30MinLowImpactText2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[9]"],
  whatWillHappenNextText: ["android=new UiSelector().text(\"🌟What Will Happen Next?\")", "//android.widget.TextView[@text=\"🌟What Will Happen Next?\"]"],
  in13MonthsText: ["android=new UiSelector().text(\"In 1-3 months, you should feel:\")", "//android.widget.TextView[@text=\"In 1-3 months, you should feel:\"]"],
  text15: ["android=new UiSelector().text(\"⚡\")", "//android.widget.TextView[@text=\"⚡\"]"],
  moreEnergyText: ["android=new UiSelector().text(\"More energy\")", "//android.widget.TextView[@text=\"More energy\"]"],
  text16: ["android=new UiSelector().text(\"😴\")", "//android.widget.TextView[@text=\"😴\"]"],
  betterSleepText: ["android=new UiSelector().text(\"Better sleep\")", "//android.widget.TextView[@text=\"Better sleep\"]"],
  text17: ["android=new UiSelector().text(\"❤️\")", "//android.widget.TextView[@text=\"❤️\"]"],
  strongerHeartText: ["android=new UiSelector().text(\"Stronger heart\")", "//android.widget.TextView[@text=\"Stronger heart\"]"],
  betterSugarText: ["android=new UiSelector().text(\"Better sugar\")", "//android.widget.TextView[@text=\"Better sugar\"]"],
  weLlCheckYourText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[11]"],
  everySmallStepCountsText: ["android=new UiSelector().text(\"Every small step counts towards your health transformation!\")", "//android.widget.TextView[@text=\"Every small step counts towards your health transformation!\"]"],
  text18: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  sampleText: ["(//android.widget.TextView[@text=\"SAMPLE\"])[1]", "android=new UiSelector().text(\"SAMPLE\")"],
  yourDailyHealthHelpersText: ["android=new UiSelector().text(\"💊Your Daily Health Helpers\")", "//android.widget.TextView[@text=\"💊Your Daily Health Helpers\"]"],
  thinkOfTheseLikeText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.TextView[6]"],
  morningAfterBreakfastText: ["android=new UiSelector().text(\"☀️Morning (After Breakfast)\")", "//android.widget.TextView[@text=\"☀️Morning (After Breakfast)\"]"],
  sampleText2: ["(//android.widget.TextView[@text=\"SAMPLE\"])[2]", "android=new UiSelector().text(\"SAMPLE\")"],
};

class MainScreen14 extends BasePage {
  constructor() {
    super(L, ["reportHomeBtn","summaryBtn","heartBtn"]);
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
  get reportHomeBtn() {
    return $(L.reportHomeBtn[0]);
  }

  /** TextView "Report Home" */
  get reportHomeText() {
    return $(L.reportHomeText[0]);
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

  /** ViewPager */
  get list2() {
    return $(L.list2[0]);
  }

  /** RecyclerView */
  get list3() {
    return $(L.list3[0]);
  }

  /** HorizontalScrollView */
  get list4() {
    return $(L.list4[0]);
  }

  /** ViewGroup */
  get summaryBtn() {
    return $(L.summaryBtn[0]);
  }

  /** TextView "Summary" */
  get summaryText() {
    return $(L.summaryText[0]);
  }

  /** ViewGroup */
  get heartBtn() {
    return $(L.heartBtn[0]);
  }

  /** TextView "Heart" */
  get heartText() {
    return $(L.heartText[0]);
  }

  /** ViewGroup */
  get bloodSugarBtn() {
    return $(L.bloodSugarBtn[0]);
  }

  /** TextView "Blood Sugar" */
  get bloodSugarText() {
    return $(L.bloodSugarText[0]);
  }

  /** ViewGroup */
  get vitaminsBtn() {
    return $(L.vitaminsBtn[0]);
  }

  /** TextView "Vitamins" */
  get vitaminsText() {
    return $(L.vitaminsText[0]);
  }

  /** ScrollView */
  get list5() {
    return $(L.list5[0]);
  }

  /** TextView "Your Health at a Glance" */
  get yourHealthAtAText() {
    return $(L.yourHealthAtAText[0]);
  }

  /** ViewGroup */
  get heartNeedsCareBtn() {
    return $(L.heartNeedsCareBtn[0]);
  }

  /** TextView "🫀" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "Heart" */
  get heartText2() {
    return $(L.heartText2[0]);
  }

  /** TextView "Needs care" */
  get needsCareText() {
    return $(L.needsCareText[0]);
  }

  /** ViewGroup */
  get bloodSugarGreatBtn() {
    return $(L.bloodSugarGreatBtn[0]);
  }

  /** TextView "🍯" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Blood Sugar" */
  get bloodSugarText2() {
    return $(L.bloodSugarText2[0]);
  }

  /** TextView "Great!" */
  get greatText() {
    return $(L.greatText[0]);
  }

  /** ViewGroup */
  get vitaminsWatchItBtn() {
    return $(L.vitaminsWatchItBtn[0]);
  }

  /** TextView "💊" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "Vitamins" */
  get vitaminsText2() {
    return $(L.vitaminsText2[0]);
  }

  /** TextView "Watch it" */
  get watchItText() {
    return $(L.watchItText[0]);
  }

  /** ViewGroup */
  get defenseWatchItBtn() {
    return $(L.defenseWatchItBtn[0]);
  }

  /** TextView "🛡️" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "Defense" */
  get defenseText() {
    return $(L.defenseText[0]);
  }

  /** TextView "Watch it" */
  get watchItText2() {
    return $(L.watchItText2[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "1 biomarker" */
  get el1BiomarkerText() {
    return $(L.el1BiomarkerText[0]);
  }

  /** ViewGroup */
  get apoBHeartBorderlineBtn() {
    return $(L.apoBHeartBorderlineBtn[0]);
  }

  /** ViewGroup */
  get bioAgeBtn() {
    return $(L.bioAgeBtn[0]);
  }

  /** TextView "Bio Age" */
  get bioAgeText() {
    return $(L.bioAgeText[0]);
  }

  /** TextView "🎯" */
  get text8() {
    return $(L.text8[0]);
  }

  /** TextView "Let's Transform Your Health Together!" */
  get letSTransformYourText() {
    return $(L.letSTransformYourText[0]);
  }

  /** TextView "Your personalized action plan" */
  get yourPersonalizedActionPlanText() {
    return $(L.yourPersonalizedActionPlanText[0]);
  }

  /** TextView "Here's your simple, custom plan to impro" */
  get hereSYourSimpleText() {
    return $(L.hereSYourSimpleText[0]);
  }

  /** TextView "🚨Important: Do This First!" */
  get importantDoThisFirstText() {
    return $(L.importantDoThisFirstText[0]);
  }

  /** TextView "📞" */
  get text9() {
    return $(L.text9[0]);
  }

  /** TextView "Call Your Doctor Today" */
  get callYourDoctorTodayText() {
    return $(L.callYourDoctorTodayText[0]);
  }

  /** TextView "Schedule a consultation to discuss your " */
  get scheduleAConsultationToText() {
    return $(L.scheduleAConsultationToText[0]);
  }

  /** TextView "🎯 Your Goal: 1200 Happy Calories" */
  get yourGoal1200HappyText() {
    return $(L.yourGoal1200HappyText[0]);
  }

  /** TextView "Think quality over quantity! We want foo" */
  get thinkQualityOverQuantityText() {
    return $(L.thinkQualityOverQuantityText[0]);
  }

  /** TextView "✅" */
  get text10() {
    return $(L.text10[0]);
  }

  /** TextView "Eat More" */
  get eatMoreText() {
    return $(L.eatMoreText[0]);
  }

  /** TextView "Spinach, Salmon, Lentils" */
  get spinachSalmonLentilsText() {
    return $(L.spinachSalmonLentilsText[0]);
  }

  /** TextView "❌" */
  get text11() {
    return $(L.text11[0]);
  }

  /** TextView "Eat Less" */
  get eatLessText() {
    return $(L.eatLessText[0]);
  }

  /** TextView "Black Tea, White Rice, Soda" */
  get blackTeaWhiteRiceText() {
    return $(L.blackTeaWhiteRiceText[0]);
  }

  /** TextView "🕐" */
  get text12() {
    return $(L.text12[0]);
  }

  /** TextView "Finish dinner by 8 PM" */
  get finishDinnerBy8Text() {
    return $(L.finishDinnerBy8Text[0]);
  }

  /** TextView "Gives your body 14 hours to rest!" */
  get givesYourBody14Text() {
    return $(L.givesYourBody14Text[0]);
  }

  /** ViewGroup */
  get seeMyWeeklyMenuBtn() {
    return $(L.seeMyWeeklyMenuBtn[0]);
  }

  /** TextView "" */
  get text13() {
    return $(L.text13[0]);
  }

  /** TextView "See My Weekly Menu Plan" */
  get seeMyWeeklyMenuText() {
    return $(L.seeMyWeeklyMenuText[0]);
  }

  /** TextView "" */
  get text14() {
    return $(L.text14[0]);
  }

  /** TextView "🏃Your Movement Plan" */
  get yourMovementPlanText() {
    return $(L.yourMovementPlanText[0]);
  }

  /** TextView "Regular movement is one of the most powe" */
  get regularMovementIsOneText() {
    return $(L.regularMovementIsOneText[0]);
  }

  /** TextView "Monday" */
  get mondayText() {
    return $(L.mondayText[0]);
  }

  /** TextView "30 min brisk walking + 15 min light full" */
  get el30MinBriskWalkingText() {
    return $(L.el30MinBriskWalkingText[0]);
  }

  /** TextView "Tuesday" */
  get tuesdayText() {
    return $(L.tuesdayText[0]);
  }

  /** TextView "30 min low-impact cardio (cycling/ellipt" */
  get el30MinLowImpactText() {
    return $(L.el30MinLowImpactText[0]);
  }

  /** TextView "Wednesday" */
  get wednesdayText() {
    return $(L.wednesdayText[0]);
  }

  /** TextView "30 min brisk walking + 15 min light full" */
  get el30MinBriskWalkingText2() {
    return $(L.el30MinBriskWalkingText2[0]);
  }

  /** TextView "Thursday" */
  get thursdayText() {
    return $(L.thursdayText[0]);
  }

  /** TextView "30 min low-impact cardio (swimming/water" */
  get el30MinLowImpactText2() {
    return $(L.el30MinLowImpactText2[0]);
  }

  /** TextView "🌟What Will Happen Next?" */
  get whatWillHappenNextText() {
    return $(L.whatWillHappenNextText[0]);
  }

  /** TextView "In 1-3 months, you should feel:" */
  get in13MonthsText() {
    return $(L.in13MonthsText[0]);
  }

  /** TextView "⚡" */
  get text15() {
    return $(L.text15[0]);
  }

  /** TextView "More energy" */
  get moreEnergyText() {
    return $(L.moreEnergyText[0]);
  }

  /** TextView "😴" */
  get text16() {
    return $(L.text16[0]);
  }

  /** TextView "Better sleep" */
  get betterSleepText() {
    return $(L.betterSleepText[0]);
  }

  /** TextView "❤️" */
  get text17() {
    return $(L.text17[0]);
  }

  /** TextView "Stronger heart" */
  get strongerHeartText() {
    return $(L.strongerHeartText[0]);
  }

  /** TextView "Better sugar" */
  get betterSugarText() {
    return $(L.betterSugarText[0]);
  }

  /** TextView "We'll check your progress in your next b" */
  get weLlCheckYourText() {
    return $(L.weLlCheckYourText[0]);
  }

  /** TextView "Every small step counts towards your hea" */
  get everySmallStepCountsText() {
    return $(L.everySmallStepCountsText[0]);
  }

  /** TextView "" */
  get text18() {
    return $(L.text18[0]);
  }

  /** TextView "SAMPLE" */
  get sampleText() {
    return $(L.sampleText[0]);
  }

  /** TextView "💊Your Daily Health Helpers" */
  get yourDailyHealthHelpersText() {
    return $(L.yourDailyHealthHelpersText[0]);
  }

  /** TextView "Think of these like daily vitamins that " */
  get thinkOfTheseLikeText() {
    return $(L.thinkOfTheseLikeText[0]);
  }

  /** TextView "☀️Morning (After Breakfast)" */
  get morningAfterBreakfastText() {
    return $(L.morningAfterBreakfastText[0]);
  }

  /** TextView "SAMPLE" */
  get sampleText2() {
    return $(L.sampleText2[0]);
  }
}

export { MainScreen14 as MainScreen14Class, L as MainScreen14Locators };
export default new MainScreen14();
