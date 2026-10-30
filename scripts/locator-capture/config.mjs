// Locator capture configuration.
// Values can be overridden with environment variables (see README.md).

export default {
  // Appium server (Appium 2 default path is '/'; Appium 1.x uses '/wd/hub')
  appium: {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: Number(process.env.APPIUM_PORT || 4723),
    path: process.env.APPIUM_PATH || '/',
  },

  capabilities: {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': process.env.DEVICE_NAME || 'emulator-5554',
    'appium:udid': process.env.DEVICE_UDID || 'emulator-5554',
    'appium:appPackage': process.env.APP_PACKAGE || 'com.egenome.app',
    'appium:appActivity': process.env.APP_ACTIVITY || '.MainActivity',
    'appium:noReset': true, // keep app data / logged-in state
    'appium:dontStopAppOnReset': true,
    'appium:newCommandTimeout': 3600,
  },

  // Output folder (relative to the project root you run the script from)
  outputDir: process.env.LOCATORS_DIR || 'locators',

  // 'auto' reads "type" from package.json; or force 'esm' / 'cjs'
  pageObjectFormat: 'auto',

  saveScreenshots: true,
  saveRawXml: false, // set true to keep the raw page source per screen (debugging)

  // Packages whose elements are ignored (status bar, keyboard, etc.)
  ignorePackages: [
    'com.android.systemui',
    'com.google.android.inputmethod.latin',
    'com.android.inputmethod.latin',
    'com.samsung.android.honeyboard',
  ],

  // How similar two element sets must be (0..1) to count as the same screen
  screenMatchThreshold: 0.6,

  watch: {
    pollIntervalMs: 1000,
    stableChecks: 2, // identical consecutive page sources before capturing
  },

  crawl: {
    maxDepth: 6,
    maxActions: 300,
    maxMinutes: 20,
    settleMs: 1200,
    // Never tap elements whose id / text / description matches this
    denylist: /log ?out|sign ?out|delete|remove|uninstall|deactivate|close account|pay|purchase|buy|checkout|call|share|rate us|reset/i,
    // Values typed into empty input fields before tapping buttons.
    // First matching rule wins (matched against resource-id, hint, text, content-desc).
    inputs: [
      { match: /otp|code|pin|verification/i, value: '123456' },
      { match: /phone|mobile|msisdn/i, value: '9999900001' },
      { match: /e-?mail/i, value: 'qa.test@example.com' },
      { match: /pass/i, value: 'Test@12345' },
      { match: /name/i, value: 'QA Tester' },
      { match: /.*/, value: 'test' },
    ],
  },
};
