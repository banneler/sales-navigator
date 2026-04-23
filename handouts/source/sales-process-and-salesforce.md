# Sales Process & Salesforce — Handout

*Sales-Navigator · Great Plains Communications*

Pair this handout with **Salesforce 101 / 201**, quick references, **GPCU**, and **Teams** channels cited in the official training pack. In **Sales-Navigator**, follow the **training blocks** in order: **101** videos → **15 min** with Sales Support & **Fritz Antoine** (admin) → **live lead conversion** with **Amy** → **GPC Solution** (video + **30 min** live with Amy) → **multi-site** (video + **30 min** live with Amy on demo opps). **Salesforce** sign-in **now uses Okta** (YubiKey no longer applies to the Salesforce app). **PDFs and job aids** are in **Process Deep Dive**; **Module Reference Files** has the **Salesforce Roadmap** folder.

## Lead → opportunity lifecycle

- **Leads:** interest / campaign entry; reps or Home Office.
- **Convert** when ready for quote/pricing → typically creates **account**, **contact**, and **(usually) a new opportunity** (per 101 cycle).
- **Phases:** solution design (cross-functional) → **GPC Solution** (site address, service, product) → costing groups (**OSP, COE, Off-Net, IPE, BSOL**, etc.) → approvals → contracting.
- **Approval / costing** may involve **product managers, sales managers, CRO, COO** depending on deal.
- **Closed/Won** → **project per solution site** inside the GPC Solution; delivery continues beyond 101 (**Salesforce 201**).
- **Closed/Lost:** **do not delete** the opportunity—history matters if the deal returns.

### Convert Lead (critical defaults)

- **Almost always create a new opportunity** on conversion—including employee / partner referral leads.
- **Rare** exceptions to skip or reuse an opportunity: only with **sales manager** or **Salesforce admin** alignment.
- Do **not** check **“Don’t create an opportunity upon conversion”** in normal cases.
- Name the opportunity for **this** selling situation; open it from the conversion confirmation.
- **Referral programs:** populate **referral fields** (lead source, referred by, partner referral as applicable); keep referrers updated on **status and eligibility**.

## Hygiene & daily working rhythm

- Contacts belong to **accounts**; **one contact** can relate to **multiple accounts**—avoid duplicating people.
- **Tasks** tab: logged actions and completions—use daily.
- **List views:** **pin** your default until cache/cookies reset; order tabs for objects you use most.
- **Home dashboards:** refresh so charts stay current.
- **Universal Search** to find records by term.
- Lost deals: **leave data in place** per guidance—no casual deletes.

## GPC Sales app tabs (101 overview)

Leads, Accounts, Contacts, Opportunities, **Parent Opportunities** (multi-party), **GPC Solutions** (quote / approval status), **Solution Sites** (costing by site), **Projects** (post Closed/Won), Reports, Dashboards, Products, Tasks.

## DocuSign from Salesforce

- Integration adds convenience; it **does not replace** the underlying sales process.
- Signers / recipients should be **Salesforce contacts** on the relevant account; **contact roles** can help routing.
- DocuSign accounts: **IT** provisions; Salesforce integration enabled per user by the **Salesforce team**—**Service Desk** for account issues.
- **GPC Solution → Contract Signer:** best practice is to set **when first creating** the solution; **later** adds may not behave the same across stages.
- **Cannot add Contract Signer** while the solution is **Approval Pending**—fix stage / prerequisites before **Send to DocuSign**.
- Flow: Conga / template → optional **Save a Copy → Merge and Download** as a Salesforce File → return to GPC Solution → **Send to DocuSign**.
- First-time users: DocuSign authorization (login, allow access; **custom domain gpcom** when prompted).
- Document: use Conga output as-is or upload edited file; **Terms and Conditions** changes → **Legal**.

## Weekly habits

- **Salesforce Success Tips** in **Salesforce Users team → General**—updates **weekly**.
- Keep tasks and opportunities current for dashboards and handoffs.
- Block time for active opps, **referral updates**, and GPC Solution stages waiting on costing or approval.

## Enterprise proposal workflow

For proposal generation aligned to enterprise deals, use the **enterprise proposal workflow** intro video referenced in the training library.

## Landmines

- **Skip opportunity on conversion** without manager/admin alignment.
- **Contract Signer** empty or blocked in **Approval Pending**—resolve before DocuSign.
- **Recipients** must be **Salesforce contacts**, not ad-hoc email-only lists.
- **Wrong or empty referral fields** break program integrity and referrer relationships.

---

*Conga, DocuSign, and object names follow GPC’s Salesforce configuration—confirm current UI labels with the latest 101 materials.*
