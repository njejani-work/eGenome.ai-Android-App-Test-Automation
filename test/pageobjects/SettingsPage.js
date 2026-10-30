import BasePage, { S, re } from './BasePage.js';
import BottomNav from './components/BottomNav.js';

// Captured as: MainScreen18 (top) and MainScreen19 (scrolled) - the Settings tab.
// Menu rows are labelled "<icon>, Manage Addresses, <chevron>", so they're matched by name.
const SEL = {
  profileCard: S.descContains('Tap to manage profile'),
  appearance: S.text('Appearance'),
  theme: (mode) => S.descMatches(`.+, ${mode}`), // 'Light' | 'Dark' | 'System'
  section: (name) => S.descMatches(`(.*, )?${re(name)}, .*`), // 'Account Management' | 'Premium Features' | 'Support & Help'
  accountMgmt: S.descStarts('Account Management'), // "Account Management, <chevron>, 2" (tap to expand/collapse)
  menu: (name) => S.descMatches(`.+, ${re(name)}(, .*)?`),
};

// Captured as: MainScreen36 - "Sign Out" confirmation dialog shown after tapping Logout.
const SIGN_OUT = {
  title: S.text('Sign Out'),
  message: S.textStarts('Are you sure you want to sign out'),
  confirmBtn: S.desc('Sign Out'),
  cancelBtn: S.desc('Cancel'),
};

/** Menu rows in the order they appear. */
export const MENU = {
  MANAGE_ADDRESSES: 'Manage Addresses',
  MANAGE_DEPENDENTS: 'Manage Dependents',
  TRANSACTION_HISTORY: 'Transaction History',
  BOOKING_HISTORY: 'Booking History',
  SUBSCRIPTION_MANAGEMENT: 'Subscription Management',
  HELP_SUPPORT: 'Help & Support',
  LOGOUT: 'Logout',
};

class SettingsPage extends BasePage {
  get layoutSpec() { return 'Settings'; }

  get anchors() {
    return [SEL.profileCard, SEL.appearance, SEL.menu(MENU.MANAGE_ADDRESSES)];
  }

  get nav() { return BottomNav; }
  get profileCard() { return $(SEL.profileCard); }
  get lightTheme() { return $(SEL.theme('Light')); }
  get darkTheme() { return $(SEL.theme('Dark')); }
  get systemTheme() { return $(SEL.theme('System')); }

  menuItem(name) {
    return $(SEL.menu(name));
  }

  async open() {
    await BottomNav.openSettings();
    return this.waitForOpen();
  }

  /** Opens Profile (the account card at the top). */
  async openProfile() {
    await this.tap(SEL.profileCard, { scroll: true });
  }

  /** Expand/collapse a section: 'Account Management' | 'Premium Features' | 'Support & Help' */
  async toggleSection(name) {
    await this.tap(SEL.section(name), { scroll: true });
  }

  /** 'Light' | 'Dark' | 'System' */
  async setTheme(mode) {
    await this.tap(SEL.theme(mode), { scroll: true });
  }

  /** Open a row from MENU, scrolling as needed. */
  async openMenu(name) {
    await this.tap(SEL.menu(name), { scroll: true });
  }

  /** Scroll until a menu row is visible. */
  async scrollToMenu(name) {
    await this.scrollTo(SEL.menu(name));
  }

  async openManageAddresses() { await this.openMenu(MENU.MANAGE_ADDRESSES); }
  async openManageDependents() { await this.openMenu(MENU.MANAGE_DEPENDENTS); }
  async openTransactionHistory() { await this.openMenu(MENU.TRANSACTION_HISTORY); }
  async openBookingHistory() { await this.openMenu(MENU.BOOKING_HISTORY); }
  async openSubscriptionManagement() { await this.openMenu(MENU.SUBSCRIPTION_MANAGEMENT); }
  async openHelpSupport() { await this.openMenu(MENU.HELP_SUPPORT); }

  /** Taps Logout and waits for the "Sign Out" confirmation dialog. */
  async openSignOutDialog() {
    await this.openMenu(MENU.LOGOUT);
    await $(SIGN_OUT.message).waitForDisplayed({ timeoutMsg: 'Sign Out dialog did not appear' });
  }

  get signOutDialog() { return $(SIGN_OUT.message); }
  get signOutConfirmBtn() { return $(SIGN_OUT.confirmBtn); }
  get signOutCancelBtn() { return $(SIGN_OUT.cancelBtn); }

  /** Layout check of the open "Sign Out" dialog. */
  async verifySignOutLayout() {
    return this.verifyLayout('SignOutDialog');
  }

  /** "Sign Out" on the open Sign Out dialog. */
  async confirmSignOut() {
    await this.tap(SIGN_OUT.confirmBtn);
  }

  /** Logout -> "Sign Out" (confirm). The app returns to the login screen. */
  async logout() {
    await this.openSignOutDialog();
    await this.confirmSignOut();
  }

  /** "Cancel" on the open Sign Out dialog. */
  async cancelSignOut() {
    await this.tap(SIGN_OUT.cancelBtn);
    await $(SIGN_OUT.message).waitForExist({ reverse: true });
  }

  /** Logout -> "Cancel": stays signed in. */
  async cancelLogout() {
    await this.openSignOutDialog();
    await this.cancelSignOut();
  }
}

export default new SettingsPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
export const SIGN_OUT_LOCATORS = SIGN_OUT;
