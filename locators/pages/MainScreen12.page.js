// AUTO-GENERATED from locators/MainScreen12.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen12Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:50:16.749Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  yourPersonalizedReportsText: ["android=new UiSelector().text(\"Your Personalized Reports\")", "//android.widget.TextView[@text=\"Your Personalized Reports\"]"],
  el2ReportsFoundText: ["android=new UiSelector().text(\"2 reports found\")", "//android.widget.TextView[@text=\"2 reports found\"]"],
  myReportsBtn: ["~My Reports", "//android.view.ViewGroup[@content-desc=\"My Reports\"]"],
  myReportsText: ["android=new UiSelector().text(\"My Reports\")", "//android.widget.TextView[@text=\"My Reports\"]"],
  sampleReportsBtn: ["~Sample Reports", "//android.view.ViewGroup[@content-desc=\"Sample Reports\"]"],
  sampleReportsText: ["(//android.widget.TextView[@text=\"Sample Reports\"])[1]", "android=new UiSelector().text(\"Sample Reports\")"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]"],
  month2Text: ["android=new UiSelector().text(\"MONTH 2\")", "//android.widget.TextView[@text=\"MONTH 2\"]"],
  diabetesRiskAssessmentHealthBtn: ["~Diabetes Risk Assessment Health Report. Comprehensive evaluation of Glucose control, insulin sensitivity, and metabolic risk insights.", "//android.widget.Button[@content-desc=\"Diabetes Risk Assessment Health Report. Comprehensive evaluation of Glucose control, insulin sensitivity, and metabolic risk insights.\"]"],
  diabetesRiskAssessmentHealthText: ["android=new UiSelector().text(\"Diabetes Risk Assessment Health Report\")", "//android.widget.TextView[@text=\"Diabetes Risk Assessment Health Report\"]"],
  text: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  comprehensiveEvaluationOfGlucoseText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[2]/android.widget.TextView[3]"],
  paymentPendingText: ["android=new UiSelector().text(\"PAYMENT PENDING\")", "//android.widget.TextView[@text=\"PAYMENT PENDING\"]"],
  text2: ["(//android.widget.TextView[@text=\"·\"])[1]", "android=new UiSelector().text(\"·\")"],
  generated9MonthsAgoText: ["android=new UiSelector().text(\"GENERATED 9 MONTHS AGO\")", "//android.widget.TextView[@text=\"GENERATED 9 MONTHS AGO\"]"],
  completePaymentBtn: ["~Complete Payment, ", "//android.view.ViewGroup[@content-desc=\"Complete Payment, \"]"],
  completePaymentText: ["android=new UiSelector().text(\"Complete Payment\")", "//android.widget.TextView[@text=\"Complete Payment\"]"],
  text3: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  month1Text: ["android=new UiSelector().text(\"MONTH 1\")", "//android.widget.TextView[@text=\"MONTH 1\"]"],
  cvdAssessmentHealthReportBtn: ["~CVD Assessment Health Report. Comprehensive cardiovascular health evaluation with biological age assessment (Month 1)", "//android.widget.Button[@content-desc=\"CVD Assessment Health Report. Comprehensive cardiovascular health evaluation with biological age assessment (Month 1)\"]"],
  cvdAssessmentHealthReportText: ["android=new UiSelector().text(\"CVD Assessment Health Report\")", "//android.widget.TextView[@text=\"CVD Assessment Health Report\"]"],
  text4: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  comprehensiveCardiovascularHealthEvaluationText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[1]/android.widget.TextView[3]"],
  text5: ["(//android.widget.TextView[@text=\"\"])[1]", "android=new UiSelector().text(\"\")"],
  completedText: ["android=new UiSelector().text(\"COMPLETED\")", "//android.widget.TextView[@text=\"COMPLETED\"]"],
  text6: ["(//android.widget.TextView[@text=\"·\"])[2]", "android=new UiSelector().text(\"·\")"],
  generatedAbout1YearText: ["android=new UiSelector().text(\"GENERATED ABOUT 1 YEAR AGO\")", "//android.widget.TextView[@text=\"GENERATED ABOUT 1 YEAR AGO\"]"],
  homeBtn: ["~Home", "//android.view.View[@content-desc=\"Home\"]"],
  homeText: ["android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@text=\"Home\"]"],
  reportBtn: ["~Report", "//android.view.View[@content-desc=\"Report\"]"],
  reportText: ["android=new UiSelector().text(\"Report\")", "//android.widget.TextView[@text=\"Report\"]"],
  settingsBtn: ["~Settings", "//android.view.View[@content-desc=\"Settings\"]"],
  settingsText: ["android=new UiSelector().text(\"Settings\")", "//android.widget.TextView[@text=\"Settings\"]"],
  el7SampleReportsAvailableText: ["android=new UiSelector().text(\"7 sample reports available\")", "//android.widget.TextView[@text=\"7 sample reports available\"]"],
  sampleReportsText2: ["(//android.widget.TextView[@text=\"Sample Reports\"])[2]", "android=new UiSelector().text(\"Sample Reports\")"],
  text7: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  previewSampleHealthReportsText: ["android=new UiSelector().text(\"Preview sample health reports\")", "//android.widget.TextView[@text=\"Preview sample health reports\"]"],
  cvdAssessmentHealthReportBtn2: ["~CVD Assessment Health Report. Comprehensive cardiovascular health evaluation with biological age assessment.", "//android.widget.Button[@content-desc=\"CVD Assessment Health Report. Comprehensive cardiovascular health evaluation with biological age assessment.\"]"],
  sampleText: ["(//android.widget.TextView[@text=\"Sample\"])[1]", "android=new UiSelector().text(\"Sample\")"],
  sampleText2: ["(//android.widget.TextView[@text=\"Sample\"])[2]", "android=new UiSelector().text(\"Sample\")"],
  text8: ["(//android.widget.TextView[@text=\"\"])[2]", "android=new UiSelector().text(\"\")"],
  yourSleepReadFromBtn: ["~Your Sleep, Read from Your Blood. Your monthly sleep report, read entirely from your blood markers — every insight backed by peer-reviewed research, no wearable needed.", "//android.widget.Button[@content-desc=\"Your Sleep, Read from Your Blood. Your monthly sleep report, read entirely from your blood markers — every insight backed by peer-reviewed research, no wearable needed.\"]"],
  yourSleepReadFromText: ["android=new UiSelector().text(\"Your Sleep, Read from Your Blood\")", "//android.widget.TextView[@text=\"Your Sleep, Read from Your Blood\"]"],
  yourMonthlySleepReportText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[2]/android.widget.TextView[3]"],
  month7Text: ["android=new UiSelector().text(\"MONTH 7\")", "//android.widget.TextView[@text=\"MONTH 7\"]"],
  beforeVsAfterYourBtn: ["~Before vs After: Your Blood Markers Compared. Your health progress since the first blood test — what improved and what to focus on.", "//android.widget.Button[@content-desc=\"Before vs After: Your Blood Markers Compared. Your health progress since the first blood test — what improved and what to focus on.\"]"],
  beforeVsAfterYourText: ["android=new UiSelector().text(\"Before vs After: Your Blood Markers Compared\")", "//android.widget.TextView[@text=\"Before vs After: Your Blood Markers Compared\"]"],
  yourHealthProgressSinceText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[3]/android.widget.TextView[3]"],
  month3Text: ["android=new UiSelector().text(\"MONTH 3\")", "//android.widget.TextView[@text=\"MONTH 3\"]"],
  liverFunctionRiskAssessmentBtn: ["~Liver Function & Risk Assessment Health Report. Comprehensive evaluation of Liver performance, inflammation, and fibrosis risk evaluation.", "//android.widget.Button[@content-desc=\"Liver Function & Risk Assessment Health Report. Comprehensive evaluation of Liver performance, inflammation, and fibrosis risk evaluation.\"]"],
  liverFunctionRiskAssessmentText: ["android=new UiSelector().text(\"Liver Function & Risk Assessment Health Report\")", "//android.widget.TextView[@text=\"Liver Function & Risk Assessment Health Report\"]"],
  comprehensiveEvaluationOfLiverText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[2]/android.widget.TextView[3]"],
  month4Text: ["android=new UiSelector().text(\"MONTH 4\")", "//android.widget.TextView[@text=\"MONTH 4\"]"],
  kidneyFunctionRiskAssessmentBtn: ["~Kidney Function & Risk Assessment Health Report. Comprehensive evaluation of kidney filtration, biomarkers, and risk factors with actionable protection steps.", "//android.widget.Button[@content-desc=\"Kidney Function & Risk Assessment Health Report. Comprehensive evaluation of kidney filtration, biomarkers, and risk factors with actionable protection steps.\"]"],
  kidneyFunctionRiskAssessmentText: ["android=new UiSelector().text(\"Kidney Function & Risk Assessment Health Report\")", "//android.widget.TextView[@text=\"Kidney Function & Risk Assessment Health Report\"]"],
  comprehensiveEvaluationOfKidneyText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[2]/android.widget.TextView[3]"],
  month5Text: ["android=new UiSelector().text(\"MONTH 5\")", "//android.widget.TextView[@text=\"MONTH 5\"]"],
  globalHealthPercentilesComprehensiveBtn: ["~Global Health Percentiles. Comprehensive multi-domain health percentile evaluation across kidney, heart, diabetes, and liver.", "//android.widget.Button[@content-desc=\"Global Health Percentiles. Comprehensive multi-domain health percentile evaluation across kidney, heart, diabetes, and liver.\"]"],
  globalHealthPercentilesText: ["android=new UiSelector().text(\"Global Health Percentiles\")", "//android.widget.TextView[@text=\"Global Health Percentiles\"]"],
  comprehensiveMultiDomainHealthText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.widget.Button[3]/android.widget.TextView[3]"],
  month6Text: ["android=new UiSelector().text(\"MONTH 6\")", "//android.widget.TextView[@text=\"MONTH 6\"]"],
};

class MainScreen12 extends BasePage {
  constructor() {
    super(L, ["myReportsBtn","sampleReportsBtn","diabetesRiskAssessmentHealthBtn"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** TextView "Your Personalized Reports" */
  get yourPersonalizedReportsText() {
    return $(L.yourPersonalizedReportsText[0]);
  }

  /** TextView "2 reports found" */
  get el2ReportsFoundText() {
    return $(L.el2ReportsFoundText[0]);
  }

  /** ViewGroup */
  get myReportsBtn() {
    return $(L.myReportsBtn[0]);
  }

  /** TextView "My Reports" */
  get myReportsText() {
    return $(L.myReportsText[0]);
  }

  /** ViewGroup */
  get sampleReportsBtn() {
    return $(L.sampleReportsBtn[0]);
  }

  /** TextView "Sample Reports" */
  get sampleReportsText() {
    return $(L.sampleReportsText[0]);
  }

  /** ScrollView */
  get list() {
    return $(L.list[0]);
  }

  /** TextView "MONTH 2" */
  get month2Text() {
    return $(L.month2Text[0]);
  }

  /** Button */
  get diabetesRiskAssessmentHealthBtn() {
    return $(L.diabetesRiskAssessmentHealthBtn[0]);
  }

  /** TextView "Diabetes Risk Assessment Health Report" */
  get diabetesRiskAssessmentHealthText() {
    return $(L.diabetesRiskAssessmentHealthText[0]);
  }

  /** TextView "" */
  get text() {
    return $(L.text[0]);
  }

  /** TextView "Comprehensive evaluation of Glucose cont" */
  get comprehensiveEvaluationOfGlucoseText() {
    return $(L.comprehensiveEvaluationOfGlucoseText[0]);
  }

  /** TextView "PAYMENT PENDING" */
  get paymentPendingText() {
    return $(L.paymentPendingText[0]);
  }

  /** TextView "·" */
  get text2() {
    return $(L.text2[0]);
  }

  /** TextView "GENERATED 9 MONTHS AGO" */
  get generated9MonthsAgoText() {
    return $(L.generated9MonthsAgoText[0]);
  }

  /** ViewGroup */
  get completePaymentBtn() {
    return $(L.completePaymentBtn[0]);
  }

  /** TextView "Complete Payment" */
  get completePaymentText() {
    return $(L.completePaymentText[0]);
  }

  /** TextView "" */
  get text3() {
    return $(L.text3[0]);
  }

  /** TextView "MONTH 1" */
  get month1Text() {
    return $(L.month1Text[0]);
  }

  /** Button */
  get cvdAssessmentHealthReportBtn() {
    return $(L.cvdAssessmentHealthReportBtn[0]);
  }

  /** TextView "CVD Assessment Health Report" */
  get cvdAssessmentHealthReportText() {
    return $(L.cvdAssessmentHealthReportText[0]);
  }

  /** TextView "" */
  get text4() {
    return $(L.text4[0]);
  }

  /** TextView "Comprehensive cardiovascular health eval" */
  get comprehensiveCardiovascularHealthEvaluationText() {
    return $(L.comprehensiveCardiovascularHealthEvaluationText[0]);
  }

  /** TextView "" */
  get text5() {
    return $(L.text5[0]);
  }

  /** TextView "COMPLETED" */
  get completedText() {
    return $(L.completedText[0]);
  }

  /** TextView "·" */
  get text6() {
    return $(L.text6[0]);
  }

  /** TextView "GENERATED ABOUT 1 YEAR AGO" */
  get generatedAbout1YearText() {
    return $(L.generatedAbout1YearText[0]);
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

  /** TextView "7 sample reports available" */
  get el7SampleReportsAvailableText() {
    return $(L.el7SampleReportsAvailableText[0]);
  }

  /** TextView "Sample Reports" */
  get sampleReportsText2() {
    return $(L.sampleReportsText2[0]);
  }

  /** TextView "" */
  get text7() {
    return $(L.text7[0]);
  }

  /** TextView "Preview sample health reports" */
  get previewSampleHealthReportsText() {
    return $(L.previewSampleHealthReportsText[0]);
  }

  /** Button */
  get cvdAssessmentHealthReportBtn2() {
    return $(L.cvdAssessmentHealthReportBtn2[0]);
  }

  /** TextView "Sample" */
  get sampleText() {
    return $(L.sampleText[0]);
  }

  /** TextView "Sample" */
  get sampleText2() {
    return $(L.sampleText2[0]);
  }

  /** TextView "" */
  get text8() {
    return $(L.text8[0]);
  }

  /** Button */
  get yourSleepReadFromBtn() {
    return $(L.yourSleepReadFromBtn[0]);
  }

  /** TextView "Your Sleep, Read from Your Blood" */
  get yourSleepReadFromText() {
    return $(L.yourSleepReadFromText[0]);
  }

  /** TextView "Your monthly sleep report, read entirely" */
  get yourMonthlySleepReportText() {
    return $(L.yourMonthlySleepReportText[0]);
  }

  /** TextView "MONTH 7" */
  get month7Text() {
    return $(L.month7Text[0]);
  }

  /** Button */
  get beforeVsAfterYourBtn() {
    return $(L.beforeVsAfterYourBtn[0]);
  }

  /** TextView "Before vs After: Your Blood Markers Comp" */
  get beforeVsAfterYourText() {
    return $(L.beforeVsAfterYourText[0]);
  }

  /** TextView "Your health progress since the first blo" */
  get yourHealthProgressSinceText() {
    return $(L.yourHealthProgressSinceText[0]);
  }

  /** TextView "MONTH 3" */
  get month3Text() {
    return $(L.month3Text[0]);
  }

  /** Button */
  get liverFunctionRiskAssessmentBtn() {
    return $(L.liverFunctionRiskAssessmentBtn[0]);
  }

  /** TextView "Liver Function & Risk Assessment Health " */
  get liverFunctionRiskAssessmentText() {
    return $(L.liverFunctionRiskAssessmentText[0]);
  }

  /** TextView "Comprehensive evaluation of Liver perfor" */
  get comprehensiveEvaluationOfLiverText() {
    return $(L.comprehensiveEvaluationOfLiverText[0]);
  }

  /** TextView "MONTH 4" */
  get month4Text() {
    return $(L.month4Text[0]);
  }

  /** Button */
  get kidneyFunctionRiskAssessmentBtn() {
    return $(L.kidneyFunctionRiskAssessmentBtn[0]);
  }

  /** TextView "Kidney Function & Risk Assessment Health" */
  get kidneyFunctionRiskAssessmentText() {
    return $(L.kidneyFunctionRiskAssessmentText[0]);
  }

  /** TextView "Comprehensive evaluation of kidney filtr" */
  get comprehensiveEvaluationOfKidneyText() {
    return $(L.comprehensiveEvaluationOfKidneyText[0]);
  }

  /** TextView "MONTH 5" */
  get month5Text() {
    return $(L.month5Text[0]);
  }

  /** Button */
  get globalHealthPercentilesComprehensiveBtn() {
    return $(L.globalHealthPercentilesComprehensiveBtn[0]);
  }

  /** TextView "Global Health Percentiles" */
  get globalHealthPercentilesText() {
    return $(L.globalHealthPercentilesText[0]);
  }

  /** TextView "Comprehensive multi-domain health percen" */
  get comprehensiveMultiDomainHealthText() {
    return $(L.comprehensiveMultiDomainHealthText[0]);
  }

  /** TextView "MONTH 6" */
  get month6Text() {
    return $(L.month6Text[0]);
  }
}

export { MainScreen12 as MainScreen12Class, L as MainScreen12Locators };
export default new MainScreen12();
