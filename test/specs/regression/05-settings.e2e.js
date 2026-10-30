// REGRESSION · Settings, profile, addresses, family, history and subscription - all P1 flows.
// Values that tests change are restored (profile weight / name, dependent's last name). Adding an address
// can't be undone from the app, so SET-15 only runs with TEST_ALLOW_DATA_CHANGES=true (disposable account).
import {
  LoginPage, SettingsPage, MENU, ProfilePage, EditProfilePage, AddressesPage, DependentsPage, EditDependentPage,
  TransactionHistoryPage, TX_FILTERS, BookingHistoryPage, SubscriptionPage, CancelSubscriptionPage, CANCEL_REASONS,
} from '../../pageobjects/index.js';
import { getUser, accountData, flags } from '../../data/users.js';
import { AddAddressPage, SystemDialogs } from '../../pageobjects/index.js';

describe('Settings and account', () => {
  const user = getUser();

  before(async () => {
    await LoginPage.ensureLoggedIn(user);
  });

  beforeEach(async () => {
    // every test starts on the Settings tab: back out of any sub-screen the previous test left open
    for (let i = 0; i < 3 && !(await SettingsPage.isOpen(1500)); i++) await SettingsPage.goBack();
    await SettingsPage.open();
    await SettingsPage.scrollToTop();
  });

  it('SET-01 [P1] Settings shows its layout and every menu entry', async () => {
    await SettingsPage.verifyLayout();
    for (const item of Object.values(MENU)) await SettingsPage.scrollToMenu(item);
  });

  it('SET-02 [P1] Profile shows the account holder details', async () => {
    await SettingsPage.openProfile();
    await ProfilePage.waitForOpen();
    await ProfilePage.verifyLayout();
    expect(await ProfilePage.getField('PHONE')).toContain(user.phone);
    const stats = await ProfilePage.getStats();
    expect(stats.age).toBeGreaterThan(0);
    expect(stats.weight).toBeGreaterThan(0);
  });

  it('SET-03 [P1] Edit Profile shows read-only date of birth and the phone number', async () => {
    await SettingsPage.openProfile();
    await ProfilePage.edit();
    await EditProfilePage.waitForOpen();
    await EditProfilePage.verifyLayout();
    expect(await EditProfilePage.getDob()).toMatch(/\d{4}/);
    expect(await EditProfilePage.getPhone()).toContain(user.phone);
    await EditProfilePage.close();
  });

  it('SET-04 [P1] a profile change is saved and shown on Profile (weight +1 kg, then restored)', async () => {
    await SettingsPage.openProfile();
    const { weight } = await ProfilePage.getStats();
    try {
      await ProfilePage.edit();
      await EditProfilePage.update({ weight: weight + 1 });
      await ProfilePage.waitForOpen();
      expect((await ProfilePage.getStats()).weight).toBe(weight + 1);
    } finally {
      // restore the original value even if the check failed
      if (!(await ProfilePage.isOpen(2000))) { await SettingsPage.open(); await SettingsPage.openProfile(); }
      await ProfilePage.edit();
      await EditProfilePage.update({ weight });
      await ProfilePage.waitForOpen();
    }
    expect((await ProfilePage.getStats()).weight).toBe(weight);
  });

  it('SET-05 [P1] Manage Addresses lists a primary, serviceable address', async () => {
    await SettingsPage.openManageAddresses();
    await AddressesPage.waitForOpen();
    await AddressesPage.verifyLayout();
    expect(await AddressesPage.getAddressCount()).toBeGreaterThan(0);
    await expect(AddressesPage.primaryAddress).toBeExisting();
  });

  it('SET-06 [P1] Family Network shows the dependent and opens their details', async () => {
    await SettingsPage.openManageDependents();
    await DependentsPage.waitForOpen();
    await DependentsPage.verifyLayout();
    const stats = await DependentsPage.getStats();
    expect(stats.members).toBeGreaterThan(0);
    const member = await DependentsPage.getMember(accountData.dependentName);
    expect(member.relation).toBeTruthy();
    await DependentsPage.editMember(accountData.dependentName);
    await EditDependentPage.waitForOpen();
    const name = await EditDependentPage.getName();
    expect(`${name.first} ${name.last}`).toBe(accountData.dependentName);
    await EditDependentPage.goBack(); // leave without saving
  });

  it('SET-07 [P1] Transaction History filters can all be applied', async () => {
    await SettingsPage.openTransactionHistory();
    await TransactionHistoryPage.waitForOpen();
    await TransactionHistoryPage.verifyLayout();
    for (const f of TX_FILTERS) await TransactionHistoryPage.filterBy(f);
    await TransactionHistoryPage.filterBy('All');
  });

  it('SET-08 [P1] Booking History lists bookings with their details', async () => {
    await SettingsPage.openBookingHistory();
    await BookingHistoryPage.waitForOpen();
    expect(await BookingHistoryPage.getBookingCount()).toBeGreaterThan(0);
    await BookingHistoryPage.openBooking(accountData.bookingService);
    expect(await BookingHistoryPage.getDetail('Reference:')).toMatch(/\w+/);
    expect(await BookingHistoryPage.getDetail('Service:')).toBeTruthy();
  });

  it('SET-09 [P1] Subscription shows the plan; cancellation can be started and abandoned', async () => {
    await SettingsPage.openSubscriptionManagement();
    await SubscriptionPage.waitForOpen();
    const plan = await SubscriptionPage.getPlan();
    expect(plan.plan).toBeTruthy();
    expect(plan.price).toMatch(/₹/);
    await SubscriptionPage.openCancel();
    await CancelSubscriptionPage.waitForOpen();
    await CancelSubscriptionPage.selectReason(CANCEL_REASONS[0]); // never confirmed
    await CancelSubscriptionPage.goBack();
  });
  it('SET-10 [P1] Edit Profile rejects an empty first name and an invalid e-mail (nothing saved)', async () => {
    await SettingsPage.openProfile();
    await ProfilePage.edit();
    await EditProfilePage.waitForOpen();
    const original = await EditProfilePage.getName();
    try {
      await EditProfilePage.setName('', null);
      await EditProfilePage.save();
      expect(await EditProfilePage.isOpen(4000)).toBe(true); // stayed on the form
      await EditProfilePage.setName(original.first, null);
      await EditProfilePage.setEmail('not-an-email');
      await EditProfilePage.save();
      expect(await EditProfilePage.isOpen(4000)).toBe(true);
    } finally {
      // If the app accepted bad input, put the original values back
      if (await ProfilePage.isOpen(1500)) {
        await ProfilePage.edit();
        await EditProfilePage.update({ first: original.first, last: original.last });
      } else {
        await EditProfilePage.close();
        if (await EditProfilePage.isOpen(1500)) await driver.back(); // discard-changes prompt / still open
      }
    }
  });

  it('SET-11 [P1] Family Network: the Members count matches the member cards', async () => {
    await SettingsPage.openManageDependents();
    await DependentsPage.waitForOpen();
    const stats = await DependentsPage.getStats();
    expect(await DependentsPage.getMemberCount()).toBe(stats.members);
  });

  it('SET-12 [P1] a dependent\'s change is saved and shown (last name edited, then restored)', async () => {
    await SettingsPage.openManageDependents();
    await DependentsPage.waitForOpen();
    await DependentsPage.editMember(accountData.dependentName);
    await EditDependentPage.waitForOpen();
    const { first, last } = await EditDependentPage.getName();
    const changed = `${last}QA`;
    try {
      await EditDependentPage.setName(null, changed);
      await EditDependentPage.submit();
      await DependentsPage.waitForOpen();
      expect(await DependentsPage.hasMember(`${first} ${changed}`)).toBe(true);
    } finally {
      if (!(await DependentsPage.isOpen(1500))) await EditDependentPage.goBack();
      if (await DependentsPage.hasMember(`${first} ${changed}`)) {
        await DependentsPage.editMember(`${first} ${changed}`);
        await EditDependentPage.waitForOpen();
        await EditDependentPage.setName(null, last);
        await EditDependentPage.submit();
        await DependentsPage.waitForOpen();
      }
    }
    expect(await DependentsPage.hasMember(accountData.dependentName)).toBe(true);
  });

  it('SET-13 [P1] the add-dependent form opens (saving one is EXT-19: needs a disposable account and the date-of-birth picker capture)', async () => {
    await SettingsPage.openManageDependents();
    await DependentsPage.waitForOpen();
    await DependentsPage.addDependent();
    await EditDependentPage.waitForOpen();
    await EditDependentPage.goBack(); // leave without saving
    await DependentsPage.waitForOpen();
  });

  it('SET-14 [P1] the add-address form will not save without required fields', async () => {
    await SettingsPage.openManageAddresses();
    await AddressesPage.waitForOpen();
    const before = await AddressesPage.getAddressCount();
    await AddressesPage.addNew();
    await SystemDialogs.handleAll({ timeout: 3000 }); // location permission
    await AddAddressPage.waitForOpen();
    await AddAddressPage.confirmLocation();
    await AddAddressPage.fillDetails({ house: '' });
    await AddAddressPage.save();
    expect(await AddAddressPage.isOpen(4000)).toBe(true); // still on the form
    for (let i = 0; i < 3 && !(await AddressesPage.isOpen(1500)); i++) await AddAddressPage.goBack();
    expect(await AddressesPage.getAddressCount()).toBe(before);
  });

  it('SET-15 [P1] a new address can be added and is serviceable [needs: TEST_ALLOW_DATA_CHANGES=true - addresses can\'t be deleted by the tests]', async function () {
    if (!flags.allowDataChanges) this.skip();
    await SettingsPage.openManageAddresses();
    await AddressesPage.waitForOpen();
    const before = await AddressesPage.getAddressCount();
    const house = `QA ${Date.now() % 100000}`;
    await AddressesPage.addNew();
    await SystemDialogs.handleAll({ timeout: 3000 });
    await AddAddressPage.addAddress({ search: flags.addressSearch, house, area: 'QA Test Lane', type: 'Other' });
    await AddressesPage.waitForOpen(20000);
    expect(await AddressesPage.getAddressCount()).toBe(before + 1);
    expect(await AddressesPage.isServiceable(house)).toBe(true);
  });
});
