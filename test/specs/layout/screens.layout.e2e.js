// LAYOUT (UI audit, ~10 min): visits every screen that has a layout spec and checks text,
// state, proportional position/size and alignment (Layer 1). No data is changed.
// Run: npm run test:layout           Re-baseline from the device: npm run layout:baseline
// NOTE: starts from a fresh install state (clears app data) to reach the intro, login and OTP screens.
import {
  OnboardingPage, LoginPage, OtpPage, SystemDialogs, HomePage, SwitchProfileSheet, MonthlyProgressPage,
  ReportsPage, ReportDetailPage, PremiumPage, SettingsPage, ProfilePage, EditProfilePage, AddressesPage,
  DependentsPage, TransactionHistoryPage,
} from '../../pageobjects/index.js';
import { getUser, accountData } from '../../data/users.js';
import { freshInstallState } from '../../support/app.js';

describe('Layout audit', () => {
  const user = getUser();

  describe('Before login', () => {
    before(async () => {
      await freshInstallState();
      await SystemDialogs.handleAll({ timeout: 3000 });
    });

    it('LAY-01 Onboarding', async () => {
      await OnboardingPage.waitForOpen(30000);
      await OnboardingPage.verifyLayout();
      await OnboardingPage.skip();
    });

    it('LAY-02 Login', async () => {
      await LoginPage.open();
      await LoginPage.verifyLayout();
    });

    it('LAY-03 OTP', async () => {
      await LoginPage.requestOtp(user.phone);
      await OtpPage.verifyLayout();
      await OtpPage.submitOtp(user.otp);
      await SystemDialogs.handleAll();
      await HomePage.waitForOpen(30000);
    });
  });

  describe('Signed in', () => {
    before(async () => {
      await LoginPage.ensureLoggedIn(user);
    });

    it('LAY-04 Home', async () => {
      await HomePage.open();
      await HomePage.verifyLayout();
    });

    it('LAY-05 Switch Profile sheet', async () => {
      await HomePage.openProfileSwitcher();
      await SwitchProfileSheet.waitForOpen();
      await SwitchProfileSheet.verifyLayout();
      await SwitchProfileSheet.close();
    });

    it('LAY-06 Monthly Progress', async () => {
      await HomePage.openMonthlyProgress();
      await MonthlyProgressPage.waitForOpen();
      await MonthlyProgressPage.verifyLayout();
      await MonthlyProgressPage.close();
    });

    it('LAY-07 Premium', async function () {
      await HomePage.open();
      if (!(await HomePage.isPaymentPending())) this.skip();
      await HomePage.tapCompletePayment();
      await PremiumPage.waitForOpen();
      await PremiumPage.verifyLayout();
      await PremiumPage.close();
    });

    it('LAY-08 Reports', async () => {
      await ReportsPage.open();
      await ReportsPage.verifyLayout();
    });

    it('LAY-09 Report details', async () => {
      await ReportsPage.openReport(accountData.completedReport);
      await ReportDetailPage.waitForOpen();
      await ReportDetailPage.verifyLayout();
      await ReportDetailPage.close();
    });

    it('LAY-10 Settings', async () => {
      await SettingsPage.open();
      await SettingsPage.verifyLayout();
    });

    it('LAY-11 Sign Out dialog', async () => {
      await SettingsPage.openSignOutDialog();
      await SettingsPage.verifySignOutLayout();
      await SettingsPage.cancelSignOut();
    });

    it('LAY-12 Profile', async () => {
      await SettingsPage.openProfile();
      await ProfilePage.waitForOpen();
      await ProfilePage.verifyLayout();
    });

    it('LAY-13 Edit Profile', async () => {
      await ProfilePage.edit();
      await EditProfilePage.waitForOpen();
      await EditProfilePage.verifyLayout();
      await EditProfilePage.close();
      await ProfilePage.close();
    });

    it('LAY-14 Manage Addresses', async () => {
      await SettingsPage.open();
      await SettingsPage.openManageAddresses();
      await AddressesPage.waitForOpen();
      await AddressesPage.verifyLayout();
      await AddressesPage.close();
    });

    it('LAY-15 Family Network', async () => {
      await SettingsPage.openManageDependents();
      await DependentsPage.waitForOpen();
      await DependentsPage.verifyLayout();
      await DependentsPage.close();
    });

    it('LAY-16 Transaction History', async () => {
      await SettingsPage.openTransactionHistory();
      await TransactionHistoryPage.waitForOpen();
      await TransactionHistoryPage.verifyLayout();
      await TransactionHistoryPage.goBack();
    });
  });
});
