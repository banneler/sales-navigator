---
id: "enterprise-proposals"
title: "Self-Serve Proposal Generator"
summary: "Assemble RFP PDFs. Import Salesforce pricing. Compile and ship."
sensitivity: "internal"
sales_trio_guidelines_only: true
reference_files:
  - label: "Self-Serve Proposal Generator (live app)"
    sharepoint_url: "https://enterprise-proposals.vercel.app"
  - label: "Salesforce report — Enterprise Proposals – Quick Import"
    sharepoint_url: "https://gpcom.lightning.force.com/lightning/r/Report/00OKZ000000HxGf2AK/view"
five_minute_flow:
  aria_label: "Proposal generator workflow"
  steps:
    - title: "Properties"
      caption: "Names, dates, module list"
    - title: "Cover & sections"
      caption: "Snippets, custom pages, refs"
    - title: "Pricing"
      caption: "CSV import or manual"
    - title: "Compile & PDF"
      caption: "Two-step generate"
    - title: "Save & proofing"
      caption: ".spec handoff"
five_minute_summary: |
  - **What it is:** The **Self-Serve Proposal Generator** builds customer-facing proposal PDFs in the browser — cover letter, stock GPC slides, pricing tables, references, and optional custom content — without stitching Word docs by hand.
  - **Start with properties:** RFP/proposal name, business name, and sales rep feed the title page and snippet tokens (`{RFP}`, `{BIZ}`). Names truncate at **33 characters** on the title slide.
  - **Structure the deck:** Use **Proposal Elements** to check sections on/off and **drag to reorder**. Orange-bordered items are editable (cover, custom pages, pricing, etc.); eye icons preview stock PDFs.
  - **Price it:** Import a **Salesforce CSV** from the *Enterprise Proposals – Quick Import* report (filter by Solution Number) or enter locations and product lines manually. Promotions, NRCs, and multiple pricing options are supported.
  - **Ship it:** **Save (.spec)** to resume work → **Compile Proposal** (validates) → **Generate PDF** (preview + download) → optional **Send for Proofing** email handoff. Replace every `[bracket placeholder]` before compile, generate, or proofing.
discovery_questions:
  - "Have I set RFP and business names before clicking cover-letter snippets that use `{RFP}` or `{BIZ}`?"
  - "Does my module list match the deal — stock slides only where they add value, custom pages where the RFP asks for narrative?"
  - "Is pricing sourced from the current Salesforce solution export, or do I need to manual-enter edge cases the CSV missed?"
  - "Did I replace every `[bracket]` instruction with customer-specific text before I compile?"
  - "If I am sending for proofing, is the `.spec` saved and are custom PDF uploads still attached locally (they are not stored inside the spec file)?"
  - "Do project start and completion dates on the properties panel match what I want on the Project Implementation Plan slide?"
video_sections_presentation: scroll_tour
video_sections_continuous: true
video_sections_tabs_aria_label: "Proposal generator tour"
video_sections:
  - heading: "Self-Serve Proposal Generator"
    intro: "Walk the app top to bottom — properties, content, pricing, compile, and handoff."
    scroll_tour:
      - heading: "Main layout"
        commentary: "The sidebar holds proposal properties, save/load/proofing actions, and the draggable module list. The main panel is where you edit cover letter, references, pricing, and optional sections. Save early — the header shows Unsaved changes when work is in progress."
        src: "assets/enterprise-proposals/01-main-layout.png"
      - heading: "Proposal elements"
        commentary: "Check sections on or off and drag to reorder the final PDF. Stock slides (Why GPC, NOC, DIA, SIA, etc.) can be previewed with the eye icon. Generated sections — cover letter, custom pages, pricing, references — have an orange accent bar."
        src: "assets/enterprise-proposals/02-module-list.png"
      - heading: "Cover letter & snippets"
        commentary: "Write the cover letter directly or click marketing snippets to insert approved paragraphs. Snippets that use `{RFP}` or `{BIZ}` need those fields filled in Proposal Properties first. The readiness checklist and proposal notes scratchpad are for you — they do not print in the PDF."
        src: "assets/enterprise-proposals/03-cover-letter.png"
      - heading: "Dynamic pricing"
        commentary: "Drop a Salesforce Details-only CSV into the bulk import zone or build locations and product lines by hand. Each pricing option can include multiple sites, contract term, promotions, and non-recurring charges (NRC). Use Add Another Pricing Option when the customer wants scenario comparisons."
        src: "assets/enterprise-proposals/04-pricing-engine.png"
      - heading: "Salesforce CSV export"
        commentary: "Open the Enterprise Proposals – Quick Import report, filter to your Solution Number, export Details only, then import the CSV here. Required columns include Product; Location is optional (defaults to Imported Location). Import replaces all locations in the first pricing option."
        src: "assets/enterprise-proposals/05-salesforce-import.png"
      - heading: "Save, load, proofing"
        commentary: "Save (.spec) downloads a JSON project file you can reload later with Load Project. Send for Proofing saves the spec and opens an email draft — attach the `.spec` file manually. Proofing is blocked while `[bracket placeholders]` remain in the document."
        src: "assets/enterprise-proposals/06-save-load-proofing.png"
      - heading: "Compile then generate"
        commentary: "The orange header button is a two-step process: Compile Proposal runs a hidden first pass to validate and prepare assets; when it finishes, the button becomes Generate PDF. Review in the preview modal, then download with your chosen filename."
        src: "assets/enterprise-proposals/07-compile-generate.png"
knowledge_checks:
  - question: "What must you do before Compile Proposal, Generate PDF, or Send for Proofing will succeed?"
    options:
      - "Upload a USAC RFP PDF even for non-E-Rate deals"
      - "Replace every [bracket placeholder] in the document with customer-specific text"
      - "Disable Table of Contents in the module list"
    correct_index: 1
    explanation: "The app scans for [bracketed] instruction text and blocks compile, generate, and proofing until those placeholders are resolved."

  - question: "How do you bulk-import pricing from Salesforce?"
    options:
      - "Live API sync from the GPC Solution record"
      - "Export the Enterprise Proposals – Quick Import report (Details only, filtered by Solution Number) and drop the CSV into the pricing import zone"
      - "Copy cells from Excel into the cover letter editor"
    correct_index: 1
    explanation: "Pricing import is CSV-based from the named Salesforce report — not a live API connection."

  - question: "What is the correct order for producing the final PDF?"
    options:
      - "Generate PDF first, then Compile Proposal to fix errors"
      - "Compile Proposal first, then Generate PDF for preview and download"
      - "Send for Proofing before either compile step"
    correct_index: 1
    explanation: "Compile validates and prepares the document; Generate PDF opens the preview modal and download after compile succeeds."

  - question: "What does a .spec file store when you click Save (.spec)?"
    options:
      - "The full binary content of uploaded custom PDFs"
      - "Proposal properties, module order, cover text, pricing structure, references, and checklist state — but not uploaded PDF binaries"
      - "A finished PDF only"
    correct_index: 1
    explanation: "The spec file is JSON project state. Custom PDF uploads must be re-selected after Load Project because file bytes are not embedded."

  - question: "RFP Name and Business Name fields are limited to 33 characters because:"
    options:
      - "Salesforce enforces the limit on Solution names"
      - "The title page layout truncates longer names in the generated PDF"
      - "SharePoint document libraries reject longer filenames"
    correct_index: 1
    explanation: "Title page rendering truncates at 33 characters — shorten names in properties before you compile."

  - question: "When Table of Contents is enabled, what extra validation runs at compile time?"
    options:
      - "Every stock slide must be previewed with the eye icon"
      - "Each enabled Custom Page needs a document title and each Custom PDF needs a section name for the TOC"
      - "References must include four contacts"
    correct_index: 1
    explanation: "TOC generation requires titles on custom text pages and section names on uploaded PDF modules."

  - question: "Salesforce CSV import affects which pricing option?"
    options:
      - "All pricing options simultaneously"
      - "The first pricing option only — locations in that option are replaced by the import"
      - "The last pricing option added"
    correct_index: 1
    explanation: "Bulk import replaces locations in the first pricing option; add alternate scenarios manually after import if needed."

  - question: "Cover letter snippets that reference {RFP} or {BIZ} require:"
    options:
      - "A saved .spec file first"
      - "Matching values in Proposal Properties before the tokens resolve"
      - "Table of Contents to be disabled"
    correct_index: 1
    explanation: "Token substitution pulls from the RFP Name and Business Name property fields."

scenarios:
  - title: "The bracket that blocked compile"
    situation: |
      A rep clicks **Compile Proposal** and gets an error. The cover letter still contains `[list services here]` and `[Client Name]` from a snippet template.
    choices:
      - label: "Toggle modules off and on until compile succeeds."
        feedback: "Module toggles will not clear bracket placeholders — those are explicit instruction text the app requires you to replace."
      - label: "Find every [bracket] string in cover, custom pages, and pricing notes; replace with customer-specific text, then compile again."
        feedback: "**Good.** Bracket discipline is the most common compile blocker."
      - label: "Skip compile and use Print to PDF from the browser."
        feedback: "That bypasses the branded assembly pipeline — fix placeholders and use Compile → Generate PDF."

  - title: "The missing attachment after Load Project"
    situation: |
      A rep saves a `.spec`, loads it the next day, compiles successfully, but the uploaded executive-summary PDF is missing from the output.
    choices:
      - label: "Re-upload the custom PDF file — spec files store the filename, not the binary."
        feedback: "**Good.** After Load Project, custom PDF and USAC uploads must be selected again."
      - label: "File a bug — Save should embed every upload permanently."
        feedback: "By design, spec files keep project structure and metadata; large binaries stay local until you re-attach."
      - label: "Delete the spec and rebuild from scratch every time."
        feedback: "Reload + re-upload is the intended workflow — faster than rebuilding pricing from zero."

  - title: "CSV from the wrong solution"
    situation: |
      A rep exports the Quick Import report without filtering to their Solution Number and imports 40 locations into pricing.
    choices:
      - label: "Send the PDF anyway — more locations look impressive."
        feedback: "Wrong-solution pricing is a customer-trust issue. Filter the report, re-export Details only, and re-import."
      - label: "Open the report, set Solution ID in Filters, export Details-only CSV, re-import (replacing first-option locations)."
        feedback: "**Good.** That matches the in-app Salesforce export help workflow."
      - label: "Manually delete 39 locations one row at a time and hope you got the right one."
        feedback: "Re-import from a filtered export is faster and less error-prone than surgical deletes."

---

## Overview

The **Self-Serve Proposal Generator** (`https://enterprise-proposals.vercel.app`) is GPC’s browser-based tool for assembling **enterprise RFP/RFQ response PDFs**. Reps combine:

- **Proposal properties** (customer names, rep, dates)
- **Stock marketing slides** (Why GPC, NOC, product overviews, etc.)
- **Generated sections** (cover letter, TOC, pricing tables, references, Impact & ROI)
- **Optional uploads** (custom PDF inserts, USAC original RFP)

Everything runs **in the browser** — no server database stores your deal content. Work persists when you **Save (.spec)** to your machine and reload with **Load Project**.

Use this tool when you need a **formatted GPC proposal deck with pricing tables** pulled from Salesforce or entered manually. It complements — does not replace — **GPC Solution** workflow and approval discipline in Salesforce.

## Key Guidelines

### 1. Proposal properties

Fill **RFP Name / Proposal Name**, **Business Name**, and **Sales Rep** before you lean on snippets or compile. Optional **Presentation Date** defaults to today when blank. **Project Start** and **Project Completion** feed the Project Implementation Plan stock slide.

### 2. Proposal elements (structure)

- **Check** only the sections the customer expects.
- **Drag** to match the RFP’s required order.
- **Preview** stock PDFs with the eye icon when you are unsure what a slide contains.
- **Custom Page(s)** and **Upload Custom PDF** support multiple instances — use **+** / **−** on the module row.

### 3. Cover letter & custom content

- Click **snippets** for approved marketing copy; edit every `[instruction bracket]` before compile.
- `{RFP}` and `{BIZ}` tokens resolve from properties — set those fields first.
- **Custom pages** support executive-summary templates (General, Education, Healthcare) from marketing-maintained content.
- Long custom text auto-paginates in the PDF; watch for overflow warnings in the editor.

### 4. Pricing

**Path A — Salesforce CSV (preferred when a GPC Solution exists):**

1. Open **Enterprise Proposals – Quick Import** (link in app and Module Reference Files).
2. Filter to your **Solution Number**.
3. Export **Details only** as CSV.
4. Drop the file into **Bulk Import from Salesforce CSV**.

**Path B — Manual:** Add locations, product lines, contract term, promotions, and NRC lines. Bandwidth shortcuts (e.g. `100M`) expand to product suggestions.

Enable **location subtotals** for multi-site deals when you want per-site totals in the PDF. Use **Add Another Pricing Option** for scenario comparisons.

### 5. References & optional sections

- **References:** Up to four contact cards (name, org, address, phone, email).
- **Impact & ROI:** Optional narrative plus monthly cost comparison (calculated net savings/increase).
- **USAC Original RFP:** Attach the customer’s source RFP PDF when the module is enabled.

### 6. Save, compile, generate, proofing

| Action | Purpose |
| --- | --- |
| **Save (.spec)** | Download project JSON — reload later with Load Project |
| **Compile Proposal** | Validate placeholders, TOC rules, uploads; prepare PDF pipeline |
| **Generate PDF** | Preview in modal + download finished proposal |
| **Send for Proofing** | Save spec + open email draft (attach `.spec` manually) |

## Common Landmines

::: flip ["Bracket placeholders left in snippets"]
Snippets ship with `[fill this in]` instructions. The app **will not compile** until every `[bracket]` is replaced. Search cover letter and custom pages before you click Compile.
:::

::: flip ["Skipping Compile and expecting Generate"]
**Compile Proposal** must succeed first. The button label changes to **Generate PDF** only after a clean compile pass.
:::

::: flip ["Custom PDF missing after Load Project"]
`.spec` files remember that you *had* a custom PDF, not the file itself. Re-select uploads after every load.
:::

::: flip ["Unfiltered Salesforce CSV"]
Importing the Quick Import report without a Solution Number filter can flood pricing with the wrong locations. Filter → Details export → import.
:::

::: flip ["33-character title surprise"]
Long RFP or business names truncate on the title page. Shorten in properties before customer delivery.
:::

::: flip ["TOC enabled without titles"]
With **Table of Contents** checked, every custom text page needs a **document title** and every custom PDF needs a **section name** — or compile fails.
:::

## Stock slides reference [deep]

When checked in Proposal Elements, these stock PDFs append in your chosen order:

| Module label | Typical use |
| --- | --- |
| Title Page | Customer name, RFP title, rep, date (from properties) |
| High-Performing Network (Why GPC) | Network proof points |
| About GPC | Company overview |
| 24-Hour NOC Monitoring | Operations story |
| Escalation Process | Support path |
| Project Implementation Plan | Timeline — uses project start/completion dates |
| SPIN ID Number | Regulatory / program identifier slide |
| Senior Leadership | Executive bench |
| Dedicated Internet Access (DIA) | Product overview |
| Standard Internet Access (SIA) | Product overview |

Marketing updates stock PDFs and snippets centrally; reps consume them through the live app — you do not edit stock files in the generator.
