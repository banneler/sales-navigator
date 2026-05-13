# Sales Navigator — local screenshot capture

Small **standalone** Node app (not wired to GitHub Actions). Use it once whenever you want fresh full-page PNGs of every module.

## Prereqs

- Node 18+ (global `fetch`)
- The main **sales-navigator** repo with Tailwind already built (`css/tailwind.css`):

  ```bash
  cd /path/to/sales-navigator
  npm install   # if needed
  npm run build
  ```

## Setup (one time per machine)

```bash
cd tools/sales-navigator-screenshots
npm install
npm run install-browser   # downloads Chromium for Playwright
```

## Run

From this directory, point `--root` at the **repo root** (folder that contains `index.html` and `modules-manifest.json`):

```bash
node capture.mjs --root ../..
```

PNGs go to `tools/sales-navigator-screenshots/output/` (override with `--out`). **Each module usually produces several files** (intro gate, main, scrolled, tabs, deep dives). Example: `03-sales-rules-of-engagement__00-intro-gate.png`, `…__01-main.png`, `…__03-tab-0.png`.

Other flags:

- `--port 4173` — change the ephemeral static server port if something else uses 4173.
- `--out /tmp/sn-shots` — custom output directory.

## Frames per module (typical)

| Suffix | Training modules (markdown) |
|--------|------------------------------|
| `__00-intro-gate` | Module preview + coffee summary (**before** Start Module) |
| `__01-main` | After Start Module (scroll at top) |
| `__02-scrolled` | `#main-panel` scrolled to bottom |
| `__03-tab-0`, … | Each Sales trio tab click |
| `__04-deep-expanded` | Optional deep-dive `<details>` sections opened |
| `__05-trio-deep-visible` | Suppressed trio deep block shown (if in DOM) |

**Getting started:** `__00-tour`, then tour removed; `__01-main`, `__02-scrolled`, `__03-tab-wayfinding` when the second tab exists.

**Map Book:** `__00-main`, `__01-scrolled`.

## How it works

1. Spawns [`serve`](https://github.com/vercel/serve) against your repo root.
2. Opens Chromium via Playwright and **mocks** `GET /api/auth/get-session` so the app does not redirect to `login.html`.
3. For each manifest module, visits `#/module/<id>` and captures those frames (clicks Start Module, scrolls, trio tabs, opens deep sections, etc.).

You can copy **`tools/sales-navigator-screenshots`** somewhere else and run it against any checkout of the repo; only this folder’s `npm install` is required.
