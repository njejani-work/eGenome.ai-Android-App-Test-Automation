// REGRESSION · Robustness (P1): offline/online and background/resume (on a screen and mid-edit).
import { LoginPage, HomePage, ReportsPage, SettingsPage, ProfilePage, EditProfilePage } from '../../pageobjects/index.js';
import { getUser } from '../../data/users.js';
import { setNetwork, backgroundFor, appInForeground } from '../../support/app.js';

describe('Resilience', () => {
  before(async () => {
    await LoginPage.ensureLoggedIn(getUser());
  });

  it('RES-01 [P1] the app survives losing the network and recovers when it returns', async () => {
    try {
      await setNetwork(false);
      await ReportsPage.open().catch(() => {}); // may show an error / empty state - must not crash
      expect(await appInForeground()).toBe(true);
    } finally {
      await setNetwork(true);
    }
    await driver.pause(3000);
    await HomePage.open();
    await ReportsPage.open();
    expect(await ReportsPage.getReportCount()).toBeGreaterThan(0);
  });

  it('RES-02 [P1] backgrounding and resuming keeps the user on the same screen', async () => {
    await SettingsPage.open();
    await SettingsPage.openProfile();
    await ProfilePage.waitForOpen();
    await backgroundFor(3);
    expect(await ProfilePage.isOpen(5000)).toBe(true);
    await ProfilePage.close();
  });

  it('RES-03 [P1] backgrounding mid-edit keeps the unsaved form (then discarded)', async () => {
    await SettingsPage.open();
    await SettingsPage.openProfile();
    await ProfilePage.edit();
    await EditProfilePage.waitForOpen();
    const { first } = await EditProfilePage.getName();
    await EditProfilePage.setName(`${first}Q`, null);
    await backgroundFor(3);
    expect(await EditProfilePage.isOpen(5000)).toBe(true);
    expect((await EditProfilePage.getName()).first).toBe(`${first}Q`);
    await EditProfilePage.setName(first, null); // undo, then leave without saving
    await EditProfilePage.close();
    if (await EditProfilePage.isOpen(1500)) await driver.back();
  });
});
