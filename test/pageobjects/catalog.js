// Screen catalogue: which page object covers which screen, where its locators live and which
// captures (locators/screenshots/<capture>.png) show it. Used by `npm run deliverables` to build
// the locator catalogue for testers. Update `captures` after re-capturing a screen.
import * as Onboarding from './OnboardingPage.js';
import * as Login from './LoginPage.js';
import * as Otp from './OtpPage.js';
import * as Home from './HomePage.js';
import * as SwitchProfile from './SwitchProfileSheet.js';
import * as Monthly from './MonthlyProgressPage.js';
import * as Reports from './ReportsPage.js';
import * as ReportDetail from './ReportDetailPage.js';
import * as Premium from './PremiumPage.js';
import * as Razorpay from './RazorpayCheckoutPage.js';
import * as Settings from './SettingsPage.js';
import * as Profile from './ProfilePage.js';
import * as EditProfile from './EditProfilePage.js';
import * as Addresses from './AddressesPage.js';
import * as Dependents from './DependentsPage.js';
import * as Account from './AccountPages.js';
import * as Nav from './components/BottomNav.js';
import * as Dialogs from './components/SystemDialogs.js';

export const CATALOG = [
  { page: 'OnboardingPage', screen: 'Intro carousel', area: 'Login', module: 'OnboardingPage.js', block: 'SEL', locators: Onboarding.LOCATORS, captures: ['MainScreen37'] },
  { page: 'LoginPage (phone picker)', screen: 'Google "Choose a phone number" sheet', area: 'Login', module: 'LoginPage.js', block: 'HINT', locators: Login.PHONE_HINT_LOCATORS, captures: ['ChooseAPhoneNumberScreen'] },
  { page: 'LoginPage', screen: 'Log in or Sign up', area: 'Login', module: 'LoginPage.js', block: 'SEL', locators: Login.LOCATORS, captures: ['MainScreen', 'PhoneNumberHintScreen'] },
  { page: 'OtpPage', screen: 'OTP, please', area: 'Login', module: 'OtpPage.js', block: 'SEL', locators: Otp.LOCATORS, captures: ['MainScreen35'] },
  { page: 'SystemDialogs', screen: 'Android permission dialogs', area: 'System', module: 'components/SystemDialogs.js', block: 'SEL', locators: Dialogs.LOCATORS, captures: ['GrantPermissionsScreen', 'GrantPermissionsScreen2', 'PermissionsScreen', 'AllowEGenomeToReadScreen'] },
  { page: 'BottomNav', screen: 'Bottom tab bar', area: 'Navigation', module: 'components/BottomNav.js', block: 'LOCATORS', locators: Nav.LOCATORS, captures: ['MainScreen3'] },
  { page: 'HomePage', screen: 'Home tab', area: 'Home', module: 'HomePage.js', block: 'SEL', locators: Home.LOCATORS, captures: ['MainScreen2', 'MainScreen3', 'MainScreen4', 'MainScreen5', 'MainScreen6', 'MainScreen7', 'MainScreen10', 'MainScreen34'] },
  { page: 'SwitchProfileSheet', screen: 'Switch Profile sheet', area: 'Home', module: 'SwitchProfileSheet.js', block: 'SEL', locators: SwitchProfile.LOCATORS, captures: ['MainScreen9'] },
  { page: 'MonthlyProgressPage', screen: 'Monthly Progress (calendar)', area: 'Home', module: 'MonthlyProgressPage.js', block: 'SEL', locators: Monthly.LOCATORS, captures: ['October2026Screen', 'MainScreen11'] },
  { page: 'ReportsPage', screen: 'Report tab', area: 'Reports', module: 'ReportsPage.js', block: 'SEL', locators: Reports.LOCATORS, captures: ['MainScreen12'] },
  { page: 'ReportDetailPage', screen: 'Report details', area: 'Reports', module: 'ReportDetailPage.js', block: 'SEL', locators: ReportDetail.LOCATORS, captures: ['MainScreen14', 'MainScreen15', 'MainScreen16', 'MainScreen17'] },
  { page: 'PremiumPage', screen: 'eGenome Premium', area: 'Payments', module: 'PremiumPage.js', block: 'SEL', locators: Premium.LOCATORS, captures: ['MainScreen13'] },
  { page: 'RazorpayCheckoutPage', screen: 'Razorpay checkout', area: 'Payments', module: 'RazorpayCheckoutPage.js', block: 'SEL', locators: Razorpay.LOCATORS, captures: ['CheckoutScreen3'] },
  { page: 'SettingsPage', screen: 'Settings tab', area: 'Settings', module: 'SettingsPage.js', block: 'SEL', locators: Settings.LOCATORS, captures: ['MainScreen18', 'MainScreen19'] },
  { page: 'SettingsPage (sign out)', screen: 'Sign Out dialog', area: 'Settings', module: 'SettingsPage.js', block: 'SIGN_OUT', locators: Settings.SIGN_OUT_LOCATORS, captures: ['MainScreen36'] },
  { page: 'ProfilePage', screen: 'Profile', area: 'Settings', module: 'ProfilePage.js', block: 'SEL', locators: Profile.LOCATORS, captures: ['MainScreen20'] },
  { page: 'EditProfilePage', screen: 'Edit Profile', area: 'Settings', module: 'EditProfilePage.js', block: 'SEL', locators: EditProfile.LOCATORS, captures: ['MainScreen21', 'MainScreen22', 'MainScreen23'] },
  { page: 'AddressesPage', screen: 'Manage Addresses', area: 'Settings', module: 'AddressesPage.js', block: 'LIST', locators: Addresses.LOCATORS, captures: ['MainScreen26'] },
  { page: 'AddAddressPage', screen: 'Add address (map + form)', area: 'Settings', module: 'AddressesPage.js', block: 'ADD', locators: Addresses.ADD_ADDRESS_LOCATORS, captures: ['MainScreen25'] },
  { page: 'DependentsPage', screen: 'Family Network', area: 'Settings', module: 'DependentsPage.js', block: 'LIST', locators: Dependents.LOCATORS, captures: ['MainScreen27'] },
  { page: 'EditDependentPage', screen: 'Edit Dependent', area: 'Settings', module: 'DependentsPage.js', block: 'FORM', locators: Dependents.EDIT_DEPENDENT_LOCATORS, captures: ['MainScreen28'] },
  { page: 'TransactionHistoryPage', screen: 'Transaction History', area: 'Settings', module: 'AccountPages.js', block: 'TX', locators: Account.LOCATORS.TransactionHistoryPage, captures: ['MainScreen29'] },
  { page: 'BookingHistoryPage', screen: 'Booking History', area: 'Settings', module: 'AccountPages.js', block: 'BK', locators: Account.LOCATORS.BookingHistoryPage, captures: ['MainScreen20'] },
  { page: 'SubscriptionPage', screen: 'Subscription Management', area: 'Settings', module: 'AccountPages.js', block: 'SUB', locators: Account.LOCATORS.SubscriptionPage, captures: ['MainScreen20'] },
  { page: 'CancelSubscriptionPage', screen: 'Cancel Subscription', area: 'Settings', module: 'AccountPages.js', block: 'CANCEL', locators: Account.LOCATORS.CancelSubscriptionPage, captures: ['MainScreen32', 'MainScreen33'] },
  { page: 'HelpSupportPage', screen: 'Priority Support', area: 'Settings', module: 'AccountPages.js', block: 'HELP', locators: Account.LOCATORS.HelpSupportPage, captures: ['MainScreen20'] },
];
