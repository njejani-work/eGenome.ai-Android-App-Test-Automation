# Test Cases

Generated 2026-10-28 12:31 from `test/specs/` and the latest 9 run(s) in `reports/`. Open `Test-Cases.csv` in Excel for a sortable sheet.

| Suite | Automated | Pending | With layout checks | Command |
|---|---|---|---|---|
| smoke | 8 | 0 | 7 | `npm run test:smoke` |
| regression | 60 | 0 | 16 | `npm run test:regression` |
| layout | 16 | 0 | 16 | `npm run test:layout` |
| extended | 0 | 25 | 0 | `npm run test:extended` |

## Smoke

| ID | P | Area | Test case | Layout | Status |
|---|---|---|---|---|---|
| SMK-01 | P0 | Smoke | intro and login screen | Onboarding, Login | passed (20261028-173144) |
| SMK-02 | P0 | Smoke | login with mobile number and OTP | Otp | passed (20261028-173144) |
| SMK-03 | P0 | Smoke | Home loads, with the profile switcher and Monthly Progress | Home, SwitchProfile, MonthlyProgress | passed (20261028-173144) |
| SMK-04 | P0 | Smoke | Premium plan screen opens from the payment banner | Premium | passed (20261028-173144) |
| SMK-05 | P0 | Smoke | Report tab lists reports and one report opens | Reports, ReportDetail | passed (20261028-173144) |
| SMK-06 | P0 | Smoke | Settings, Profile and Edit Profile open | Settings, Profile, EditProfile | passed (20261028-173144) |
| SMK-07 | P1 | Smoke | every Settings sub-screen opens |  | passed (20261028-173144) |
| SMK-08 | P0 | Smoke | sign out returns to the login screen | SignOutDialog | passed (20261028-173144) |

## Regression

| ID | P | Area | Test case | Layout | Status |
|---|---|---|---|---|---|
| LGN-01 | P0 | Login and session | intro is shown on first launch and can be skipped | Onboarding | not run yet |
| LGN-02 | P0 | Login and session | login screen shows the expected text and layout | Login | not run yet |
| LGN-03 | P1 | Login and session | an empty phone number does not send an OTP |  | not run yet |
| LGN-04 | P1 | Login and session | an incomplete phone number does not send an OTP |  | not run yet |
| LGN-05 | P1 | Login and session | the phone field does not accept letters or symbols |  | not run yet |
| LGN-06 | P0 | Login and session | a valid number opens one OTP screen for that number (Send OTP tapped twice) | Otp | not run yet |
| LGN-07 | P1 | Login and session | Resend is disabled while its countdown runs |  | not run yet |
| LGN-08 | P1 | Login and session | back from the OTP screen returns to the login screen |  | not run yet |
| LGN-09 | P1 | Login and session | Resend becomes available when the countdown ends and restarts it |  | not run yet |
| LGN-10 | P0 | Login and session | a wrong OTP keeps the user on the OTP screen |  | not run yet |
| LGN-11 | P0 | Login and session | the correct OTP logs in and lands on Home |  | not run yet |
| LGN-12 | P1 | Login and session | the session survives an app restart |  | not run yet |
| LGN-13 | P1 | Login and session | cancelling sign-out keeps the user signed in | SignOutDialog | not run yet |
| LGN-14 | P0 | Login and session | signing out returns to the login screen and Back does not return to the app |  | not run yet |
| LGN-15 | P1 | Login with permissions denied | denying notification / Health Connect permissions still lets the user in and use the app |  | not run yet |
| HOM-01 | P0 | Home | Home shows the profile, health cards and tabs in the expected layout | Home | not run yet |
| HOM-02 | P1 | Home | weight and BMI cards show values and ranges |  | not run yet |
| HOM-03 | P1 | Home | routine tabs Meals / Exercise / Supplements can be selected |  | not run yet |
| HOM-04 | P1 | Home | expanding a routine slot shows its actions |  | not run yet |
| HOM-05 | P1 | Home | "+N more items" expands the current routine card |  | not run yet |
| HOM-06 | P1 | Home | the daily task counter is consistent |  | not run yet |
| HOM-07 | P1 | Home | marking a routine item as done updates today's progress |  | not run yet |
| HOM-08 | P1 | Home | Monthly Progress opens on the current month and moves between months | MonthlyProgress | not run yet |
| HOM-09 | P1 | Home | Monthly Progress crosses the year boundary (January → December) and a past day opens |  | not run yet |
| HOM-10 | P1 | Home | profile switcher lists profiles and switches to a dependent and back | SwitchProfile | not run yet |
| RPT-01 | P0 | Reports | Report tab shows the expected layout and at least one report | Reports | not run yet |
| RPT-02 | P0 | Reports | the "N reports found" count matches the report cards |  | not run yet |
| RPT-03 | P1 | Reports | a payment-pending report offers Complete Payment and stays locked |  | not run yet |
| RPT-04 | P0 | Reports | a completed report opens with its summary | ReportDetail | not run yet |
| RPT-05 | P1 | Reports | every section tab of the report opens |  | not run yet |
| RPT-06 | P1 | Reports | the diet plan shows a calorie target for each day |  | not run yet |
| RPT-07 | P1 | Reports | biomarker counters add up (Total = Normal + Warning + Critical) |  | not run yet |
| RPT-08 | P1 | Reports | biomarker rows show a value, unit and reference range |  | not run yet |
| RPT-09 | P1 | Reports | Download report works and returns to the report |  | not run yet |
| PAY-01 | P0 | Payments | the payment banner opens the Premium plan screen with prices | Premium | not run yet |
| PAY-02 | P1 | Payments | payment methods are shown |  | not run yet |
| PAY-03 | P1 | Payments | both plan options can be selected |  | not run yet |
| PAY-04 | P0 | Payments | Razorpay checkout opens with the plan amount |  | not run yet |
| PAY-05 | P1 | Payments | "Continue to payment" on the exit dialog keeps the user in checkout |  | not run yet |
| PAY-06 | P1 | Payments | leaving checkout returns to the app without paying; the report stays locked |  | not run yet |
| PAY-07 | P1 | Payments | a successful test-mode payment unlocks the report and is listed as Captured _(needs: RAZORPAY_TEST_MODE=true + Razorpay card-form capture)_ |  | not run yet |
| PAY-08 | P1 | Payments | a failed test-mode payment shows an error and can be retried _(needs: RAZORPAY_TEST_MODE=true + Razorpay card-form capture)_ |  | not run yet |
| SET-01 | P1 | Settings and account | Settings shows its layout and every menu entry | Settings | not run yet |
| SET-02 | P1 | Settings and account | Profile shows the account holder details | Profile | not run yet |
| SET-03 | P1 | Settings and account | Edit Profile shows read-only date of birth and the phone number | EditProfile | not run yet |
| SET-04 | P1 | Settings and account | a profile change is saved and shown on Profile (weight +1 kg, then restored) |  | not run yet |
| SET-05 | P1 | Settings and account | Manage Addresses lists a primary, serviceable address | Addresses | not run yet |
| SET-06 | P1 | Settings and account | Family Network shows the dependent and opens their details | Dependents | not run yet |
| SET-07 | P1 | Settings and account | Transaction History filters can all be applied | TransactionHistory | not run yet |
| SET-08 | P1 | Settings and account | Booking History lists bookings with their details |  | not run yet |
| SET-09 | P1 | Settings and account | Subscription shows the plan; cancellation can be started and abandoned |  | not run yet |
| SET-10 | P1 | Settings and account | Edit Profile rejects an empty first name and an invalid e-mail (nothing saved) |  | not run yet |
| SET-11 | P1 | Settings and account | Family Network: the Members count matches the member cards |  | not run yet |
| SET-12 | P1 | Settings and account | a dependent's change is saved and shown (last name edited, then restored) |  | not run yet |
| SET-13 | P1 | Settings and account | the add-dependent form opens (saving one is EXT-19: needs a disposable account and the date-of-birth picker capture) |  | not run yet |
| SET-14 | P1 | Settings and account | the add-address form will not save without required fields |  | not run yet |
| SET-15 | P1 | Settings and account | a new address can be added and is serviceable _(needs: TEST_ALLOW_DATA_CHANGES=true - addresses can't be deleted by the tests)_ |  | not run yet |
| RES-01 | P1 | Resilience | the app survives losing the network and recovers when it returns |  | not run yet |
| RES-02 | P1 | Resilience | backgrounding and resuming keeps the user on the same screen |  | not run yet |
| RES-03 | P1 | Resilience | backgrounding mid-edit keeps the unsaved form (then discarded) |  | not run yet |

## Layout

| ID | P | Area | Test case | Layout | Status |
|---|---|---|---|---|---|
| LAY-01 |  | Before login | Onboarding | Onboarding | passed (20261028-162953) |
| LAY-02 |  | Before login | Login | Login | passed (20261028-162953) |
| LAY-03 |  | Before login | OTP | Otp | passed (20261028-162953) |
| LAY-04 |  | Signed in | Home | Home | passed (20261028-162953) |
| LAY-05 |  | Signed in | Switch Profile sheet | SwitchProfile | passed (20261028-162953) |
| LAY-06 |  | Signed in | Monthly Progress | MonthlyProgress | passed (20261028-162953) |
| LAY-07 |  | Signed in | Premium | Premium | passed (20261028-162953) |
| LAY-08 |  | Signed in | Reports | Reports | passed (20261028-162953) |
| LAY-09 |  | Signed in | Report details | ReportDetail | failed (20261028-162953) |
| LAY-10 |  | Signed in | Settings | Settings | passed (20261028-162953) |
| LAY-11 |  | Signed in | Sign Out dialog | SignOutDialog | passed (20261028-162953) |
| LAY-12 |  | Signed in | Profile | Profile | passed (20261028-162953) |
| LAY-13 |  | Signed in | Edit Profile | EditProfile | passed (20261028-162953) |
| LAY-14 |  | Signed in | Manage Addresses | Addresses | failed (20261028-162953) |
| LAY-15 |  | Signed in | Family Network | Dependents | passed (20261028-162953) |
| LAY-16 |  | Signed in | Transaction History | TransactionHistory | passed (20261028-162953) |

## Extended

| ID | P | Area | Test case | Layout | Status |
|---|---|---|---|---|---|
| EXT-03 | P2 | Extended · Payments | payment banner disappears from Home after payment _(needs: Razorpay test mode)_ |  | pending |
| EXT-04 | P2 | Extended · Login extras | OTP via WhatsApp starts the alternate flow _(needs: WhatsApp OTP enabled for the test number)_ |  | pending |
| EXT-05 | P2 | Extended · Login extras | picking a number from Google's phone picker fills the field _(needs: SIM/number on the emulator)_ |  | pending |
| EXT-06 | P2 | Extended · Login extras | swiping through the whole intro reaches login _(needs: capture of every intro slide)_ |  | pending |
| EXT-07 | P1 | Extended · Login extras | resend OTP invalidates the previous code _(needs: staging that issues real/different OTPs)_ |  | pending |
| EXT-08 | P2 | Extended · Login extras | switching accounts leaves no data from the previous user _(needs: TEST_USER2_* in .env)_ |  | pending |
| EXT-10 | P2 | Extended · Home and reports | marking a routine item updates progress and persists _(needs: disposable account or a way to reset the day)_ |  | pending |
| EXT-11 | P2 | Extended · Home and reports | View Full Journey / Path to Health Insights opens _(needs: capture of the journey screen)_ |  | pending |
| EXT-12 | P2 | Extended · Home and reports | Schedule Your Call opens the booking flow (no booking made) _(needs: capture of the booking screens)_ |  | pending |
| EXT-13 | P2 | Extended · Home and reports | every sample report opens _(needs: capture of a sample report screen)_ |  | pending |
| EXT-15 | P2 | Extended · Home and reports | RCA conditions expand to key markers and deficiencies _(needs: capture of an expanded RCA card)_ |  | pending |
| EXT-17 | P2 | Extended · Settings (changes account data - use a disposable account) | edit / delete an address and change the primary one _(needs: capture of the card menu)_ |  | pending |
| EXT-18 | P2 | Extended · Settings (changes account data - use a disposable account) | non-serviceable pincode is flagged _(needs: a known non-serviceable pincode)_ |  | pending |
| EXT-19 | P1 | Extended · Settings (changes account data - use a disposable account) | add a dependent - appears in Family Network and in Switch Profile _(needs: disposable account)_ |  | pending |
| EXT-20 | P2 | Extended · Settings (changes account data - use a disposable account) | remove a dependent _(needs: disposable dependent + remove-confirmation capture)_ |  | pending |
| EXT-22 | P2 | Extended · Settings (changes account data - use a disposable account) | add and verify an email address _(needs: test mailbox)_ |  | pending |
| EXT-23 | P2 | Extended · Settings (changes account data - use a disposable account) | change profile photo / cancel the picker _(needs: test image on the emulator)_ |  | pending |
| EXT-24 | P2 | Extended · Settings (changes account data - use a disposable account) | theme Light / Dark / System applies and persists _(needs: dark-theme layout specs)_ |  | pending |
| EXT-25 | P1 | Extended · Settings (changes account data - use a disposable account) | cancel subscription (confirm) _(needs: disposable subscribed account)_ |  | pending |
| EXT-26 | P2 | Extended · Settings (changes account data - use a disposable account) | Help & Support opens the dialer and e-mail _(needs: decision on leaving the app in tests)_ |  | pending |
| EXT-27 | P2 | Extended · Device and accessibility | largest system font size does not break key screens _(needs: layout specs at font scale 1.3)_ |  | pending |
| EXT-28 | P2 | Extended · Device and accessibility | rotation / second screen size _(needs: second emulator profile + its layout baseline)_ |  | pending |
| EXT-29 | P2 | Extended · Device and accessibility | Android Back behaves consistently on every screen _(needs: expected back behaviour per screen)_ |  | pending |
| EXT-30 | P2 | Extended · Device and accessibility | notification / deep links open the right screen _(needs: list of deep links)_ |  | pending |
| EXT-31 | P2 | Extended · Device and accessibility | accessibility audit: every tappable element has a label and ≥48dp target _(needs: testIDs from developers)_ |  | pending |

## Details

### SMK-01 - intro and login screen

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 31)
- **Expected result:** Intro and login screen
- **Layout checks:** Onboarding, Login
- **Last status:** passed (run 20261028-173144, 33.8 s)

**Steps (as automated, from the latest run):**

1. Onboarding · Wait for open  
2. Onboarding · Verify layout  
3. Onboarding · Skip  
4. Login · Open  
5. Login · Verify layout

### SMK-02 - login with mobile number and OTP

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 39)
- **Expected result:** Login with mobile number and OTP
- **Layout checks:** Otp
- **Last status:** passed (run 20261028-173144, 39.4 s)

**Steps (as automated, from the latest run):**

1. Login · Request OTP  
2. Otp · Verify layout  
3. Otp · Submit OTP  
4. System Dialogs · Handle all  
5. Home · Wait for open

### SMK-03 - Home loads, with the profile switcher and Monthly Progress

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 47)
- **Expected result:** Home loads, with the profile switcher and Monthly Progress
- **Layout checks:** Home, SwitchProfile, MonthlyProgress
- **Last status:** passed (run 20261028-173144, 24.6 s)

**Steps (as automated, from the latest run):**

1. Home · Open  
2. Home · Verify layout  
3. Check value is existing  
4. Home · Open profile switcher  
5. Switch Profile · Wait for open  
6. Switch Profile · Verify layout  
7. Switch Profile · Close  
8. Home · Open monthly progress  
9. Monthly Progress · Wait for open  
10. Monthly Progress · Verify layout  
11. Monthly Progress · Close  
12. Home · Wait for open

### SMK-04 - Premium plan screen opens from the payment banner

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 64)
- **Expected result:** Premium plan screen opens from the payment banner
- **Layout checks:** Premium
- **Last status:** passed (run 20261028-173144, 11.6 s)

**Steps (as automated, from the latest run):**

1. Home · Scroll to top  
2. Home · Is payment pending  
3. Home · Tap complete payment  
4. Premium · Wait for open  
5. Premium · Verify layout  
6. Premium · Close  
7. Home · Wait for open

### SMK-05 - Report tab lists reports and one report opens

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 74)
- **Expected result:** Report tab lists reports and one report opens
- **Layout checks:** Reports, ReportDetail
- **Last status:** passed (run 20261028-173144, 18.0 s)

**Steps (as automated, from the latest run):**

1. Reports · Open  
2. Reports · Verify layout  
3. Reports · Get report count  
4. Reports · Open report  
5. Report Detail · Wait for open  
6. Report Detail · Verify layout  
7. Report Detail · Close  
8. Reports · Wait for open

### SMK-06 - Settings, Profile and Edit Profile open

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 85)
- **Expected result:** Settings, Profile and Edit Profile open
- **Layout checks:** Settings, Profile, EditProfile
- **Last status:** passed (run 20261028-173144, 22.9 s)

**Steps (as automated, from the latest run):**

1. Settings · Open  
2. Settings · Verify layout  
3. Settings · Open profile  
4. Profile · Wait for open  
5. Profile · Verify layout  
6. Profile · Edit  
7. Edit Profile · Wait for open  
8. Edit Profile · Verify layout  
9. Edit Profile · Close  
10. Profile · Wait for open  
11. Profile · Close  
12. Settings · Wait for open

### SMK-07 - every Settings sub-screen opens

- **Suite:** smoke · Smoke · P1
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 101)
- **Expected result:** Every Settings sub-screen opens
- **Last status:** passed (run 20261028-173144, 39.5 s)

**Steps (as automated, from the latest run):**

1. Settings · Open  
2. Settings · Open manage addresses  
3. Addresses · Wait for open  
4. Addresses · Verify layout  
5. Addresses · Go back  
6. Settings · Wait for open  
7. Settings · Open manage dependents  
8. Dependents · Wait for open  
9. Dependents · Verify layout  
10. Dependents · Go back  
11. Settings · Wait for open  
12. Settings · Open transaction history  
13. Transaction History · Wait for open  
14. Transaction History · Verify layout  
15. Transaction History · Go back  
16. Settings · Wait for open  
17. Settings · Open booking history  
18. Booking History · Wait for open  
19. Booking History · Go back  
20. Settings · Wait for open  
21. Settings · Open subscription management  
22. Subscription · Wait for open  
23. Subscription · Go back  
24. Settings · Wait for open  
25. Settings · Open help support  
26. Help Support · Wait for open  
27. Help Support · Go back  
28. Settings · Wait for open

### SMK-08 - sign out returns to the login screen

- **Suite:** smoke · Smoke · P0
- **Spec:** `test/specs/smoke/smoke.e2e.js` (line 111)
- **Expected result:** Sign out returns to the login screen
- **Layout checks:** SignOutDialog
- **Last status:** passed (run 20261028-173144, 13.6 s)

**Steps (as automated, from the latest run):**

1. Settings · Open  
2. Settings · Open sign out dialog  
3. Settings · Verify sign out layout  
4. Settings · Confirm sign out  
5. Login · Open  
6. Check LoginPage.sendOtpBtn is displayed

### LGN-01 - intro is shown on first launch and can be skipped

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 15)
- **Expected result:** Intro is shown on first launch and can be skipped
- **Layout checks:** Onboarding
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-02 - login screen shows the expected text and layout

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 21)
- **Expected result:** Login screen shows the expected text and layout
- **Layout checks:** Login
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-03 - an empty phone number does not send an OTP

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 28)
- **Expected result:** An empty phone number does not send an OTP
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-04 - an incomplete phone number does not send an OTP

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 35)
- **Expected result:** An incomplete phone number does not send an OTP
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-05 - the phone field does not accept letters or symbols

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 42)
- **Expected result:** The phone field does not accept letters or symbols
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-06 - a valid number opens one OTP screen for that number (Send OTP tapped twice)

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 47)
- **Expected result:** A valid number opens one OTP screen for that number (Send OTP tapped twice)
- **Layout checks:** Otp
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-07 - Resend is disabled while its countdown runs

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 55)
- **Expected result:** Resend is disabled while its countdown runs
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-08 - back from the OTP screen returns to the login screen

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 62)
- **Expected result:** Back from the OTP screen returns to the login screen
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-09 - Resend becomes available when the countdown ends and restarts it

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 68)
- **Expected result:** Resend becomes available when the countdown ends and restarts it
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-10 - a wrong OTP keeps the user on the OTP screen

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 75)
- **Expected result:** A wrong OTP keeps the user on the OTP screen
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-11 - the correct OTP logs in and lands on Home

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 81)
- **Expected result:** The correct OTP logs in and lands on Home
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-12 - the session survives an app restart

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 88)
- **Expected result:** The session survives an app restart
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-13 - cancelling sign-out keeps the user signed in

- **Suite:** regression · Login and session · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 95)
- **Expected result:** Cancelling sign-out keeps the user signed in
- **Layout checks:** SignOutDialog
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-14 - signing out returns to the login screen and Back does not return to the app

- **Suite:** regression · Login and session · P0
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 103)
- **Expected result:** Signing out returns to the login screen and Back does not return to the app
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LGN-15 - denying notification / Health Connect permissions still lets the user in and use the app

- **Suite:** regression · Login with permissions denied · P1
- **Spec:** `test/specs/regression/01-login.e2e.js` (line 121)
- **Expected result:** Denying notification / Health Connect permissions still lets the user in and use the app
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-01 - Home shows the profile, health cards and tabs in the expected layout

- **Suite:** regression · Home · P0
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 17)
- **Expected result:** Home shows the profile, health cards and tabs in the expected layout
- **Layout checks:** Home
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-02 - weight and BMI cards show values and ranges

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 23)
- **Expected result:** Weight and BMI cards show values and ranges
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-03 - routine tabs Meals / Exercise / Supplements can be selected

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 28)
- **Expected result:** Routine tabs Meals / Exercise / Supplements can be selected
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-04 - expanding a routine slot shows its actions

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 34)
- **Expected result:** Expanding a routine slot shows its actions
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-05 - "+N more items" expands the current routine card

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 40)
- **Expected result:** "+N more items" expands the current routine card
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-06 - the daily task counter is consistent

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 48)
- **Expected result:** The daily task counter is consistent
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-07 - marking a routine item as done updates today's progress

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 54)
- **Expected result:** Marking a routine item as done updates today's progress
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-08 - Monthly Progress opens on the current month and moves between months

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 71)
- **Expected result:** Monthly Progress opens on the current month and moves between months
- **Layout checks:** MonthlyProgress
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-09 - Monthly Progress crosses the year boundary (January → December) and a past day opens

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 84)
- **Expected result:** Monthly Progress crosses the year boundary (January → December) and a past day opens
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### HOM-10 - profile switcher lists profiles and switches to a dependent and back

- **Suite:** regression · Home · P1
- **Spec:** `test/specs/regression/02-home.e2e.js` (line 96)
- **Expected result:** Profile switcher lists profiles and switches to a dependent and back
- **Layout checks:** SwitchProfile
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-01 - Report tab shows the expected layout and at least one report

- **Suite:** regression · Reports · P0
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 11)
- **Expected result:** Report tab shows the expected layout and at least one report
- **Layout checks:** Reports
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-02 - the "N reports found" count matches the report cards

- **Suite:** regression · Reports · P0
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 17)
- **Expected result:** The "N reports found" count matches the report cards
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-03 - a payment-pending report offers Complete Payment and stays locked

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 23)
- **Expected result:** A payment-pending report offers Complete Payment and stays locked
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-04 - a completed report opens with its summary

- **Suite:** regression · Reports · P0
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 35)
- **Expected result:** A completed report opens with its summary
- **Layout checks:** ReportDetail
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-05 - every section tab of the report opens

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 43)
- **Expected result:** Every section tab of the report opens
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-06 - the diet plan shows a calorie target for each day

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 50)
- **Expected result:** The diet plan shows a calorie target for each day
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-07 - biomarker counters add up (Total = Normal + Warning + Critical)

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 58)
- **Expected result:** Biomarker counters add up (Total = Normal + Warning + Critical)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-08 - biomarker rows show a value, unit and reference range

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 69)
- **Expected result:** Biomarker rows show a value, unit and reference range
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RPT-09 - Download report works and returns to the report

- **Suite:** regression · Reports · P1
- **Spec:** `test/specs/regression/03-reports.e2e.js` (line 79)
- **Expected result:** Download report works and returns to the report
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-01 - the payment banner opens the Premium plan screen with prices

- **Suite:** regression · Payments · P0
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 20)
- **Expected result:** The payment banner opens the Premium plan screen with prices
- **Layout checks:** Premium
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-02 - payment methods are shown

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 27)
- **Expected result:** Payment methods are shown
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-03 - both plan options can be selected

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 31)
- **Expected result:** Both plan options can be selected
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-04 - Razorpay checkout opens with the plan amount

- **Suite:** regression · Payments · P0
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 37)
- **Expected result:** Razorpay checkout opens with the plan amount
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-05 - "Continue to payment" on the exit dialog keeps the user in checkout

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 44)
- **Expected result:** "Continue to payment" on the exit dialog keeps the user in checkout
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-06 - leaving checkout returns to the app without paying; the report stays locked

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 51)
- **Expected result:** Leaving checkout returns to the app without paying; the report stays locked
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-07 - a successful test-mode payment unlocks the report and is listed as Captured

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 61)
- **Expected result:** A successful test-mode payment unlocks the report and is listed as Captured
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### PAY-08 - a failed test-mode payment shows an error and can be retried

- **Suite:** regression · Payments · P1
- **Spec:** `test/specs/regression/04-payments.e2e.js` (line 69)
- **Expected result:** A failed test-mode payment shows an error and can be retried
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-01 - Settings shows its layout and every menu entry

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 25)
- **Expected result:** Settings shows its layout and every menu entry
- **Layout checks:** Settings
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-02 - Profile shows the account holder details

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 30)
- **Expected result:** Profile shows the account holder details
- **Layout checks:** Profile
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-03 - Edit Profile shows read-only date of birth and the phone number

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 40)
- **Expected result:** Edit Profile shows read-only date of birth and the phone number
- **Layout checks:** EditProfile
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-04 - a profile change is saved and shown on Profile (weight +1 kg, then restored)

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 50)
- **Expected result:** A profile change is saved and shown on Profile (weight +1 kg, then restored)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-05 - Manage Addresses lists a primary, serviceable address

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 68)
- **Expected result:** Manage Addresses lists a primary, serviceable address
- **Layout checks:** Addresses
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-06 - Family Network shows the dependent and opens their details

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 76)
- **Expected result:** Family Network shows the dependent and opens their details
- **Layout checks:** Dependents
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-07 - Transaction History filters can all be applied

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 91)
- **Expected result:** Transaction History filters can all be applied
- **Layout checks:** TransactionHistory
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-08 - Booking History lists bookings with their details

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 99)
- **Expected result:** Booking History lists bookings with their details
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-09 - Subscription shows the plan; cancellation can be started and abandoned

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 108)
- **Expected result:** Subscription shows the plan; cancellation can be started and abandoned
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-10 - Edit Profile rejects an empty first name and an invalid e-mail (nothing saved)

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 119)
- **Expected result:** Edit Profile rejects an empty first name and an invalid e-mail (nothing saved)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-11 - Family Network: the Members count matches the member cards

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 144)
- **Expected result:** Family Network: the Members count matches the member cards
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-12 - a dependent's change is saved and shown (last name edited, then restored)

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 151)
- **Expected result:** A dependent's change is saved and shown (last name edited, then restored)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-13 - the add-dependent form opens (saving one is EXT-19: needs a disposable account and the date-of-birth picker capture)

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 176)
- **Expected result:** The add-dependent form opens (saving one is EXT-19: needs a disposable account and the date-of-birth picker capture)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-14 - the add-address form will not save without required fields

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 185)
- **Expected result:** The add-address form will not save without required fields
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### SET-15 - a new address can be added and is serviceable

- **Suite:** regression · Settings and account · P1
- **Spec:** `test/specs/regression/05-settings.e2e.js` (line 200)
- **Expected result:** A new address can be added and is serviceable
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RES-01 - the app survives losing the network and recovers when it returns

- **Suite:** regression · Resilience · P1
- **Spec:** `test/specs/regression/06-resilience.e2e.js` (line 11)
- **Expected result:** The app survives losing the network and recovers when it returns
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RES-02 - backgrounding and resuming keeps the user on the same screen

- **Suite:** regression · Resilience · P1
- **Spec:** `test/specs/regression/06-resilience.e2e.js` (line 25)
- **Expected result:** Backgrounding and resuming keeps the user on the same screen
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### RES-03 - backgrounding mid-edit keeps the unsaved form (then discarded)

- **Suite:** regression · Resilience · P1
- **Spec:** `test/specs/regression/06-resilience.e2e.js` (line 34)
- **Expected result:** Backgrounding mid-edit keeps the unsaved form (then discarded)
- **Last status:** not run yet

_No run recorded yet - run the suite and rebuild the deliverables to fill in steps._

### LAY-01 - Onboarding

- **Suite:** layout · Before login
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 22)
- **Expected result:** Onboarding
- **Layout checks:** Onboarding
- **Last status:** passed (run 20261028-162953, 13.9 s)

**Steps (as automated, from the latest run):**

1. Onboarding · Wait for open  
2. Onboarding · Verify layout  
3. Onboarding · Skip

### LAY-02 - Login

- **Suite:** layout · Before login
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 28)
- **Expected result:** Login
- **Layout checks:** Login
- **Last status:** passed (run 20261028-162953, 7.7 s)

**Steps (as automated, from the latest run):**

1. Login · Open  
2. Login · Verify layout

### LAY-03 - OTP

- **Suite:** layout · Before login
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 33)
- **Expected result:** OTP
- **Layout checks:** Otp
- **Last status:** passed (run 20261028-162953, 46.0 s)

**Steps (as automated, from the latest run):**

1. Login · Request OTP  
2. Otp · Verify layout  
3. Otp · Submit OTP  
4. System Dialogs · Handle all  
5. Home · Wait for open

### LAY-04 - Home

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 47)
- **Expected result:** Home
- **Layout checks:** Home
- **Last status:** passed (run 20261028-162953, 5.3 s)

**Steps (as automated, from the latest run):**

1. Home · Open  
2. Home · Verify layout

### LAY-05 - Switch Profile sheet

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 52)
- **Expected result:** Switch Profile sheet
- **Layout checks:** SwitchProfile
- **Last status:** passed (run 20261028-162953, 6.4 s)

**Steps (as automated, from the latest run):**

1. Home · Open profile switcher  
2. Switch Profile · Wait for open  
3. Switch Profile · Verify layout  
4. Switch Profile · Close

### LAY-06 - Monthly Progress

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 59)
- **Expected result:** Monthly Progress
- **Layout checks:** MonthlyProgress
- **Last status:** passed (run 20261028-162953, 9.5 s)

**Steps (as automated, from the latest run):**

1. Home · Open monthly progress  
2. Monthly Progress · Wait for open  
3. Monthly Progress · Verify layout  
4. Monthly Progress · Close

### LAY-07 - Premium

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 66)
- **Expected result:** Premium
- **Layout checks:** Premium
- **Last status:** passed (run 20261028-162953, 8.6 s)

**Steps (as automated, from the latest run):**

1. Home · Open  
2. Home · Is payment pending  
3. Home · Tap complete payment  
4. Premium · Wait for open  
5. Premium · Verify layout  
6. Premium · Close

### LAY-08 - Reports

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 75)
- **Expected result:** Reports
- **Layout checks:** Reports
- **Last status:** passed (run 20261028-162953, 5.4 s)

**Steps (as automated, from the latest run):**

1. Reports · Open  
2. Reports · Verify layout

### LAY-09 - Report details

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 80)
- **Expected result:** Report details
- **Layout checks:** ReportDetail
- **Last status:** failed (run 20261028-162953, 199.1 s)

**Steps (as automated, from the latest run):**

1. Reports · Open report  
2. Report Detail · Wait for open  
3. Report Detail · Verify layout  
4. Report Detail · Close

### LAY-10 - Settings

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 87)
- **Expected result:** Settings
- **Layout checks:** Settings
- **Last status:** passed (run 20261028-162953, 6.2 s)

**Steps (as automated, from the latest run):**

1. Settings · Open  
2. Settings · Verify layout

### LAY-11 - Sign Out dialog

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 92)
- **Expected result:** Sign Out dialog
- **Layout checks:** SignOutDialog
- **Last status:** passed (run 20261028-162953, 7.2 s)

**Steps (as automated, from the latest run):**

1. Settings · Open sign out dialog  
2. Settings · Verify sign out layout  
3. Settings · Cancel sign out

### LAY-12 - Profile

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 98)
- **Expected result:** Profile
- **Layout checks:** Profile
- **Last status:** passed (run 20261028-162953, 10.6 s)

**Steps (as automated, from the latest run):**

1. Settings · Open profile  
2. Profile · Wait for open  
3. Profile · Verify layout

### LAY-13 - Edit Profile

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 104)
- **Expected result:** Edit Profile
- **Layout checks:** EditProfile
- **Last status:** passed (run 20261028-162953, 9.2 s)

**Steps (as automated, from the latest run):**

1. Profile · Edit  
2. Edit Profile · Wait for open  
3. Edit Profile · Verify layout  
4. Edit Profile · Close  
5. Profile · Close

### LAY-14 - Manage Addresses

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 112)
- **Expected result:** Manage Addresses
- **Layout checks:** Addresses
- **Last status:** failed (run 20261028-162953, 209.0 s)

**Steps (as automated, from the latest run):**

1. Settings · Open  
2. Settings · Open manage addresses  
3. Addresses · Wait for open  
4. Addresses · Verify layout  
5. Addresses · Close

### LAY-15 - Family Network

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 120)
- **Expected result:** Family Network
- **Layout checks:** Dependents
- **Last status:** passed (run 20261028-162953, 7.2 s)

**Steps (as automated, from the latest run):**

1. Settings · Open manage dependents  
2. Dependents · Wait for open  
3. Dependents · Verify layout  
4. Dependents · Close

### LAY-16 - Transaction History

- **Suite:** layout · Signed in
- **Spec:** `test/specs/layout/screens.layout.e2e.js` (line 127)
- **Expected result:** Transaction History
- **Layout checks:** TransactionHistory
- **Last status:** passed (run 20261028-162953, 6.0 s)

**Steps (as automated, from the latest run):**

1. Settings · Open transaction history  
2. Transaction History · Wait for open  
3. Transaction History · Verify layout  
4. Transaction History · Go back

