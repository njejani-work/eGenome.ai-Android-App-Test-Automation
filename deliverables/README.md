# eGenome.ai Android App: Test Automation Hand-over

Package for the QA / testing team. Generated 2026-10-28 12:31 by `npm run deliverables`. Re-run that command whenever locators, page objects or tests change.

- **26** screens and **214** locators documented, 14 of them flagged for attention
- **173** page-object actions
- **84** automated test cases (+25 pending, listed with their prerequisites)
- **5** recent run(s) in the dashboard snapshot. Latest: `20261028-173144` - passed, 8/8 passed

## What's in this folder

| Section | Open this | Use it to |
|---|---|---|
| **01-Getting-Started** | `SETUP-GUIDE.md` | Install the tools, connect the emulator and run the tests for the first time |
| **02-Locators** | `Locator-Catalog.html` (in a browser), `locators.csv` (in Excel), `Layout-Specs.md` | Look up every screen's elements and selectors with a screenshot; review the per-screen layout specs |
| **03-Page-Objects** | `Page-Object-Reference.md` | See which actions each screen supports (`LoginPage.requestOtp(...)` and so on) |
| **04-Test-Cases** | `Test-Cases.csv` / `Test-Cases.md` | Review the test cases by suite (smoke / regression / layout / extended), with priority, layout checks, prerequisites, steps and latest results |
| **05-Test-Data** | `TEST-DATA.md` | Set up the test phone numbers and OTPs (`.env`) |
| **06-Execution-Reports** | `dashboard/index.html`, `Latest-Run-Summary.md` | Look through recent runs step by step, with screenshots and error logs |
| **07-Known-Issues** | `KNOWN-ISSUES.md` | Check known gaps, fragile locators and recommendations for developers |
| **08-Tools-and-How-To** | `HOW-TO.md`, `LOCATOR-CAPTURE-GUIDE.md` | Add a test, fix a locator, or capture a new screen |

## Hand-over checklist

Tick these off with the team taking over:

- [ ] Access to the project repository / folder (`eGenome.ai`)
- [ ] Node.js 20+, Android Studio (with an emulator) and JDK 17+ installed. See `01-Getting-Started/SETUP-GUIDE.md`
- [ ] The eGenome **staging** app build is installed on the emulator (`com.egenome.app`)
- [ ] A **test phone number with a fixed OTP** on staging, recorded in `.env` (never committed). See `05-Test-Data`
- [ ] `npm install` and `npm run appium:setup` completed
- [ ] `npm run test:smoke` passes on the tester's machine
- [ ] Layout specs reviewed with design and marked `"reviewed": true` (`02-Locators/Layout-Specs.md`)
- [ ] The tester can open the dashboard (`npm run dashboard`) and find the step screenshots for a run
- [ ] Known issues reviewed (`07-Known-Issues`)

## Day-to-day commands

| Command | What it does |
|---|---|
| `npm run test:smoke` | Smoke suite (~5 min, every build) |
| `npm run test:regression` | Regression suite (nightly / before release) |
| `npm run test:layout` | Layout audit of every screen |
| `npm run wdio` | Smoke + regression |
| `npm run dashboard` | Rebuild and open the results dashboard (`reports/index.html`) |
| `npm run locators:attach` | Capture locators for the screen currently showing in the emulator |
| `npm run deliverables` | Regenerate this folder |

## Contacts

| Role | Name | Contact |
|---|---|---|
| Automation owner | Nishant | nishant@egenome.ai |
| QA lead | _to fill in_ | |
| App developer contact (test IDs, test OTP) | _to fill in_ | |
