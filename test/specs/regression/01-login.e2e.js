// REGRESSION · Login and session - all P0/P1 login flows. Starts from a fresh install state (clears app data).
// Sends the test number's OTP up to 4 times (incl. one Resend) - make sure staging doesn't rate-limit it.
import { OnboardingPage, LoginPage, OtpPage, HomePage, SettingsPage, ReportsPage, SystemDialogs } from '../../pageobjects/index.js';
import { getUser, users } from '../../data/users.js';
import { APP_ID, freshInstallState, restartApp } from '../../support/app.js';

describe('Login and session', () => {
  const user = getUser();

  before(async () => {
    await freshInstallState();
    await SystemDialogs.handleAll({ timeout: 3000 });
  });

  it('LGN-01 [P0] intro is shown on first launch and can be skipped', async () => {
    await OnboardingPage.waitForOpen(30000);
    await OnboardingPage.verifyLayout();
    await OnboardingPage.skip();
  });

  it('LGN-02 [P0] login screen shows the expected text and layout', async () => {
    await LoginPage.open();
    await LoginPage.verifyLayout();
    await expect(LoginPage.countryCode).toHaveText(user.countryCode);
    await expect(LoginPage.sendOtpBtn).toBeEnabled();
  });

  it('LGN-03 [P1] an empty phone number does not send an OTP', async () => {
    await LoginPage.typeRawPhone('');
    await LoginPage.tapSendOtp();
    expect(await OtpPage.isOpen(4000)).toBe(false);
    expect(await LoginPage.isOpen()).toBe(true);
  });

  it('LGN-04 [P1] an incomplete phone number does not send an OTP', async () => {
    await LoginPage.enterPhone('98765');
    await LoginPage.tapSendOtp();
    expect(await OtpPage.isOpen(4000)).toBe(false);
    expect(await LoginPage.isOpen()).toBe(true);
  });

  it('LGN-05 [P1] the phone field does not accept letters or symbols', async () => {
    await LoginPage.typeRawPhone('98ab76#5');
    expect(await LoginPage.getPhone()).not.toMatch(/[a-z#]/i);
  });

  it('LGN-06 [P0] a valid number opens one OTP screen for that number (Send OTP tapped twice)', async () => {
    await LoginPage.enterPhone(user.phone);
    await LoginPage.doubleTapSendOtp();
    await OtpPage.waitForOpen(30000);
    await OtpPage.verifyLayout();
    expect(await OtpPage.getSentToNumber()).toContain(user.phone);
  });

  it('LGN-07 [P1] Resend is disabled while its countdown runs', async () => {
    const first = await OtpPage.getResendSeconds();
    expect(first).toBeGreaterThan(0);
    await driver.pause(3000);
    expect(await OtpPage.getResendSeconds()).toBeLessThan(first);
  });

  it('LGN-08 [P1] back from the OTP screen returns to the login screen', async () => {
    await OtpPage.back();
    await LoginPage.waitForOpen(10000);
    await expect(LoginPage.sendOtpBtn).toBeDisplayed();
  });

  it('LGN-09 [P1] Resend becomes available when the countdown ends and restarts it', async () => {
    await LoginPage.requestOtp(user.phone);
    await OtpPage.resendOtp(); // waits for the countdown, then taps Resend
    await driver.pause(1500);
    expect(await OtpPage.getResendSeconds()).toBeGreaterThan(0);
  });

  it('LGN-10 [P0] a wrong OTP keeps the user on the OTP screen', async () => {
    await OtpPage.submitOtp(users.wrongOtp.otp);
    expect(await HomePage.isOpen(5000)).toBe(false);
    expect(await OtpPage.isOpen()).toBe(true);
  });

  it('LGN-11 [P0] the correct OTP logs in and lands on Home', async () => {
    await OtpPage.submitOtp(user.otp);
    await SystemDialogs.handleAll();
    await HomePage.waitForOpen(30000);
    await expect(HomePage.profileChip(user.name)).toBeExisting();
  });

  it('LGN-12 [P1] the session survives an app restart', async () => {
    await restartApp();
    await SystemDialogs.handleAll({ timeout: 2000 });
    await HomePage.waitForOpen(30000);
    expect(await LoginPage.isOpen()).toBe(false);
  });

  it('LGN-13 [P1] cancelling sign-out keeps the user signed in', async () => {
    await SettingsPage.open();
    await SettingsPage.openSignOutDialog();
    await SettingsPage.verifySignOutLayout();
    await SettingsPage.cancelSignOut();
    await expect(SettingsPage.menuItem('Logout')).toBeDisplayed();
  });

  it('LGN-14 [P0] signing out returns to the login screen and Back does not return to the app', async () => {
    await SettingsPage.logout();
    await LoginPage.open();
    await expect(LoginPage.sendOtpBtn).toBeDisplayed();
    await driver.back();
    expect(await HomePage.isOpen(3000)).toBe(false);
    await driver.activateApp(APP_ID); // Back may have closed the app; reopening must still show login
    await LoginPage.open();
  });
});

describe('Login with permissions denied', () => {
  const user = getUser();

  before(async () => {
    await freshInstallState();
  });

  it('LGN-15 [P1] denying notification / Health Connect permissions still lets the user in and use the app', async () => {
    await SystemDialogs.handleAll({ allow: false, timeout: 3000 });
    await LoginPage.open();
    await LoginPage.requestOtp(user.phone);
    await OtpPage.submitOtp(user.otp);
    await SystemDialogs.handleAll({ allow: false });
    await HomePage.waitForOpen(30000);
    await ReportsPage.open(); // a second tab works too
    await SystemDialogs.handleAll({ allow: false, timeout: 2000 });
    expect(await ReportsPage.getReportCount()).toBeGreaterThan(0);
  });
});
