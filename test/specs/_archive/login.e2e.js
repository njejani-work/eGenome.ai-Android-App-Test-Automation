// Valid login: intro (Skip) -> mobile number -> OTP -> Home, then sign out.
// Uses the default user from .env (TEST_PHONE / TEST_OTP / TEST_USER_NAME).
// NOTE: clears the app's data first so the test always starts logged out.
import { OnboardingPage, LoginPage, OtpPage, HomePage, SettingsPage, SystemDialogs, step } from '../pageobjects/index.js';
import { getUser } from '../data/users.js';

const APP_ID = 'com.egenome.app';

describe('Login with mobile number and OTP', () => {
  const user = getUser('default');

  before(async () => {
    await step('Clear app data and relaunch', async () => {
      await driver.execute('mobile: clearApp', { appId: APP_ID });
      await driver.activateApp(APP_ID);
    });
    await SystemDialogs.handleAll({ timeout: 3000 }); // e.g. notifications prompt on first launch
  });

  it('shows the intro and skips it', async () => {
    await OnboardingPage.waitForOpen(30000);
    await expect(OnboardingPage.skipBtn).toBeDisplayed();
    await OnboardingPage.skip();
  });

  it('shows the login screen', async () => {
    await LoginPage.dismissPhoneHint(5000); // Google's number picker may open on top of login
    await LoginPage.waitForOpen(20000);
    await expect(LoginPage.sendOtpBtn).toBeDisplayed();
    await expect(LoginPage.countryCode).toHaveText(user.countryCode);
  });

  it('sends an OTP to the entered mobile number', async () => {
    await LoginPage.requestOtp(user.phone);

    await expect(OtpPage.title).toBeDisplayed();
    expect(await OtpPage.getSentToNumber()).toContain(user.phone);
  });

  it('logs in with the correct OTP and lands on Home', async () => {
    await OtpPage.submitOtp(user.otp);
    await SystemDialogs.handleAll(); // notifications / Health Connect prompts after login

    await HomePage.waitForOpen(30000);
    await expect(HomePage.profileChip(user.name)).toBeExisting();
  });

  it('keeps the session when sign-out is cancelled', async () => {
    await SettingsPage.open();
    await SettingsPage.cancelLogout();
    await expect(SettingsPage.menuItem('Logout')).toBeDisplayed(); // still on Settings
  });

  it('signs out and returns to the login screen', async () => {
    await SettingsPage.logout();
    await LoginPage.dismissPhoneHint(5000); // Google's number picker opens after sign-out
    await LoginPage.waitForOpen(20000);
    await expect(LoginPage.sendOtpBtn).toBeDisplayed();
  });
});
