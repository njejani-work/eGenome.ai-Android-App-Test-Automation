// REGRESSION · Home, daily routine, Monthly Progress and profile switching - all P0/P1 flows.
// Changes: HOM-07 marks one of today's routine items as done (today's progress only);
// HOM-10 switches to the dependent's profile and back.
import { LoginPage, HomePage, MonthlyProgressPage, SwitchProfileSheet, SLOTS } from '../../pageobjects/index.js';
import { getUser, accountData } from '../../data/users.js';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthLabel = (d) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

describe('Home', () => {
  const user = getUser();

  before(async () => {
    await LoginPage.ensureLoggedIn(user);
  });

  it('HOM-01 [P0] Home shows the profile, health cards and tabs in the expected layout', async () => {
    await HomePage.open();
    await HomePage.verifyLayout();
    await expect(HomePage.profileChip(user.name)).toBeExisting();
  });

  it('HOM-02 [P1] weight and BMI cards show values and ranges', async () => {
    expect(await HomePage.getVital('Weight')).toMatch(/Weight, [A-Z]+, [\d.]+ kg/);
    expect(await HomePage.getVital('BMI')).toMatch(/BMI, [A-Z]+, [\d.]+/);
  });

  it('HOM-03 [P1] routine tabs Meals / Exercise / Supplements can be selected', async () => {
    for (const tab of ['Exercise', 'Supplements', 'Meals']) await HomePage.selectRoutineTab(tab);
    await HomePage.scrollTo(HomePage.mealSlotSelector('Breakfast'));
    await expect(HomePage.mealSlot('Breakfast')).toBeDisplayed();
  });

  it('HOM-04 [P1] expanding a routine slot shows its actions', async () => {
    await HomePage.expandSlot('Early Morning');
    expect((await HomePage.getVisibleSlotActions()).length).toBeGreaterThan(0);
    await HomePage.expandSlot('Early Morning'); // collapse again
  });

  it('HOM-05 [P1] "+N more items" expands the current routine card', async function () {
    await HomePage.scrollToTop();
    await HomePage.scrollTo(HomePage.mealSlotSelector('Breakfast'));
    if (!(await HomePage.hasMoreItemsLink())) this.skip(); // no collapsed items today
    await HomePage.openMoreItems();
    expect(await HomePage.hasMoreItemsLink()).toBe(false);
  });

  it('HOM-06 [P1] the daily task counter is consistent', async () => {
    const { done, total } = await HomePage.getTaskProgress();
    expect(total).toBeGreaterThan(0);
    expect(done).toBeLessThanOrEqual(total);
  });

  it('HOM-07 [P1] marking a routine item as done updates today\'s progress', async function () {
    const before = await HomePage.getTaskProgress();
    if (before.done >= before.total) this.skip(); // everything already done today
    let marked = false;
    for (const slot of SLOTS) {
      await HomePage.expandSlot(slot);
      const actions = await HomePage.getVisibleSlotActions();
      const doneAction = actions.find((a) => a === 'Done' || a === 'Mark as eaten');
      if (doneAction) { await HomePage.markSlot(slot, doneAction); marked = true; break; }
      await HomePage.expandSlot(slot); // collapse, try the next slot
    }
    if (!marked) this.skip(); // no open item offers "Done" right now
    await driver.waitUntil(async () => (await HomePage.getTaskProgress()).done > before.done, {
      timeout: 10000, timeoutMsg: 'Task counter did not increase after marking an item as done',
    });
  });

  it('HOM-08 [P1] Monthly Progress opens on the current month and moves between months', async () => {
    const now = new Date();
    const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    await HomePage.openMonthlyProgress();
    await MonthlyProgressPage.waitForOpen();
    await MonthlyProgressPage.verifyLayout();
    expect(await MonthlyProgressPage.getMonth()).toBe(monthLabel(now));
    await MonthlyProgressPage.previousMonth();
    expect(await MonthlyProgressPage.getMonth()).toBe(monthLabel(prev));
    await MonthlyProgressPage.nextMonth();
    expect(await MonthlyProgressPage.getMonth()).toBe(monthLabel(now));
  });

  it('HOM-09 [P1] Monthly Progress crosses the year boundary (January → December) and a past day opens', async () => {
    const now = new Date();
    await MonthlyProgressPage.goToMonth(`January ${now.getFullYear()}`);
    await MonthlyProgressPage.previousMonth();
    expect(await MonthlyProgressPage.getMonth()).toBe(`December ${now.getFullYear() - 1}`);
    await MonthlyProgressPage.goToMonth(monthLabel(now));
    await MonthlyProgressPage.selectDay(1);
    await expect(MonthlyProgressPage.mealsTab).toBeExisting();
    await MonthlyProgressPage.close();
    await HomePage.waitForOpen();
  });

  it('HOM-10 [P1] profile switcher lists profiles and switches to a dependent and back', async () => {
    await HomePage.openProfileSwitcher();
    await SwitchProfileSheet.waitForOpen();
    await SwitchProfileSheet.verifyLayout();
    await expect(SwitchProfileSheet.profile(accountData.dependentName)).toBeExisting();
    await SwitchProfileSheet.switchTo(accountData.dependentName);
    await HomePage.waitForOpen();
    await expect(HomePage.profileChip(accountData.dependentName)).toBeExisting();
    await HomePage.openProfileSwitcher(accountData.dependentName);
    await SwitchProfileSheet.switchTo(user.name);
    await expect(HomePage.profileChip(user.name)).toBeExisting();
  });
});
