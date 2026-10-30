import BasePage, { S } from './BasePage.js';
import BottomNav from './components/BottomNav.js';

// Captured as: MainScreen12 (Report tab)
const SEL = {
  title: S.text('Your Personalized Reports'),
  reportsFound: S.textMatches('\\d+ reports? found'),
  myReportsTab: S.desc('My Reports'),
  sampleReportsTab: S.desc('Sample Reports'),
  samplesAvailable: S.textMatches('\\d+ sample reports? available.*'),
  paymentPending: S.text('PAYMENT PENDING'),
  completed: S.text('COMPLETED'),
  completePaymentBtn: S.descStarts('Complete Payment'),
  reportCards: 'android=new UiSelector().className("android.widget.Button").descriptionContains("Report")',
};

/** Report titles seen in the capture (card content-desc starts with the title). */
export const REPORTS = {
  diabetes: 'Diabetes Risk Assessment Health Report',
  cvd: 'CVD Assessment Health Report',
};
export const SAMPLE_REPORTS = {
  cvd: 'CVD Assessment Health Report',
  sleep: 'Your Sleep, Read from Your Blood',
  beforeAfter: 'Before vs After: Your Blood Markers Compared',
  liver: 'Liver Function & Risk Assessment Health Report',
  kidney: 'Kidney Function & Risk Assessment Health Report',
  percentiles: 'Global Health Percentiles',
};

class ReportsPage extends BasePage {
  get layoutSpec() { return 'Reports'; }

  get anchors() {
    return [SEL.title, SEL.myReportsTab];
  }

  get nav() { return BottomNav; }
  get myReportsTab() { return $(SEL.myReportsTab); }
  get sampleReportsTab() { return $(SEL.sampleReportsTab); }
  get reportsFoundText() { return $(SEL.reportsFound); }
  get completePaymentBtn() { return $(SEL.completePaymentBtn); }

  /** Report card by title (content-desc = "<title>. <description>"). */
  reportCardSelector(title) {
    return S.descStarts(`${title}.`);
  }

  reportCard(title) {
    return $(this.reportCardSelector(title));
  }

  async open() {
    await BottomNav.openReports();
    return this.waitForOpen();
  }

  /** "2 reports found" -> 2 */
  async getReportCount() {
    await this.scrollTo(SEL.reportsFound, { direction: 'up' });
    return Number((await this.textOf(SEL.reportsFound)).match(/\d+/)[0]);
  }

  /**
   * Titles of the user's own report cards (cards that carry a status such as COMPLETED or
   * PAYMENT PENDING - sample reports have none), collected while scrolling down the tab.
   */
  async getMyReportTitles(maxScrolls = 8) {
    await this.scrollToTop();
    const seen = new Set();
    const statusCard = '//android.widget.Button[.//*[@text="COMPLETED" or @text="PAYMENT PENDING" or @text="PROCESSING" or @text="IN PROGRESS"]]';
    for (let i = 0; i <= maxScrolls; i++) {
      const before = seen.size;
      for (const card of await $$(statusCard)) {
        const desc = await card.getAttribute('content-desc');
        if (desc) seen.add(desc.split('.')[0]);
      }
      if (i > 0 && seen.size === before) break;
      const { width, height } = await driver.getWindowSize();
      const more = await driver.execute('mobile: scrollGesture', {
        left: Math.round(width * 0.1), top: Math.round(height * 0.25), width: Math.round(width * 0.8), height: Math.round(height * 0.5), direction: 'down', percent: 0.7,
      });
      if (!more) break;
    }
    await this.scrollToTop();
    return [...seen];
  }

  async showMyReports() {
    await this.tap(SEL.myReportsTab, { scroll: true });
  }

  async showSampleReports() {
    await this.tap(SEL.sampleReportsTab, { scroll: true });
  }

  async hasReport(title) {
    try {
      await this.scrollTo(this.reportCardSelector(title));
      return true;
    } catch {
      return false;
    }
  }

  async openReport(title) {
    await this.tap(this.reportCardSelector(title), { scroll: true });
  }

  async openSampleReport(title) {
    await this.showSampleReports();
    await this.openReport(title);
  }

  /** Status text inside a report card: "PAYMENT PENDING" | "COMPLETED" | null */
  async getReportStatus(title) {
    await this.scrollTo(this.reportCardSelector(title));
    const card = `//*[starts-with(@content-desc, ${JSON.stringify(title + '.')})]`;
    for (const status of ['PAYMENT PENDING', 'COMPLETED', 'PROCESSING', 'IN PROGRESS']) {
      if (await this.exists(`${card}//*[@text="${status}"]`)) return status;
    }
    return null;
  }

  async tapCompletePayment() {
    await this.tap(SEL.completePaymentBtn, { scroll: true });
  }
}

export default new ReportsPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
