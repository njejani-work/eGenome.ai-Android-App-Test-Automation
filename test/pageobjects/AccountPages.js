import BasePage, { S } from './BasePage.js';

// Smaller Settings sub-screens.
// Captured as: MainScreen29 (Transaction History), MainScreen20 (Booking History, Subscription
// Management and Priority Support - merged into one capture), MainScreen32/33 (Cancel Subscription).

// ---------- Transaction History ----------
const TX = {
  title: S.text('Transaction History'),
  subtitle: S.textStarts('Your transaction history'),
  filter: (name) => S.desc(name), // All | Captured | Refunded | Failed | Authorized | Created
  empty: S.text('No Transactions Yet'),
};
export const TX_FILTERS = ['All', 'Captured', 'Refunded', 'Failed', 'Authorized', 'Created'];

class TransactionHistoryPage extends BasePage {
  get layoutSpec() { return 'TransactionHistory'; }

  get anchors() { return [TX.subtitle]; }
  get emptyState() { return $(TX.empty); }

  async filterBy(name) {
    // The filter chips scroll sideways
    const el = await this.swipeRowTo(TX.filter(name), TX.filter('All'));
    await el.click();
  }

  async isEmpty() { return this.exists(TX.empty); }
}

// ---------- Booking History ----------
const BK = {
  title: S.text('Booking History'),
  count: S.textMatches('\\d+ bookings? found'),
  bookingCard: (service) => S.descContains(`, ${service}, `), // e.g. 'Sample Collection'
  detailsTitle: S.text('Booking Details'),
  value: (label) => S.textAfter(label), // 'Service:' | 'Date:' | 'Time:' | 'Duration:' | 'Reference:' ...
};

class BookingHistoryPage extends BasePage {
  get anchors() { return [BK.count]; }

  async getBookingCount() {
    return Number((await this.textOf(BK.count)).match(/\d+/)[0]);
  }

  async openBooking(service = 'Sample Collection') {
    await this.tap(BK.bookingCard(service), { scroll: true });
    await $(BK.detailsTitle).waitForDisplayed();
  }

  /** Value next to a caption in Booking Details, e.g. getDetail('Reference:') -> "10766054636" */
  async getDetail(label) {
    await this.scrollTo(S.text(label));
    return this.textOf(BK.value(label));
  }
}

// ---------- Subscription Management ----------
const SUB = {
  title: S.text('Subscription Management'),
  subtitle: S.textStarts('Manage your plan'),
  planName: S.textAfter('Current Subscription'),
  value: (label) => S.textAfter(label), // 'Price' | 'Active Since' | 'Next Billing'
  noPaymentMethods: S.textStarts('No payment methods'),
  noInvoices: S.textStarts('No invoice history'),
  cancelBtn: S.desc('Cancel Subscription'),
};

class SubscriptionPage extends BasePage {
  get anchors() { return [SUB.subtitle]; }

  /** { plan, status, price, activeSince, nextBilling } */
  async getPlan() {
    await this.scrollTo(S.text('Current Subscription'));
    return {
      plan: await this.textOf(SUB.planName),
      status: await this.textOf(S.textAfter('Current Subscription', 2)),
      price: await this.textOf(SUB.value('Price')),
      activeSince: await this.textOf(SUB.value('Active Since')),
      nextBilling: await this.textOf(SUB.value('Next Billing')),
    };
  }

  async openCancel() {
    await this.tap(SUB.cancelBtn, { scroll: true });
  }
}

// ---------- Cancel Subscription ----------
const CANCEL = {
  title: S.text('Cancel Subscription'),
  currentPlan: S.text('Current Plan'),
  value: (label) => S.textAfter(label), // 'Status:' | 'Price:' | 'Active Until:'
  reasonPrompt: S.textStarts('Please select a reason'),
  reason: (text) => S.desc(text),
  confirmBtn: S.desc('Cancel Subscription'),
};
export const CANCEL_REASONS = [
  "I didn't use it enough / my needs have changed",
  'It felt too expensive for what I got',
  'I found a better or more local app/service',
  'Technical issues or poor app experience',
  'I faced billing or payment issues',
  'Other',
];

class CancelSubscriptionPage extends BasePage {
  get anchors() { return [CANCEL.reasonPrompt, CANCEL.currentPlan]; }

  async getStatus() { return this.textOf(CANCEL.value('Status:')); }
  async getActiveUntil() { return this.textOf(CANCEL.value('Active Until:')); }

  async selectReason(text) {
    await this.tap(CANCEL.reason(text), { scroll: true });
  }

  /** Destructive: only call with confirm: true on a test account. */
  async cancel({ reason = CANCEL_REASONS[0], confirm = false } = {}) {
    await this.selectReason(reason);
    if (!confirm) return;
    await this.tap(CANCEL.confirmBtn, { scroll: true });
  }
}

// ---------- Help & Support (Priority Support) ----------
const HELP = {
  title: S.text('Priority Support'),
  call: S.descContains('Call Priority Support'),
  email: S.descContains('Email Priority Support'),
};

class HelpSupportPage extends BasePage {
  get anchors() { return [HELP.title, HELP.call]; }

  /** { phone: "+91-7045047045", hours: "Mon-Fri: ..." } */
  async getCallInfo() {
    const parts = (await this.descOf(HELP.call)).split(',').map((p) => p.trim());
    const i = parts.indexOf('Call Priority Support');
    return { phone: parts[i + 1], hours: parts.slice(i + 2).join(', ') };
  }

  async getSupportEmail() {
    return (await this.descOf(HELP.email)).match(/[\w.+-]+@[\w.-]+/)[0];
  }

  /** Opens the phone dialer (leaves the app - press back to return). */
  async callSupport() {
    await this.tap(HELP.call, { scroll: true });
  }

  async emailSupport() {
    await this.tap(HELP.email, { scroll: true });
  }
}

export const TransactionHistory = new TransactionHistoryPage();
export const BookingHistory = new BookingHistoryPage();
export const Subscription = new SubscriptionPage();
export const CancelSubscription = new CancelSubscriptionPage();
export const HelpSupport = new HelpSupportPage();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = { TransactionHistoryPage: TX, BookingHistoryPage: BK, SubscriptionPage: SUB, CancelSubscriptionPage: CANCEL, HelpSupportPage: HELP };
