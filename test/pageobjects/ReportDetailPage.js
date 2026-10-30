import BasePage, { S, re } from './BasePage.js';

// Captured as: MainScreen14-17 (a report opened from the Report tab: "Month 1 Report").
const SEL = {
  title: S.textMatches('Month \\d+ Report'),
  backBtn: S.desc('Go back'),
  downloadBtn: S.desc('Download report'),
  // Summary section
  atAGlance: S.text('Your Health at a Glance'),
  // Bio Markers section counters: "77, Total" / "57, Normal" / "10, Warning" / "10, Critical"
  counter: (label) => S.descMatches(`\\d+, ${label}`),
  // Diet Plan section
  dietTitle: S.textStarts('Your Daily Diet Plan'),
  dailyKcal: S.textMatches('\\d+ kcal today'),
  weeklyMenu: S.descContains('See My Weekly Menu Plan'),
  // RCA section
  rcaIntro: S.textStarts("We've identified"),
};

/** Section tabs along the top (horizontally scrollable). */
export const SECTIONS = ['Report Home', 'Bio Markers', 'Plan', 'Diet Plan', 'Bio Age', 'RCA', 'Full Report'];
/** Sub-tabs in the summary section. */
export const SUMMARY_TABS = ['Summary', 'Heart', 'Blood Sugar', 'Vitamins'];

class ReportDetailPage extends BasePage {
  get layoutSpec() { return 'ReportDetail'; }

  get anchors() {
    return [SEL.downloadBtn, SEL.title];
  }

  get title() { return $(SEL.title); }
  get downloadBtn() { return $(SEL.downloadBtn); }
  get weeklyMenuBtn() { return $(SEL.weeklyMenu); }

  async getTitle() {
    return this.textOf(SEL.title);
  }

  /** Open a section tab, swiping the tab strip if it's off-screen. */
  async openSection(name) {
    if (!SECTIONS.includes(name)) throw new Error(`Unknown section "${name}". Known: ${SECTIONS.join(', ')}`);
    await this.scrollToTop();
    // Any visible section tab marks the row to swipe
    const visible = [];
    for (const s of SECTIONS) if (await this.exists(S.desc(s))) visible.push(s);
    const el = visible.length ? await this.swipeRowTo(S.desc(name), S.desc(visible[0])) : await $(S.desc(name));
    await el.click();
  }

  async openSummaryTab(name) {
    await this.tap(S.desc(name), { scroll: true });
  }

  /** Health-at-a-glance card status: getHealthStatus('Heart') -> "Needs care" ("🫀, Heart, Needs care"). */
  async getHealthStatus(area) {
    const sel = S.descMatches(`.+, ${re(area)}, .+`);
    await this.scrollTo(sel);
    const parts = (await this.descOf(sel)).split(',').map((p) => p.trim());
    return parts[parts.indexOf(area) + 1];
  }

  /** Bio Markers counters: { total, normal, warning, critical } */
  async getMarkerCounts() {
    const out = {};
    for (const label of ['Total', 'Normal', 'Warning', 'Critical']) {
      const sel = SEL.counter(label);
      await this.scrollTo(sel);
      out[label.toLowerCase()] = Number((await this.descOf(sel)).split(',')[0]);
    }
    return out;
  }

  /**
   * One biomarker row, e.g. getBiomarker('Vitamin D3') ->
   * { name: 'Vitamin D3', value: 38.36, unit: 'ng/ml', range: '50-150' }
   */
  async getBiomarker(name) {
    const sel = S.descStarts(`${name}, `);
    await this.scrollTo(sel, { maxScrolls: 25 });
    const [n, value, unit, range] = (await this.descOf(sel)).split(',').map((p) => p.trim());
    return { name: n, value: Number(value), unit, range };
  }

  /** Biomarker rows currently on screen: [{ name, value, unit, range }] */
  async getVisibleBiomarkers() {
    const rows = await $$(S.descMatches('[^,]+, -?[\\d.]+, [^,]+, [^,]+(, .*)?'));
    const out = [];
    for (const r of rows) {
      const [name, value, unit, range] = (await r.getAttribute('content-desc')).split(',').map((p) => p.trim());
      out.push({ name, value: Number(value), unit, range });
    }
    return out;
  }

  /** Tap Download; if the app hands off to a PDF viewer / share sheet, come back. Returns where it went. */
  async downloadAndReturn() {
    await this.tap(SEL.downloadBtn);
    await driver.pause(3000);
    const pkg = await driver.getCurrentPackage().catch(() => '');
    if (pkg && pkg !== 'com.egenome.app') {
      await driver.back();
      await driver.pause(1000);
      if ((await driver.getCurrentPackage().catch(() => '')) !== 'com.egenome.app') await driver.activateApp('com.egenome.app');
    }
    return pkg;
  }

  /** Expand a biomarker row to see its details. */
  async openBiomarker(name) {
    await this.tap(S.descStarts(`${name}, `), { scroll: true });
  }

  /** Diet plan day chip: 'Sun' | 'Mon' | ... */
  async selectDietDay(day) {
    await this.tap(S.desc(day), { scroll: true });
  }

  async getDailyCalories() {
    await this.scrollTo(SEL.dailyKcal);
    return Number((await this.textOf(SEL.dailyKcal)).match(/\d+/)[0]);
  }

  async openWeeklyMenu() {
    await this.tap(SEL.weeklyMenu, { scroll: true });
  }

  /** RCA condition card, e.g. getRootCause('Mild Anemia') -> "Mild Anemia, Primary, Key markers: ..." */
  async getRootCause(condition) {
    const sel = S.descStarts(`${condition}, `);
    await this.scrollTo(sel);
    return this.descOf(sel);
  }

  async download() {
    await this.tap(SEL.downloadBtn);
  }

  async close() {
    await this.tap(SEL.backBtn);
  }
}

export default new ReportDetailPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
