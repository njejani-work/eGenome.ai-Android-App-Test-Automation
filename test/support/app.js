// App-level helpers shared by the suites (each is recorded as a dashboard step).
import { step } from './dashboard/recorder.js';

export const APP_ID = 'com.egenome.app';

/** Clear the app's data (logged out, intro shows again) and relaunch it. */
export const freshInstallState = () =>
  step('Clear app data and relaunch', async () => {
    await driver.execute('mobile: clearApp', { appId: APP_ID });
    await driver.activateApp(APP_ID);
  });

/** Kill and relaunch the app without clearing data. */
export const restartApp = () =>
  step('Restart the app', async () => {
    await driver.terminateApp(APP_ID);
    await driver.activateApp(APP_ID);
  });

/** Send the app to the background for a few seconds, then bring it back. */
export const backgroundFor = (seconds = 3) =>
  step(`Send app to background for ${seconds}s`, () => driver.execute('mobile: backgroundApp', { seconds }));

/** Wi-Fi + mobile data on/off (emulator). */
export const setNetwork = (on) =>
  step(`Turn network ${on ? 'on' : 'off'}`, () => driver.execute('mobile: setConnectivity', { wifi: on, data: on }));

/** True while the eGenome app is in the foreground (i.e. it hasn't crashed or left the app). */
export async function appInForeground() {
  try { return (await driver.getCurrentPackage()) === APP_ID; } catch { return false; }
}

/** Wait, then report whether a screen opened (used to assert that something did NOT happen). */
export async function opensWithin(page, ms) {
  return page.isOpen(ms);
}
