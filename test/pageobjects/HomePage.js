import BasePage, { S, re } from './BasePage.js';
import BottomNav from './components/BottomNav.js';

// Captured as: MainScreen2-8, MainScreen10, MainScreen34 (the Home tab at different scroll
// positions and states - the app is a single activity, so the capture split it up).
const SEL = {
  // Header
  profileSwitcher: S.descMatches('.+, (Self|self), .*'), // "John Doe, Self, ..." - the logged-in account
  // "You, right now" vitals
  youRightNow: S.text('You, right now'),
  weightCard: S.descContains(', Weight, '),
  bmiCard: S.descContains(', BMI, '),
  bodyFatCard: S.descContains(', Body Fat, '),
  stepsCard: S.descStarts('Steps, '),
  waterCard: S.descContains(', Water Goal, '),
  // Payment banner
  paymentBanner: S.descContains('ACTION NEEDED'),
  completePaymentBtn: S.desc('Complete Payment'),
  // Daily routine
  dailyRoutine: S.text('Daily Routine'),
  calendarBtn: S.desc('\u{F0E18}'), // calendar icon next to the date -> Monthly Progress
  dayStreak: S.descContains(', Day Streak'),
  tasksDone: S.textMatches('\\d+ of \\d+ tasks done today'),
  moreItems: S.descMatches('\\+\\d+ more items'),
  mealsTab: S.desc('Meals'),
  exerciseTab: S.desc('Exercise'),
  supplementsTab: S.desc('Supplements'),
  // Journey / expert call
  pathToInsights: S.text('Path To Health Insights'),
  viewFullJourney: S.desc('View Full Journey'),
  talkToExpert: S.text('Talk to a Health Expert'),
  scheduleCall: S.desc('Schedule Your Call'),
};

/** Routine slots as they appear on Home. */
export const SLOTS = ['Early Morning', 'Breakfast', 'Lunch', 'Dinner'];
/** Actions on an expanded routine item (two variants were captured). */
export const MEAL_ACTIONS = ['Done', 'Skip', 'Alternate', 'Mark as eaten', 'Swap'];

class HomePage extends BasePage {
  get layoutSpec() { return 'Home'; }

  get anchors() {
    return [SEL.profileSwitcher, SEL.youRightNow, SEL.dayStreak, SEL.dailyRoutine];
  }

  get nav() { return BottomNav; }

  get profileSwitcher() { return $(SEL.profileSwitcher); }
  get weightCard() { return $(SEL.weightCard); }
  get bmiCard() { return $(SEL.bmiCard); }
  get bodyFatCard() { return $(SEL.bodyFatCard); }
  get stepsCard() { return $(SEL.stepsCard); }
  get waterCard() { return $(SEL.waterCard); }
  get paymentBanner() { return $(SEL.paymentBanner); }
  get completePaymentBtn() { return $(SEL.completePaymentBtn); }
  get dailyRoutineHeader() { return $(SEL.dailyRoutine); }
  get calendarBtn() { return $(SEL.calendarBtn); }
  get dayStreak() { return $(SEL.dayStreak); }
  get tasksDone() { return $(SEL.tasksDone); }
  get mealsTab() { return $(SEL.mealsTab); }
  get exerciseTab() { return $(SEL.exerciseTab); }
  get supplementsTab() { return $(SEL.supplementsTab); }
  get viewFullJourneyBtn() { return $(SEL.viewFullJourney); }
  get scheduleCallBtn() { return $(SEL.scheduleCall); }

  /** Card for any profile name in the header, e.g. profileChip('Johny Mark'). */
  profileChip(name) {
    return $(S.descStarts(`${name}, `));
  }

  /** Routine row, e.g. mealSlot('Breakfast'). */
  mealSlotSelector(slot) {
    return S.descMatches(`.*, ${re(slot)} ?, .*`);
  }

  mealSlot(slot) {
    return $(this.mealSlotSelector(slot));
  }

  async open() {
    await BottomNav.openHome();
    return this.waitForOpen();
  }

  /** Opens the "Switch Profile" sheet from the header chip (pass the active profile's name when it isn't the account holder). */
  async openProfileSwitcher(activeProfileName) {
    await this.scrollToTop();
    await this.tap(activeProfileName ? S.descStarts(`${activeProfileName}, `) : SEL.profileSwitcher);
  }

  /** Returns the vitals card text, e.g. getVital('Weight') -> "Weight, GOOD, 56 kg, ..." */
  async getVital(name) {
    const map = { Weight: SEL.weightCard, BMI: SEL.bmiCard, 'Body Fat': SEL.bodyFatCard, Steps: SEL.stepsCard, 'Water Goal': SEL.waterCard };
    const sel = map[name] || S.descContains(`, ${name}, `);
    await this.scrollTo(sel);
    return (await this.descOf(sel)).replace(/^[^A-Za-z0-9]*,\s*/, '');
  }

  async isPaymentPending() {
    return this.exists(SEL.paymentBanner);
  }

  async tapCompletePayment() {
    await this.tap(SEL.completePaymentBtn, { scroll: true });
  }

  async getStreak() {
    await this.scrollTo(SEL.dayStreak);
    const desc = await this.descOf(SEL.dayStreak); // "1, Day Streak"
    return Number(desc.split(',')[0]);
  }

  /** "2 of 5 tasks done today" -> { done: 2, total: 5 } */
  async getTaskProgress() {
    await this.scrollTo(SEL.tasksDone);
    const [, done, total] = (await this.textOf(SEL.tasksDone)).match(/(\d+) of (\d+)/);
    return { done: Number(done), total: Number(total) };
  }

  /** Taps "+N more items" on the routine card; returns N. */
  async openMoreItems() {
    await this.scrollTo(SEL.moreItems);
    const n = Number((await this.descOf(SEL.moreItems)).match(/\d+/)[0]);
    await this.tap(SEL.moreItems);
    return n;
  }

  async hasMoreItemsLink() {
    return this.exists(SEL.moreItems);
  }

  async openMonthlyProgress() {
    await this.tap(SEL.calendarBtn, { scroll: true });
  }

  /** 'Meals' | 'Exercise' | 'Supplements' */
  async selectRoutineTab(tab) {
    await this.tap(S.desc(tab), { scroll: true });
  }

  async expandSlot(slot) {
    await this.tap(this.mealSlotSelector(slot), { scroll: true });
  }

  /** Expand a slot and tap one of its actions, e.g. markSlot('Breakfast', 'Done'). */
  async markSlot(slot, action = 'Done') {
    await this.expandSlot(slot);
    await this.tap(S.descMatches(`.*, ${re(action)}`), { scroll: true });
  }

  /** Action buttons currently shown on an expanded routine slot, e.g. ['Done', 'Skip', 'Alternate']. */
  async getVisibleSlotActions() {
    const out = [];
    for (const a of MEAL_ACTIONS) if (await this.exists(S.descMatches(`.*, ${re(a)}`))) out.push(a);
    return out;
  }

  async openFullJourney() {
    await this.tap(SEL.viewFullJourney, { scroll: true });
  }

  async scheduleExpertCall() {
    await this.tap(SEL.scheduleCall, { scroll: true });
  }
}

export default new HomePage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
