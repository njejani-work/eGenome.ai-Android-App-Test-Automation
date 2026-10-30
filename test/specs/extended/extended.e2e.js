// EXTENDED (weekly / major releases) - PENDING P2 and destructive flows.
// (All P0/P1 flows live in the regression suite; P1 items here need data or captures that don't exist yet.)
// These flows are planned but not automated yet. Each is skipped and shows on the dashboard as
// "skipped" with its prerequisite in the title. To automate one: meet the prerequisite, replace
// `it.skip` with `it`, and write the steps listed in its comment.
// Run: npm run test:extended

describe('Extended · Payments', () => {
  // Successful / failed test-mode payments are in regression (PAY-07/08) and run once RAZORPAY_TEST_MODE=true.
  it.skip('EXT-03 [P2] payment banner disappears from Home after payment [needs: Razorpay test mode]', () => {});
});

describe('Extended · Login extras', () => {
  // Steps: on the OTP screen tap "Send OTP via WhatsApp". Expect: confirmation / WhatsApp flow starts.
  it.skip('EXT-04 [P2] OTP via WhatsApp starts the alternate flow [needs: WhatsApp OTP enabled for the test number]', () => {});
  // Steps: fresh state → tap the phone field → pick the number in Google's sheet. Expect: field filled.
  it.skip('EXT-05 [P2] picking a number from Google\'s phone picker fills the field [needs: SIM/number on the emulator]', () => {});
  // Steps: fresh state → swipe through every intro slide instead of Skip. Expect: last slide leads to login.
  it.skip('EXT-06 [P2] swiping through the whole intro reaches login [needs: capture of every intro slide]', () => {});
  // Steps: request OTP, wait for the countdown to finish, tap Resend. Expect: new OTP works, old one rejected.
  it.skip('EXT-07 [P1] resend OTP invalidates the previous code [needs: staging that issues real/different OTPs]', () => {});
  // Steps: sign out, log in as the second user. Expect: no data from the first user is shown anywhere.
  it.skip('EXT-08 [P2] switching accounts leaves no data from the previous user [needs: TEST_USER2_* in .env]', () => {});
});

describe('Extended · Home and reports', () => {
  // Steps: mark a meal as eaten → relaunch → still marked; streak / % updated. Then un-mark if possible.
  it.skip('EXT-10 [P2] marking a routine item updates progress and persists [needs: disposable account or a way to reset the day]', () => {});
  it.skip('EXT-11 [P2] View Full Journey / Path to Health Insights opens [needs: capture of the journey screen]', () => {});
  it.skip('EXT-12 [P2] Schedule Your Call opens the booking flow (no booking made) [needs: capture of the booking screens]', () => {});
  // Steps: Report tab → Sample Reports → open each SAMPLE_REPORTS entry → back. Expect: each opens without errors.
  it.skip('EXT-13 [P2] every sample report opens [needs: capture of a sample report screen]', () => {});
  it.skip('EXT-15 [P2] RCA conditions expand to key markers and deficiencies [needs: capture of an expanded RCA card]', () => {});
});

describe('Extended · Settings (changes account data - use a disposable account)', () => {
  it.skip('EXT-17 [P2] edit / delete an address and change the primary one [needs: capture of the card menu]', () => {});
  it.skip('EXT-18 [P2] non-serviceable pincode is flagged [needs: a known non-serviceable pincode]', () => {});
  it.skip('EXT-19 [P1] add a dependent - appears in Family Network and in Switch Profile [needs: disposable account]', () => {});
  it.skip('EXT-20 [P2] remove a dependent [needs: disposable dependent + remove-confirmation capture]', () => {});
  it.skip('EXT-22 [P2] add and verify an email address [needs: test mailbox]', () => {});
  it.skip('EXT-23 [P2] change profile photo / cancel the picker [needs: test image on the emulator]', () => {});
  it.skip('EXT-24 [P2] theme Light / Dark / System applies and persists [needs: dark-theme layout specs]', () => {});
  it.skip('EXT-25 [P1] cancel subscription (confirm) [needs: disposable subscribed account]', () => {});
  // Steps: Help & Support → Call → dialer shows +91-7045047045; Email → mail app addressed to support@egenome.ai.
  it.skip('EXT-26 [P2] Help & Support opens the dialer and e-mail [needs: decision on leaving the app in tests]', () => {});
});

describe('Extended · Device and accessibility', () => {
  it.skip('EXT-27 [P2] largest system font size does not break key screens [needs: layout specs at font scale 1.3]', () => {});
  it.skip('EXT-28 [P2] rotation / second screen size [needs: second emulator profile + its layout baseline]', () => {});
  it.skip('EXT-29 [P2] Android Back behaves consistently on every screen [needs: expected back behaviour per screen]', () => {});
  it.skip('EXT-30 [P2] notification / deep links open the right screen [needs: list of deep links]', () => {});
  it.skip('EXT-31 [P2] accessibility audit: every tappable element has a label and ≥48dp target [needs: testIDs from developers]', () => {});
});
