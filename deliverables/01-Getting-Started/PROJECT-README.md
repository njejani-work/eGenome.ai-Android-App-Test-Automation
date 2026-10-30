# eGenome.ai – Android App Test Automation

End-to-end tests for the eGenome Android app (`com.egenome.app`), built with **WebdriverIO 10**, **Appium 3** and the **UiAutomator2** driver, using Mocha and the page object pattern.

The project also includes a **locator capture tool**. It records the locators for every screen while you use the app in the emulator, and those recordings are what the page objects are built from.

---

## Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running tests](#running-tests)
- [Project structure](#project-structure)
- [Test data and `.env`](#test-data-and-env)
- [Test suites](#test-suites)
- [Layout checks (Layer 1)](#layout-checks-layer-1)
- [Test dashboard](#test-dashboard)
- [Deliverables for testers](#deliverables-for-testers)
- [Page objects](#page-objects)
- [Writing a new test](#writing-a-new-test)
- [Capturing locators](#capturing-locators)
- [Login flow and OTP](#login-flow-and-otp)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

| Tool | Notes |
|---|---|
| Node.js 20+ | `node -v` |
| Android Studio | With an emulator (AVD) created |
| Java JDK 17+ | Needed by Appium / adb |
| `ANDROID_HOME` | Points to your Android SDK. `platform-tools` (adb) must be on `PATH` |
| eGenome app | Installed on the emulator (`com.egenome.app`) |

Check that the emulator is visible:

```bash
adb devices          # e.g. "emulator-5554   device"
```

## Setup

```bash
npm install                 # WebdriverIO, Appium, reporters, dotenv, locator-capture deps
npm run appium:setup        # installs the UiAutomator2 driver into Appium (first time only)
cp .env.example .env        # then edit .env (see below)
```

Set at least `TEST_PHONE` and `TEST_OTP` in `.env`. If your emulator isn't `emulator-5554`, also set `DEVICE_UDID`.

## Running tests

Start the emulator first. WebdriverIO starts Appium itself through `@wdio/appium-service`, so **don't run a separate Appium server** at the same time, because both use port 4723.

| Command | What it runs |
|---|---|
| `npm run wdio` | Smoke + Regression suites |
| `npm run test:smoke` | **Smoke** (~5 min, every build): login, Home, Reports + one report, Settings, sign out - and every screen opened once with its layout check |
| `npm run test:regression` | **Regression** (nightly / before release): all P0/P1 flows, with layout checks on every screen visited |
| `npm run test:layout` | **Layout audit**: visits all 16 screens that have a layout spec and checks them |
| `npm run test:extended` | **Extended**: planned P2/destructive/payment flows, currently pending (shown as skipped with their prerequisite) |
| `npm run test:login` | Only the login and session regression spec |
| `npx wdio run ./wdio.conf.js --spec ./test/specs/<file>.js` | Any single spec |
| `npm run dashboard` | Rebuild and open the results dashboard (`reports/index.html`) |
| `npm run deliverables` | Regenerate the tester hand-over folder (`deliverables/`) |

> ⚠️ The smoke suite, `regression/01-login.e2e.js` and the layout audit **clear the app's data** before they start, so they always begin logged out. The emulator is logged out (and logged back in) on every run.

**Reports:** results print to the console (spec reporter) and are written to `allure-results/`. If a test fails, a screenshot is attached. To view the HTML report:

```bash
npx allure generate allure-results --clean && npx allure open
```

This needs the Allure command-line tool: `npm i -D allure-commandline`.

## Test suites

Suites are defined in `wdio.conf.js` (`suites`). Every test title starts with an ID and a priority, e.g. `LGN-07 [P0] a wrong OTP keeps the user on the OTP screen`.

| Suite | Folder | Contents |
|---|---|---|
| Smoke | `test/specs/smoke/` | SMK-01…08 (~5 min, every build): intro → login → OTP → Home (+ profile switcher, Monthly Progress) → Premium → Reports + one report → Settings, Profile, Edit Profile → every Settings sub-screen → sign out. Opens every screen at least once, with a layout check wherever a spec exists. Read-only; starts from a fresh install state and ends signed out |
| Regression | `test/specs/regression/` | Every P0/P1 flow (~59 tests): `01-login` LGN-01…15 (intro, empty/short/letters validation, double-tap Send OTP, resend countdown, back, wrong/correct OTP, restart, cancel + confirm sign-out, permissions denied), `02-home` HOM-01…10 (cards, routine tabs/slots, +N more, task counter, mark an item done, Monthly Progress incl. year boundary, profile switching), `03-reports` RPT-01…09 (count = cards, pending report locked, sections, diet days, biomarker totals and rows, download), `04-payments` PAY-01…08 (paywall, methods, plans, Razorpay open/continue/exit; success/failure only in Razorpay test mode), `05-settings` SET-01…15 (profile + edit round-trip and validation, addresses + form validation, family count + dependent round-trip, history, booking, subscription up to cancel), `06-resilience` RES-01…03 (offline/online, background/resume, mid-edit) |
| Layout | `test/specs/layout/` | LAY-01…16: one layout check per screen |
| Extended | `test/specs/extended/` | 25 pending P2 / destructive tests, each with `[needs: …]` - payment success/failure (Razorpay test mode), add/remove address and dependent, theme, accessibility, font scale, deep links… |

Regression is read-only apart from: sending the test number's OTP (up to 4 times, incl. one Resend), switching to the dependent's profile and back, marking one of today's routine items as done, and two edit-and-restore round trips (profile weight +1 kg, dependent's last name). Tests that depend on account data skip themselves when it isn't there (e.g. no pending payment). Account data the suites expect is configured in `.env` (`TEST_DEPENDENT_NAME`, `TEST_COMPLETED_REPORT`, `TEST_PENDING_REPORT`, `TEST_BOOKING_SERVICE`).

Gated tests (skip unless switched on in `.env`):

- `TEST_ALLOW_DATA_CHANGES=true` - SET-15 adds a real address (the tests can't delete it). Use `TEST_ADDRESS_SEARCH` for the search term.
- `RAZORPAY_TEST_MODE=true` - PAY-07/08 (successful / failed payment). Only on a staging build using Razorpay test keys, and they also need the Razorpay card form captured (see Known Issues).

## Layout checks (Layer 1)

`await LoginPage.verifyLayout()` compares the screen with `test/layout/specs/Login.json`, using the element data Appium returns (one page-source read, no extra taps). It checks:

| Check | Meaning |
|---|---|
| presence / text / state | element shown, exact text (static text only), clickable/enabled |
| box | x, y, width, height as a **share of the screen** (±2% position, ±3% size) - only on screens with the baseline's aspect ratio |
| width | wide elements keep their share of the screen width (any screen) |
| order, sameRow | top-to-bottom order of rows; elements that share a row still do |
| alignLeft / alignRight / centerX | edges line up, centred elements stay centred |
| inside | labels stay inside (and centred in) their buttons |
| gap | vertical spacing between rows, as a share of screen width |
| noOverlap, onScreen | tappable elements don't overlap; nothing off-screen |
| minTap (warning) | tap targets ≥ 48dp (Android guideline) - reported, doesn't fail |

Dynamic content (names, numbers, dates, prices) is only checked for presence and position, never exact text. When something is missing, the report says what the screen shows at that spot instead (e.g. changed text).

On the dashboard each layout check is a step with a table of every failed/warned check; click its screenshot to see **expected (dashed blue) vs actual (red) boxes**.

| Command | |
|---|---|
| `npm run layout:generate` | Create specs from the captures in `locators/` (never overwrites reviewed specs; `-- --force` regenerates unreviewed ones) |
| `npm run layout:baseline` | Re-record every spec from the **live app** (runs the layout suite with `LAYOUT_UPDATE=true`) - use after an intended design change |
| `npm run layout:accept -- latest Home Premium` | Accept what a dashboard run saw as the new baseline for those specs (boxes, state, order/gap rules). Use when a layout check failed but the screenshot shows the screen is right. Add `--dry` to preview; text changes are never accepted automatically |
| `LAYOUT_CHECKS=warn` in `.env` | Report layout differences without failing tests (`off` skips them) |

The 16 specs were generated from the current captures (720×1280) and are marked `"reviewed": false`. Review each against the design, adjust values/tolerances or remove checks that shouldn't apply (edit the element's `checks`, or list it in `ignore`), then set `"reviewed": true`. Specs carry `tolerance` settings you can tighten per screen.

## Test dashboard

Every `npm run wdio` is recorded as a **run** in `reports/`, and `reports/index.html` shows the runs. It opens straight from disk, with no server and no internet needed:

- **Overview:** the last run's status and pass rate, a chart of passed, failed and skipped tests per run, the list of runs, and a "test health" table that flags flaky tests.
- **Run page:** each test as a list of **steps**. A step is every page-object call (e.g. `LoginPage.requestOtp("9999999999")`) and every `expect(...)` check. Each step is marked passed or failed, with its duration, the individual taps and typing, and a **screenshot taken after the step**. Click a screenshot to enlarge it, then use ← → to move through them.
- **Failures:** the failed step shows the error message and stack trace. The test also gets a screenshot at the moment of failure, plus the tail of the Android **logcat**.
- The page refreshes itself while a run is in progress. OTP codes are masked.

| Command | |
|---|---|
| `npm run dashboard` | Rebuild the data and open the dashboard |
| `npm run dashboard:build` | Rebuild only (e.g. after an interrupted run) |

Settings (in `.env`): `DASHBOARD_SCREENSHOTS=all|failures|none`, `DASHBOARD_KEEP_RUNS=30`, `DASHBOARD_LOGCAT=true`, `DASHBOARD_VERBOSE=false`, `TEST_ENV=staging`.

How it works: `test/support/dashboard/hooks.js` is added to `wdio.conf.js` through `withDashboard(...)`. The page objects exported from `test/pageobjects/index.js` are wrapped with `instrument(...)`, which is what records each call as a step. To show something else as a step in a spec, use `step()`:

```js
import { step } from '../pageobjects/index.js';
await step('Clear app data', () => driver.execute('mobile: clearApp', { appId: 'com.egenome.app' }));
```

Each run's files are in `reports/runs/<run-id>/`: `run.log` (plain-text step log), `run.json` (full results) and `screenshots/`.

## Deliverables for testers

`npm run deliverables` generates `deliverables/`, a hand-over package for the QA team. Re-run it after changing locators, page objects or tests:

| Folder | Contents |
|---|---|
| `01-Getting-Started` | Setup guide, project README, `.env` template |
| `02-Locators` | **Locator catalogue** (HTML, with a screenshot per screen), `locators.csv` / `.json`, raw capture data |
| `03-Page-Objects` | Reference of every page object's actions and elements |
| `04-Test-Cases` | Test-case list (CSV + Markdown) with the automated steps and the latest result for each |
| `05-Test-Data` | Test users, OTP rules, the `.env` variables |
| `06-Execution-Reports` | Dashboard snapshot of the newest runs, plus a latest-run summary |
| `07-Known-Issues` | Open issues and recommendations for developers |
| `08-Tools-and-How-To` | Adding a test, fixing a locator, the locator capture guide |

The locator catalogue is generated from `test/pageobjects/catalog.js`, which maps each page object to its screen and to its captures in `locators/screenshots/`.

## Project structure

```
.
├── wdio.conf.js                  WebdriverIO config (capabilities, specs, reporters); loads .env
├── .env / .env.example           Device + test-user settings (.env is git-ignored)
├── test/
│   ├── specs/                    Test files (*.e2e.js)
│   │   ├── smoke/                Smoke suite
│   │   ├── regression/           Regression suite (01-login … 06-resilience)
│   │   ├── layout/               Layout audit of every screen
│   │   └── extended/             Planned flows (pending, with prerequisites)
│   ├── layout/specs/             Layer 1 layout specs, one JSON per screen
│   ├── pageobjects/              Page models, one per screen
│   │   ├── BasePage.js           Selector helpers (S), tap/type/scroll/wait helpers
│   │   ├── index.js              Re-exports everything - import from here
│   │   ├── components/           BottomNav, SystemDialogs (Android permission pop-ups)
│   │   └── *.js                  Onboarding, Login, Otp, Home, Reports, Settings, ...
│   ├── data/
│   │   └── users.js              Test users, read from .env
│   └── support/                  dashboard/ (step recorder, hooks, template), layout/ (Layer 1 engine), app.js
├── locators/                     Output of the locator capture tool (raw material for page objects)
├── reports/                      Test runs + dashboard (generated, git-ignored)
├── deliverables/                 Tester hand-over package (generated by npm run deliverables)
└── scripts/
    ├── locator-capture/          The locator capture tool (see its README)
    ├── layout/generate.mjs       Builds layout specs from captures
    └── deliverables/             Builds deliverables/ (docs/ holds the hand-written guides)
```

## Test data and `.env`

All environment-specific values are in `.env`. Copy `.env.example` to create it, and never commit it.

| Variable | Purpose |
|---|---|
| `DEVICE_NAME`, `DEVICE_UDID` | Emulator to use (from `adb devices`) |
| `TEST_USER_NAME` | Name shown in the app's header after login (used in assertions) |
| `TEST_COUNTRY_CODE` | `+91` |
| `TEST_PHONE` | 10-digit test number, **without** the country code |
| `TEST_OTP` | The fixed 6-digit OTP the test backend accepts for `TEST_PHONE` |
| `TEST_USER2_*` | Optional second account |
| `TEST_WRONG_OTP` | For negative tests (default `000000`) |

Specs never read `process.env` directly. They get users from `test/data/users.js`:

```js
import { getUser } from '../data/users.js';

const user = getUser();             // default user
const other = getUser('secondary'); // optional second account
// -> { name, countryCode, phone, otp }
```

`getUser()` fails straight away with a clear message if the phone number or OTP is missing or the wrong length.

## Page objects

Import everything from `test/pageobjects/index.js`:

```js
import { LoginPage, HomePage, ReportsPage, SettingsPage, MENU } from '../pageobjects/index.js';
```

| Page object | Screen | Useful methods |
|---|---|---|
| `OnboardingPage` | Intro carousel (fresh install) | `skip()`, `skipIfShown()` |
| `LoginPage` | Mobile number screen | `open()`, `requestOtp(phone)`, `login(user)`, `ensureLoggedIn()`, `dismissPhoneHint()` |
| `OtpPage` | "OTP, please" | `enterOtp(code)`, `submitOtp(code)`, `getSentToNumber()`, `resendOtp()` |
| `HomePage` | Home tab | `open()`, `getStreak()`, `getVital('BMI')`, `markSlot('Breakfast','Done')`, `openMonthlyProgress()` |
| `SwitchProfileSheet` | Profile switcher | `switchTo(name)`, `addProfile()` |
| `MonthlyProgressPage` | Calendar | `getMonth()`, `goToMonth('August 2026')`, `selectDay(15)` |
| `ReportsPage` | Report tab | `open()`, `getReportCount()`, `openReport(REPORTS.cvd)`, `getReportStatus(title)` |
| `ReportDetailPage` | An opened report | `openSection('Diet Plan')`, `getBiomarker('Vitamin D3')`, `getMarkerCounts()` |
| `PremiumPage`, `RazorpayCheckoutPage` | Plan + payment | `choosePlan('emi')`, `getTotal()`, `exit()` |
| `SettingsPage` | Settings tab | `open()`, `openMenu(MENU.X)`, `setTheme('Dark')`, `logout()`, `cancelLogout()` |
| `ProfilePage`, `EditProfilePage` | Profile | `getField('PHONE')`, `update({ weight: 60 })` |
| `AddressesPage`, `AddAddressPage` | Manage Addresses | `getAddressCount()`, `addAddress({...})` |
| `DependentsPage`, `EditDependentPage` | Family Network | `getMember(name)`, `editMember(name)` |
| `TransactionHistoryPage`, `BookingHistoryPage`, `SubscriptionPage`, `CancelSubscriptionPage`, `HelpSupportPage` | Settings sub-screens | `filterBy('Failed')`, `getPlan()`, `getCallInfo()` |
| `BottomNav` | Home / Report / Settings tabs | `openHome()`, `openReports()`, `openSettings()` |
| `SystemDialogs` | Android permission pop-ups | `handleAll({ allow: true })` |

Every page object also has these methods from `BasePage`: `waitForOpen()`, `isOpen()`, `tap(sel, { scroll })`, `type(sel, value)`, `scrollTo(sel)`, `scrollToTop()`, `goBack()` and `hideKeyboard()`.

### Locator conventions

The app is built with React Native, so most elements have **no resource-id**. Their accessibility labels (content-desc) often include icon-font characters and live data, for example `"<icon>, Manage Addresses, <icon>"` or `"John Doe, Self, …"`. The page objects therefore use the **stable part** of each label through the `S` helpers in `BasePage.js`:

```js
S.desc('Send OTP')                       // exact content-desc
S.descContains(', Day Streak')           // partial match
S.descMatches('.+, Manage Addresses(, .*)?')
S.text('Log in or Sign up')
S.fieldAfter('FIRST NAME')               // the EditText that follows a caption
S.textAfter('Total Amount')              // the value shown after a caption
```

Prefer, in this order: exact content-desc, then partial content-desc, then text, then a caption-relative XPath. Avoid index-based and absolute XPaths.

## Writing a new test

```js
// test/specs/reports.e2e.js
import { LoginPage, ReportsPage, ReportDetailPage, REPORTS } from '../pageobjects/index.js';

describe('Reports', () => {
  before(async () => {
    await LoginPage.ensureLoggedIn();   // skips the intro / logs in only if needed
  });

  it('opens the CVD report', async () => {
    await ReportsPage.open();
    await ReportsPage.openReport(REPORTS.cvd);
    await ReportDetailPage.waitForOpen();
    await expect(ReportDetailPage.downloadBtn).toBeDisplayed();
  });
});
```

Tips:

- Start each spec with `LoginPage.ensureLoggedIn()` so it doesn't depend on other specs having run first.
- Put new screen logic in a page object, not in the spec.
- Destructive actions such as cancelling a subscription or removing a dependent need an explicit option, for example `cancel({ confirm: true })`. Only use them on a test account.

## Capturing locators

When a screen is new or has changed, record it again and then update the matching page object.

```bash
npm run appium               # terminal 1: Appium for the capture tool (stop it before npm run wdio)
npm run locators:attach      # terminal 2: start from wherever the app currently is
```

Use the app in the emulator. Each screen is saved to `locators/<Screen>.json`, along with a screenshot in `locators/screenshots/`. In the capture terminal, press `n` to name the current screen and `q` to quit. To let the tool explore the app by itself, run `npm run locators:crawl`. Full details are in `scripts/locator-capture/README.md`.

The app has a single Android activity, so the capture tool names most screens `MainScreenN`. Use the screenshot to see which screen a file is.

## Login flow and OTP

```
[Intro carousel] --Skip--> [Google "Choose a phone number" sheet] --Cancel-->
[Login: +91 + mobile] --Send OTP--> [OTP, please: 6 boxes] --Continue-->
[Notification / Health Connect permissions] --> [Home]
```

- Tests need a test number with a **fixed OTP** on the test or staging backend. Real SMS OTPs aren't automated.
- `LoginPage.login()` handles every step above. `ensureLoggedIn()` only logs in when the app isn't already on Home.
- Sign out is Settings → Logout → **Sign Out**. After signing out, the app shows the login screen again, and Google's number picker may pop up on top of it.

## Troubleshooting

| Problem | Fix |
|---|---|
| `ECONNREFUSED 127.0.0.1:4723` | No Appium running. Run `npm run wdio`, which starts Appium itself, or `npm run appium` for the capture tool |
| `address already in use :4723` | A separate Appium is still running. Stop it before `npm run wdio` |
| `Could not find a connected Android device` | Start the emulator. Check `adb devices` and `DEVICE_UDID` in `.env` |
| `Test user "default" is missing phone and otp` | Fill in `TEST_PHONE` / `TEST_OTP` in `.env` |
| `<Page> did not open within …ms` | The screen changed or an unexpected pop-up is in the way. Re-capture it with `npm run locators:attach` and compare with the page object |
| Login stuck on the OTP screen | Check that `TEST_OTP` is the fixed OTP for `TEST_PHONE` on the backend the app points to |
| Intro or permission pop-ups block a test | Call `OnboardingPage.skipIfShown()` / `SystemDialogs.handleAll()`. `ensureLoggedIn()` already does both |

### Known gaps

- **Premium "Pay" button:** not captured yet, so `PremiumPage.payBtn` is a generic match. Capture the bottom of the Premium screen to fix it.
- **Icon-only buttons** (edit, add, close, calendar) can only be found by their icon character. Asking developers to add `testID` / `accessibilityLabel` to them would make the tests sturdier.
