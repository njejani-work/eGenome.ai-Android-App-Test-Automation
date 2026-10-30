import BasePage, { S } from './BasePage.js';

// Captured as: part of MainScreen20 (Settings > profile card). The capture merged Profile,
// Subscription Management and Help & Support into MainScreen20 because they look alike.
const SEL = {
  title: S.text('Profile'),
  backBtn: S.desc('Go back'),
  editBtn: S.desc('\uEB94'), // pencil icon, top right -> Edit Profile
  avatar: S.desc('\uEDA6, \uEADC'),
  addPhotoHint: S.textStarts('Tap to add profile pictur'),
  age: S.textMatches('\\d+ yrs'),
  height: S.textMatches("\\d+ft \\d+in"),
  weight: S.textMatches('\\d+(\\.\\d+)? kg'),
  emailRow: S.descContains(', EMAIL, '),
  phoneRow: S.descContains(', PHONE, '),
  genderRow: S.descContains(', GENDER, '),
  updatedToast: S.textStarts('Profile updated successfu'),
};

class ProfilePage extends BasePage {
  get layoutSpec() { return 'Profile'; }

  get anchors() {
    return [SEL.addPhotoHint, SEL.editBtn];
  }

  get editBtn() { return $(SEL.editBtn); }
  get emailRow() { return $(SEL.emailRow); }
  get phoneRow() { return $(SEL.phoneRow); }
  get genderRow() { return $(SEL.genderRow); }
  get updatedToast() { return $(SEL.updatedToast); }

  /** { age: 34, height: "5ft 4in", weight: 56 } */
  async getStats() {
    await this.scrollToTop();
    return {
      age: Number((await this.textOf(SEL.age)).match(/\d+/)[0]),
      height: await this.textOf(SEL.height),
      weight: Number((await this.textOf(SEL.weight)).match(/[\d.]+/)[0]),
    };
  }

  /** Value of a contact row, e.g. getField('PHONE') -> "+919999999999" */
  async getField(label) {
    const sel = S.descContains(`, ${label}, `);
    await this.scrollTo(sel);
    const parts = (await this.descOf(sel)).split(',').map((p) => p.trim()).filter(Boolean);
    return parts[parts.indexOf(label) + 1];
  }

  async edit() {
    await this.scrollToTop();
    await this.tap(SEL.editBtn);
  }

  async openEmail() {
    await this.tap(SEL.emailRow, { scroll: true });
  }

  async close() {
    await this.tap(SEL.backBtn);
  }
}

export default new ProfilePage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
