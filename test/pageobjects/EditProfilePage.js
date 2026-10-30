import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen21/22 (Edit Profile, top and scrolled) and MainScreen23 (gender sheet).
// Inputs have no ids or labels of their own, so each one is found as the EditText that follows its caption.
const SEL = {
  title: S.text('Edit Profile'),
  backBtn: S.desc('Go back'),
  saveBtn: S.desc('Save'),
  changePhoto: S.text('Tap to change photo'),
  firstName: S.fieldAfter('FIRST NAME'),
  lastName: S.fieldAfter('LAST NAME'),
  dob: S.textAfter('DATE OF BIRTH'),
  genderField: S.clickableAfter('GENDER'),
  heightFt: S.fieldAfter('HEIGHT', 1),
  heightIn: S.fieldAfter('HEIGHT', 2),
  weight: S.fieldAfter('WEIGHT'),
  email: S.fieldAfter('Email Address'),
  phone: S.textAfter('PHONE NUMBER'),
  // Gender bottom sheet
  genderSheet: S.text('Select Gender'),
  genderOption: (g) => S.descMatches(`.*, ${g}(, .*)?`), // 'Male' | 'Female' | 'Other' | 'Prefer not to say'
  closeSheet: S.desc('\uEB4B'),
};

class EditProfilePage extends BasePage {
  get layoutSpec() { return 'EditProfile'; }

  get anchors() {
    return [SEL.title];
  }

  get saveBtn() { return $(SEL.saveBtn); }
  get firstNameInput() { return $(SEL.firstName); }
  get lastNameInput() { return $(SEL.lastName); }
  get heightFtInput() { return $(SEL.heightFt); }
  get heightInInput() { return $(SEL.heightIn); }
  get weightInput() { return $(SEL.weight); }
  get emailInput() { return $(SEL.email); }

  async setName(first, last) {
    if (first != null) await this.type(SEL.firstName, first, { scroll: true });
    if (last != null) await this.type(SEL.lastName, last, { scroll: true });
  }

  /** 'Male' | 'Female' | 'Other' | 'Prefer not to say' */
  async setGender(gender) {
    await this.tap(SEL.genderField, { scroll: true });
    await $(SEL.genderSheet).waitForDisplayed();
    await this.tap(SEL.genderOption(gender));
  }

  async setHeight(ft, inches) {
    await this.type(SEL.heightFt, ft, { scroll: true });
    await this.type(SEL.heightIn, inches, { scroll: true });
  }

  async setWeight(kg) {
    await this.type(SEL.weight, kg, { scroll: true });
  }

  async setEmail(email) {
    await this.type(SEL.email, email, { scroll: true });
  }

  /** { first, last } currently in the form. */
  async getName() {
    return { first: await this.textOf(SEL.firstName), last: await this.textOf(SEL.lastName) };
  }

  /** Date of birth is read-only in the app ("Date of birth cannot be changed"). */
  async getDob() {
    await this.scrollTo(SEL.dob);
    return this.textOf(SEL.dob);
  }

  async getPhone() {
    await this.scrollTo(SEL.phone);
    return this.textOf(SEL.phone);
  }

  /** Update several fields and save: update({ first, last, gender, heightFt, heightIn, weight, email }) */
  async update({ first, last, gender, heightFt, heightIn, weight, email } = {}) {
    await this.waitForOpen();
    await this.setName(first, last);
    if (gender) await this.setGender(gender);
    if (heightFt != null) await this.type(SEL.heightFt, heightFt, { scroll: true });
    if (heightIn != null) await this.type(SEL.heightIn, heightIn, { scroll: true });
    if (weight != null) await this.setWeight(weight);
    if (email != null) await this.setEmail(email);
    await this.save();
  }

  async save() {
    await this.scrollToTop();
    await this.tap(SEL.saveBtn);
  }

  async close() {
    await this.tap(SEL.backBtn);
  }
}

export default new EditProfilePage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
