// AUTO-GENERATED from locators/MainScreen17.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen17Class { async login(phone) { ... } }
// Screen: (no title) | activity: .MainActivity | updated: 2026-10-28T07:46:22.365Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.egenome.app:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.egenome.app:id/action_bar_root\"]"],
  goBackBtn: ["~Go back", "//android.view.ViewGroup[@content-desc=\"Go back\"]"],
  text: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  month1ReportText: ["android=new UiSelector().text(\"Month 1 Report\")", "//android.widget.TextView[@text=\"Month 1 Report\"]"],
  downloadReportBtn: ["~Download report", "//android.widget.Button[@content-desc=\"Download report\"]"],
  text2: ["android=new UiSelector().text(\"\")", "//android.widget.TextView[@text=\"\"]"],
  list: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView[1]"],
  dietPlanBtn: ["~Diet Plan", "//android.view.ViewGroup[@content-desc=\"Diet Plan\"]"],
  dietPlanText: ["android=new UiSelector().text(\"Diet Plan\")", "//android.widget.TextView[@text=\"Diet Plan\"]"],
  bioAgeBtn: ["~Bio Age", "//android.view.ViewGroup[@content-desc=\"Bio Age\"]"],
  bioAgeText: ["android=new UiSelector().text(\"Bio Age\")", "//android.widget.TextView[@text=\"Bio Age\"]"],
  rcaBtn: ["~RCA", "//android.view.ViewGroup[@content-desc=\"RCA\"]"],
  rcaText: ["android=new UiSelector().text(\"RCA\")", "//android.widget.TextView[@text=\"RCA\"]"],
  fullReportBtn: ["~Full Report", "//android.view.ViewGroup[@content-desc=\"Full Report\"]"],
  fullReportText: ["android=new UiSelector().text(\"Full Report\")", "//android.widget.TextView[@text=\"Full Report\"]"],
  list2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]"],
  list3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]"],
  el77TotalBtn: ["~77, Total", "//android.view.ViewGroup[@content-desc=\"77, Total\"]"],
  el77Text: ["android=new UiSelector().text(\"77\")", "//android.widget.TextView[@text=\"77\"]"],
  totalText: ["android=new UiSelector().text(\"Total\")", "//android.widget.TextView[@text=\"Total\"]"],
  el57NormalBtn: ["~57, Normal", "//android.view.ViewGroup[@content-desc=\"57, Normal\"]"],
  el57Text: ["android=new UiSelector().text(\"57\")", "//android.widget.TextView[@text=\"57\"]"],
  normalText: ["android=new UiSelector().text(\"Normal\")", "//android.widget.TextView[@text=\"Normal\"]"],
  el10WarningBtn: ["~10, Warning", "//android.view.ViewGroup[@content-desc=\"10, Warning\"]"],
  el10Text: ["(//android.widget.TextView[@text=\"10\"])[1]", "android=new UiSelector().text(\"10\")"],
  warningText: ["android=new UiSelector().text(\"Warning\")", "//android.widget.TextView[@text=\"Warning\"]"],
  el10CriticalBtn: ["~10, Critical", "//android.view.ViewGroup[@content-desc=\"10, Critical\"]"],
  el10Text2: ["(//android.widget.TextView[@text=\"10\"])[2]", "android=new UiSelector().text(\"10\")"],
  criticalText: ["android=new UiSelector().text(\"Critical\")", "//android.widget.TextView[@text=\"Critical\"]"],
  list4: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.FrameLayout[1]/androidx.viewpager.widget.ViewPager[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]"],
  vitaminsMineralsHormonesText: ["android=new UiSelector().text(\"Vitamins, Minerals & Hormones\")", "//android.widget.TextView[@text=\"Vitamins, Minerals & Hormones\"]"],
  vitaminB12617PgBtn: ["~Vitamin B12, 617, pg/ml, 750-900, ^", "//android.view.ViewGroup[@content-desc=\"Vitamin B12, 617, pg/ml, 750-900, ^\"]"],
  vitaminB12Text: ["android=new UiSelector().text(\"Vitamin B12\")", "//android.widget.TextView[@text=\"Vitamin B12\"]"],
  el617Text: ["android=new UiSelector().text(\"617\")", "//android.widget.TextView[@text=\"617\"]"],
  pgMlText: ["android=new UiSelector().text(\"pg/ml\")", "//android.widget.TextView[@text=\"pg/ml\"]"],
  el750900Text: ["android=new UiSelector().text(\"750-900\")", "//android.widget.TextView[@text=\"750-900\"]"],
  text3: ["(//android.widget.TextView[@text=\"^\"])[1]", "android=new UiSelector().text(\"^\")"],
  vitaminD33836Btn: ["~Vitamin D3, 38.36, ng/ml, 50-150, ^", "//android.view.ViewGroup[@content-desc=\"Vitamin D3, 38.36, ng/ml, 50-150, ^\"]"],
  vitaminD3Text: ["android=new UiSelector().text(\"Vitamin D3\")", "//android.widget.TextView[@text=\"Vitamin D3\"]"],
  el3836Text: ["android=new UiSelector().text(\"38.36\")", "//android.widget.TextView[@text=\"38.36\"]"],
  ngMlText: ["android=new UiSelector().text(\"ng/ml\")", "//android.widget.TextView[@text=\"ng/ml\"]"],
  el50150Text: ["android=new UiSelector().text(\"50-150\")", "//android.widget.TextView[@text=\"50-150\"]"],
  text4: ["(//android.widget.TextView[@text=\"^\"])[2]", "android=new UiSelector().text(\"^\")"],
  sodium142MmolLBtn: ["~Sodium, 142, mmol/l, 135-145, ^", "//android.view.ViewGroup[@content-desc=\"Sodium, 142, mmol/l, 135-145, ^\"]"],
  sodiumText: ["android=new UiSelector().text(\"Sodium\")", "//android.widget.TextView[@text=\"Sodium\"]"],
  el142Text: ["android=new UiSelector().text(\"142\")", "//android.widget.TextView[@text=\"142\"]"],
  mmolLText: ["(//android.widget.TextView[@text=\"mmol/l\"])[1]", "android=new UiSelector().text(\"mmol/l\")"],
  el135145Text: ["android=new UiSelector().text(\"135-145\")", "//android.widget.TextView[@text=\"135-145\"]"],
  calcium96MgBtn: ["~Calcium, 9.6, mg/dl, 8.5-10, ^", "//android.view.ViewGroup[@content-desc=\"Calcium, 9.6, mg/dl, 8.5-10, ^\"]"],
  calciumText: ["android=new UiSelector().text(\"Calcium\")", "//android.widget.TextView[@text=\"Calcium\"]"],
  el96Text: ["android=new UiSelector().text(\"9.6\")", "//android.widget.TextView[@text=\"9.6\"]"],
  mgDlText: ["(//android.widget.TextView[@text=\"mg/dl\"])[1]", "android=new UiSelector().text(\"mg/dl\")"],
  el8510Text: ["android=new UiSelector().text(\"8.5-10\")", "//android.widget.TextView[@text=\"8.5-10\"]"],
  potassium414MmolBtn: ["~Potassium, 4.14, mmol/l, 4-5.5, ^", "//android.view.ViewGroup[@content-desc=\"Potassium, 4.14, mmol/l, 4-5.5, ^\"]"],
  potassiumText: ["android=new UiSelector().text(\"Potassium\")", "//android.widget.TextView[@text=\"Potassium\"]"],
  el414Text: ["android=new UiSelector().text(\"4.14\")", "//android.widget.TextView[@text=\"4.14\"]"],
  mmolLText2: ["(//android.widget.TextView[@text=\"mmol/l\"])[2]", "android=new UiSelector().text(\"mmol/l\")"],
  el455Text: ["android=new UiSelector().text(\"4-5.5\")", "//android.widget.TextView[@text=\"4-5.5\"]"],
  magnesium2MgDlBtn: ["~Magnesium, 2, mg/dl, 2.2-2.6, ^", "//android.view.ViewGroup[@content-desc=\"Magnesium, 2, mg/dl, 2.2-2.6, ^\"]"],
  magnesiumText: ["android=new UiSelector().text(\"Magnesium\")", "//android.widget.TextView[@text=\"Magnesium\"]"],
  el2Text: ["android=new UiSelector().text(\"2\")", "//android.widget.TextView[@text=\"2\"]"],
  mgDlText2: ["(//android.widget.TextView[@text=\"mg/dl\"])[2]", "android=new UiSelector().text(\"mg/dl\")"],
  el2226Text: ["android=new UiSelector().text(\"2.2-2.6\")", "//android.widget.TextView[@text=\"2.2-2.6\"]"],
  fastingInsulin542Btn: ["~Fasting Insulin, 5.42, µIU/mL, <4.5, ^", "//android.view.ViewGroup[@content-desc=\"Fasting Insulin, 5.42, µIU/mL, <4.5, ^\"]"],
  fastingInsulinText: ["android=new UiSelector().text(\"Fasting Insulin\")", "//android.widget.TextView[@text=\"Fasting Insulin\"]"],
  el542Text: ["android=new UiSelector().text(\"5.42\")", "//android.widget.TextView[@text=\"5.42\"]"],
};

class MainScreen17 extends BasePage {
  constructor() {
    super(L, ["el77TotalBtn","el57NormalBtn","el10WarningBtn"]);
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

  /** ViewGroup */
  get fullReportBtn() {
    return $(L.fullReportBtn[0]);
  }

  /** TextView "Full Report" */
  get fullReportText() {
    return $(L.fullReportText[0]);
  }

  /** ViewPager */
  get list2() {
    return $(L.list2[0]);
  }

  /** RecyclerView */
  get list3() {
    return $(L.list3[0]);
  }

  /** ViewGroup */
  get el77TotalBtn() {
    return $(L.el77TotalBtn[0]);
  }

  /** TextView "77" */
  get el77Text() {
    return $(L.el77Text[0]);
  }

  /** TextView "Total" */
  get totalText() {
    return $(L.totalText[0]);
  }

  /** ViewGroup */
  get el57NormalBtn() {
    return $(L.el57NormalBtn[0]);
  }

  /** TextView "57" */
  get el57Text() {
    return $(L.el57Text[0]);
  }

  /** TextView "Normal" */
  get normalText() {
    return $(L.normalText[0]);
  }

  /** ViewGroup */
  get el10WarningBtn() {
    return $(L.el10WarningBtn[0]);
  }

  /** TextView "10" */
  get el10Text() {
    return $(L.el10Text[0]);
  }

  /** TextView "Warning" */
  get warningText() {
    return $(L.warningText[0]);
  }

  /** ViewGroup */
  get el10CriticalBtn() {
    return $(L.el10CriticalBtn[0]);
  }

  /** TextView "10" */
  get el10Text2() {
    return $(L.el10Text2[0]);
  }

  /** TextView "Critical" */
  get criticalText() {
    return $(L.criticalText[0]);
  }

  /** ScrollView */
  get list4() {
    return $(L.list4[0]);
  }

  /** TextView "Vitamins, Minerals & Hormones" */
  get vitaminsMineralsHormonesText() {
    return $(L.vitaminsMineralsHormonesText[0]);
  }

  /** ViewGroup */
  get vitaminB12617PgBtn() {
    return $(L.vitaminB12617PgBtn[0]);
  }

  /** TextView "Vitamin B12" */
  get vitaminB12Text() {
    return $(L.vitaminB12Text[0]);
  }

  /** TextView "617" */
  get el617Text() {
    return $(L.el617Text[0]);
  }

  /** TextView "pg/ml" */
  get pgMlText() {
    return $(L.pgMlText[0]);
  }

  /** TextView "750-900" */
  get el750900Text() {
    return $(L.el750900Text[0]);
  }

  /** TextView "^" */
  get text3() {
    return $(L.text3[0]);
  }

  /** ViewGroup */
  get vitaminD33836Btn() {
    return $(L.vitaminD33836Btn[0]);
  }

  /** TextView "Vitamin D3" */
  get vitaminD3Text() {
    return $(L.vitaminD3Text[0]);
  }

  /** TextView "38.36" */
  get el3836Text() {
    return $(L.el3836Text[0]);
  }

  /** TextView "ng/ml" */
  get ngMlText() {
    return $(L.ngMlText[0]);
  }

  /** TextView "50-150" */
  get el50150Text() {
    return $(L.el50150Text[0]);
  }

  /** TextView "^" */
  get text4() {
    return $(L.text4[0]);
  }

  /** ViewGroup */
  get sodium142MmolLBtn() {
    return $(L.sodium142MmolLBtn[0]);
  }

  /** TextView "Sodium" */
  get sodiumText() {
    return $(L.sodiumText[0]);
  }

  /** TextView "142" */
  get el142Text() {
    return $(L.el142Text[0]);
  }

  /** TextView "mmol/l" */
  get mmolLText() {
    return $(L.mmolLText[0]);
  }

  /** TextView "135-145" */
  get el135145Text() {
    return $(L.el135145Text[0]);
  }

  /** ViewGroup */
  get calcium96MgBtn() {
    return $(L.calcium96MgBtn[0]);
  }

  /** TextView "Calcium" */
  get calciumText() {
    return $(L.calciumText[0]);
  }

  /** TextView "9.6" */
  get el96Text() {
    return $(L.el96Text[0]);
  }

  /** TextView "mg/dl" */
  get mgDlText() {
    return $(L.mgDlText[0]);
  }

  /** TextView "8.5-10" */
  get el8510Text() {
    return $(L.el8510Text[0]);
  }

  /** ViewGroup */
  get potassium414MmolBtn() {
    return $(L.potassium414MmolBtn[0]);
  }

  /** TextView "Potassium" */
  get potassiumText() {
    return $(L.potassiumText[0]);
  }

  /** TextView "4.14" */
  get el414Text() {
    return $(L.el414Text[0]);
  }

  /** TextView "mmol/l" */
  get mmolLText2() {
    return $(L.mmolLText2[0]);
  }

  /** TextView "4-5.5" */
  get el455Text() {
    return $(L.el455Text[0]);
  }

  /** ViewGroup */
  get magnesium2MgDlBtn() {
    return $(L.magnesium2MgDlBtn[0]);
  }

  /** TextView "Magnesium" */
  get magnesiumText() {
    return $(L.magnesiumText[0]);
  }

  /** TextView "2" */
  get el2Text() {
    return $(L.el2Text[0]);
  }

  /** TextView "mg/dl" */
  get mgDlText2() {
    return $(L.mgDlText2[0]);
  }

  /** TextView "2.2-2.6" */
  get el2226Text() {
    return $(L.el2226Text[0]);
  }

  /** ViewGroup */
  get fastingInsulin542Btn() {
    return $(L.fastingInsulin542Btn[0]);
  }

  /** TextView "Fasting Insulin" */
  get fastingInsulinText() {
    return $(L.fastingInsulinText[0]);
  }

  /** TextView "5.42" */
  get el542Text() {
    return $(L.el542Text[0]);
  }
}

export { MainScreen17 as MainScreen17Class, L as MainScreen17Locators };
export default new MainScreen17();
