// Dashboard settings. Override with environment variables (e.g. in .env).
// Values are read on access, so settings loaded from .env after import still apply.
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

const env = process.env;
const num = (v, d) => (v != null && v !== '' && !Number.isNaN(Number(v)) ? Number(v) : d);

export const options = {
  /** Where runs + the dashboard are written (DASHBOARD_DIR, default "reports"). */
  get reportsDir() { return path.resolve(PROJECT_ROOT, env.DASHBOARD_DIR || 'reports'); },
  /** DASHBOARD_SCREENSHOTS: 'all' = after every step (default), 'failures' = failed steps/tests only, 'none'. */
  get screenshots() { return (env.DASHBOARD_SCREENSHOTS || 'all').toLowerCase(); },
  /** DASHBOARD_LOGCAT=false turns off attaching Android logcat to failed tests. */
  get logcat() { return env.DASHBOARD_LOGCAT !== 'false'; },
  /** DASHBOARD_KEEP_RUNS: how many runs to keep (older run folders are deleted). */
  get keepRuns() { return num(env.DASHBOARD_KEEP_RUNS, 30); },
  /** DASHBOARD_VERBOSE=true echoes each step to the console as well as the run log. */
  get verbose() { return env.DASHBOARD_VERBOSE === 'true'; },
  /** TEST_ENV: label shown on the dashboard, e.g. "staging". */
  get environment() { return env.TEST_ENV || 'staging'; },
  /** DASHBOARD_TITLE: name in the dashboard header. */
  get projectName() { return env.DASHBOARD_TITLE || 'eGenome.ai App Tests'; },
};
