# Running the tests on GitHub Actions (CI)

The workflow file `.github/workflows/app-tests.yml` tells GitHub to run the tests by itself:

| When | What runs |
|---|---|
| A pull request into `main` is opened or updated | Smoke suite |
| Every night at 02:00 IST | Regression suite |
| You press **Run workflow** in the Actions tab | The suite you choose |

Each run borrows a fresh Linux computer from GitHub, installs everything, starts an Android emulator, installs the staging app, runs the tests and saves the dashboard for you to download.

---

## Before you start: put the project on GitHub

GitHub Actions only runs for projects stored on GitHub. Do this once.

**a. Install Git** from [git-scm.com](https://git-scm.com/download/win) (accept the defaults). Open a new terminal and check: `git --version`.

**b. Tell Git who you are** (shown on every commit):

```bash
git config --global user.name "Nishant"
git config --global user.email "nishant@egenome.ai"
```

**c. Create an empty repository on GitHub:** sign in → **+** (top right) → **New repository** → name it e.g. `egenome-app-tests` → choose **Private** → leave "Add a README" **unticked** → **Create repository**. If eGenome has a GitHub organisation, create it there (ask whoever manages it).

**d. Turn the project folder into a Git repository and upload it.** In a terminal opened in the project folder:

```bash
git init                      # start tracking this folder
git branch -M main            # call the main version "main"
git status                    # check: .env, node_modules and reports must NOT be listed
git add .                     # stage every file .gitignore allows
git commit -m "Initial commit: eGenome app test automation"
git remote add origin https://github.com/<you>/egenome-app-tests.git   # the link GitHub showed you
git push -u origin main       # upload; a browser window asks you to sign in the first time
```

Refresh the GitHub page: your files are there. From now on, after changing files: `git add .` → `git commit -m "what changed"` → `git push`.

> If `git status` lists `.env`, stop: don't commit. Check that `.gitignore` is in the project folder.

## One-time setup

### 1. Check the repository is private

The dashboard contains screenshots of a health app with account data. On GitHub: repository → **Settings** → **General** → scroll to **Danger Zone** → it should say *This repository is private*. If it's public, choose **Change visibility → Make private**.

### 2. Get the staging APK link

Ask the developers for a **direct download link** to the latest staging APK (a link that downloads the `.apk` file when opened, not a web page about it). Common places: a release asset, cloud storage, or the app's own CI artifacts.

### 3. Add the secrets

Repository → **Settings** → **Secrets and variables** → **Actions** → **Secrets** tab → **New repository secret**. Add three:

| Name | Value |
|---|---|
| `TEST_PHONE` | the 10-digit test number (same as in your `.env`) |
| `TEST_OTP` | the fixed staging OTP |
| `STAGING_APK_URL` | the direct APK link from step 2 |

Secrets are hidden: nobody can read them back, and they're masked as `***` in logs.

Optional, on the **Variables** tab (visible, not secret): `TEST_USER_NAME`, `TEST_DEPENDENT_NAME`, if they differ from `.env.example`.

### 4. Add the workflow file

Put `app-tests.yml` at exactly this path in the project: `.github/workflows/app-tests.yml` (the folder names matter; GitHub only looks there).

**Option A, on your PC (recommended):**

1. In the project folder, create a folder `.github`, and inside it a folder `workflows`. In File Explorer, type the name as `.github.` with a trailing dot if Windows refuses a name that starts with a dot.
2. Save `app-tests.yml` into `.github\workflows\`.
3. Commit and push, in a terminal in the project folder:

```bash
git add .github/workflows/app-tests.yml docs/CI.md README.md
git commit -m "Add GitHub Actions workflow for app tests"
git push
```

**Option B, on the GitHub website:** repository → **Add file → Create new file** → type the name `.github/workflows/app-tests.yml` (typing `/` creates the folders) → paste the file's contents → **Commit changes**. Afterwards run `git pull` on your PC so your copy has it too.

### 5. Run it once by hand

GitHub → **Actions** tab → **App tests** (left) → **Run workflow** → choose `smoke` → **Run workflow**.

Click the run to watch each step live. The first run takes longer (about 15–25 minutes) because nothing is cached yet.

### 6. Read the result

- Green ✓ = all tests passed; red ✗ = something failed. Click the failed step to see its log.
- Scroll to **Artifacts** at the bottom of the run page → download `dashboard-…` → unzip → open `index.html`. It's the same dashboard as on your PC.

### 7. Make smoke required for merging (once it runs reliably)

Settings → **Branches** (or **Rules → Rulesets**) → add a rule for `main` → **Require status checks to pass** → choose **Android tests**. Now a pull request can't be merged while smoke is red.

---

## How it fits together

```
pull request / nightly clock / Run button
        │
        ▼
GitHub starts a fresh Linux runner
        │  checkout code → install Node + libraries → install Appium driver
        │  .env from template + secrets → download APK
        ▼
Android emulator (no screen) → install app → npm run test:<suite>
        │
        ▼
✓ / ✗ on the pull request   +   dashboard artifact (kept 14 days)
```

## Day-to-day

- **Run another suite by hand:** Actions → App tests → Run workflow → pick `regression` or `layout`.
- **Change the nightly time:** edit the `cron:` line. It uses UTC; IST is UTC + 5:30.
- **A run failed, but the app is fine:** open the dashboard artifact first. The first failed step and its screenshot usually say why.
- **Test changes in a branch:** push a branch and open a pull request; smoke runs on it before you merge.

## Troubleshooting

| Problem | Likely cause / fix |
|---|---|
| `Download the staging APK` fails with 404 / 403 | The link isn't a direct download, has expired, or needs a login. Ask for a direct link |
| `ls -lh app.apk` shows a tiny file (a few KB) | The link downloaded a web page, not the APK |
| Tests fail at login | `TEST_PHONE` / `TEST_OTP` secrets missing or wrong; or OTP rate limit on staging |
| Emulator step times out | Rare on GitHub's Linux runners; re-run the job. If it repeats, increase `timeout-minutes` |
| Layout checks fail only in CI | The CI emulator draws slightly differently. Set `LAYOUT_CHECKS=warn` for CI, or record a CI baseline |
| Run says "queued" for a long time | GitHub is busy or your account's free minutes are used up (Settings → Billing) |

## Costs

GitHub Actions minutes are free for public repositories; private repositories get a monthly free allowance, then are billed per minute. Check **Settings → Billing** (or your organisation's) for the current allowance. A smoke run with emulator start-up uses about 15–20 minutes.
