// One import for every page model:
//   import { LoginPage, HomePage, ReportsPage, SettingsPage } from '../pageobjects/index.js';
//
// Page objects exported here are instrumented for the dashboard: each async method a spec calls
// is logged as a step with a screenshot and passed/failed status (see test/support/dashboard).
// Import from the individual files instead if you ever need the raw, un-logged objects.
import { instrument, step } from '../support/dashboard/recorder.js';

import RawBottomNav from './components/BottomNav.js';
import RawSystemDialogs from './components/SystemDialogs.js';
import RawOnboardingPage from './OnboardingPage.js';
import RawLoginPage from './LoginPage.js';
import RawOtpPage from './OtpPage.js';
import RawHomePage from './HomePage.js';
import RawSwitchProfileSheet from './SwitchProfileSheet.js';
import RawMonthlyProgressPage from './MonthlyProgressPage.js';
import RawReportsPage from './ReportsPage.js';
import RawReportDetailPage from './ReportDetailPage.js';
import RawPremiumPage from './PremiumPage.js';
import RawRazorpayCheckoutPage from './RazorpayCheckoutPage.js';
import RawSettingsPage from './SettingsPage.js';
import RawProfilePage from './ProfilePage.js';
import RawEditProfilePage from './EditProfilePage.js';
import RawAddressesPage, { AddAddress as RawAddAddressPage } from './AddressesPage.js';
import RawDependentsPage, { EditDependent as RawEditDependentPage } from './DependentsPage.js';
import {
  TransactionHistory as RawTransactionHistoryPage,
  BookingHistory as RawBookingHistoryPage,
  Subscription as RawSubscriptionPage,
  CancelSubscription as RawCancelSubscriptionPage,
  HelpSupport as RawHelpSupportPage,
} from './AccountPages.js';

export { default as BasePage, S } from './BasePage.js';
export { step };

export const BottomNav = instrument(RawBottomNav, 'BottomNav');
export const SystemDialogs = instrument(RawSystemDialogs, 'SystemDialogs');

export const OnboardingPage = instrument(RawOnboardingPage, 'OnboardingPage');
export const LoginPage = instrument(RawLoginPage, 'LoginPage');
export const OtpPage = instrument(RawOtpPage, 'OtpPage');

export const HomePage = instrument(RawHomePage, 'HomePage');
export const SwitchProfileSheet = instrument(RawSwitchProfileSheet, 'SwitchProfileSheet');
export const MonthlyProgressPage = instrument(RawMonthlyProgressPage, 'MonthlyProgressPage');

export const ReportsPage = instrument(RawReportsPage, 'ReportsPage');
export const ReportDetailPage = instrument(RawReportDetailPage, 'ReportDetailPage');
export const PremiumPage = instrument(RawPremiumPage, 'PremiumPage');
export const RazorpayCheckoutPage = instrument(RawRazorpayCheckoutPage, 'RazorpayCheckoutPage');

export const SettingsPage = instrument(RawSettingsPage, 'SettingsPage');
export const ProfilePage = instrument(RawProfilePage, 'ProfilePage');
export const EditProfilePage = instrument(RawEditProfilePage, 'EditProfilePage');
export const AddressesPage = instrument(RawAddressesPage, 'AddressesPage');
export const AddAddressPage = instrument(RawAddAddressPage, 'AddAddressPage');
export const DependentsPage = instrument(RawDependentsPage, 'DependentsPage');
export const EditDependentPage = instrument(RawEditDependentPage, 'EditDependentPage');
export const TransactionHistoryPage = instrument(RawTransactionHistoryPage, 'TransactionHistoryPage');
export const BookingHistoryPage = instrument(RawBookingHistoryPage, 'BookingHistoryPage');
export const SubscriptionPage = instrument(RawSubscriptionPage, 'SubscriptionPage');
export const CancelSubscriptionPage = instrument(RawCancelSubscriptionPage, 'CancelSubscriptionPage');
export const HelpSupportPage = instrument(RawHelpSupportPage, 'HelpSupportPage');

export { SLOTS, MEAL_ACTIONS } from './HomePage.js';
export { REPORTS, SAMPLE_REPORTS } from './ReportsPage.js';
export { SECTIONS, SUMMARY_TABS } from './ReportDetailPage.js';
export { MENU } from './SettingsPage.js';
export { TX_FILTERS, CANCEL_REASONS } from './AccountPages.js';
