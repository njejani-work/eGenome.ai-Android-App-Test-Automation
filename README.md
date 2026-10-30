# eGenome.ai – Android App Test Automation

End-to-end tests for the eGenome Android app (`com.egenome.app`, React Native). Tests drive the real app on an emulator or a phone, check every screen's behaviour and layout, and record each step with a screenshot in an offline HTML dashboard.

**Stack:** Node.js · WebdriverIO 10 · Appium 3 · UiAutomator2 · Mocha · page object pattern.

| What | Where |
|---|---|
| 84 automated tests (smoke 8, regression 60, layout 16) + 25 pending | `test/specs/` |
| Page objects for 26 screens | `test/pageobjects/` |
| Layout specs for 16 screens | `test/layout/specs/` |
| Results dashboard | `reports/index.html` |
| Hand-over package for testers | `deliverables/` |

---

## Contents

1. [How it works](#how-it-works)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Running tests](#running-tests)
5. [Running on a real phone](#running-on-a-real-phone)
6. [Test suites](#test-suites)
7. [Configuration (`.env`)](#configuration-env)
8. [Page objects and locators](#page-objects-and-locators)
9. [Writing a new test](#writing-a-new-test)
10. [Layout checks](#layout-checks)
11. [Dashboard](#dashboard)
12. [Capturing locators](#capturing-locators)
13. [Deliverables for testers](#deliverables-for-testers)
14. [Project structure](#project-structure)
15. [Troubleshooting](#troubleshooting)
16. [Known gaps](#known-gaps)

---

## How it works

```
npm run test:smoke
   └─ WebdriverIO + Mocha (wdio.conf.js)       picks the suite, device, timeouts, hooks
        └─ spec file (test/specs/…)             test steps written as page-object calls
             └─ page objects (test/pageobjects) know how to find and use each screen
                  └─ Appium server (port 4723)  turns WebDriver HTTP calls into device commands
                       └─ UiAutomator2 helper   on the phone: taps, types, reads the element tree
                            └─ eGenome app

Every page-object call is recorded as a step (+ screenshot) → reports/runs/<id>/ → reports/index.html
verifyLayout() compares the screen's element tree with test/layout/specs/<Screen>.json
```

Tests never use raw selectors: they call page objects, and only page objects know the selectors. When the app changes, you update one page object, not every test.

## Prerequisites

| Tool | Notes |
|---|---|
| Node.js 20+ | `node -v` |
| Android Studio | Android SDK + an emulator (AVD) |
| Java JDK 17+ | Needed by Appium / adb |
| `ANDROID_HOME` | Points to the Android SDK; `platform-tools` (adb) on `PATH` |
| eGenome app | Staging build installed on the emulator or phone |
| Test account | A test number with a **fixed OTP** on staging |

```bash
adb devices          # should list e.g. "emulator-5554   device"
```

## Setup

```bash
npm install                 # WebdriverIO, Appium, dotenv, xmldom/xpath …
npm run appium:setup        # installs the UiAutomator2 driver (first time only)
cp .env.example .env        # then fill in .env (see Configuration)
```

At minimum set `TEST_PHONE`, `TEST_OTP` and `TEST_USER_NAME`. If your device isn't `emulator-5554`, set `DEVICE_UDID`.

## Running tests

Start the emulator (or connect the phone) first. WebdriverIO starts Appium itself, so **don't run `npm run appium` at the same time** – both use port 4723.

| Command | What it runs |
|---|---|
| `npm run test:smoke` | **Smoke** – ~5 min, every build: login → Home → Reports → one report → Settings → every screen once → sign out |
| `npm run test:regression` | **Regression** – nightly / before release: every P0/P1 flow |
| `npm run test:layout` | **Layout audit** – visits all 16 screens and checks their layout |
| `npm run test:extended` | **Extended** – pending P2 / destructive tests (reported as skipped with their prerequisite) |
| `npm run test:login` | Only the login and session spec |
| `npm run wdio` | Smoke + regression |
| `npx wdio run ./wdio.conf.js --spec ./test/specs/<path>.js` | Any single spec |

> ⚠️ Smoke, `regression/01-login` and the layout audit **clear the app's data** before they start, so they always begin logged out. Don't run them on a phone where you use eGenome with your own account.

Results appear in the console, in the dashboard (`npm run dashboard`) and in `allure-results/` (`npx allure generate allure-results --clean && npx allure open`, needs `allure-commandline`).

## Running on a real phone

1. **Phone settings:** Developer options (tap Build number 7×) → turn on **USB debugging**, **Stay awake**, and set the three animation scales to off.
   - Xiaomi / Redmi / POCO: also **Install via USB** and **USB debugging (Security settings)**.
   - OnePlus / Oppo / Realme: also **Disable permission monitoring**.
   - Android 16: turn off **Advanced Protection** on a test phone (it blocks USB installs).
2. **Connect:** plug in, accept "Allow USB debugging?", then `adb devices` shows its serial (e.g. `388a135b`).
   Wireless (Android 11+): Developer options → Wireless debugging → `adb pair <ip:port>` then `adb connect <ip:port>`.
3. **Point the tests at it** in `.env`: `DEVICE_NAME=MyPhone`, `DEVICE_UDID=<serial or ip:port>`.
4. **First run:** keep the phone unlocked and tap **Install** when Appium installs its two helper apps.

Layout positions are only compared on screens with the baseline's shape (720×1280 emulator). On a taller phone, text, alignment and order are still checked.

## Test suites

Every test title starts with an ID and a priority: `LGN-10 [P0] a wrong OTP keeps the user on the OTP screen`. Suites are defined in `wdio.conf.js`.

| Suite | Folder | Tests |
|---|---|---|
| Smoke | `smoke/` | SMK-01…08 – opens every screen at least once with its layout check. Read-only; ends signed out |
| Regression | `regression/01-login` | LGN-01…15 – intro, phone validation, double-tap Send OTP, resend countdown, wrong/correct OTP, restart, sign-out, permissions denied |
| | `regression/02-home` | HOM-01…10 – cards, routine tabs/slots, task counter, mark done, Monthly Progress, profile switching |
| | `regression/03-reports` | RPT-01…09 – report count, pending report locked, sections, diet plan, biomarkers, download |
| | `regression/04-payments` | PAY-01…08 – paywall, plans, Razorpay open/continue/exit (never pays unless Razorpay test mode) |
| | `regression/05-settings` | SET-01…15 – profile edit + validation, addresses, family, histories, subscription |
| | `regression/06-resilience` | RES-01…03 – offline/online, background/resume, mid-edit |
| Layout | `layout/` | LAY-01…16 – one layout check per screen |
| Extended | `extended/` | 25 pending tests, each with `[needs: …]` |

**What regression changes on the account:** sends the OTP up to 4 times, switches to the dependent and back, marks one routine item done, and edits then restores the profile weight and the dependent's last name. Tests whose data is missing (e.g. no pending payment) **skip** rather than fail.

**Gated tests** (off unless enabled in `.env`):

- `TEST_ALLOW_DATA_CHANGES=true` – SET-15 adds a real address (can't be deleted by the tests).
- `RAZORPAY_TEST_MODE=true` – PAY-07/08 payment success/failure; only with Razorpay test keys and once the card form is captured.

## Configuration (`.env`)

All environment-specific values live in `.env` (copy of `.env.example`, never committed). Specs read them through `test/data/users.js`, never `process.env` directly.

| Variable | Purpose |
|---|---|
| `DEVICE_NAME`, `DEVICE_UDID` | Device to use (serial from `adb devices`) |
| `APPIUM_WAIT_FOR_IDLE_MS` | How long UiAutomator2 waits for the UI to settle (default 100; raise if taps happen too early) |
| `TEST_USER_NAME`, `TEST_COUNTRY_CODE`, `TEST_PHONE`, `TEST_OTP` | Main test account (phone without country code, fixed staging OTP) |
| `TEST_USER2_*` | Optional second account |
| `TEST_WRONG_OTP` | For negative tests (default `000000`) |
| `TEST_DEPENDENT_NAME`, `TEST_COMPLETED_REPORT`, `TEST_PENDING_REPORT`, `TEST_BOOKING_SERVICE` | Data the account is expected to have |
| `TEST_ALLOW_DATA_CHANGES`, `TEST_ADDRESS_SEARCH`, `RAZORPAY_TEST_MODE` | Gated tests (above) |
| `LAYOUT_CHECKS` | `on` (fail on layout differences) · `warn` (report only) · `off` |
| `TEST_ENV`, `DASHBOARD_SCREENSHOTS`, `DASHBOARD_KEEP_RUNS`, `DASHBOARD_LOGCAT`, `DASHBOARD_VERBOSE` | Dashboard settings |

```js
import { getUser, accountData, flags } from '../data/users.js';
const user = getUser();            // { name, countryCode, phone, otp } – fails fast if missing
```

## Page objects and locators

Import everything from `test/pageobjects/index.js` (these exports are recorded as dashboard steps):

```js
import { LoginPage, HomePage, ReportsPage, SettingsPage } from '../pageobjects/index.js';
```

| Page object | Screen | Examples |
|---|---|---|
| `OnboardingPage` | Intro carousel | `skip()`, `skipIfShown()` |
| `LoginPage` | Mobile number | `requestOtp(phone)`, `login(user)`, `ensureLoggedIn()` |
| `OtpPage` | "OTP, please" | `submitOtp(code)`, `getResendSeconds()`, `resendOtp()` |
| `HomePage` | Home tab | `getVital('BMI')`, `markSlot(slot, action)`, `openProfileSwitcher()` |
| `SwitchProfileSheet` | Profile switcher | `switchTo(name)` |
| `MonthlyProgressPage` | Calendar | `getMonth()`, `goToMonth('August 2026')`, `selectDay(15)` |
| `ReportsPage`, `ReportDetailPage` | Reports | `getReportCount()`, `openReport(title)`, `openSection('Diet Plan')` |
| `PremiumPage`, `RazorpayCheckoutPage` | Plan + checkout | `choosePlan('emi')`, `getTotal()`, `exit()` |
| `SettingsPage` | Settings tab | `openProfile()`, `openSignOutDialog()`, `logout()` |
| `ProfilePage`, `EditProfilePage` | Profile | `edit()`, `update({ weight: 60 })` |
| `AddressesPage`, `DependentsPage`, … | Settings sub-screens | `getAddressCount()`, `getMemberCount()` |
| `BottomNav` | Bottom tabs | `openHome()`, `openReports()`, `openSettings()` (recovers if a screen was left open) |
| `SystemDialogs` | Android permission pop-ups | `handleAll({ allow: true })` |

Every page also inherits from `BasePage`: `waitForOpen()`, `isOpen()`, `tap()`, `type()`, `scrollTo()`, `scrollToTop()`, `goBack()`, `hideKeyboard()`, `verifyLayout()`.

**Locator conventions.** The app is React Native, so most elements have no resource-id; their accessibility labels often include icon characters and live data. Use the stable part through the `S` helpers in `BasePage.js`:

```js
S.desc('Send OTP')                          // exact content-desc
S.descContains(', Manage Addresses')        // partial
S.textMatches('[0-9]+ reports? found')      // regex – write [0-9], not \d
S.fieldAfter('FIRST NAME')                  // the input after a caption
```

Order of preference: exact label → partial label → text → caption-relative XPath. Avoid index-based or absolute XPaths. Pattern selectors are sent without backslashes automatically (`\d` → `[0-9]`), because backslashes get doubled on the way to the device.

## Writing a new test

```js
// test/specs/regression/07-example.e2e.js
import { LoginPage, ReportsPage, ReportDetailPage } from '../../pageobjects/index.js';
import { getUser, accountData } from '../../data/users.js';

describe('Example', () => {
  before(async () => {
    await LoginPage.ensureLoggedIn(getUser());
  });

  it('EXM-01 [P1] the completed report opens', async () => {
    await ReportsPage.open();
    await ReportsPage.openReport(accountData.completedReport);
    await ReportDetailPage.waitForOpen();
    await ReportDetailPage.verifyLayout();
    await expect(ReportDetailPage.downloadBtn).toBeExisting();
  });
});
```

- Start from a known state (`ensureLoggedIn()`); don't rely on another spec having run.
- New screen logic goes in a page object, not in the spec.
- Wait for state (`waitForOpen`, `waitUntil`), never `pause` to "be safe".
- Put back anything you change; skip (`this.skip()`) when required data isn't there.
- To record something that isn't a page call as a step: `await step('Clear app data', () => …)`.

## Layout checks

`await HomePage.verifyLayout()` reads the screen's element tree once and compares it with `test/layout/specs/Home.json` – proportionally, not by pixels.

| Element | How it's checked |
|---|---|
| Fixed text and labels | Exact text, state, position and size (as a share of the screen) |
| Live values (prices, dates, counts) | Format only, e.g. `₹[0-9][0-9,.]*`, plus position |
| Account names | `{{TEST_USER_NAME}}`-style tokens, filled from `.env` |
| Bars, rings, images, icons | Present near their place, with the right height |
| Calendar | Every day of the shown month once, under the right weekday, even rows |
| Relations | Order, same row, inside, gaps, alignment, centring, no overlap |
| Tap targets < 48 dp | Warning only |

Positions are compared only when the screen has the baseline's aspect ratio (±3%). Each check saves the screen tree with the run (`reports/runs/<id>/layout/<Screen>.xml`).

| Command | Use |
|---|---|
| `npm run layout:baseline` | Re-record every spec from the live app (after an intended design change) |
| `npm run layout:accept -- latest Home Premium` | Rebuild those specs from what a run saw (`--all` = every screen in the run, `--dry` = preview) |
| `npm run layout:generate` | Create missing specs from the captures in `locators/` |
| `LAYOUT_CHECKS=warn` | Report differences without failing tests |

Specs are `"reviewed": false` until checked against the design. To exclude an element, list it in the spec's `"ignore"` array or edit its `"checks"`.

## Dashboard

Open `reports/index.html` (or `npm run dashboard`). It works offline and **reloads itself when a run finishes** (toggle in the header).

- **Overview:** last run, pass rates, flaky tests, consolidated totals across all kept runs, tests-per-run chart, runs table, per-test history.
- **Run page:** Total / Passed / Failed / Warnings / Skipped boxes, each with its tests, steps and layout-check counts. Tabs filter tests **and** their steps (e.g. Failed shows only the failing step; "Show all steps" expands). Each step has its duration, actions, errors, layout results and a screenshot; click a screenshot to see expected (dashed) vs actual (red) element boxes.
- **Failures** include the stack trace, a screenshot at failure and the tail of logcat. OTPs are masked.

| Command | |
|---|---|
| `npm run dashboard` | Rebuild data and open the dashboard |
| `npm run dashboard:build` | Rebuild only (e.g. after an interrupted run) |

A run stopped with Ctrl+C shows as **Aborted** after 30 minutes. Runs beyond `DASHBOARD_KEEP_RUNS` are deleted.

## Capturing locators

When a screen is new or has changed, capture it again and update its page object.

```bash
npm run appium               # terminal 1 (stop it before running tests)
npm run locators:attach      # terminal 2 – captures from wherever the app is now
```

Navigate the app; each screen is saved to `locators/<Screen>.json` with a screenshot. In the capture terminal press `n` to name the screen, `q` to quit. `npm run locators:crawl` explores by itself. Details: `scripts/locator-capture/README.md`.

## Deliverables for testers

`npm run deliverables` regenerates `deliverables/` from the project (takes ~2 min with many runs):

| Folder | Contents |
|---|---|
| `01-Getting-Started` | Setup guide, README, `.env` template |
| `02-Locators` | Locator catalogue (HTML with screenshots), CSV/JSON, layout specs |
| `03-Page-Objects` | Every page object's actions and elements |
| `04-Test-Cases` | Test-case list with IDs, priorities, prerequisites and latest results |
| `05-Test-Data` | Test users, OTP rules, `.env` variables |
| `06-Execution-Reports` | Dashboard snapshot of the newest runs |
| `07-Known-Issues` | Open issues and recommendations for developers |
| `08-Tools-and-How-To` | Adding a test, fixing a locator, capture guide |

## Project structure

```
.
├── wdio.conf.js                 WebdriverIO config: device, suites, timeouts, dashboard hooks
├── package.json                 dependencies + npm scripts
├── .env.example                 template for .env (the real .env is git-ignored)
├── locators/                    locator captures, one JSON (+ screenshot) per screen
├── test/
│   ├── specs/                   smoke/ regression/ layout/ extended/ (_archive = old specs)
│   ├── pageobjects/             BasePage, index.js, components/, one class per screen
│   ├── data/users.js            test users, account data, flags (from .env)
│   ├── layout/specs/            layout baselines, one JSON per screen
│   └── support/
│       ├── app.js               clear data, restart, background, network on/off
│       ├── layout/              hierarchy.js · spec-builder.js · check.js · index.js
│       └── dashboard/           recorder.js · hooks.js · builder.js · cli.mjs · template/
├── scripts/
│   ├── locator-capture/         capture tool
│   ├── layout/                  generate.mjs · accept.mjs
│   ├── deliverables/            build.mjs + docs/ (hand-written guides)
│   └── run-with-env.mjs         sets env vars for an npm script (Windows-friendly)
├── reports/                     runs + dashboard (generated, git-ignored)
└── deliverables/                tester package (generated, git-ignored)
```

## Troubleshooting

| Problem | Fix |
|---|---|
| `ECONNREFUSED 127.0.0.1:4723` | Appium isn't running – use the `npm run test:*` scripts (they start it) |
| `address already in use :4723` | A separate `npm run appium` is still running – stop it |
| `Could not find a connected Android device` | Start the emulator / connect the phone; check `adb devices` and `DEVICE_UDID` |
| Phone: `adbExec … install … timed out` | Unlock the phone and tap Install; enable the OEM settings in [Running on a real phone](#running-on-a-real-phone) |
| `Test user "default" is missing phone and otp` | Fill `TEST_PHONE` / `TEST_OTP` in `.env` |
| `<Page> did not open within …ms` | The screen changed or a pop-up is in the way – re-capture with `npm run locators:attach` |
| Every command on a screen takes 10 s+ | The screen animates constantly; keep `APPIUM_WAIT_FOR_IDLE_MS` low (default 100) |
| `Layout "X": n checks failed` but the screenshot looks right | The baseline is out of date – `npm run layout:accept -- latest X` |
| Login stuck on the OTP screen | Check the dashboard's first failed step; confirm `TEST_OTP` is the fixed OTP for `TEST_PHONE` on that backend |
| Dashboard shows an old run as Running | It was interrupted; run `npm run dashboard:build` (it becomes Aborted after 30 min) |

## Known gaps

- **Razorpay card form** not captured → payment success/failure tests (PAY-07/08) skip.
- **Date-of-birth picker** in Add Dependent not captured → saving a new dependent is still pending (EXT-19).
- **Icon-only buttons** are found by icon character; asking developers for `testID` / `accessibilityLabel` would make them stable.
- **Layout specs** are unreviewed and recorded on a 720×1280 emulator; record a separate baseline per device shape if needed.
- **Tap targets** on the login country picker, phone field and several icon buttons are under 48 dp (reported as warnings).
