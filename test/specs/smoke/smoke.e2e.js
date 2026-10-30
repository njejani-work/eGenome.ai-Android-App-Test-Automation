// SMOKE (~5 min, every build): login, Home, Reports + one report, Settings, sign out - and every
// screen of the app is opened at least once, with a layout check wherever a layout spec exists.
// Read-only: nothing is saved, bought or deleted. Starts from a fresh install state (clears app data)
// and ends signed out.
// Run: npm run test:smoke
import {
  OnboardingPage, LoginPage, OtpPage, SystemDialogs, HomePage, SwitchProfileSheet, MonthlyProgressPage,
  PremiumPage, ReportsPage, ReportDetailPage, SettingsPage, ProfilePage, EditProfilePage, AddressesPage,
  DependentsPage, TransactionHistoryPage, BookingHistoryPage, SubscriptionPage, HelpSupportPage,
} from '../../pageobjects/index.js';
import { getUser, accountData } from '../../data/users.js';
import { freshInstallState } from '../../support/app.js';

/** Open a Settings sub-screen, check it, and come back to Settings. */
async function visitFromSettings(openFn, page, { layout = true } = {}) {
  await openFn();
  await page.waitForOpen();
  if (layout) await page.verifyLayout();
  await page.goBack();
  await SettingsPage.waitForOpen();
}

describe('Smoke', () => {
  const user = getUser();

  before(async () => {
    await freshInstallState();
    await SystemDialogs.handleAll({ timeout: 3000 });
  });

  it('SMK-01 [P0] intro and login screen', async () => {
    await OnboardingPage.waitForOpen(30000);
    await OnboardingPage.verifyLayout();
    await OnboardingPage.skip();
    await LoginPage.open();
    await LoginPage.verifyLayout();
  });

  it('SMK-02 [P0] login with mobile number and OTP', async () => {
    await LoginPage.requestOtp(user.phone);
    await OtpPage.verifyLayout();
    await OtpPage.submitOtp(user.otp);
    await SystemDialogs.handleAll();
    await HomePage.waitForOpen(30000);
  });

  it('SMK-03 [P0] Home loads, with the profile switcher and Monthly Progress', async () => {
    await HomePage.open();
    await HomePage.verifyLayout();
    await expect(HomePage.profileChip(user.name)).toBeExisting();

    await HomePage.openProfileSwitcher();
    await SwitchProfileSheet.waitForOpen();
    await SwitchProfileSheet.verifyLayout();
    await SwitchProfileSheet.close();

    await HomePage.openMonthlyProgress();
    await MonthlyProgressPage.waitForOpen();
    await MonthlyProgressPage.verifyLayout();
    await MonthlyProgressPage.close();
    await HomePage.waitForOpen();
  });

  it('SMK-04 [P0] Premium plan screen opens from the payment banner', async function () {
    await HomePage.scrollToTop();
    if (!(await HomePage.isPaymentPending())) this.skip(); // nothing to pay on this account
    await HomePage.tapCompletePayment();
    await PremiumPage.waitForOpen();
    await PremiumPage.verifyLayout();
    await PremiumPage.close();
    await HomePage.waitForOpen();
  });

  it('SMK-05 [P0] Report tab lists reports and one report opens', async () => {
    await ReportsPage.open();
    await ReportsPage.verifyLayout();
    expect(await ReportsPage.getReportCount()).toBeGreaterThan(0);
    await ReportsPage.openReport(accountData.completedReport);
    await ReportDetailPage.waitForOpen();
    await ReportDetailPage.verifyLayout();
    await ReportDetailPage.close();
    await ReportsPage.waitForOpen();
  });

  it('SMK-06 [P0] Settings, Profile and Edit Profile open', async () => {
    await SettingsPage.open();
    await SettingsPage.verifyLayout();

    await SettingsPage.openProfile();
    await ProfilePage.waitForOpen();
    await ProfilePage.verifyLayout();
    await ProfilePage.edit();
    await EditProfilePage.waitForOpen();
    await EditProfilePage.verifyLayout();
    await EditProfilePage.close(); // nothing changed, nothing saved
    await ProfilePage.waitForOpen();
    await ProfilePage.close();
    await SettingsPage.waitForOpen();
  });

  it('SMK-07 [P1] every Settings sub-screen opens', async () => {
    await SettingsPage.open();
    await visitFromSettings(() => SettingsPage.openManageAddresses(), AddressesPage);
    await visitFromSettings(() => SettingsPage.openManageDependents(), DependentsPage);
    await visitFromSettings(() => SettingsPage.openTransactionHistory(), TransactionHistoryPage);
    await visitFromSettings(() => SettingsPage.openBookingHistory(), BookingHistoryPage, { layout: false });
    await visitFromSettings(() => SettingsPage.openSubscriptionManagement(), SubscriptionPage, { layout: false });
    await visitFromSettings(() => SettingsPage.openHelpSupport(), HelpSupportPage, { layout: false });
  });

  it('SMK-08 [P0] sign out returns to the login screen', async () => {
    await SettingsPage.open();
    await SettingsPage.openSignOutDialog();
    await SettingsPage.verifySignOutLayout();
    await SettingsPage.confirmSignOut();
    await LoginPage.open();
    await expect(LoginPage.sendOtpBtn).toBeDisplayed();
  });
});
