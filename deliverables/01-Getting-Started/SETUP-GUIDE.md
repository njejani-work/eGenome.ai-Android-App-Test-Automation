# Setup Guide

Gets a tester's Windows, macOS or Linux machine from zero to a passing login test. Allow about 30-45 minutes the first time.

## 1. Install the tools

| Tool | Version | Check with |
|---|---|---|
| Node.js | 20 or newer (LTS) | `node -v` |
| Android Studio | Latest, with **Android SDK Platform-Tools** | `adb version` |
| Java JDK | 17 or newer | `java -version` |

Then set these environment variables (on Windows: *System Properties → Environment Variables*):

- `ANDROID_HOME`: your SDK folder, e.g. `C:\Users\<you>\AppData\Local\Android\Sdk`
- `JAVA_HOME`: your JDK folder
- Add `%ANDROID_HOME%\platform-tools` to `PATH`

## 2. Create and start an emulator

1. In Android Studio, open **Device Manager** and create a device (a Pixel phone with an Android 13 or 14 image works well).
2. Start it, then check that it's visible:

   ```bash
   adb devices
   # emulator-5554   device
   ```

3. Install the **staging** build of the eGenome app on it: drag the `.apk` onto the emulator, or run `adb install egenome-staging.apk`. Check that `com.egenome.app` opens.

## 3. Get the project ready

```bash
cd "eGenome.ai"
npm install                 # WebdriverIO, Appium, reporters
npm run appium:setup        # installs the UiAutomator2 driver (once)
cp .env.example .env        # Windows: copy .env.example .env
```

Open `.env` and fill in the test user. See `05-Test-Data/TEST-DATA.md`. If `adb devices` showed something other than `emulator-5554`, change `DEVICE_UDID` too.

## 4. Run the first test

```bash
npm run test:login
```

This test clears the app's data, skips the intro, logs in with the test number and OTP, checks Home, then signs out. When it finishes, the console prints a summary and the path to the dashboard.

```bash
npm run dashboard           # opens reports/index.html
```

## 5. Run everything

```bash
npm run wdio
```

Don't start Appium yourself for test runs: WebdriverIO starts it automatically on port 4723. Only the locator-capture tool needs `npm run appium` in a separate terminal (see `08-Tools-and-How-To`).

## Common setup problems

| Symptom | Fix |
|---|---|
| `adb` not recognised | `platform-tools` isn't on `PATH`. Restart the terminal after changing it |
| `Could not find a connected Android device` | Start the emulator. Check that `DEVICE_UDID` in `.env` matches `adb devices` |
| `address already in use 4723` | Close any other Appium window before `npm run wdio` |
| `JAVA_HOME is not set` | Install a JDK and set `JAVA_HOME` |
| `Test user "default" is missing phone and otp` | Fill in `.env` (step 3) |
| Login test stuck on the OTP screen | The OTP in `.env` isn't the fixed OTP for that number on staging |
