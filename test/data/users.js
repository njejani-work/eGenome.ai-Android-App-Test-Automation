// Test users. Real values live in .env (not committed); this file maps them to named users.
//   import { getUser } from '../data/users.js';
//   const user = getUser();            // default user from .env
//   const other = getUser('secondary');
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load <project>/.env even when this file is imported outside the WDIO runner
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
dotenv.config({ path: path.join(root, '.env'), quiet: true });

const env = process.env;

export const users = {
  /** Main test account (must exist on the backend and accept the fixed OTP). */
  default: {
    name: env.TEST_USER_NAME || 'John Doe',
    countryCode: env.TEST_COUNTRY_CODE || '+91',
    phone: env.TEST_PHONE,
    otp: env.TEST_OTP,
  },
  /** Optional second account (e.g. a dependent / spouse login). */
  secondary: {
    name: env.TEST_USER2_NAME,
    countryCode: env.TEST_COUNTRY_CODE || '+91',
    phone: env.TEST_USER2_PHONE,
    otp: env.TEST_USER2_OTP || env.TEST_OTP,
  },
  /** For negative tests: a valid-format number with a wrong OTP. */
  wrongOtp: {
    name: env.TEST_USER_NAME || 'John Doe',
    countryCode: env.TEST_COUNTRY_CODE || '+91',
    phone: env.TEST_PHONE,
    otp: env.TEST_WRONG_OTP || '000000',
  },
};

/**
 * Data the test account is expected to have (see 05-Test-Data in the deliverables).
 * Override in .env if the staging account differs.
 */
export const accountData = {
  dependentName: env.TEST_DEPENDENT_NAME || 'Johny Mark',
  completedReport: env.TEST_COMPLETED_REPORT || 'CVD Assessment Health Report',
  pendingReport: env.TEST_PENDING_REPORT || 'Diabetes Risk Assessment Health Report',
  bookingService: env.TEST_BOOKING_SERVICE || 'Sample Collection',
};

/** Switches for flows that change account data or need extra staging setup. */
export const flags = {
  /** TEST_ALLOW_DATA_CHANGES=true: run tests that add data they can't remove (e.g. a new address). Use a disposable account. */
  allowDataChanges: env.TEST_ALLOW_DATA_CHANGES === 'true',
  /** RAZORPAY_TEST_MODE=true: staging uses Razorpay test mode, so test cards can be used. */
  razorpayTestMode: env.RAZORPAY_TEST_MODE === 'true',
  /** Area searched on the map when adding an address. */
  addressSearch: env.TEST_ADDRESS_SEARCH || 'Gurugram',
};

/** Returns a user and fails early with a clear message if .env is missing values. */
export function getUser(key = 'default') {
  const user = users[key];
  if (!user) throw new Error(`Unknown test user "${key}". Known: ${Object.keys(users).join(', ')}`);
  const missing = ['phone', 'otp'].filter((f) => !user[f]);
  if (missing.length) {
    throw new Error(`Test user "${key}" is missing ${missing.join(' and ')}. Set them in .env (see .env.example).`);
  }
  if (!/^\d{10}$/.test(String(user.phone))) throw new Error(`Test user "${key}": phone must be 10 digits without country code`);
  if (!/^\d{6}$/.test(String(user.otp))) throw new Error(`Test user "${key}": OTP must be 6 digits`);
  return { ...user, phone: String(user.phone), otp: String(user.otp) };
}

/** "+91 9999999999" style, as shown in the app. */
export const fullPhone = (user) => `${user.countryCode}${user.phone}`;
