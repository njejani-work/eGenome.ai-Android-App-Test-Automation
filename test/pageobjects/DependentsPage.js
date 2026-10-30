import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen27 (Settings > Manage Dependents: "Family Network") and MainScreen28 (Edit Dependent).
const lit = (s) => JSON.stringify(String(s));

// ---------- Family Network (list) ----------
const LIST = {
  title: S.text('Family Network'),
  backBtn: S.desc('Go back'),
  addBtn: S.desc('\uEA04'), // "+" icon, top right
  stat: (label) => `//*[@text=${lit(label)}]/preceding-sibling::android.widget.TextView[1]`, // number above "Members"
  member: (name) => S.descContains(`, ${name}, `),
  memberAction: (name, action) => `//*[contains(@content-desc, ${lit(`, ${name}, `)})]/following::*[contains(@content-desc, ${lit(`, ${action}`)})][1]`,
};

class DependentsPage extends BasePage {
  get layoutSpec() { return 'Dependents'; }

  get anchors() {
    return [LIST.title];
  }

  get addBtn() { return $(LIST.addBtn); }

  member(name) {
    return $(LIST.member(name));
  }

  /** { members, relations, minors } from the summary tiles */
  async getStats() {
    const out = {};
    for (const label of ['Members', 'Relations', 'Minors']) {
      const el = await $(LIST.stat(label));
      out[label.toLowerCase()] = (await el.isExisting()) ? Number(await el.getText()) : null;
    }
    return out;
  }

  /** Member card details: "JM, , Johny Mark, Spouse, 30y, ..." -> { name, relation, age, phone } */
  async getMember(name) {
    const parts = (await this.descOf(LIST.member(name))).split(',').map((p) => p.trim()).filter(Boolean);
    const i = parts.indexOf(name);
    return { name, relation: parts[i + 1], age: parts[i + 2], phone: parts.find((p) => /^\+?\d{10,}$/.test(p)) };
  }

  /** Number of member cards ("JM, , Johny Mark, Spouse, ..."). */
  async getMemberCount() {
    return (await $$(S.descMatches('[A-Z]{1,3}, .*, .+, .*'))).length;
  }

  async hasMember(name) {
    return this.exists(LIST.member(name));
  }

  async addDependent() {
    await this.tap(LIST.addBtn);
  }

  async editMember(name) {
    await this.scrollTo(LIST.member(name));
    await this.tap(LIST.memberAction(name, 'Edit'));
  }

  /** Taps "Remove" on the member's card (confirmation dialog not captured). */
  async removeMember(name) {
    await this.scrollTo(LIST.member(name));
    await this.tap(LIST.memberAction(name, 'Remove'));
  }

  async close() {
    await this.tap(LIST.backBtn);
  }
}

// ---------- Edit / add dependent form ----------
const FORM = {
  editTitle: S.text('Edit Dependent'),
  firstName: S.fieldAfter('First Name'),
  lastName: S.fieldAfter('Last Name'),
  dob: S.clickableAfter('Date of Birth'),
  gender: S.clickableAfter('Gender'),
  genderOption: (g) => S.descMatches(`.*, ${g}(, .*)?`),
  updateBtn: S.desc('Update Dependent'),
  submitBtn: S.descMatches('(Update|Add|Save) Dependent'),
};

class EditDependentPage extends BasePage {
  get anchors() {
    return [FORM.editTitle, FORM.submitBtn];
  }

  get updateBtn() { return $(FORM.updateBtn); }

  async setName(first, last) {
    if (first != null) await this.type(FORM.firstName, first, { scroll: true });
    if (last != null) await this.type(FORM.lastName, last, { scroll: true });
  }

  /** First and last name currently in the form. */
  async getName() {
    return { first: await this.textOf(FORM.firstName), last: await this.textOf(FORM.lastName) };
  }

  /** e.g. "September 11, 1996" */
  async getDob() {
    return (await this.descOf(FORM.dob)).replace(/,\s*$/, '');
  }

  /** Opens the gender picker and chooses an option ('Male' | 'Female' | 'Other' | ...). */
  async setGender(gender) {
    await this.tap(FORM.gender, { scroll: true });
    await this.tap(FORM.genderOption(gender));
  }

  async submit() {
    await this.tap(FORM.submitBtn, { scroll: true });
  }
}

export const EditDependent = new EditDependentPage();
export default new DependentsPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = LIST;
export const EDIT_DEPENDENT_LOCATORS = FORM;
