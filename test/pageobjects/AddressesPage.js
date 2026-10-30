import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen26 (Settings > Manage Addresses) and MainScreen25 (add address: map + form).

// ---------- Manage Addresses (list) ----------
const LIST = {
  title: S.text('Manage Addresses'),
  backBtn: S.desc('Go back'),
  addBtn: S.desc('\uEA04'), // "+" icon, top right
  cards: S.descContains(', Home Address, '),
  anyCard: S.descMatches('.*, (SERVICEABLE|NOT SERVICEABLE|UNSERVICEABLE), .*'),
  primaryCard: S.descContains(', PRIMARY, '),
  cardMenu: (i = 1) => `(//android.view.ViewGroup[@content-desc="\uEBCF"])[${i}]`, // "⋮" on a card
  addedToast: S.textStarts('Address added successfully'),
};

class AddressesPage extends BasePage {
  get layoutSpec() { return 'Addresses'; }

  get anchors() {
    return [LIST.title];
  }

  get addBtn() { return $(LIST.addBtn); }
  get primaryAddress() { return $(LIST.primaryCard); }
  get addedToast() { return $(LIST.addedToast); }

  /** Address card containing some text, e.g. address('Main Street'). */
  address(text) {
    return $(S.descContains(text));
  }

  async getAddressCount() {
    return (await $$(LIST.anyCard)).length;
  }

  async getPrimaryAddress() {
    return this.descOf(LIST.primaryCard);
  }

  async isServiceable(text) {
    return /, SERVICEABLE,/.test(await this.descOf(S.descContains(text)));
  }

  async addNew() {
    await this.tap(LIST.addBtn);
  }

  /** Opens the "⋮" menu of the n-th card (1-based). */
  async openCardMenu(n = 1) {
    await this.tap(LIST.cardMenu(n));
  }

  async close() {
    await this.tap(LIST.backBtn);
  }
}

// ---------- Add address (map + details form) ----------
const ADD = {
  map: S.desc('Google Map'),
  marker: S.desc('Map Marker'),
  search: S.id('location-search-input'), // RN testID
  searchInput: S.cls('android.widget.EditText', 0),
  pinHint: S.textStarts('Place the pin at exact collection'),
  collectedFrom: S.text('Sample will be collected from here'),
  confirmBtn: S.desc('Confirm & Proceed'),
  editAddress: S.text('Edit Address'),
  formTitle: S.text('Add Address Details'),
  house: S.fieldAfter('HOUSE / FLAT'),
  area: S.fieldAfter('APARTMENT / ROAD'),
  city: S.fieldAfter('CITY'),
  pincode: S.fieldAfter('PINCODE'),
  saveAs: (type) => S.descMatches(`.+, ${type}`), // 'Home' | 'Work' | 'Other' (bottom-nav "Home" has no prefix)
  saveBtn: S.desc('Save Address Details'),
};

class AddAddressPage extends BasePage {
  get anchors() {
    return [ADD.confirmBtn, ADD.formTitle, ADD.saveBtn];
  }

  get searchInput() { return $(ADD.search); }
  get confirmBtn() { return $(ADD.confirmBtn); }
  get saveBtn() { return $(ADD.saveBtn); }

  /** Search the map and pick the first suggestion containing `pick` (defaults to the query). */
  async searchLocation(query, pick = query) {
    const sel = (await this.exists(ADD.search)) ? ADD.search : ADD.searchInput;
    await this.type(sel, query);
    await this.tap(S.textContains(pick));
  }

  async confirmLocation() {
    await this.tap(ADD.confirmBtn, { scroll: true });
  }

  /** Fill the details form: fillDetails({ house, area, city, pincode, type: 'Home' }) */
  async fillDetails({ house, area, city, pincode, type } = {}) {
    if (house != null) await this.type(ADD.house, house, { scroll: true });
    if (area != null) await this.type(ADD.area, area, { scroll: true });
    if (city != null) await this.type(ADD.city, city, { scroll: true });
    if (pincode != null) await this.type(ADD.pincode, pincode, { scroll: true });
    if (type) await this.tap(ADD.saveAs(type), { scroll: true });
  }

  async save() {
    await this.tap(ADD.saveBtn, { scroll: true });
  }

  /** Whole flow from the map screen. */
  async addAddress({ search, pick, ...details }) {
    await this.waitForOpen();
    if (search) await this.searchLocation(search, pick);
    await this.confirmLocation();
    await this.fillDetails(details);
    await this.save();
  }
}

export const AddAddress = new AddAddressPage();
export default new AddressesPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = LIST;
export const ADD_ADDRESS_LOCATORS = ADD;
