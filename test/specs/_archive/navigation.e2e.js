// Smoke test for the page models: log in (if needed) and visit the main screens.
// Run: npm run wdio            (stop any separately started Appium first)
// Test user comes from .env (see test/data/users.js)
import {
  LoginPage, HomePage, BottomNav, ReportsPage, ReportDetailPage, SettingsPage, MENU,
  ProfilePage, AddressesPage, DependentsPage, TransactionHistoryPage, MonthlyProgressPage, REPORTS,
} from '../pageobjects/index.js';

describe('eGenome navigation smoke', () => {
  before(async () => {
    await LoginPage.ensureLoggedIn();
  });

  it('shows Home with the daily streak', async () => {
    await HomePage.open();
    expect(await HomePage.getStreak()).toBeGreaterThanOrEqual(0);
  });

  it('opens Monthly Progress from the calendar icon', async () => {
    await HomePage.openMonthlyProgress();
    await MonthlyProgressPage.waitForOpen();
    expect(await MonthlyProgressPage.getMonth()).toMatch(/^[A-Z][a-z]+ \d{4}$/);
    await MonthlyProgressPage.close();
    await HomePage.waitForOpen();
  });

  it('lists reports and opens one', async () => {
    await ReportsPage.open();
    expect(await ReportsPage.getReportCount()).toBeGreaterThan(0);
    await ReportsPage.openReport(REPORTS.cvd);
    await ReportDetailPage.waitForOpen();
    await ReportDetailPage.openSection('Diet Plan');
    expect(await ReportDetailPage.getDailyCalories()).toBeGreaterThan(0);
    await ReportDetailPage.close();
    await ReportsPage.waitForOpen();
  });

  it('opens each Settings sub-screen', async () => {
    await SettingsPage.open();

    await SettingsPage.openProfile();
    await ProfilePage.waitForOpen();
    expect(await ProfilePage.getField('PHONE')).toMatch(/^\+91\d{10}$/);
    await ProfilePage.close();

    await SettingsPage.openMenu(MENU.MANAGE_ADDRESSES);
    await AddressesPage.waitForOpen();
    await AddressesPage.close();

    await SettingsPage.openMenu(MENU.MANAGE_DEPENDENTS);
    await DependentsPage.waitForOpen();
    await DependentsPage.close();

    await SettingsPage.openMenu(MENU.TRANSACTION_HISTORY);
    await TransactionHistoryPage.waitForOpen();
    await TransactionHistoryPage.goBack();

    await SettingsPage.waitForOpen();
  });

  after(async () => {
    await BottomNav.openHome().catch(() => {});
  });
});
