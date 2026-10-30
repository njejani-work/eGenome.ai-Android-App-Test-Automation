# Layout specs (Layer 1)

Generated 2026-10-28 12:31. Each JSON file in `layout-specs/` describes one screen: the expected text of every element, its position and size as a **share of the screen** (x/y/w/h, 0-1), and relations: order top to bottom, same row, left/right alignment, centring, inside-a-button, spacing, no overlap. Tests check them with `<Page>.verifyLayout()`; results appear on the dashboard (click a step's screenshot to see expected vs actual boxes).

| Screen spec | Page object | Elements | Rules | Reviewed | Source |
|---|---|---|---|---|---|
| Addresses | AddressesPage | 10 | 10 | **no** | device |
| Dependents | DependentsPage | 16 | 18 | **no** | device |
| EditProfile | EditProfilePage | 17 | 26 | **no** | device |
| Home | HomePage | 24 | 26 | **no** | device |
| Login | LoginPage | 8 | 14 | **no** | device |
| MonthlyProgress | MonthlyProgressPage | 17 | 15 | **no** | device |
| Onboarding | OnboardingPage | 5 | 6 | **no** | device |
| Otp | OtpPage | 15 | 14 | **no** | device |
| Premium | PremiumPage | 18 | 21 | **no** | device |
| Profile | ProfilePage | 23 | 24 | **no** | device |
| ReportDetail | ReportDetailPage | 21 | 27 | **no** | device |
| Reports | ReportsPage | 26 | 35 | **no** | device |
| Settings | SettingsPage | 25 | 36 | **no** | device |
| SignOutDialog | SettingsPage (sign out) | 4 | 6 | **no** | device |
| SwitchProfile | SwitchProfileSheet | 7 | 9 | **no** | device |
| TransactionHistory | TransactionHistoryPage | 21 | 23 | **no** | device |

Tolerances (per spec, `tolerance`): position ±2% of screen, size ±3%, alignment ±1.2% of width, centring ±1.5%, spacing ±2.5% of width. Absolute positions are only compared on screens with the baseline's aspect ratio; on other screen shapes only the relations are checked.

**Reviewing a spec:** compare it with the design and the screenshot in `screenshots/`, fix values, remove checks that shouldn't apply (delete them from an element's `checks`, or add the element name to `ignore`), then set `"reviewed": true` in the project's `test/layout/specs/<Screen>.json`.
