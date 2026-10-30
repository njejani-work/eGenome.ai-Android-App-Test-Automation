import BasePage, { S, re } from './BasePage.js';

// Captured as: October2026Screen, September2026Screen, August2026Screen (calendar)
// and MainScreen11 (selected day's routine). Opened from the calendar icon on Home.
// The calendar ids come from a React Native testID with an undefined prefix
// ("undefined.header.title"), so they're matched by suffix in case developers fix the prefix.
const SEL = {
  title: S.text('Monthly Progress'),
  subtitle: S.text('Track your health journey'),
  backBtn: S.desc('Go back'),
  monthTitle: S.idMatches('.*header\\.title'),
  prevMonth: S.idMatches('.*header\\.leftArrow'),
  nextMonth: S.idMatches('.*header\\.rightArrow'),
  completed: S.text('Completed'),
  mealsTab: S.desc('Meals'),
  exerciseTab: S.desc('Exercise'),
  supplementsTab: S.desc('Supplements'),
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthIndex = (label) => {
  const [m, y] = label.trim().split(/\s+/);
  return Number(y) * 12 + MONTHS.indexOf(m);
};

class MonthlyProgressPage extends BasePage {
  get layoutSpec() { return 'MonthlyProgress'; }

  get anchors() {
    return [SEL.title, SEL.monthTitle];
  }

  get monthTitle() { return $(SEL.monthTitle); }
  get prevMonthBtn() { return $(SEL.prevMonth); }
  get nextMonthBtn() { return $(SEL.nextMonth); }
  get mealsTab() { return $(SEL.mealsTab); }
  get exerciseTab() { return $(SEL.exerciseTab); }
  get supplementsTab() { return $(SEL.supplementsTab); }

  /** Day cell in the calendar (content-desc is just the day number). */
  day(n) {
    return $(S.desc(String(n)));
  }

  /** Routine row for the selected day, e.g. slot('Lunch'). */
  slot(name) {
    return $(S.descMatches(`.*, ${re(name)}, .*`));
  }

  /** e.g. "October 2026" */
  async getMonth() {
    await this.scrollTo(SEL.monthTitle, { direction: 'up' });
    return this.textOf(SEL.monthTitle);
  }

  async previousMonth() {
    await this.tap(SEL.prevMonth, { scroll: true });
  }

  async nextMonth() {
    await this.tap(SEL.nextMonth, { scroll: true });
  }

  /** Navigate the calendar to a month label like "August 2026". */
  async goToMonth(label, maxSteps = 24) {
    for (let i = 0; i < maxSteps; i++) {
      const current = await this.getMonth();
      if (current === label) return;
      const before = current;
      if (monthIndex(label) < monthIndex(current)) await this.previousMonth();
      else await this.nextMonth();
      await driver.waitUntil(async () => (await this.textOf(SEL.monthTitle)) !== before, { timeout: 5000 });
    }
    throw new Error(`Could not reach month ${label}`);
  }

  async selectDay(n) {
    await this.tap(S.desc(String(n)), { scroll: true });
  }

  /** 'Meals' | 'Exercise' | 'Supplements' */
  async selectTab(tab) {
    await this.tap(S.desc(tab), { scroll: true });
  }

  async close() {
    await this.tap(SEL.backBtn);
  }
}

export default new MonthlyProgressPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
