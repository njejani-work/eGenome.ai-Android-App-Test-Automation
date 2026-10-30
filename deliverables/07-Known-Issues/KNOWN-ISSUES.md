# Known Issues and Recommendations

## Open items

| # | Area | Issue | Impact | Action |
|---|---|---|---|---|
| 1 | Payments | The **Pay / Subscribe button on the Premium screen** hasn't been captured. `PremiumPage.payBtn` uses a generic pattern. | Payment-flow tests may not find the button | Scroll to the bottom of the Premium screen, run `npm run locators:attach`, and update `PremiumPage.js` |
| 2 | Locators | **Icon-only buttons** (edit profile, add address/dependent, close sheet, calendar, back on OTP) can only be found by their icon-font character, e.g. `\uEB94` | Break if the icon set changes | Ask developers to add `testID` / `accessibilityLabel` (see recommendations) |
| 3 | Locators | Calendar ids come from a React Native testID with an `undefined` prefix (`undefined.header.title`) | They match by suffix, so they'll survive the prefix being fixed | Mention it to developers. No test change needed |
| 4 | Capture tool | The app is a **single Android activity**, so the capture tool names most screens `MainScreenN`, and long screens are split across several files | Raw capture files are hard to navigate | Use the Locator Catalogue, which maps page objects to screens. Rename captures with `node scripts/locator-capture/capture.mjs rename` |
| 5 | Test data | Tests rely on a staging account with existing reports, a dependent and an address | Navigation tests fail on an empty account | See `05-Test-Data/TEST-DATA.md` |
| 6 | Suites | Smoke, the login regression spec and the layout audit **clear the app's data** to start logged out | The emulator is logged out after every run | Expected. Other specs log in again automatically |
| 7 | OTP | Real SMS OTP isn't automated | A fixed staging OTP is required | Backend team to provide a test number and fixed OTP on staging only |
| 8 | Layout | The 16 layout specs were generated from the current app, not from a design spec, and are **unreviewed** | They catch changes, not deviations from the design | Review each spec with design (`02-Locators/Layout-Specs.md`), then set `"reviewed": true` |
| 9 | Accessibility | Layout checks warn that some tap targets are below Android's 48dp: the login **country-code picker** and **phone input** (about 22dp and 40dp high at 320 dpi - the dashboard shows the exact value for your emulator), plus some icon buttons | Harder to tap; accessibility | Report to developers (warnings don't fail tests) |
| 10 | Layout | Specs were captured on a 720×1280 emulator. On other screen shapes absolute positions are skipped and only relations are checked | Less strict on other devices | Record a second baseline per device profile if needed |
| 11 | Suites | Smoke and the layout audit send the test number's OTP once each, regression up to 4 times (incl. one Resend) | May hit OTP rate limits | Exempt the test number from rate limiting on staging |
| 12 | Payments | The **Razorpay card-entry screens** haven't been captured, and staging must use Razorpay test keys | PAY-07/08 (successful / failed payment) skip | Set `RAZORPAY_TEST_MODE=true` on a test-mode build, open checkout, run `npm run locators:attach` on the card form, then implement the two tests |
| 13 | Family | The **date-of-birth picker** in Add Dependent hasn't been captured | Saving a new dependent (EXT-19) stays pending; SET-13 only checks the form opens | Capture the picker and use a disposable account |
| 14 | Addresses | Addresses can't be deleted by the tests | SET-15 skips unless `TEST_ALLOW_DATA_CHANGES=true` | Enable only on a disposable account, and clean up manually |

## Recommendations for the app developers

1. **Add `testID` to interactive elements**, and enable `testIDsAsResourceId` / `importantForAccessibility`, so locators become stable resource-ids instead of labels and icons. Priority screens: Login, OTP, bottom tabs, Settings menu, Premium.
2. **Keep accessibility labels free of icon characters and live data**, or add a separate stable `testID`. For example, the Settings rows are labelled `"<icon>, Manage Addresses, <icon>"`.
3. **Fix the `undefined.` prefix** on the calendar testIDs.
4. Provide a **debug-only deep link or API to log in** (token injection), so tests other than the login test don't need to go through OTP.

## Recommendations for the test team

- Run `npm run wdio` against every new staging build and attach the dashboard snapshot (`06-Execution-Reports`) to the build ticket.
- When a test fails, open the failed step's screenshot first: most failures are a changed screen or an unexpected pop-up.
- Re-capture any screen whose design changes, update its page object, then run `npm run deliverables`.
