# How to Read the Dashboard

Every `npm run wdio` creates a **run**. The dashboard (`reports/index.html` in the project; `dashboard/index.html` in this folder) lists the runs and shows each one step by step. It opens directly in a browser, needs no server and works offline.

## Overview page

- **Tiles:** status of the last run, its pass rate, the average pass rate and run time over the last 10 runs, and the number of **flaky** tests (tests that both passed and failed recently).
- **Tests per run:** one bar per run, split into passed (green), failed (red) and skipped (grey). Hover a bar for its numbers; click it to open the run.
- **Runs:** every kept run with its device, duration and counts. Click a row to open it. The box above the table filters the list.
- **Test health:** each test with its recent results as coloured squares (oldest on the left). Click a square to jump to that test in that run.

## Run page

- **Header:** start time, duration, device and Android version, app, environment, and links to the raw **run log** and **run.json**.
- **Filter:** All / Failed / Passed / Skipped, plus a search box that matches test and step names.
- **Test cards:** failed tests open automatically. Each card lists its **steps**:

| Column | Meaning |
|---|---|
| # | Step number |
| Icon | ✔ passed, ✖ failed |
| Step | What was done, e.g. `Login · Request OTP`. The grey line underneath is the exact code call (`LoginPage.requestOtp("9999999999")`). **Assertion** steps are the checks (`expect(...).toBeDisplayed()`). Expand *N actions* to see the individual taps, typing and scrolls. |
| Time | How long the step took |
| Screen | Screenshot taken **after** the step. Click it to enlarge, then use ← → to step through the test's screenshots. |

When a step fails:

- The row turns red and shows the **error message**. Expand **Stack trace** for where it happened in the code.
- The test shows which step it failed at, and a **Screen at failure** screenshot if the failing step had none.
- **Device log (logcat):** the Android log lines from the app around the failure. Look for `ReactNativeJS` or `AndroidRuntime` errors there.

OTP codes are masked (`••••••`) everywhere.

## Skipped tests

A test is *skipped* when an earlier hook failed (for example the login in `before`), so the test never ran. Fix the hook's error first. It appears as a **Hook** card.

## Where the files are

```
reports/
  index.html            the dashboard
  data/                 data the dashboard reads (generated)
  runs/<run-id>/
    run.log             plain-text log of every step
    run.json            full results (for CI or scripts)
    screenshots/        one PNG per step
```

Old runs are deleted automatically (the 30 newest are kept; change this with `DASHBOARD_KEEP_RUNS`). If a run was interrupted, `npm run dashboard:build` repairs the data.
