# GPC training corpus — OCR vs embedded text validation

This report compares **PyMuPDF embedded text** (same source as [`gpc-training-corpus-canonical-text.md`](gpc-training-corpus-canonical-text.md)) to **EasyOCR** on **200 DPI PNGs** (resized for speed). Goal: surface where the canonical extract is **thin or structurally wrong** while the slide/PDF is still readable visually.

## Method

| Step | Detail |
|------|--------|
| PDF text | `page.get_text("text")` via PyMuPDF |
| OCR | EasyOCR `en`, image max width **1000px** |
| Sample | Up to **70** pages: canonical **low-text** list + table-heavy extras |
| Similarity | `difflib.SequenceMatcher` on whitespace-normalized lowercase strings |

## Results summary

- **Pages in sample:** 70
- **OCR materially longer than embed (>1.5×):** 38 (often **visual / table** pages where plain `get_text` is thin or wrong)
- **Embed much longer than OCR (>3×, embed >100 chars):** 1 (often **dense digital pricebooks** at small point sizes — OCR at resized PNG **under-reads**; trust embed for *tokens* but not *columns*)
- **Both verbose but similarity <0.35:** 11 (same material, **different reading order** — classic for tables in both pipelines)

### What this means for the canonical markdown

[`gpc-training-corpus-canonical-text.md`](gpc-training-corpus-canonical-text.md) is **not** a layout-faithful transcription: it is a **flattened text stream** per page. For **approval matrices, fee grids, and MAC flowcharts**, character counts may look healthy while **structure is wrong** — compare **Approval Requirements Matrix** and **Costing Routing** rows below (high chars, **near-zero similarity**). For **RAG**, consider **hybrid** chunks: embed text + caption referencing `page-NNN.png`, or **table-aware** PDF parsing for critical docs.


## Per-page metrics

| PDF (relative) | Page | embed chars | OCR chars | ratio OCR/embed | similarity | OCR s | Notes |
|----------------|-----:|------------:|----------:|----------------:|-----------:|------:|-------|
| `Business Capability Presentation.pdf` | 5 | 10 | 45 | 4.50 | 0.327 | 3.02 | OCR >> embed (likely table/visual page) |
| `Omaha Metro competitive battle card v3.pdf` | 2 | 30 | 92 | 3.07 | 0.311 | 3.78 | OCR >> embed (likely table/visual page) |
| `Omaha Metro competitive battle card v3.pdf` | 5 | 32 | 79 | 2.47 | 0.36 | 3.7 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven.pdf` | 8 | 15 | 688 | 45.87 | 0.0 | 8.97 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 1 | 45 | 89 | 1.98 | 0.657 | 3.38 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 2 | 1 | 70 | 70.00 | 0.0 | 2.83 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 5 | 23 | 23 | 1.00 | 1.0 | 2.75 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 8 | 28 | 320 | 11.43 | 0.149 | 5.23 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 13 | 23 | 31 | 1.35 | 0.83 | 4.52 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 15 | 24 | 24 | 1.00 | 1.0 | 3.45 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 19 | 2 | 473 | 236.50 | 0.004 | 5.79 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 28 | 14 | 14 | 1.00 | 1.0 | 3.62 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 29 | 24 | 24 | 1.00 | 1.0 | 2.99 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 50 | 9 | 16 | 1.78 | 0.72 | 4.01 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 58 | 27 | 49 | 1.81 | 0.693 | 2.82 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 66 | 18 | 35 | 1.94 | 0.642 | 2.49 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 73 | 27 | 37 | 1.37 | 0.825 | 2.53 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 75 | 16 | 16 | 1.00 | 0.938 | 2.04 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 76 | 0 | 0 |  | 1.0 | 2.15 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 77 | 20 | 20 | 1.00 | 1.0 | 1.97 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 87 | 12 | 278 | 23.17 | 0.0 | 2.95 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 91 | 35 | 35 | 1.00 | 1.0 | 2.11 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 94 | 25 | 144 | 5.76 | 0.249 | 2.57 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 100 | 32 | 32 | 1.00 | 1.0 | 2.09 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 115 | 14 | 18 | 1.29 | 0.875 | 2.21 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 116 | 19 | 19 | 1.00 | 1.0 | 2.11 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 124 | 3 | 3 | 1.00 | 1.0 | 2.16 | — |
| `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf` | 125 | 0 | 53 | inf | 0.0 | 2.28 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 2 | 42 | 42 | 1.00 | 1.0 | 2.22 | — |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 15 | 26 | 26 | 1.00 | 0.538 | 3.36 | — |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 17 | 23 | 23 | 1.00 | 1.0 | 3.49 | — |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 19 | 23 | 23 | 1.00 | 1.0 | 2.22 | — |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 21 | 24 | 24 | 1.00 | 1.0 | 2.13 | — |
| `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf` | 23 | 39 | 38 | 0.97 | 1.0 | 2.06 | — |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 3 | 18 | 41 | 2.28 | 0.441 | 2.35 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 5 | 21 | 44 | 2.10 | 0.492 | 2.36 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 7 | 21 | 44 | 2.10 | 0.492 | 2.22 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 9 | 18 | 44 | 2.44 | 0.452 | 2.08 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 11 | 23 | 49 | 2.13 | 0.528 | 2.73 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 13 | 22 | 48 | 2.18 | 0.514 | 3.19 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 28 | 35 | 1647 | 47.06 | 0.039 | 8.19 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 29 | 29 | 1335 | 46.03 | 0.016 | 6.29 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 30 | 29 | 1942 | 66.97 | 0.011 | 10.18 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 31 | 27 | 1271 | 47.07 | 0.039 | 7.71 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 50 | 13 | 13 | 1.00 | 1.0 | 2.41 | — |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 51 | 20 | 1014 | 50.70 | 0.002 | 11.48 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 52 | 20 | 672 | 33.60 | 0.012 | 4.68 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 53 | 20 | 1055 | 52.75 | 0.007 | 9.22 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 54 | 20 | 1398 | 69.90 | 0.006 | 8.79 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf` | 55 | 20 | 900 | 45.00 | 0.004 | 6.89 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf` | 1 | 26 | 61 | 2.35 | 0.598 | 2.14 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf` | 12 | 41 | 1116 | 27.22 | 0.009 | 6.07 | OCR >> embed (likely table/visual page) |
| `Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf` | 23 | 41 | 790 | 19.27 | 0.019 | 8.86 | OCR >> embed (likely table/visual page) |
| `Product Training/Product Training - GPC Cloud Connect.pdf` | 1 | 65 | 135 | 2.08 | 0.242 | 3.12 | OCR >> embed (likely table/visual page) |
| `Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf` | 16 | 44 | 31 | 0.70 | 0.301 | 2.31 | — |
| `Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf` | 18 | 33 | 974 | 29.52 | 0.0 | 9.96 | OCR >> embed (likely table/visual page) |
| `extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P.pdf` | 5 | 0 | 695 | inf | 0.0 | 8.54 | OCR >> embed (likely table/visual page) |
| `extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf` | 4 | 19 | 10 | 0.53 | 0.833 | 7.28 | — |
| `extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf` | 3 | 38 | 2152 | 56.63 | 0.018 | 12.63 | OCR >> embed (likely table/visual page) |
| `extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf` | 1 | 31 | 67 | 2.16 | 0.619 | 8.83 | OCR >> embed (likely table/visual page) |
| `extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422.pdf` | 3 | 49 | 39 | 0.80 | 0.452 | 7.21 | — |
| `extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222.pdf` | 1 | 42 | 79 | 1.88 | 0.683 | 6.46 | — |
| `extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf` | 1 | 1814 | 1650 | 0.91 | 0.041 | 18.05 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5.pdf` | 1 | 1649 | 1518 | 0.92 | 0.143 | 16.81 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise.pdf` | 1 | 8860 | 525 | 0.06 | 0.008 | 6.97 | OCR << embed (check resize/OCR miss) |
| `extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf` | 1 | 2704 | 2604 | 0.96 | 0.003 | 16.16 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123.pdf` | 3 | 774 | 1142 | 1.48 | 0.031 | 16.36 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule.pdf` | 1 | 1102 | 1103 | 1.00 | 0.212 | 6.82 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf` | 5 | 1759 | 2122 | 1.21 | 0.005 | 18.63 | low string similarity (ordering/format drift) |
| `extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf` | 12 | 817 | 1132 | 1.39 | 0.011 | 11.33 | low string similarity (ordering/format drift) |

## Interpretation for curriculum / RAG

1. **Pricing matrices, approval grids, fee schedules:** embedded text is often a **single stream** (columns lost); OCR may **reorder** or **merge** cells. Neither gives **reliable column semantics** — use **table-aware** tools (pdfplumber, Camelot, etc.) or treat the **PNG/PDF** as the authority for layout.

2. **Dense digital pricebooks (small type):** embedded extract can have **very high** character counts while OCR on a **downscaled** PNG captures only headers — do **not** conclude “OCR failed” without re-running at **full resolution** or trusting the PDF text layer for lexical coverage.

3. **Decks with full-bleed graphics:** embedded extract can be **near-empty** while OCR still finds headlines — useful for **spot checks** and snippet retrieval; keep PNGs as evidence.

4. **OCR noise:** `$` vs `S`, stray punctuation, and `%` — do not treat OCR as ground truth for **numbers** without human QA.


## Re-run

```bash
python3 scripts/validate_gpc_extract_vs_ocr.py --report docs/gpc-training-corpus-ocr-validation.md --limit 100
```
