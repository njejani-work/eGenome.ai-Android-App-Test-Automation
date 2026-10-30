// REGRESSION · Payments - all P0/P1 flows.
// PAY-01…06 never move money. PAY-07/08 (successful / failed payment) only run when staging uses
// Razorpay TEST mode (RAZORPAY_TEST_MODE=true) - otherwise they skip with their prerequisite.
// Checkout tests also skip until the Premium "pay" button is captured (see 07-Known-Issues).
import { LoginPage, HomePage, PremiumPage, RazorpayCheckoutPage, ReportsPage } from '../../pageobjects/index.js';
import { getUser, flags, accountData } from '../../data/users.js';

describe('Payments', () => {
  before(async function () {
    await LoginPage.ensureLoggedIn(getUser());
    await HomePage.open();
    if (!(await HomePage.isPaymentPending())) this.skip(); // nothing to pay on this account
  });

  const needCheckout = async (ctx) => {
    if (!(await PremiumPage.isOpen(2000))) { await HomePage.open(); await HomePage.tapCompletePayment(); await PremiumPage.waitForOpen(); }
    if (!(await PremiumPage.payBtn.isExisting())) ctx.skip(); // pay button not captured yet
  };

  it('PAY-01 [P0] the payment banner opens the Premium plan screen with prices', async () => {
    await HomePage.tapCompletePayment();
    await PremiumPage.waitForOpen();
    await PremiumPage.verifyLayout();
    expect((await PremiumPage.getPrices()).length).toBeGreaterThan(0);
  });

  it('PAY-02 [P1] payment methods are shown', async () => {
    for (const m of ['visa', 'upi']) expect(await PremiumPage.hasPaymentMethod(m)).toBe(true);
  });

  it('PAY-03 [P1] both plan options can be selected', async () => {
    await PremiumPage.choosePlan('emi');
    await PremiumPage.choosePlan('one-time');
    await expect(PremiumPage.oneTimeOption).toBeExisting();
  });

  it('PAY-04 [P0] Razorpay checkout opens with the plan amount', async function () {
    await needCheckout(this);
    await PremiumPage.proceedToPayment();
    await RazorpayCheckoutPage.waitForOpen();
    expect(await RazorpayCheckoutPage.getTotal()).toMatch(/^₹[\d,]+/);
  });

  it('PAY-05 [P1] "Continue to payment" on the exit dialog keeps the user in checkout', async function () {
    if (!(await RazorpayCheckoutPage.isOpen(2000))) this.skip();
    await RazorpayCheckoutPage.openExitDialog();
    await RazorpayCheckoutPage.continuePayment();
    expect(await RazorpayCheckoutPage.isOpen(5000)).toBe(true);
  });

  it('PAY-06 [P1] leaving checkout returns to the app without paying; the report stays locked', async function () {
    if (!(await RazorpayCheckoutPage.isOpen(2000))) this.skip();
    await RazorpayCheckoutPage.exit();
    expect(await RazorpayCheckoutPage.isOpen(3000)).toBe(false);
    await ReportsPage.open();
    if (await ReportsPage.hasReport(accountData.pendingReport)) {
      expect(await ReportsPage.getReportStatus(accountData.pendingReport)).toBe('PAYMENT PENDING');
    }
  });

  it('PAY-07 [P1] a successful test-mode payment unlocks the report and is listed as Captured [needs: RAZORPAY_TEST_MODE=true + Razorpay card-form capture]', async function () {
    // Steps once the prerequisites exist: checkout → Razorpay test card (success) → back in the app:
    // pending report shows COMPLETED, Home banner gone, Transaction History "Captured" has the payment.
    if (!flags.razorpayTestMode) this.skip();
    await needCheckout(this);
    this.skip(); // Razorpay card-entry screens not captured yet - see 07-Known-Issues
  });

  it('PAY-08 [P1] a failed test-mode payment shows an error and can be retried [needs: RAZORPAY_TEST_MODE=true + Razorpay card-form capture]', async function () {
    // Steps: checkout → Razorpay failing test card → "Payment processing failed" on Premium, retry possible, report still locked.
    if (!flags.razorpayTestMode) this.skip();
    await needCheckout(this);
    this.skip(); // Razorpay card-entry screens not captured yet
  });

  after(async () => {
    if (await RazorpayCheckoutPage.isOpen(1000)) await RazorpayCheckoutPage.exit();
    if (await PremiumPage.isOpen(1000)) await PremiumPage.close();
  });
});
