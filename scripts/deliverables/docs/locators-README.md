# Locators

| File | What it is |
|---|---|
| `Locator-Catalog.html` | **Start here.** Every screen with its screenshot and a table of elements: selector, strategy, a plain-English version and notes. Open it in a browser; the box at the top filters it. |
| `locators.csv` | The same table for Excel (one row per element) |
| `locators.json` | The same data for tools and scripts |
| `screenshots/` | One screenshot per screen (named after the page object) |
| `raw-capture/` | Raw output of the locator-capture tool: every element it saw on every captured screen. Use it to look up an attribute the catalogue doesn't list. |

## How to read a locator

The app is built with React Native, so most elements have **no resource-id**. Elements are found by their **accessibility label** (content-desc) or **visible text**:

| Strategy | Example | Means |
|---|---|---|
| Accessibility label (exact) | `android=new UiSelector().description("Send OTP")` | The label equals "Send OTP" |
| Accessibility label (contains) | `…descriptionContains(", Day Streak")` | The label contains the text. Used when the rest of the label is live data (e.g. "1, Day Streak") |
| Accessibility label (regex) | `…descriptionMatches(".+, Manage Addresses(, .*)?")` | The label matches a pattern. Used when icons sit around the text |
| Text | `…text("Log in or Sign up")` | The visible text |
| XPath after a caption | `//*[starts-with(@text, "FIRST NAME")]/following::android.widget.EditText[1]` | The first input after the "FIRST NAME" caption |
| Resource ID | `…resourceIdMatches(".*:id/permission_allow_button")` | Android system dialogs, which do have ids |

## Flags in the Notes column

- **Template:** contains `{placeholders}` that the page object fills in. For example, `{name}` becomes the menu item name.
- **Icon glyph:** the label is an icon-font character (shown as ``). It works, but breaks if the icon set changes. Ask the developers to add a `testID`.
- **NOT VERIFIED:** the screen hasn't been captured yet, so the selector is a best guess. Capture it and update the page object.
- **Index-based:** picks the n-th match, so it depends on the order of items on screen.

## When a locator breaks

1. Open the screen in the emulator and run `npm run locators:attach` (with `npm run appium` running in another terminal).
2. Find the element in the new `locators/<Screen>.json` file or screenshot.
3. Update the selector in the page object file shown in the catalogue (`test/pageobjects/...`).
4. Run `npm run deliverables` to refresh this catalogue.
