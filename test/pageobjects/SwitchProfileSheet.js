import BasePage, { S } from './BasePage.js';

// Captured as: MainScreen9 (bottom sheet opened from the profile header on Home)
const SEL = {
  title: S.text('Switch Profile'),
  subtitle: S.textStarts('Choose which profile'),
  closeBtn: S.desc('\uEB4B'), // "x" icon
  addProfile: S.descContains('Add Profile'),
};

class SwitchProfileSheet extends BasePage {
  get layoutSpec() { return 'SwitchProfile'; }

  get anchors() {
    return [SEL.title];
  }

  get closeBtn() { return $(SEL.closeBtn); }
  get addProfileBtn() { return $(SEL.addProfile); }

  /** Profile row by name, e.g. profile('Johny Mark') ("..., Johny Mark, spouse"). */
  profile(name) {
    return $(S.descContains(`, ${name}, `));
  }

  /** Relation shown for a profile, e.g. getRelation('Johny Mark') -> 'spouse'. */
  async getRelation(name) {
    const desc = await this.descOf(S.descContains(`, ${name}, `));
    const parts = desc.split(',').map((p) => p.trim());
    return parts[parts.indexOf(name) + 1];
  }

  async switchTo(name) {
    await this.waitForOpen();
    await this.tap(S.descContains(`, ${name}, `), { scroll: true });
  }

  async addProfile() {
    await this.tap(SEL.addProfile, { scroll: true });
  }

  async close() {
    await this.tap(SEL.closeBtn);
  }
}

export default new SwitchProfileSheet();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
