# Locator capture (Appium UiAutomator2 + WebdriverIO)

Captures locators for every screen of the Android app while it runs in the emulator, and saves them to `locators/` in the project root:

```
locators/
  _screens.json              index of screens + navigation map (which tap leads where)
  LoginScreen.json           every element: primary locator, fallbacks, attributes
  pages/BasePage.js          shared helpers (find with fallbacks, isOpen, waitForOpen)
  pages/LoginScreen.page.js  generated WebdriverIO page class
  screenshots/LoginScreen.png
```

## One-time setup

```bash
npm install                 # installs WDIO, Appium and the locator-capture dependencies
npm run appium:setup        # installs the UiAutomator2 driver into Appium (once)
```

`config.mjs` is already set to `com.egenome.app` / `.MainActivity` on `emulator-5554`. Run `adb devices` to check the emulator id. If it's different, set `DEVICE_UDID`.

## Run

1. Start the emulator from Android Studio.
2. Start Appium in a separate terminal: `npm run appium`. Stop it before `npm run wdio`, because WDIO's appium service starts its own Appium on the same port (4723).
3. Choose a mode:

**Watch mode (you navigate):** `npm run locators:watch` (or `npm run locators:attach` to start from wherever the app is now)
Use the app in the emulator as usual. Each time the screen changes, the script waits for it to settle, works out whether it's a new screen or one it already knows, and saves the locators. Scrolling down or opening a dialog adds the new elements to the current screen.

| Key | Action |
|---|---|
| `c` | Capture now |
| `n` | Save the current screen under a name you type (use when two screens got mixed up) |
| `r` | Rename the current screen |
| `m` | Merge the current screen into another one (use when one screen was split in two) |
| `l` | List the captured screens |
| `q` | Quit |

Add `--attach` to keep the app exactly where it is: no relaunch and no reset.

**Crawl mode (the script navigates):** `npm run locators:crawl`
The script explores the app depth-first. It taps every clickable element, captures each new screen, then goes back. If going back fails, it relaunches the app and replays the taps that led there. Empty input fields are filled from `crawl.inputs` in the config (for example, phone `9999900001` and OTP `123456`), so it can get through the OTP login on a staging build that has a test number or fixed OTP. Elements that match `crawl.denylist` are never tapped: logout, delete, pay and so on. It stops at `maxDepth`, `maxActions` or `maxMinutes`, or when you press Ctrl+C.

A good approach: run **crawl** first to get broad coverage, then run **watch** for flows the crawler can't reach, such as screens that need specific data.

## Other commands

```bash
node scripts/locator-capture/capture.mjs rename Screen2 OtpScreen
node scripts/locator-capture/capture.mjs merge HomeScreen HomeScreen2
node scripts/locator-capture/capture.mjs import page.xml --name CartScreen   # page source saved from Appium Inspector
node scripts/locator-capture/capture.mjs pages                              # regenerate all page classes
```

## How locators are chosen

Each element gets candidates in this order. Each one is checked for uniqueness against the current screen:

1. accessibility id: `~Login`
2. resource-id: `id=com.app:id/btn_send_otp`
3. resource-id + text (for repeated ids): `android=new UiSelector().resourceId("…").text("…")`
4. text: `android=new UiSelector().text("Send OTP")`
5. relative XPath: `//android.widget.Button[@resource-id="…"]`
6. index-based locators (`.instance(n)` or `(…)[n]`), marked with a note
7. absolute XPath: kept in the JSON only as a last resort

The first unique candidate becomes `primary`; the next ones become `fallbacks`. Elements with no unique locator are flagged `NOT UNIQUE - review` in the page class. For Jetpack Compose screens, ask developers to add `Modifier.testTag(...)` with `testTagsAsResourceId = true`. Otherwise Compose elements only get text or XPath locators.

Element names (for example `sendOtpBtn` and `phoneInput`) come from the resource-id, content-desc or text. **You can rename elements in the JSON file.** Later captures match elements by a stable key, so your names are kept. Run `pages` afterwards to regenerate the classes.

## Using the generated page classes

Generated files are overwritten on every capture, so put actions in your own class:

```js
// test/pageobjects/login.page.js
import { LoginScreenClass } from '../../locators/pages/LoginScreen.page.js';

class LoginPage extends LoginScreenClass {
  async requestOtp(phone) {
    await this.waitForOpen();
    await this.phoneInput.setValue(phone);
    await this.sendOtpBtn.click();
  }
}
export default new LoginPage();
```

```js
// in a spec
import LoginPage from '../pageobjects/login.page.js';
import OtpScreen from '../../locators/pages/VerifyOtpScreen.page.js';

it('logs in with OTP', async () => {
  await LoginPage.requestOtp('9999900001');
  await OtpScreen.waitForOpen();
  await (await OtpScreen.find('otpInput')).setValue('123456'); // find() tries the fallbacks too
  await OtpScreen.verifyBtn.click();
});
```

If the project's `package.json` has no `"type": "module"`, the page classes are generated as CommonJS (`require`/`module.exports`). To force a format, set `pageObjectFormat` in the config.
