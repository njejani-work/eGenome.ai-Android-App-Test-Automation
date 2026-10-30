# How-To

## Add a new test

1. Create `test/specs/<suite>/<feature>.e2e.js` (suite = `smoke`, `regression`, `layout` or `extended`). Start each title with an ID and priority, e.g. `'RPT-07 [P1] …'`. A planned test that can't run yet is `it.skip('… [needs: what is missing]', () => {})`:

   ```js
   import { LoginPage, ReportsPage, ReportDetailPage, REPORTS } from '../pageobjects/index.js';

   describe('Reports', () => {
     before(async () => {
       await LoginPage.ensureLoggedIn();          // skips intro / logs in only if needed
     });

     it('opens the CVD report', async () => {
       await ReportsPage.open();
       await ReportsPage.openReport(REPORTS.cvd);
       await ReportDetailPage.waitForOpen();
       await expect(ReportDetailPage.downloadBtn).toBeDisplayed();
     });
   });
   ```

2. Run just that file: `npx wdio run ./wdio.conf.js --spec ./test/specs/<feature>.e2e.js`
3. Check the run on the dashboard (`npm run dashboard`). Each page-object call and each `expect` is a step with a screenshot.

Rules of thumb:

- Always import page objects from `test/pageobjects/index.js`. Those copies are the ones logged to the dashboard.
- Keep screen logic (locators, waits, scrolling) in page objects. Specs should read like test cases.
- For something that isn't a page-object call, wrap it in `step()` so it shows on the dashboard:

  ```js
  import { step } from '../pageobjects/index.js';
  await step('Clear app data', () => driver.execute('mobile: clearApp', { appId: 'com.egenome.app' }));
  ```

- Get phone numbers and OTPs from `getUser()` (`test/data/users.js`), never hard-coded.
- Destructive actions need an explicit flag, for example `CancelSubscriptionPage.cancel({ confirm: true })`. Only use them on a test account.

## Add layout checks to a test

Call `verifyLayout()` once the screen is open: `await ProfilePage.verifyLayout();`. The page's spec name is its `layoutSpec` getter (`test/layout/specs/<Name>.json`).

- **A new screen:** add `get layoutSpec() { return 'Cart'; }` to the page object, open the screen in a test that calls `verifyLayout()`, and run that test once with `LAYOUT_UPDATE=true` (`node scripts/run-with-env.mjs LAYOUT_UPDATE=true -- wdio run ./wdio.conf.js --spec <file>`). The spec is recorded from the live app; review it and set `"reviewed": true`.
- **An intended design change:** `npm run layout:baseline` re-records every spec, or the single-spec command above re-records one.
- **A check that shouldn't apply:** remove it from the element's `checks` array (e.g. `"text"` for text that changes), add the element name to `ignore`, or loosen `tolerance` for that screen.
- **While specs are being reviewed:** `LAYOUT_CHECKS=warn` reports differences on the dashboard without failing tests.

## Fix a broken locator

1. Open the failing run on the dashboard and look at the failed step's screenshot and error.
2. Put the app on that screen in the emulator.
3. In two terminals: `npm run appium`, then `npm run locators:attach`.
4. Look at `locators/<Screen>.json` (or its screenshot) for the element's `contentDesc`, `text` or `resourceId`.
5. Update the selector in the page object (the Locator Catalogue shows the file). Prefer, in this order: exact label, then partial label, then text, then XPath after a caption.
6. Re-run the test, then `npm run deliverables`.

## Add a new screen

1. Capture it (`npm run locators:attach`, press `n` to give it a meaningful name such as `CartScreen`).
2. Create `test/pageobjects/CartPage.js` following an existing page. A `SEL` map of selectors, `anchors` (what proves the screen is open), getters and actions.
3. Export it from `test/pageobjects/index.js` wrapped in `instrument(...)`.
4. Add it to `test/pageobjects/catalog.js` (screen name, area, capture names) so it appears in the Locator Catalogue.

## Dashboard settings

Set in `.env`:

| Setting | Default | |
|---|---|---|
| `DASHBOARD_SCREENSHOTS` | `all` | `failures` makes runs faster and smaller |
| `DASHBOARD_KEEP_RUNS` | `30` | Older runs are deleted |
| `DASHBOARD_LOGCAT` | `true` | Device log on failures |
| `DASHBOARD_VERBOSE` | `false` | Also print every step in the console |
| `DASHBOARD_TITLE` | `eGenome.ai App Tests` | Dashboard heading |

## Hand the package over again

```bash
npm run wdio            # fresh results
npm run deliverables    # rebuilds ./deliverables
```

Zip the `deliverables` folder and share it.
