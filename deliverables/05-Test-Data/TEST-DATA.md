# Test Data

## Where test data lives

| File | Committed? | Contains |
|---|---|---|
| `.env` | **No** (git-ignored) | Real values: device id, test phone numbers, OTPs |
| `.env.example` (`env.example.txt` here) | Yes | The template with placeholder values |
| `test/data/users.js` | Yes | Maps `.env` values to named users (`default`, `secondary`, `wrongOtp`) |

Specs never contain phone numbers or OTPs. They call `getUser()`:

```js
import { getUser } from '../data/users.js';
const user = getUser();           // { name, countryCode, phone, otp }
```

## Variables

| Variable | Example | Notes |
|---|---|---|
| `DEVICE_UDID` / `DEVICE_NAME` | `emulator-5554` | From `adb devices` |
| `TEST_USER_NAME` | `John Doe` | Must match the name shown in the app after login (used in a check) |
| `TEST_COUNTRY_CODE` | `+91` | |
| `TEST_PHONE` | `9999999999` | 10 digits, no country code |
| `TEST_OTP` | `123456` | **The fixed OTP that staging accepts for `TEST_PHONE`** |
| `TEST_USER2_NAME` / `TEST_USER2_PHONE` / `TEST_USER2_OTP` | | Optional second account |
| `TEST_WRONG_OTP` | `000000` | Used by LGN-07 (wrong OTP is rejected) |
| `TEST_DEPENDENT_NAME` | `Johny Mark` | Dependent the profile-switching and Family Network tests use |
| `TEST_COMPLETED_REPORT` | `CVD Assessment Health Report` | A completed report on the account |
| `TEST_PENDING_REPORT` | `Diabetes Risk Assessment Health Report` | A report awaiting payment (tests skip if absent) |
| `TEST_BOOKING_SERVICE` | `Sample Collection` | A booking in Booking History |
| `TEST_ALLOW_DATA_CHANGES` | `false` | `true` lets SET-15 add a real address (not cleaned up) |
| `TEST_ADDRESS_SEARCH` | `Gurugram` | Search term SET-15 types in the address search |
| `RAZORPAY_TEST_MODE` | `false` | `true` only when staging uses Razorpay test keys; enables PAY-07/08 |
| `LAYOUT_CHECKS` | `on` | `on` / `warn` / `off` for layout checks |
| `TEST_ENV` | `staging` | Label shown on the dashboard |
| `DASHBOARD_SCREENSHOTS` | `all` | `all`, `failures` or `none` |
| `DASHBOARD_KEEP_RUNS` | `30` | How many runs the dashboard keeps |
| `DASHBOARD_LOGCAT` | `true` | Attach the Android device log to failed tests |

## Getting a test number with a fixed OTP

Automated tests can't read a real SMS. Ask the backend team to set up, **on staging only**, a test phone number (or a whitelist of them) that always accepts a fixed OTP. Put that number and OTP in `.env`.

Keep these rules:

- Never use real customer numbers.
- Never commit `.env`, and don't paste OTPs into tickets or chat.
- The fixed OTP must **not** work in production. Ask for a production check that rejects it.

## Test account state

The login test **clears the app's data** on the emulator before it runs, so it always starts logged out. Other specs call `LoginPage.ensureLoggedIn()`, which logs in only when needed.

The default test account (John Doe) is expected to have:

- at least one report on the Report tab (one *completed* CVD report is used by the navigation test)
- a spouse dependent ("Johny Mark") and at least one saved address

If the account is reset, re-create that data or adjust the tests.
