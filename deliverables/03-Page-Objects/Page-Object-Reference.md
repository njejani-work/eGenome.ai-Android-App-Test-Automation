# Page Object Reference

Generated 2026-10-28 12:31 from `test/pageobjects/`. Import page objects in specs from `test/pageobjects/index.js`:

```js
import { LoginPage, HomePage, SettingsPage, MENU } from '../pageobjects/index.js';
```

Every call to an **action** (async method) from a spec is logged as a step on the dashboard, with a screenshot. **Elements** are WebdriverIO element getters, for example `await expect(LoginPage.sendOtpBtn).toBeDisplayed()`.

## Contents

- [BottomNav](#bottomnav)
- [SystemDialogs](#systemdialogs)
- [OnboardingPage](#onboardingpage)
- [LoginPage](#loginpage)
- [OtpPage](#otppage)
- [HomePage](#homepage)
- [SwitchProfileSheet](#switchprofilesheet)
- [MonthlyProgressPage](#monthlyprogresspage)
- [ReportsPage](#reportspage)
- [ReportDetailPage](#reportdetailpage)
- [PremiumPage](#premiumpage)
- [RazorpayCheckoutPage](#razorpaycheckoutpage)
- [SettingsPage](#settingspage)
- [ProfilePage](#profilepage)
- [EditProfilePage](#editprofilepage)
- [AddressesPage](#addressespage)
- [AddAddressPage](#addaddresspage)
- [DependentsPage](#dependentspage)
- [EditDependentPage](#editdependentpage)
- [TransactionHistoryPage](#transactionhistorypage)
- [BookingHistoryPage](#bookinghistorypage)
- [SubscriptionPage](#subscriptionpage)
- [CancelSubscriptionPage](#cancelsubscriptionpage)
- [HelpSupportPage](#helpsupportpage)
- [BasePage (inherited by all)](#basepage-inherited-by-all)

## BottomNav

Source: `test/pageobjects/components/BottomNav.js`

**Actions**

| Method | Description |
|---|---|
| `await BottomNav.ensureVisible(maxBacks = 4)` | Makes sure the tab bar is on screen. If a previous step left a pushed screen open (Premium, a report, a Settings sub-screen...), presses Back until the tabs show again, so one failed test doesn't make every following test fail too. |
| `await BottomNav.openHome()` |  |
| `await BottomNav.openReports()` |  |
| `await BottomNav.openSettings()` |  |

**Elements**

`homeTab`, `reportTab`, `settingsTab`

## SystemDialogs

Source: `test/pageobjects/components/SystemDialogs.js`

**Actions**

| Method | Description |
|---|---|
| `await SystemDialogs.handleAll({ allow = true, timeout = 4000, maxDialogs = 4 } = {})` | Answer every permission dialog that shows up (notifications, location, Health Connect). @param {{allow?: boolean, timeout?: number, maxDialogs?: number}} opts @returns {Promise<string[]>} the dialogs that were handled |

**Elements**

`permissionMessage`

## OnboardingPage

Source: `test/pageobjects/OnboardingPage.js`  
Captured as: MainScreen37 - intro carousel shown on a fresh install / after clearing app data,

**Actions**

| Method | Description |
|---|---|
| `await OnboardingPage.skip()` |  |
| `await OnboardingPage.skipIfShown(timeout = 3000)` | Taps Skip if the intro is showing; returns true when it did. |

**Elements**

`layoutSpec`, `skipBtn`, `slideTitle`, `labBadge`

## LoginPage

Source: `test/pageobjects/LoginPage.js`  
Captured as: MainScreen ("Start your health journey" / "Log in or Sign up")

**Actions**

| Method | Description |
|---|---|
| `await LoginPage.dismissPhoneHint(timeout = 2500)` | Closes Google's phone-number picker if it opened. |
| `await LoginPage.enterPhone(phone)` | Types a 10-digit mobile number (a leading +91 / 91 / 0 is stripped). |
| `await LoginPage.typeRawPhone(text)` | Types exactly what is given (no clean-up), e.g. to check that letters are rejected. |
| `await LoginPage.getPhone()` | Text currently in the phone field. |
| `await LoginPage.tapSendOtp()` |  |
| `await LoginPage.doubleTapSendOtp()` | Two quick taps on Send OTP (checks the button can't trigger a second request). |
| `await LoginPage.open()` | Gets past anything shown before the login screen: intro carousel (Skip) and Google's number picker. |
| `await LoginPage.requestOtp(phone)` | Enter the number, tap "Send OTP" and wait for the OTP screen. |

**Elements**

`layoutSpec`, `headline`, `countryCodeBtn`, `countryCode`, `phoneInput`, `sendOtpBtn`, `sendingIndicator`, `consentText`

## OtpPage

Source: `test/pageobjects/OtpPage.js`  
Captured as: MainScreen35 ("OTP, please"), shown after "Send OTP" on the login screen.

**Actions**

| Method | Description |
|---|---|
| `OtpPage.digitInput(n)` |  |
| `await OtpPage.getSentToNumber()` | Phone number from "Please enter the code we just sent to +91..." |
| `await OtpPage.enterOtp(code)` | Types the code one digit per box. |
| `await OtpPage.getEnteredOtp()` | Values currently in the six boxes, e.g. "123456". |
| `await OtpPage.tapContinue()` |  |
| `await OtpPage.submitOtp(code)` | Enter the code and tap Continue (if the app hasn't already moved on by itself). |
| `await OtpPage.getResendSeconds()` | Seconds left before "Resend OTP" is enabled (0 when it's available). |
| `await OtpPage.resendOtp()` |  |
| `await OtpPage.back()` |  |

**Elements**

`layoutSpec`, `title`, `sentToText`, `continueBtn`, `resendBtn`, `whatsappBtn`, `backBtn`

## HomePage

Source: `test/pageobjects/HomePage.js`  
Captured as: MainScreen2-8, MainScreen10, MainScreen34 (the Home tab at different scroll

**Actions**

| Method | Description |
|---|---|
| `HomePage.profileChip(name)` | Card for any profile name in the header, e.g. profileChip('Johny Mark'). |
| `HomePage.mealSlotSelector(slot)` | Routine row, e.g. mealSlot('Breakfast'). |
| `HomePage.mealSlot(slot)` |  |
| `await HomePage.open()` |  |
| `await HomePage.openProfileSwitcher(activeProfileName)` | Opens the "Switch Profile" sheet from the header chip (pass the active profile's name when it isn't the account holder). |
| `await HomePage.getVital(name)` | Returns the vitals card text, e.g. getVital('Weight') -> "Weight, GOOD, 56 kg, ..." |
| `await HomePage.isPaymentPending()` |  |
| `await HomePage.tapCompletePayment()` |  |
| `await HomePage.getStreak()` |  |
| `await HomePage.getTaskProgress()` | "2 of 5 tasks done today" -> { done: 2, total: 5 } |
| `await HomePage.openMoreItems()` | Taps "+N more items" on the routine card; returns N. |
| `await HomePage.hasMoreItemsLink()` |  |
| `await HomePage.openMonthlyProgress()` |  |
| `await HomePage.selectRoutineTab(tab)` | 'Meals' \| 'Exercise' \| 'Supplements' |
| `await HomePage.expandSlot(slot)` |  |
| `await HomePage.markSlot(slot, action = 'Done')` | Expand a slot and tap one of its actions, e.g. markSlot('Breakfast', 'Done'). |
| `await HomePage.getVisibleSlotActions()` | Action buttons currently shown on an expanded routine slot, e.g. ['Done', 'Skip', 'Alternate']. |
| `await HomePage.openFullJourney()` |  |
| `await HomePage.scheduleExpertCall()` |  |

**Elements**

`layoutSpec`, `nav`, `profileSwitcher`, `weightCard`, `bmiCard`, `bodyFatCard`, `stepsCard`, `waterCard`, `paymentBanner`, `completePaymentBtn`, `dailyRoutineHeader`, `calendarBtn`, `dayStreak`, `tasksDone`, `mealsTab`, `exerciseTab`, `supplementsTab`, `viewFullJourneyBtn`, `scheduleCallBtn`

## SwitchProfileSheet

Source: `test/pageobjects/SwitchProfileSheet.js`  
Captured as: MainScreen9 (bottom sheet opened from the profile header on Home)

**Actions**

| Method | Description |
|---|---|
| `SwitchProfileSheet.profile(name)` | Profile row by name, e.g. profile('Johny Mark') ("..., Johny Mark, spouse"). |
| `await SwitchProfileSheet.getRelation(name)` | Relation shown for a profile, e.g. getRelation('Johny Mark') -> 'spouse'. |
| `await SwitchProfileSheet.switchTo(name)` |  |
| `await SwitchProfileSheet.addProfile()` |  |
| `await SwitchProfileSheet.close()` |  |

**Elements**

`layoutSpec`, `closeBtn`, `addProfileBtn`

## MonthlyProgressPage

Source: `test/pageobjects/MonthlyProgressPage.js`  
Captured as: October2026Screen, September2026Screen, August2026Screen (calendar)

**Actions**

| Method | Description |
|---|---|
| `MonthlyProgressPage.day(n)` | Day cell in the calendar (content-desc is just the day number). |
| `MonthlyProgressPage.slot(name)` | Routine row for the selected day, e.g. slot('Lunch'). |
| `await MonthlyProgressPage.getMonth()` | e.g. "October 2026" |
| `await MonthlyProgressPage.previousMonth()` |  |
| `await MonthlyProgressPage.nextMonth()` |  |
| `await MonthlyProgressPage.goToMonth(label, maxSteps = 24)` | Navigate the calendar to a month label like "August 2026". |
| `await MonthlyProgressPage.selectDay(n)` |  |
| `await MonthlyProgressPage.selectTab(tab)` | 'Meals' \| 'Exercise' \| 'Supplements' |
| `await MonthlyProgressPage.close()` |  |

**Elements**

`layoutSpec`, `monthTitle`, `prevMonthBtn`, `nextMonthBtn`, `mealsTab`, `exerciseTab`, `supplementsTab`

## ReportsPage

Source: `test/pageobjects/ReportsPage.js`  
Captured as: MainScreen12 (Report tab)

**Actions**

| Method | Description |
|---|---|
| `ReportsPage.reportCardSelector(title)` | Report card by title (content-desc = "<title>. <description>"). |
| `ReportsPage.reportCard(title)` |  |
| `await ReportsPage.open()` |  |
| `await ReportsPage.getReportCount()` | "2 reports found" -> 2 |
| `await ReportsPage.getMyReportTitles(maxScrolls = 8)` | Titles of the user's own report cards (cards that carry a status such as COMPLETED or PAYMENT PENDING - sample reports have none), collected while scrolling down the tab. |
| `await ReportsPage.showMyReports()` |  |
| `await ReportsPage.showSampleReports()` |  |
| `await ReportsPage.hasReport(title)` |  |
| `await ReportsPage.openReport(title)` |  |
| `await ReportsPage.openSampleReport(title)` |  |
| `await ReportsPage.getReportStatus(title)` | Status text inside a report card: "PAYMENT PENDING" \| "COMPLETED" \| null |
| `await ReportsPage.tapCompletePayment()` |  |

**Elements**

`layoutSpec`, `nav`, `myReportsTab`, `sampleReportsTab`, `reportsFoundText`, `completePaymentBtn`

## ReportDetailPage

Source: `test/pageobjects/ReportDetailPage.js`  
Captured as: MainScreen14-17 (a report opened from the Report tab: "Month 1 Report").

**Actions**

| Method | Description |
|---|---|
| `await ReportDetailPage.getTitle()` |  |
| `await ReportDetailPage.openSection(name)` | Open a section tab, swiping the tab strip if it's off-screen. |
| `await ReportDetailPage.openSummaryTab(name)` |  |
| `await ReportDetailPage.getHealthStatus(area)` | Health-at-a-glance card status: getHealthStatus('Heart') -> "Needs care" ("🫀, Heart, Needs care"). |
| `await ReportDetailPage.getMarkerCounts()` | Bio Markers counters: { total, normal, warning, critical } |
| `await ReportDetailPage.getBiomarker(name)` | One biomarker row, e.g. getBiomarker('Vitamin D3') -> { name: 'Vitamin D3', value: 38.36, unit: 'ng/ml', range: '50-150' } |
| `await ReportDetailPage.getVisibleBiomarkers()` | Biomarker rows currently on screen: [{ name, value, unit, range }] |
| `await ReportDetailPage.downloadAndReturn()` | Tap Download; if the app hands off to a PDF viewer / share sheet, come back. Returns where it went. |
| `await ReportDetailPage.openBiomarker(name)` | Expand a biomarker row to see its details. |
| `await ReportDetailPage.selectDietDay(day)` | Diet plan day chip: 'Sun' \| 'Mon' \| ... |
| `await ReportDetailPage.getDailyCalories()` |  |
| `await ReportDetailPage.openWeeklyMenu()` |  |
| `await ReportDetailPage.getRootCause(condition)` | RCA condition card, e.g. getRootCause('Mild Anemia') -> "Mild Anemia, Primary, Key markers: ..." |
| `await ReportDetailPage.download()` |  |
| `await ReportDetailPage.close()` |  |

**Elements**

`layoutSpec`, `title`, `downloadBtn`, `weeklyMenuBtn`

## PremiumPage

Source: `test/pageobjects/PremiumPage.js`  
Captured as: MainScreen13 ("eGenome Premium" plan screen, opened from "Complete Payment").

**Actions**

| Method | Description |
|---|---|
| `await PremiumPage.getPrices()` | Visible plan prices, e.g. ["₹11,988", "₹9,999"] |
| `await PremiumPage.choosePlan(plan)` | 'emi' \| 'one-time' |
| `await PremiumPage.hasPaymentMethod(name)` |  |
| `await PremiumPage.proceedToPayment()` |  |
| `await PremiumPage.hasPaymentError()` |  |
| `await PremiumPage.close()` |  |

**Elements**

`layoutSpec`, `emiOption`, `oneTimeOption`, `paymentError`, `payBtn`

## RazorpayCheckoutPage

Source: `test/pageobjects/RazorpayCheckoutPage.js`  
Captured as: CheckoutScreen3 (com.razorpay.CheckoutActivity). Razorpay renders a web view,

**Actions**

| Method | Description |
|---|---|
| `await RazorpayCheckoutPage.waitForOpen(timeout = 45000)` | Waits through the loading states (it takes a few seconds to render). |
| `await RazorpayCheckoutPage.getTotal()` | e.g. "₹9,999" |
| `await RazorpayCheckoutPage.enterMobile(number)` |  |
| `await RazorpayCheckoutPage.continue()` |  |
| `await RazorpayCheckoutPage.openExitDialog()` | Back from checkout - shows the "Are you sure?" dialog. |
| `await RazorpayCheckoutPage.continuePayment()` | "Continue to payment" on the exit dialog - stays in checkout. |
| `await RazorpayCheckoutPage.exit()` | Leave checkout without paying (handles the confirmation dialog). |

**Elements**

`mobileInput`, `continueBtn`

## SettingsPage

Source: `test/pageobjects/SettingsPage.js`  
Captured as: MainScreen18 (top) and MainScreen19 (scrolled) - the Settings tab.

**Actions**

| Method | Description |
|---|---|
| `SettingsPage.menuItem(name)` |  |
| `await SettingsPage.open()` |  |
| `await SettingsPage.openProfile()` | Opens Profile (the account card at the top). |
| `await SettingsPage.toggleSection(name)` | Expand/collapse a section: 'Account Management' \| 'Premium Features' \| 'Support & Help' |
| `await SettingsPage.setTheme(mode)` | 'Light' \| 'Dark' \| 'System' |
| `await SettingsPage.openMenu(name)` | Open a row from MENU, scrolling as needed. |
| `await SettingsPage.scrollToMenu(name)` | Scroll until a menu row is visible. |
| `await SettingsPage.openManageAddresses()` |  |
| `await SettingsPage.openManageDependents()` |  |
| `await SettingsPage.openTransactionHistory()` |  |
| `await SettingsPage.openBookingHistory()` |  |
| `await SettingsPage.openSubscriptionManagement()` |  |
| `await SettingsPage.openHelpSupport()` |  |
| `await SettingsPage.openSignOutDialog()` | Taps Logout and waits for the "Sign Out" confirmation dialog. |
| `await SettingsPage.verifySignOutLayout()` | Layout check of the open "Sign Out" dialog. |
| `await SettingsPage.confirmSignOut()` | "Sign Out" on the open Sign Out dialog. |
| `await SettingsPage.logout()` | Logout -> "Sign Out" (confirm). The app returns to the login screen. |
| `await SettingsPage.cancelSignOut()` | "Cancel" on the open Sign Out dialog. |
| `await SettingsPage.cancelLogout()` | Logout -> "Cancel": stays signed in. |

**Elements**

`layoutSpec`, `nav`, `profileCard`, `lightTheme`, `darkTheme`, `systemTheme`, `signOutDialog`, `signOutConfirmBtn`, `signOutCancelBtn`

## ProfilePage

Source: `test/pageobjects/ProfilePage.js`  
Captured as: part of MainScreen20 (Settings > profile card). The capture merged Profile,

**Actions**

| Method | Description |
|---|---|
| `await ProfilePage.getStats()` | { age: 34, height: "5ft 4in", weight: 56 } |
| `await ProfilePage.getField(label)` | Value of a contact row, e.g. getField('PHONE') -> "+919999999999" |
| `await ProfilePage.edit()` |  |
| `await ProfilePage.openEmail()` |  |
| `await ProfilePage.close()` |  |

**Elements**

`layoutSpec`, `editBtn`, `emailRow`, `phoneRow`, `genderRow`, `updatedToast`

## EditProfilePage

Source: `test/pageobjects/EditProfilePage.js`  
Captured as: MainScreen21/22 (Edit Profile, top and scrolled) and MainScreen23 (gender sheet).

**Actions**

| Method | Description |
|---|---|
| `await EditProfilePage.setName(first, last)` |  |
| `await EditProfilePage.setGender(gender)` | 'Male' \| 'Female' \| 'Other' \| 'Prefer not to say' |
| `await EditProfilePage.setHeight(ft, inches)` |  |
| `await EditProfilePage.setWeight(kg)` |  |
| `await EditProfilePage.setEmail(email)` |  |
| `await EditProfilePage.getName()` | { first, last } currently in the form. |
| `await EditProfilePage.getDob()` | Date of birth is read-only in the app ("Date of birth cannot be changed"). |
| `await EditProfilePage.getPhone()` |  |
| `await EditProfilePage.update({ first, last, gender, heightFt, heightIn, weight, email } = {})` | Update several fields and save: update({ first, last, gender, heightFt, heightIn, weight, email }) |
| `await EditProfilePage.save()` |  |
| `await EditProfilePage.close()` |  |

**Elements**

`layoutSpec`, `saveBtn`, `firstNameInput`, `lastNameInput`, `heightFtInput`, `heightInInput`, `weightInput`, `emailInput`

## AddressesPage

Source: `test/pageobjects/AddressesPage.js`  
Captured as: MainScreen26 (Settings > Manage Addresses) and MainScreen25 (add address: map + form).

**Actions**

| Method | Description |
|---|---|
| `AddressesPage.address(text)` | Address card containing some text, e.g. address('Main Street'). |
| `await AddressesPage.getAddressCount()` |  |
| `await AddressesPage.getPrimaryAddress()` |  |
| `await AddressesPage.isServiceable(text)` |  |
| `await AddressesPage.addNew()` |  |
| `await AddressesPage.openCardMenu(n = 1)` | Opens the "⋮" menu of the n-th card (1-based). |
| `await AddressesPage.close()` |  |

**Elements**

`layoutSpec`, `addBtn`, `primaryAddress`, `addedToast`

## AddAddressPage

Source: `test/pageobjects/AddressesPage.js`  
Captured as: MainScreen26 (Settings > Manage Addresses) and MainScreen25 (add address: map + form).

**Actions**

| Method | Description |
|---|---|
| `await AddAddressPage.searchLocation(query, pick = query)` | Search the map and pick the first suggestion containing `pick` (defaults to the query). |
| `await AddAddressPage.confirmLocation()` |  |
| `await AddAddressPage.fillDetails({ house, area, city, pincode, type } = {})` | Fill the details form: fillDetails({ house, area, city, pincode, type: 'Home' }) |
| `await AddAddressPage.save()` |  |
| `await AddAddressPage.addAddress({ search, pick, ...details })` | Whole flow from the map screen. |

**Elements**

`searchInput`, `confirmBtn`, `saveBtn`

## DependentsPage

Source: `test/pageobjects/DependentsPage.js`  
Captured as: MainScreen27 (Settings > Manage Dependents: "Family Network") and MainScreen28 (Edit Dependent).

**Actions**

| Method | Description |
|---|---|
| `DependentsPage.member(name)` |  |
| `await DependentsPage.getStats()` | { members, relations, minors } from the summary tiles |
| `await DependentsPage.getMember(name)` | Member card details: "JM, , Johny Mark, Spouse, 30y, ..." -> { name, relation, age, phone } |
| `await DependentsPage.getMemberCount()` | Number of member cards ("JM, , Johny Mark, Spouse, ..."). |
| `await DependentsPage.hasMember(name)` |  |
| `await DependentsPage.addDependent()` |  |
| `await DependentsPage.editMember(name)` |  |
| `await DependentsPage.removeMember(name)` | Taps "Remove" on the member's card (confirmation dialog not captured). |
| `await DependentsPage.close()` |  |

**Elements**

`layoutSpec`, `addBtn`

## EditDependentPage

Source: `test/pageobjects/DependentsPage.js`  
Captured as: MainScreen27 (Settings > Manage Dependents: "Family Network") and MainScreen28 (Edit Dependent).

**Actions**

| Method | Description |
|---|---|
| `await EditDependentPage.setName(first, last)` |  |
| `await EditDependentPage.getName()` | First and last name currently in the form. |
| `await EditDependentPage.getDob()` | e.g. "September 11, 1996" |
| `await EditDependentPage.setGender(gender)` | Opens the gender picker and chooses an option ('Male' \| 'Female' \| 'Other' \| ...). |
| `await EditDependentPage.submit()` |  |

**Elements**

`updateBtn`

## TransactionHistoryPage

Source: `test/pageobjects/AccountPages.js`  
Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription

**Actions**

| Method | Description |
|---|---|
| `await TransactionHistoryPage.filterBy(name)` |  |
| `await TransactionHistoryPage.isEmpty()` |  |

**Elements**

`layoutSpec`, `emptyState`

## BookingHistoryPage

Source: `test/pageobjects/AccountPages.js`  
Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription

**Actions**

| Method | Description |
|---|---|
| `await BookingHistoryPage.getBookingCount()` |  |
| `await BookingHistoryPage.openBooking(service = 'Sample Collection')` |  |
| `await BookingHistoryPage.getDetail(label)` | Value next to a caption in Booking Details, e.g. getDetail('Reference:') -> "10766054636" |

## SubscriptionPage

Source: `test/pageobjects/AccountPages.js`  
Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription

**Actions**

| Method | Description |
|---|---|
| `await SubscriptionPage.getPlan()` | { plan, status, price, activeSince, nextBilling } |
| `await SubscriptionPage.openCancel()` |  |

## CancelSubscriptionPage

Source: `test/pageobjects/AccountPages.js`  
Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription

**Actions**

| Method | Description |
|---|---|
| `await CancelSubscriptionPage.getStatus()` |  |
| `await CancelSubscriptionPage.getActiveUntil()` |  |
| `await CancelSubscriptionPage.selectReason(text)` |  |
| `await CancelSubscriptionPage.cancel({ reason = CANCEL_REASONS[0], confirm = false } = {})` | Destructive: only call with confirm: true on a test account. |

## HelpSupportPage

Source: `test/pageobjects/AccountPages.js`  
Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription

**Actions**

| Method | Description |
|---|---|
| `await HelpSupportPage.getCallInfo()` | { phone: "+91-7045047045", hours: "Mon-Fri: ..." } |
| `await HelpSupportPage.getSupportEmail()` |  |
| `await HelpSupportPage.callSupport()` | Opens the phone dialer (leaves the app - press back to return). |
| `await HelpSupportPage.emailSupport()` |  |

## BasePage (inherited by all)

Source: `test/pageobjects/BasePage.js`. These helpers are available on every page object.

| Method | Description |
|---|---|
| `verifyLayout(name = this.layoutSpec)` | Layer 1 layout check: text, state, proportional position/size and relations of the screen's elements against test/layout/specs/<name>.json. See test/support/layout. |
| `isOpen(timeout = 0)` |  |
| `waitForOpen(timeout = 20000)` |  |
| `exists(sel)` |  |
| `tap(sel, { scroll = false, timeout = 10000 } = {})` | Tap an element; scrolls vertically to it first when `scroll` is true. |
| `type(sel, value, { scroll = false, clear = true } = {})` |  |
| `textOf(sel)` |  |
| `descOf(sel)` |  |
| `scrollTo(sel, { direction = 'down', maxScrolls = 10, area } = {})` | Scroll the main content until `sel` is displayed. direction: 'down' reveals content further down the page, 'up' goes back to the top. |
| `scrollToTop()` |  |
| `swipeRowTo(sel, rowSel, { maxSwipes = 6 } = {})` | Swipe a horizontal strip (tab bar, chips) until `sel` is displayed. `rowSel` is any visible element in that strip. |
| `hideKeyboard()` |  |
| `goBack()` | In-app back arrow when present, otherwise the Android back button. |

### Selector helpers (`S`)

| Helper | Matches |
|---|---|
| `S.desc(t)` | accessibility label equals t |
| `S.descContains(t)` / `S.descStarts(t)` / `S.descMatches(re)` | label contains / starts with / matches regex |
| `S.text(t)` / `S.textContains(t)` / `S.textStarts(t)` / `S.textMatches(re)` | visible text |
| `S.id(id)` / `S.idMatches(re)` | resource-id |
| `S.cls(className, n)` | n-th element of a class |
| `S.fieldAfter(label, n)` | n-th input after a caption |
| `S.textAfter(label, n)` | n-th text after a caption |
| `S.clickableAfter(label, n)` | n-th tappable element after a caption |
