// REGRESSION · Reports - all P0/P1 flows. Read-only.
import { LoginPage, ReportsPage, ReportDetailPage, PremiumPage, SECTIONS } from '../../pageobjects/index.js';
import { getUser, accountData } from '../../data/users.js';
import { appInForeground } from '../../support/app.js';

describe('Reports', () => {
  before(async () => {
    await LoginPage.ensureLoggedIn(getUser());
  });

  it('RPT-01 [P0] Report tab shows the expected layout and at least one report', async () => {
    await ReportsPage.open();
    await ReportsPage.verifyLayout();
    expect(await ReportsPage.getReportCount()).toBeGreaterThan(0);
  });

  it('RPT-02 [P0] the "N reports found" count matches the report cards', async () => {
    const count = await ReportsPage.getReportCount();
    const titles = await ReportsPage.getMyReportTitles();
    expect(titles.length).toBe(count);
  });

  it('RPT-03 [P1] a payment-pending report offers Complete Payment and stays locked', async function () {
    if (!(await ReportsPage.hasReport(accountData.pendingReport))) this.skip(); // account has no pending report
    expect(await ReportsPage.getReportStatus(accountData.pendingReport)).toBe('PAYMENT PENDING');
    await expect(ReportsPage.completePaymentBtn).toBeExisting();
    await ReportsPage.openReport(accountData.pendingReport);
    const fullReportOpened = (await ReportDetailPage.isOpen(5000)) && (await ReportDetailPage.downloadBtn.isExisting());
    expect(fullReportOpened).toBe(false);
    if (await PremiumPage.isOpen(1000)) await PremiumPage.close();
    else if (!(await ReportsPage.isOpen(1000))) await ReportsPage.goBack();
    await ReportsPage.open();
  });

  it('RPT-04 [P0] a completed report opens with its summary', async () => {
    expect(await ReportsPage.getReportStatus(accountData.completedReport)).toBe('COMPLETED');
    await ReportsPage.openReport(accountData.completedReport);
    await ReportDetailPage.waitForOpen();
    await ReportDetailPage.verifyLayout();
    expect(await ReportDetailPage.getTitle()).toMatch(/^Month \d+ Report$/);
  });

  it('RPT-05 [P1] every section tab of the report opens', async () => {
    for (const section of SECTIONS) {
      await ReportDetailPage.openSection(section);
      await expect(ReportDetailPage.downloadBtn).toBeExisting();
    }
  });

  it('RPT-06 [P1] the diet plan shows a calorie target for each day', async () => {
    await ReportDetailPage.openSection('Diet Plan');
    for (const day of ['Sun', 'Mon', 'Tue']) {
      await ReportDetailPage.selectDietDay(day);
      expect(await ReportDetailPage.getDailyCalories()).toBeGreaterThan(0);
    }
  });

  it('RPT-07 [P1] biomarker counters add up (Total = Normal + Warning + Critical)', async function () {
    let counts = null;
    for (const section of ['Bio Markers', 'Full Report']) {
      await ReportDetailPage.openSection(section);
      try { counts = await ReportDetailPage.getMarkerCounts(); break; } catch { /* not in this section */ }
    }
    if (!counts) this.skip(); // counters not shown in this report
    expect(counts.total).toBe(counts.normal + counts.warning + counts.critical);
    expect(counts.total).toBeGreaterThan(0);
  });

  it('RPT-08 [P1] biomarker rows show a value, unit and reference range', async function () {
    const rows = await ReportDetailPage.getVisibleBiomarkers();
    if (!rows.length) this.skip(); // no biomarker rows in view
    for (const r of rows) {
      expect(Number.isFinite(r.value)).toBe(true);
      expect(r.unit).toBeTruthy();
      expect(r.range).toMatch(/\d/);
    }
  });

  it('RPT-09 [P1] Download report works and returns to the report', async () => {
    await ReportDetailPage.scrollToTop();
    await ReportDetailPage.downloadAndReturn();
    expect(await appInForeground()).toBe(true);
    await ReportDetailPage.waitForOpen(10000);
  });

  after(async () => {
    if (await ReportDetailPage.isOpen(1000)) await ReportDetailPage.close();
  });
});
