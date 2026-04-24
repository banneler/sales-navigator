# GPC training corpus — canonical text extraction

This file is **machine-extracted** plain text from every PDF under the GPC training tree. Use it as the canonical textual compilation for curriculum, front matter, search, and RAG. Graphics, tables, and handwritten content may not fully appear here; see page PNGs when needed.

**Structural bible** (module IDs, teaching order, duplicates, gaps): [`gpc-training-content-bible.md`](gpc-training-content-bible.md).

**OCR validation** (tables vs flattened text): [`gpc-training-corpus-ocr-validation.md`](gpc-training-corpus-ocr-validation.md) — run `python3 scripts/validate_gpc_extract_vs_ocr.py` after `pip install -r scripts/requirements-ocr-validation.txt`.

## Document metadata

| Field | Value |
|-------|-------|
| Generated (UTC) | 2026-04-24 13:08 UTC |
| Source PDF root | `/Users/ba/Desktop/GPC Training Material` |
| Page image root (reference) | `/Users/ba/Desktop/GPC Training Material - page images` |
| PDF count | 135 |
| Extraction | PyMuPDF `page.get_text("text")` |
| Low-text threshold | 40 non-whitespace characters |


### Extraction summary

| Total pages processed | 737 |
| PDFs with open errors | 0 |
| Low-text pages (< 40 chars) | 62 |

<details><summary>Low-text pages (expand)</summary>

- Business Capability Presentation.pdf p.5 (9 chars)
- Omaha Metro competitive battle card v3.pdf p.2 (26 chars)
- Omaha Metro competitive battle card v3.pdf p.5 (27 chars)
- Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven.pdf p.8 (14 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.1 (39 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.2 (1 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.5 (20 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.8 (25 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.13 (20 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.15 (22 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.19 (2 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.28 (12 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.29 (22 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.50 (8 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.58 (23 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.66 (16 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.73 (23 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.75 (13 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.76 (0 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.77 (18 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.87 (12 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.91 (32 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.94 (21 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.100 (27 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.115 (12 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.116 (18 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.124 (2 chars)
- Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf p.125 (0 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.2 (36 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.15 (22 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.17 (20 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.19 (21 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.21 (21 chars)
- Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf p.23 (33 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.3 (17 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.5 (19 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.7 (19 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.9 (16 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.11 (21 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.13 (20 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.28 (29 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.29 (25 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.30 (25 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.31 (21 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.50 (12 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.51 (17 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.52 (17 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.53 (17 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.54 (17 chars)
- Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf p.55 (17 chars)
- Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf p.1 (24 chars)
- Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf p.12 (35 chars)
- Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf p.23 (35 chars)
- Product Training/Product Training - GPC Cloud Connect.pdf p.1 (37 chars)
- Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf p.16 (26 chars)
- Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf p.18 (16 chars)
- extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P.pdf p.5 (0 chars)
- extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf p.4 (11 chars)
- extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf p.3 (30 chars)
- extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf p.1 (27 chars)
- extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422.pdf p.3 (37 chars)
- extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222.pdf p.1 (39 chars)
</details>

## Table of contents (PDF paths)

- [Battlecard - 5G Wireless Backup.pdf](#p-1f1649b2f16c0758)
- [Business Capability Presentation.pdf](#p-91e007854aa797fe)
- [Cox Acquisition Battle Card v2.pdf](#p-8ed9091398e0b0c0)
- [Driver Training PDF 2025 1 (1).pdf](#p-d893e894f8e77845)
- [Ethernet Battle Card FINAL.pdf](#p-c4c8f77e3d3081fd)
- [Fiber vs Starlink Battlecard.pdf](#p-3d68b7ee0a88f551)
- [GPC Cloud Connect Battle Card 050321.pdf](#p-7e044495e6a3cbc7)
- [GPC Managed WIFI Battle Card.pdf](#p-20bfa6cc9a4ba36c)
- [GPC SD-WAN Battle Card FINAL.pdf](#p-3efa940c5ddac02f)
- [Managed Firewall Battlecard FINAL.pdf](#p-5fc190a7e25d9a91)
- [Omaha Metro competitive battle card v3.pdf](#p-7d5711f70edad990)
- [Product Training/GPC SD-WAN Sales Training 050322.pdf](#p-3972ec9d0973cd3c)
- [Product Training/GPC Wireless Internet 5G Product Launch.pdf](#p-0b9e99bca1d6cff9)
- [Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven.pdf](#p-bc4a72ccc45e52c7)
- [Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf](#p-ecbc1429f8d6aaeb)
- [Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf](#p-d078b0517099ffe6)
- [Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf](#p-04e84f4c4f09a750)
- [Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf](#p-e7e2e25483f843fa)
- [Product Training/Product Training - Customer Network Management Portal - Wholesale.pdf](#p-924c2408a71a3258)
- [Product Training/Product Training - GPC Cloud Connect.pdf](#p-7c34e7da57e74b6c)
- [Product Training/Product Training - Managed Ethernet sm.pdf](#p-7fa5a0ec18413ff5)
- [Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf](#p-5e854c91a6cc327c)
- [Product Training/Sales Training - DDoS Product 2023 Update.pdf](#p-4d56a6fe45d90e6f)
- [Sales Rules of Engagement (ROE) - Revised August 2025 (1).pdf](#p-21efc64b398da9ac)
- [UC Competitor Battle Card 031226.pdf](#p-f2fe5301d066c46b)
- [extracted/OneDrive_1_4-10-2026/Wireless Internet Backup/GPC Wireless Internet 5G Product Launch.pdf](#p-5d274269dc49dce2)
- [extracted/OneDrive_1_4-10-2026 (1)/Cloud Connect/Cloud Connect 011725.pdf](#p-154eaeae2621c927)
- [extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Product Sheet 012025.pdf](#p-f80a74e36ceb02f9)
- [extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Reporting Terms 011725.pdf](#p-6614530fd48d9d85)
- [extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Ethernet CoS Data sheet 2025.pdf](#p-060778291bdf6c0b)
- [extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Managed Ethernet Product Sheet 060625.pdf](#p-e9c9080b7892be64)
- [extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/2025 Fiber over Cable Modem.pdf](#p-43a4d7285d84e316)
- [extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs 5G one sheet 2025 072125.pdf](#p-028c132b196dbb4a)
- [extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs Starlink Battlecard.pdf](#p-65176eb0f5e993ac)
- [extracted/OneDrive_1_4-10-2026 (1)/GPC iTV for Business/GPC iTV Product Sheet 2024.pdf](#p-f118a2174a11e1c5)
- [extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA Product Sheet 120424.pdf](#p-8b155cba0a31aac5)
- [extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA vs SIA Comparison 110424.pdf](#p-5e84ca22286e907a)
- [extracted/OneDrive_1_4-10-2026 (1)/Internet/SIA product sheet 120324.pdf](#p-c810ab1369be9172)
- [extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Firewall data sheet 032026.pdf](#p-2ab3e37484047b2b)
- [extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Network Security data sheet 062025.pdf](#p-b3432cb05059e0bf)
- [extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Managed Wi-Fi datasheet 070725.pdf](#p-8f4fee351819a48c)
- [extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Small Business Wi-Fi with WorkPass datasheet.pdf](#p-2d50f3da26b35038)
- [extracted/OneDrive_1_4-10-2026 (1)/Network Monitoring Portal/Network Monitoring Portal Product Sheet.pdf](#p-487de97ab921981e)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Financial Services.pdf](#p-0aa0f75de2884139)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Healthcare.pdf](#p-074eafa5b012223d)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Retail.pdf](#p-14c17d6abf55fa4f)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Use Cases - Financial Services.pdf](#p-ad8b501a33b784ce)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Configure Inc talking points.pdf](#p-9430e44359b04556)
- [extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024.pdf](#p-aa79f2d73e3b04ba)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Contact Center datasheet 050925.pdf](#p-9c51080f978b85da)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Enterprise Plan Sheet 091125.pdf](#p-7837dd9c17f93f65)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Essentials Plan Sheet 091125.pdf](#p-cef43b4f60edd583)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Express Plan Sheet 091125.pdf](#p-7d8298e3701bf5c6)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Pro Plan Sheet 091125.pdf](#p-db4f3ca96f5606fc)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/K-12 Education Checklist.pdf](#p-bce40ed0eaa2bbe7)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Financial.pdf](#p-38b43697498e05f5)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Healthcare.pdf](#p-7bbc122daad92551)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - K-12 Education.pdf](#p-8785797e7bd09d50)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Manufacturing.pdf](#p-56c39293da950284)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Benefits of Archiving 2025.pdf](#p-430dd20e6c200a2f)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Brochure - Abbreviated 041026.pdf](#p-710072ac8ba4be59)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Phone Comparison sheet.pdf](#p-e71d17b3540e8356)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Plan Comparison - Internal use only 2026.pdf](#p-aba8f732a655e3b9)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Remote location install handout.pdf](#p-7d79d5c1c73d1a3b)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Support Documentation/UC Voicemail Instructions - Digital.pdf](#p-9a3c32c7bf834ce8)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams Advanced Archiving 2025.pdf](#p-5fbd75d19c6f566a)
- [extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams datasheet 100325.pdf](#p-2bc57e6340370476)
- [extracted/OneDrive_1_4-10-2026 (1)/Voice - Non-UC/Voice Product Sheet 112524.pdf](#p-d4934844046c41b4)
- [extracted/OneDrive_1_4-10-2026 (1)/Wave/WAVE Product Sheet 120424.pdf](#p-2ab25854e8dd2795)
- [extracted/OneDrive_1_4-10-2026 (1)/Wireless Internet Backup/5G Wireless Internet Backup Product Sheet 103025.pdf](#p-757b40db7b39686f)
- [extracted/OneDrive_1_4-10-2026 (2)/Approval Requirements Matrix v5.5 - 0725.pdf](#p-e21f5ece5d718790)
- [extracted/OneDrive_1_4-10-2026 (2)/Building Entry Process Flyer Generic.pdf](#p-40f3ffc594708c0d)
- [extracted/OneDrive_1_4-10-2026 (2)/Customer Move Process.Procedure.pdf](#p-7fd250d16be0a8d9)
- [extracted/OneDrive_1_4-10-2026 (2)/New APNI form.pdf](#p-47fdeef25fa9ff10)
- [extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR SOP v1.2.pdf](#p-a72fe19ad5d3b5b8)
- [extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR Sales Readiness Form - Fillable.pdf](#p-4d7a82f528b0b398)
- [extracted/OneDrive_1_4-10-2026 (2)/Q1 2026 Spiff.pdf](#p-cc0026c336c4de8e)
- [extracted/OneDrive_1_4-10-2026 (2)/Stair Step SPIFF FINAL.pdf](#p-24b32bac7d1c71bb)
- [extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P.pdf](#p-3ef8e2ce5f2041b3)
- [extracted/OneDrive_1_4-10-2026 (3)/Approval Overview and Training Guide - 0725.pdf](#p-de14a141e0350fcd)
- [extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf](#p-ebf86d4f9b2bc23e)
- [extracted/OneDrive_1_4-10-2026 (3)/Assigning Leads Quick Reference Guide - 1123.pdf](#p-5035c5e7776fa355)
- [extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf](#p-16b4559c75c94c75)
- [extracted/OneDrive_1_4-10-2026 (3)/Contact Roles Quick Reference Guide - 1023.pdf](#p-cdb754eca54d341d)
- [extracted/OneDrive_1_4-10-2026 (3)/Converted Lead Info Button Quick Reference Guide - 1123.pdf](#p-4b57a02ab86678b5)
- [extracted/OneDrive_1_4-10-2026 (3)/Converting Leads to an Opportunity Quick Reference Guide - 1123.pdf](#p-205dfa869e48df13)
- [extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf](#p-5a4a070ebda1ee5d)
- [extracted/OneDrive_1_4-10-2026 (3)/Create a Custom List View Quick Reference Guide - 0922.pdf](#p-3ca8b63f068dfa78)
- [extracted/OneDrive_1_4-10-2026 (3)/Dark Fiber Quick Reference Guide - 0724.pdf](#p-d622bc0c72d301b5)
- [extracted/OneDrive_1_4-10-2026 (3)/Dashboard Pal Quick Reference Guide-0822.pdf](#p-80fa45261be55f76)
- [extracted/OneDrive_1_4-10-2026 (3)/Dashboards Quick Reference Guide - Sales - 0224.pdf](#p-f1116e385bacadf3)
- [extracted/OneDrive_1_4-10-2026 (3)/Disconnection Process - Sales Team - 1022.pdf](#p-44a0b94d1d8d1f07)
- [extracted/OneDrive_1_4-10-2026 (3)/Forecasting Quick Reference Job Aid - 0622.pdf](#p-b837635f8eb42d29)
- [extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123.pdf](#p-b1a80443bc99453f)
- [extracted/OneDrive_1_4-10-2026 (3)/Off-Net Quick Reference Guide - 0723.pdf](#p-3b565cc1b404ac15)
- [extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Financial Calculations Quick Reference Guide - 1023.pdf](#p-ac6ff1abe67b71a8)
- [extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Process Training Guide - 0822.pdf](#p-95ad2fb53a51934f)
- [extracted/OneDrive_1_4-10-2026 (3)/Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223.pdf](#p-819c79ec95768b28)
- [extracted/OneDrive_1_4-10-2026 (3)/Pre-Approved Order Process Quick Reference Guide - 0723.pdf](#p-95831adbf88aa468)
- [extracted/OneDrive_1_4-10-2026 (3)/Product Quick Reference Guide - DIA - 0224.pdf](#p-af4f029d1b82eae5)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce & DocuSign Integration Training Guide - 0623.pdf](#p-e1bde5464e7aef7d)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf](#p-2dc3110ef1ddd665)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce Add-in for Outlook Quick Reference Guide - 1123.pdf](#p-df6cb7cd88573ff1)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce Comments Quick Reference Guide - 0723.pdf](#p-4ff5a46af061446e)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid - 0522.pdf](#p-9e90581d0065a05d)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422.pdf](#p-f105d2c17a979e99)
- [extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222.pdf](#p-6cf019855816bead)
- [extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5.pdf](#p-5a73f9012596d0f4)
- [extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2022-12 SIA Market Groups.pdf](#p-36a7984300a5f182)
- [extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2024-01 SIA Enterprise Pricing.pdf](#p-128f3e8040257101)
- [extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202401 - DIA Market Groups.pdf](#p-d913eff30d18b34b)
- [extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise.pdf](#p-15943f7564ce3764)
- [extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202401 - Ethernet Market Groups.pdf](#p-090fc8204c58e6d3)
- [extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202505 - Ethernet Enterprise.pdf](#p-0e98b0cb1472d33e)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - East.pdf](#p-0fc95384a5f26912)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - West.pdf](#p-90948e3c47dc1b80)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - East.pdf](#p-104769a588c2aa42)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - West.pdf](#p-07fa72c2d7e32bb6)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - East.pdf](#p-b39fcc43d807dcbf)
- [extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - West.pdf](#p-02ae73f90be89db0)
- [extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/Managed Network Security Service Pricing 03-2026.pdf](#p-347abab2953e309a)
- [extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule.pdf](#p-afb87144a36f6a40)
- [extracted/OneDrive_1_4-10-2026 (4)/Multi-Service Discount.pdf](#p-41f27431b1216ff7)
- [extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD-WAN or Network Security Fee Schedule.pdf](#p-efdc57a139e69ef9)
- [extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Enterprise_Pricing_120624 - INTERNAL.pdf](#p-22dd58a4d18769a4)
- [extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Premium_Pricing_120624 - INTERNAL.pdf](#p-d8f7b0a192984b7c)
- [extracted/OneDrive_1_4-10-2026 (4)/Unified Communications/UC Pricing in SF Intermedia Feb 2026.pdf](#p-0fea5860833b25fc)
- [extracted/OneDrive_1_4-10-2026 (4)/Voice/Enterprise SIP - Mar 2021.pdf](#p-9a0c6579db287864)
- [extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC International Calling Rates - East Aug2024.pdf](#p-35fb54658aadf66c)
- [extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC Interneional Calling Rates - West Aug2024.pdf](#p-dcfefa6a0839dda1)
- [extracted/OneDrive_1_4-10-2026 (4)/Voice/Usage Plan Pricing July2022.pdf](#p-3ea16bf096e3331f)
- [extracted/OneDrive_1_4-10-2026 (4)/Wave/202401 - WAVE Market Groups.pdf](#p-a3e29b03938dab4f)
- [extracted/OneDrive_1_4-10-2026 (4)/Wave/2025-07 WAVE Enterprise Pricing.pdf](#p-140cbda0920ef532)
- [extracted/OneDrive_1_4-10-2026 (4)/WiFi/WiFi Pricing V3 09222023.pdf](#p-fe290c8b3b4852ee)
- [extracted/OneDrive_1_4-10-2026 (4)/Wireless Backup & Broadband/Wireless Backup & Broadband Pricing and Plans.pdf](#p-20b0eb5a91bde6f0)

---

## Extracted content


<a id="p-1f1649b2f16c0758"></a>


### `Battlecard - 5G Wireless Backup.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Battlecard - 5G Wireless Backup.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Battlecard - 5G Wireless Backup`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
5G WIRELESS INTERNET BACKUP
SALES BATTLE CARD
PAIN POINTS
OUR SOLUTION PROVIDES...
Small businesses suffer when the Internet 
goes down and they cannot provide goods or 
services to customers.
A continuous connection, allowing your 
business to continue running as normal 
even during fiber cuts or outages
Patrons using public WiFi in coffee shops or 
restaurants will take their business elsewhere 
if there is not a reliable Internet connection.
Prioritization of 5G bandwidth to your most 
critical applications, whether that’s your POS 
system or customer Wi-Fi
An inconsistent Internet connection can affect 
the ability to process credit card payments 
and sales could suffer as a result.
Automatic failover to ensure you never lose 
a sale by keeping your POS and credit card 
terminals online during outages
Redundant wired access is too expensive 
and complex for most small to medium-sized 
businesses.
A fast, affordable back-up Internet solution 
to keep your business connected during 
outages
Companies that rely on Cloud services for 
their day-to-day operations will be unable to 
operate if the Internet is down.
An automatic failover to 5G, keeping your 
connection to the Cloud online.
KEY SELLING POINTS
Backed by Experts: The service is backed by 
highly rated brands such as Verizon, AT& T and 
Cradlepoint
Affordable Back-Up: High-quality backup 
solution at a more affordable price than a 
secondary wired connection
Continued Sales: Automatic failover 
connectivity means no lost sales
Expert Monitoring: Monitored and managed 
in GPC’s 24/7 Network Operations Center 
Best Signal Available: Automatically selects 
the 5G provider with the best signal strength 
and quality at your location
Connected During Power Outages: Optional 
back-up battery keeps your business running 
for up to 8 hours even during power outages
TARGET COMPANY 
CHARACTERISTICS
	»
Small healthcare clinics who need continuous 
access to online patient records
	»
Retailers and restaurants who use POS 
terminals and inventory management systems
	»
Companies whose applications are moving to 
or are in the Cloud
	»
Local government offices required to have a 
redundant, backup Internet connection
	»
Top industries: Healthcare, Retail, Financial 
Services, Automotive and Municipal 
Governments
QUICK PITCH
In today’s business environment, 
reliable connectivity is critical. Power 
outages or unforeseen fiber cuts 
can bring your operations to a halt, 
impacting productivity and revenue. 
That’s why Great Plains 
Communications offers 5G 
Internet Backup to keep your 
business running. It automatically 
switches your network to a secure, 
5G connection when your primary 
Internet goes down while prioritizing 
the wireless bandwidth to your most 
critical applications and systems. 
Contact us today to ensure your 
business stays seamlessly connected!
QUALIFYING QUESTIONS
CHALLENGE
RESPONSE
How many people need Internet at this location? 
(Recommended: 25 or less)
Have you had Internet outages in the past?
What applications would be impacted if your Internet went down?
Do you have Point-of-Sale or credit card terminals that rely on the 
Internet?
Do you host servers on-site that are accessed over the Internet? 
Those servers will not be accessible during failover to 5G.
GPC is competing against national carriers like Cox, 
Lumen, Spectrum or Windstream, in addition to 
direct competition from the providers providing the 
back-up service, Verizon and AT&T, that also offer a 
Wireless Internet Backup service.
GPC’s 5G Wireless Internet Backup is backed by the 
best technology available combined with the local 
access and support you won’t receive from national 
providers.
```


<a id="p-91e007854aa797fe"></a>


### `Business Capability Presentation.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Business Capability Presentation.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Business Capability Presentation`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
Accelerate Business  
Fiber Connectivity and 
Communications Solutions 
for the Modern Business 
PERFORMANCE
```

#### Page 2 / 5 — `page-002.png`

```text
gpcom.com/business
Fiber-Driven Services Designed for Growth 
Make connectivity your competitive advantage. 
From multi-site enterprises to small storefronts, we provide a comprehensive suite of services to deliver the secure, flexible 
infrastructure your business needs. Explore our full portfolio and see how we can accelerate your business growth. 
Get reliable fiber business internet backed by 24/7 
network monitoring and support
Fiber Internet
Keep your business running with automatic failover, 
professional set up and 24/7 support
Wireless Internet Backup
Ensure efficiency and cost savings with scalable, 
secure connectivity across all your locations 
Managed Ethernet 
Improve your network performance and lower your 
costs, no matter the delivery method 
SD-Wan 
Safeguard sensitive data and secure your 
connection with round-the-clock network protection 
Managed Firewall
Keep your team connected — no matter their 
location, with traditional and Cloud-based voice 
solutions 
Unified Communications 
Ensure high performance with secure, reliable 
and direct connections to leading Cloud 
providers 
Cloud Connect
Provide seamless Wi-Fi connectivity to your entire 
team and every customer 
Managed Wi-Fi 
Avoid network disruptions and block high-volume 
attacks before they impact your customers 
DDoS Protection 
Enhance your customers’ experience with TV 
plans that deliver essential programming
Video
```

#### Page 3 / 5 — `page-003.png`

```text
Partner with Experience 
For Unmatched Reliability 
At Great Plains Communications (GPC), we deliver more than just internet service. 
We offer a true partnership. 
Why Businesses Choose GPC 
•
Unmatched Local Support 
Get faster resolutions and minimal downtime by working with a dedicated, local team.
•
Reliability Backed by 24/7 Network Monitoring 
Get peace of mind that comes from proactive monitoring that keeps your business connected and protected. 
•
Over a Century of Experience 
Partner with a proven provider that delivers stable, future-proof solutions backed by over 100 years of expertise. 
•
Flexible, Scalable Solutions 
Grow and customize your services precisely as your business demands evolve. 
Scan the QR code to view a collection of video testimonials that prove 
the real-world value of choosing your local, reliable provider.
Our Partnership in Action 
gpcom.com/business
```

#### Page 4 / 5 — `page-004.png`

```text
Great Plains Communications: 
Your Fastest, Most Reliable Route to the Internet 
When your business depends on speed and reliability, you need GPC. You get access to one of the Midwest’s most connected and resilient IP networks that is 
purpose built for fast, reliable access to the Cloud, key applications and your customers. We ensure your traffic always takes the most efficient, lowest-latency path 
by building direct connections with numerous Tier-1 providers and major Internet Exchanges across our footprint.
gpcom.com/business
```

#### Page 5 / 5 — `page-005.png`

> **Note:** Minimal extractable text on this page (9 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Business Capability Presentation/page-005.png` for layout, charts, or scans.

```text
Thank you!
```


<a id="p-8ed9091398e0b0c0"></a>


### `Cox Acquisition Battle Card v2.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Cox Acquisition Battle Card v2.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Cox Acquisition Battle Card v2`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
BATTLE CARD
Charter/Spectrum Acquisition of Cox
NPS SCORE
Net Promoter Score (NPS) is commonly used to measure customer loyalty by looking at their likelihood of recommending a business. What 
the scores below from 2024 tell us is that people are significantly more likely to recommend Great Plains Communications over 
Cox, Spectrum or Charter. 
GPC
Cox
Spectrum
Charter
HOW WE WIN
Stable Company
We have been around for over 110 
years providing services to homes 
and businesses, and we are not going 
anywhere.
Reliable Service
We provide fast, reliable services backed 
by a fully redundant fiber network that is 
monitored 24/7 for proactive response.
Local Support
Our local, experienced teams are ready to 
support the needs of your business, from 
sales to customer support and everything 
in between.
WHAT THEY’RE SAYING 
The combined company will benefit current Cox customers by:
	›
Bringing together the best products and practices of 
each company to benefit all of the combined company’s 
customers and employees
	›
Returning Cox’s customer service function to the US
	›
Charter committing to fixing service disruptions 
quickly, including same-day technician dispatch when 
requested before 5:00 pm; if not, next day
OUR RESPONSE
	›
Based on NPS scores, Great Plains Communications is much more likely 
to be recommended to peers than any of the other three companies. In 
addition, we are highly riewewed on Google, with an average rating of 4.1. 
	›
There’s no need for us to return our customer service operations to the US 
- because they never left. Our local, experienced support teams are based 
right here in the Midwest, ready to answer your questions and support 
your service.
	›
We provide a more consistent, reliable service that is monitored 24/7 to 
proactively respond to service issues in an attempt to lessen or eliminate 
downtime.
GPC
Cox
Delivery Method
100% Fiber
Coax with Limited Fiber
Symmetrical Speeds
Yes
No (Limited to Fiber Only)
Max Speeds Available
100 Gbps
2 Gbps (Coax)
100 Gbps (Fiber)
Easy to Work With
Yes
No
Auto Renewals
No
Yes
Price Locks
Negotiable Term Lengths 
12-Month Terms
Professional Installation Fees
None
$100
Activation Fees
None
$25/$99 Standard/Gateway
SPEAKING TO THE ACQUISITION
COMPARING GPC TO COX
```


<a id="p-d893e894f8e77845"></a>


### `Driver Training PDF 2025 1 (1).pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Driver Training PDF 2025 1 (1).pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Driver Training PDF 2025 1 (1)`

**Page count:** 19

#### Page 1 / 19 — `page-001.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
Confidential and Proprietary 
Mobile App/Maintenance
```

#### Page 2 / 19 — `page-002.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
• Mobile App 
• Maintenance Program
• Accidents 
• Questions
Agenda
```

#### Page 3 / 19 — `page-003.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
DOWNLOADING THE MOBILE APP
The Mobile App can be downloaded via the 
Apple or Google Play Store by searching 
“Enterprise Fleet Management”. The app 
works on any Android or Apple device.
Features of the Mobile App
•
Maintenance Locator
•
Alerts and Reminders
•
Roadside Assistance 
•
Virtual Maintenance Card
•
Accident Reporting
•
Enterprise Contact information
```

#### Page 4 / 19 — `page-004.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
ACCOUNT SETUP
You will receive an email with your login credentials.
Once you receive this you can proceed to the login screen of the app.
Username = Email
Password = Temporary password included in email
Once completed, you will be prompted to create your new, customized password.
```

#### Page 5 / 19 — `page-005.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
FORGOT YOUR USERNAME OR PASSWORD?
You can reset your password from the login screen of the mobile app by clicking “Forgot Your Password?”. On 
the next screen, enter your email address and click “Send Email”. Once you receive the temporary password in 
your email, proceed to update your password and click “Save”.
```

#### Page 6 / 19 — `page-006.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
“KEEP ME LOGGED IN” ON MOBILE APP
**Passwords will reset every 180 days for security reasons. Please make sure to 
update your password regularly. 
For your convenience, you can 
save your login information and 
have the app keep you logged in. 
To set this up, click on the figure 
in the top right of your mobile 
app.
Enable Face ID for easy login.
```

#### Page 7 / 19 — `page-007.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
MAINTENANCE PROGRAM
The maintenance card is accessible on the Enterprise Mobile App 
Show this to the shop BEFORE any work is done
Use for all maintenance and repairs, including brakes and tires 
Accepted at shops on the Enterprise Network
Shops on the network can be found on the Enterprise Mobile App
Preferred partners:  Firestone, Jiffy Lube, Goodyear, Tire Kingdom, Discount Tire, Etc
Warranty items need to go to the dealership
24/7 Roadside Assistance
```

#### Page 8 / 19 — `page-008.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
VIRTUAL MAINTENANCE CARD
Maintenance cards are 
available virtually on the 
Mobile App. You can access 
your maintenance card by 
clicking Service from the 
main page, then click 
“Maintenance Card”.
```

#### Page 9 / 19 — `page-009.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
MAINTENANCE LOCATOR
The Mobile App also has a Maintenance Shop Locator. 
Simply click the Service Locator icon to get started. Once 
you’ve done that, the app will locate your current location 
and find the shops nearest to your location. Clicking on a 
location will provide you with details of that shop.
```

#### Page 10 / 19 — `page-010.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
ALERTS
You will be alerted when 
your vehicle is needing 
service based on the 
mileage patterns you are 
driving. To view open 
alerts, click the bell in the 
top right. This will take you 
to the listing of all active 
alerts. You also have the 
ability to clear open alerts 
once service is completed, 
by swiping left and clicking 
“Mark Read” or “Dismiss”.
```

#### Page 11 / 19 — `page-011.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
ROADSIDE ASSISTANCE
If you are in need of 
Roadside Assistance, 
you can click the 
“Contacts” button. 
Once there, click the 
icon to call the 
Enterprise Roadside 
Assistance.
```

#### Page 12 / 19 — `page-012.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
MILEAGE REPORTING
```

#### Page 13 / 19 — `page-013.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
CONDITION REPORTING
```

#### Page 14 / 19 — `page-014.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
Mobile App – Contacts
For immediate assistance please 
contact Roadside Assistance, 
Maintenance, or your Account Fleet 
Coordinator
Contact IT Support
• Log-in issues with App/Website
• Password Resets
• Mileage entry issues and corrections
• Setting up Alerts
Phone number: 866-658-5017
Email: DriverHelp@efleets.com
```

#### Page 15 / 19 — `page-015.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
Mobile App – Training Videos
Mobile App Training Video: eFleets Mobile App
```

#### Page 16 / 19 — `page-016.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
What to do in case of an accident…
• Follow company's current guidelines for accidents.
• If a tow or rental is needed call roadside to assist.
• Enterprise only needs to be contacted if the vehicle is a total loss.
```

#### Page 17 / 19 — `page-017.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
Accident Reporting
```

#### Page 18 / 19 — `page-018.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
Confidential and Proprietary 
Questions???
• For lost or misplaced maintenance, fuel, or registration cards, please 
contact your Account Fleet Coordinator, Kim at 3913-326-1977.
• Mobile app/website, please contact IT Support 1-866-658-5017 or 
DriverHelp@efleets.com
Account Fleet Coordinator
Kim Ciccarella
913-326-1977
Kimberly.ciccarella@efleets.com
Client Strategy Manager
Ashlyn Eden
515-253-3865
Ashlyn.Eden@efleets.com
```

#### Page 19 / 19 — `page-019.png`

```text
© 2016 Enterprise Fleet Management, Inc.
CONFIDENTIAL AND PROPRIETARY
THANK YOU!!
```


<a id="p-c4c8f77e3d3081fd"></a>


### `Ethernet Battle Card FINAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Ethernet Battle Card FINAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Ethernet Battle Card FINAL`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC MANAGED ETHERNET
TARGET AUDIENCE
CIO
IT Manager
Network Engineer 
Telecom Manager
INDUSTRIES
Network Manager
Data Center Manager
E-Rate Consultant
(Education)
CUSTOMER PAIN POINTS
Insufficient bandwidth over leased 
lines or highly asymmetrical 
broadband access can reduce the 
quality of the end-user experience.
Traffic over the public Internet 
is subject to variable amounts of 
packet loss, delay and jitter that 
can disrupt real-time voice or video 
communications.
The public Internet is insecure 
and not well suited for connecting 
branch offices, central hubs and 
data centers without adding costly 
layers of security.
Low-bandwidth MPLS services 
have limited throughput that can 
impact the performance of latency-
sensitive applications.
Lack of redundant and diverse 
access leaves critical sites 
vulnerable to unpredictable 
outages caused by fiber cuts.
KEY FEATURES
Private Fiber Optic Network: Ethernet over fiber provides inherent security with virtually 
unlimited bandwidth and offers superior quality of service.
Diverse Access:  Diverse access options (available for an extra charge) and diverse routes provide 
business continuity and disaster recovery for critical facilities such as hub sites and data centers.
Multiple Configurations: Help control the cost of connecting multiple sites with point-to-point, 
point-to-multipoint or multipoint-to-multipoint configurations. 
Ethernet Service Level Agreement (SLA): The Ethernet SLA guarantees up to 99.999% availability 
as well as key performance metrics such as packet loss, delay and jitter.
MEF 3.0 Certified: GPC’s Ethernet services have been certified through a rigorous evaluation 
process by the industry consortium for Carrier Ethernet.
Healthcare
High bandwidth and consistent 
quality to support telemedicine, 
medical imaging and cloud-
based applications
Financial Services
Low-latency and diversely 
routed circuits
Government
Multiple sites and local data 
storage requirements suited 
for point-to-multipoint 
configurations
Education
Campus and remote sites can 
benefit from high performance, 
value and flexibility
```

#### Page 2 / 2 — `page-002.png`

```text
KEY SELLING POINTS
CHALLENGE
GPC is competing against nationwide carriers like 
Cox, Lumen, Windstream, Zayo and others that offer 
fiber-based Ethernet.
RESPONSE
GPC’s Ethernet service combines the 
benefits of a 16,500-mile fiber optic 
network and unique Midwest routes with 
local access and personal support that 
you won’t receive from mega-carriers.
Ethernet021023
How many locations do 
you have in total?
How do you connect your 
locations today? Do you use 
MPLS and/or Internet VPN?
How much bandwidth 
do you require at each 
location?
Are you connecting all sites 
to a single hub or data center, 
or do you require any-to-any 
(full mesh) connectivity?
What are your most critical 
applications and are they hosted 
in a data center or the cloud?
GPC offers scalable Ethernet 
bandwidth from 10 Mbps to 
10 Gbps.
Ethernet provides the lowest 
cost-per-bit of any wide area 
networking service, especially 
compared to MPLS. 
GPC’s private managed 
Ethernet network is 
completely isolated from the 
Internet, which keeps traffic 
secure from end to end.
Ethernet connects users to 
public cloud services and 
key cloud applications that 
enhance the customer and 
employee experience.
Performance Monitoring Portal 
provides real-time visibility 
and reporting of traffic 
performance, including packet 
loss, delay and jitter.
GPC’s Ethernet service 
provides access to over 29 
data centers and carrier hotels 
in major cities across the 
Midwest.
```


<a id="p-3d68b7ee0a88f551"></a>


### `Fiber vs Starlink Battlecard.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Fiber vs Starlink Battlecard.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Fiber vs Starlink Battlecard`

**Page count:** 8

#### Page 1 / 8 — `page-001.png`

```text
Competitive Battle Card
TABLE OF CONTENTS
• Quick Sales Pitch
• Key Selling Points for Fiber
• Starlink Pain Points
• Qualifying Questions
• Ideal Customers for Fiber Internet
• The Challenge of Starlink and How 
to Respond
• Latency Requirements for Business Apps
Fiber versus 
Starlink
1/28/2026
```

#### Page 2 / 8 — `page-002.png`

```text
Go To First Slide
Businesses need fast, stable, and always-on 
Internet. Low Earth Orbit (LEO) satellite such as 
Starlink offers high-speed internet service, but its 
performance depends on weather, sky visibility 
and shared constellations. Latency swings and 
environmental factors can impact real-time 
applications, and the hardware is expensive for a 
small business budget.
Great Plains Communications delivers true 
fiber-to-the-premises connectivity, offering 
unmatched reliability, symmetrical speeds, 
and local support all at an affordable price, 
benefits satellite technology simply cannot 
match.
Quick Sales 
Pitch
1/28/2026
```

#### Page 3 / 8 — `page-003.png`

```text
Go To First Slide
Why Fiber Key Selling Points
Symmetrical Speeds
Great Plains Communications fiber Internet for business provides symmetrical upload and 
download speeds that are critical for video calls, Cloud syncing and remote work.
Increased Efficiencies
As the need to transfer higher levels of data increases, speed and uptime are more important than 
ever. Fiber Internet from  Great Plains Communications allows you to work efficiently to serve your 
customers, meet your goals and advance your company’s plans with fully scalable business internet 
solutions.
Fiber-Level Reliability
Fiber isn't affected by rain fade, snow buildup or dish obstruction, so you’ll never have to worry 
about the weather affecting the quality of your connectivity.
Ultra-Low Latency
Fiber latency is dramatically lower and more consistent than satellite.
Scalable Bandwidth
Fiber scales for business growth and can support multiple users and devices. Meet all the network 
requirements for any size business with fast, reliable internet from the top business Internet 
provider in the Midwest.
Local Support and 
Dedicated Network
Great Plains Communications provides local technicians and engineers working to monitor progress 
and keep you connected. With a 24/7/365 Network Operations Center, we provide around-the-clock 
network monitoring for rapid response to outages and alarms.
1/28/2026
```

#### Page 4 / 8 — `page-004.png`

```text
Go To First Slide
Starlink Pain Points
PAIN POINT
HOW GPC SOLVES THIS WITH FIBER
Weather events cause service degradation at the 
exact times businesses need reliability most.
Enterprise-grade, fiber-level reliability immune to 
weather impacts.
POS systems, VoIP, and cloud applications struggle 
with satellite latency.
Consistent, ultra-low latency ideal for cloud 
workflows, VPN connections, and real-time 
communication.
Peak-time congestion reduces speed as satellite 
cells become saturated.
Dedicated, symmetrical bandwidth, enabling fast 
uploads and backups and enabling scalability.
Starlink antennas require clear sky access and 
proper roof placement, and self-installed satellite 
can lead to frustrations and mistakes, causing 
multiple inefficiencies across multiple areas.
Great Plains Communications performs a full 
evaluation of your technological needs and offers 
local installation and support.
1/28/2026
```

#### Page 5 / 8 — `page-005.png`

```text
Go To First Slide
Qualifying Questions for Fiber Internet
How many employees or 
devices rely on the Internet 
in this location?
What applications or 
systems are critical to your 
business (POS, VoIP, video 
conferencing, etc.)?
Do you need guaranteed 
uptime or SLAs?
How many employees or 
devices rely on the Internet 
in this location?
What applications or 
systems are critical to your 
business (POS, VoIP, video 
conferencing, etc.)?
1/28/2026
```

#### Page 6 / 8 — `page-006.png`

```text
Go To First Slide
Target businesses: 
• Have high upload requirements (healthcare, 
media, financial services)
• Require predictable performance for POS, 
VoIP or Cloud operations
• Include local governments, schools or 
municipal offices
• Are seeking a long-term, scalable Internet 
solution
• Are rural and need dependable service 
unaffected by environmental conditions
Ideal Customers for Fiber Internet
1/28/2026
```

#### Page 7 / 8 — `page-007.png`

```text
Go To First Slide
1/28/2026
The Challenge of Starlink and How to Respond
CHALLENGE
Starlink is marketed as a 
universal, high-speed 
option for rural or 
underserved areas and.
Starlink is seen as an 
advanced, high-speed 
satellite service available 
almost anywhere and 
may appear to match 
fiber speeds in ideal 
conditions.
RESPONSE
Great Plains 
Communications Business 
Fiber Internet provides 
reliability, latency, and 
performance that satellite 
simply cannot replicate. 
With local support and 
real-time monitoring, it is 
the superior choice for any 
business using cloud, 
communications, or real-
time systems.
```

#### Page 8 / 8 — `page-008.png`

```text
Go To First Slide
Fiber versus Starlink Latency
Fiber
5-15ms
Starlink
21-30ms
Use Cases for Low Latency
App/Use
Latency Requirement
Video Calls
< 50ms
VoIP Calls
< 150ms
POS Systems*
< 100ms
VPN**
< 100ms
Cloud Apps
< 100ms
Remote Support Tools
< 100ms
Latency Requirements for Business Apps
1/28/2026
* These numbers are based on latency needed for 
general POS applications.
** VPNs can increase latency on the connection, so 
lower latency is important to ensure optimal 
performance. Latency will also be impacted by 
the speed and location of the VPN servers.
```


<a id="p-7e044495e6a3cbc7"></a>


### `GPC Cloud Connect Battle Card 050321.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/GPC Cloud Connect Battle Card 050321.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/GPC Cloud Connect Battle Card 050321`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC CLOUD CONNECT
TARGET CUSTOMERS
KEY FEATURES
Mid-sized to large enterprises and organizations 
with principal facilities within Great Plains 
Communications (GPC) territory
Current and prospective GPC Ethernet 
customers with 50 Mbps or higher who require 
access to applications in the cloud
Industries Include:
•	
Healthcare
•	
Technology
•	
Manufacturing
•	
Financial Services - 
Banking, Insurance 
and Investment
•	
Government - State 
and Municipal
•	
Education - School 
Systems, Colleges 
and Universities
CUSTOMER PAIN POINTS
Corporate workloads have migrated from 
private data centers to public clouds 
outside the corporate security perimeter.
Accessing applications over the public 
Internet provides inconsistent security 
and performance.
There is high cost and complexity 
associated to connecting to multiple 
network and Cloud Service Providers.
It is difficult to manage and 
troubleshoot applications that are 
accessed via multiple providers.
It is difficult to match changing 
workload and application demands 
due to lack of bandwidth scalability.
GPC Fiber Ethernet: High bandwidth, Layer 2 transport network with a rigorous service level 
agreement (SLA) for high availability and performance
Multi-Cloud Connectivity: Provides direct connections with leading Cloud Service Providers
	»
Standard Access for AWS, Azure, Google and IBM
	»
ICB for Salesforce, SAP, Nutanix and Alibaba
Partnership with Leading Providers:  Partner with leading providers of cloud access and 
consulting for architecture and design
```

#### Page 2 / 2 — `page-002.png`

```text
Cost Effective
No large capital to get 
started and lower total 
cost of operation
Secure
Keeps cloud traffic 
secure outside corporate 
firewalls
Geo-Redundant
Able to connect to 
multiple cloud regions 
from single or redundant 
points of access
Consolidated 
Management
Manage all cloud connectivity 
through one provider and one 
point of contact
Scalable
Scalable fiber-based Ethernet 
bandwidth from 50 Mbps to 
10 Gbps
KEY SELLING POINTS
CHALLENGE
GPC is competing against nationwide carriers like 
Cox, Lumen, Windstream, Zayo and others with their 
own fiber and direct connections to Cloud Service 
Providers.
RESPONSE
GPC provides the benefits of a local 
provider but with nationwide reach. 
The success of your business is our 
highest priority.
QUALIFYING
QUESTIONS
How are you connecting 
to the cloud today?
Are you considering multiple 
cloud connections for added 
redundancy?
Are you 
co-located in 
one or more data 
centers?
Is your cloud access 
in the United 
States only or 
international?
Are you considering a 
cloud migration in the 
next 12 to 24 months?
What applications and “as a 
service” providers are mission 
critical? (ex: VoIP, 365, Salesforce)
How many Cloud 
Services does your 
organization use today? 
(ex: AWS, Azure, Google, IBM, 
Salesforce, Oracle)
CC050321
```


<a id="p-20bfa6cc9a4ba36c"></a>


### `GPC Managed WIFI Battle Card.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/GPC Managed WIFI Battle Card.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/GPC Managed WIFI Battle Card`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC 
MANAGED WIFI
TARGET AUDIENCE
INDUSTRIES
IT Director or Manager
IT/Telecom Consultant
E-Rate Consultant
Network Engineer
Chief Information Officer
Engineering Manager
Chief Financial Officer
Business Owner
Office Manager
CUSTOMER PAIN POINTS
An unreliable wireless network with 
insufficient bandwidth negatively impacts 
business productivity and customer 
experience.
An unsecured WIFI network leaves sensitive 
data and customer privacy vulnerable to 
attacks and puts businesses at risk.
Lack of network data analytics leads 
to uninformed decisions and negative 
financial consequences.
Lack of network expertise can lead to 
network overbuild, wasting valuable 
resources.
Healthcare
Provide patients and visitors with WIFI at doctor’s offices and hospitals
Government
Offer patrons of libraries, museums, airports and other facilities the ability to 
stay online for work or play
Education
Connect laptops and tablets to a secure WIFI connection for students to 
connect to online learning apps
Hospitality
Provide superior services and stay competitive by offering WIFI at restaurants, 
bars or hotels
Retail
Provide a seamless wireless experience for visitors to shopping centers, fast 
food establishments or gyms
Professional Services
Conduct business wirelessly throughout the office
Entertainment
Provide a seamless wireless experience to patrons of your concert venue 
or arena
Confidential. For internal use only.
```

#### Page 2 / 2 — `page-002.png`

```text
KEY SELLING POINTS
CHALLENGE
GPC is competing against other providers like Cox as 
well as do-it-yourself WIFI solutions.
RESPONSE
GPC’s WIFI solutions are backed by local 
experts who are focused on delivering and 
managing industry-leading technology 
so you can focus on business growth.
WIFIBattleCard111022
We have options available to 
fit businesses of all sizes. Each 
solution is optimized to fit 
your current and future needs.
Advanced security settings 
and features safeguard your 
network from cyber threats, 
malicious attacks and viruses.
Engineer and build a mesh 
network solution that 
optimizes connectivity and 
provides superior coverage.
Informative dashboards and 
analytics provide meaningful 
insights into your network.
GPC partners with industry-
leading brands to employ the 
latest technology to power 
your WIFI network.
Confidential. For internal use only.
Do you have a reliable 
WIFI connection?
Are you suffering 
from wireless network 
performance  issues?
Is your WIFI network 
secure?
Do you have adequate WIFI 
coverage?
Are you considering a 
WIFI network at your 
business location?
Do you have a trusted 
partner to manage 
and engineer the 
right-size solution?
```


<a id="p-3efa940c5ddac02f"></a>


### `GPC SD-WAN Battle Card FINAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/GPC SD-WAN Battle Card FINAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/GPC SD-WAN Battle Card FINAL`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC SD-WAN
TARGET CUSTOMERS
KEY FEATURES
Enterprises and organizations with at least 
one network connection to the Great Plains 
Communications (GPC) fiber network.
Multi-site customers within the GPC footprint 
with off-net offices located anywhere in the 
continental United States.
Industries Include:
•	
Healthcare
•	
Financial Services - 
Banking, Insurance 
and Investment
•	
Insurance
•	
Retail
•	
Construction
•	
Government - State 
and Municipal
•	
Education - School 
Systems, Colleges 
and Universities
•	
Real Estate 
Development
CUSTOMER PAIN POINTS
Accessing cloud-based applications over 
the public Internet can reduce the quality 
of experience for end-users.
Backhauling all traffic to a centralized 
firewall is inefficient and decreases 
application responsiveness.
Expensive, low-bandwidth MPLS services 
and lack of redundant access leaves 
networks vulnerable to outages.
Traditional edge routers are not 
centrally managed and must be 
manually configured one by one.
The growth of real-time voice and video 
communications over the Internet has led to 
inconsistent performance and costly upgrades.
Centralized Monitoring and Control: Orchestrator centralizes configuration, monitoring and 
troubleshooting for all network edge devices
Simplified WAN Management: Point-and-click GUI visibility from the access links to the 
applications on a single pane of glass
Dynamic Multi-Path Optimization™: Application-aware packet steering onto the best path 
with sub-second failover to improve application response time and uptime
Dynamic Link Performance Enhancement: Improve performance over underlying access 
links by correcting for packet loss, delay and jitter
Maximize Application Performance: Business policy prioritization optimizes the performance 
of critical applications
```

#### Page 2 / 2 — `page-002.png`

```text
Cost Effective
No up-front capital 
expenses and a lower 
cost of operation
Secure
Keeps application traffic 
secure over encrypted 
VPN tunnels, protected by 
integrated firewalls
Central Management
Manage all network 
bandwidth, connections 
and applications through 
a single portal
Access at Any Location
Scalable access from 10 
Mbps to 10 Gbps over 
fiber, copper, cable or 
wireless - anywhere in the 
United States
Improved Performance 
Edges can identify 
3,000 applications and 
route traffic for optimal 
performance
Network Consolidation 
All-in-one solution that 
combines routing, VPN 
and firewall and can 
replace MPLS.
KEY SELLING POINTS
CHALLENGE
GPC is competing against nationwide carriers like 
Cox, Lumen, Windstream, Zayo and others that offer 
an SD-WAN solution.
RESPONSE
GPC’s SD-WAN combines the benefits of a 
top-rated solution* with nationwide reach 
and personal local support.
*2021 Gartner Leader Quadrant WAN Edge Solution
QUALIFYING
QUESTIONS
How many locations do 
you have in total?
How do you connect your 
locations today? Do you use 
MPLS and/or Internet VPN?
Do remote 
offices use local 
Internet breakout 
or is all traffic 
backhauled?
How much bandwidth do 
you require at each location?
Are you considering an 
SD-WAN migration in the 
next 12-24 months?
Do you use “as a 
service” providers 
for mission critical 
applications? 
(Ex: VoIP, 365, Salesforce)
What are your most 
critical applications and 
are they hosted in a data 
center or the cloud?
SDWAN030722
```


<a id="p-5fc190a7e25d9a91"></a>


### `Managed Firewall Battlecard FINAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Managed Firewall Battlecard FINAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Managed Firewall Battlecard FINAL`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
MANAGED FIREWALL powered by Fortinet®
COLLATERAL
SALES BATTLE CARD
PAIN POINTS
OUR SOLUTION PROVIDES...
Lack of adequate security puts the smaller 
business and its customers at high risk
Continuous monitoring of network traffic for 
potential threats and blocking of malicious 
traffic before it hits your network
Lack of IT staff with training, experience and 
certifications to adequately configure and 
support network firewalls
Access to experienced security experts 
to configure, monitor and manage your 
network firewalls
Multiple providers for networking and security 
leads to finger-pointing and confusion when 
incidents arise
A single provider and point of contact for 
Internet, SD-WAN and security services
Regular software and firmware updates and 
patch management on firewalls to remain 
effective
Firewall management that includes software 
updates and patch management
Lack of 24/7 support staff in the event of a 
cyber attack
24x7x365 proactive monitoring from a SOC 
II certified Security Operations Center (SOC) 
staffed by security engineers
Complexity of managing distributed firewalls 
at every branch office and slow performance 
of backhauling traffic to a centralized firewall
Network security and SD-WAN management 
that allows internal IT teams to focus on the 
core business
KEY SELLING POINTS
Cost-Effective: No up-front 
equipment purchase and reduced IT 
overhead
All-in-One Solution: SD-WAN and 
security over GPC’s fiber Internet
Proactive Performance: 
24x7x365 proactive monitoring 
and management from a Security 
Operations Center (SOC)
Expert Design: Professional firewall 
configuration for comprehensive 
protection and optimal performance
Enterprise Protection: Fortinet 
FortiGuard Enterprise Protection 
offers the most comprehensive set 
of security features available
Service Consolidation: One 
provider and single point of contact 
for Internet, SD-WAN, voice and 
network security
TARGET COMPANY 
CHARACTERISTICS
	»
Multiple sites
	»
Companies that transport 
sensitive customer data
	»
Relies on GPC Internet but 
outside vendors for firewall 
management and security
	»
Companies with smaller IT 
departments
	»
Top industries: financial, 
healthcare, retailers and 
manufacturing
QUICK PITCH
As the amount of cyberattacks 
increase, the need to align 
network and security has become 
increasingly important. In addition, 
most organizations lack the 
cybersecurity skills to ensure 
networks are protected from 
cyber criminals. GPC’s Managed 
Firewall paired with managed 
security will free your IT team to 
focus on strategic initiatives while 
providing the peace of mind that 
comes from knowing your networks 
are protected by best-in-class 
technology and are supported 
by experienced, expert technical 
security support. Partner with GPC 
today and rely on an experienced 
single provider for your Internet, 
networking and security needs.
QUALIFYING QUESTIONS
CHALLENGE
RESPONSE
What cyber threats does (or can) your business face during day-to-
day operations?
How does your business respond to a cyber-attack in the event one 
occurs?
What cybersecurity tools/technologies are you currently using? Are 
they managed by an IT vendor/MSP or do you manage it yourself?
What brand of firewall are you currently using? Is it on-premise or in 
the cloud?
Are your firewalls proactively maintained and monitored 24x7 by 
skilled network and security engineers?
How many different vendors are you using for your services, 
including voice, Internet, networking and security?
Most potential customers already have 
Internet with firewalls and other security 
services from someone - another carrier or 
MSP, independent IT vendor or themselves. 
They may not be interested in adding yet 
another vendor.
A common IT complaint is having to 
manage too many different providers for 
Internet, VoIP, SD-WAN, Firewalls, etc. GPC 
can now provide fully managed Internet, 
Voice, SDWAN, Firewall and Network 
Security services all on a single bill.
```


<a id="p-7d5711f70edad990"></a>


### `Omaha Metro competitive battle card v3.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Omaha Metro competitive battle card v3.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Omaha Metro competitive battle card v3`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
BATTLE CARD
Omaha Metro competitors
Strengths
	›
Strategic market entry - Entering 
underserved areas of the Omaha Metro 
where no fiber competition exist
	›
Local community presence by 
sponsoring revamped ballfields and 
advertising with Omaha Magazine
	›
Quick turnaround on costing and 
construction - often within 2 weeks
Weaknesses
	›
Poor customer experience ranging 
from staff untrained with customer 
interactions to incomplete installs for 
multi-product customers
	›
Limited redundancy nationwide, 
meaning a fiber cut anywhere could 
mean an outage everywhere
	›
No physical storefronts or customer 
support in or around the Omaha area
How We Win
	›
We employ local employees to help 
support and maintain business services 
	›
Our fiber network has built-in 
redundancy for business continuity
	›
We are more established in the Omaha 
market, with a strong reputation as 
industry experts providing excellent 
customer experience backed by 110+ 
years of experience
	›
We have a diverse, 100% referenceable 
customer base
FIBERFIRST
View Service Area
Strengths
	›
100% fiber network offering symmetrical 
speeds
	›
Lower advertised price points than GPC 
business Internet services
	›
Nationwide provider with nationwide 
recognition, especially after being 
purchased by T-Mobile
T-Mobile and Metronet 
Connection
T-Mobile has purchased Metronet and 
plans to operate the residential side 
of their business under the T-Mobile 
brand. They plan to operate the B2B 
side under the Metronet name.
Weaknesses
	›
Inconsistent customer support 
reliability with long hold times, billing 
inconsistencies or poor communication 
during outages or technical issues
	›
While Metronet is not a new company, 
they are new to the Omaha metro; they 
have limited brand recognition and 
focus here
	›
Their network is built quickly and 
cheaply, often using aerial fiber
	›
Limited long-term investment in local 
communities
	›
While the T-Mobile acquisition provides 
larger financial backing to expand, it 
could mean instability as the business 
side is still branded Metronet
How We Win
	›
24x7 technical and Network Operations 
Center support
	›
Active involvement in organizations 
across the Omaha Metro, and entire 
footprint, to build relationships and our 
brand
	›
Gained a strong reputation as industry 
experts providing an excellent 
experience to our business customers 
backed by customer testimonials and a 
100% referenceable customer base
	›
High-capacity network strategically 
designed, built and upgraded, using 
mostly buried fiber (~98%) in the Omaha 
Metro
	›
We focus on building relationships with 
our customers and partners
METRONET
View Service Area
Strengths
	›
No business contracts
	›
Multiple storefronts in and around the 
Omaha Metro
	›
Lower advertised price points than GPC 
business Internet services
	›
Completed full market buildouts outside 
of Omaha - Fremont, Seward, Kearney
Weaknesses
	›
Pocketed availability in Omaha city 
limits - we won a deal back because Allo 
couldn’t get to the customer
	›
Do not fully own their network - lease 
fiber from GPC and others
	›
Recently held voluntary layoffs due to 
funding issues
	›
Reputation for raising their rates on a 
regular basis
How We Win
	›
Resources
	›
Capable of service Omaha businesses 
within 500 feet of our fiber with more 
streamlined installations
	›
GPC contracts are a benefit to customers 
to lock rates in, meaning no Internet rate 
increases for the length of the term
ALLO
View Service Area
Strengths
	›
Simplified bandwidth and pricing 
options - 2 tiers only
	›
Wi-Fi is included with the installation
	›
Lower advertised price points than GPC 
business Internet services
Weaknesses
	›
Limited business services - not a full-
service provider
	›
No local support presence - everything is 
handled remotely or automated
	›
Not ideal for businesses with complex 
needs (DDoS, SD-WAN, etc.)
	›
Only two tiers - smaller businesses do 
not need 1 Gig and could do with less at 
a lesser price point
How We Win
	›
Provide a full suite of services, one bill 
and one point of contact
	›
Able to support more complex business 
needs such as healthcare organizations 
and multi-site businesses
	›
Solutions for mom-and-pop 
businesses that have lower bandwidth 
requirements - you’re not paying for 
what you don’t need
	›
Custom solutions to fit the need of every 
business and industry
GOOGLE FIBER
View Service Area
FiberFirst
Metronet
Allo
Google Fiber
```

#### Page 2 / 5 — `page-002.png`

> **Note:** Minimal extractable text on this page (26 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Omaha Metro competitive battle card v3/page-002.png` for layout, charts, or scans.

```text
Back to Battle Card
FiberFirst
```

#### Page 3 / 5 — `page-003.png`

```text
Back to Battle Card
Metronet Builds
GPC Fiber Network
GPC Fiber Leased to Metronet
Metronet
```

#### Page 4 / 5 — `page-004.png`

```text
Back to Battle Card
Visit Allo’s website for full list of markets  
as well as zoom-in capabilities.
ALLO
Design
Under Construction
Sign Up for Priority  
Install Date
Live & Ready for Install
```

#### Page 5 / 5 — `page-005.png`

> **Note:** Minimal extractable text on this page (27 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Omaha Metro competitive battle card v3/page-005.png` for layout, charts, or scans.

```text
Back to Battle Card
Google Fiber
```


<a id="p-3972ec9d0973cd3c"></a>


### `Product Training/GPC SD-WAN Sales Training 050322.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/GPC SD-WAN Sales Training 050322.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/GPC SD-WAN Sales Training 050322`

**Page count:** 10

#### Page 1 / 10 — `page-001.png`

```text
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
Great Plains Communications
When, Where and How to Sell SD-WAN
How to Qualify and Talk to Customers 
May 3, 2022
SD-WAN SALES TRAINING
GR EAT PLA INS  C O M M UN IC ATIO N S
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```

#### Page 2 / 10 — `page-002.png`

```text
How many locations do they have in 
total?
How many are in Nebraska/Indiana 
and how many are out of region?
Is the company headquartered or 
have a base of operations in one of   
our regions?
Better if some sites are off-net.
GR EAT PLA INS  C O M M UN IC ATIO N S
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
SD-WAN SALES TRAINING
Qualifying Questions
Locations
How do they access the Internet:
• GPC or 3rd Party Fiber
• Cable Modem or DSL?
How are these locations connected?
• VPN – SD-WAN Compatible
• MPLS – SD-WAN can replace
• Ethernet – SD-WAN Compatible
• SD-WAN 
• Who is the vendor?
• When is term over?
Connections
What are your most important 
applications?
Are any of those SaaS applications 
like O365 or Salesforce?
Use VoIP or Video?
Where are those applications 
hosted?
• On Prem/Data Center
• In the Cloud
Applications
```

#### Page 3 / 10 — `page-003.png`

```text
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN ENHANCEMENTS
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```

#### Page 4 / 10 — `page-004.png`

```text
GR EAT PLA INS  C O M M UN IC ATIO N S
Where can I Sell Software Defined-Wide Area Network?
• Any Access
• SD-WAN runs over any type of Internet access, 
including Fiber, Cable, DSL, T1, Ethernet, 4G-LTE 
Wireless
• Its actually better when some sites are on lower quality 
copper than than high quality fiber.
• Any Where
• Because it is independent of the underlying transport, it 
can be deployed anywhere there is Internet access.
• That means any customer location in the United States 
can be equipped with GPC SD-WAN.
• Business Rule - At least one site on GPC fiber
SD-WAN Vertical Markets -
•
Retail stores - connect to central hub
•
Healthcare – regional hospitals and remote clinics
•
Community Banking, many local branches
•
Insurance brokers – local sales offices
•
Government – municipal and state offices
•
Education – school districts, universities
•
Manufacturing  - multiple sites
SD-WAN is ideal for Business of Any Size!  
•
5 sites or 5000 sites
•
All can benefit from SD-WAN.
•
More sites will see bigger benefit
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
SD-WAN SALES TRAINING
```

#### Page 5 / 10 — `page-005.png`

```text
Without VeloCloud SD-WAN
Video conference over a WAN link with 2% packet loss 
With VeloCloud SD-WAN
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN QUALITY OF EXPERIENCE
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```

#### Page 6 / 10 — `page-006.png`

```text
GR EAT PLA INS  C O M M UN ICATIO N S
Great Plains
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN ORCHESTRATOR
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```

#### Page 7 / 10 — `page-007.png`

```text
How Much Does it Cost?
• GPC SD-WAN Pricing is comparable to our 
Internet DIA and SIA
• Higher than SIA but much less than DIA
• Note:  Internet bandwidth is not 
included in SD-WAN and must be 
purchased separately.
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN PRICING
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
SIA DIA Bandwidth
SIA - CLEC
(27%)
SD-WAN 
(27%)
DIA
 (27%)
50 x 50 Mbps
$110
$147
354
100 x 100 Mbps
$176
$199
547
500 x 500 Mbps
$278
$481
860
1000 x 1000 Mbps
$365
$699
1060
```

#### Page 8 / 10 — `page-008.png`

```text
GR EAT PLA INS  C O M M UN ICATIO N S
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN OBJECTION HANDLING
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
Objection
Response
Current solution works OK, so why do 
I need SD-WAN?
Would you like to have visibility into the performance of your network at all sites?  
•
SD-WAN Orchestrator provides real-time views into the performance of your access 
links and the applications than are running across the network. You can even give 
priority to the really important apps. 
Do you have any locations with unreliable or inconsistent Internet performance?  
•
SD-WAN can improve the performance at those sites, especially if they are not on fiber.
Do you have voice or video communications that need better quality of service?
•
SD-WAN can improve the performance of real-time applications, even over single 
access links.  Over dual links, SD-WAN can reroute traffic in less than a second so that 
calls in progress stay up and not get dropped.
Do you access SaaS or Cloud-based applications like O365?  Do you plan to migrate 
servers to the cloud?
80% of new applications are cloud-first, and >50% of enterprise traffic is moving to the 
cloud.  SD-WAN Gateways are designed to provide direct on-ramps to cloud-hosted or 
SaaS-based applications.
```

#### Page 9 / 10 — `page-009.png`

```text
GR EAT PLA INS  C O M M UN ICATIO N S
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN OBJECTION HANDLING
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
Objection
Response
We are a Cisco shop.
GPC core Internet routers are all Cisco, but we chose VMware for SD-WAN because they 
absolutely have the best product on the market as noted by several industry analyst firms.  
•
Gartner has listed VMware at the top of the leader quadrant for several years in a row.
•
The SD-WAN Edge devices run the same routing protocols, including OSPF and BGP, and 
so is compatible with your current routing infrastructure.
•
You will find SD-WAN with its centralized management system much easier than logging 
into individual routers one at a time with a CLI.
We usually purchase and manage 
our own equipment.  Why should 
we choose to outsource the 
network to GPC?
GPC’s fully managed SD-WAN solution offers many quantifiable benefits over DIY
•
No upfront capital expense that takes years to payoff.  Save the cash for other things.
•
A single monthly charge covers the cost of installing, managing and monitoring SD-WAN.
•
GPC has  years of experience managing networks and its 24x7 Network Operations Center 
staff monitors your network and troubleshoot any issues that come up.
•
Time and resources formerly spent managing and troubleshooting network issues can be 
redeployed to more productive work on your core business applications.
```

#### Page 10 / 10 — `page-010.png`

```text
QUESTIONS? 
GR EAT PLA INS  C O M M UN IC ATIO N S
SD-WAN
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```


<a id="p-0b9e99bca1d6cff9"></a>


### `Product Training/GPC Wireless Internet 5G Product Launch.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/GPC Wireless Internet 5G Product Launch.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/GPC Wireless Internet 5G Product Launch`

**Page count:** 19

#### Page 1 / 19 — `page-001.png`

```text
GPC PRODUCT LAUNCH 
WIRELESS INTERNET – 5G
BACKUP AND BROADBAND
```

#### Page 2 / 19 — `page-002.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
WHAT ARE WE ANNOUCING?
Confidential        © 2025 Great Plains Communications
Our New 5G Wireless Internet Services 
1.
Wireless Internet Backup – 5G
2.
Wireless Internet Broadband – 5G
• Wireless Internet Backup
• Provides a wireless backup for GPC wireline Internet access – SIA, DIA
• Only active during outage on primary line – fails over and fails back, automatically 
• New 5G Speeds are 4-5 times faster than 4G LTE
• Wireless Internet Broadband
• Full-time wireless Internet access
• Use Case:  Temporary service while waiting for fiber.
• Alternate Use Case:  Redundant Internet Access – Governments, Healthcare, Banks
```

#### Page 3 / 19 — `page-003.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
WHAT ARE WE ANNOUCING?
How fast is 5G?
• Speeds can range from ~100Mbps to >200Mbps
• Compare – LTE Average Range is 20-25Mbps
• Baseline 5G is 4 – 5 times faster than LTE, and could be higher…
• Verizon is rate limited to 100Mbps on our plan
• AT&T tested at 239 Mbps down, 22Mbps up. 
• Remember – Wireless is not like fiber – not symmetrical and every location is different!
• Wireless bandwidth is always best effort - speeds can vary by carrier, location, signal strength 
and quality, proximity to cell tower and other environmental factors. The underlying wireless carrier 
may temporarily slow data speeds if network is busy.
Confidential        © 2025 Great Plains Communications
```

#### Page 4 / 19 — `page-004.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
Key Features
Internet Backup Key Selling Features
• Automatic failover to Verizon or AT&T 5G wireless networks
• Automatic reversion to the primary Internet connection once service is restored
• 5G Wireless bandwidth speeds
• Professional configuration and installation of the Cradlepoint wireless router
• Optional backup battery with up to 8 hours of run time
• Unlimited data usage and on full time Broadband
• After Failover to the cellular wireless network, GPC will limit data rates as follows:
•
After 12GB of daily usage, data speeds are up to 50Mbps 
•
After 20GB of daily usage, data speeds are up to 25Mbps
•
After 30GB or daily usage, data speeds are up to 3Mbps
•
Note:  The underlying wireless carrier may temporarily slow data speeds if network is busy.
Confidential        © 2025 Great Plains Communications
```

#### Page 5 / 19 — `page-005.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
Key Features
Internet Broadband Key Selling Features
• Full Time Wireless Broadband Internet Access
• No network required – ideal for temporary customers waiting for fiber
• 5G Wireless speeds up to 100Mbps and higher.*
• Unlimited data usage, no overage charges, no bandwidth limits
• Professional configuration and installation of the Cradlepoint wireless router
• Optional backup battery with up to 8 hours of run time
*Note: Wireless bandwidth is “Best Effort” - there no guaranteed minimum bandwidth, and the underlying 
carrier may temporarily reduce Internet speeds during times of high usage.
Confidential        © 2025 Great Plains Communications
```

#### Page 6 / 19 — `page-006.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
TARGET MARKETS 
Target Markets – Small Business Examples
•
Healthcare
•
Doctors offices, clinics and pharmacies need on-line 
access to patient records, e-fax and e-prescribing. 
•
Retail
•
Retail Stores and restaurants need Internet access for 
POS terminals and to process credit card orders.
•
Services
•
As applications move to the cloud, financial, Legal, 
Accounting, Insurance services need reliable Internet.
•
Local/City Government
•
Broadband Internet with network/carrier redundancy
Customer Pain Points
1.
Small businesses loose business when the Internet 
goes down and they cannot provide services or sales.
2.
Coffee shop patrons require reliable Internet or they will 
take their business elsewhere.
3.
Payment card processing require reliable Internet 
access or sales cannot be completed.
4.
Without on-line access, companies that rely on cloud 
services will find employees cannot do their jobs.
5.
Redundant landline access is too expensive and too 
complex for most small and medium sized businesses.
Confidential        © 2025 Great Plains Communications
```

#### Page 7 / 19 — `page-007.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
OUR VENDOR PARTNERS
1. Cradlepoint - Ericsson
•
Cradlepoint is the leader of the cellular wireless router 
market with over 28,000 customers in 50 countries.
•
Products are known for high reliability and 
performance = X20 throughput nearly 1Gbps*
•
Router installed on Customer Prem – Managed by 
GPC Internet Service Center (ISC)
•
Back up battery (optional) protects against power 
outages for up to 8 hours.
Cradlepoint E100 LTE Wireless Router
Cradlepoint X20-5G Wireless Router
*Note:  Do not sell with SIA/DIA above 1Gbps!  
Confidential        © 2025 Great Plains Communications
```

#### Page 8 / 19 — `page-008.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
OUR VENDOR PARTNERS
2. Kajeet
•
LTE Wireless Services from Verizon and 
AT&T are provided by Kajeet.
•
Kajeet Sentinel Portal will filter traffic 
during failover to only allow critical 
business traffic over the 5G network.
•
Productivity Filter – Social Media and 
Streaming Services, including Tik Toc, 
Netflix and GPC iTV will be blocked from 
the cellular wireless network during 
failover.
Confidential        © 2025 Great Plains Communications
```

#### Page 9 / 19 — `page-009.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
Installation
• Cradlepoint routers come with dual 5G SIMs from 
Verizon and AT&T 
• During installation - Special software automatically 
measures signal Strength and Quality for each 
carrier.
• SIM with best signal is activated, other deactivated
• Result – Very high install success rate*
Confidential        © 2025 Great Plains Communications
```

#### Page 10 / 19 — `page-010.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
• Cradlepoint Monitors flow of traffic to 
the Internet 
• If an interruption of Internet traffic is 
detected, router will automatically 
switch over to wireless LTE.
• Failover takes around one minute.
• Router will automatically switch back 
to landline when service is restored.
Wireless Backup 5G - Automatic Failover
*Note:  Static IP addresses will work on the GPC landline Internet, but not during failover to the wireless network.  
Confidential        © 2025 Great Plains Communications
```

#### Page 11 / 19 — `page-011.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
Wireless Internet Broadband
• Cradlepoint forwards traffic from 
customer switch/router to Verizon or 
AT&T 5G network.
• You must pre-qualify 5G availability on 
the carrier Website.
• No static IP on Wireless Internet 
Broadband – IP provided by wireless 
carrier using DHCP, so servers hosted 
on prem will not be reachable from the 
Internet.
Confidential        © 2025 Great Plains Communications
```

#### Page 12 / 19 — `page-012.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW MUCH DOES IT COST?
Wireless Internet Backup and Broadband Pricing and Plans
Product
List Price
Discount
Data Included
Overage Rate
Remarks
LTE Wireless Internet 
Backup*
$45 MRC
Term 
1GB
$9 per 1GB
2yr. Minimum Term
5G Wireless Internet 
Backup*
$68 MRC
Term
Unlimited
None
Carrier will temporarily slow 
data rate after failover
Wireless Internet 
Broadband*
$175.00*
Term
Unlimited
None
Underlying carrier may 
temporarily slow data rate 
during periods of high usage
Optional Battery Backup
NRC - TBD
Term
Battery powers device up to  
8 hours during power failure
*There is no minimum bandwidth associated with Internet Backup or Full Time Wireless Broadband – Wireless is always ‘best effort.’
**Full-time Internet Broadband price.  For Temporary service pricing customer begins billing for SIA or DIA once wireless is installed.
Confidential        © 2025 Great Plains Communications
```

#### Page 13 / 19 — `page-013.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
For 5G Wireless Internet Backup
Add Service Page: 
•
Select Product Family – Internet Services
•
Select Product Line – Wireless Internet (Cellular)
•
Product Names
•
Wireless Internet Backup – 5G
•
Wireless Internet Broadband – 5G
Confidential        © 2025 Great Plains Communications
```

#### Page 14 / 19 — `page-014.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
Note: Customer will be billed at contracted SIA/DIA rate for Wireless Internet until fiber is installed.
For Wireless Internet Broadband (temporary)
• Check boxes on Internet Service Order (SIA/DIA)
1.
Add Solution Check Box  
Confidential        © 2025 Great Plains Communications
```

#### Page 15 / 19 — `page-015.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
Note:  Temporary Wireless Service is non-commissionable.
Wireless Internet Broadband (temporary)
• Check box on Internet Service Order (SIA/DIA)
2.
Add Site Check Box 
Confidential        © 2025 Great Plains Communications
```

#### Page 16 / 19 — `page-016.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
THE RULES
Wireless Internet Service Business Rules
• Do not sell outside of GPC territory
• Exception – May be sold to multi-location customer with some off-net sites and within driving distance of 
Field Technicians.  Approval required.
• NRC Install Charge applies to customers outside of normal operating areas.
• Wireless Internet Services must be sold only to new and existing customers of SIA, DIA or SD-WAN.
• Wireless Broadband (temporary) services may be converted to Backup services following fiber install.
• There are no SLA guarantees – all wireless services are “Best Effort.”
Confidential        © 2025 Great Plains Communications
```

#### Page 17 / 19 — `page-017.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
MARKETING COLLATERAL
Product Data Sheet
Battlecard
Confidential        © 2025 Great Plains Communications
```

#### Page 18 / 19 — `page-018.png`

```text
Resources
G P C  P R O D U C T  L A U N C H
For More Information:
All Sales/Marketing Collateral is available on the Sales 
Resources Page. 
Confidential        © 2025 Great Plains Communications
```

#### Page 19 / 19 — `page-019.png`

```text
QUESTIONS?
G P C  P R O D U C T  L A U N C H
Confidential        © 2025 Great Plains Communications
```


<a id="p-bc4a72ccc45e52c7"></a>


### `Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven`

**Page count:** 13

#### Page 1 / 13 — `page-001.png`

```text
New Paradigm – OTT Deployment
•
Hosted PBX and UC is a voice/video application like MS 
Teams & Zoom
•
It is optimized to traverse the IP Networks and deliver 
quality service
•
OTT is the standard default deployment for new UC location 
– service runs on the customer existing data network
•
Focus on business needs and solution functionality, NOT 
network
•
BSOL to determine wiring requirements
```

#### Page 2 / 13 — `page-002.png`

```text
Product Packages
UC Resource Line
UC Express
UC Collab Essentials
UC Collab Pro
Call Recording
Mobility
Desktop Client
Voicemail
Auto Attendant
Equipment
Unlimited LD
Business Texting
Equipment
Unlimited LD
Voicemail
Mobility
Desktop Client
Auto Attendant
Call Queue
Meetings
Mobility
Voicemail
Equipment
Desktop Client
Auto Attendant
Unlimited LD
Meetings
Call Recording
Equipment
Call Recording
Unlimited LD
Voicemail
Call Recording
```

#### Page 3 / 13 — `page-003.png`

```text
Cloud Voice/Hosted PBX 
Cloud Voice
Hosted PBX 
Video/Collaboration
RESOURCE LINE
EXPRESS
ESSENTIALS
PRO
Mix & Match
•
•
•
•
Number of Concurrent Endpoints
1 , No Apps
1 Phone Plus apps
1 Phone Plus apps
5
Mobile app
•
•
•
Desktop app
•
•
•
Ext to Ext Calling 
•
•
•
•
Auto Attendant
•
•
•
Basic Call Forwarding
•
•
•
Advanced Call Forwarding
•
•
Hot Desking
•
•
•
Call Pickup
•
•
•
Caller ID
•
•
•
•
Hunt Groups with Agent Log in/out
•
•
•
Call Transfer, Call Hold
•
•
•
•
3-way Calling, Music on Hold
•
•
Paging
•
•
•
Call Park/Pickup
•
•
•
•
Intercom
•
•
•
•
SPAM Call Blocking/Tagging
•
•
•
911 Admin Notification
•
•
•
•
Voicemail
•
•
•
•
Voicemail Transcription
•
•
Call Recording
•
•
•
•
Web Fax
•
Busy Lamp Field
•
•
```

#### Page 4 / 13 — `page-004.png`

```text
Video & Collaboration
Cloud Voice
Hosted PBX 
Video/Collaboration
RESOURCE LINE
EXPRESS
ESSENTIALS
PRO
Presence Detection
•
•
2-Way Presence Sync
•
•
1 on 1 and Group Chat
•
•
User Texting
•
Company Messaging
Additional Charge
File Backup, Sync and Share *amounts may vary 
based on when and how the license was purchased
5 GB/user
50 GB/user
Exchange Mailbox
Hd Video Conferencing
4 Participants
100 Participants
Hd Audio Conferencing
200 Participants
200 Participants
Dial in Numbers
Local
International
Unite Rooms
•
•
Webinar
Additional Charge
Additional Charge
Screen Sharing
•
•
Compact Mode
•
•
Unlimited Recordings
•
Screen Annotation
•
•
Transcripts & Meeting Insights
•
Calendar Sync
•
•
In Meeting Chat
•
•
In Meeting Notes
•
End to end Encryption
•
Meeting Security (passwords, lock, attendees 
permission controls)
•
•
```

#### Page 5 / 13 — `page-005.png`

```text
Integrations & Lite CC
Cloud Voice
Hosted PBX
Video/Collaboration
RESOURCE LINE
EXPRESS
ESSENTIALS
PRO
QoS Dashboard
•
•
•
Call History
•
•
•
Wallboards
•
Detailed Contact Center Analytics
•
Active Directory
•
•
•
MS Teams Calling – Future Phase
Chrome (click to call), G Suite,
•
•
•
Outlook, Slack (meeting integration), Outlook/Office 
365 Meetings Integration), Generic CRM Screen 
Pop
Sugar CRM, Zoho CRM, Zendesk
•
Salesforce, ServiceNow, NetSuite, MS Dynamics – 
Future Phase
Agent Log in and Log out
•
Call Queuing, Configuration Wrap up Time, 
Configurable Agent Removal from the Queue, 
Greetings Management
•
Smart Greetings and Additional Call Recording 
Storage
•
Scheduled and Graphical Reports
•
Supervisor Functions (monitor, whisper, barge)
•
```

#### Page 6 / 13 — `page-006.png`

```text
Phone Options
Yealink T57W – Advanced 
Yealink W77P - Cordless
Yealink T53W - Basic
Yealink T54W - Intermediate
Yealink CP965 – Conference 
Desktop & Mobile Apps
```

#### Page 7 / 13 — `page-007.png`

```text
Marketing Product Brochure
https://online.flippingboo
k.com/view/322389430/
```

#### Page 8 / 13 — `page-008.png`

> **Note:** Minimal extractable text on this page (14 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY -  GPC UC SKO June 6 - Steven/page-008.png` for layout, charts, or scans.

```text
Proposal Insert
```

#### Page 9 / 13 — `page-009.png`

```text
Post-Install Support
• 3-tier support structure to streamline 
ticket flow & improve timely 
resolution
• Tier 1 – Andera team focuses on 
MACD, config, education, admin & 
documentation support
• Tier 2 – Chris (TechOps) provides 
technical assistance and manages 
customer network connectivity issue
• Tier 3 – IM handles platform, 
provisioning & apps  
• QoS Analytic - tool to show network 
conditions 
• Ticket is tracked/measured by KPIs
```

#### Page 10 / 13 — `page-010.png`

```text
New Improved vs. Legacy
Intermedia
Kandy
UC Resource Line – breakroom/lobby
Not Available 
UC Express
UC Mobile
Recording - standard in every package
Add-on
Business Texting SMS – “Pro”
Not Available
Call Queue – “Pro”
Not Available 
Meetings & Screen Share - UC packages
Not Available
MS Teams – future phase
Not Available
Contact Center – future phase
Not Available 
Vendor pre-sales support if required
Not Available
```

#### Page 11 / 13 — `page-011.png`

```text
Product Roadmap
Kandy Migration
MS Teams Calling
Lite Contact Center
CRM Integrations
Off Net
```

#### Page 12 / 13 — `page-012.png`

```text
Salesforce Products
• Type - Service 
• Product Family - Voice Services
• Line - Unified Communications
```

#### Page 13 / 13 — `page-013.png`

```text
Key Date & Milestone
Alpha Installed
Beta Identified & Installed
Platform Go/No Go
IM UC Sales Engagement
1st IM Salesforce Order
June 1
July 1
August 1
Sept 1
Alpha: GPC sales office 
Beta: 2 or 3 friendly customers with 10 seats or less
Note: Closed/Won prior to 7/8 should have minimum estimated 60-day installation interval. 
Customer will be contacted by early July to schedule a firm install date.
6/28
6/17
6/7
7/8
6/7 Note
Standard Install Interval Expected
Identified
```


<a id="p-ecbc1429f8d6aaeb"></a>


### `Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1).pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)`

**Page count:** 125

#### Page 1 / 125 — `page-001.png`

> **Note:** Minimal extractable text on this page (39 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-001.png` for layout, charts, or scans.

```text
Introduction to Selling Ascend
June 6th, 2024
```

#### Page 2 / 125 — `page-002.png`

> **Note:** Minimal extractable text on this page (1 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-002.png` for layout, charts, or scans.

```text
+
```

#### Page 3 / 125 — `page-003.png`

```text
INTERMEDIA TEAM 
Field Channel Sales Team:
Mark Miller – Strategic Channel Account Manager (Main point of contact for all 
Intermedia/Ascend questions and sales opportunities)
mmiller@intermedia.com | 408.400.7621
Allister Quinteros – Sr Director, Channel Account Management 
(Mark’s manager / Escalation point of contact)
aquinteros@intermedia.com |647.277.1010
Partner Enablement Training:
Elijah Navarro – Manager, Partner Enablement – Responsible for in person and 
virtual training sessions for all sales reps
enavarro@intermedia.com | 631-902-9646
Marketing:
Brian Gregory – Sr. Director, Product Marketing 
Assigned point of contact for everything Marketing. 
tlegere@intermedia.com | 408-713-2792
Solutions Architects / Sales Engineering:
Samuel Riolo – Director, Pre Sales Engineering 
sriolo@intermedia.com | 650-492-4706
```

#### Page 4 / 125 — `page-004.png`

```text
1
2
3
4
TODAY!
Who is Intermedia
Market Assessment Kahoot 
Available Market 
Ascend Product Offering 
Product Demo 
Approaching Customers 
5
6
```

#### Page 5 / 125 — `page-005.png`

> **Note:** Minimal extractable text on this page (20 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-005.png` for layout, charts, or scans.

```text
Great Plains Team Intro
```

#### Page 6 / 125 — `page-006.png`

```text
INTERMEDIA?
Who is 
PC Mag 4.5 Rating Best Overall VoIP 
CRN Winner Top Partner Program
UC Today Top UC Platform Providers
UC Today Top CCaaS Vendors 
First UC + CC 
Offering  
Launched as Intermedia’s 
initial offering
Displays leaderships vision 
for the future opportunity
UC Awards
Frost & Sullivan 
Best in Class
Added Contact Center 
Best UC Provider
Shift to Unified Communications
Web Hosting
2023
2022
2014
2019
EST
1995
2000
Hosted Exchange
Fully integrated 
with Ascend  
Added Archiving
2024
Microsoft's largest
partner reseller
```

#### Page 7 / 125 — `page-007.png`

```text
Top CCaaS Vendors for 2023 article from UC Today
https://www.uctoday.com/unified-communications/the-top-ccaas-providers-to-consider-in-2024/
The Best UC Platforms for 2024: UC Market Map:
 Top UC Platform Providers for 2023 article from UC Today
https://www.uctoday.com/unified-communications/the-best-uc-platforms-for-
2024-uc-market-map/
Top UC/CC Platform Providers for 2024
```

#### Page 8 / 125 — `page-008.png`

> **Note:** Minimal extractable text on this page (25 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-008.png` for layout, charts, or scans.

```text
8
Partner-first UCaaS Leader
```

#### Page 9 / 125 — `page-009.png`

```text
Intermedia Global Presence
OFFICE
1400+
EMPLOYEES
HEADQUARTERS
12
DATACENTERS
DATACENTER
```

#### Page 10 / 125 — `page-010.png`

```text
Intermedia at a Glance
Loyal, Valued
Customer Base
Partner-Centric 
Go-to-Market
Business Customers
Partners
135,000
7,500 
Team Members
1,500
Innovative, 
Global Team
~1% Monthly 
Revenue Churn
85%
% of New Bookings 
from Partners
```

#### Page 11 / 125 — `page-011.png`

```text
World-class Support and Service
The only cloud communications 
provider to have been recognized for 
“excellence in technical support” by 
J.D. Power 7 times
We believe we need to earn 
your business everyday!
3 Billion Voice minutes / Year
89 NPS Onboarding & Tech Support
1
 
 
(SaaS Industry average = 36)
2
99.999% Uptime SLAs 
1.
Reflects Net Promoter Scores (NPS) for the month of July 2023 - average client services score (onboarding and support)
2.
CustomerGauge - B2B NPS and CX Benchmarks Report - 2022
```

#### Page 12 / 125 — `page-012.png`

```text
SMS & COMPANY 
MESSAGING
Comprehensive, Integrated, AI-powered Product Portfolio: 
One-Stop Solution with One Point of Control
Unified Communications as a Service (UCaaS)
Business Cloud Applications (BCA)
12
BACKUP FOR 
MICROSOFT 365
EMAIL ENCRYPTION
AI EMAIL PROTECTION
EXCHANGE EMAIL
FAX
MICROSOFT 365
OUTLOOK BACKUP
PRESENCE 
INDICATOR
SIP 
TRUNKING
CHAT
VIDEO MEETINGS & ROOMS
AI Meeting Notes 
and Action Items
Ascend  FOR/WITH 
TEAMS
TOLL FREE
SECURISYNC® 
BACKUP & 
COLLABORATION
CONTACT CENTER
ARCHIVING
PHONE
AI Voicemail Transcription
Eliminating the need for multiple point solutions and associated costs, IT complexity, as well as usability, support, and interoperability issues
```

#### Page 13 / 125 — `page-013.png`

> **Note:** Minimal extractable text on this page (20 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-013.png` for layout, charts, or scans.

```text
Hybrid Work 
Assessment
```

#### Page 14 / 125 — `page-014.png`

```text
Legal
Finance  
Healthcare
Government
K-12, College, Universities
Service Based (Car Dealerships, Logistics, HVAC, Contracting)
 
Growth Verticals
```

#### Page 15 / 125 — `page-015.png`

> **Note:** Minimal extractable text on this page (22 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-015.png` for layout, charts, or scans.

```text
Ascend Product Refresher
```

#### Page 16 / 125 — `page-016.png`

```text
23
Empowering Connected and Productive Hybrid Workforces
Intermedia Ascend 
® - The Intelligent Communications Solution
```

#### Page 17 / 125 — `page-017.png`

```text
Ascend = 5 Communications Tools in 1
24
VOICE
CUSTOMER 
EXPERIENCE 
TEAM CHAT 
AND SMS
I N T E G R AT E D  U S E R  E X P E R I E N C E
FILE 
COLLABORATION
VIDEO 
CONFERENCING 
IN TEG RATIO N
A SCEN D A RCHIVIN G
```

#### Page 18 / 125 — `page-018.png`

```text
VOICE
CUSTOMER 
EXPERIENCE 
TEAM CHAT 
AND SMS
I N T E G R AT E D  U S E R  E X P E R I E N C E
FILE 
COLLABORATION
VIDEO 
CONFERENCING 
$15 -$40
$10 - $20
$10 - $20
$50 - $200
$0 - $10
Ascend = 5 Communications Tools in 1
A SCEN D A RCHIVIN G
```

#### Page 19 / 125 — `page-019.png`

> **Note:** Minimal extractable text on this page (2 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-019.png` for layout, charts, or scans.

```text
26
```

#### Page 20 / 125 — `page-020.png`

```text
27
PC and Mac Platforms, iPhone and Android Devices
Fully Integrated Experience
Phone with 
caller ID, hold, park, 
flip, transfer, 
conference & more
Group chat, SMS/MMS
Video conferencing & 
calendar integration
File sharing & 
collaboration
Call history
Transcribed voicemails
Contact Center
Presence & Settings 
Receptionist view
Global search
Start meetings & 
place calls
Personal card & 
chat controls
Member management
Easy access to 
all files in this chat
Integrated 
company directory, 
contact sync & 
chat federation
HD-quality 
video conferencing, 
screen sharing, 
recording & 
transcription, 
annotation, notes & 
AI virtual assistant
New chat, file drag & 
drop, reactions, emojis, 
GIF, replies & more
1
2
3
4
5
7
9
8
6
10
11
15
14
16
12
17
13
```

#### Page 21 / 125 — `page-021.png`

```text
28
Inbound call 
management
Single space for easy 
collaboration with the 
entire organization
2
3
Real-time reporting 
and analytics for 
Supervisors
4
Customer engagement 
Contact Center Agent 
for calls, emails, SMS, 
chat, and WhatsApp
1
Agent status and 
employee
presence integration
Inbound customer call 
with call recording, call 
transferring and turning 
into conference with any 
authorized contacts
5
6
Quality management,
call recording storage,
AI driven interaction 
transcription & 
sentiment analysis for 
Supervisors
7
Ascend : Fully Integrated UCaaS & CCaaS
```

#### Page 22 / 125 — `page-022.png`

```text
29
PC and Mac Platforms, iOS and Android Devices
Fully Integrated Mobile Experience
Global Search
Start or join 
meetings
Real-time 
presence 
Place and 
receive 
business calls
Team chat
All company 
contacts
Phone with 
hold, park, 
transfer, 
conference 
and flip
Transcribed 
voicemail
3
1
2
4
5
8
7
6
```

#### Page 23 / 125 — `page-023.png`

```text
30
90+ Enterprise-level Features Included
* Customer is responsible for ensuring that all call recordings comply with any applicable federal or state law (including consent requirements).
Multi-menu, scheduled routing with 
easy graphical setup and management
• Flexible call delivery- simul, round 
robin, sequential, least recent
• Multiple recording, override, 
reporting
• Automatic call recording: Records 
all calls placed to a hunt group
• On-Demand call recording: Decide 
when to record a call on the fly
• Route to one or multiple 
receptionists
• Scheduled routing based 
on time of day
Easily deploy phones at remote 
and home offices
Call Recording
Receptionist Routing
Multi-site
Call Center
Automated Attendant
Full featured phone system
• Call transfer
• Hold
• Park
• Monitor
• Conference 
• Contact list
• BLF
• Follow me 
forwarding
• Call flip
• 3-way calling
```

#### Page 24 / 125 — `page-024.png`

```text
VoIP Scout for Network Testing
Customer QoS Dashboard
Network Testing and Real-time Analytics
31
```

#### Page 25 / 125 — `page-025.png`

```text
Equipment Options
Yealink T57W – Advanced 
Yealink W77P - Cordless
Yealink T53W - Basic
Yealink T54W - Intermediate
Yealink CP965 – Conference
```

#### Page 26 / 125 — `page-026.png`

```text
44
Get the best of Intermedia Ascend  and Microsoft Teams - together
Intermedia Ascend  with Microsoft Teams
Designed for businesses who have oriented their collaboration around Teams, yet 
need enterprise-grade PBX, contact center capabilities, SMS, and/or a desk phone. 
The right apps for the right services: 
Users work within Teams for chat, meetings, 
and files, and use Ascend  desktop and 
mobile apps for all phone-related services.
Easy-to-use: Ascend  collaboration features 
(chat, meetings, and file sharing) are 
disabled, so users aren’t faced with 
confusing options.
Advanced capabilities: In addition 
to communicating through enterprise-grade 
cloud PBX, organizations have access to 
Business SMS, Call Center and CRM 
integrations thru Ascend  at no additional 
cost.
Single sign-on: Users sign into Ascend  
with their M365 credentials.
Teams for 
Collaboration
Ascend for 
Communications
USE TEAMS FOR 
Chat, meetings, files
USE Ascend  FOR 
Native Phone, Contact Center, 
SMS, Presence and Integrations
SINGLE SIGN ON
```

#### Page 27 / 125 — `page-027.png`

```text
45
For businesses looking to add reliable, award-winning PBX into their Microsoft Teams application.
Intermedia Ascend  for Microsoft Teams
Seamless user experience: One app for both collaboration 
and voice means users manage calls through the native 
Teams application
Advanced capabilities: Leverage Ascend ’s enterprise-
grade calling features, including auto attendant, call 
queuing, automatic company-wide call recording, and 
more within the Teams applications.
Familiar Tools: Working 100% within Microsoft Teams 
applications, users can keep their Ascend  phone numbers, 
extensions and call flows, no additional training or 
hardware required
Designed to boost the power and functionality of Microsoft Teams through the enterprise-grade 
Cloud PBX of Intermedia Ascend .
```

#### Page 28 / 125 — `page-028.png`

> **Note:** Minimal extractable text on this page (12 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-028.png` for layout, charts, or scans.

```text
5 Minute Break
```

#### Page 29 / 125 — `page-029.png`

> **Note:** Minimal extractable text on this page (22 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-029.png` for layout, charts, or scans.

```text
Desktop Application Demo
```

#### Page 30 / 125 — `page-030.png`

```text
Modernize your Business Communications
Your Phone System Is 
Putting Your Business on 
HOLD
```

#### Page 31 / 125 — `page-031.png`

```text
50
1
1.
IDC - Worldwide Unified Communications and Collaboration Forecast, 2021–2025 - May 2021, IDC - Worldwide Contact Center Applications 
Software Forecast, 2021–2025 - June 2021, MarketsandMarkets - Global Forecast to 2026 
2.
Radicati - Secure Email Gateway - Market Quadrant 2020, IDC Market Analysis Perspective: Worldwide Collaborative Applications, September 
2021, IDC - Semiannual Telecom Services Tracker - November 2021, MarketsandMarkets - Global Forecast to 2025
$56B
2022 Total Market1 (est.)
UC Market
UC Market
Underpenetrated Global Opportunity
Business telephony users globally3
~450M
Cloud-based business 
telephony users4
UCaaS 
Users5
25M
126M
3.
Based on Gartner estimates
4.
Cloud-based telephony defined by source (Gartner) as enterprise-grade telephony that is owned, delivered and managed remotely by a third-party provider. The 
infrastructure is shared, multitenant or virtualized, and is consumed in a one-to-many model
5.
Per Synergy Research Group, “As On-Premise PBX Market Moves to the Cloud, Microsoft Jumps to #2 in UCaaS”, June 9, 2021
$76.7B
$147B
2027 Total Market (est.)
Massive (and Growing) Market Opportunity
```

#### Page 32 / 125 — `page-032.png`

```text
Different Customer Types
©2000-2024 Visual Edge IT, Inc.
STRICTLY PRIVATE AND CONFIDENTIAL
Cloud to Cloud –
1. Application Sprawl
2. Unified Communications provider  
Status Quo – nothing changed 
1 2
3
On Prem migrating to the Cloud
```

#### Page 33 / 125 — `page-033.png`

```text
Different Customer Types
©2000-2024 Visual Edge IT, Inc.
STRICTLY PRIVATE AND CONFIDENTIAL
3
On Prem migrating to the Cloud
```

#### Page 34 / 125 — `page-034.png`

```text
Typical Problems 
with Office 
Phone Systems:
1   It costs you more than you think
2   It’s a depreciating asset 
3   It’s voice only 
4   It doesn’t allow employees to be 
productive outside the office 
5   It’s not designed for a great 
customer experience
6   It won’t get the newest technology
```

#### Page 35 / 125 — `page-035.png`

```text
54
Compare Your On-Premises Phone System with Cloud Communications 
The Price is Right
On-Premises Phone System
Average Monthly Costs per Person
Phone 
• Phone lines 
 
  $5
• Administration 
 
  $3
• Maintenance 
 
  $3
• Parts 
 
 
  $4
• Software upgrades 
  $3
 
      TOTAL  
$18
Company paid cell phone 
$70
Additional Communication Tools
• Online meetings  
$10-$20
• File store and share 
$10-$20
• Business Instant Messaging   $0-$10
 
        TOTAL 
$20-$50
GRAND TOTAL 
 
Cloud Communications Platform
Average Monthly Costs per Person
GRAND TOTAL
$18-$138/user/mo
$25/user/mo
Phone / Video / Chat / Files / Contact Center
```

#### Page 36 / 125 — `page-036.png`

```text
55
2. Phone systems are depreciating assets, 
the cloud gets better over time
A cloud phone system 
constantly evolves with the 
latest innovations such as 
AI and requires no software 
upgrades, maintenance or 
replacement.  
A premises-based phone 
system is a depreciating 
asset which requires costly 
software upgrades, new 
hardware and ultimately 
will require complete 
replacement.
TIME
 
VALUE
```

#### Page 37 / 125 — `page-037.png`

```text
56
3. Phone systems are voice only and office only, 4. the cloud goes 
anywhere and is voice, text, SMS and video
```

#### Page 38 / 125 — `page-038.png`

```text
57
of customers 
prefer text 
messages over 
direct phone 
calls.
- SMS Comparison
90%
Can your phone system text-enable your main business number? 
Likely not.  
MODERNIZE YOUR BUSINESS COMMUNICATION
Call or Text 1-800-222-9999
Your Phone System is Putting 
your Business On Hold!
```

#### Page 39 / 125 — `page-039.png`

```text
58
How are  you handling your employee’s mobility?
Personal Phone?
Inexpensive but 
employee must 
give out their 
personal phone 
number AND 
when the 
employee 
leaves, the 
customer 
contact 
information goes 
with them and 
possibly to your 
competition!
Company Phone?
Expensive and 
not tied to the 
corporate phone 
system.
No visibility into 
customer 
communications. 
No call transfer, 
call analytics, 
and employees 
have to carry 2 
devices.
```

#### Page 40 / 125 — `page-040.png`

```text
There’s a Better Way!
Ascend  Mobile App
• Runs on the personal phone
• Used only for business 
communications:
• Calls
• Contacts
• Instant Messaging
• SMS
• Meetings
• File sharing
Increase revenue by never 
missing business calls 
while keeping employees 
connected on the go, 
improving communications 
and productivity. 
59
```

#### Page 41 / 125 — `page-041.png`

```text
60
Thank you for 
rating our law firm 
“Best in State”!
Welcome to SherHooverCurtis
Rated best law firm i n 2023
How c an we help you?
5. Provide Your Customers the Best Experience.
Can your phone system do this? Add Contact Center for customer facing users
Route callers to the 
right people quickly 
or provide needed 
information
Receive texts and 
direct them to the 
right person or group 
automatically
Receive email and 
direct them to the 
right person or group 
automatically
Add webchat to 
your website and 
direct the chat to 
the right person 
or group 
automatically 
• Integrates with your 
CRM.
• Provide customers self-
service options
• Always route customers 
to the right person 
quickly
• Know how many calls you 
missed and fix it
• Use automated tools to 
coach and ensure high 
quality interactions
```

#### Page 42 / 125 — `page-042.png`

```text
61
6. Phone systems will never 
be able to add new 
capabilities that only exist in 
the Cloud
Only cloud-based 
communications gives you 
new technology such as AI to 
help you better run your 
business
```

#### Page 43 / 125 — `page-043.png`

```text
62
Get the Most Out of Your Meetings with AI
How it Works
• AI transcribes what was said and emails 
transcription to the host.
• Listens for phrases like “I will” and “next 
steps are” to create task summaries.
AI Meeting Transcription
For your Business
• Improves employee productivity.
• Helps attendees focus on discussion.
• Better documentation.
62
```

#### Page 44 / 125 — `page-044.png`

```text
63
Use AI to know what your 
customers are saying, spot 
customers trends and better 
coach employees
Recording
Transcription
Sentiment
AI-generated call summary
AI-generated call 
transcriptions, 
recordings and 
sentiment 
analysis
Get the Most Out of Your Customer Interactions with AI
```

#### Page 45 / 125 — `page-045.png`

```text
Office Phone System 
Ascend  Cloud Communications
1. It costs you more than you think
Move to the cloud and forget about buying 
hardware, phone lines, long distance, 
maintenance or support costs. 
2. It’s a depreciating asset 
Only gets better and better
3. It’s voice only
Communicate with voice, chat, video 
and SMS
4. It doesn’t allow employees to 
be productive outside the office
Connect employees at the office, home, 
mobile or wherever work is being done
5. It’s not designed for a great customer 
experience
Let your customers communicate with your 
business they way they want and get fast 
responses from your business
6. It won’t get the newest technology
Always getting the latest technology such 
as AI and analytics
```

#### Page 46 / 125 — `page-046.png`

```text
Save Money
✓Consolidate all communications tools lowering your costs.
✓No more phone lines or long-distance bills. 
✓No more maintenance/administration fees, 
replacement parts or software upgrades. Period.
✓Scale up and down as your business requires.
Ultimately, Ascend  reduces costs WHILE helping increase revenue
```

#### Page 47 / 125 — `page-047.png`

```text
Increase 
Revenue
✓Keep employees connected to each other and your customers 
even when they are away from the office. 
✓Let customers communicate with your business via text message 
(without giving out cell phone numbers) Increase employee 
satisfaction by creating new, flexible workplaces 
(home, office, mobile).
✓Utilize advanced analytics and AI to identify 
and remove inefficiencies. 
Ultimately, Ascend  reduces costs WHILE helping increase revenue
```

#### Page 48 / 125 — `page-048.png`

```text
Is Your Phone System Putting 
Your Business on Hold?
Datasheet
Cost Savings Calculators
(Web & Static Versions)
Marketing Resources
Find Opportunities with the Cloud Now Campaign
Emails
Social Posts
Ascend  version
```

#### Page 49 / 125 — `page-049.png`

```text
Training Resources
Learn More About Our New Sales Approach
Intermedia University Course
Pitch Example Video
Modernize your Business Communications
Pitch Deck
Connect with your Intermedia account rep to learn more
```

#### Page 50 / 125 — `page-050.png`

> **Note:** Minimal extractable text on this page (8 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-050.png` for layout, charts, or scans.

```text
Cloud Now
```

#### Page 51 / 125 — `page-051.png`

```text
Ascend  Archiving in 
Action
How MSPs and VARs are adding EVEN MORE value while 
differentiating themselves in the market
Elijah Navarro – Manager, Partner Enablement
```

#### Page 52 / 125 — `page-052.png`

```text
One-Stop Solution with 
One Point of Control
Unified Communications as a Service (UCaaS)
Business Cloud Applications (BCA)
SMS & COMPANY 
MESSAGING
BACKUP FOR 
MICROSOFT 365
EMAIL ENCRYPTION
AI EMAIL PROTECTION
EXCHANGE EMAIL
FAX
MICROSOFT 365
OUTLOOK BACKUP
PRESENCE 
INDICATOR
SIP 
TRUNKING
CHAT
VIDEO MEETINGS & ROOMS
Ascend  FOR/WITH 
TEAMS
TOLL FREE
SECURISYNC® 
BACKUP & COLLABORATION
CONTACT CENTER
ARCHIVING
PHONE
```

#### Page 53 / 125 — `page-053.png`

```text
1
1 IDC - Worldwide Unified Communications and Collaboration Forecast estimates
$76.7B
2022 Actual Total Market
UC Market
Underpenetrated Global Opportunity
Business telephony users globally2
~450M
Cloud-based business 
telephony users3
UCaaS 
Users2
25M
126M
2 Based on Gartner estimates
3 Cloud-based telephony is defined by source (Gartner) as enterprise-grade telephony that is 
owned, delivered, and managed remotely by a third-party provider. The infrastructure is shared, 
multitenant, or virtualized, and is consumed in a one-to-many model
$147B
2027 Total Market (est.)
Massive (and Growing) Market Opportunity
1
1
```

#### Page 54 / 125 — `page-054.png`

```text
How Do You Continue To Add Value 
And Differentiate Your Business 
From The Competition?
```

#### Page 55 / 125 — `page-055.png`

```text
All electronic communications 
stored in near-native format 
Platform allows for contextual 
searches across all data types
Preserves, protects, retrieves 
critical business communication data 
Voice + Chat + SMS +Video Meetings
What is Ascend  Archiving?
Encryption in transit and at rest 
User access and permissions 
SSO/SAML integration
Full audit logs
Instant access to all your data
Data Retention - 1, 3, 7, 
and 10-year plans
```

#### Page 56 / 125 — `page-056.png`

```text
In 2024 We Bring It All Together with 
Ascend  ARCHIVING across UC and CC Platform
```

#### Page 57 / 125 — `page-057.png`

```text
Archiving Roadmap
Innovation for Success
Other   
Channels
Email and Teams 
Archiving
Q2/ H2 2024
Email
MSFT 
Teams
ALL your communication channels, in ONE platform
Video 
Archiving
Video Conferencing 
Archiving
LIVE
30-Days Inclusive 
Archiving
Access the last 30-Days of 
UC communications 
continuously
LIVE
30-Day Inclusive 
Rolling Retention
Compliance 
Module
Compliance 
Module
Supervision & 
Monitoring, Legal Case 
Management
LIVE
Contact Center 
Archiving
CC Interactions 
preservation, inclusive 
of all channels
17th Apr 2024
Archiving End-
User Access
Simplify end-user access 
from Ascend  interface - 
Personal Archiving
Q3 2024
Archive Access 
from Ascend  UI
```

#### Page 58 / 125 — `page-058.png`

> **Note:** Minimal extractable text on this page (23 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-058.png` for layout, charts, or scans.

```text
Ascend  Archiving Use Cases
```

#### Page 59 / 125 — `page-059.png`

```text
Who Would Use Ascend  Archiving?
Healthcare
Financial Services
Independent Financial Advisor 
Registered with the Securities & Exchange 
Commission (SEC), the firm must abide by 
the Investment Advisors Act of 1940.
Investment advisors must maintain records 
related to all interactions with clients in a 
non-rewritable, non-erasable format.
Requirements
SEC, FINRA, MiFID II (EU), 7 Year Retention
Legal
Local Law Firm
Established law firm providing professional 
and supportive legal advice to private and 
commercial clients.
The firm must retain communication data 
for internal compliance requirements, and 
the purpose of knowledge management.
Requirements
ABA, State Bars, 5-10 Year Retention
Regulated Industries
Medical Care Facility
The Center must address high agent 
turnover and comply with HIPAA industry 
regulations.
Managers must efficiently train new agents 
in best practices and preserve interactions 
against inappropriate data loss.
Requirements
HIPAA, CMS (Medicare), 5-10 Year Retention
```

#### Page 60 / 125 — `page-060.png`

```text
Why Businesses Need the Compliance Module
Archiving Add-On Module – Business Drivers
Spot violations and 
risks faster
Monitor communication records to 
help stay compliant with 
regulatory requirements.
Supervision to mitigate risk
• Build supervision workflows 
• Custom lexicons and policies.
Streamline and automate processes
• Create policies and automatically route policy hits to 
• the right people. 
Financial Services
Insurance
Large Companies
Streamline your case 
management process
Filter large communication data 
sets quickly down to a 
manageable size. 
Respond to litigation and regulatory requests
• Rapidly prioritize, analyse, and assess communication. 
• Preserved in industry-recognized formats.
Most Companies
Investigations
GDPR
Litigations
HR
Early Case Assessment
$3.50/
 User/ Month (MSRP)
```

#### Page 61 / 125 — `page-061.png`

```text
Who Would Use Ascend  Archiving?
Non-Regulated Industries
Logistics and Transportation
Auto Dealership
Order Confirmation
Verify orders based on messages and 
verbal interactions 
Ensure you have the correct summary; 
re-listen to call records and review 
messages.
Resolve Disputes
A dispute has arisen over whether a 
payment-plan disclaimer was conveyed 
to a customer
Recordings provide accurate account of 
conversations. Facilitate accurate 
resolution.
Inside Sales
Sales Activity & Engagement
Managers can review sales agent calls 
for correct selling practices
Provide targeted feedback to employees 
and 
improve 
overall 
team 
target 
achievements.
Productivity Should Have
3 Year Retention
Productivity Should Have
3 Year Retention
Productivity Should Have
3 Year Retention
Likely to become 
regulated by FINRA in 2024
```

#### Page 62 / 125 — `page-062.png`

```text
What Can Happen Without Ascend  Archiving?
CHALLENGE
200+ Employee Construction Developer in Tri State Area - NY/NJ
Responsible for many of the buildings in the NYC skyline
Ex-Employee who was 
terminated 6 months prior is 
suing the company 
Claims then-foreman made 
promises for future work and 
compensation via personal sms
Need to verify conversation 
details between employee and 
then-foreman; no longer employed
Need to present evidence in 
court to avoid settlement costs
RESULTS
CONSTRUCTION
Ascend  SOLUTIONS
Avoid unnecessary settlement costs 
and legal fees
All interactions searchable by 
keyword, users and interaction type
Able to access exact SMS 
conversation to verify details 
asserted in lawsuit
Able to show every other relevant 
conversation related to that specific 
topic in  the courtroom
```

#### Page 63 / 125 — `page-063.png`

```text
Archiving Discovery Questions
Opening the Prospect for Their Archiving Needs
All Businesses Should Have
Improve Sales 
Performance and 
Customer Experience
Better Knowledge 
Transfer
Better Support for 
eDiscovery, 
Legal Requests
Financial Services/ Healthcare/ Legal/ Energy/ Pharma
Have you ever had the 
need to search/ review 
your communication data? 
How do you search and 
retrieve communication 
today?
How often are you faced with eDiscovery, 
investigation or litigation requests?
How long does it take 
to search your 
communications?
Some Businesses ‘Must Have’
If you are faced with a legal request, how long 
would it take to collect the information? Do 
you have the tools & resources in place?
How do you deal with continuation once an 
employee leaves an organization?
Do you currently leverage existing company 
communication knowledge? Do you see any 
value in this data?
How efficiently can you access customer/ sales 
calls? Do you have holistic view over all 
customer interactions (including any SMS & 
chat)?
Have you ever had to deal with customer or 
internal disputes?
How would you rate your ability 
to adhere to compliance and 
governance obligations for 
existing information?
Is your communication securely 
backed up? Do you have ‘access 
controls’ and ‘granular 
permissions’ in place? 
How long do you need to retain 
communication data? Are there 
any specific storage 
requirements (e.g. WORM)?
How many communication and 
collaboration platforms do you 
have in your organization? Do you 
have to preserve and monitor all? 
Do you have any risk concerns 
over your company's 
communications? Data leakage 
risk/ IP Loss? 
How effectively do you, search, 
retrieve, access and export the 
communication data today? 
Record-
keeping
Monitoring
 & Audits
Mitigate 
Risk
General 
Questions:
```

#### Page 64 / 125 — `page-064.png`

```text
Sales Scoping Question’s
•
Do you need to retain communication data? Can it help your day-to-day operations?
This question will enable us to open up and understand which options and additional module sets would be suitable for the 
prospect/ client. E.g. Compliance teams may require the Compliance module to help with its processes.
•
Retention period?  
Understand client's retention requirements. 
•
Number of Ascend  / Ascend  Users?  
This will help you understand the size of the deal and therefore associated pricing.
•
Storage type? (Read-Only & WORM)
Does the client require a particular standard for storage? E.g. WORM for immutable storage for regulatory purposes?
•
Data residency? Where would the client like to hold their data?  
Understand which location clients would like their data to be held. Ascend  Archiving follows GCP (Google Cloud Platform) 
locations, including the US, Canada, UK, Europe, and APAC.
```

#### Page 65 / 125 — `page-065.png`

```text
Why Should You Care About Ascend  Archiving?
Archiving Truly Helps You To Differentiate Your UC Offering
Increases Value for 
New and Existing 
Customers
Sticky add-on service for new 
Ascend  customers and existing 
base to help drive more business 
Integrated into Ascend  partner 
portal to make it easy for you to 
order, provision, manage and 
support 
Easy to Sell and 
Support
Expands your 
Market 
Opportunities
Addresses compliance 
requirements for healthcare, 
financial services, legal industry 
segments and provides important 
protection for any business
Automatically 
Preserves Ascend  
Communications
Interactions captured without 
requiring any user or administrative 
action. Seamlessly integrates with 
Ascend  and easy to set up.
Powerful contextual item-level 
search. Supports unified view of 
users across different channels. 
Makes It Fast and 
Easy to Find What 
You Need
Addresses Compliance 
and Other Critical 
Business Needs
Enforced retention policies for 
compliant and secure archiving. 
Supports internal governance, 
eDiscovery and knowledge 
transfer.
For Partners
Expand your Ascend  business 
opportunities 
For Customers
Protect your business
```

#### Page 66 / 125 — `page-066.png`

> **Note:** Minimal extractable text on this page (16 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-066.png` for layout, charts, or scans.

```text
Let’s Talk Pricing
```

#### Page 67 / 125 — `page-067.png`

```text
30-Days Rolling Archiving Retention
Historical access to your company’s last 
30 days of Ascend  calls, video 
meetings, chats and SMS. 
WHY WOULD YOU WANT TO USE IT?
Archiving addresses the following requirements;
Productivity: Dispute resolutions, 
training and coaching, and knowledge 
management.
Compliance: Audits and comply with 
industry & state/ local regulatory 
requirements.
Legal: Litigation, eDiscovery support, 
and investigations. 
For longer retention periods; upgrade to one of our 1 to 10-year plans.
Included with any Ascend  license
FREE ARCHIVING INCLUDED 
WITH ANY Ascend  LICENSE
```

#### Page 68 / 125 — `page-068.png`

```text
Innovation for Success
Archiving Roadmap
Video 
Archiving
Video Conferencing 
Archiving
LIVE
Archiving End-
User Access
Simplify end-user access 
from Ascend  interface - 
Personal Archiving
Q3 2024
Compliance 
Module
30-Days Inclusive 
Archiving
Access the last 30-Days of 
UC communications 
continuously
LIVE
Other   
Channels
Email and Teams 
Archiving
Q2/ H2 2024
Contact Center 
Archiving
CC Interactions 
preservation, inclusive 
of all channels
17th Apr 2024
Compliance 
Module
Supervision & 
Monitoring, Legal Case 
Management
LIVE
30-Day Inclusive 
Rolling Retention
Archive Access 
from Ascend  UI
Email
MSFT 
Teams
ALL your communication channels, in ONE platform
```

#### Page 69 / 125 — `page-069.png`

```text
Archiving Pricing & Packaging
Voice, Chat, SMS Archiving – Subscription Options
Packages
Use case
MSRP 
(per user license/ month)
Notes
1 Year Retention
Productivity
$3.60
Choose a rolling retention period of 3, 6 or 12 
months (the archive will contain at most 1 years’ 
worth of historical data).
3 Years Retention
Productivity
$5.00
Choose a rolling retention period of 2, or 3 years.
7 Years Retention
Regulatory
$8.50
Choose a rolling retention period of 4, 5, 6, or 7 
years, with optional tamper-proof storage 
(designed to meet regulatory requirements).
10 Years Retention
Regulatory
$10.00
Choose a rolling retention period of either 8, 9, or 
10 years, with optional tamper-proof storage 
(designed to meet regulatory requirements).
Notes:
1.
$/ User License/ Month 
Pricing is driven by retention period 
tiers and is presented as cost per 
license per month. 
2.
‘All or Nothing’ Licensing
Archiving licenses must be equal to 
the number of Ascend  licenses. No 
‘subset’ selection is available yet. 
If a company has 10 Ascend  user licenses, 
the client requires 10 Ascend  Archiving 
licenses. 
3.
Unlimited Storage*
A generous fair usage, for the rare/ 
unlikely event an account exceeds it.
4.
Custom Retention Options
Retention is not limited to only the 
displayed SKUs.
 
Supported Platforms The archive supports the following Ascend / Ascend  plans:
Essentials
“For Teams”
Pro
“With Teams”
Enterprise
Basic (no call recordings are available, so only chat and call logs are 
archived)
```

#### Page 70 / 125 — `page-070.png`

```text
Pricing Example 1 – Logistics
Logistics company, A-to-B Logistics 
requires easy access to their phone calls 
and SMS as they have had incidents of 
customer disputes in the past and want to 
ensure they have a record of all 
communications.
They have requested to retain the data for 
3 years and have 45 Ascend  users
- Retention Period: 3 years
- # Users: 45
- Channels: Ascend  Voice and SMS
Quoting (End-User price/ MSRP):
SKU: 3 Years Retention @ $5.00/ license user/ month
Users: 45
Calculation: 
SKU
Price
Volume
Total
Ascend  Pro Licenses
$27.99
45 users
$1,259.55
3 Years Retention – 
Ascend  Archiving
$5.00
45 users
$225.00
Total
$1,484.55
A-To-B
LOGISTICS
```

#### Page 71 / 125 — `page-071.png`

```text
Pricing Example 2 – Financial Services
Financial Services company, InvestYou 
require archiving of all their 
communication data (phone calls, SMS and 
chat) as part of their regulatory 
requirements.
They have requested to retain the data for 
5 years and have 20 Ascend  users. Also, 
WORM storage is required as part of the 
SEC requirements.
- Retention Period: 5 years
- # Users: 20
- Channels: Ascend  Voice, SMS & Chat
Quoting (End-User price/ MSRP):
SKU: 7 Years Retention @ $8.50/ license user/ month
Users: 20
Calculation: 
InvestYou
Money Management
SKU
Price
Volume
Total
Ascend  Pro Licenses
$27.99
20 users
$559.80
7 Years Retention– 
Ascend  Archiving
$8.50
20 users
$170.00
Total
$729.90
```

#### Page 72 / 125 — `page-072.png`

```text
Pricing FAQ’s
•
Can a customer upgrade/downgrade plans? Yes, in Control Panel.
•
Can a customer capture data & pay for only a subset of their users? No – but speak to us.
•
If a user leaves (User A), and is replaced by another user (User B); will you still retain user A’s data? 
Yes, all users’ (old and new) communications will still be stored in the archive
•
Can a customer elect to not capture SMS/Chat/Voice? Yes – support ticket.
•
Will Contact Center / Email (when integrated later in 2024) be included in the price? No – these services 
will be an additional cost.
•
What data residency options are available? USA, Canada, UK – in-region data centers.
•
Is WORM (tamper-proof storage) an additional cost? No – but needs support ticket to enable.
```

#### Page 73 / 125 — `page-073.png`

> **Note:** Minimal extractable text on this page (23 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-073.png` for layout, charts, or scans.

```text
Ascend  Archiving in Action
```

#### Page 74 / 125 — `page-074.png`

```text
Identifying Prospects and 
Approaching Customers
```

#### Page 75 / 125 — `page-075.png`

> **Note:** Minimal extractable text on this page (13 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-075.png` for layout, charts, or scans.

```text
What is Ascend ?
```

#### Page 76 / 125 — `page-076.png`

> **Note:** Minimal extractable text on this page (0 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-076.png` for layout, charts, or scans.

*[No text extracted — likely image-only or empty page]*

#### Page 77 / 125 — `page-077.png`

> **Note:** Minimal extractable text on this page (18 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-077.png` for layout, charts, or scans.

```text
Quick Pitch Exercise
```

#### Page 78 / 125 — `page-078.png`

```text
Take 1:
________________
________________
________________
________________
________________
________________
________________
________________
Ascend  is… 
Take 2:
________________
________________
________________
________________
________________
________________
________________
________________
```

#### Page 79 / 125 — `page-079.png`

```text
Ascend 
is the Business Communications Cloud
that helps employees collaborate with each other 
and connect with customers
```

#### Page 80 / 125 — `page-080.png`

```text
100
Ascend  is… 
Important elements to consider:
1.
Not just a phone/ VoIP system            
•
Business Communications Cloud
•
5-in 1 Business Communications Platform
2.
Helps employees collaborate better
3.
Helps connect you with your customers
```

#### Page 81 / 125 — `page-081.png`

```text
Targeting Verticals - Financial
101
•
Insurance
•
Wealth Management
•
Lenders
•
Credit Unions
•
Investment Firms
•
Credit Services
•
Claims
•
Mortgage
•
Client Services
•
Retail Sales
•
Billing & Enrollment
•
Underwriting
•
Licensing
•
Benefits Processing
•
Application Processing
•
Dealer Services
•
Scheduling
Financial Segments
Departments to Target
```

#### Page 82 / 125 — `page-082.png`

```text
Targeting Verticals - Healthcare
102
•
Pharmaceuticals
•
Private Practices
•
Dental
•
Hospital
•
Clinical Care
•
Nursing
•
County/State Provided Health Care 
•
Hospice
•
Scheduling!
•
Ambulatory
•
X”ology” (Radiology, General 
Surgery, Maternity, Pediatrics
•
Dentistry
•
Pharmacy
•
Patient Services
•
Medical Records
•
HR
•
Military Affairs
•
Patient Relations
•
Nursing
Healthcare Segments
Departments to Target
```

#### Page 83 / 125 — `page-083.png`

```text
Targeting Verticals – Services Based
103
•
Logistics
•
Auto/Truck Dealerships
•
HVAC Service Repair
•
Manufacturing Product Support
•
Facilities Management
•
Travel/Tourism
•
IT Service
•
Much more.. 
•
Quoting
•
Repair
•
Returns
•
Technical Help Desk
•
Dealer Support
•
Driver Support
•
IT Help Desk
•
Scheduling
•
Outbound Sales
•
Inbound Sales
•
Parts 
•
Warranty
Services Segments
Departments to Target
```

#### Page 84 / 125 — `page-084.png`

```text
Targeting Verticals - Government
104
•
City/County/State 
•
Colleges/Universities
•
K-12 School Boards, 
•
Various Boards & Commissions
•
“Citizen Services”, Tax, Call Before You Dig
•
Scheduling, Enrollment, Food Inspection
•
Housing, Safety, Construction, 
•
Arts, Tourism
•
Trade, Research, Inspector, Animal Control
•
Parks, Public Defender, Child Support, 
•
Family Services, Consumer & Business Affairs
•
Internal Services, Mental Health, Veteran Affairs
•
Public Health, Public Library, County Clerk
•
Sheriff, Treasurer/Tax
•
Public Health, Health Service
Government Segments
Departments to Target
```

#### Page 85 / 125 — `page-085.png`

```text
External
Customer
Experience
Internal
Employee
Productivity
COMMUNICATION & COLLABORATION
Your Employees VS Your Customers
```

#### Page 86 / 125 — `page-086.png`

```text
Discovering the Needs of Internal and External Audiences
EMPLOYEE
PRODUCTIVITY
• Quick Access to assistance
• Choice to engage however, 
whenever you want
• Personalized Experience
• Convenience across interactions
• Great customer service
CUSTOMER 
EXPERIENCE
• Flexibility to work from wherever
• Choice of communications channels
• Efficiency across other apps
• Community from being connected
• Reliability that it always works
• Security that conversations remain private
```

#### Page 87 / 125 — `page-087.png`

> **Note:** Minimal extractable text on this page (12 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-087.png` for layout, charts, or scans.

```text
CONFIDENTIAL
```

#### Page 88 / 125 — `page-088.png`

```text
Ascend = 5 Communications Tools in 1
108
VOICE
CUSTOMER 
EXPERIENCE 
TEAM CHAT 
AND SMS
I N T E G R AT E D  U S E R  E X P E R I E N C E
FILE 
COLLABORATION
VIDEO 
CONFERENCING 
IN TEG RATIO N
```

#### Page 89 / 125 — `page-089.png`

```text
VOICE
CUSTOMER 
EXPERIENCE 
TEAM CHAT 
AND SMS
I N T E G R AT E D  U S E R  E X P E R I E N C E
FILE 
COLLABORATION
VIDEO 
CONFERENCING 
$15 -$40
$10 - $20
$10 - $20
$50 - $200
$0 - $10
Ascend = 5 Communications Tools in 1
```

#### Page 90 / 125 — `page-090.png`

```text
Provider
Pricing
Trial
UCaaS Features
Integrations
More Info
Zoom
From $25/user per 
month to $30+/user 
per month
Zoom’s Basic 
plan is free 
(forever)
Unlimited calling, ACD call queueing, Configurable 
call blocking, Video calls with up to 1,000+ 
attendees, Live and recording transcription
Salesforce, Slack, HubSpot, Hive, and 
1,000 more
Zoom Reviews
Nextiva
From $19.95/user per 
month to $27.95/user 
per month and above
30-day free trial
Unlimited voice & video calling, Voicemail, Toll-free 
numbers, Unlimited internet fax, Multi-level auto 
attendant
Outlook, Google Contacts, Salesforce, 
HubSpot, Zendesk, Microsoft Teams, 
Oracle Sales Cloud, and ServiceNow
Nextiva 
Reviews
GoTo 
Connect
From $24/user per 
month to $29/user per 
month
14-day free
Unlimited auto attendants, Automated routing, 
Virtual voicemail, Softphone app, Find-me follow-
me
Salesforce, Slack, HubSpot, Zoho, 
Okta, ServiceNow, Zapier, Zendesk, 
Office 365, and more
GoTo Connect 
Reviews
RingCentral
From $20/user per 
month to $35/user per 
month
14-day free trial
Unlimited number of users, Unlimited US/Canada 
calls, Up to 10,000 toll-free minutes per month, 
Unlimited business SMS text messages, Team 
messaging with document sharing
Office 365, Google Workspace, Slack, 
Salesforce, Zendesk, and more
RingCentral 
Reviews
Dialpad
From $25/user per 
month to $75/user per 
month
14-day free trial
Unlimited calling, Unlimited SMS & MMS, Call 
controls (call forwarding, transfer, hold, mute), 
Custom voicemail greeting, Voicemail transcription
Google Workspace, Office 365, 
Salesforce, HubSpot, Miro, Slack, Okta, 
and OneLogin
Dialpad 
Reviews
8×8
From $24/user per 
month to $140/user 
per month
30-day free trial
Voice, video and messaging in one app, Unlimited 
calling in the US and Canada, Auto-attendant, 
Intelligent call routing, Music on hold & voice mail
Microsoft Teams, Google Workspace, 
Salesforce, Freshdesk, Zendesk, Zoho, 
HubSpot, Slack, Skype, ServiceDesk, 
Okta, Flowdeck, and more
8×8 Reviews
Vonage
From $19.99/month 
per line to 
$34.99/month per line
14-day free trial
Find me, follow me, Call flip, hold, park, Voicemail 
to email, Online fax, Virtual and visual voicemail
Google Workspace, Office 365, 
Microsoft Teams, Microsoft Dynamics, 
HubSpot, Workplace, Slack, Salesforce, 
SugarCRM, ConnectWise, Clio, 
NetSuite, JobDiva, and more
Vonage 
Reviews
Mitel
From $20.99/user per 
month to $38.49/user 
per month
N/A
Unlimited monthly minutes, Up to 100 audio and 
video conference participants, Video conference 
screen sharing, Softphone app, Call recording
Microsoft Teams, Outlook, Salesforce, 
GSuite, NetSuite, Chrome Browser, and 
more
Mitel Reviews
```

#### Page 91 / 125 — `page-091.png`

> **Note:** Minimal extractable text on this page (32 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-091.png` for layout, charts, or scans.

```text
Positioning the Customer Experience
```

#### Page 92 / 125 — `page-092.png`

```text
What’s the first rule about selling 
contact center?
```

#### Page 93 / 125 — `page-093.png`

```text
113
How Would You Describe a Reese’s Peanut Butter Cup
Ingredients: 
•
Milk Chocolate [Sugar, Cocoa Butter, Chocolate, Non-Fat Milk, Milk Fat, 
Lactose, Lecithin (Soy), PGPR, Emulsifier]
•
Peanuts, Sugar
•
Dextrose
•
Partially Defatted Peanuts
•
Hydrogenated Vegetable Oil [Palm Kernel Oil, Soybean Oil], 
•
Contains 2% or Less of Corn Syrup
•
Contains 2% or Less of Salt
•
Contains 2% or Less of Palm Kernel Oil
•
Contains 2% or Less of Artificial Color 
(Yellow 5 Lake, Yellow 6 Lake, Red 40 Lake, Blue 1 Lake)
•
Contains 2% or Less of Confectioner's Glaze
•
Contains 2% or Less of Lecithin (Soy)
•
Contains 2% or Less of Modified Corn Starch,
•
Contains 2% or Less of TBHQ and Citric Acid To Maintain Freshness
•
Contains 2% or Less of Carnauba Wax
•
Contains 2% or Less of Vanillin
•
Contains 2% or Less of Artificial Flavor
```

#### Page 94 / 125 — `page-094.png`

> **Note:** Minimal extractable text on this page (21 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-094.png` for layout, charts, or scans.

```text
114
How They Describe It?
```

#### Page 95 / 125 — `page-095.png`

```text
115
How Would You Describe Ascend ? 
Ingredients: 
• Free Phone or Device: Poly VVX 450, Yealink T54W, 
Logitech C270 AND Blackwire C3210 Headset, Poly 
Sync 20 BT Speaker
• 5 concurrent endpoints
• Mobile and desktop app
• Unlimited calling
• Auto attendant
• Call Pickup
• Caller ID
• Call transfer, call hold, 3-way calling, music on 
hold
• Paging
• Call park/pickup
• Intercom
• SPAM call blocking/tagging
•
Paging
•
Call park/pickup
•
Intercom
•
SPAM call blocking/tagging
•
911 admin notification
•
Voicemail, voicemail transcription, call recording, 
receptionist most
•
Web fax
•
Presence detection
•
team messaging
•
business SMS
•
File backup, sync, and share, 
•
Exchange mailbox
•
Video conferencing, integrations, APIs, Analytics.
```

#### Page 96 / 125 — `page-096.png`

```text
116
Why?  Because
People don’t want to buy a quarter-inch 
drill…
They want a quarter-inch hole.
- Theodore Levitt, 1962
```

#### Page 97 / 125 — `page-097.png`

```text
So, Let’s Talk About End-Customers
You are a customer.  What defines a positive experience for you?
Benefit
Why It Matters
Quick Access to assistance
The customer feels prioritized & important
Choice to engage however, whenever you want
The customer feels in control
Personalized experience 
The customer feels known & welcomed
Convenience across interactions 
The experience is frictionless to get value
Great service quality 
The customer feels well-served
```

#### Page 98 / 125 — `page-098.png`

```text
118
Customer Experience - The New Battle Ground 
of companies plan to compete based 
on customer experience
89%
of business owners believe their companies 
deliver a superior customer experience...
80%
...less than 8% of customers agree
8%
IMPACT
SOURCE: Garter 2015:  https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/
SOURCE: Bain & Company : http://bain.com/bainweb/pdfs/cms/hotTopics/closingdeliverygap.pdf
```

#### Page 99 / 125 — `page-099.png`

```text
119
Customer Experience - The New Battle Ground 
82% 
of customers stopped 
doing business with a 
company after a bad 
experience
of companies plan to compete based 
on customer experience
89%
of business owners believe their companies 
deliver a superior customer experience...
80%
...less than 8% of customers agree
8%
IMPACT
SOURCE: Garter 2015:  https://blogs.gartner.com/jake-sorofman/gartner-surveys-confirm-customer-experience-new-battlefield/
SOURCE: Bain & Company : http://bain.com/bainweb/pdfs/cms/hotTopics/closingdeliverygap.pdf
```

#### Page 100 / 125 — `page-100.png`

> **Note:** Minimal extractable text on this page (27 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-100.png` for layout, charts, or scans.

```text
Quick Ways To Know Your Prospect
```

#### Page 101 / 125 — `page-101.png`

```text
121
121
#1 Visit Their Website
•
Get a sense of their customer 
experience
•
Look on their site for:
•
Toll-Free
•
Local Numbers
•
Email
•
Web Forms
•
Chat Buttons
•
Fax
•
The more of these you find, the more 
complex it is for the customer to 
manage.
“Contact Us” Page
“About Us” Page
•
Look for the person responsible for:
o Customer Success
o Customer Care
o Customer Support
o Client Services/Relations
•
Read Bio (if available) and pick out 
some words
```

#### Page 102 / 125 — `page-102.png`

```text
122
122
#1 Check Two Other Sites
LinkedIn
•
Use the information you got from 
the About Us page to look for 
areas of responsibility
•
Pick out more key words
Online Reviews
•
Google Reviews, App Store, Yelp
•
Get a sense of the customer service 
reviews – Are they good or bad?
•
See the types of compliments or 
complaints people are leaving
•
Have a way to link our features / 
benefits to solving those problems
```

#### Page 103 / 125 — `page-103.png`

```text
123
Once you find a potential deal, look for
• They have any of the following: Scheduling, Billing, Support, Online Sales, COVID19 
Hotline
• Customer Touch Points: Voice, Email, Website Chat, SMS Etc.
• Credit Card (PCI)/ HIPAA or other compliance requirements/ regulations 
• Lots of reviews – Good or Bad
• Company posts on Social Media Responding to Customers
• Open job posts for positions like: Customer Service Rep, Tech support, Dispatcher
• Call their toll-free support/service number do you hear: This call may be recorded …
```

#### Page 104 / 125 — `page-104.png`

```text
5 Question Qualifying Sequence
How do your customer reach you today? How do you reach your customers?
•
Toll-free, local number, email chat social, SMS, fax, web forms, apps.. What are they not using?
What person or team talks the most to your customers?
•
Who is responsible for care/sales/support? This is likely who you need to talk with.
What do they do (sales/support/billing)? Who calls who?
•
Are they able to work remotely, who manages the team and makes decisions?
How do you measure success? How valuable are your calls? What tools are you using currently?
•
Look at telephone, how calls are being tracked, reporting, recorded… also as about CRM’s or other systems
What are your customers saying about you? Is there someone at the company that is responsible 
for responding to negative reviews?
•
Tread lightly but this can shape our discussion with them and illuminate the market consensus around 
current CX.
```

#### Page 105 / 125 — `page-105.png`

```text
Ask These Questions to Drive Customer Experience Discussions
QUICK ACCESS
•
Do you know how many calls you miss a day? 
•
How long do customers wait on hold or how long to 
get to the right person?
CHOICE
•
Besides a phone call, how else do your customers 
reach you?
•
How are you doing customer outreach for reminders, 
promos, etc.?
PERSONALIZED
•
Can you distinguish between a new or return 
customer?
•
How long does it take employees to find out who the 
customer is? Do you know how the last interaction 
with them went?
CONVENIENCE 
•
What customer questions do you find yourself 
answering frequently?
•
What options do you give your customers to not wait 
on hold?
SERVICE 
QUALITY
•
How do you ensure your employees are saying and 
doing what they should?
•
How are you documenting customer interactions?
•
“Did you know that Intermedia Unite will help you 
provide  QUICK ACCESS/ CHOICE/ CONVINIENCE/ 
SERVICE QUALITY to your customers so the business 
can convert those calls into new revenue as quickly 
as possible… Satisfied long-term customers offset the 
cost of the Intermedia solution investment”
•
“Do you see value in offering your customers 
CONVENIENCE/ PERSONALIZATION so your they can 
choose how they prefer to resolve their inquiry to 
your business?.. so employees know how to talk to 
the person before they pickup the phone?”
1. ASK A QUESTION
Intermedia 
solution
2. FOLLOW UP WITH A SOLUTION
“Let me connect to the Intermedia experts who can tell 
you more what they can do for your business success.
Here is the link to the Intermedia page on my website 
where you can fill in the form and the Intermedia 
experts will share more information and help you to 
signup with Intermedia Unite.”
3. REFER TO INTERMEDIA
```

#### Page 106 / 125 — `page-106.png`

```text
FLEXIBILITY 
• Do you have remote employees either full or part time? 
How do they take/make calls remotely?
• What tools do you provide to keep them connected?
CHOICE
• Besides the phone, how do employees reach each other 
(e.g., chat)?
• How many different applications are you using to stay 
connected?
EFFICIENCY 
• How many different applications do employees use and how 
much time do employees waste jumping between them? 
• How do remote employees access applications?
COMMUNITY 
• How do you ensure your employees feel connected?
• Is providing a sense of community important within your 
business?
SECURITY & 
RELIABILITY 
• What would a day of downtime cost your business? What’s 
your backup plan if your phones were unavailable?
• How confident are you that only the right people have 
access to your files? 
Ask These Questions to Drive Internal Experience Discussions
1. ASK A QUESTION
Intermedia 
solution
2. FOLLOW UP WITH A SOLUTION
•
“Did you know that Intermedia Unite will give your 
workforce FLEXIBILITY/ CHOICE/ EFFICIENCY to 
collaborate more effectively in a way that each 
person prefers according to their own workstyle 
while saving the company time and money because 
everything is in one place”
•
“Will it be valuable to you to provide a more 
personalized, inclusive hybrid or remote work culture 
where each employee feels CONNECTED/ in a 
SECURE & RELIABLE work environment?
“Let me connect to the Intermedia experts who can tell 
you more what they can do for your business success.
Here is the link to the Intermedia page on my website 
where you can fill in the form and the Intermedia 
experts will share more information and help you to 
signup with Intermedia Unite.”
3. REFER TO INTERMEDIA
```

#### Page 107 / 125 — `page-107.png`

```text
DEEPER
5. What additional communication tools do you use, such as video/web conferencing, 
instant messaging, file sharing, or contact centers for your business?
6. What specific features or capabilities are you seeking in a new communication system?
7. How do you and your employees ensure data is backed up and secure?
8. How do your remote and mobile employees access company data?
QUESTIONS
4. When does your current communication service contract expire?
1.How many employees do you have, and where are they 
located?
2.How many employees work remotely or on the go, and what 
essential features are needed to stay connected with customers?
3.Do you have plans to expand, downsize, move, or open new 
offices? If so, what's the timeline?
```

#### Page 108 / 125 — `page-108.png`

```text
128
•
Given your current call system, do you feel like you’re 
delivering the best patient outcomes that you could? 
Why or why not? 
•
Can you easily tell the difference between a new and 
existing patient? 
•
How many no shows do you have each month?
•
How do you protect patient privacy when you interact 
with them over phone or otherwise?
•
Have you considered care and patient continuity in 
the event of a natural or other disaster? 
ADJUSTING YOUR DISCOVERY BY USE CASE
•
Given your current call system, do you feel like you’re 
delivering the best customer experience to current and 
prospective buyers?
•
What does turnover look like for your sales reps? How 
do you track their conversations to not lose business?
•
How hard is it to get authorization for services? How 
does your team remind customers of services?
•
How are you scheduling your services and 
appointments? Are you seeing an issue with broken 
appointments?
HEALTHCARE
AUTOMOTIVE
```

#### Page 109 / 125 — `page-109.png`

```text
129
•
How do you make sure your staff is maintaining 
regulatory compliance when talking to customers?
•
How are you currently advertising your other financial 
services when a customer calls?
•
How many of your calls are for common topics? (E.g. 
bank balance, payment due dates?)
ADJUSTING YOUR DISCOVERY BY USE CASE
•
What are your plans to support online sales?
•
How do you currently accept customer payments?
•
How do you provide an ability for contactless ordering 
and delivery?
•
How do you leverage your calls to push your current 
promotions?
FINANCE
RETAIL
```

#### Page 110 / 125 — `page-110.png`

```text
130
•
How do you communicate reminders to your students 
and parents? (Registration, exams, events?)
•
What is your process for qualifying prospective 
students?
•
How do you address support for your faculty if they 
run into technical issues?
•
What are common things your students ask for when 
they call you?
•
How do you currently provide hotlines for your 
students?
ADJUSTING YOUR DISCOVERY BY USE CASE
•
What’s the process for someone who wants to make a 
donation?
•
How do you keep your volunteers informed of upcoming 
opportunities to help?
•
What does outreach look like for prior donors?
•
What opportunities are you using to increase awareness 
of your services?
EDUCATION
NON-PROFIT
```

#### Page 111 / 125 — `page-111.png`

```text
131
•
What are the most common requests you get from 
callers?
•
How are you providing greater accessibility for those 
with disabilities?
•
What opportunities are you using to increase 
awareness of your services?
ADJUSTING YOUR DISCOVERY BY USE CASE
•
How do you currently accept customer payments?
•
How do you accurately track billable activity?
•
How are you scheduling your services and 
appointments? Are you seeing an issue with broken 
appointments?
•
What is your current process for handling seasonal 
peaks? (tax season for accountants, holidays).
GOVERNMENT
PRO SERVICES
```

#### Page 112 / 125 — `page-112.png`

```text
Conversation Starter Lanes 
Understand Your Customers Situation – Show Empathy and Relevant Product Positioning
Employee Well Being 
•
How are you managing your remote employees? 
•
How many of your employees are working remotely today? 
•
How are you giving them peace of mind around security while they’re on private home networks? 
•
What type of technology and tools have you provided to your employees to work remotely? 
•
How are you easing the transition to work from home? 
Customer Engagement 
•
How are you able to communicate with your current customers? 
o
What are the challenges of doing so? 
•
What platform are you using to regularly communicate to your customers? 
•
What form of unified communication are you using today? [Video conference, chat/sms, file share]
•
Do you know if your customers are trying to contact you on a regular basis, and is it working? 
•
What obstacles are your teams facing when working remote?
```

#### Page 113 / 125 — `page-113.png`

```text
Conversation Starter Lanes 
Security Challenges 
•
How are you currently managing your IT security? 
•
What would the impact of a device breach mean to the organization? 
•
Do you feel there is a security risk with remote working solutions? 
•
How do the remote employees access documentation they used to access 
when they worked onsite? 
•
How is that managed? 
Business Continuity 
•
Do you have a business continuity or disaster recovery plan? 
•
Is your staff equipped to work remotely? If not, what steps have you taken 
to ease the transition? 
•
How are you allowing your mission-critical systems to be managed & 
accessed remotely? 
•
Do you have the ability to pay bills and receive payments if your office 
shuts down? 
•
How does your current phones system re-route calls while you’re out of the 
office? 
•
How does your staff access your office resources reliably? 
Productivity & Efficiency 
•
How do you measure your employee’s efficiency and productivity as 
they are working remote? 
•
How do you access and share information with your employees at this 
time? 
•
Describe your current tools employees use while working remotely.
•
What ways have you looked to consolidate and streamline your 
current communication system to be more efficient? 
•
How do you plan to get the most from your current budget? 
•
What ways are you looking to re-allocate funds because of remote 
work and/or modify your workforce? 
•
How does your IT department address the need of remote working? 
•
What problems do you experience while managing a remote 
workforce?
```

#### Page 114 / 125 — `page-114.png`

```text
134
Stats Make It Real
TEXTING
CHAT
NOTIFICATIONS
• 90% of text messages are read in the first three minutes.
• Texting has a 45% response rate compared to 6% of emails.
• 75% of people won’t answer a call from an unknown number.
• Customers who use live chat, spend up to 60% more per purchase vs others.
• Live chat costs companies 15-33% less compared to phone support.
• Live chat is the number one service choice for shoppers between 18-49 years old.
• Healthcare providers lose $200 for each no show on average.
• 75% of millennials think that text is a helpful way to receive reminders.
```

#### Page 115 / 125 — `page-115.png`

> **Note:** Minimal extractable text on this page (12 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-115.png` for layout, charts, or scans.

```text
5 Minute Break
```

#### Page 116 / 125 — `page-116.png`

> **Note:** Minimal extractable text on this page (18 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-116.png` for layout, charts, or scans.

```text
Discovery Workshopp
```

#### Page 117 / 125 — `page-117.png`

```text
CONFIDENTIAL
Practice Scenario #1: SD Midship Credit Union
Business: SD Midship Credit Union
Industry: Banking/Finance
Contact: The office manager came across an online ad and read your website. He is not technically proficient 
and is conducting research on options for his business.
Context: 
Looking for a call center solution to help its overworked 15 front-desk workers handle an increasing load of inbound 
calls from its members.
Prospect Pain Points:
•
The front-desk employees are stressed. 
•
Too many calls coming in, long wait times, leading to frustrated customers. 
•
Major concern that customer satisfaction ratings seem to be starting to slip.
•
Adding new staff may pose challenges as office space is maxed out.
•
The executive management team likes their phones and is wary of introducing any additional risk into business 
operations.
Current Solution:
Old Avaya-based on-premises system.
```

#### Page 118 / 125 — `page-118.png`

```text
CONFIDENTIAL
Practice Scenario #2: South Denver Dental Clinic
Business: South Denver Dental Clinic
Industry: Dental/Healthcare
Contact: An IT manager at a 25-employee Colorado-based dental practice
Context:
IT Manager, with very little knowledge of phones systems, is conducting a review of suppliers for a new phone system 
to support the dental office. It’s down to Intermedia and RingCentral. Three receptionists at the front desk juggle to 
check-in patients while the phone seems to ring off the hook. Often their practice is to pick up and place the caller 
on hold until they can get back to them. You want to introduce Contact Center, but you also don’t want to lose the 
Ascend  deal with too many complications. Dentists (the owners) don’t want to deal with any added costs or 
complexity.
Prospect Pain Points:
•
Older phone system offers limited functionality and low voice quality.
•
Manual complexity and cost of administering the phone system when new employees arrive, or others leave.
•
Stressed out front-desk employees who know that patient-service is suffering. 
•
There is also a high percentage of patients who show up late or miss appointments altogether. 
Current Solution:
On prem phone system installed in 1986.
```

#### Page 119 / 125 — `page-119.png`

```text
CONFIDENTIAL
Practice Scenario #3: Jacob & Marley Real Estate Agency
Business: Jacob & Marley Real Estate
Industry: Real Estate/Professional Services
Contact: A seasoned IT manager for one of Iowa’s top real estate agencies with 125 employees
Context:
Upgrading their company’s on-premises phone system and opening two new offices with many agents on the road.
2-3 business stakeholders will join the RFP and review process. Looking for functionality that will give their real 
estate firm the competitive edge when it comes to customer service.
Prospect Pain Points:
•
Tipping point with cost and complexity of on-prem phone system with company growth.
•
IT frustration to administer the expensive and complex solution with new buildings and an increasingly mobile 
workforce.
•
Customers are adopting new changes such as chat on the website, SMS and phone.
•
Agents in the field don’t like having to use their personal phones to conduct business.
Current Solution:
Toshiba on premise phone system with no good solution to upgrade.
```

#### Page 120 / 125 — `page-120.png`

```text
CONFIDENTIAL
Practice Scenario #4: Stairway to Haggis Pub
Business: Stairway to Haggis Pub
Industry: Restaurant
Contact: The owner (not IT professional but technically savvy) of a popular Scottish Pub on Manhattan Beach in 
Los Angeles is upgrading his customer experience
Context:
Word of mouth is important in his business, and he wants to offer an efficient experience along with great food, drink, and 
atmosphere. Reservations can come in via phone call, website, or email. With long wait times on Friday and Saturday nights, 
he wants to ask patrons to provide their cell number to receive a text when the next table is ready. He intends to look at a 
couple of contenders, not only to find the right solution but also to learn about what functionality is available.
Prospect Pain Points:
•
An increasingly sophisticated audience and many other dining establishments upgrading infrastructure.
•
A hard-working crew who needs to handle inbound calls, texts, and emails, while welcoming patrons at the front door.
•
No insight into how many calls come in, how long patrons are waiting on hold, or how many abandon the call altogether.
•
The restaurant business runs on tight margins. There is no desire for an excessively high-cost solution.
Current Solution:
A basic phone solution from Comcast Business
```

#### Page 121 / 125 — `page-121.png`

```text
CONFIDENTIAL
Practice Scenario #5: Fircrest East Automotive
Business: Fircrest East Automotive
Industry: Automotive
Contact: The service manager at Fircrest East Automotive who manages 12 service reps
Context: 
The service manager for a large Automotive dealer with a high volume of customers to process. Tired of the nickel 
and diming he gets from RingCentral and is ready for a fair deal. Service manager is working with IT consultant to 
help answer technical questions and admin the new system.
Prospect Pain Points:
•
Getting nickeled and dimed with every conversation.
•
A high volume of inbound inquiries to process—and to do so with the highest level of customer service.  
•
Corporate independently surveys customers from each of the franchises and applies ratings that can affect 
business.  
•
A mobile workforce. Service professionals are either at the front service desk, on the showroom floor or out in 
the back lot where repairs are taking place.
•
The environment is dynamic, and customers want to be routed quickly to whomever is handling their account to 
find out about repairs, costs, and timing of pick-up.
Current Solution:
A cloud-based phone solution
```

#### Page 122 / 125 — `page-122.png`

```text
CONFIDENTIAL
Practice Scenario #6: Harley & Hutch Legal
Business: Harley & Hutch Legal
Industry: Legal
Contact: Office Manager
Context:
Two law offices are merging and want to consolidate their communications – one has Intermedia, the other has 8x8. 
The new law firm plans to launch a major campaign to drum up business and expects a high volume of inbound calls as 
a result. They aren’t interested in industry jargon.
Prospect Pain Points:
•
Personal injury is a competitive field. Inquiries come in day and night – callers are contacting the firm because they 
are in trouble and scared. They want immediate help.
•
The firm moves fast – associates are under pressure to find cases that are worthwhile for the firm to take on and 
then they are up against insurance companies, district attorneys, large corporations and others to win the case.  
Communication mostly takes place by phone.  
•
They expect to see a groundswell of inbound queries. They want those queries addressed because they want to 
grow aggressively. They also want to understand the ROI of their campaign.
Current Solution:
Two different solutions – Intermedia and 8x8
```

#### Page 123 / 125 — `page-123.png`

```text
Legal
Finance  
Healthcare
Government
K-12, College, Universities
Service Based (Car Dealerships, Logistics, HVAC, Contracting)
 
Growth Verticals
```

#### Page 124 / 125 — `page-124.png`

> **Note:** Minimal extractable text on this page (2 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-124.png` for layout, charts, or scans.

```text
Q
A
```

#### Page 125 / 125 — `page-125.png`

> **Note:** Minimal extractable text on this page (0 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Ascend Sales Kick Off_Master (1)/page-125.png` for layout, charts, or scans.

*[No text extracted — likely image-only or empty page]*


<a id="p-d078b0517099ffe6"></a>


### `Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets`

**Page count:** 24

#### Page 1 / 24 — `page-001.png`

```text
Selling Contact Center Workshop: 
Identifying CC Opportunities 
Within Your Existing Base
```

#### Page 2 / 24 — `page-002.png`

> **Note:** Minimal extractable text on this page (36 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-002.png` for layout, charts, or scans.

```text
What Is A Contact Center?
Group Discussion
```

#### Page 3 / 24 — `page-003.png`

```text
3
Start With Your Best 
Relationships!
o Safe spot to initiate conversations
o More open to a discussion and likely to 
give feedback
o More willing to have real conversations 
about their customer communications.
How To Get Started
```

#### Page 4 / 24 — `page-004.png`

```text
4
Look at your customer or 
prospect list and ask:
o Who are your current contacts? Are 
any of them directly responsible for 
customer care?
o Do your current contacts have a 
relationship with these people?
o Can they share with you their 
knowledge of what is important to 
“the business”?
o Can they broker an introduction to 
these people?
o Which executive is responsible for 
customer satisfaction?
o Who reports to that individual and 
what are their areas of responsibility?
Prospecting Tip: Get to the “Business” User
Jae Choi
Technical Decision Maker
Jim Barrett
Business User
Call Center Manager
Customer Care Manager
Customer Service Manager 
Customer Support Manager 
Sales Manager
Office Manager
Use your IT contact to get to the Business User aka
```

#### Page 5 / 24 — `page-005.png`

```text
5
Prospecting Tip: UC Customers & Premises PBX
o Have Avaya, Cisco, Mitel, “Big PBX”
o Might be fatigued with managing their own 
voice infrastructure
o Ask for end of financing date
o Ask for support/maintenance renewal date
UC Customers
o 50+ Employees
o 10% of employees are ACD users
Premises PBX
```

#### Page 6 / 24 — `page-006.png`

```text
6
Prospecting Tip: Ask For Their Toll-Free Bill
High Toll-Free Users
$500.00 (13,000 toll free minutes/month * $0.03)  = ~5 contact center agents
$750.00 (25,000 toll free minutes/month * $0.03) = ~10 contact center agents
$1,875.00 (62,500 toll free minutes/month * $0.03) = ~25 contact center agents
```

#### Page 7 / 24 — `page-007.png`

```text
7
Prospecting Tip: Ask For Their Phone Bill 
Big PRI/SIP Channels
o See if their PRI/SIP channels outnumber handsets
o It’s likely they’re using queues 
Example
o 50 handsets deployed at a location, but they only have 3 PRIs
o Each ACD user should have at least two channels provisioned
o 1 for the connected caller, 1 for the queued caller
In some cases, for every 100 handsets deployed, there are 10 ACD 
users somewhere for internal (help desk) or external customer care 
DID YOU 
KNOW?
```

#### Page 8 / 24 — `page-008.png`

```text
8
Prospecting Tip: Target AHG and Verticals
PBX Hunt Group Users
o Users may be ready to upgrade to a more advanced feature set. 
Industry Verticals
o Start with companies in industries with important or high value phone calls.
o Examples include:
o Healthcare
o Financial Services
o Professional Services (Legal, Real Estate, HVAC)
```

#### Page 9 / 24 — `page-009.png`

```text
Targeting Verticals - Financial
9
•
Insurance
•
Wealth Management
•
Lenders
•
Credit Unions
•
Investment Firms
•
Credit Services
•
Claims
•
Mortgage
•
Client Services
•
Retail Sales
•
Billing & Enrollment
•
Underwriting
•
Licensing
•
Benefits Processing
•
Application Processing
•
Dealer Services
•
Scheduling
Financial Segments
Departments to Target
```

#### Page 10 / 24 — `page-010.png`

```text
Targeting Verticals - Healthcare
10
•
Pharmaceuticals
•
Private Practices
•
Dental
•
Hospital
•
Clinical Care
•
Nursing
•
County/State Provided Health Care 
•
Hospice
•
Scheduling!
•
Ambulatory
•
X”ology” (Radiology, General 
Surgery, Maternity, Pediatrics
•
Dentistry
•
Pharmacy
•
Patient Services
•
Medical Records
•
HR
•
Military Affairs
•
Patient Relations
•
Nursing
Healthcare Segments
Departments to Target
```

#### Page 11 / 24 — `page-011.png`

```text
Targeting Verticals – Services Based
11
•
Logistics
•
Auto/Truck Dealerships
•
HVAC Service Repair
•
Manufacturing Product Support
•
Facilities Management
•
Travel/Tourism
•
IT Service
•
Much more.. 
•
Quoting
•
Repair
•
Returns
•
Technical Help Desk
•
Dealer Support
•
Driver Support
•
IT Help Desk
•
Scheduling
•
Outbound Sales
•
Inbound Sales
•
Parts 
•
Warranty
Services Segments
Departments to Target
```

#### Page 12 / 24 — `page-012.png`

```text
Targeting Verticals - Government
12
•
City/County/State 
•
Colleges/Universities
•
K-12 School Boards, 
•
Various Boards & Commissions
•
“Citizen Services”, Tax, Call Before You Dig
•
Scheduling, Enrollment, Food Inspection
•
Housing, Safety, Construction, 
•
Arts, Tourism
•
Trade, Research, Inspector, Animal Control
•
Parks, Public Defender, Child Support, 
•
Family Services, Consumer & Business Affairs
•
Internal Services, Mental Health, Veteran Affairs
•
Public Health, Public Library, County Clerk
•
Sheriff, Treasurer/Tax
•
Public Health, Health Service
Government Segments
Departments to Target
```

#### Page 13 / 24 — `page-013.png`

```text
Targeting People - Titles
13
• VP Customer Service
• Manager, Call Center
• Manager, Contact Center
• Customer Service Manager
• Operations Manager
• Dealer Operations
• Dealer Care
• Customer Success Director, VP, Manager
• Customer Relations Manager
• Patient Care Manager
• VP/Director/Manager Customer 
Experience
• Client Care Manager
• Service Manager
• VP of Service Operations
• Customer Delivery Manager
• Support Manager/Director/VP
• Regional Service Manager
• Help Desk Manager
• Service Desk Manager
• Facilities Manager
• Scheduling Manager
• Client Services Manager/VP/Director
• Sales Desk Manager
• Telesales Manager
• Technical Manager, Director, VP
• Global Customer Service 
Manager/Director/VP
• Customer Experience Manager
• Patient Services Coordinator
• Investor Relations
• Service Operations 
Manager/Director/VP
• Retail (Banking / Credit / Financial / 
Insurance) Service Manager
• Service Management
• Member Services Manager
• Member Care
• Ambassador Service Manager
• Advisor Support
• Customer Relations Manager
• Client Support Manager
• Claims Manager/Director/VP
• Contact/Call Center Operations 
Manager
```

#### Page 14 / 24 — `page-014.png`

```text
In every customer interaction – 
 you or your partner
 ask the following 5 Questions
```

#### Page 15 / 24 — `page-015.png`

> **Note:** Minimal extractable text on this page (22 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-015.png` for layout, charts, or scans.

```text
Question 1:
Find a target.
```

#### Page 16 / 24 — `page-016.png`

```text
1.
What person or team interacts the most to your 
customers?
Q1: Find a Target
```

#### Page 17 / 24 — `page-017.png`

> **Note:** Minimal extractable text on this page (20 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-017.png` for layout, charts, or scans.

```text
Sniff out the use-case.
```

#### Page 18 / 24 — `page-018.png`

```text
2a. What do they do? 
i.e. (sales, support, billing, or something else?)
  
2b. Who do they report to? Who leads that team? 
Q2: Sniff out the use-case (and decision maker)
```

#### Page 19 / 24 — `page-019.png`

> **Note:** Minimal extractable text on this page (21 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-019.png` for layout, charts, or scans.

```text
Understand the terrain.
```

#### Page 20 / 24 — `page-020.png`

```text
3a. What tools are they using today? 
3b. Who made that decision? 
Q3: Understand the terrain
```

#### Page 21 / 24 — `page-021.png`

> **Note:** Minimal extractable text on this page (21 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-021.png` for layout, charts, or scans.

```text
One step needs analysis.
```

#### Page 22 / 24 — `page-022.png`

```text
4. How do your customers currently reach you? 
Q4: One step needs analysis
```

#### Page 23 / 24 — `page-023.png`

> **Note:** Minimal extractable text on this page (33 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - CCaaS Sales Training - Tips Targets/page-023.png` for layout, charts, or scans.

```text
Dealers Choice: Build need or 
advance.
```

#### Page 24 / 24 — `page-024.png`

```text
5a. What are your customers saying about you?
5b. How do you know what kind of experience your 
customers are having? 
or
5c. Based on our chat, I think we can really help you - 
is tomorrow at 10 or Thur at 4 better for a call 
with the “business user” leading that team?
Q5: Dealer’s Choice: Build need or advance
```


<a id="p-04e84f4c4f09a750"></a>


### `Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch`

**Page count:** 55

#### Page 1 / 55 — `page-001.png`

```text
Setting For Success: 
Discovery Calls and  
Customizing Your 
Demo
Eoin “Owen” Bathe and Mitch 
“Mitch” Adams
Sr. Service Provider Channel Managers
Monday, April 13, 2026
```

#### Page 2 / 55 — `page-002.png`

```text
2
Discovery Call Structure:
1) Pre-Call
2) Why Are We Here(The problem)
3) The Customer Experience
4) The Agent Experience
5) The Management Experience
6) Technical Issues/Concerns
7) Who Will Be At The Demo
8) Anything Else? What Would You Like To See? 
30 to 60 Minutes
The Discovery Call
```

#### Page 3 / 55 — `page-003.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-003.png` for layout, charts, or scans.

```text
Pre-Call
Discovery
```

#### Page 4 / 55 — `page-004.png`

```text
4
The Discovery Call
Know the company and who you are speaking with
1. Visit their website; “Contact Us” page
o
Get a sense of the CX (customer experience)
o
Toll Free, Local Numbers, Email, Web Forms, Chat 
Button, Fax
o
The more of the above, the more complex to 
manage
2. Look for online reviews on them
o
Get a sense of the CX reviews – good or bad
o
See the types of compliments or complaints people 
are leaving
o
Have a way to link our features / benefits to solving 
those problems
3. Visit their “About Us” Page
o
Looking for the person responsible 
for “customer success” – Read Bio 
(if available) and pick out some 
words
4. Visit that person’s Linkedin Page (if they 
have one)
o
Looking for areas of responsibility 
– pick out more key words
o
Think of features that can assist 
in their responsibilities
```

#### Page 5 / 55 — `page-005.png`

> **Note:** Minimal extractable text on this page (19 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-005.png` for layout, charts, or scans.

```text
THE PROBLEM
Discovery
```

#### Page 6 / 55 — `page-006.png`

```text
6
•
Can you tell me of the event for the organization to start looking for a new system?
•
What happened?
•
What is driving your interest in exploring solutions currently?
The Discovery Call
We are looking to capture the compelling event and to qualify if the need is great enough for the prospect to 
trigger a change.
Changing contact center is not a trivial undertaking.
Possible answers:
New Management; End of Life PBX/Prem; New Parent; New Products; Growth/Shrinkage; Staffing Issues; Expiring 
Contacts; New Locations…
Why Are We Here?
```

#### Page 7 / 55 — `page-007.png`

> **Note:** Minimal extractable text on this page (19 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-007.png` for layout, charts, or scans.

```text
CUSTOMER EX
Discovery
```

#### Page 8 / 55 — `page-008.png`

```text
8
The Discovery Call
•
Who are your clients?
•
How can customers/patients/employees reach you today?
•
How many toll-free numbers do you have?
•
How many calls do you receive on a monthly basis?
•
What is my experience like as a customer calling in?
•
Are calls answered right away? Or is there a wait 
time?
•
Are clients complaining of any issues? 
•
Long wait times?
•
Abandoned calls?
•
Calls not reaching the right agents?
•
Calls going to voicemail?
•
What are the reasons for callers calling?
•
Are there any repetitive calls that could be addressed 
automatically? (Self Service)
•
Examples: Order status, making payments
•
Are all clients treated equally when they call-in or do they 
some receive priority?
•
Chat
•
Email
•
SMS
•
What is the value of a customer interaction?
•
What is the cost of a customer interaction?
•
Is there any data or reports you can share with me regarding 
customer interactions?
•
What can we do to make your customers life easier?
The Customer Experience
```

#### Page 9 / 55 — `page-009.png`

> **Note:** Minimal extractable text on this page (16 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-009.png` for layout, charts, or scans.

```text
AGENT EX
Discovery
```

#### Page 10 / 55 — `page-010.png`

```text
10
The Discovery Call
•
What applications am I using today to manage 
customer interactions?
•
Email, SMS, Chat, CRM, Billing?
•
What's my workflow? (open ended question on purpose)
•
How are your agents/staff grouped? 
•
By functional area? By geography? By 
product? By skillset?
•
As an agent do I make outbound calls?
•
What is the nature of the calls? What is the 
objective?
•
Do agents work from home, remote offices or head 
office?
•
How many at each location and at any one 
time?
•
Multiple shifts?
•
Are there any user actions that you feel can be 
automated?
•
How long does it take to onboard a new agent?
•
What can we do to make the agents life easier?
The Agent Experience
```

#### Page 11 / 55 — `page-011.png`

> **Note:** Minimal extractable text on this page (21 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-011.png` for layout, charts, or scans.

```text
MANAGEMENT EX
Discovery
```

#### Page 12 / 55 — `page-012.png`

```text
12
The Discovery Call
•
Do you have enough visibility into your contact center 
performance?
•
Historical information? Live information?
•
How do you evaluate your agents today?
•
Whisper, Monitor, Barge?
•
Evaluation templates?
•
Do you record your calls?
•
How/why are those recordings used?
•
What are the key reports and metrics you use?  
•
What reports and metrics do you feel you need?
•
What are the main management or administrative tasks 
that take the most amount of time?
•
Agent onboarding? Hiring? Data Collection? 
Coaching? Process measure & improvements?
•
How many supervisors/managers do you have and what 
are their main tasks or mandate?
•
How can we make the supervisors/managers life 
easier?
The Management Experience
```

#### Page 13 / 55 — `page-013.png`

> **Note:** Minimal extractable text on this page (20 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-013.png` for layout, charts, or scans.

```text
TECHNICAL EX
Discovery
```

#### Page 14 / 55 — `page-014.png`

```text
14
The Discovery Call
•
What issues or concerns do you have your current system?
•
What are the main functions your new system must have? 
•
Why?
•
What other systems/tools/applications involved in your customer journey or contact center? 
•
What help do you expect from your vendor?
•
What happens when you need to add a queue, delete a queue, get a custom report, integrate with your CRM/ERP?
•
Who does that? How is that experience?
•
How can we make IT life easier in serving the business for contact center?
Technical Issues
```

#### Page 15 / 55 — `page-015.png`

```text
15
The Discovery Call
•
Who will be at the demo?
•
What are their roles and what are their main concerns?
•
Will there be folks that need to see a demo that won't be able to attend?
•
Who are they and what are their concerns?
•
Are these the folks that make up the evaluation committee?
•
Do you know when the committee would like to short list the vendor candidates?
Who Will Be At The Demo
```

#### Page 16 / 55 — `page-016.png`

```text
16
The Discovery Call
•
Is there anything else that we have missed?
•
Is there anything you would like to see?
Anything Else
```

#### Page 17 / 55 — `page-017.png`

```text
17
The Discovery Call
•
Whatever they call their customers, use that term 
•
Patients, Members, Clients, Partners, Claimants, Consumer, Citizen, Constituents, Ambassadors….
•
If the Business User(s) are in attendance, focus on them
•
Need this time to “win the endorsement of the business user”
•
Keep IT related questions, security, network, end points, connectivity, etc…to another call
•
Take lots of notes and record the call
•
Always ask for the follow up meeting
•
Do your research! Visit their website, call their numbers, find out their jargon, “Contact Us”, “About Us”
DEMO TIPS
```

#### Page 18 / 55 — `page-018.png`

```text
Setting For Success: 
Customizing Your Demo
Eoin “Owen” Bathe
Sr. Service Provider Channel Manager
Monday, April 13, 2026
```

#### Page 19 / 55 — `page-019.png`

```text
19
Using what you’ve learned from the Discovery/Pre-Demo Form/Process, you can easily ‘customize’ your demo 
account.
Why do we do this? To help the customer ‘see themselves in their new home’ i.e. the couch goes here, the table 
would be there…
So, what do we do?
Update our:
•
Queues
•
Classifications
•
Activities
And have sample reports at the ready!
We’ll also talk about some easily name droppable clients to have at your disposal
Setting Your Demo Account Up For Success
```

#### Page 20 / 55 — `page-020.png`

```text
20
Standard Queue Names As a Catch-All:
• Support
• Sales
• Customer Service
• Finance
• Scheduling
Simplest Thing Renaming Queues
Standard Queue Names As a Catch-All:
• Support
• Sales
• Customer Service
• Finance
• Scheduling
```

#### Page 21 / 55 — `page-021.png`

```text
21
Finance:
•
CMLS
•
Credit Canada
•
Conexus
•
Jersey Shore CU
•
Federal Home Loan
•
Mid Penn Bank
Top Vertical Name Drops
Healthcare:
•
LA County Dept. Of Health Services
•
New York Presbyterian Queens
•
Mosaic Life Care
•
Atlantic Medical Imaging
•
Allied Smile & Dental
•
Integrity/Allied Pharmacy
•
Stago Diagnostica
```

#### Page 22 / 55 — `page-022.png`

```text
22
Public & Non-Profits:
•
VON
•
Crisis Center
•
Riverbay Housing Corporation, NY
•
United Way 211
•
Shelby County School District, San Francisco Unified 
School District, St. George County
Top Vertical Name Drops
Transport, Logistic & Supply Chain:
•
Transdev
•
Polaris Transport
•
Wheaton Van Lines
•
Carter (Direct Connect Logistics)
•
Priority Dispatch
•
Block Island Ferry
```

#### Page 23 / 55 — `page-023.png`

```text
23
Retail & Services
•
Service Experts (HVAC)
•
Crocs (Shoes)
•
Ghirardelli Chocolates
•
Nationwide Coin & Bullion
•
Sprinkles Cupcakes
•
New York Jets
Top Vertical Name Drops
```

#### Page 24 / 55 — `page-024.png`

```text
24
Contact Center Demo Sites
Automotive
Higher Ed
Finance
Healthcare
Real Estate
Legal
Local Gov
Non-Profit
Retail
Hospitality
Insurance
Utilities
Sports & 
Entertainment
K-12
https://go.serverdata.net/cc-demo-sites/
```

#### Page 25 / 55 — `page-025.png`

```text
25
Finance Queues, Activities, Skills & Outcomes
Common Queue Names
Common Activities
Common Skills
Common Classifications/Resolutions
Credit Cards
Additional Wrap Up
Customer Service
Brokers
Debit Cards
Retention
Recovery
Financial Institutions 
Loans
Admin
Retention
Creditor
Collections
Meeting
Outbound
Phone Screening
Insurance
Training
Team Leads
Wire Issues
Mortgages
Reporting
Customer Experience
Debit Issues
Multilingual Versions
Direct Call
Member Services
Credit Issues
```

#### Page 26 / 55 — `page-026.png`

```text
26
Healthcare Queues, Activities, Skills & Outcomes
Common Queue Names
Common Activities
Common Skills
Common Classifications/Resolutions
Healthcare
Patient Access
Faxing
Nursing
Healthcare
Dermatology
Assignment
Financial Assistance
Healthcare
Financial Assistance
Training
Billing Assistance
Healthcare
Nursing
Patient Call
RX Refill
Healthcare
Scheduling
Face to Face
X-Ology
Healthcare
Cardiology
Overtime
Patient Access
Healthcare
Multilingual Versions
Doctors Line
Scheduling
```

#### Page 27 / 55 — `page-027.png`

```text
27
Retail/Services Queues, Activities, Skills & Outcomes
Common Queue Names
Common Activities
Common Skills
Common Classifications/Resolutions
Retail & Services
Customer Service
Complaint Tracking
General Sales
Retail & Services
Retail
Entering Order
Sales Team Managers
Retail & Services
Delivery Issues
Social Media Checking
New Customers
Retail & Services
Webchat
Showroom customer/walk-in
Existing Customers
Retail & Services
Inside Sales
Billing
Customer Service
Retail & Services
Support
Working leads
Support
Retail & Services
After Hours
Warehouse/Parts Checking
Retail Customers/Store Support
```

#### Page 28 / 55 — `page-028.png`

> **Note:** Minimal extractable text on this page (29 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-028.png` for layout, charts, or scans.

```text
Pre-Demo 1 – Customer & System Info
```

#### Page 29 / 55 — `page-029.png`

> **Note:** Minimal extractable text on this page (25 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-029.png` for layout, charts, or scans.

```text
Pre-Demo 2 – Operational Info
```

#### Page 30 / 55 — `page-030.png`

> **Note:** Minimal extractable text on this page (25 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-030.png` for layout, charts, or scans.

```text
Pre-Demo 2 – Operational Info
```

#### Page 31 / 55 — `page-031.png`

> **Note:** Minimal extractable text on this page (21 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-031.png` for layout, charts, or scans.

```text
Pre-Demo 3 – The Who & What
```

#### Page 32 / 55 — `page-032.png`

```text
32
Workshop Action Item
Research your account and present:
•
Step1: Research your scenario/account (Lines of business, modes of communications, customer 
journey, potential contact center departments and ideal target contacts). 
•
Go on their website, check reviews, call their phone number.
•
Step 2: Based on what you have learned – sit down with your moderator (IT User). Ask 
questions.
•
Step 3 Present:
•
Your research findings
•
Summarize your value / pitch to the buying committee.
•
Demonstrate
```

#### Page 33 / 55 — `page-033.png`

```text
Goals & Objectives 
(Mapping outcomes to 
features/benefits)
```

#### Page 34 / 55 — `page-034.png`

```text
CCaaS Solution Outcomes – The WHY
Focus on your business objectives i.e. why do people care? We’re solving for 
pain, so understand why it hurts…
• Work from Anywhere!!!! 
• Reduce Costs – Spend less money/increase ROI
• Increase Revenue – Make more money (Humans are the most expensive 
part)
• Create/Increase Customer Loyalty/Experience
• Ensure Industry Regulation and Company Policy
• End of Life/Deprecation/Maintenance Agreements
• Agent Experience – Ease of use (Tying systems together)
```

#### Page 35 / 55 — `page-035.png`

```text
35
Work From Anywhere – The WHY
•
No loss of valuable data: 
With our reports/dashboards, regardless of where the agents are, you will 
maintain visibility. 
•
Can maintain excellent customer experience: 
With in-queue treatment, custom messaging, announcements, skills based 
routing of remote agents, your customer experience will remain steadfast 
and there will be no impact. Callers will not be aware your agents are 
working remotely
•
No degradation in employee visibility:
With the live monitor, executive & metric dashboards, you will still have 
whole insight into your agents behaviors and activities throughout the day. 
No need to be physically close to your agents. 
•
You still remain open and make money!
Whilst you may have to close your physical offices, your phone lines 
remain open and busier than ever!
```

#### Page 36 / 55 — `page-036.png`

```text
36
Work From Anywhere – The WHY
• Fewer Logistical Barriers to Hiring/Staffing
Agents or new hires are geographically challenged in the short term 
or long term? No problem, agents can access the CC from 
ANYWHERE!
• Maintain Operational Efficiency
Reduce abandoned called, rolled called calls, missed calls, reduce 
handle times and improve service level etc. 
• Use Any Phone!!
```

#### Page 37 / 55 — `page-037.png`

```text
37
Reduce Costs
• Ensure Right-Size Staffing
Workforce Management
• Automation and Integration
IVR Integration and Routing
• Business Intelligence
Call Classification, Surveys, Call Recording, Reports 
• Training, Coaching and Knowledge Transfers
Agent Scripting, Agent Coaching, Agent Evaluation
• Right channel, right time, right priority
Multi-Media Queuing, Skills Based Routing
• Cloud vs CPE TCO advantage
Simple predictable billing with no huge capital expenditure
```

#### Page 38 / 55 — `page-038.png`

```text
38
Increase Revenue
• Put Your Best Foot (Agent) Forward, Every Time!
•
Intelligent Routing
•
CRM/Back Office Integrations
•
Blended Agents
• Make Every Agent Your Best Agent!
•
Recording, Evaluation, Coaching 
•
Flexible Agent Scripting
• Automate and Learn
•
Self Service
•
Business Intelligence
•
Outbound Sales Campaigns
```

#### Page 39 / 55 — `page-039.png`

```text
39
Create/Increase Customer Loyalty
• Measure, Manage and Maintain Your Target Service 
Levels
•
Actionable information in real time via dashboards & alerts
•
Predict call volumes to create the right agent schedules 
•
Review historical reports to demonstrate results and learn from 
past outcomes.
• Improve the Customer Experience
•
Provide service using the channel preferred by your customer
•
Email, IM, Facebook, Twitter
•
Provide customers with information and options, such as the wait 
time or position in queue and automated callbacks
•
Empower agents with the tools they need 
•
CRM integration, 
•
Great scripting tools 
•
Self-directed learning by listening and scoring their own 
calls.
```

#### Page 40 / 55 — `page-040.png`

```text
40
Create/Increase Customer Loyalty
• Learn from Every Interaction
•
Determine exactly why your customers are contacting you
•
What can you do to serve these customers without requiring 
a live agent?
• Do It Right The First Time!
•
Increase your agents ability to provide first call resolution!
```

#### Page 41 / 55 — `page-041.png`

```text
41
Ensure Industry Regulation and Company Policy 
• Ensure and Demonstrate Compliance with Industry 
Regulation and Company Policy 
•
Maintaining call recordings and CDRs for the required period of 
time, safely & securely.
•
Ensuring payments taken by the contact center team meet PCI 
DSS 2.0 requirements.
•
Protecting privacy and monitoring compliance with your privacy 
policies.
•
Ensuring agents comply with daily schedules.
•
Providing agents with the tools they need to comply with 
company policies
```

#### Page 42 / 55 — `page-042.png`

```text
42
Key Verticals
The Big 4
Financial
Healthcare
Retail & Services
Public Sector
•
Banks
•
Insurance
•
Wealth Management
•
Lenders
•
Credit Unions
•
Financial Services
•
Investment Firms
•
Pharmaceuticals
•
Private Practices
•
Dental
•
Hospital
•
Clinical Care
•
Nursing
•
Hospice
•
Logistics / Transportation
•
Auto/Truck Dealers & Service
•
Offices / Consulting / SMB
•
Manufacturing Services
•
Facilities Management
•
Travel/Tourism
•
IT Services 
•
City/County/State 
•
Colleges/Universities
•
K-12 School Boards
•
State-provided 
Healthcare
•
Various Boards & 
Commissions
```

#### Page 43 / 55 — `page-043.png`

```text
43
Key Verticals
Common Use Cases - Finance
•
Looking for a scalable cloud phone solution with guaranteed uptime
•
Looking for additional ways for clients/patients to communicate and therefore introduce more efficiencies
•
Based on research, they ‘care’ about customer service/experience
•
Looking to ensure PCI compliance on call recordings
•
Looking for some self-service options – Payment IVR’s, Account Check In Status etc.
•
Offering a different call treatment to Spanish callers or perhaps lenders, affiliates, brokers etc.
•
Mitigation against missed/abandoned calls and therefore a loss of revenue from said missed transactions
•
Have a phone system but want to extend its capabilities and lifespan i.e., use our software over the top
•
To gain a better understanding into ‘why’ members are contacting you to identify common call drivers and therefore provide training for staffers 
or update common visited web pages
```

#### Page 44 / 55 — `page-044.png`

```text
44
Key Verticals
Common Use Cases - Healthcare
•
Looking for a scalable cloud phone solution with guaranteed uptime
•
Looking for additional ways for clients/patients to communicate and therefore introduce more efficiencies
•
Looking to confirm/schedule appointments in a more ‘automated’ fashion
•
Looking to ensure HIPAA compliance on call recordings
•
Aiding ‘patient experience’ whilst waiting to speak with a healthcare professional
o
We can offer self serve options or perhaps a call back whilst they wait in queue
•
Offering a different call treatment to Spanish callers or perhaps physicians/physicians assistants calling in
•
Mitigation against missed/abandoned calls and therefore a loss of revenue from said missed transactions
•
Have a phone system but want to extend its capabilities and lifespan i.e., use our software over the top
•
To gain a better understanding into ‘why’ patients are contacting you to identify common call drivers and therefore provide training for staffers 
or update common visited web pages
```

#### Page 45 / 55 — `page-045.png`

```text
Who are Contact Center Users?
Internal Customer 
Help Desk
External Customer 
Service/Tech 
Support
Sales
Scheduling
Billing
ACD/IVR/Call Recording/Reports Use Cases
Who are Contact Center Users?
```

#### Page 46 / 55 — `page-046.png`

```text
46
Prospecting
Before you call:
 1. Visit their website; “Contact Us” page
o Get a sense of the CX (customer experience)
o Toll Free, Local Numbers, Email, Web Forms, Chat Button, Fax
o The more of the above, the more complex to manage
```

#### Page 47 / 55 — `page-047.png`

```text
Scoring a Customer & Their Website - Sample
Category
Criteria
Score
Advanced Hunt Groups (Meta iACD)
Yes
5
No
0
Hunt Groups
Yes
3
No
0
# of UC seats
1-25
1
25-50
3
50+
5
# of locations (per website)
1
0
2-5
3
6+
5
Key Vertical 
(Healthcare, Finance, Automotive, or Retail)
Yes
3
No
0
WebChat/Toll Free/Multiple Numbers/Webforms
Yes
2
No
0
```

#### Page 48 / 55 — `page-048.png`

```text
48
Prospecting
Before you call:
2. Look for online reviews on them
o Get a sense of the CX reviews – good or bad
o See the types of compliments or complaints people are leaving
o Have a way to link our features / benefits to solving those problems
```

#### Page 49 / 55 — `page-049.png`

```text
49
Prospecting
Before you call:
3. Visit their “About Us” Page
o
Looking for the person responsible for “customer success” – Read 
Bio (if available) and pick out some words
4. Visit that person’s Linkedin Page (if they have one)
o
Looking for areas of responsibility – pick out more key words
```

#### Page 50 / 55 — `page-050.png`

> **Note:** Minimal extractable text on this page (12 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-050.png` for layout, charts, or scans.

```text
Backup Slides
```

#### Page 51 / 55 — `page-051.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-051.png` for layout, charts, or scans.

```text
51
Here’s an example
```

#### Page 52 / 55 — `page-052.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-052.png` for layout, charts, or scans.

```text
52
Here’s an example
```

#### Page 53 / 55 — `page-053.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-053.png` for layout, charts, or scans.

```text
53
Here’s an example
```

#### Page 54 / 55 — `page-054.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-054.png` for layout, charts, or scans.

```text
54
Here’s an example
```

#### Page 55 / 55 — `page-055.png`

> **Note:** Minimal extractable text on this page (17 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - Setting For Success - Customizing Your Demo Eoin & Mitch/page-055.png` for layout, charts, or scans.

```text
55
Here’s an example
```


<a id="p-e7e2e25483f843fa"></a>


### `Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025`

**Page count:** 23

#### Page 1 / 23 — `page-001.png`

> **Note:** Minimal extractable text on this page (24 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025/page-001.png` for layout, charts, or scans.

```text
Unified Communications
IPN
```

#### Page 2 / 23 — `page-002.png`

```text
Discussion Items
2 / Great Plains Communications
April 26
• Current Business Challenges
• Solution
• Rules of Engagement
• Support & Logistics
```

#### Page 3 / 23 — `page-003.png`

```text
Business Challenges
• IM BYOC UC/Kandy/Virtual Voice service is 
limited GPC Internet and the Nebraska & 
Indiana Enterprise Rate-Center footprint. 
▪It restricts GPC to compete out-state 
opportunity 
▪Product cannot support business customer 
with multi-location office in different part 
of the country
3 / Great Plains Communications
April 26
```

#### Page 4 / 23 — `page-004.png`

```text
Solution
• UC IPN 
▪Expand the UC network service beyond the  
Nebraska and Indiana Rate Center footprint 
boundary
▪Open up opportunities to reach up-market & 
multi-site customers who have offices across 
the country
• Remove GPC Internet restrictions
4 / Great Plains Communications
April 26
```

#### Page 5 / 23 — `page-005.png`

```text
5 / Great Plains Communications
April 26
Opportunity #1 – Implement Sales
• 30 UC seats opportunity
• Headquarter location in Blair – GPC Internet
• Remote Site Location
▪Clarksville , IN  
▪West Memphis, AR
```

#### Page 6 / 23 — `page-006.png`

```text
6 / Great Plains Communications
April 26
Opportunity #2 – approval required
• Headquarter location in Omaha
• Remote Site Location
▪
Maimi, FL 
▪
Dallas, TX 
▪
Lincoln, NE
```

#### Page 7 / 23 — `page-007.png`

```text
7 / Great Plains Communications
April 26
Opportunity #3 
• Headquarter location in Omaha
• Remote Site Location
▪
S. Sioux City, NE 
▪
Winnebago, NE
```

#### Page 8 / 23 — `page-008.png`

```text
UC IPN 
allows GPC to expand to 
markets where we cannot 
support today
8 / Great Plains Communications
April 26
```

#### Page 9 / 23 — `page-009.png`

```text
9 / Great Plains Communications
April 26
Product Availability Matrix
RC Ready =
Rate Center not 
ready – translation 
to be built.
UC Ready = Y
```

#### Page 10 / 23 — `page-010.png`

```text
10 / Great Plains Communications
April 26
Sales Guidelines - Boundary
UC Mobile Apps ONLY  
Opportunity – minimum 3 
licenses required
Site(s) fall inside 
GPC Rate-Center
Email Approval Request including information below
• Customer location(s) with full address information
• License/Seat proposed at each location
• Internet connectivity at each location – OnNet/OffNet/Type 2
• List other non-UC proposed service at each location
• Approval justifications – customer importance,  tangible benefits
Note
• Proposed solution falls within GPC 13 State footprint – 5 business days
• Proposed solution falls outside GPC 13  State footprint – 2 – 3 weeks
Process Order
No
Yes
UC Opportunity
No
Process Order
Yes
Definitions
Voice Service Area
• The state of Nebraska boundary
• The following counties in 
Indiana:  Jefferson, Jennings, Jackson, 
Bartholomew, Shelby, Johnson, 
Decatur, Franklin, Union, Dearborn, 
Ohio, Switzerland, and Ripley
• Blackhawk and Central City in CO
13 States : Nebraska, Colorado, Illinois, 
Indiana, Iowa, Kansas, Kentucky, 
Missouri, Minnesota, Ohio, South 
Dakota, Wisconsin and Wyoming.
Site(s) fall inside 
GPC Rate-Center
Approval Process
```

#### Page 11 / 23 — `page-011.png`

```text
11 / Great Plains Communications
April 26
Voice Service Areas - IN
```

#### Page 12 / 23 — `page-012.png`

> **Note:** Minimal extractable text on this page (35 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025/page-012.png` for layout, charts, or scans.

```text
12 / Great Plains Communications
April 26
```

#### Page 13 / 23 — `page-013.png`

```text
Same UC Platform
IPN – Continental US
BYOC – NE/IN
• UC Service within the Rate Center 
areas/communities 
• GPC numbers - porting / reservation
• Great Plains terminates call traffic
• GPC install within Voice Service Areas
• UC Service within the Continental US – 
outside GPC rate center footprint
• Intermedia numbers – porting / 
reservation
• Intermedia terminates call traffic
• Customer self-install at remote locations
13 / Great Plains Communications
April 26
Features
Customer Experience
Support
Value Proposition
```

#### Page 14 / 23 — `page-014.png`

```text
14 / Great Plains Communications
April 26
Products
```

#### Page 15 / 23 — `page-015.png`

```text
15 / Great Plains Communications
April 26
IPN Toll-Free
• Toll-Free calling minute plans are available in 500 – 10,000 minutes
• Overage rate applies
• Plan minutes are shared among other UC Toll-Free numbers in the account
```

#### Page 16 / 23 — `page-016.png`

```text
16 / Great Plains Communications
April 26
Address Pre-Qualification
```

#### Page 17 / 23 — `page-017.png`

```text
17 / Great Plains Communications
April 26
Check Address
```

#### Page 18 / 23 — `page-018.png`

```text
18 / Great Plains Communications
April 26
If results are successful (showing green), the 
address is qualified
If any result is unsuccessful (showing red), 
check your entry for possible typos and try 
again. Take note of any failed results to review 
with your prospect.
•
An invalid address prevents hardware 
shipping
•
Voice services can only be installed at 
addresses with Enhanced 911 in the US 
•
An unbillable address prevents proper tax 
collection.
Repeat the process for any additional 
locations where voice services will be 
installed.
```

#### Page 19 / 23 — `page-019.png`

```text
19 / Great Plains Communications
April 26
Check Numbers
If results are successful (showing green), the 
number is qualified and can be ordered or 
ported to the prospect's account once an 
account is created.
If any result is unsuccessful (showing red), 
check the area code and prefix for errors and 
try again. Take note of any failed results to 
review with your prospect.
•
Number fail means we don't currently have 
any numbers with that area code or prefix 
available .
•
Portability fail means the area code cannot 
be ported for service at this time. This is 
generally due to lack of coverage between 
the losing service carrier and our carrier.
Repeat the process for any additional area 
codes and prefixes.
```

#### Page 20 / 23 — `page-020.png`

```text
Site Network Verifications
• Confirm adequate bandwidth to support 
number of users/applications
• Run Bandwidth Tester 
• Check SIP ALG 
20 / Great Plains Communications
April 26
```

#### Page 21 / 23 — `page-021.png`

```text
21 / Great Plains Communications
Customer Expectations – Remote Site(s)
April 26
Network 
Readiness
Drop 
Shipping 
Equipment
Customer 
Self-
Install
Service 
Turn-up
Training 
and
User 
Education
```

#### Page 22 / 23 — `page-022.png`

```text
Remote Site Install
• No GPC tech dispatch to remote site
• Equipment will be shipped to customer 
site prior to scheduled turn-up date
• Minimum customer intervention, 
connect to the Internet
• Optional 3rd Party – MSP support 
recommended 
• User Guide & Support Videos  
22 / Great Plains Communications
April 26
```

#### Page 23 / 23 — `page-023.png`

> **Note:** Minimal extractable text on this page (35 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025/page-023.png` for layout, charts, or scans.

```text
23 / Great Plains Communications
April 26
```


<a id="p-924c2408a71a3258"></a>


### `Product Training/Product Training - Customer Network Management Portal - Wholesale.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Product Training - Customer Network Management Portal - Wholesale.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Product Training - Customer Network Management Portal - Wholesale`

**Page count:** 10

#### Page 1 / 10 — `page-001.png`

```text
G R E A T  P L A I N S  C O M M U N I C A T I O N S
GPC Customer Network Monitoring Portal
```

#### Page 2 / 10 — `page-002.png`

```text
Customer Network Monitoring Portal
G RE AT  P L A IN S  C O M M U N IC AT IO NS
•
What is it?
•
A customer-facing network monitoring portal for DIA and Ethernet
•
What Does It Do?
•
The CNM Portal provides real time monitoring of customer circuits and network traffic.
•
The portal shows circuit status (Green, Yellow, Red, etc.) and packet performance 
metrics such as bandwidth utilization, packet loss, delay and jitter.
•
Customers can create scheduled or on-demand reports showing historic trends 
hourly, daily, weekly and monthly.
•
Who Should Get it?
•
Any business or organization large enough to have an IT manager or staff capable of 
understanding network performance analysis.
```

#### Page 3 / 10 — `page-003.png`

```text
Customer Network Monitoring Portal
G RE AT  P L A IN S  C O M M U N IC AT IO NS
• Why Do Customers Need It?
•
Application performance is a top concern for enterprises and service providers.
•
Network issues that can impact application performance can be hard to identify.
•
The portal enables customers to find the root causes of application performance 
issues. 
• How Much Does It Cost?
•
There is no charge for the Network Monitoring Portal.
•
It does have a $7 monthly cost to GPC.
•
The Portal can be used as a closing tool for new DIA or Ethernet accounts.
•
The Portal can be provided to existing DIA or Ethernet customers with renewal or 
upgrade.
•
Minimum term 12 months, concurrent with underlying service.
```

#### Page 4 / 10 — `page-004.png`

```text
Customer Network Monitoring Portal
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Ordering Process if ordered with:
1.
New/Upgrade/Renewing Ethernet/DIA Service 
•
Add portal product in Salesforce order as part of the service order.  
•
There is a separate product in SF for the Network Monitoring Portal.
•
One portal order per account, not per circuit.  Portal will be applied to all circuits unless otherwise 
specified in order notes.
•
Network Engineering will set customer up with login credentials and basic monthly 
reports that they can customize.
2.
Existing Ethernet customers with no other product changes do not need a new order in 
Salesforce.
•
Send an email to Business Care (cc Product) with the following information:
•
Customer name, account number, circuit ID, customer admin contact. 
•
Business care will task Network Engineering to create the account and inform 
customer of login credentials.
```

#### Page 5 / 10 — `page-005.png`

```text
SALESFORCE CPQ PRODUCT LIST
G RE AT  P L A IN S  C O M M U N IC AT IO NS
C O N F I D E N T I A L  –  F O R  I N T E R N A L  U S E  O N L Y
```

#### Page 6 / 10 — `page-006.png`

```text
Network Monitoring Portal - Summary
G RE AT  P L A IN S  C O M M U N IC AT IO NS
The portal summary screen 
shows circuit status and 
condition at a glance.
Click on a circuit to drill 
down into performance.
```

#### Page 7 / 10 — `page-007.png`

```text
Network Monitoring Portal Circuit Status
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Customers can drill down to view individual circuit status with a mouse click.
```

#### Page 8 / 10 — `page-008.png`

```text
Network Performance Analytics
G RE AT  P L A IN S  C O M M U N IC AT IO NS
The Portal can provide instant and scheduled reports on hourly, daily, weekly, monthly, etc.
```

#### Page 9 / 10 — `page-009.png`

```text
GPC Network Monitoring Portal
G RE AT  P L AIN S  C O M M U N IC AT IO NS
```

#### Page 10 / 10 — `page-010.png`

```text
GPC Network Monitoring Portal
G RE AT  P L AIN S  C O M M U N IC AT IO NS
Questions?
```


<a id="p-7c34e7da57e74b6c"></a>


### `Product Training/Product Training - GPC Cloud Connect.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Product Training - GPC Cloud Connect.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Product Training - GPC Cloud Connect`

**Page count:** 26

#### Page 1 / 26 — `page-001.png`

> **Note:** Minimal extractable text on this page (37 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Product Training - GPC Cloud Connect/page-001.png` for layout, charts, or scans.

```text
G R E A T  P L A I N S  C O M M U N I C A T I O N S
CLOUD CONNECT
```

#### Page 2 / 26 — `page-002.png`

```text
CLOUD CONNECT AGENDA 
G RE AT  P L A IN S  C O M M U N IC AT IO NS
• Introductions
• Cloud Computing
• Customer Cloud Journey
• Battlecard
• GPC Product Overview
• Pricing Elements
• Pricing Workbook
• Support
• Cloud Support Partners
```

#### Page 3 / 26 — `page-003.png`

```text
WHAT IS CLOUD COMPUTING
G RE AT PL AI NS CO M M U NIC ATIO NS
Cloud Characteristics
• On-demand availability
• Easily Accessed 
• Multi-tenant resource pooling
• Ability to scale rapidly
• Usage Analytics
Cloud computing is the on-demand availability of computer 
system resources like data storage, applications, and computing 
power, that are accessed via the Internet or direct connectivity to 
another provider’s shared cloud computing infrastructure.
Cloud vs. On-premise:
• In simple terms, difference between on-premise and cloud is 
essentially where your hardware, application and software 
reside. 
• On-premise means that a company keeps all of this IT 
infrastructure onsite, which is either managed by themselves or a 
third-party. 
• With the Cloud it means that it is housed offsite with someone 
else responsible for monitoring and maintaining it.
```

#### Page 4 / 26 — `page-004.png`

```text
INDUSTRY GROWTH TRENDS
G RE AT  P L A IN S  C O M M U N IC AT IO NS
125%: 3 year CAGR of Megaport customers connecting to multiple clouds
Enterprise Cloud Service Spend (US$B)
Enterprise Cloud Strategy
1000+ Employees
Total of: BPaaS, PaaS, SaaS, Cloud Management & Security Services, Source: Gartner, 2019
Source: Flexera 2020 State of the Cloud Report
93%
Hybrid Cloud
Multiple Public
87%
6%
1%
6%
Multicloud Breakdown
Single Public
Single Private
Multicloud
```

#### Page 5 / 26 — `page-005.png`

```text
Hybrid 
Infrastructure
Low-Level 
App 
Migration
Cloud 
Storage/DRaaS
Multicloud
Examples:
Network redundancy
File storage
Object storage
Block storage
Examples:
ERP
SaaS
Homegrown back-office
Examples:
HPC
AI/ML
Big Data
Goal:
Interoperability and
automation between apps 
and platforms
CLOUD JOURNEY
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 6 / 26 — `page-006.png`

```text
Channel Partners
102 Unique Data 
Centre Operators
1,842 Customers
360+ Service Providers
CONNECTING THE ECOSYSTEM
```

#### Page 7 / 26 — `page-007.png`

```text
GPC AND MEGAPORT 
PARTNERSHIP
GPC Transport
GPC 
Transport
GPC Transport
G
P
C 
T
r
a
n
s
p
o
r
t
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 8 / 26 — `page-008.png`

```text
MEGAPORT NETWORK
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 9 / 26 — `page-009.png`

```text
MEGAPORT LAYER 2 ACCESS
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 10 / 26 — `page-010.png`

```text
Private Connectivity (L2):
AWS, AZURE, GOOGLE CLOUD: TERMINOLOGY
Logical Data Center: 
Gateways:
Compute:
Object Storage:
Direct Connect
VPC
TGW, VGW, DGW
EC2 Instances
S3
ExpressRoute
VNet
VNet Gateway
Virtual Machine (VM)
Blob Storage
Cloud Storage
Compute Engine VMs
Cloud Router
VPC
Partner Interconnect
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 11 / 26 — `page-011.png`

```text
CLOUD TERMINOLOGY
Megaport port
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 12 / 26 — `page-012.png`

```text
●
AWS, Azure, and GCP can be reached via the public Internet
●
Megaport offers Private (Layer 2) connectivity which offers the following benefits:
○
More reliable performance vs Internet VPN
●
Consistent latency over a private network mitigates jitter. 
○
Enhanced Security Posture through the following:
●
Removes the vulnerability of DDoS attacks
●
Removes the possibility of malicious spoofing and hijacks
●
Customers can apply encryption over these private layer 2 connections for added security
○
Reduction in egress fees vs Internet VPN
●
AWS,  Azure and GCP egress charges over Direct Connect, ExpressRoute and Partner Interconnect are approximately 70% discounted 
over the egress charges applied to  an Internet VPN. The cloud providers offer these discounted rates as an incentive for customers to 
use the layer 2 connectivity services. 
LAYER 2 VS THE PUBLIC INTERNET
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 13 / 26 — `page-013.png`

```text
●
AWS, Azure, and GCP all offer dedicated interconnection
○
Physical Ethernet connection associated with a single cloud provider. Customer  has to request connection 
directly from the cloud provider and work to have cross connects run/configured
○
Larger bandwidth requirements for dedicated interconnection (i.e. higher costs). For Azure a customer must 
subscribe to either dual 10G ports or dual 100G ports. 
○
Location specific. A  customer must get to a cloud provider edge location. There are a fewer number of these 
locations vs the number of Megaport enabled locations. 
●
Megaport is a connectivity partner with the major cloud providers
○
Greater reach. You can connect from hundreds of Megaport enabled data centers.  
○
Ability to deploy connections from upto 10Gbps
○
Ability to connect to multiple cloud providers from a single connection to Megaport
DEDICATED VS. PARTNER
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 14 / 26 — `page-014.png`

```text
●
Megaport Components (Billed to GPC)
○
Access
■
Megaport (a 1Gbps or 10Gbps NNI between the partner and Megaport)
○
Private Connections (VXCs/VLANs)
●
CSP Components (Billed to the owner of cloud resources, typically the end-user)
○
Virtual Port Charge- Hourly charge based off of capacity subscribed to
○
Data Transfer- Fees for egress over the Layer 2 connection
CLOUD CONNECTIVITY TCO
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 15 / 26 — `page-015.png`

```text
EXAMPLE COST COMPARISON
Hourly Port Cost:
Egress Traffic Cost: 
$0.33/hour
$0.02/GB
$0.59/hour
$0.025/GB
$0.02/GB
$0.2778/hour
The Below Sample pricing is based on the US Region pricing, using a 1Gbps Circuit provisioned using a partner.
*ExpressRoute is based on Standard SKU with Metered Plan*
*These egress charges are 70% to 80% less expensive than those billed if a customer uses an Internet VPN
G RE AT PL AI NS CO M M U NIC ATIO NS
```

#### Page 16 / 26 — `page-016.png`

```text
BATTLECARD
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Link to Battlecard
```

#### Page 17 / 26 — `page-017.png`

```text
PRODUCT OVERVIEW
G RE AT PL AI NS CO M M U NIC ATIO NS
FEATURES & BENEFITS
• Runs over our private fiber Ethernet 
network, customer traffic to and from 
the Cloud does not pass through the 
public Internet
• Provides a fast, flexible and secure 
direct connection to multiple leading 
Cloud and Network Providers on our 
cloud ecosystem
• Establishes connectivity without 
needing to own or manage a physical 
network
• Keeps traffic secure when connecting 
between metros and regions
• Provides multi-region redundancy by 
connecting to multiple cloud regions 
from a single interconnection point
• Provides direct connections with 
speeds up to 10 Gbps
GPC Cloud Connect provides a layer 2 Ethernet (EVPL/ELAN) connection 
from an end-user location to a network-to-network interface (NNI) with 
Megaport where we have multiple NNIs in geo-diverse locations. Megaport 
is a cloud integrator with direct connections to multiple cloud service 
providers (CSP) including Amazon Web Services (AWS), Microsoft Azure, 
Google, Oracle, IBM, SAP, Nutanix, Salesforce and Alibaba. GPC is 
providing the connectivity to the cloud, NOT the cloud service itself.
```

#### Page 18 / 26 — `page-018.png`

```text
PRICING ELEMENTS
G RE AT PL AI NS CO M M U NIC ATIO NS
1. ELINE-EVPL or ELAN | 50Mb – 10Gb
• On-net or Off-net available
2. Cloud Connect | 50Mb-10Gb
• Cloud Provider(s)
• Cloud Connect Speeds (Virtual Cross Connect – VXC)
• Diversity/Redundancy Requirements
• Cloud provider on-ramp (City & State)
• Closest GPC interconnect to on-ramp
• Chicago, Denver, or Omaha
Note: Secondary Cloud Connect is a 
virtual circuit utilizing the same 
Megaport interconnect port 
(Omaha, Chicago, or Denver) as the 
primary and serves only as backup. 
Customer would not utilize more 
bandwidth than what is subscribed 
to in the primary (i.e. primary 1Gb 
& secondary 1Gb but total usage 
would be limited to 1Gb).
Link to Quote Checklist
```

#### Page 19 / 26 — `page-019.png`

```text
PRE-SALES QUESTIONAIRE
• Presales Questionnaire needs to be provided as an attachment within 
Salesforce before closed won.  
• Provides cloud solution information for quoting purposes
• Cloud provider(s)
• On-ramp(s) and region
• Speed
• Provides needed information for engineering to begin provisioning process.
• Service Keys
• Design information
• PORT Details
• VLAN IDs
• Provides contact information to customer’s cloud technical experts
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Link to Pre-Sales Questionnaire
```

#### Page 20 / 26 — `page-020.png`

```text
Link to Sales - GPC Cloud Connect Pricing Worksheet
PRICING WORKSHEET
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 21 / 26 — `page-021.png`

```text
SALESFORCE
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Product Requires both an Ethernet connection and at least 1 Cloud Connect product:  
GPC Interconnect Locations:
Chicago IL:  350 E Cermak Rd
Denver CO:  910 15th St
Omaha NE:  1623 Farnam St
```

#### Page 22 / 26 — `page-022.png`

```text
SOLUTION & DESIGN 
                                                      (Examples)
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 23 / 26 — `page-023.png`

```text
Support
G RE AT PL AI NS CO M M U NIC ATIO NS
• LEVEL 1:  Service Operations – NOC
• Troubleshoot GPC Layer 2 Ethernet Connectivity
• LEVEL 2:  Network Engineering
• Troubleshoot GPC and Megaport Connectivity
• LEVEL 3:  Megaport 
• Trouble Ticketing and/or escalation to Megaport 
Engineer
• LEVEL 4:  Cloud Support Partner
```

#### Page 24 / 26 — `page-024.png`

```text
• Why?  
• GPC does not have certifications with the various cloud providers or 
expertise in-house. 
• When to use a support partner?  
• GPC is providing the connectivity only.  If the customer is asking for 
support in moving to the cloud, migrating between cloud providers, or 
have specific cloud questions outside of our expertise. 
• Who is our Cloud Partner?  
• eCloud Managed Services – Eric Sanders
• Multi-Cloud, Multi-Platform  Partners
• eCloud MS has a complement of certifications, services, and capabilities available 
with a consultative approach to meet our customers’ needs
• Partnership – Referral 
• GPC provides the introduction and eCloud MS takes it from there.
CLOUD SUPPORT PARTNER
G RE AT  P L A IN S  C O M M U N IC AT IO NS
```

#### Page 25 / 26 — `page-025.png`

```text
ADDITIONAL RESOURCES
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Technical Training Available (Provided by Les Thomas - Megaport)
• Amazon Web Service
• Microsoft Azure
• Google Cloud 
Product Guide
Cloud Connect Marketing Collateral
```

#### Page 26 / 26 — `page-026.png`

```text
G RE AT  P L A IN S  C O M M U N IC AT IO NS                                                                                         M E GA P O RT
QUESTIONS?
```


<a id="p-7fa5a0ec18413ff5"></a>


### `Product Training/Product Training - Managed Ethernet sm.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Product Training - Managed Ethernet sm.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Product Training - Managed Ethernet sm`

**Page count:** 16

#### Page 1 / 16 — `page-001.png`

```text
G R E A T  P L A I N S  C O M M U N I C A T I O N S
GPC MANAGED ETHERNET
E P L,  E V P L,  & E - LA N
```

#### Page 2 / 16 — `page-002.png`

```text
REGIONAL ETHERNET AGENDA 
GR EAT P L A IN S CO MMU N ICATIO N S
• Why Ethernet?
• EPL, EVPL and E-LAN Product Overview
• Use Cases
• Ethernet Service price elements
• Class of Service (CoS)
```

#### Page 3 / 16 — `page-003.png`

```text
WHY ETHERNET
GR EAT P L A IN S CO MMU N ICATIO N S
• “Big Data”
• Flexible product solutions to support the 
greater need for multi-site applications
• Business Critical data…  FAST
• Ethernet is Ethernet is Ethernet
```

#### Page 4 / 16 — `page-004.png`

```text
• About the MEF: 
• Founded in 2001, the MEF is an industry association of 200+ member 
companies including a mix of  service providers, hardware and software 
technology vendors, testing, training, and other companies from every 
geographic region of the world.   
• MEF – Accelerating Industry Innovation:
• With 200+ member companies and a track record of 
success, MEF is uniquely positioned to drive 
development and worldwide adoption of dynamic, 
assured services orchestrated across a global federation 
of automated networks. 
GPC Metro Ethernet Forum 
(MEF) 2.0 Certified
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 5 / 16 — `page-005.png`

```text
E-Line Product Overview
GR E AT P L A I NS  COM M U NI CATI ONS
• Ethernet Line (E-Line) is a 
platform-agnostic, point to point 
or point to multi-point service 
that can traverse between any 
two or more Customer locations 
located in any E-Line enabled 
market.  GPC E-Line service is 
protected within the core.
E-Line can be ordered as:
•
Ethernet Private Line, or EPL
•
Ethernet Virtual Private Line, 
or EVPL
```

#### Page 6 / 16 — `page-006.png`

```text
E-LINE PRODUCT OVERVIEW
GR EAT P L A IN S CO MMU N ICATIO N S
The E-Line product consists of two types of components:
• The User Network Interface (UNI) at each end
• The Ethernet Virtual Connection (EVC)
```

#### Page 7 / 16 — `page-007.png`

```text
E-LINE | EPL
GR EAT P L A IN S CO MMU N ICATIO N S
Ethernet Private Line (EPL) – This service type is a point-to-point Port-
based service that is intended to be highly transparent in the sense that 
service frames that are sent are delivered with as few modifications as 
possible.  Traffic within these frames are managed by the customer.
```

#### Page 8 / 16 — `page-008.png`

```text
• Data Center Mirroring
• Disaster Recovery
• Latency sensitive
• Media Streaming
• Video Conferencing
• LAN Extension
• Private Line replacement
High-speed, low-latency connections with predetermined paths for fast and 
reliable networking.  On-net applications only.
EPL USE CASES
POINT-TO-POINT
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 9 / 16 — `page-009.png`

```text
E-LINE | EVPL
GR EAT P L A IN S CO MMU N ICATIO N S
Ethernet Virtual Private Line (EVPL) - This service type is a point-to-point 
or point-to-multipoint VLAN-based service where Great Plains 
Communications manages the VLANs for the customer.
```

#### Page 10 / 16 — `page-010.png`

```text
• Corporate application
connectivity
• User data storage
• Distance Learning
• Custom System Integrator
Networks
High-speed, low-latency connections for multiple corporate sites to 
headquarters or data center locations. On/off-net applications.
EVPL USE CASES 
HUB AND SPOKE
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 11 / 16 — `page-011.png`

```text
E-LAN PRODUCT OVERVIEW  
GR EAT P L A IN S CO MMU N ICATIO N S
Ethernet Local Area Network (E-LAN) - An E-LAN is a multipoint-to-multipoint 
service that connects a number of UNIs (2 or more) providing full mesh 
connectivity for those sites. Each UNI can communicate with any other UNI that 
is connected to that Ethernet service.
```

#### Page 12 / 16 — `page-012.png`

```text
• Applications with low
latency and/or other
requirements
• Multicasting
• VoIP
• Video
• Customized routing
controls
Any-to-Any, high-speed, low latency connections for corporate WAN requiring 
routing control.
ELAN Use Cases 
ANY-TO-ANY CONNECTIVITY
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 13 / 16 — `page-013.png`

```text
EVC Bandwidth
Key Features
Access/UNI
Base Charges
EPL
•
10Mbps – 10 Gbps 
•
PORT Based
•
Customer managed VLANs
•
Simple Point-to-Point
•
Ethernet Access provisioned to meet or exceed the projected Ethernet EVC Needs
•
Circuit and speed based
Monthly Recurring Charge (MRC)
EVPL
•
10Mbps – 10Gbps 
•
Carrier managed VLAN
•
Class of Service
•
Point-to-Point/Multipoint
E-LAN
•
10Mbps – 10Gbps 
•
PORT/VLAN based
•
Class of Service
•
Multipoint-to-Multipoint
•
Site and speed based
MRC
ETHERNET SERVICE PRICING ELEMENTS
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 14 / 16 — `page-014.png`

```text
CLASS OF SERVICE (CoS)
GR E AT P L A I NS  COM M U NI CATI ONS
Class of Service Defined:
• Ethernet Class of Service (CoS) provides a standard 
solution for a higher level of service commitment from 
Great Plains Communications (GPC) to our customers. 
CoS offers three service levels in addition to standard 
traffic for Ethernet Private Line (EPL), Ethernet Virtual 
Private Line (EVPL) or Ethernet Local Area Network 
(ELAN) products. When CoS is selected, network 
performance must meet the GPC service level objective 
defined. 
Benefits
•
Provides a multi-tiered 
service commitment for 
customers needing 
assurance of higher 
network performance
•
Offers network analytics 
that are readily available 
for ad hoc reporting
```

#### Page 15 / 16 — `page-015.png`

```text
CoS Priority Level
Common Service Usage
Real-Time
Real-time CoS is optimal for low latency, low jitter and low packet loss
performance required for voice communications. All managed Voice over IP
(VoIP) services should be defaulted to real-time CoS.
Mission Critical
Mission critical CoS is intended for applications with high business value,
requiring large bandwidth allocations and/or lower latency such as
interactive video conferencing, streaming video, credit card transactions and
Enterprise Resource Planning (ERP) applications like SAP or PeopleSoft.
Business Class
Business critical data CoS is intended for transactional and interactive data
such as email or client/server applications.
Standard (default)
Standard data CoS is for customers who have latency and jitter tolerant data
applications.
CLASS OF SERVICE - USAGE
GR EAT P L A IN S CO MMU N ICATIO N S
```

#### Page 16 / 16 — `page-016.png`

```text
Objective
Real-time
Mission 
Critical
Business Class Standard
Availability – Standard 
99.99%
99.99%
99.95%
99.9%
Availability – Protected
99.999%
99.999%
99.999%
99.999%
Round Trip Jitter (ms)
≤3ms
≤5ms
≤8ms
≤15ms
Round Trip Latency (0-400 miles)(ms)
≤18ms
≤20ms
≤25ms
≤30ms
MTTR
4 hours
4 hours
4 hours
8 hours
Packet Loss/Frame Loss Ration (%)
≤0.01%
≤0.05%
≤0.5%
≤0.5%
CoS is not an option for Ethernet locations using Type 2 (3rd party) connectivity.
CLASS OF SERVICE - OBJECTIVES
GR EAT P L A IN S CO MMU N ICATIO N S
```


<a id="p-5e854c91a6cc327c"></a>


### `Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/SD-WAN & Managed Security with Configure 08-01-2024.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/SD-WAN & Managed Security with Configure 08-01-2024`

**Page count:** 18

#### Page 1 / 18 — `page-001.png`

```text
GPC Product Management 
SD-WAN & Network 
Security Services 
with Configure Inc
```

#### Page 2 / 18 — `page-002.png`

```text
INTRODUCTION – WHAT ARE WE LAUNCHING?
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
Partnership with a leading Managed Security Service Provider (MSSP) to support SD-WAN 
and Managed Network Security Services to achieve 3 Goals:
1. Managed SD-WAN combined with Network Security
2. Additional network security services to provide a complete wide area network security 
solution.  For example:
• We can offer to manage a customer’s existing firewalls
• We can offer to conduct an enterprise security assessment to identify vulnerabilities 
• We can offer to protect the customer’s email from spam and phishing
3. Offer a Managed Firewall Service – Coming Soon!
• Will be based on a market leading Next Generation Network Firewall (NGFW)
• Can be offered with SD-WAN or sold as a standalone service
```

#### Page 3 / 18 — `page-003.png`

```text
INTRODUCING – CONFIGURE INC 
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
Advantages of our Partnership with Configure Inc.
• Configure Inc. is a leading IT Network and 
Cybersecurity Professional Services company
• Configure operates three U.S. based Network and 
Security Operations Centers (NOC/SOC) providing 
24x7x365 monitoring
• NOCs in Chicago and San Jose plus a SOC in Dallas
• 600 SD-WAN customers with >10,000 devices under 
management
• Preferred VMware/VeloCloud SD-WAN Partner
• Provides SD-WAN support for AT&T and 260 ISPs  
• Operational Maturity based on years of experience 
managing hundreds of SD-WAN customers
Dallas Security Operations Center
```

#### Page 4 / 18 — `page-004.png`

```text
INTRODUCING – CONFIGURE INC  
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
GPC Partnership with Configure Inc. (Cont.)
• Configure Inc. will play a critical role for SD-WAN and 
Network Security Support
• Designing, configuring, monitoring and managing SD-
WAN and Network Security Services
• Pre-Sales Technical Consulting
• Proactive monitoring and troubleshooting
• 5-min response SLA during business hours, 15-min 
after hours
• Service Now Ticketing Portal – Customers can open 
and track progress of trouble tickets on-line
• Or they can call GPC support on 8014 or 8015, hit 
Option 4 and will be forwarded to the Configure NOC
• Remote on-site tech support outside GPC territory*
•
See Cost Sheet in Appendix
Dallas Security Operations Center
```

#### Page 5 / 18 — `page-005.png`

```text
INTRODUCING – CONFIGURE INC  
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
How to talk about Configure with your customers:
• Not during initial conversations, and not necessary to quote a 
solution
• OK when asked about our experience supporting SD-WAN, or 
during a technical deep dive with a Configure expert
• We partner with many top tier tech vendors to deliver our 
services – Cisco for IP routing, Ciena for optical networking, 
Intermedia for UCaaS, Cradlepoint & Kajeet for LTE backup, 
VMware for SD-WAN, and now Configure for SD-WAN and 
Network Security
• Configure can be viewed as an extension of our technical 
support team
• That technical team brings the benefits of deep experience 
with SD-WAN and Security to our customers
```

#### Page 6 / 18 — `page-006.png`

```text
WHY NETWORK SECURITY
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
• Many are paying $1000s per month to IT consultants to 
secure their networks
• The provider that can provide a network+security 
solution is more likely to win the deal
• Bundled network services are stickier – customers less 
likely to churn
• We already offer a firewall on Plume, and Cradlepoints 
have outbound Web Filtering enabled
• Configure enables GPC to offer fully managed Internet 
plus SD-WAN plus Network Security services for 
customers looking to buy from a single provider
Why Are We Offering Network Security Services?
•
The market has evolved—Internet+SD-WAN alone is not 
enough
•
Business customers are requesting network services 
combined with network security, as shown in this recent 
survey of enterprise IT professionals
```

#### Page 7 / 18 — `page-007.png`

```text
NEW PRODUCTS – Managed Security Services 
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
Configure Managed Security Services 
MRC
NRC*
Description
Firewall Management –  Customer Owned
$115
$400
Managed Firewall Service for 3rd Party Vendor.  Service includes 24x7 SOC monitoring, management, 
alerting & troubleshooting.  Firewall not included.
Firewall Plus - Managed SIEM
0
Custom
Add on to Managed Firewall.  Network Intrusion Monitoring with 24 x 7 x 365 real-time monitoring & 
logging of security threats including firewalls, switches, routers, wireless access points, etc.
Firewall Assessment
0
$600
Review existing Security policies and configuration.  Review device software version to determine 
currency. Validation of End of Life/End of Service (EOL/EOS) status. Identify vulnerable devices.
Enterprise Security Assessment 
0
$2000
Enterprise-wide network security evaluation.
Vulnerability Scanning – BiWeekly
$1,450
0
Initial setup with Two (2) collectors.  Public & Private IP Addresses. Active biweekly scanning as well 
as agents, passive monitoring. Report with 1hr of Remote Security Engineer Review
Vulnerability Scanning – Monthly
$1,150
0
Initial setup with Two (2) collectors.  Public & Private IP Addresses. Active monthly scanning, as well 
as agents, passive monitoring. Report with 1hr of Remote Security Engineer Review.
Additional Collectors Setup 
$45
0
Set up and configuration for software agent collectors on more than two devices.
Managed Email Security
0
$1,800
Advanced AI-based Anti-Spam/Phishing managed In-Line Email Security for protection against 
Malware, Ransomware, as well as Data Loss Protection. Based on Checkpoint Avanon email security 
solution.
Managed Email Security - Email Boxes
$9.50
Price per email box.
*Configure NRCs are per site and cannot be waived
```

#### Page 8 / 18 — `page-008.png`

```text
NEW PRODUCTS – SD-WAN SECURITY 
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
New - VMware/VeloCloud* Enhanced Edge Firewall 
• Enhanced Edge Firewall is enabled on current SD-
WAN Edge devices – no new hardware.
• Previous Edge Firewall lacked advanced features - 
EFW is a true Next Generation Firewall With Intrusion 
Detection and Protection (IDS/IPS)
• Configure will provision, monitor and manage the  
Enhanced Edge Firewall
• Suitable for smaller sites with little or no security
• Ex. Retail branch stores or coffee shops
• Add-on to SD-WAN – Single Box Solution
• Additional MRC and NRC per device – 
•
Ex. $105 MRC up to 200Mbps
*Broadcom has acquired VMware and is reviving the VeloCloud SD-WAN brand name
```

#### Page 9 / 18 — `page-009.png`

```text
PRODUCT PREVIEW  
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
Coming Soon – A Managed Firewall Service
• Market leading Network Firewall appliances from 
Fortinet 
• Deployed on customer premises.
• Provisioned and managed by Configure
• MRC Pricing starts in the mid-$200s
• Stay tuned for more information!
```

#### Page 10 / 18 — `page-010.png`

```text
RESOURCES – SALES & MARKETING
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
```

#### Page 11 / 18 — `page-011.png`

```text
RESOURCES – SALES & MARKETING
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
```

#### Page 12 / 18 — `page-012.png`

```text
CONFIGURE INC
G P C  S D - W A N
Confidential        © 2022 Great Plains Communications
Michael Brazeau
Executive Vice President
Configure Inc.
```

#### Page 13 / 18 — `page-013.png`

```text
Configure Inc. – What We Do
• From Fortune 100 to SMB Customers, we Design, Deploy and Manage Network and Security Services for our Partner’s 
Customers.  We are the “Provider” in their MSP program.  We partner with platform resellers (VARS and MSPs), Telcos 
and directly with platform OEMs to support large custom deployments and also create scalable “bundle” programs for 
SMB markets.
• We manage over 25,000 endpoints for our Partners
• Our Managed Services solutions support all common OEM Network and Security Platforms (we are NOT an OEM).  We 
are Managed Service Solutions Experts.
• Our pricing model is structured to give partners a profitable recurring revenue stream on Managed Services sold to 
their customers.
• With a 98%+ Customer Satisfaction Rating, Partners trust Configure Inc. to support their customers
We Provide Managed Network and Security Services using common OEM platforms for our Partners to 
sell to their Customers.
Configure Inc. has been a trusted partner for over 25 years with a 98% customer satisfaction rating. What makes Configure Inc. unique is 
our commitment to helping our partners grow and build their Managed Security Services business with our customized solutions breadth 
of services, flexibility, agility and focus on expertise in emerging technologies.
```

#### Page 14 / 18 — `page-014.png`

```text
•Partner’s Customer 
Contract Signed
•Partner Handoff to 
engage Configure Inc
Contract
•PM and Technical 
Resources Assigned
•Internal Review
•Customer Kickoff
Kickoff
•Technical 
Questionnaire Sent to 
Customer
•Engineering call set, 
design finalized
Design
•Deployment Schedule Set
•Hardware Procurement 
Coordination
•Conduct On-site installation
Deploy
•On-Board sites into 
monitoring system
•Create SOP and 
review with customer
Monitor
•Accept and work 
MACDs as requested
•Engage Partner if 
Change Order Needed
MACD
Programmatic Deployment Process Flow for Your Customers
This process supports the entire platform stack/bundle (Security/SASE, SD-WAN, LAN) and can support incremental additions and 
co-management options.
Partner Owns
Configure Inc. Owns
Entire process from Handoff to Engineering/Design/Implementation and Ongoing Management
This is fully customizable to meet the specific needs of each partner
```

#### Page 15 / 18 — `page-015.png`

```text
We create detailed Service Operations Plans (SOP) that fit Customer’s business needs, current reporting and alerting requirements
We can create custom alerts and reports through extensive API integration (using in house development staff)
Weekly Ticket Reviews, Monthly Ticket Reports and Quarterly Performance Reviews
Our US-based Network Operations Center (NOC) and SOC 2-compliant Security Operations Center 
(SOC) services include:
•
Proactive 24x7x365 Monitoring and Notification of network and security related services. 
USA, Near Shore and Far Shore based. SOC’s and NOC’s based in Dallas and Chicago.
•
Fault Isolation and Resolution (Tier 1.5, 2 and 3+)
•
Managed Component Reporting and Capacity Usage Reporting
•
Preventative maintenance and MACDs
•
Co-management options
•
Ebonding, ServiceNow Service bridge, Electronic integration with client tools
•
SIEM support with in-house analysts , Incident Response and Threat Intelligence Security 
engineers.
•
On-Site dispatch for MACD’s and emergency situations
Configure Inc. can provide full end-to-end LAN, WAN and Security infrastructure deployment, monitoring and management.  We can take over an existing 
environment, build a solution from the ground up or provide key integration support when implementing changes in an existing environment.  
Network & Security Monitoring and Management
```

#### Page 16 / 18 — `page-016.png`

> **Note:** Minimal extractable text on this page (26 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/SD-WAN & Managed Security with Configure 08-01-2024/page-016.png` for layout, charts, or scans.

```text
QUESTIONS?
G P C  P R O D U C T  L A U N C H
```

#### Page 17 / 18 — `page-017.png`

```text
APPENDIX - 
Optional 
Support 
Costs
G P C  P R O D U C T  L A U N C H
```

#### Page 18 / 18 — `page-018.png`

> **Note:** Minimal extractable text on this page (16 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/Product Training/SD-WAN & Managed Security with Configure 08-01-2024/page-018.png` for layout, charts, or scans.

```text
G P C  P R O D U C T  L A U N C H
```


<a id="p-4d56a6fe45d90e6f"></a>


### `Product Training/Sales Training - DDoS Product 2023 Update.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Product Training/Sales Training - DDoS Product 2023 Update.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Product Training/Sales Training - DDoS Product 2023 Update`

**Page count:** 18

#### Page 1 / 18 — `page-001.png`

```text
G R E A T  P L A I N S  C O M M U N I C A T I O N S
GPC DDoS Protection Service
Pr oactive and O n-Demand Protection
```

#### Page 2 / 18 — `page-002.png`

```text
What is a Denial of Service Attack?
G RE AT  P L A IN S  C O M M U N IC AT IO NS
This type of attack is used to disable or block access to 
customer servers or websites, by sending a flood of traffic 
or connection requests that overwhelm that capacity of the 
servers, thereby preventing legitimate users or customers 
from accessing customer services.
How it works
Hackers secretly insert malware into hundreds or 
thousands of legitimate computers.  At a designated date 
and time, the malware activates and takes over the 
computers.  
These ‘zombie’ computers act in unison to attack the target 
website or servers, by sending repeated connection 
requests, for example.
GPC’s DDoS Protection Service triggers an alarm when a 
sudden spike in traffic at a particular location exceeds a 
pre-established threshold.  The service identifies the IP 
addresses of the attackers, and blocks traffic from those 
addresses from reaching the customer site(s) that are 
under attack.
This process of DDoS attack mitigation can take place in a 
matter of seconds or minutes, so that customers may not 
even notice a disruption in their services.
```

#### Page 3 / 18 — `page-003.png`

```text
G RE AT PL AI NS CO M M U NIC ATIO NS
• What is it?
• A GPC network-based service designed to detect and 
prevent Distributed Denial of Service attacks against our 
customers on-line business.
• Why do customers need it?
• DDoS is a Top Threat and Concern for Enterprises.
• 70% of enterprises reporting year-over-year increases.*
• Attacks have increased in size, frequency and complexity.
*Arbor’s 13th Annual Worldwide Infrastructure Security Report 
What it is NOT:
Protection against Malware, 
Spyware, Adware, etc.  
Distributed Denial of Service (DDoS) 
Protection Service
```

#### Page 4 / 18 — `page-004.png`

```text
The GPS DDoS Product
G RE AT  P L A IN S  C O M M U N IC AT IO NS
We offer DDoS in GPC West already.  How is this different?  
• Network Protection:
•
GPC West has had DDoS protection to protect the GPC network level (10-100Gb levels). This 
level of protection may not detect a 50Mb attack impacting a customer with 50Mb of DIA service.  
As of 2021 GPC East also has this level of protection.
• Customer Protection:
•
The new product is provisioned at a customer circuit level and the notifications and mitigation 
levels are configured specifically to protect that customer. 
•
Customer now has access to a portal to view network traffic analytics and attacks at anytime.
```

#### Page 5 / 18 — `page-005.png`

```text
The GPS DDoS Product
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Proactive DDoS Protection
• Monitoring portal with network traffic 
analysis
• 24x7 automated DDoS monitoring and 
notifications
• 24x7 automated DDoS mitigation
• Bandwidth-based thresholds per 
customer
• Bandwidth from 10 Mbps to 10 Gbps
On-Demand DDoS Protection
• Monitoring portal with network traffic 
analysis
• 24x7 automated DDoS monitoring and 
notifications
• On-demand mitigation available weekdays 
from 8 am to 5 pm
• Bandwidth-based thresholds per 
customer
• Bandwidth from 10 Mbps to 10 Gbps
```

#### Page 6 / 18 — `page-006.png`

```text
G RE AT  P L A IN S  C O M M U N IC AT IO NS
• GPC DDoS Product Comes in two flavors
• On-Demand
•
Attack notification and mitigation available only during regular 
business hours – 8-5pm, Monday-Friday
•
Mitigation is optional and must be requested by customer
•
Mitigation includes BGP FlowSpec
• Proactive
•
Attack notifications and mitigations are automated and available 
24 hours a day, seven days a week.
•
Mitigation is included in monthly fee.
•
Mitigation includes BGP FlowSpec and TMS
The GPS DDoS Product
```

#### Page 7 / 18 — `page-007.png`

```text
G RE AT  P L A IN S  C O M M U N IC AT IO NS
• GPC DDoS Protection Comes in two flavors
•
BGP FlowSpec
•
Highly effective against the most common high-bandwidth (volumetric) attacks that 
overwhelm access networks with a flood of traffic.
•
BGP FlowSpec can detect volumetric attacks and block or drop malicious traffic in 
minutes, allowing legitimate traffic to pass through.
•
BGP FlowSpec can mitigate most high-volume attacks, but more sophisticated low-
bandwidth attacks require more advanced and automated mitigation.
•
Threat Mitigation System (TMS)
•
GPCs Threat Mitigation System provides a second layer of protection against 
complex attacks targeting specific equipment or applications that are not easily 
detectable by standard protection mechanisms.
•
During an attack, automated processes use application-layer intelligence to redirect 
traffic to the TMS ‘scrubber’ that surgically isolates and drops malicious traffic while 
legitimate traffic is forwarded on to the enterprise.
The GPS DDoS Product
```

#### Page 8 / 18 — `page-008.png`

```text
How GPC Stops DDoS Attacks
G RE AT  P L A IN S  C O M M U N IC AT IO NS
GPC DDoS monitoring with individual customer thresholds can spot 
lower level attacks and begin automated or on-demand mitigation to 
block source IPs and if necessary blackhole malicious traffic.
```

#### Page 9 / 18 — `page-009.png`

```text
DDoS Portal Network Traffic Analytics
G RE AT  P L A IN S  C O M M U N IC AT IO NS
The GPC DDoS Attack Protection Service includes 
traffic analytics presented via a customer accessible 
web-based portal.
The portal displays total network traffic per location, 
including average, peak and 95th percentile traffic 
measurements.
The portal also displays top talkers, including:
• Top applications by traffic
• Top sites by traffic
• Top peers by traffic
• Top TCP/UDP ports by traffic
• Top Malicious fingerprints by traffic
```

#### Page 10 / 18 — `page-010.png`

```text
DDoS Portal Attack & Mitigation Analytics
G RE AT  P L A IN S  C O M M U N IC AT IO NS
The GPC DDoS Attack Protection Service includes network analytics presented via a customer accessible web-based portal.
 
Example #1 - Threat Mitigation Summary – Examples of network attack statistics available with the monitoring service
```

#### Page 11 / 18 — `page-011.png`

```text
DDoS Portal Attack & Mitigation Analytics
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Example #2 –Tracking DDoS Attack Mitigations
```

#### Page 12 / 18 — `page-012.png`

```text
7
DDoS SERVICE PRICING ELEMENTS
G RE AT  P L A IN S  C O M M U N IC AT IO NS
DDoS Proactive Monitoring: 
• 10% uplift to DIA price
On-demand Mitigation (1st mitigation free):
DIA Bandwidth 
 
Price/Mitigation
<100Mb  
 
$100
100Mb to 1Gb 
 
$200
>1Gb to 10Gb 
 
$500
>10Gb   
 
25% of DIA MRC
DDoS Proactive Monitoring and Mitigation
• 15% uplift to DIA price
```

#### Page 13 / 18 — `page-013.png`

```text
DDoS Portal Attack & Mitigation Analytics
G RE AT  P L A IN S  C O M M U N IC AT IO NS
Example #3 –Tracking Denial of Service Attacks
```

#### Page 14 / 18 — `page-014.png`

```text
DDoS Order Entry – Salesforce #1
G RE AT  P L AIN S  C O M M U N IC AT IO NS
How to Quote:  
Add Products window 
shown here → 
Add DIA product and speed 
required (#1 shows already 
added).  
Click on the wrench (#2) to 
configure the DIA product
```

#### Page 15 / 18 — `page-015.png`

```text
DDoS Order Entry – Salesforce #2
G RE AT  P L AIN S  C O M M U N IC AT IO NS
How to Quote:  
This screen will open and 
the DDoS products are 
shown (#3)
```

#### Page 16 / 18 — `page-016.png`

```text
DDoS Order Entry – Salesforce #3
G RE AT  P L AIN S  C O M M U N IC AT IO NS
How to Quote:  
The previous screen shows 
$0, but once selected and 
saved the price will be 
calculated based on the 
underlying DIA speed and 
pricing.  See #4  →
```

#### Page 17 / 18 — `page-017.png`

```text
DDoS Demo Portal
G RE AT  P L A IN S  C O M M U N IC AT IO NS
The GPC DDoS Demonstration 
Portal is a good sales tool to 
introduce the portal to 
customers.  The five tabs at the 
top show the various features 
available in the portal.
You can log into the portal here:
GPC DDoS Portal
User Name:  Demo
Password:  %Password01
Note:  Demo Portal credentials 
are not to be shared with the 
customer.
```

#### Page 18 / 18 — `page-018.png`

```text
GPC DDoS Product
G RE AT  P L AIN S  C O M M U N IC AT IO NS
Questions?
```


<a id="p-21efc64b398da9ac"></a>


### `Sales Rules of Engagement (ROE) - Revised August 2025 (1).pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/Sales Rules of Engagement (ROE) - Revised August 2025 (1).pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/Sales Rules of Engagement (ROE) - Revised August 2025 (1)`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Sales Rules of Engagement 
Revised 8/5/2025 
General Guidelines & Salesforce Protocol 
● 
Source of Truth: Salesforce is the official system of record and will be used to arbitrate any account disputes. 
● 
Account & Contact Creation: 
○ 
Before creating a new account, always search Salesforce by address and name to prevent duplicates. 
○ 
Do not open a second account record for an existing entity. 
○ 
Do not add a new contact with a pre-existing email address. Please coordinate with the current account owner. 
● 
Account Transfers: To request moving an account from another Sales Representative, first connect with the current 
owner to discuss. Once agreed, email your manager and sales leadership for approval and transfer. 
● 
Evolving Rules: These rules are designed to manage the majority of situations (~80%). Unique scenarios will be 
handled on a case-by-case basis by sales management. This document will be updated as the organization evolves. 
 
General Accounts (Non-Strategic) 
This section applies to all accounts NOT on the official Strategic Accounts list. 
● 
Current Customers: 
○ 
An account with a "Customer" status becomes open to be worked by another representative if there is no 
logged activity for 121 days or more. 
○ 
It is always best practice to communicate with the current account owner before engaging with one of their 
accounts, even if it appears open. 
● 
Prospects: 
○ 
An account with a "Prospect" status becomes open if there is no logged activity for 61 days or more. 
○ 
You must keep your accounts updated with relevant information, such as construction projects or contract 
dates. However, notation alone does not protect an account; consistent contact (at minimum, every 60 days) is 
required. 
● 
Inbound Leads: 
○ 
Any lead assigned to you by sales or marketing leadership can be reassigned if initial contact is not made and 
logged within 5 business days. 
○ 
This 5-day rule does not apply to leads that you generate yourself through prospecting. 
 
Strategic Accountss 
This section applies to the Strategic Accounts team and the official, named account list. 
● 
Account Protection: All accounts on the official Strategic Accounts list are considered protected. These accounts 
are not subject to the activity-based rules (e.g., 61 or 121-day rules) outlined below. They are protected by 
assignment, not by activity. 
● 
E-Rate & USAC Funded Entities: All entities, including schools, libraries, and hospitals, that currently utilize or are 
eligible for E-Rate and/or USAC funding are designated as Strategic Accounts and are protected, regardless of 
explicit inclusion on the Strategic Accounts List. Exception: ENA (Education Networks of America) based in Indiana 
will remain under the Out-State Team’s purview.  
● 
Account List Management: The Strategic Accounts list is dynamic and will be reviewed and amended as needed. All 
changes to the list will be managed and communicated by the Sales Managers and the VP of Sales. The official list will 
be maintained and distributed separately from this document and housed within the ROE repository of the Sales 
Sharepoint.
```


<a id="p-f2fe5301d066c46b"></a>


### `UC Competitor Battle Card 031226.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/UC Competitor Battle Card 031226.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/UC Competitor Battle Card 031226`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC UNIFIED COMMUNICATIONS vs. RingCentral and Zoom
SALES BATTLE CARD
QUICK PITCH
While RingCentral is built for giant call centers and Zoom is 
built for video calls, GPC’s Unified Communications solution 
powered by Intermedia is built for your entire business 
workflow. We provide you one integrated platform for 
voice, video, chat and - unlike them - secure file backup with 
antivirus, all backed by local support that actually answers 
the phone.
THIRD-PARTY PROOF & RESOURCES
Uptime Guarantee
9th Consecutive JD Power Award
SecuriSync
Ranked as a “Leader” in the Frost & Sullivan Radar
RELEVANT COLLATERAL
UC Brochure - Abbreviated
UC Brochure - Flipbook
UC Plan Comparison - Internal Only
UC for Teams
Contact Center Data Sheet
OBJECTION HANDLING
Everyone already knows Zoom.
Zoom is great for meetings, but our system keeps your team 
working in one spot so you don’t lose momentum when the 
video ends.
RingCentral has more integrations.
We have the same major integrations like Outlook and 
Salesforce, but ours work right out of the box without needing an 
IT expert to set them up.
Zoom Phone is only $10.
That $10 price is “pay-per-minute”, while our solution covers 
collaboration tools plus unlimited calling and secure file backup.
Is this system for smaller businesses?
While most of our customers are small- to medium-sized, our 
solution is built to support the voice and collaboration needs of 
large enterprises. 
We already use OneDrive.
OneDrive is for storage, but our system includes a one-
click rollback to save your files if you’re ever hit by a virus or 
accidental deletion.
RingCentral’s AI seems better for sales.
You shouldn’t have to pay $30+ extra per person for AI insights 
that we’ve already included in the standard platform.
DIFFERENTIATORS THAT MATTER
Integrated  
Security
Most platforms just share files, but we include 
full backup and antivirus to stop ransomware 
before it starts.
Real Human 
Support
You get a local support team and a partner 
that has won the J.D. Power Award for 
customer satisfaction nine years running.
Included AI
Our AI is built directly into the app to handle 
notes and protect private data without the 
$30 monthly upcharge others demand.
True  
Reliability
Our solution powered by Intermedia 
guarantees 99.999% uptime, which means 
you’ll see less than six minutes of downtime in 
an entire year.
Simple  
Pricing
Our pricing is straightforward and includes 
your features, storage, and even phone 
options without hidden “add-on” fees.
COMPETITOR WEAKNESSES & DISCOVERY QUESTIONS
Company
Weakness
Discovery Questions
RingCentral
You have to jump between three different tabs just to see a 
single customer’s call, text, and voicemail history.
When a customer calls you back after a text, can your 
team see that entire history on one screen without hunting 
through different folders?
Their contracts often include aggressive auto-renewal clauses 
that make it very difficult to switch if you aren’t happy.
If you decided to change providers tomorrow, do you 
know exactly how much notice you’re required to give to 
avoid an automatic renewal?
Zoom
Zoom struggles with traditional office needs like complex call 
routing, multi-level menus, and reliable faxing.
Beyond basic video calls, how complex are your current 
routing and auto-attendant needs, and do you still rely on 
traditional faxing?
By the time you add “unlimited” calling and analytics, that 
“cheap” license often costs more than our all-in bundle.
By the time you add up phone licenses, meetings, and AI, 
what is your actual per-user cost compared to the price 
you saw on their website?
Your IT team will spend hours every week troubleshooting 
“version mismatch” issues and mandatory security updates for 
every employee.
How much time does your IT team spend troubleshooting 
‘user error’ or update issues when employees are just 
trying to join a meeting?
```


<a id="p-5d274269dc49dce2"></a>


### `extracted/OneDrive_1_4-10-2026/Wireless Internet Backup/GPC Wireless Internet 5G Product Launch.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026/Wireless Internet Backup/GPC Wireless Internet 5G Product Launch.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026/Wireless Internet Backup/GPC Wireless Internet 5G Product Launch`

**Page count:** 19

#### Page 1 / 19 — `page-001.png`

```text
GPC PRODUCT LAUNCH 
WIRELESS INTERNET – 5G
BACKUP AND BROADBAND
```

#### Page 2 / 19 — `page-002.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
WHAT ARE WE ANNOUCING?
Confidential        © 2025 Great Plains Communications
Our New 5G Wireless Internet Services 
1.
Wireless Internet Backup – 5G
2.
Wireless Internet Broadband – 5G
• Wireless Internet Backup
• Provides a wireless backup for GPC wireline Internet access – SIA, DIA
• Only active during outage on primary line – fails over and fails back, automatically 
• New 5G Speeds are 4-5 times faster than 4G LTE
• Wireless Internet Broadband
• Full-time wireless Internet access
• Use Case:  Temporary service while waiting for fiber.
• Alternate Use Case:  Redundant Internet Access – Governments, Healthcare, Banks
```

#### Page 3 / 19 — `page-003.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
WHAT ARE WE ANNOUCING?
How fast is 5G?
• Speeds can range from ~100Mbps to >200Mbps
• Compare – LTE Average Range is 20-25Mbps
• Baseline 5G is 4 – 5 times faster than LTE, and could be higher…
• Verizon is rate limited to 100Mbps on our plan
• AT&T tested at 239 Mbps down, 22Mbps up. 
• Remember – Wireless is not like fiber – not symmetrical and every location is different!
• Wireless bandwidth is always best effort - speeds can vary by carrier, location, signal strength 
and quality, proximity to cell tower and other environmental factors. The underlying wireless carrier 
may temporarily slow data speeds if network is busy.
Confidential        © 2025 Great Plains Communications
```

#### Page 4 / 19 — `page-004.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
Key Features
Internet Backup Key Selling Features
• Automatic failover to Verizon or AT&T 5G wireless networks
• Automatic reversion to the primary Internet connection once service is restored
• 5G Wireless bandwidth speeds
• Professional configuration and installation of the Cradlepoint wireless router
• Optional backup battery with up to 8 hours of run time
• Unlimited data usage and on full time Broadband
• After Failover to the cellular wireless network, GPC will limit data rates as follows:
•
After 12GB of daily usage, data speeds are up to 50Mbps 
•
After 20GB of daily usage, data speeds are up to 25Mbps
•
After 30GB or daily usage, data speeds are up to 3Mbps
•
Note:  The underlying wireless carrier may temporarily slow data speeds if network is busy.
Confidential        © 2025 Great Plains Communications
```

#### Page 5 / 19 — `page-005.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
Key Features
Internet Broadband Key Selling Features
• Full Time Wireless Broadband Internet Access
• No network required – ideal for temporary customers waiting for fiber
• 5G Wireless speeds up to 100Mbps and higher.*
• Unlimited data usage, no overage charges, no bandwidth limits
• Professional configuration and installation of the Cradlepoint wireless router
• Optional backup battery with up to 8 hours of run time
*Note: Wireless bandwidth is “Best Effort” - there no guaranteed minimum bandwidth, and the underlying 
carrier may temporarily reduce Internet speeds during times of high usage.
Confidential        © 2025 Great Plains Communications
```

#### Page 6 / 19 — `page-006.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
TARGET MARKETS 
Target Markets – Small Business Examples
•
Healthcare
•
Doctors offices, clinics and pharmacies need on-line 
access to patient records, e-fax and e-prescribing. 
•
Retail
•
Retail Stores and restaurants need Internet access for 
POS terminals and to process credit card orders.
•
Services
•
As applications move to the cloud, financial, Legal, 
Accounting, Insurance services need reliable Internet.
•
Local/City Government
•
Broadband Internet with network/carrier redundancy
Customer Pain Points
1.
Small businesses loose business when the Internet 
goes down and they cannot provide services or sales.
2.
Coffee shop patrons require reliable Internet or they will 
take their business elsewhere.
3.
Payment card processing require reliable Internet 
access or sales cannot be completed.
4.
Without on-line access, companies that rely on cloud 
services will find employees cannot do their jobs.
5.
Redundant landline access is too expensive and too 
complex for most small and medium sized businesses.
Confidential        © 2025 Great Plains Communications
```

#### Page 7 / 19 — `page-007.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
OUR VENDOR PARTNERS
1. Cradlepoint - Ericsson
•
Cradlepoint is the leader of the cellular wireless router 
market with over 28,000 customers in 50 countries.
•
Products are known for high reliability and 
performance = X20 throughput nearly 1Gbps*
•
Router installed on Customer Prem – Managed by 
GPC Internet Service Center (ISC)
•
Back up battery (optional) protects against power 
outages for up to 8 hours.
Cradlepoint E100 LTE Wireless Router
Cradlepoint X20-5G Wireless Router
*Note:  Do not sell with SIA/DIA above 1Gbps!  
Confidential        © 2025 Great Plains Communications
```

#### Page 8 / 19 — `page-008.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
OUR VENDOR PARTNERS
2. Kajeet
•
LTE Wireless Services from Verizon and 
AT&T are provided by Kajeet.
•
Kajeet Sentinel Portal will filter traffic 
during failover to only allow critical 
business traffic over the 5G network.
•
Productivity Filter – Social Media and 
Streaming Services, including Tik Toc, 
Netflix and GPC iTV will be blocked from 
the cellular wireless network during 
failover.
Confidential        © 2025 Great Plains Communications
```

#### Page 9 / 19 — `page-009.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
Installation
• Cradlepoint routers come with dual 5G SIMs from 
Verizon and AT&T 
• During installation - Special software automatically 
measures signal Strength and Quality for each 
carrier.
• SIM with best signal is activated, other deactivated
• Result – Very high install success rate*
Confidential        © 2025 Great Plains Communications
```

#### Page 10 / 19 — `page-010.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
• Cradlepoint Monitors flow of traffic to 
the Internet 
• If an interruption of Internet traffic is 
detected, router will automatically 
switch over to wireless LTE.
• Failover takes around one minute.
• Router will automatically switch back 
to landline when service is restored.
Wireless Backup 5G - Automatic Failover
*Note:  Static IP addresses will work on the GPC landline Internet, but not during failover to the wireless network.  
Confidential        © 2025 Great Plains Communications
```

#### Page 11 / 19 — `page-011.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW DOES IT WORK?
Wireless Internet Broadband
• Cradlepoint forwards traffic from 
customer switch/router to Verizon or 
AT&T 5G network.
• You must pre-qualify 5G availability on 
the carrier Website.
• No static IP on Wireless Internet 
Broadband – IP provided by wireless 
carrier using DHCP, so servers hosted 
on prem will not be reachable from the 
Internet.
Confidential        © 2025 Great Plains Communications
```

#### Page 12 / 19 — `page-012.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
HOW MUCH DOES IT COST?
Wireless Internet Backup and Broadband Pricing and Plans
Product
List Price
Discount
Data Included
Overage Rate
Remarks
LTE Wireless Internet 
Backup*
$45 MRC
Term 
1GB
$9 per 1GB
2yr. Minimum Term
5G Wireless Internet 
Backup*
$68 MRC
Term
Unlimited
None
Carrier will temporarily slow 
data rate after failover
Wireless Internet 
Broadband*
$175.00*
Term
Unlimited
None
Underlying carrier may 
temporarily slow data rate 
during periods of high usage
Optional Battery Backup
NRC - TBD
Term
Battery powers device up to  
8 hours during power failure
*There is no minimum bandwidth associated with Internet Backup or Full Time Wireless Broadband – Wireless is always ‘best effort.’
**Full-time Internet Broadband price.  For Temporary service pricing customer begins billing for SIA or DIA once wireless is installed.
Confidential        © 2025 Great Plains Communications
```

#### Page 13 / 19 — `page-013.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
For 5G Wireless Internet Backup
Add Service Page: 
•
Select Product Family – Internet Services
•
Select Product Line – Wireless Internet (Cellular)
•
Product Names
•
Wireless Internet Backup – 5G
•
Wireless Internet Broadband – 5G
Confidential        © 2025 Great Plains Communications
```

#### Page 14 / 19 — `page-014.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
Note: Customer will be billed at contracted SIA/DIA rate for Wireless Internet until fiber is installed.
For Wireless Internet Broadband (temporary)
• Check boxes on Internet Service Order (SIA/DIA)
1.
Add Solution Check Box  
Confidential        © 2025 Great Plains Communications
```

#### Page 15 / 19 — `page-015.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
SALESFORCE ORDER ENTRY
Note:  Temporary Wireless Service is non-commissionable.
Wireless Internet Broadband (temporary)
• Check box on Internet Service Order (SIA/DIA)
2.
Add Site Check Box 
Confidential        © 2025 Great Plains Communications
```

#### Page 16 / 19 — `page-016.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
THE RULES
Wireless Internet Service Business Rules
• Do not sell outside of GPC territory
• Exception – May be sold to multi-location customer with some off-net sites and within driving distance of 
Field Technicians.  Approval required.
• NRC Install Charge applies to customers outside of normal operating areas.
• Wireless Internet Services must be sold only to new and existing customers of SIA, DIA or SD-WAN.
• Wireless Broadband (temporary) services may be converted to Backup services following fiber install.
• There are no SLA guarantees – all wireless services are “Best Effort.”
Confidential        © 2025 Great Plains Communications
```

#### Page 17 / 19 — `page-017.png`

```text
OVERVIEW
G P C  P R O D U C T  L A U N C H
MARKETING COLLATERAL
Product Data Sheet
Battlecard
Confidential        © 2025 Great Plains Communications
```

#### Page 18 / 19 — `page-018.png`

```text
Resources
G P C  P R O D U C T  L A U N C H
For More Information:
All Sales/Marketing Collateral is available on the Sales 
Resources Page. 
Confidential        © 2025 Great Plains Communications
```

#### Page 19 / 19 — `page-019.png`

```text
QUESTIONS?
G P C  P R O D U C T  L A U N C H
Confidential        © 2025 Great Plains Communications
```


<a id="p-154eaeae2621c927"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Cloud Connect/Cloud Connect 011725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Cloud Connect/Cloud Connect 011725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Cloud Connect/Cloud Connect 011725`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC 
CLOUD CONNECT
GPC Cloud Connect transforms the way businesses reach leading cloud services by providing 
a fast, flexible and secure connection to Amazon Web Services (AWS), Microsoft Azure, Google, 
Oracle, IBM, SAP, Nutanix, Salesforce and Alibaba.
Add GPC Cloud Connect to your Managed Ethernet network to begin accessing Cloud content 
over your secure, private and direct connection. This direct conection provides reliable and 
predictable network performance and increased efficiencies due to reduced latency.
FEATURES & BENEFITS
	›
Provides a fast, flexible and secure direct connection to multiple leading Cloud and 
Network Providers on our Cloud ecosystem
	›
Establishes connectivity without the need to own or manage a physical network
	›
Secures traffic when connecting between metros and regions
	›
Provides multi-region redundancy by connecting to multiple Cloud regions from a single 
interconnection point
	›
Provides direct Cloud connections with speeds up to 10 Gbps
CloudConnect011725
OMAHA
CHICAGO
DENVER
CLOUD ECOSYSTEM
Great Plains Communications
TRANSPORT NETWORK
```


<a id="p-f80a74e36ceb02f9"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Product Sheet 012025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Product Sheet 012025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Product Sheet 012025`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC 
DDOS PROTECTION
Distributed Denial of Service (DDoS) Protection provides global, cloud-based traffic analysis and threat 
detection combined with rapid attack mitigation. This multi-layered approach to DDoS protection is an 
Enterprise best practice for mitigating today’s dynamic multi-vector DDoS attacks.
GPC’s automated or on-demand attack traffic scrubbing service, backed by teams of network security 
experts, defends your organization against high-volume DDoS attacks that threaten to block customers 
from accessing websites and applications.
Proactive DDoS Protection
	›
Monitoring portal with network 
traffic analysis 
	›
24x7 automated DDoS monitoring and 
notifications
	›
24x7 automated DDoS mitigation
	›
Bandwidth-based thresholds per customer
	›
Bandwidth from 10 Mbps to 100 Gbps
	›
BGP FlowSpec and TMS protection
On-Demand DDoS Protection
	›
Monitoring portal with network traffic 
analysis 
	›
24x7 automated DDoS monitoring and 
notifications
	›
On-demand mitigation available weekdays 
from 8 am to 5 pm
	›
Bandwidth-based thresholds per customer
	›
Bandwidth from 10 Mbps to 100 Gbps
	›
BGP FlowSpec
FEATURES
HOW IT STOPS MODERN-DAY DDoS ATTACKS
INTERNET
Great Plains Communications
NETWORK
Automatically stop short-
lived or application layer 
DDoS attacks on websites
Intelligent communication 
between cloud protection 
to address dynamic attack 
vectors
Stop large attacks in the 
cloud
Backed by continuous threat 
intelligence in the TMS 
scrubbing center
```

#### Page 2 / 2 — `page-002.png`

```text
GPC DDoS REPORTING ANALYTICS
DDoS PORTAL NETWORK TRAFFIC ANALYTICS
DDoS012025
```


<a id="p-6614530fd48d9d85"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Reporting Terms 011725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Reporting Terms 011725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Reporting Terms 011725`

**Page count:** 3

#### Page 1 / 3 — `page-001.png`

```text
GPC DDoS
PORTAL REPORTING
BGP TRAFFIC
DESCRIPTION
ASNs (All)
This report shows in and out data for a select customer, broken down 
by aggregate ASNs (origin and transit). Select which customer’s data is 
displayed from the Customer drop-down menu.
ASNs (NULL)
This report shows in and out data for a selected customer for locally 
sourced or destined traffic based upon iBGP-only traffic. Select which 
customer’s data is displayed from the Customer drop-down menu.
ASNs (Origin)
This report shows in and out data for a selected customer, broken 
down by origin ASNs. Select which customer’s data is displayed from 
the Customer drop-down menu.
ASNs (Peer)
This report shows in and out data for a selected customer, broken 
down by transit ASNs. Select which customer’s data is displayed from 
the Customer drop-down menu.
NextHop
This report shows source and destination traffic data for a selected 
customer, broken down by NextHop. You can select which customer’s 
data is displayed from the Customer drop-down menu.
GEOGRAPHIC INFORMATION
DESCRIPTION
Cities
This report shows traffic in and out of a selected customer broken 
down by the backbone city of origin.
Countries
This report shows traffic in and out of a selected customer broken 
down by the external geographic region of origin.
Regions
This report shows traffic in and out of a selected customer broken 
down by the external geographic region of origin.
IP INFORMATION
DESCRIPTION
ICMP
This report shows the traffic flowing into and out of a given customer, 
broken down by pairings of ICMP types and ICMP codes.
Packet Size
This report shows traffic flowing into and out of a customer, sorted by 
packet size.
Protocols
This report shows traffic flowing into and out of a given customer, 
broken down by IP protocol.
TCP Applications
This report displays the traffic going in and out of a selected customer 
for the top TCP applications observed, broken down by application 
port.
UDP Applications
This report displays the traffic going in and out of a selected customer 
for the top UDP applications observed, broken down by application 
port.
```

#### Page 2 / 3 — `page-002.png`

```text
NETWORK RESOURCES
DESCRIPTION
Routers
This report shows the in, out and total traffic by router.
Traffic Through Local Boundary 
Interfaces
This report shows the in, out and total traffic for each interface.
Traffic Through Network Boundary 
Interfaces
This report shows the customer traffic flowing into and out of your 
network, broken down by network boundary interface.
SECURITY
DESCRIPTION
Baselines
This report visualizes a customer’s profiled network baseline over 
different time frames.
Fingerprints
This report shows in and out data for a selected customer, by 
fingerprint.
SERVICES & APPLICATIONS
DESCRIPTION
All Applications
This report shows the traffic flowing into and out of a customer, 
broken down by application.
DSCP (Differentiated Services
Code Point)
This report tracks the amount of traffic for each type of service (TOS) 
seen for a selected customer as specified by the DSCP interpretation 
of the TOS bits.
IP Precedence
This report tracks the amount of traffic for each TOS precedence 
setting seen for the selected customer. The precedence is 
represented by three bits in the TCP header of a packet. The higher 
the integer value of these bits, the more precedence is given to that 
traffic.
Type of Service
This report tracks the amount of traffic for each TOS seen for a 
selected customer.
Type of Service (DTRM)
This report tracks the amount of traffic for each TOS seen for a 
specified customer as specified by the four TOS bits (3, 4, 5 and 6) in 
the eight bit TOS field for each packet.
TOP TALKERS
DESCRIPTION
Top Talker Destinations
This report shows a traffic graph and a table of the 100 hosts external 
to a given customer that are consuming the most bandwidth for that 
customer.
Top Talker Destinations IPv6
This report shows a traffic graph and a table of the 100 hosts external 
to a given customer that are consuming the most bandwidth for that 
customer.
Top Talkers
This report shows a comparison graph and table of the peak traffic 
rate for the top 100 hosts matching a specified customer.
Top Talkers IPv6
This report shows a comparison graph and table of the peak traffic 
rate for the top 100 hosts matching a specified customer.
```

#### Page 3 / 3 — `page-003.png`

```text
TRANSIT
DESCRIPTION
Remote BGP NextHop
This report shows how much transit traffic passes in and out of a 
selected customer through each customer-facing NextHop. For traffic 
in to the selected customer, this corresponds to the NextHop for the 
BGP route matching the destination of the traffic (i.e. that will be used 
to forward the traffic to the customer). For traffic out of the selected 
customer, it corresponds to the NextHop for the BGP route matching 
the source of the traffic (i.e. that the traffic passes over from the 
customer to the monitored network). 
Remote Origin AS
This report shows how much traffic passes in and out of a selected 
customer and transits the customer through each remote origin 
AS. A remote origin AS is an origin AS on the opposite side of the 
customer’s network. For traffic in to the selected customer, this 
corresponds to the destination AS of the traffic. For traffic out of the 
selected customer, it corresponds to the source AS of the traffic.
OTHER
DESCRIPTION
Compare
This report displays a graph and data table showing the amount 
of in and out traffic per customer. This can help identify network 
performance or connectivity issues.
Raw Flows
This report shows the last 10 sampled flows through the selected 
customer.
Summary
This report displays traffic for a selected customer classified by traffic 
types: in, out, dropped, backbone and total traffic seen. The total 
category combines all other types mentioned.
DDoSReporting011725
```


<a id="p-060778291bdf6c0b"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Ethernet CoS Data sheet 2025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Ethernet CoS Data sheet 2025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Ethernet CoS Data sheet 2025`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC ETHERNET
CLASS OF SERVICE
Ethernet Class of Service (CoS) provides our customers a standard for a higher level of service 
commitment from Great Plains Communications (GPC). CoS offers three service levels in 
addition to standard traffic for Ethernet Private Line (EPL), Ethernet Virtual Private Line (EVPL) or 
Ethernet Local Area Network (ELAN) products. When CoS is selected, network performance must 
meet the GPC service level objective defined in Table 2. 
BENEFITS
	›
Provides a multi-tiered service commitment for customers needing assurance of higher 
network performance
	›
Offers network analytics that are readily available for ad hoc reporting
CoS Priority Level
Common Service Usage
Real-Time
Real-time CoS is optimal for low latency, low jitter and low packet loss 
performance required for voice communications. All Managed Voice 
over IP (VoIP) services should be defaulted to real-time CoS.
Mission Critical
Mission critical CoS is intended for applications with high business 
value, requiring large bandwidth allocations and/or lower latency 
such as interactive video conferencing, streaming video, credit card 
transactions and Enterprise Resource Planning (ERP) applications like 
SAP or PeopleSoft.
Business Class
Business critical data CoS is intended for transactional and interactive 
data such as email or client/server applications.
Standard
(Default)
Standard data CoS is for customers who have latency and jitter 
tolerant data applications.
Table 1: Common CoS Applications
```

#### Page 2 / 2 — `page-002.png`

```text
Objective
Real-Time
Mission 
Critical
Business 
Class
Standard
Availability - Standard
99.99%
99.99%
99.95%
99.9%
Availability - Protected
99.999%
99.999%
99.999%
99.999%
Round Trip Jitter
≤ 3ms
≤ 5ms
≤ 8ms
≤ 15ms
Round Trip Latency
0-400 miles
≤ 18ms
≤ 2ms
≤ 25ms
≤ 30ms
Mean Time to Repair 
(MTTR)
4 hours
4 hours
4 hours
4 hours
Packet Loss/Frame Loss 
Ratio
≤ 0.01%
≤ 0.05%
≤ 0.5%
≤ 0.5%
Table 2: SLA Objectives
DEFINITIONS
Availability
The percentage of total time a service is operational
Jitter
The variation in the end-to-end delay between received packets of an IP or 
packet stream
Latency
The measure of the average time required for a packet to travel round-trip
Packet Loss
The percentage of in-profile Internet frames not reliably delivered
CoS011725
```


<a id="p-e9c9080b7892be64"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Managed Ethernet Product Sheet 060625.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Managed Ethernet Product Sheet 060625.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Managed Ethernet Product Sheet 060625`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC 
MANAGED ETHERNET
PRODUCTS
What is E-Line?
Ethernet Line (E-Line) is a platform-agnostic, layer 2 point-to-point or point-to-multipoint service that 
can traverse between any two or more customer locations located in the Midwest. GPC E-Line service is 
protected within the core and can be ordered as Ethernet Private Line or Ethernet Virtual Private Line.
Ethernet Private Line (EPL) - This service type is a point-to-point port-based service that is intended to 
be highly transparent in the sense that service frames sent are delivered with as few modifications as 
possible. Traffic within these frames is managed by the customer.
MANAGEDETHERNET012725
CUSTOMER
EQUIPMENT
CUSTOMER
EQUIPMENT
METRO
EDGE
METRO
EDGE
ETHERNET VIRTUAL CONNECTION (EVC)
UNI
UNI
Ethernet Virtual Private Line (EVPL) - This service type is a point-to-point or point-to-multipoint Virtual 
Local Area Network (VLAN)-based service where Great Plains Communications (GPC) manages the VLANs 
for the customer.
MULTIPLEXED
CUSTOMER
EQUIPMENT
SHARED OR DEDICATED ETHERNET VIRTUAL CONNECTION (EVC)
UNI
UNI
```

#### Page 2 / 2 — `page-002.png`

```text
What is E-LAN?
Ethernet Local Area Network (E-LAN) is a platform-agnostic, layer 2 multipoint-to-multipoint service that 
connects a number of customer locations via two or more User Network Interfaces (UNIs) providing full 
mesh connectivity for customer locations located in the Midwest. Each UNI can communicate with any 
other UNI that is connected to the Ethernet service. GPC supports EP-LAN and EVP-LAN configurations.
CUSTOMER
EQUIPMENT
CUSTOMER
EQUIPMENT
CUSTOMER
EQUIPMENT
MULTIPOINT-TO-MULTIPOINT EVC
BENEFITS & FEATURES
	›
Provides access to over 29 data centers and carrier hotels in Omaha, Denver, Kansas City, 
Minneapolis, Des Moines, Chicago, Indianapolis and more across the Midwest
	›
Helps control the cost of connecting multiple sites with point-to-point, point-to-multipoint or 
multipoint-to-multipoint configurations
	›
Supports speeds up to 100 Gbps with predictable, low-latency transport
	›
Operates on GPC’s MEF-certified fiber network
	›
Includes a Service Level Agreement (SLA) supported 24x7x365 by the Network Operations 
Center (NOC) in Blair, Nebraska
	›
Network Performance Monitoring Portal provides real-time visibility and reporting
	›
Available proactive DDoS monitoring and mitigation
	›
Network Performance Monitoring portal
MANAGEDETHERNET012725
```


<a id="p-43a4d7285d84e316"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/2025 Fiber over Cable Modem.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/2025 Fiber over Cable Modem.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/2025 Fiber over Cable Modem`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
BENEFITS OF 
FIBER INTERNET
OVER CABLE MODEM
WHAT’S THE DIFFERENCE?
Fiber optic Internet uses flexible strands of glass that transmit light over a dedicated line. Fiber is 
a scalable service that allows businesses to increase their bandwidth as needed to keep up with the 
everchanging pace of technology.
Traditional modem Internet transmits information over existing cable TV infrastructure. This is 
typically not a dedicated service, meaning the connection is shared, creating more traffic congestion. This 
type of service is more prone to outages and speed limitations.
FIBER IS THE CLEAR CHOICE
FIBER
CABLE MODEM
BANDWIDTH 
POTENTIAL
Fully scalable up to 100 Gbps
Scalability Limitations
UPLOAD/DOWNLOAD
Symmetrical Speeds
Asymmetrical - less upload versus 
download
CONNECTION 
QUALITY
Uncongested with no delay or lag
Dated infrastructure with more 
potential failure points
RELIABILITY
Consistent, durable and predictable
Shared, unpredictable connection
COST
Premium service at a competitive 
cost, built for fast return on 
investment due to streamlined 
services and processes
Less flexibility and more outages 
can end up costing your business in 
the long run
```


<a id="p-028c132b196dbb4a"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs 5G one sheet 2025 072125.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs 5G one sheet 2025 072125.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs 5G one sheet 2025 072125`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
5G VERSUS FIBER 
WHAT’S BEST FOR 
YOUR BUSINESS?
5GvsFiber072125
In today’s always-on world, businesses are constantly evaluating Internet providers to determine the best fit 
for their connectivity needs. While 5G offers mobility and flexibility, fiber Internet delivers the speed, reliability 
and bandwidth needed for powering today’s business operations, remote work, Cloud applications and more. 
Understanding the difference between these two technologies is key to making an informed decision about 
long-term connectivity.
While 5G is a powerful mobile solution with growing potential, fiber Internet remains the gold standard for 
consistent, high-performing connectivity. Its ability to deliver symmetrical speeds, low latency and reliability 
makes it ideal for businesses that demand an always-on connection. For organizations prioritizing speed, 
security and scalability, fiber is the future-ready foundation to depend on.
Fiber 
5G
Supports business growth and high 
bandwidth needs


Low latency service for real-time applications


More reliable - less prone to interference from 
weather, network traffic or other obstacles


Ideal for large data use


Offers a high level of security


Provides consistent speeds and performance


Offers portability and flexibility


Lower up-front costs


```


<a id="p-65176eb0f5e993ac"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs Starlink Battlecard.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs Starlink Battlecard.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Fiber Delivery/Fiber vs Starlink Battlecard`

**Page count:** 8

#### Page 1 / 8 — `page-001.png`

```text
Competitive Battle Card
TABLE OF CONTENTS
• Quick Sales Pitch
• Key Selling Points for Fiber
• Starlink Pain Points
• Qualifying Questions
• Ideal Customers for Fiber Internet
• The Challenge of Starlink and How 
to Respond
• Latency Requirements for Business Apps
Fiber versus 
Starlink
1/28/2026
```

#### Page 2 / 8 — `page-002.png`

```text
Go To First Slide
Businesses need fast, stable, and always-on 
Internet. Low Earth Orbit (LEO) satellite such as 
Starlink offers high-speed internet service, but its 
performance depends on weather, sky visibility 
and shared constellations. Latency swings and 
environmental factors can impact real-time 
applications, and the hardware is expensive for a 
small business budget.
Great Plains Communications delivers true 
fiber-to-the-premises connectivity, offering 
unmatched reliability, symmetrical speeds, 
and local support all at an affordable price, 
benefits satellite technology simply cannot 
match.
Quick Sales 
Pitch
1/28/2026
```

#### Page 3 / 8 — `page-003.png`

```text
Go To First Slide
Why Fiber Key Selling Points
Symmetrical Speeds
Great Plains Communications fiber Internet for business provides symmetrical upload and 
download speeds that are critical for video calls, Cloud syncing and remote work.
Increased Efficiencies
As the need to transfer higher levels of data increases, speed and uptime are more important than 
ever. Fiber Internet from  Great Plains Communications allows you to work efficiently to serve your 
customers, meet your goals and advance your company’s plans with fully scalable business internet 
solutions.
Fiber-Level Reliability
Fiber isn't affected by rain fade, snow buildup or dish obstruction, so you’ll never have to worry 
about the weather affecting the quality of your connectivity.
Ultra-Low Latency
Fiber latency is dramatically lower and more consistent than satellite.
Scalable Bandwidth
Fiber scales for business growth and can support multiple users and devices. Meet all the network 
requirements for any size business with fast, reliable internet from the top business Internet 
provider in the Midwest.
Local Support and 
Dedicated Network
Great Plains Communications provides local technicians and engineers working to monitor progress 
and keep you connected. With a 24/7/365 Network Operations Center, we provide around-the-clock 
network monitoring for rapid response to outages and alarms.
1/28/2026
```

#### Page 4 / 8 — `page-004.png`

```text
Go To First Slide
Starlink Pain Points
PAIN POINT
HOW GPC SOLVES THIS WITH FIBER
Weather events cause service degradation at the 
exact times businesses need reliability most.
Enterprise-grade, fiber-level reliability immune to 
weather impacts.
POS systems, VoIP, and cloud applications struggle 
with satellite latency.
Consistent, ultra-low latency ideal for cloud 
workflows, VPN connections, and real-time 
communication.
Peak-time congestion reduces speed as satellite 
cells become saturated.
Dedicated, symmetrical bandwidth, enabling fast 
uploads and backups and enabling scalability.
Starlink antennas require clear sky access and 
proper roof placement, and self-installed satellite 
can lead to frustrations and mistakes, causing 
multiple inefficiencies across multiple areas.
Great Plains Communications performs a full 
evaluation of your technological needs and offers 
local installation and support.
1/28/2026
```

#### Page 5 / 8 — `page-005.png`

```text
Go To First Slide
Qualifying Questions for Fiber Internet
How many employees or 
devices rely on the Internet 
in this location?
What applications or 
systems are critical to your 
business (POS, VoIP, video 
conferencing, etc.)?
Do you need guaranteed 
uptime or SLAs?
How many employees or 
devices rely on the Internet 
in this location?
What applications or 
systems are critical to your 
business (POS, VoIP, video 
conferencing, etc.)?
1/28/2026
```

#### Page 6 / 8 — `page-006.png`

```text
Go To First Slide
Target businesses: 
• Have high upload requirements (healthcare, 
media, financial services)
• Require predictable performance for POS, 
VoIP or Cloud operations
• Include local governments, schools or 
municipal offices
• Are seeking a long-term, scalable Internet 
solution
• Are rural and need dependable service 
unaffected by environmental conditions
Ideal Customers for Fiber Internet
1/28/2026
```

#### Page 7 / 8 — `page-007.png`

```text
Go To First Slide
1/28/2026
The Challenge of Starlink and How to Respond
CHALLENGE
Starlink is marketed as a 
universal, high-speed 
option for rural or 
underserved areas and.
Starlink is seen as an 
advanced, high-speed 
satellite service available 
almost anywhere and 
may appear to match 
fiber speeds in ideal 
conditions.
RESPONSE
Great Plains 
Communications Business 
Fiber Internet provides 
reliability, latency, and 
performance that satellite 
simply cannot replicate. 
With local support and 
real-time monitoring, it is 
the superior choice for any 
business using cloud, 
communications, or real-
time systems.
```

#### Page 8 / 8 — `page-008.png`

```text
Go To First Slide
Fiber versus Starlink Latency
Fiber
5-15ms
Starlink
21-30ms
Use Cases for Low Latency
App/Use
Latency Requirement
Video Calls
< 50ms
VoIP Calls
< 150ms
POS Systems*
< 100ms
VPN**
< 100ms
Cloud Apps
< 100ms
Remote Support Tools
< 100ms
Latency Requirements for Business Apps
1/28/2026
* These numbers are based on latency needed for 
general POS applications.
** VPNs can increase latency on the connection, so 
lower latency is important to ensure optimal 
performance. Latency will also be impacted by 
the speed and location of the VPN servers.
```


<a id="p-f118a2174a11e1c5"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/GPC iTV for Business/GPC iTV Product Sheet 2024.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/GPC iTV for Business/GPC iTV Product Sheet 2024.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/GPC iTV for Business/GPC iTV Product Sheet 2024`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Keep customers engaged with GPC iTV, our latest streaming 
TV solution.
GPC iTV brings you the most popular channels and the latest features, such as Cloud DVR 
and Replay TV, over your existing GPC Internet connection. Whether you run a small mom-
and-pop shop or a larger business, our GPC iTV solution is customizable to businesses of all 
sizes and industries.
WHY CHOOSE GPC iTV?
*Some businesses and/or TV set-ups may require the use of set top boxes, available at a low monthly rate
FEATURES
GPC iTV
REPLAY TV
CLOUD DVR
HD CHANNELS
POPULAR 
SPORTS 
CHANNELS
LOCAL 
CHANNELS
Save money on monthly equipment and DVR rentals*
Local channels included, allowing you and your customers to 
stay on top of local events and weather
Convenient single bill for multiple services
Scan the QR code to learn more 
and view your local lineup.
```


<a id="p-8b155cba0a31aac5"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA Product Sheet 120424.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA Product Sheet 120424.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA Product Sheet 120424`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC 
DEDICATED INTERNET 
ACCESS
A consistent, secure connection for your business
Businesses today rely on consistent, reliable Internet connectivity to power the day-to-day operations of 
their organizations. To ensure constant connectivity and consistent bandwidth to power your most vital 
applications, choose Dedicated Internet Access (DIA) from Great Plains Communications (GPC). DIA offers 
a high-performing, private connection to the Internet that delivers symmetrical upload and download 
speeds for uninterrupted Internet access, backed by a company with over a century of experience 
providing forward-thinking technology solutions to businesses across the Midwest. 
BENEFITS OF DIA
KEY FEATURES
	›
Low latency
	›
Multiple router and access diversity options
	›
Symmetrical bandwidth up to 100 Gbps
	›
Dedicated contiguous IP addressing
	›
Three static IP addresses included
	›
24x7x365 NOC support and notifications
	›
Available proactive DDoS monitoring and 
mitigation
	›
Network Performance Monitoring portal
DIA120324
LOW LATENCY
Improve application 
performance with a premium, 
low latency service with an 
average delay of less than 
seven milliseconds
DEDICATED INTERNET 
CONNECTION
Ensure reliable and 
uninterrupted connectivity with 
a private, secure connection 
with dedicated bandwidth
SYMMETRICAL BANDWIDTH
Reduce internal network 
congestion and boost employee 
productivity with symmetrical 
upload and download speeds
ENHANCED SUPPORT
Service level commitments 
supported by our 24x7x365 
Network Operations Center 
(NOC)
```


<a id="p-5e84ca22286e907a"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA vs SIA Comparison 110424.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA vs SIA Comparison 110424.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA vs SIA Comparison 110424`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
COMPARING
STANDARD & DEDICATED 
INTERNET
STANDARD 
INTERNET ACCESS
DEDICATED 
INTERNET ACCESS
FEATURE 
COMPARISON
Multiple delivery methods - 
ﬁber, copper and coax
Asymmetrical  and symmetrical 
speeds up to 2 Gbps 
Symmetrical speeds up to 
100 Gbps
1 static IP address included
3 static IP addresses included
GPC network-level DDoS 
protection
Customer-speciﬁc, proactive 
DDoS monitoring and mitigation
Standard latency service with 
best-eﬀort objectives
Premium low-latency service 
with performance objectives
24x7x365 Tier 1 Internet 
Service Center
24x7x365 Network Operations 
Center (NOC) for enhanced 
support and monitoring
Standard
Standard with multiple diverse 
access options available
Shared
Fiber
Dedicated
DIAvsSIA110424
```


<a id="p-c810ab1369be9172"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Internet/SIA product sheet 120324.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/SIA product sheet 120324.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Internet/SIA product sheet 120324`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC 
STANDARD INTERNET 
ACCESS
Fast, reliable Internet to fit your business - and your budget
Keep your business on the fast track with Standard Internet Access (SIA). With speeds up to 2 Gbps, 
our fully scalable SIA solution offers a cost-effective Internet connection that meets the needs of your 
business today while enabling growth in the future.
SIA120324
BENEFITS OF SIA
KEY FEATURES
	›
Static IP address included
	›
Symmetrical and asymmetrical 
bandwidth options
	›
24x7x365 technical support
	›
DDoS attach mitigation on the GPC 
fiber network
	›
Direct peering with Google, Facebook, 
Amazon and Netflix
	›
Mutliple geographically diverse 
Internet Service Providers (ISPs) and 
Internet Exchange Points (IXPs)
REDUNDANT SERVICE
HIGH BANDWIDTH
24X7 SUPPORT
Superior reliability operating 
over our fully redundant IP 
core network on protected 
Layer 2 transport backbone
Connect all devices and 
applications with Internet 
speeds up to 2 Gbps
Access to our 24x7x365 level 
1 Technical Support Team
GPC Internet 
Access Router
GPC Internet 
Access Router
Transport
Ring
GPC Highly-Redundant
IP Core
ISP/IXP 1
ISP/IXP 2
ISP/IXP 3
XGSPON
ONT: Optical Network Terminal
NID: Network Interface Device
XGSPON: 10 Gbps Symmetrical Passive Optical Network
POP: Point of Presence
```


<a id="p-2ab3e37484047b2b"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Firewall data sheet 032026.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Firewall data sheet 032026.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Firewall data sheet 032026`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
MANAGED FIREWALL
powered by Fortinet®
Secure your business continuity with managed defense
In an era of sophisticated cyber threats, your network security shouldn’t be a source of stress. GPC’s 
Managed Firewall service, powered by Fortinet®, provides a proactive defense strategy that lets you focus 
on your business while we handle the complexity of your security infrastructure. 
Comprehensive protection for every attack surface
*Fortinet is the leader in network firewalls. Gartner® Magic Quadrant™ for Network Firewalls.
Expert-led security covering every threat and blind spot
EXTEND YOUR IT AND SECURITY STAFF
Certified Security Operations Center (SOC) engineers provide 24/7 network monitoring 
and management, ensuring expert oversight around the clock.
BE PREPARED FOR ZERO-DAY THREATS
Inline Malware Prevention and real-time updates from FortiGuard Labs block 
unknown threats in sub-seconds, stopping attacks before they gain traction. 
SECURE YOUR HYBRID WORKFORCE
Secure your hybrid workforce with Zero-Trust Network Access (ZTNA), providing 
verified and encrypted access from anywhere.
GAIN VISIBILITY INTO YOUR NETWORK ACTIVITY
Eliminate the guesswork with centralized Cloud-based management from a “single 
pane of glass” view and simplify how you identify and remediate risks. 
MEET REGULATORY REQUIREMENTS
Simplify your next audit with a managed firewall solution that supports compliance 
for HIPAA, CIPA, PCI-DSS, GDPR and others through advanced log analytics, required 
reporting and audit trails.
We provide more than just a 
firewall; we provide a shield. 
Our Managed Firewall solution 
includes the design and 
deployment of industry-leading 
FortiGate appliances equipped 
with Enterprise and Unified 
Threat Protection.
Intelligent Network Defense: Our solution uses machine 
learning for real-time threat detection and Intrusion Protection 
Services (IPS) to stop malicious traffic.
Safe Browsing & Content Controls: Protect your team from 
phishing attempts and inappropriate content with advanced IP 
and URL filtering and DNS-level security.
Seamless Transition: Our solution translates your existing 
configurations into a smooth, error-free migration.
```

#### Page 2 / 2 — `page-002.png`

```text
ManagedFirewall032026
Office Platforms
Small Office
FG-30G
Medium Office
FG-50G
Large Office
FG-70G
Hub/HQ Office
FG-90G
Firewall Throughput (Ethernet 1518 Byte)
4 Gbps
5 Gbps
10 Gbps
28 Gbps
IPsec VPN Throughput (512 Byte)1
3.5 Gbps
4.5 Gbps
7.1 Gbps
25 Gbps
IPS Throughput (Enterprise Mix)2
800 Mbps
2.25 Gbps
2.5 Gbps
4.5 Gbps
NGFW Throughput (Enterprise Mix)2,4
570 Mbps
1.25 Gbps
1.5 Gbps
2.5 Gbps
Threat Protection Throughput (Enterprise Mix)2,5
500 Mbps
1.1 Gbps
1.3 Gbps
2.2 Gbps
SSL Inspection Throughput (IPS, avg. HTTPS)3
400 Mbps
1.3 Gbps
1.4 Gbps
2.6 Gbps
Max G/W to G/W IPSEC Tunnels
200
200
200
200
Interfaces
1 GE WAN, 3 GE LAN
1 GE WAN, 4 GE LAN
2 GE WAN, 8 GE LAN
2x Shared Port Pairs
2 GE WAN, 8 GE LAN
2x 10 GE Shared
Power Supplies (PS)
Single AC
Single AC
Single AC, Dual Inputs
Single AC, Dual Inputs
Form Factor
Desktop
Desktop
Desktop
Desktop
Data Center Platforms
Small Data Center
FG-100F
Medium Data Center
FG-120G
Large Data Center
FG-400F
Firewall Throughput (Ethernet 1518 Byte)
20 Gbps
39 Gbps
79.5 Gbps
IPsec VPN Throughput (512 Byte)1
11.5 Gbps
35 Gbps
55 Gbps
IPS Throughput (Enterprise Mix)2
2.6 Gbps
5.3 Gbps
12 Gbps
NGFW Throughput (Enterprise Mix)2,4
1.6 Gbps
3.1 Gbps
10 Gbps
Threat Protection Throughput (Enterprise Mix)2,5
1 Gbps
2.8 Gbps
9 Gbps
SSL Inspection Throughput (IPS, avg. HTTPS)3
1 Gbps
3 Gbps
8 Gbps
Max G/W to G/W IPSEC Tunnels
2,000
2,000
2,000
Interfaces
2x 10 GE SFP+, 18x GE RJ45, 
4xShared Port Pairs, 8x GE SFP
4x 10 GE SFP+, 18x GE RJ45, 
8x GE SFP
8x 10GE SFP+ , 8x GE SFP,  
18 x GE RJ45
Power Supplies (PS)
Dual AC
Dual AC
Dual AC
Form Factor (Rack Mount)
1 RU
1 RU
1 RU
All performance values are “up to” and vary depending on system configuration. GE = Gigabit Ethernet.
1.	
IPsec VPN performance test uses AES256-SHA256.
2.	
IPS, Application Control, NGFW and Unified Threat Protection (UTP) are measured with Logging enabled.
3.	
SSL Inspection performance values use an average of HTTPS sessions of different cipher suites.
4.	
NGFW performance is measured with Firewall, IPS and Application Control enabled, Enterprise Mix traffic.
5.	
Threat Protection performance is measured with Firewall, IPS, Application Control, and Malware Protection enabled, Enterprise Mix traffic.
Platform & performance specifications
Right-sized security for your operations
Whether securing a small branch office or a massive data center, GPC’s performance-matched solution 
ensures security never becomes a bottleneck for your business. 
Office Solutions
Data Center Solutions
From small offices to high-capacity hubs, we 
are able to scale our security solutions to 
meet your specific needs.
For high-demand environments, our rack-
mounted firewall solutions deliver the 
throughput and processing power needed 
to handle encrypted data at scale.
```


<a id="p-b3432cb05059e0bf"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Network Security data sheet 062025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Network Security data sheet 062025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Network Security data sheet 062025`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
MANAGED NETWORK 
SECURITY
Elevate your Network Security
A recent survey found that 95% of IT managers view aligning security with networking as critical1. Our 
Managed Network Security services deliver advanced protection, regulatory compliance and tailored 
security solutions—keeping your network secure and your business protected.
1. Comcast-Masergy, 2023.
2. Fortinet is the leader in network firewalls. Gartner® Magic Quadrant™ for Network Firewalls, 2022.
MANAGED FIREWALL
Fully managed Fortinet Next-Generation Firewalls with 24/7 monitoring, advanced 
threat detection, VPN access, and optional zero-trust security—all backed by a 
dedicated Security Operations Center (SOC)
FIREWALL MANAGEMENT
24/7 management and monitoring of your existing firewalls, including design, 
configuration, updates, and custom security policies—ensuring optimal performance 
and protection across leading vendors like Cisco, Fortinet, Palo Alto, and more
FIREWALL PLUS WITH MANAGED SIEM
Data analysis from network devices, prioritizing threats and providing actionable 
insights along with log management and retention
FIREWALL & ENTERPRISE SECURITY ASSESSMENTS
Assessments to evaluate your architecture, policies and devices to identify 
vulnerabilities and provide remediation recommendations
VULNERABILITY SCANNING
Regular detection of network weaknesses through active and passive monitoring, 
with expert consultation and remediation guidance to ensure compliance
MANAGED EMAIL SECURITY
AI-driven threat protection to safeguard cloud-based platforms like Microsoft 365 
and Slack, blocking threats and enforcing DLP policies
```

#### Page 2 / 2 — `page-002.png`

```text
ADDITIONAL RESOURCES
View and download the Gartner® Magic 
Quadrant™ report for Fortinet network firewalls.
ManagedNetSecurity062025
Benefits of Fully Managed Security Services
On-site tech support available 
anywhere in the United States for 
the initial installation as well as 
ongoing management
No up-front capital expenses
Professional network design and 
firewall configuration for optimal 
protection, customized for your  
business needs
Regular software updates and 
patches to maintain firewall 
effectiveness
Lower total cost of ownership
Multiple tools available to keep 
your organization in compliance 
with PCI DSS, HIPAA, SOX 
and others
24x7x365 proactive monitoring 
by a certified SOC staffed with 
security engineers
```


<a id="p-8f4fee351819a48c"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Managed Wi-Fi datasheet 070725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Managed Wi-Fi datasheet 070725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Managed Wi-Fi datasheet 070725`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC
MANAGED WI-FI
Scalable Wi-Fi solutions for any business
In today’s fast-paced, interconnected world, businesses from the corner coffee shop to schools, offices, 
hospitals and baseball stadiums require fast, reliable Internet connections. Whether the goal is to 
maintain productivity, enable e-learning and telehealth or enhance the customer experience, one thing 
remains universal: the need to connect.
Managed Wi-Fi solutions from Great Plains Communications provides fast, reliable and scalable wireless 
connections to business customers of all sizes and environments to keep employees, visiting clients and 
customers connected and productive. 
FEATURES & BENEFITS
	›
Internet speeds ranging from 10 Mbps to 2 Gbps
	›
Engineered to fit the current and future needs of 
every business
	›
Integrated guest and private networks over a 
secure connection
	›
Secure indoor and outdoor Wi-Fi solutions with a 
variety of access point options
	›
Secures Wi-Fi networks with next-gen firewalls, 
advanced routing, intrusion detection and 
prevention and multiple SSIDs
	›
Total managed solution from installation to 
turn-up and maintenance reduces total cost of 
ownership and the burden on internal IT teams
	›
Gain insight into guest and employee Wi-Fi usage 
with industry-leading analytics and reporting
	›
Branded log-in portal capability
QUESTIONS? CONTACT US TODAY!
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
```


<a id="p-2d50f3da26b35038"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Small Business Wi-Fi with WorkPass datasheet.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Small Business Wi-Fi with WorkPass datasheet.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Small Business Wi-Fi with WorkPass datasheet`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
SMALL BUSINESS WI-FI
powered by Plume WorkPass®
Powerful Wi-Fi and intelligence built for small businesses
Access enterprise-grade technology without the high cost or complexity of large enterprise systems with 
GPC’s small business Wi-Fi powered by Plume WorkPass®. Built on the need for fast, reliable and secure 
connectivity, our solution combines a seamless and secure Wi-Fi experience with powerful guest insights 
and analytics to help your business grow. 
Move When you Move
Simply pack up the access points and set up in your new office - no hardwiring required
Scalable Network Service
Simply install additional access points to the network as your business grows
Smart Wi-Fi Network
Uses an AI learning algorithm to self-optimize the network and ensure service continuity
Total Network Control at your Fingertips
Full Wi-Fi network control from anywhere using the mobile app
Easy to Deploy
Simple plug-and-play deployment can be installed and set up in just minutes
No Capital Investment
No large, up-front equipment costs - just a small monthly fee
Separate Guest and Private Networks
Provide separate secure employee and guest SSIDs
Concierge
Link
Shield
Keycard
Flow
Gain business 
insights by 
converting usage 
data into customer 
analytics
Seamless, secure 
and reliable Wi-
Fi connectivity 
throughout the 
business
Protect sensitive 
data, guard against 
cyber threats and 
block malicious 
content
Maximize 
productivity with 
content filters, data 
usage and online 
activity monitoring
Gain peace of mind 
by turning access 
points into motion 
sensors
FEATURES
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
```


<a id="p-487de97ab921981e"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Network Monitoring Portal/Network Monitoring Portal Product Sheet.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Network Monitoring Portal/Network Monitoring Portal Product Sheet.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Network Monitoring Portal/Network Monitoring Portal Product Sheet`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC 
NETWORK MONITORING
PORTAL
Demand on your network is evolving and changing all the 
time. The Great Plains Communications (GPC) Network 
Monitoring Portal will provide key performance metrics for your 
Dedicated Internet Access (DIA) and Ethernet services to assist 
troubleshooting of network applications.
Fast and Easy Reporting
With the GPC Network Monitoring Portal, IT managers can easily 
schedule reports on a monthly, weekly, daily or on-demand basis. 
Customers can also request specific measurements and reports 
for GPC to set up.
NETWORK MONITORINGPORTAL022025
What do you do first 
when you have a 
question about service?
74% responded, “Log on to 
their (supplier’s) portal.”1
1Ed Thompson, Customer Experience is the New 
Competitive Battlefield (Gartner Research, 2015)
BENEFITS & FEATURES
	›
Integrated, intuitive and customizable portal
	›
Easily monitor real-time changes in bandwidth usage at multiple locations
	›
View traffic across transport, service and application layers of the network
	›
Monitor circuit utilization and performance measurements like packet loss and other service 
level metrics
	›
Reduce the time to pinpoint root causes of application performance issues
```

#### Page 2 / 2 — `page-002.png`

```text
Sample Metrics
NETWORK MONITORINGPORTAL022025
JITTER
PACKET LOSS
PERFORMANCE
UTILIZATION
LATENCY
```


<a id="p-0aa0f75de2884139"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Financial Services.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Financial Services.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Financial Services`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
Introducing SD-WAN for the financial services industry from Great 
Plains Communications and powered by VMware® by Broadcom
Providing secure financial services today is much more than protecting ATM traffic or transactional 
banking applications. The expansion of on-line banking and cloud-based Fin-Tech solutions has 
expanded the security perimeter beyond the confines of the traditional premises firewall.
That is why Great Plains Communications (GPC) has partnered with VMware® by Broadcom to offer an 
SD-WAN (software-defined wide area network) solution that improves application performance and 
network reliability for financial providers while also reducing the time needed to open new branches.
Our SD-WAN solution is a fully managed network service that provides the financial IT staff with real-
time visibility into the status and performance of networks and applications. The service includes 
integrated security features such as transporting all data via encrypted VPN tunnels to protect 
financial data in motion while meeting strict federal regulatory requirements for network security.
Ensuring Quality of Service
Unified Communications (UC) applications used 
by financial institutions require a higher level 
of reliable bandwidth and real-time quality of 
service that traditional network architectures are 
not designed to provide. Having a less reliable 
connection could mean dropped calls or jitter-
heavy video conferences that affect the quality of 
customer interactions.
To combat network quality concerns, GPC’s SD-
WAN solution detects degradation on access links 
and selects the best path for each application to 
ensure consistent performance and overcome 
issues caused by delay, jitter and packet loss. This 
improves network and application performance 
even when there is only a single connection to 
create a very positive impact on the end-user 
experience.  
GPC SD-WAN
SCALABLE SECURITY FOR 
THE FINANCIAL SERVICES 
NETWORK
```

#### Page 2 / 2 — `page-002.png`

```text
Management Plane - Orchestrator
	›
Secure password-controlled user access controls with Radius and dual-factor 
authentication
	›
Third-party SEIM integrations for event and firewall logs
Edge and Gateway Data Plane
	›
Uses IPsec VPN tunnels to secure communications between edges, gateways and 
the orchestrator
	›
Prevents unauthorized network access using local access controls
	›
Segments your network by creating separate domains by user (guest, PCI or 
corporate) or by line of business (engineering or HR)
Gateway and Physical Infrastructure
	›
Gateways monitored by Tier-IV SSAE 16 Type II and ISAE 3402 certified data centers
	›
24x7x365 network monitoring and troubleshooting by a dedicated Network 
Operations Center (NOC) team
Regulatory Compliance
	›
Gateways comply with Payment Card Industry Digital Data Standard (PCI-DDS) 3.2 
with an Attestation of Compliance (AOC)
	›
Data and control plane communications are carried through VPN tunnels secured 
by strong encryption protocol that meet NIST security frameworks and FIPS-140 
requirements of federal agencies
Application-Based Firewall
	›
Recognizes over 3,500 applications and performs outbound filtering to prevent 
access to inappropriate or malicious sites
	›
Blocks malware from entering the network using Intrusion Detection and 
Prevention (IDS/IPS)
	›
Allows or denies application traffic and log for auditing
Third-Party Integrations
	›
Integrates with existing security vendors such as Palo Alto Networks, Zscaler, 
Symantec and Checkpoint
Security and Compliance
Due to increasing malicious threats, the financial industry is subject to more robust regulatory 
oversight at the state and federal level with significant penalties for allowing a data breach that 
compromises customer accounts. To ensure compliance, GPC’s SD-WAN solution provides robust, 
in-depth security that meets multiple industry standards and federal requirements while improving 
application access and availability.
QUESTIONS? CONTACT US TODAY!
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
```


<a id="p-074eafa5b012223d"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Healthcare.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Healthcare.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Healthcare`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC SD-WAN
PROVIDING THE NETWORK 
OF TOMORROW FOR 
HEALTHCARE TODAY
Introducing SD-WAN for healthcare providers from Great 
Plains Communications and powered by VMware® by 
Broadcom
Providing healthcare today is much more than making a diagnosis or 
prescribing medication. The advancements in medicine, the increase 
in regulations to protect patient privacy and the digitization of patient 
medical records require a scalable, secure, uninterrupted and flexible 
IT network.
That is why Great Plains Communications (GPC) has partnered with 
VMware® by Broadcom to offer an SD-WAN (software-defined wide area 
network) solution that improves application performance and availability 
for healthcare providers while also lowering capital expenditures on 
network equipment.
The Software Defined Healthcare Network
GPC’s SD-WAN is a managed service is built on software-defined networking 
principals to address end-to-end automation, application continuity, branch 
transformation and security from the central data center and cloud to remote 
clinics at the network edge.  
This solution consists of hosted cloud gateways, branch office and data cen­
ter appliances; overseen by a central orchestrator management system that 
provides the healthcare IT staff with real-time visibility into the performance 
of networks and applications.  The service features integrated security such 
as encrypted VPN tunnels to protect healthcare data in motion, ensuring 
patient privacy while supporting regulatory compliance.    
SD-WAN from GPC is perfectly suited for managing the next generation of 
digital records, as well as sharing high-resolution medical images in real time, 
by enabling enterprises to prioritize networked healthcare applications such 
as Electronic Healthcare Records (EHR) and Teleradiology. In addition, SD-
WAN can deliver secure and reliable access to data centers, cloud services 
and software as a service (SaaS) for branch offices or remote clinics. 
Ensuring Quality of Service
When a telehealth patient requires over-the-phone care or physicians 
need to discuss patient cases for assessment and diagnosis, quality 
of service (QoS) is critical. Dropped calls or jitter-heavy video 
conferences are detrimental to providing high-quality care via unified 
communications (UC) applications, which require an elevated level of 
reliable bandwidth and service quality.  
 “Visibility to individual 
locations wasn’t possible with 
our legacy network, but with 
VMware SD-WAN Orchestrator, 
we can quickly identify 
problems at each branch in the 
network.” 
Senior Network Engineer, 
Multi-state Skilled Nursing 
and Rehabilitation Centers
“We’ve seen increased 
availability at our sites 
because unlike traditional 
networks which require manual 
intervention, everything’s now 
automated through SD-WAN 
technology.”
ICT Manager 
(Infrastructure), Health and 
Aged Care Group
“With SD-WAN (powered by 
VMware), we have much better 
visibility than we ever had 
before, which allows us to 
pinpoint issues and address 
them before they become big 
issues for the business.”  SD-
WAN enables us to do that 
and adhere to strict HIPAA 
requirements on a continuous 
basis.”
CIO for National Outpatient 
Treatment Centers
```

#### Page 2 / 2 — `page-002.png`

```text
The unique capabilities of GPC SD-WAN can detect degradation on access links and employ traffic 
steering techniques that select the best path for each application to ensure consistent performance and 
overcome network quality issues caused by delay, jitter and packet loss. This service can even improve 
performance when there is only a single connection, all of which has a very positive impact on the user 
experience. 
Managed Service Savings
As a fully managed service, there is no upfront expenditure required to purchase equipment, software 
licenses and maintenance.  The configuration, day-to-day management and troubleshooting are 
performed by the GPC 24x7 Network Operations Center.  This enables significant cost savings in term 
of operational overhead, while freeing IT staff from the daily burden of managing networks so they can 
focus on delivering mission critical healthcare applications.
Security & Compliance
No health network solution is complete without protecting the information that travels over its 
connections.  All communications over the SD-WAN network flow through VPN tunnels protected by 
strong encryption such as AES 256, which meets the standards specified by the National Institute of 
Standards and Technology (NIST) as required under the HIPAA Security Rule.  Access to the management 
system is protected by strong password, multi-factor authentication and role-based access.  A stateful 
and context-aware integrated firewall delivers granular control of applications and prevents access to 
malicious sites while blocking malware from entering the network. Additionally, SD-WAN integrates 
seamlessly with best-of-breed security vendors (such as Palo Alto, Zscaler, Symantec and Check Point).
Together, these features allow healthcare organizations to easily implement the security profile of their 
choice to better protect the network, while improving application access and availability for its end users.
A complete SD-WAN solution
GPC SD-WAN delivers a complete managed solution for healthcare organizations. It provides reliable, 
secure and efficient connections from clinics to applications in the cloud or data center, ensuring 
confidential access to patient information. Features like centralized management and multiple types 
of access means that sites can be connected quickly and managed more easily.  Application visibility 
ensures consistent performance and ease of troubleshooting for reliable operations, allowing healthcare 
organizations to make better use digital technology to deliver the network of the future, today.
Massive Movement to 
Work from Home
Embrace SaaS/UCaaS for 
Resiliency & DR
Meet New Compute 
Requirements using IaaS
```


<a id="p-14c17d6abf55fa4f"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Retail.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Retail.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Brief - Retail`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC SD-WAN
DELIVERING A COMPLETE 
RETAIL CUSTOMER 
EXPERIENCE
Introducing SD-WAN managed service for retailers from Great Plains 
Communications and powered by VMware® by Broadcom
Today’s retailers constantly seek new ways to serve customers with a true omnichannel experience while  
maximizing profitability and staying competitive. This requires retailers to improve service while keeping  
costs in check and increasing operational efficiencies. Crossing the boundaries of digital and physical 
retail environments is critical to deliver the complete customer experience.
That is why Great Plains Communications (GPC) has partnered with VMware® by Broadcom to offer an 
SD-WAN (software-defined wide area network) solution to improve retail application performance and 
availability and lower capital and operational expenses.
GPC SD-WAN is a managed service built on software-defined networking principals to address end-to-
end automation, application performance and continuity, branch transformation and security from the 
central data center and cloud-hosted applications to brick-and-mortar stores at the network edge.
Ensuring Application Performance
Our SD-WAN solution is overseen by a central orchestrator that provides IT staff with real-time visibility 
into the performance of networks and applications. It can also improve the performance of those 
applications. For example, when a customer calls to inquire about a product, the quality of that call is 
critical. Dropped calls or conversations that break up due to packet loss, delay or jitter are detrimental to 
providing good customer service and may result in lost sales. 
GPC SD-WAN continually monitors the quality of each network connection and takes steps to remediate 
any degradation in less than a second. It does this by routing network traffic over the best path for 
the application to ensure that the voice or video call is not interrupted. The service can also improve 
application performance even when there is just a single link connecting a store or office.
Store branches are now utilizing SD-WAN to provide a white-glove experience 
to customers, including seamless wireless connectivity, in-store online 
shopping and a near-100 percent uptime transactional track record.
 - Technical Architect, National Retail Chain
Our retail locations take credit card payments in the stores. We are happy with 
the PCI 3.0 compliance adherence from SD-WAN.
- IT Project Manager, National Retail Chain
With a lean 6-person IT team serving 60+ retail outlets and near-zero visibility 
into the network, providing the kind of performance we need for critical 
applications became a monumental challenge. With SD-WAN, most of our 
challenges from network visibility to performance to troubleshooting went 
away instantly.
- IT Project Manager, National Retail Chain
```

#### Page 2 / 2 — `page-002.png`

```text
Security and Compliance for PCI
Security breaches regularly headline the news and stolen cardholder data, identity theft and breaches at 
the point of sale are all too common. Consequently, retailers require a trusted and proven approach to 
manage payment information and protect customers and employees. The Payment Card Industry Data 
Security Standard (PCI DSS) is designed to mitigate these issues.
GPC SD-WAN meets PCI requirements both on premise and in the cloud by implementing network 
policies based on PCI guidelines for maximum security:
	›
All traffic is secured with strong AES-256 encryption and is never open to the Internet
	›
Updates to the latest version of PCI-DSS is enforced at all retail locations
	›
No unsecure cardholder data is ever allowed in the network
	›
Resource control and usage both meet PCI guidelines
	›
Automated security checks of all infrastructure components are completed regularly
	›
The PCI DSS (service provider) has an optional Attestation of Compliance (AOC) available
Customers who use SD-WAN to store, process or transmit cardholder data can rely on the infrastructure 
as they manage their own PCI DSS compliance certification.
Summary
Our SD-WAN solution helps accelerate the digital transformation of retail environments by bringing 
agility, efficiency and security to retail IT. This fully managed solution helps retail organizations of all sizes 
to solve security, compliance, cloud, complexity and cost challenges, allowing the IT staff to focus on 
more mission critical applications and less on managing the network.
Branch 1
Branch 2
Retail Store
Retail Network Segmentation
```


<a id="p-ad8b501a33b784ce"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Use Cases - Financial Services.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Use Cases - Financial Services.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/2024 SD-WAN Use Cases - Financial Services`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC SD-WAN FINANCIAL SERVICES
USE CASES
COMPANY
CRITICAL APPS
BEFORE SD-WAN
AFTER SD-WAN
Community Bank, 
Insurance & Private 
Advisory Services
UC
Security
	›
Expensive and inflexible 
MPLS network
	›
Poor bandwidth availability
	›
Maximized circuit availability 
and bandwidth
	›
Secured and optimized 
connections to cloud services
	›
Reduced costs
Farm Credit Financial 
Technology Company
UC
VoIP
Video
	›
Poor voice quality
	›
Video usage required costly 
bandwidth increases
	›
Unreliable network
	›
Optimized VoIP and video 
quality
	›
Secured and optimized 
connections to cloud services
	›
Significant cost savings
	›
Ability to deploy new sites 
anytime, anywhere
Securities and 
Commodity Contract 
Services
UC
VoIP
Security
	›
Expensive and inflexiblity 
MPLS network
	›
Unreliable network
	›
Poor voice quality
	›
Network visibility and control
	›
Improved VoIP services
	›
Significant cost savings
	›
Ability to deploy new sites 
anytime, anywhere
Specialty Insurance 
Products and 
Services
UC
Security
	›
Recurring and business-
affecting network outages
	›
Limited network-wide 
visibility and management
	›
Eliminated network outages
	›
Replaced legacy routers with 
SD-WAN routing capabilities
	›
Faster network-wide 
deployment
	›
Significant cost savings
	›
Fully managed SD-WAN 
allowing IT to focus on 
business-critical activities
Digital Consumer 
Lending Company
UC
VoIP
Security
	›
Expensive and inflexible 
MPLS network
	›
Poor bandwidth availability
	›
Poor voice quality
	›
Low-cost redundancy for 
business continuity
	›
Ability to deploy new sites 
any time, anywhere
	›
Optimized VoIP services
```

#### Page 2 / 2 — `page-002.png`

```text
COMPANY
CRITICAL APPS
BEFORE SD-WAN
AFTER SD-WAN
Community Bank, 
Insurance and 
Private Advisory 
Services
UC
Security
	›
Expensive and inflexible 
MPLS network
	›
Transport availability limited 
the ability to deploy new 
sites
	›
Video useage required costly 
bandwidth increases
	›
Private network traffic was 
not encrypted
	›
Protected existing 
infrastructure investment 
during migration
	›
Low-cost redundancy for 
business continuity
	›
Ability to deploy new sites 
any time, anywhere
	›
Gained network visibility and 
control
	›
Secured and optimized 
connections to cloud services
	›
Encrypted all private network 
traffic
Investment Advisory 
Services Company
UC
Video
	›
Poor bandwidth availability 
for financial apps
	›
No load-balancing on dual 
links
	›
High network costs
	›
No network visibility
	›
Maximized circuit availability 
and bandwidth
	›
Fully utilized redundant links
	›
Public broadband offered 
savings of 60% versus private 
network services
	›
Gained network visibility
	›
Reduced hardware footprint
	›
Improved application 
performance
Regional Credit 
Union
UC
Video
	›
Expensive and inflexible 
MPLS network
	›
Aging routers
	›
Maximized circuit availability 
and bandwidth
	›
Replaced legacy routers with 
SD-WAN routing capabilities
	›
Significant cost savings
FinancialUseCases122624
```


<a id="p-9430e44359b04556"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Configure Inc talking points.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Configure Inc talking points.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Configure Inc talking points`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
ABOUT CONFIGURE INC.
TALKING POINTS
WHO IS CONFIGURE INC.?
Configure Inc. is a leading IT network and cybersecurity professional services company that provides 
a wide range of network support solutions for end users in any sector of the economy. Configure’s 
specialization in SD-WAN has influenced GPC to partner with them to provide reliable and fully managed 
SD-WAN services to customers with at least one location on our regional fiber network. 
WHAT EXPERIENCE DOES CONFIGURE HAVE IN MANAGING SD-
WAN SERVICES?
Since its founding in 1997, Configure has designed, activated and managed over 600 SD-WAN networks 
and over 5,000 devices for companies of all sizes, from less than ten sites to hundreds of sites. They are 
a premium VMware VeloCloud partner, as well as a support partner for AT&T and many other Internet 
service providers (ISPs).
HOW WILL CONFIGURE SUPPORT GPC’S CUSTOMERS?
Configure will support the configuration, activation, monitoring and management of SD-WAN and 
network security for GPC’s customers. They will do this through 24x7x365 network monitoring, proactive 
management and integrated helpdesk services from three SOC II certified network operations centers 
(NOCs) as well as around-the-clock network security support from its security operations center (SOC). 
Customers will have access to a dedicated project manager and network engineer to ensure a smooth 
service deployment.
Their advanced incident management platform , featuring API-based monitoring, event correlation 
and AIOps, combined with automated provisioning processes, provides the highest level of uptime and 
reliability. In addition, an online ServiceNow customer ticketing and support portal allows customers to 
open and track trouble tickets and changes at any time.
```


<a id="p-aa79f2d73e3b04ba"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
SD-WAN
Secure Wide Area Network powered by 
VMware VeloCloud SD-WAN™
Gain control and visibility of your network with our fully 
managed SD-WAN solution.
Great Plains Communications (GPC) has partnered with VMware® by Broadcom, the leading solution in 
the software-defined networking market today, to provide secure, reliable management of your wide-
area network from branch offices to data centers and the cloud.
A fully managed SD-WAN solution...
Replaces complex and costly MPLS services with a faster, less expensive and fully 
managed solution
Reduces unnecessary backhauling and enables secure access to web and SaaS 
applications from branch offices through a network of cloud gateways
Replaces aging routers and security appliances with a managed SD-WAN Edge router 
that combines IP routing with automated VPN tunneling and network security
Eliminates up-front equipment expenses and reduces IT overhead
```

#### Page 2 / 2 — `page-002.png`

```text
FEATURES AND SPECIFICATIONS
Centralized Monitoring & 
Control
Centralized configuration, 
monitoring and troubleshooting 
via the Orchestrator
Simplified WAN 
Management 
Point-and-click graphical user 
interface (GUI) visibility, from 
access to applications, in a single 
dashboard
Maximize Application 
Performance 
Business-policy prioritization 
to optimize the performance of 
critical applications
Dynamic Multi-Path 
Optimization™ (DMPO) 
Improved response time and 
uptime through packet steering 
to the best path possible
Next-Gen Firewall with 
IDS/IPS* 
Advanced intrusion detection 
and protection with an enhanced 
firewall integrated into the 
SD-WAN Edge router
NOC/SOC Monitoring & 
Management 
24x7x365 proactive monitoring 
and management by certified 
engineers across multiple US-
based SOC II-compliant Network 
and Security Operations Centers
Access & Scalability
	»
Speeds from 10 Mbps to 10 Gbps
	»
Access to over 2,000 cloud gateways in over 
120 Tier-1 data centers
	»
Broadband, LTE and Ethernet/MPLS circuits
	»
Suitable for businesses of all sizes
QoS
	»
Application-aware, per-packet sub-second 
link steering
	»
Packet loss and jitter correction to improve 
performance on single links
	»
QoS scoring on all WAN links
	»
Business policy-based application 
prioritization
	»
Over 3,500 applications recognized
	»
High availability configurations
Management
	»
Proactive network management from 
redundant 24x7x365 NOC and SOC
	»
Full network and application visibility 
through the cloud-hosted Orchestrator
Network Security*
	»
IDS/IPS malware detection and prevention
	»
URL filtering and malicious IP blocking
	»
DDoS protection
	»
Firewall management for multiple vendors
	»
Enterprise security assessment and 
vulnerability scanning
Networking & Protocols
	»
BGP, BFD, OSPF, Static and IPv4/IPv6
	»
Multicast, IGMP, PIM, DNS, DHCP and NAT
	»
Up to 100,000 routes and 128 VRF 
segments
SDWAN062124
*Optional feature not included in base package
```


<a id="p-9c51080f978b85da"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Contact Center datasheet 050925.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Contact Center datasheet 050925.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Contact Center datasheet 050925`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
DATASHEET
Contact Center improves customer interactions for businesses of all sizes 
and helps you differentiate from the competition where it matters most 
– the customer experience. 
Contact Center enables you to: 
Access both employee collaboration  
and advanced call handling within  
our UC platform
Support multiple locations and remote employees
Centralize management from one portal, 
accessible anywhere, any time
Keep an eye on service levels, and analyze team 
performance by queue, team, or employee with 
real-time dashboards and historical reports
Easily manage customizable frontline user skillsets 
and statuses 
 
Centralize the handling of calls, web chat, email, 
and SMS in a single application
Enhance audience engagement with outbound 
dialing and advanced outreach campaign 
capabilities
Send out post-call surveys to measure satisfaction
Quickly and easily integrate with CRM 
and WFM systems
And much more… 
More Productivity  
& Simplicity
Our integrated Unified 
Communications and 
Contact Center makes it 
easier to collaborate and 
manage customer calls in 
one app.
Greater Customer 
Convenience
Let customers call, 
text, chat, and email, or 
give them self-service 
options.
Personilization 
& Insights
Integrate your CRM 
for better interactions 
and use analytics and 
reporting to improve 
services.
Revenue &  
Engagment
Send timely 
notifications 
automatically via SMS, 
voice, and email.
CONTACT CENTER
Hit your next level of growth by giving your customers the experience they 
deserve. With Contact Center, more responsive, informed, and positive 
customer experiences are possible in days, not months.
```

#### Page 2 / 5 — `page-002.png`

```text
CONTACT CENTER CUSTOMER BENEFITS
Inspiring Interactions
Total customizability in call 
flow ensures callers reach the 
right agents at the right time, 
while exceptional QA features 
deliver greater results.
Better Productivity
Give your employees the tools 
they need - whether they need 
to collaborate together, talk to 
a customer, or a little of both.
Customer-Centric 
Channels
Contact Center rolls up 
voice, chat, WhatsApp, and 
e-mail queues into a single, 
streamlined omni-channel 
experience.
Skillsets  
Skills-based routing means the employee most suitable to take the 
inquiry is reached.
Callbacks 
After a period of time, queued callers can request a callback and 
the next available employee will get their request. The system will 
wait to ensure the agent is ready before dialing – meaning better-
prepared employees and interactions.
Preferred Agent Routing   
You can assign a certain employee to act as “point” on complex 
cases; with Preferred Agent Routing, calls and chats will be routed 
to an employee of your choosing.
IVR Control & Creativity  
You can easily create custom IVRs and deploy advanced functions 
like variables, conditional logic, and much more. Contact Center 
puts amazing power at your fingertips via an intuitive drag-and-
drop visual interface. Plus, custom API integration delivers even 
greater functionality.
Our UC platform + Contact Center 
Use one application to manage employee collaboration and 
customer voice interactions.
Agent Login 
Choose to take customer calls within our Our UC platform. Log 
out when done and resume other collaborative work with other 
employees.
Advanced Call Management 
Take queued customer calls and then call, chat, and meet with 
coworkers to quickly resolve requests.
Presence Sync 
Avoid getting other calls when working with customers. Let others 
see when employees are talking to customers.
Queues & Contact Center Agent   
With Contact Center, you can forget the idea of a “queue” being 
only for voice calls.  Powered by Contact Center's web or desktop 
app, voice, chat, WhatsApp, and e-mail interactions are all 
seamlessly integrated.
```

#### Page 3 / 5 — `page-003.png`

```text
3
In-depth Insights
Real-time insights get agents 
into context quickly, helping 
to deliver more informed 
responses that shorten times 
to resolution. Plus, deep 
historical reporting helps 
improve future interactions.  
Outstanding 
Engagement 
Capture your customer’s 
attention with notifications for 
reminders, promotions, and 
more. 
Dashboards and Live Monitoring   
Our Dashboards help you monitor the platform in real-time, 
including wait times, service levels, and much more.  Live 
Monitoring lets you tune into specific interactions - and even 
take control as needed.
Dashboards and Wallboards 
View the top-level metrics that matter most to your team, any time, 
from anywhere - and share that data across anyone on your team 
who needs it. 
Custom Reports 
You can choose from hundreds of pre-built reports on call 
distribution, service level adherence, unanswered calls, post-call 
surveys, and so much more. Our Product specialists can also 
develop custom reports to best meet your unique needs.
Dynamic Notifications   
Turn your contact center into an outreach powerhouse. From 
simple appointment reminders to multi-channel marketing 
campaigns, Dynamic Notifications dramatically extends a 
company’s reach while still respecting customer preferences.
CONTACT CENTER CUSTOMER BENEFITS
```

#### Page 4 / 5 — `page-004.png`

```text
CONTACT CENTER PLAN COMPARISON
We make it easy to address your customer experience needs, no matter the size of your business or your 
requirements. We offer two plans to choose from to support the needs of your organization.
CC PRO
CC ELITE
CC License Type
Concurrent Seats
Concurrent Seats
UC Bundling
Sold with our UC platform or 
standalone
Sold with our UC platform or 
standalone
Access to employee collaboration for  
customer assistance within our UC platform


Admin Portal


Supervisor App


Real-Time Agent Status


Inbound Voice Channel Queues


Automatic Call Distribution (ACD)


Position in Queue & Estimated Wait Time 
Message


Supervisor Functions (Monitor, Whisper, 
Barge-In)


Real-Time, Historical & Graphical Reports


Real-Time Dashboards


Analytics Dashboards - Queues


Analytics Dashboards - Agent


Archiving - Archive all communications 
(voice, SMS, chat, email, screen recordings) to 
safeguard your organization, enabling easy 
monitoring and retrieval.
Add-On (+$)
Add-On (+$)
Call Recording


Pre-Built Integrations (Dynamics, Salesforce, 
Zendesk, Slack)


Agent Desktop & Web Application


Scheduled & Custom Reports


Customizable IVR


Skill-Based Routing


Geo-Routing


Advanced Rules-Based Routing (Last Agent, 
Preferred Agent, etc.)


Custom Agent Status


Real-Time Customizable Threshold Alerts


```

#### Page 5 / 5 — `page-005.png`

```text
* Number of users signed-in
1. CC Bursting limited to 50% of subscribed seat capacity. Billing will be for peak concurrent sign-ons during period- no min. usage duration and be reflected on next bill cycle. "Burst 
& release" model - billing in advance for next period reflects subscribed seat count (not previous period's peak). Does not apply to our UC platform named user services.
2. Desired channels add-ons (Email & SMS) - sold separately
CC PRO
CC ELITE
Queued Callback & Queued Voicemail


Emergency Queue Bulletins


Post-Call Surveys


Text-to-Speech


Call Scripting


Outbound Voice & Blended Channel Queues


Outbound Dialer (Scheduled Power Dialing)


Elastic Demand Support2


Chat Channel Queues
Add-On (+$)

Email Channel Queues
Add-On (+$)

WhatsApp Channel Queues
Add-On (+$)

Dynamic Notification (Voice, E-Mail, SMS)2
Add-On (+$)

Schedule Manager
Add-On (+$)

AI Agent Evaluator - Identify topics, highlight 
keywords for coaching and performance 
improvements
Add-On (+$)

Screen Recording
Add-On (+$)

Custom CRM Integration
Prof. Services (+$)
Prof. Services (+$)
Custom WFM Integration
Prof. Services (+$)
Custom IVR Integrations & Self-Service 
Applications (DB Data Dips, Intelligent Routing, 
Payment IVRs, etc.)
Prof. Services (+$)
Speech Recognition Integration

QUESTIONS? CONTACT US TODAY!
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_CC_Datasheet_050925
```


<a id="p-7837dd9c17f93f65"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Enterprise Plan Sheet 091125.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Enterprise Plan Sheet 091125.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Enterprise Plan Sheet 091125`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UNIFIED COMMUNICATIONS
ENTERPRISE
ENTERPRISE FEATURES
Phone
	›
Concurrent Endpoints: 5
	›
User Call Forwarding
	›
Voicemail Transcription
	›
Call Recording
Collaboration
	›
1-on-1 Chat
	›
Group Chat
	›
AI Assistant
	›
200 GB File Back Up, Sync and 
Share per User
	›
Video Conferencing for up to 
200 Participants
	›
Audio Conferencing for up to 
200 Particpants
	›
UC Rooms
	›
Screen Sharing
	›
Compact Mode
	›
Unlimited Recordings
	›
Screen Annotation
	›
AI Meeting Recap
	›
Calendar Sync
	›
In-Meeting Chat
	›
In-Meeting Notes
	›
End-to-End Encryption
	›
Meeting Security
	›
User Texting
Analytics
	›
Service Adoption Dashboard
Integrations
	›
Outlook/Office 365 Integration
	›
Sugar, Zoho and Zendesk 
Integration
	›
Salesforce, ServiceNow, 
NetSuite and MS Dynamics 
Integration
Call Center
	›
Agent Log-In/Out
	›
Call Queueing, Wrap-Up Time, 
Configurable Agent Removal 
from Queue, Greetings 
Management
	›
Smart Greetings and Additional 
Call Recording Storage
	›
Wallboards and Scheduled/
Graphical Reports
	›
Supervisor Functions (Monitor, 
Whisper, Barge)
Application
Voice Calling & Video Conferencing
Use Cases
Hosting large virtual meetings and managing client interactions
Company-wide communication and town halls
ALL UC PLANS INCLUDE
	›
Desktop App
	›
Mobile App
	›
Unlimited Calling
	›
Local Number
	›
Auto-Attendant
	›
Caller ID
	›
Hunt Groups with Agent Log-In/
Out
	›
Call Transfer
	›
Call Hold
	›
Three-Way Calling
	›
On-Hold Music
	›
Hot Desking
	›
Paging
	›
Call Park/Pickup
	›
Intercom
	›
Spam Call Blocking/Tagging
	›
Emergency Services Notification
	›
Voicemail
	›
30-Day Archiving Retention
	›
Presence Detection/Two-Way 
Sync
	›
QoS Dashboard
	›
Call History
	›
Active Directory
	›
Chrome Click to Call
Additional Charge: Company Messaging and Webinar
Additional Charge: Company Messaging and Webinar
```


<a id="p-cef43b4f60edd583"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Essentials Plan Sheet 091125.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Essentials Plan Sheet 091125.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Essentials Plan Sheet 091125`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UNIFIED COMMUNICATIONS
ESSENTIALS
ESSENTIALS FEATURES
Phone
	›
Concurrent Endpoints: 1 
Plus Apps
	›
User Call Forwarding
	›
Voicemail Transcription
	›
Call Recording
Collaboration
	›
1-on-1 Chat
	›
Group Chat
	›
AI Assistant
	›
5 GB File Back Up, Sync and 
Share
	›
User Texting
Conferencing
	›
Video Conferencing for up 
to 25 Participants
	›
Audio Conferencing for up 
to 200 Particpants
	›
UC Rooms
	›
Screen Sharing
	›
Compact Mode
	›
Unlimited Recordings
	›
Screen Annotation
	›
AI Meeting Recap
	›
Calendar Sync
	›
In-Meeting Chat
	›
In-Meeting Notes
	›
Meeting Security
Integrations
Application
Voice Calling & Video Conferencing
Use Cases
Seamless hybrid work environments
Customer support and internal coordination
Sales teams working on the go
IT simplification through Microsoft 365 Integration
ALL UC PLANS INCLUDE
Phone Features
	›
Desktop App
	›
Mobile App
	›
Unlimited Calling
	›
Local Number
	›
Auto-Attendant
	›
Caller ID
	›
Hunt Groups with Agent 
Log-In/Out
	›
Call Transfer
	›
Call Hold
	›
Three-Way Calling
	›
On-Hold Music
	›
Hot Desking
	›
Paging
	›
Call Park/Pickup
	›
Intercom
	›
Spam Call Blocking/Tagging
	›
Emergency Services 
Notification
	›
Voicemail
Archiving
	›
30-Day Archiving Retention
Collaboration
	›
Presence Detection/Two-
Way Sync
Analytics
	›
QoS Dashboard
	›
Call History
Integrations
	›
Active Directory
	›
Chrome Click to Call
Additional Charge: Company Messaging and Webinar
Additional Charge: Company Messaging and Webinar
```


<a id="p-7d8298e3701bf5c6"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Express Plan Sheet 091125.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Express Plan Sheet 091125.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Express Plan Sheet 091125`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UNIFIED COMMUNICATIONS
EXPRESS
EXPRESS FEATURES
Phone Features
	›
Concurrent Endpoints: 1 
Plus Apps
	›
Desktop App
	›
Mobile App
	›
Unlimited Calling
	›
Local Number
	›
Auto-Attendant
	›
Caller ID
	›
Hunt Groups with Agent 
Log-In/Out
	›
Call Transfer
	›
Call Hold
	›
Three-Way Calling
	›
On-Hold Music
	›
Hot Desking
	›
Paging
	›
Call Park/Pickup
	›
Intercom
	›
Spam Call Blocking/Tagging
	›
Emergency Services 
Notification
	›
Voicemail
Archiving
	›
30-Day Archiving Retention
Collaboration
	›
Presence Detection/Two-
Way Sync
Analytics
	›
QoS Dashboard
	›
Call History
Integrations
	›
Active Directory
	›
Chrome Click to Call
Application
Voice Calling
Use Cases
Reception-driven offices
Solo or small remote teams like freelance consultants, contractors or 
independent agents
Support-only roles such as scheduling coordinators, dispatchers and 
appointment setters
```


<a id="p-db4f3ca96f5606fc"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Pro Plan Sheet 091125.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Pro Plan Sheet 091125.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Individual Plan Data Sheets/UC Only/UC Pro Plan Sheet 091125`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UNIFIED COMMUNICATIONS
PRO
PRO FEATURES
Phone
	›
Concurrent Endpoints: 5
	›
User Call Forwarding
	›
Voicemail Transcription
	›
Call Recording
Collaboration
	›
1-on-1 Chat
	›
Group Chat
	›
AI Assistant
	›
50 GB File Back Up, Sync and 
Share per User
	›
Video Conferencing for up to 
100 Participants
	›
Audio Conferencing for up to 
200 Particpants
	›
UC Rooms
	›
Screen Sharing
	›
Compact Mode
	›
Unlimited Recordings
	›
Screen Annotation
	›
AI Meeting Recap
	›
Calendar Sync
	›
In-Meeting Chat
	›
In-Meeting Notes
	›
End-to-End Encryption
	›
Meeting Security
	›
User Texting
Analytics
	›
Service Adoption Dashboard
Integrations
	›
Outlook/Office 365 Integration
	›
Sugar, Zoho and Zendesk 
Integration
	›
Salesforce, ServiceNow, 
NetSuite and MS Dynamics 
Integration
Call Center
	›
Agent Log-In/Out
	›
Call Queueing, Wrap-Up Time, 
Configurable Agent Removal 
from Queue, Greetings 
Management
	›
Smart Greetings and Additional 
Call Recording Storage
	›
Wallboards and Scheduled/
Graphical Reports
	›
Supervisor Functions (Monitor, 
Whisper, Barge)
Application
Voice Calling & Video Conferencing
Use Cases
Healthcare scheduling and support coordination
Sales teams with high call volume and reporting needs
Project-driven teams with distributed call handling
ALL UC PLANS INCLUDE
	›
Desktop App
	›
Mobile App
	›
Unlimited Calling
	›
Local Number
	›
Auto-Attendant
	›
Caller ID
	›
Hunt Groups with Agent Log-In/
Out
	›
Call Transfer
	›
Call Hold
	›
Three-Way Calling
	›
On-Hold Music
	›
Hot Desking
	›
Paging
	›
Call Park/Pickup
	›
Intercom
	›
Spam Call Blocking/Tagging
	›
Emergency Services Notification
	›
Voicemail
	›
30-Day Archiving Retention
	›
Presence Detection/Two-Way 
Sync
	›
QoS Dashboard
	›
Call History
	›
Active Directory
	›
Chrome Click to Call
Additional Charge: Company Messaging and Webinar
Additional Charge: Company Messaging and Webinar
```


<a id="p-bce40ed0eaa2bbe7"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/K-12 Education Checklist.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/K-12 Education Checklist.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/K-12 Education Checklist`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
ENHANCE TEACHER, STUDENT 
AND PARENT EXPERIENCES
K-12 Education Checklist
A fully integrated Unified Communications (UC) platform 
improves teacher, student and parent experiences by 
supporting:
	› Secure and compliant communications
	› Reliable communications in the event of an Internet or power outage
	› Archivable, searchable, and trackable teacher, parent, and student 
communications
	› Advanced features, such as our seamless integration with MS Teams
We have the expertise, experience and UC platform to modernize and transform your 
school or district, and help you deliver better experiences.
CHECKLIST
ONE COMMUNICATIONS PLATFORM - ONE LOW MONTHLY RATE
Phone  |  Video  |  Chat  |  SMS  |  Contact Center  |  Files  |  Archiving
```

#### Page 2 / 2 — `page-002.png`

```text
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_K12UseCase_052025
Contact us today to find out how a fully integrated Unified Communications 
platform can improve teacher, student and parent experiences.
Our Unified Communications platform delivers secure, reliable 
communications solutions.
YOUR NEEDS
OUR SOLUTIONS
Teacher, Student and 
Parent Experience
	

Easily communicate with all users - from 
students and parents to school board and 
community members
	

Build stronger parent and faculty 
relationships.
	

Raise parent and community engagement 
with proactive outreach
	

Improve accessibility and new-family 
onboarding
	
✓
Our UC platform supports multiple, integrated 
channels including voice, SMS, file sharing, 
content archiving, video conferencing and 
more
	
✓
It’s easy to send automated and repeated 
reminders for important events, such as 
back-to-school nights or parent-teacher 
conferences
	
✓
Our mobile app allows educators and 
administration to never miss important 
calls and facilitates easy collaboration from 
anywhere at any time
Staff Productivity
	

Support teachers and staff as they move 
around the school or work remotely
	

Enable parent and student interactions that 
are efficient and frustration-free
	

Help teachers and staff focus on teaching and 
less on admin and learning new technology
	

Improve teacher and staff collaboration and 
productivity
	

Simplified experience and communications 
redundancy for schools using Microsoft Teams 
for chat and video meetings
	
✓
As a tightly integrated platform, our 
UC ensures consistent and reliable 
communications across devices regardless of 
where your employees are
	
✓
Chat and SMS automatically synchronize 
across mobile and desktop apps
	
✓
Voice, chat and email queues combine into a 
single omni-channel experience
	
✓
Our integrated MS Teams solution gives users 
a one-app experience for phone, SMS and 
advanced calling right within Teams; if Teams 
goes down, the UC mobile app can be used 
for calls and SMS to ensure communication 
channels remain accessible
Flexibility and Security
	

Ability to scale to meet changing school or 
district infrastructure updates and school 
layout redesigns
	

Protection of teacher information and 
privacy, such as using their work number 
versus their personal cell for school-related 
communication
	

Ability to leverage important insights 
and trends securely captured from your 
communications data
	

A secure and compliant communication 
solution designed to  protect your school’s 
sensitive information
	
✓
Cloud-based communications are easy to 
manage from a central account, adding new 
phone numbers as needed
	
✓
Our mobile app allows teachers and staff to 
field parent calls remotely without revealing 
personal phone numbers
	
✓
Our unique intelligent archiving solution 
allows communications data to be archived 
and easily searched and retrieved for insights, 
disputes, to identify trends, and more
	
✓
Your data is private and protected in our 
secure cloud, and archived records are easily 
accessible and searchable
```


<a id="p-38b43697498e05f5"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Financial.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Financial.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Financial`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
THREE WAYS TO CONNECT AND 
COLLABORATE WITH MORE FLEXIBILITY 
AND SECURITY FOR BETTER CLIENT AND 
EMPLOYEE EXPERIENCES
DIGITAL INTERACTIONS HAVE SKYROCKETED IN POPULARITY, 
TRANSFORMING INDUSTRIES FOREVER—INCLUDING FINANCIAL 
SERVICES
Whether your business is insurance, mortgage lending, banking or a credit union, the last year has 
likely forced your operations to go digital virtually overnight—and exposed gaps in digital and security 
capabilities. But what may have seemed a headwind has now turned into a tailwind, as you accelerate 
digitization in the coming year from what may have been planned as a five-year transformation. As you 
advance your company’s digital capabilities, remember that the two constituents who matter most are 
your customers and your employees. Cloud-based communication and collaboration technology lets you 
enable and empower both to ease engagement and improve customer service, regardless of location. 
Prospects and customers enjoy a better experience, because they can always reach whoever they need to 
in your company and benefit from integrated, omnichannel systems that maintain consistency from the 
first conversation to closing the deal. Employees (and your recruiting strategy) gain flexibility—you can 
staff your service representative team in a more distributed, cost-effective manner.
Let’s take a look at how digital-first unified communications will enable a better customer experience, 
empower mobility and support working from wherever, while also supporting your security and 
compliance efforts.
FINANCIAL SERVICES 
USE CASE
```

#### Page 2 / 4 — `page-002.png`

```text
THE CUSTOMER EXPERIENCE
Help customers help themselves.
Tech-savvy millennials (aged 22-40) represent 43%* of the mortgage market and expect all digital 
interactions to equal the convenience, speed and ease of Amazon or Instagram. Digital self-service is key 
to winning their business. That has implications not just for your business’s web presence and mobile 
app capabilities but also for automated communications and speedy issue resolution. Customers have 
come to expect proactive notices via text message or email—whether about monthly statements or 
balances or mortgage payments. Millennials aside, delivering a positive customer experience means 
enabling quick access to assistance (so the customer feels prioritized); choice to engage however and 
whenever they want (so they feel in control); a personalized experience (so they feel like you know them); 
great service quality (so they feel well-served); and convenience across interactions (so there is no friction 
between contact and receiving value).
Contact Center improves customer interactions for businesses of all sizes. With customizable call flows 
and exceptional QA features to help ensure more efficient interactions, Contact Center combines voice, 
chat and email into a single omni-channel experience. You get real-time customer insights and deep 
historical reporting to help drive improved future interaction. Dynamic notifications also extend reach 
while respecting audience preference.
Benefits
Dynamic notifications
Interactive voice response
Speedy interactions
Send outbound voice, SMS and 
email notifications so you can 
contact your customers using 
their preferred method of 
communication.
Help customers with more 
straightforward concerns (e.g. 
checking an account balance or 
paying a bill) self-serve without 
using up the time of a live agent.
Real-time customer insights and 
preserved communications get 
service agents important context 
quickly, helping them deliver 
more informed responses that 
shorten times to resolution.
*Source:
https://cdn.nar.realtor/sites/default/files/documents/2022-home-buyers-and-sellers-generational-trends-03-23-2022.pdf?mf_ct_campaign=yahoo-synd-feed
```

#### Page 3 / 4 — `page-003.png`

```text
MOBILITY
Satisfy hybrid work models and maintain productivity from wherever.
You and your employees need to be able to work flexibly whether in the office, at home, in transit 
or at another office or branch location. And your customers must experience seamless, consistent 
communications, which means you maintain the thread of your conversations over time as they continue 
across channels from a home office to the main office, and everywhere in between.
Our UC solution seamlessly integrates all your communications tools—desktop phones, mobile phones 
and computers—into one manageable solution that flexibly accommodates employee needs and 
workplaces while ensuring a business-centric and consistent customer experience.
Benefits
Consistency
Flexibility
Easy to use
Customers will always see 
the business phone number, 
whether your employees call 
from their laptop, mobile phone, 
office phone or contact center.
Video conferencing participants 
can join meetings from their 
desktop or mobile devices, 
wherever they are.
Chat messages automatically 
sync across mobile and 
desktop apps, so teams can 
stay connected and access 
conversations from wherever 
they work.
```

#### Page 4 / 4 — `page-004.png`

```text
COMPLIANCE AND SECURITY
Manage risk and adhere to regulations, standards, laws and policies.
From Dodd-Frank to the Affordable Care Act to SOC2 compliance, you and your compliance officer 
must regularly conduct audits of processes, systems, services, files and more to ensure compliance 
with industry regulations and manage risk. For instance, the Financial Privacy Rule requires financial 
institutions to provide each consumer with a privacy notice, explaining where info is shared, how it is 
used and how it is protected at the time it establishes the consumer relationship and annually thereafter. 
Managing risk is more challenging, as 2022 was a banner year for data breaches and cyber attacks. 
Offline access to data on a 24/7 basis is key, as is redundant storage, an uptime SLA, configurable 
retention policies, data encryption and more.
Our UC solution is an integrated Unified communications platform with security and privacy controls that 
address a wide range of financial and insurance services regulations. It combines a phone system with 
desktop and mobile apps, video conferencing, team chat and business SMS, as well as file collaboration 
and backup capabilities. A cloud-native contact center (or customer service team) solution can be 
deployed as a feature or acquired stand-alone. Additionally, the Archiving add-on service allows your 
business to automatically store, protect and quickly retrieve your communications data whenever you 
need it. Everything you need to succeed in today’s high-pressure business climate is included—from 
encrypting sensitive correspondence, proposals and research to collaborating on due diligence with 
private room access controls for documents. All this is available to your team whether they’re in the office 
or on the road, with full support for mobile devices.
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_FinancialUseCase_052825
Benefits
Secure data
Secure meetings
Security compliance
Data retention
Your files and voicemails 
can be encrypted at rest 
and in transit, and you 
never need to worry 
about losing a file, since 
two copies are always 
backed up.
Stop unwanted meeting 
participants by ensuring 
no one can join your 
virtual conference 
before you do, or lock 
the meeting after all 
are present to prevent 
anyone else from 
joining.
Audits are manageable 
when your 
communication and 
collaboration solution 
provider has security, 
privacy controls and 
archived records that 
address FINRA, GDPR, 
HIPAA, Sarbanes-Oxley  
and more.
Communications can be 
captured automatically 
and retained for as long 
as the business case 
requires - with retention 
options ranging up to 
ten years.
Questions? Contact us today!
```


<a id="p-7bbc122daad92551"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Healthcare.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Healthcare.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Healthcare`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
THREE WAYS UNIFIED COMMUNICATIONS
CAN BENEFIT HEALTHCARE
IMPROVE PATIENT EXPERIENCES, STAFF PRODUCTIVITY AND 
OPERATIONAL EFFICIENCY – ALL WITH ONE COMMUNICATIONS 
PLATFORM
Providing outstanding patient care is a top priority for healthcare organizations. But as patient needs and 
expectations evolve, healthcare organizations must evolve as well. To meet patient’s expectations for a 
convenient, modern experience, healthcare organizations recognize they must provide quick answers, 
increased access, helpful service and efficient task resolution at all points in the patient journey.
A fully integrated Unified Communications platform goes a long way toward improving the patient 
experience and engagement – regardless of whether patients are in the examination room or sitting 
at their kitchen tables. Empower your staff to proactively engage with patients, reminding them of 
upcoming appointments, prescription refills and outstanding bills. Communicate with patients in their 
preferred channel – voice, email, text or video – all while meeting security, compliance and privacy 
requirements. The flexibility and feature set of unified communications also helps increase the 
productivity and efficiency of staff and operations, which further improves the patient experience.
Let’s take a look at some common use cases for most healthcare organizations, along with the benefits 
and capabilities needed to implement each.
HEALTHCARE 
USE CASE
```

#### Page 2 / 4 — `page-002.png`

```text
DELIVER EXCEPTIONAL PATIENT EXPERIENCE
Address patient queries quickly and efficiently.
When your patients have questions or need help, you want to give them the right information – quickly 
and hassle-free. No one wants to wait on hold or be passed around to multiple departments. To 
maximize every interaction, healthcare providers need to transform their communications platform to 
ensure superior responsiveness for every patient, every time. This means easy, accurate and prompt 
answers to patient inquiries, as well as proactive appointment reminders, outreach and follow-up.
When you adopt our Unified Communications (UC) solution, you untether your staff from old technology. 
With our single, integrated platform, staff can handle any volume of inbound queries across multiple 
channels – phone, chat, text and video. Integrated with most major electronic health record (EHR) 
systems, our UC solution provides the seamless digital care and proactive outreach that your patients 
deserve.
Benefits
Answer patient queries fast 
and effectively
Send proactive and timely 
reminders
Engage patients through any 
channel
Rapidly verify patient 
identification and route calls to 
the right staff or department. 
Provide self-service options for 
finding common information 
or handling routine tasks using 
interactive voice response (IVRs) 
and intelligent routing.
Minimize no-shows, increase 
medical adherence and reduce 
the revenue cycle with proactive 
voice, text or email reminders for 
appointments, prescription refills 
and outstanding bills.
Engage patients or caregivers
through their preferred
channels, moving easily
between integrated phone,
chat, text, video, call center,
email and secure file sharing.
```

#### Page 3 / 4 — `page-003.png`

```text
MAXIMIZE STAFF PRODUCTIVITY
Work from anywhere with integrated, mobile communications.
Your clinicians and staff want to be as productive as possible - whether they’re in the office, answering 
calls from home or conducting virtual exams. This means empowering your employees to connect 
with patients and colleagues – before, during and after each appointment – on any device, through any 
channel, from any location.
Our integrated Unified Communications platform makes it easy to support remote or hybrid work 
environments. Our feature-rich set of tightly integrated and intuitive cloud solutions lets your staff 
easily and securely manage high call, text or email volumes, share documents and files, conduct video 
appointments and log and summarize important interaction details.
Benefits
Work from anywhere
Support virtual visits
Compile better call summaries
Our integrated UC platform is
available virtually anywhere, 
anytime and on any device 
– creating a more flexible 
workforce, extending reach and 
improving productivity.
Patients increasingly prefer 
the convenience and access of 
telehealth. Our UC solution
includes easy-to-use and secure 
high-definition video, screen 
sharing and collaboration 
features.
With artificial intelligence 
(AI)-enabled communication 
systems, your staff-patient 
communications can be 
automatically transcribed, 
redacted and even summarized, 
making future review a snap.
```

#### Page 4 / 4 — `page-004.png`

```text
IMPROVE OPERATIONAL EFFICIENCY, SECURITY 
AND COMPLIANCE
Remain secure and compliant while you scale and flex to meet patients’ needs.
Just as landline home phones are household relics, on-premises phone systems for healthcare 
organizations are outdated, expensive to maintain and hard to move.
Investing in a Unified Communications platform empowers healthcare organizations to dramatically 
increase operational efficiency while protecting data privacy and security. If your patients, staff and 
providers are using chat, text, voice, video and email to connect, our UC solution makes it easy to 
preserve, protect and retrieve communications in compliance with data retention regulations. You 
can also scale in a budget-friendly manner without rewiring or purchasing new on-site hardware – 
maintaining security and reliability for all your staff and patient communications.
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_FinancialUseCase_052825
Benefits
Operate with HIPAA-compliant 
security
Ensure staff privacy
Scale flexibly
Our services are designed to 
meet the privacy and security 
requires for Protected Health 
Information (PHI), including 
HIPAA and HITRUST certification. 
We support compliant data 
encryption and retention and 
ensure your records are easily 
searchable and accessible.
Mobile workers need to be 
able to securely communicate 
and share documents and files 
while protecting their own 
personal privacy (for example, 
not disclosing personal phone 
numbers). Our mobile apps 
extend business numbers to 
mobile devices, keeping your
team members’ personal phone
numbers private when they are
routing or returning calls.
Our cloud-based 
communications platform is 
easy to scale and manage. 
Add temporary staff during 
periods of higher call volumes 
and expand your talent pool to 
non-local markets. If you need 
to expand or move locations, it’s 
simple to create a new account, 
port numbers and drop ship 
new phones – all from a central 
account.
Contact us today to discover how a fully integrated Unified Communications 
platform can help your healthcare organization thrive and grow.
```


<a id="p-8785797e7bd09d50"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - K-12 Education.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - K-12 Education.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - K-12 Education`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
Three Ways Unified 
Communications Can 
Benefit K-12 Education
IMPROVE TEACHER, STUDENT, AND PARENT EXPERIENCES – ALL 
WITH ONE AI-POWERED COMMUNICATIONS PLATFORM
Students now learn in a variety of settings: online, hybrid, in-person and in a variety of ways. While the 
where and how may evolve with circumstances and new technology, certain constants remain: Students 
need to feel included, safe, well-resourced, and engaged. Teachers require effective communication 
and collaboration tools, and aim for a better work-life balance. Parents desire consistent, simplified, and 
effective two-way communication. Administrators want secure, compliant and reliable communications 
for their faculty, parents, and students.
A fully integrated AI-powered unified communications platform goes a long way toward improving 
student, teacher and parent experiences, outreach, privacy, and engagement – regardless of whether 
the student is learning online or sitting in class. Plus, it increases teacher and administrator productivity, 
improves operational efficiencies, and simplifies communication with community members and school 
boards.
Let’s take a look at three key use cases for K-12 organizations – along with the benefits and capabilities 
needed to implement each.
K-12 EDUCATION
DATASHEET
```

#### Page 2 / 4 — `page-002.png`

```text
COMMUNICATION METHOD OF CHOICE
Engage in the methods that your students, parents and administration prefer.
Communication preferences vary as widely as learning styles. Parents and guardians may appreciate 
an email, text, or phone call. School boards find virtual meetings and collaboration capabilities highly 
valuable. When all communications channels are supported and integrated, your interactions can move 
seamlessly across channels, letting you satisfy the communication preferences of everyone involved.
Our Unified Communications (UC) platform helps your organization connect with students, parents, and 
the broader community more efficiently and effectively. Your educators and administrators can interact 
across multiple channels, supported by integrated chat, SMS, video conferencing, phone, screen sharing, 
and more. With our UC platform, you can switch between methods of communication as circumstances 
dictate and people prefer.
Benefits
Communication when you 
need it
Expanded communication 
options
Unique, high-quality 
experience
Communicate- pick up a
call or text – whenever it’s
convenient for you with access
from any device at any time.
Whether you are in your
office or classroom, or on-the-go,
you get secure, reliable
communications.
Beyond the phone - use
chat, SMS, or video for
conversations with students,
partners, or colleagues.
Video meetings include AI
transcription and insights.
Whether assigning homework,
scheduling a parent-teacher
conference, or running a PTA
meeting, everyone involved
gets the same seamless, easy-to-
use digital experience.
```

#### Page 3 / 4 — `page-003.png`

```text
ADMINISTRATOR AND EDUCATOR PRODUCTIVITY
Work from wherever with integrated, mobile communications.
You want your teachers to spend more time teaching – and less time worried about admin tasks. And you 
want them connected whether they’re in the classroom, teaching remotely, or managing tasks anywhere 
else.
Our integrated AI-powered unified communications platform, allows teachers to easily connect with 
students, parents, and colleagues. Our feature-rich set of tightly integrated and intuitive cloud solutions 
empower your entire school staff to easily collaborate with each other, manage calls, share files and 
create content. Our AI Assistant helps staff to create content quickly, research questions, check formulas 
or grammar and more.
Benefits
Connect from anywhere, 
anytime
Work smarter, not harder
Switch between channels
Integrated cloud
communications let you
connect regardless of location.
Teaching virtually from home?
No problem. Want to share
student work in an online
conference with parents?
Easy to do.
Switching between
applications and channels can
take time and be frustrating.
When your staff has integrated
phone, chat, SMS, AI
assistance, video conferencing,
screen sharing, and file backup,
they can spend more time
teaching and less time on
operational tasks.
Need to finish an internal
department call on the
commute home? No
problem: You can move
seamlessly between inclassroom
phone to mobile
and then to online video
conferencing as needed.
Simon Bridges
Robert Kuchinski
Melanie Dawson
Anita York
Matt Lindsey
Dennis Nelson
Erica Gardener 
Paulie Mai  
Sarah Gaines
Jay Travis
Catherine Slowe
Amanda Veracruz
Talking: Robert K
$77(1'((6ৰ৴
CHAT
NOTES
Scheduled duration: 1hour
12 min left
Anita York
Melanie Dawson
Robert Kuchinski
RK
Erica Gardener
EG
Phone Caller
Jay Travis
Amanda Veracruz
AV
Catherine Slowe
Dennis Nelson
Matt Lindsey
Paulie Mai
MEETING INFO
Melanie Dawson
& Simon Bridges
12:48
```

#### Page 4 / 4 — `page-004.png`

```text
OPERATIONAL EFFICIENCY, SECURITY AND RELIABILITY
Easily scale, flex and remain compliant as your needs change.
Relying solely on landline phone systems for K-12 education is an outdated model that’s expensive to 
maintain and hard to move. Schools need a phone in each classroom – with its own number – that’s 
secure, trackable, and portable.
Investing in a unified communications platform like ours allows educators to dramatically increase 
operational efficiency while protecting data privacy and security. If you have plans to build new schools 
or simply shuffle classrooms, unified communications platforms make it easy to scale in a budget-
friendly manner without the need to rewire or purchase new on-site hardware. And mobile apps make 
connecting with roaming teachers a snap.
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_K12UseCase_052025
Benefits
Scale and flexibility
Increased control over privacy
Built-in intelligent archiving
Integrated cloud communications 
allow you to continue connecting
regardless of location. Teaching 
virtually from home? No 
problem. Online conference with 
parents where you want to share
student work? Easy to do.
With our mobile app, teachers
can control access, increase
privacy, and field parent calls
and texts – without having to
reveal their personal phone
numbers.
Protect your organization’s
Interactions, and leverage
Intelligence to make informed
decisions. We support secure,
compliant data retention
and ensure your records
are accessible and easily
searchable.
UNIFIED
COMMUNICATIONS
If you currently use MS Teams for your chat and video meetings, we also offer an integrated Teams
solution that gives teachers and staff a one-app experience for phone, SMS and advanced calling
features right within Teams. And, if Teams goes down, staff can use the our mobile app or web app
for calls and SMS to ensure communications continuity.
Contact us today to find out how a fully integrated unified communications 
platform can help your school or district deliver on its educational mission.
```


<a id="p-56c39293da950284"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Manufacturing.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Manufacturing.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/Industry-Specific Collateral/UC Use Case - Manufacturing`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
THREE WAYS UNIFIED COMMUNICATIONS
CAN BENEFIT MANUFACTURING
IMPROVE CUSTOMER EXPERIENCES, ENHANCE 
COLLABORATION AND DRIVE STRATEGIC DECISIONS – ALL 
WITH ONE COMMUNICATIONS PLATFORM
Manufacturing operations require robust and adaptable communications solutions to coordinate 
production lines, manage supply chains and address machinery issues. Whether a manufacturer sells 
directly to consumers or to other businesses, connecting quickly with the right customer, supplier or 
manager for inventory, order and delivery status helps minimize business disruption.
A robust Unified Communications (UC) and collaboration platform can provide the necessary 
scalability and real-time accessibility to support remote quality inspections, facilitate equipment 
troubleshooting and enable seamless collaboration across multiple facilities – all while reducing the 
financial and operational burden of a physical phone network.
Let’s look at how a fully integrated UC platform can improve customer service and satisfaction while 
increasing internal and external collaboration and strategic decision making.
MANUFACTURING 
USE CASE
```

#### Page 2 / 4 — `page-002.png`

```text
DELIVER SUPERIOR CUSTOMER SERVICE AND  
INCREASE SATISFACTION
Engage through your customers’ preferred channels.
Customers expect to communicate the way they want to, when they need to. When customers reach out, 
manufacturers need to provide consistent, accurate and efficient service and response across various 
communications channels.
Our Unified Communications solution untethers your teams from old technology, allowing them to 
interact with customers across multiple channels, supported by integrated phone, chat, text messaging, 
SMS, video conferencing, screen sharing and more. Communicate with customers more efficiently 
and effectively – all within one platform – and provide the seamless digital service and support your 
customers expect.
Benefits
Seamless and personalized 
engagement
Improved responsiveness
Proactive issue resolution
Customers can contact you 
via phone, email, chat and 
WhatsApp to quickly get the 
answers they need. Employees 
can quickly identify the customer 
in context, thanks to CRM and 
ERP integrations coupled with 
AI-generated summaries of the 
last call.
Modern UC can improve 
response times by automatically 
routing customer calls to the 
right department, such as 
customer service, technical 
support or billing. Interactive 
voice response (IVR) supports 
customer self-service for routine 
issues, providing quicker answers 
and reducing employee workload 
during busy periods.
AI Sentiment Analysis can gauge 
customer emotions to help the 
business identify and address 
potential areas of satisfaction 
or dissatisfaction for quick 
resolution.
```

#### Page 3 / 4 — `page-003.png`

```text
ENHANCE COLLABORATION AND EFFICIENCY
Communicate from wherever with integrated mobile apps and tools.
You want your employees at their most productive, whether they’re checking orders, maintaining 
equipment or arranging delivery. This means empowering them to connect with customers, suppliers 
and partners – on any device, through any channel, from any location.
Modern Unified Communications empower employees with tools like video conferencing, chat, SMS 
and file sharing, facilitating real-time collaboration and quick decision making. This leads to improved 
operational efficiency, a more cohesive work environment and rapid issue resolution.
Benefits
Remote quality inspections 
and faster troubleshooting
Automated customer updates
Collaborative product 
development
Our mobile app enables remote 
quality inspections and virtual 
facility tours, without travel to 
the site. Instant messaging and 
video enable administrative 
staff to quickly connect with 
production to address inventory 
levels and safety and compliance 
issues.
Proactive notifications can help 
update customers and suppliers 
about important order and 
inventory changes, and can 
send maintenance and invoices 
reminders.
Teams can securely share 
documents and blueprints 
in collaborative product 
development with R&D teams 
and external consultants.
```

#### Page 4 / 4 — `page-004.png`

```text
DRIVE STRATEGIC DECISIONS AND GROWTH
Access and analyze communications records to identify areas for improvement.
Effective decision making requires accurate business data, including the documentation of customer, 
supplier and employee communications for both regulatory requirements and process improvements. 
An integrated Unified Communications platform – including UCaaS and CCaaS with advanced analytics 
and reporting – provides business stakeholders with the critical data, insights and coordination needed to 
make informed decisions and drive growth. 
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UC_FinancialUseCase_052825
Benefits
Data-driven process 
improvements
Data-driven customer service 
improvements
Regulatory compliance and 
audit trails
Reports and analytics surface
useful business insights that can 
lead to process improvements 
related to call volumes, hold 
times and key topics.
Monitor and analyze customer 
calls to help identify interaction 
trends, agent performance 
and areas for improvement. 
Managers can coach agents to 
improve service delivery, which 
can increase customer loyalty.
Archived communications – 
including securely stored records 
that are easily retrievable – help 
businesses meet regulatory 
compliance requirements for 
audits and legal inquiries.
Contact us today to discover how a fully integrated Unified Communications 
platform can help your manufacturing company thrive and grow.
```


<a id="p-430dd20e6c200a2f"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Benefits of Archiving 2025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Benefits of Archiving 2025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Benefits of Archiving 2025`

**Page count:** 3

#### Page 1 / 3 — `page-001.png`

```text
Protect Your Organization and 
Leverage Intelligence:
THE VALUE OF ARCHIVING FOR YOUR UNIFIED COMMUNICATIONS
DATASHEET
Businesses’ day-to-day communications are enriched with valuable 
knowledge, IP and insights. Whether it’s interactions with your customers 
and prospects, dialogues between your company’s employees or 
conversations with 3rd party stakeholders, they hold are substantial 
business value, and potentially business risks. Archiving allows organizations 
to better manage, analyse and govern these interactions.
WHAT IS COMMUNICATION ARCHIVING?
Archiving automatically collects and preserves electronic communications such as voice 
calls, chats, SMS, video meetings, and email from your end-user channels and stores these 
items in a separate, centralized location. 
This provides continuous historical access to your communications with intuitive unified 
search, preview, playback, exporting, and reporting functionality across all channels in a 
single, secure, and encrypted platform. Data retention durations are configurable based 
on business needs. 
WHY SHOULD BUSINESSES HAVE ARCHIVING?
With the abundance of interactions being created every day across multimodal channels, 
organizations can utilize Archiving to safeguard and reap business value from these 
communications.
```

#### Page 2 / 3 — `page-002.png`

```text
ADDRESS DISPUTES AND 
COMPLAINTS
Disputes are unavoidable – Avoid the ‘he said, 
she said’ misinterpretations of the dispute. 
A call recording is a direct account of what 
occurred during the phone conversation and 
can help bring closure to a disagreement. 
Retain, retrieve and analyze contested calls 
quickly and efficiently.
ENHANCE FRONTLINE USER 
PERFORMANCE
Frontline users are at the forefront of 
effectively representing your products, 
resolving issues, and answering customers’ 
questions. Review interactions for quality, 
feedback, and coaching. Leverage archived 
communications to develop skills and 
expertise for sales, customer service and 
support agents.
ADHERE TO COMPLIANCE
Preserve communications to comply with 
industry (HIPAA, FINRA, SEC, IIROC, etc.), 
state, and local regulations. Retaining these 
communications is mandatory by some 
regulators and is a must to avoid costly fines. 
Stay compliant with Archiving; preserve 
interactions, enable access controls, provide 
intuitive retrieval and ensure tamper-proof 
storage.
SATISFY LEGAL OBLIGATIONS
Produce interactions promptly for litigation 
cases, investigations, and eDiscovery 
requirements. Courts, regulators and internal 
governance teams can rely on communication 
recordings as part of an investigation or court 
proceeding. Easily support identification, 
collection, and production of electronically 
stored communications.
KNOWLEDGE AND CONTINUITY
Whether due to employee turnover, temporary 
leaves of absence or having a holistic view 
of a customer case, organizations can also 
preserve and share communications, ensuring 
continuity. Identify and resolve issues faster 
with Archiving and subsequently ensure higher 
customer satisfaction and overall experience.
DATA INTELLIGENCE AND INSIGHTS
Businesses can analyse and evaluate key 
themes, trends and feedback from their 
conversations. Make more informed decisions, 
help generate revenue, and increase efficiency 
to reduce overall operational costs.
```

#### Page 3 / 3 — `page-003.png`

```text
QUESTIONS? CONTACT US TODAY!
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
USE CASES
ARCHIVING FOR UC
Our state-of-the-art Archiving platform is more than just information storage, it is designed 
to preserve and protect your organization’s communications. Intermedia Archiving 
automatically collects phone call recordings, voicemails, agent chats, SMS messages, video 
meetings, and more. With fast, powerful, contextual search, millions of files can be queried 
using dozens of properties in seconds. Choose to store data for as long as the business 
case requires – with retention options ranging up to ten years.
LOGISTICS & 
TRANSPORTATION
ORDER CONFIRMATION
Verify and confirm orders 
based on historic messages 
and verbal interactions. 
Ensure you have the 
correct summary; re-listen 
to call records and review 
messages.
ARCHIVING SOLUTION
3 Year Retention
AUTO DEALERSHIP
RESOLVE DISPUTES
A dispute has arisen over 
whether a payment-plan 
disclaimer was conveyed to 
a customer.
Recordings provide 
accurate accounts of 
conversations and facilitate 
accurate resolution.
ARCHIVING SOLUTION
1 Year Retention
INSIDE SALES
SALES COACHING
Managers are looking to 
review sales agent calls for 
correct selling practices and 
general performance.
Provide targeted feedback 
to employees and review 
agents’ interactions over a 
sample of engagements.
ARCHIVING SOLUTION
1 Year Retention
```


<a id="p-710072ac8ba4be59"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Brochure - Abbreviated 041026.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Brochure - Abbreviated 041026.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Brochure - Abbreviated 041026`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
One Intelligent Platform. Smarter Interactions. 
Better Outcomes.
Our intelligent Unified Communications (UC) solution combines a feature-rich business phone 
system AI capabilities, texting, chat, video meetings, contact center, file sharing and more, with 
integrated mobile and desktop apps that allow for wherever, whenever communication. And with 
our UC, they are all available on one integrated, secure, reliable, and easy-to-use platform. 
INTELLIGENT SEAMLESS CONNECTION
Our UC platform brings communication, 
collaboration, and intelligence together in 
ONE powerful platform — empowering every 
employee to work smarter and every customer 
to feel valued. 
By combining all-in-one communications with 
AI-driven automation, real-time intelligence, 
and actionable insights, our UC transforms 
how people connect, solve problems, and get 
work done. 
FLEXIBILITY AND EFFICIENCY
With our integrated voice and data network, 
ability to mix and match plans per user, and 
flexible contract options, your business will 
run more efficiently.
HIGHLY SECURE
Triple Guard Security™ protects users and 
their data from any potential cyberthreats with 
secure datacenters, a certified security team, 
encryption, password management, and 2FA.
BROCHURE
INTELLIGENT BUSINESS COMMUNICATIONS
```

#### Page 2 / 2 — `page-002.png`

```text
Ref#: 0000A_Audience_Title_Type__EN_US_000023
UCAbbreviated_040226
PHONE SYSTEM AND HARDWARE
Cloud-based phone service offering 100+ 
enterprise-grade calling features and excellent 
network call quality and uptime.
System configuration and call reporting 
managed from a single web-based portal 
with built-in Spam Call Protection.
Variety of plug-and-play devices available, 
pre-configured to cater to your business needs. 
AI CALL RECAP
Automatically generates post-call summaries 
with transcripts, sentiment analysis, and 
topic highlights to improve performance and 
customer service
FILE MANAGEMENT
Seamless file access across devices with user 
control, real-time backup, quick recovery, 
and up to 200 GB1 per user of file storage.
MESSAGING AND TEXTING
Real-time communication with direct, private, 
and public channels for unlimited internal
conversations, file sharing, and more. And, 
communicate with customers in real-time 
via SMS and MMS.
MS TEAMS EMBEDDED SOLUTION
For Teams users, enhance your communication 
with our UC For Teams integration, seamlessly 
combining UC's advanced cloud-based phone 
system and SMS capabilities with Teams’ 
collaboration features for a unified, single-app 
experience. 
AI ASSISTANT
Increase productivity using Generative AI to 
access information more easily and help with 
daily tasks right within the mobile and desktop 
app.
MEETINGS WITH AI MEETING RECAP
Meet in HD video and share your screen for 
more interactive and productive virtual 
meetings. Includes automatic meeting lock, 
virtual backgrounds, annotation, AI Meeting 
Recap (summary, transcription, and next steps), 
and more.
ADVANCED HUNT GROUPS (CALL CENTER)
Extended capability with supervisor monitoring, 
scheduled reports, extended storage, real-time 
dashboard, smart greetings, customizable call 
distribution, and agent wrap time.
1. 200GB is only available for Unite Enterprise licenses. 50GB available on Pro and 5GB available on Essential. 
2. For additional information regarding Archiving tier and limitations, contact your Account Executive.
UC Enhanced Features
UC Features
CONTACT CENTER
Voice, chat, and email queues combine into a 
single omni-channel experience. Customizable 
call flows provide exceptional customer 
interactions.
COMPANY MESSAGING
Enable SMS (text) communication on your 
main or toll-free business number, giving your 
customers another way to engage with your 
business. 
ARCHIVING
Automatically capture and retain calls, chats, 
meetings and SMS to help ensure your 
communications are preserved and archived 
in one place.
Have continual historical access to your 
company’s last 30 days of UC calls, video 
meetings, chats and SMS. Free 30-day archiving 
retains communication data for 30 days2. For 
longer retention periods, upgrade to one of our 
1-year to 10-year plans.
QUESTIONS? CONTACT US TODAY!
gpcom.com/business/unified-communications 
gpcenterprise@gpcom.com
```


<a id="p-e71d17b3540e8356"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Phone Comparison sheet.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Phone Comparison sheet.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Phone Comparison sheet`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC UNIFIED COMMUNICATIONS 
PHONE OPTIONS
BASIC
INTERMEDIATE
ADVANCED
Model
Yealink T53W
Yealink T54W
Yealink T57W
Display
3.7”, 360x160 pixel 
graphical LCD
4.3”, 480x272 pixel color 
LCD display
7”, 800x480 pixel capacitive 
adjustable touch screen
Line Keys
8 line keys with LED
10 line keys with LED
0
Memory Keys
21 (3-page view)
27 (3-page view)
29 one-touch DSS keys
USB Port (2.0 Compliant)
1
1
1
Wi-Fi
2.4GHz/5GHz Wi-Fi
2.4GHz/5GHz Wi-Fi
2.4GHz/5GHz Wi-Fi
Expansion Module
Yealink EXP50
Yealink EXP50
Yealink EXP50
Bluetooth
Built-in Bluetooth 4.2
Built-in Bluetooth 4.2
Built-in Bluetooth 4.2
```

#### Page 2 / 2 — `page-002.png`

```text
UC PHONE OPTIONS
Model
Yealink W77P
Display
1.8”, 128x160 TFT 
color screen
Simultaneous Calls
20
HD Voice
Yes
Noise Reduction
Yes
Talk Time
40 Hours
Standby Time
575 Hours
Bluetooth
Built-in Bluetooth 4.2
Range - Indoor/Outdoor
50/300 Meters
Bluetooth
Yes
Protection Rating
IP54
Security Encryption
TLS & SRTP
Model
Yealink CP965
Display
5” multi-touch screen
HD Voice
Yes
USB Port (2.0 Compatible)
2
Bluetooth
Built-in Bluetooth 4.2
Wi-Fi
Built-in 2.4GHz/5GHz, 
802.11a/b/g/n
CORDLESS PHONE
CONFERENCE PHONE
```


<a id="p-aba8f732a655e3b9"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Plan Comparison - Internal use only 2026.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Plan Comparison - Internal use only 2026.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Plan Comparison - Internal use only 2026`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UC PLAN COMPARISON
Internal use only
Click the buttons to 
compare features for 
each category.
UCPlanCompTool022426
RESOURCE 
LINE
EXPRESS
ESSENTIALS
PRO
ENTERPRISE
PHONE & PBX FEATURES
# of Concurrent Endpoints
1
1 Phone + 
Apps
1 Phone + Apps
5
5
Desktop App




Mobile App




Local Number





Auto-Attendant




Caller ID





User Call Forwarding



Hunt Groups with Agent Log-In/Out




Call Transfer





Call Hold





Three-Way Calling





Music on Hold





Hot Desking




Paging




Call Park/Pickup





Intercom





Spam Call Blocking/Tagging





Emergency Services Notification





Voicemail





Voicemail Transcription



Call Recording



Phone & PBX  
Features
Archiving
Collaboration
Analytics
Video  
Conferencing
Integrations
Call Center  
Features
```


<a id="p-7d79d5c1c73d1a3b"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Remote location install handout.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Remote location install handout.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Remote location install handout`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
UC REMOTE INSTALLATION
REQUIREMENTS
Thank you for choosing Great Plains Communications (GPC) for your Voice 
and Unified Communications services! This document serves as customer 
acknowledgement of the responsibility of installing Voice and Unified 
Communications hardware equipment at remote locations.  
Network Requirements: Customers must ensure they have a properly configured, high-performance, 
enterprise-grade broadband IP/data network.  
To allow Voice-Over-IP (VoIP) traffic, your network must have sufficient bandwidth to accommodate 
voice and video calls. GPC’s Sales Engineer can test your network remotely to ensure your network is 
capable of handling the voice and video call traffic without affecting service performance. 
When the Equipment Arrives On-site: Your designated remote site contact must be physically present 
to receive the drop-shipped equipment packages.  
Inspect the equipment and the accessories to make sure the content matches the packing slip items. 
Please immediately report any missing or damaged equipment. Failure to report missing or damaged 
equipment can risk a delay in service turn up. Store the equipment in a safe environment and retrieve 
the equipment on your scheduled service turn-up date.  
Equipment Installation: Users are responsible for the installation of the equipment and added 
accessories on the turn up date.  
It is advised to schedule your Managed Service Provider (MSP) to be onsite on your service turn-
up date to verify the service is turned up by making test calls. This will help ensure your Unified 
Communications equipment is properly installed without delay in communication for your business.  
Follow the instructions provided to power up equipment and connect to the network. Equipment is 
pre-programmed to run the setup file and configuration routine. Your designated contact can begin 
the test calls. Consult your MSP for additional network management, security and application support. 
We are delighted to be your Voice and Unified Communications partner to help you connect with 
your employees and customers across platforms. Your equipment documentation, user login 
information and applicable downloads will be sent to you via email.  
You can also download any user guides by scanning the QR code to the right.  
If you have any issues while installing the equipment, please feel free to call 888.343.8014 option 3 
for Unified Communications support.
```


<a id="p-9a3c32c7bf834ce8"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Support Documentation/UC Voicemail Instructions - Digital.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Support Documentation/UC Voicemail Instructions - Digital.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC Support Documentation/UC Voicemail Instructions - Digital`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
UNIFIED COMMUNICATIONS 
CHECKING VOICEMAIL
This quick guide will walk you through how to check your voicemail so you never miss an important 
message.
Methods for Checking Voicemail
Users can check voicemail messages from their email, from their phone or from an outside line. On the 
phone, the voicemail indicator light will be on when users have unchecked messages. Once all messages 
have been checked, the light will turn off.
Checking Messages from your Email
1.	 Ensure your computer’s speakers or headphones are connected and the volume is adjusted.
2.	 Voicemail messages will arrive in your inbox as an audio file attachment. 
3.	 Open the audio file attachment to play the voicemail.
Checking Messages over the Phone
1.	 Users dial their own extension number.
2.	 Enter the PIN number when prompted.
MENU OPTIONS
During Voicemail Playback
1 - Replay the current message
2 - Delete the message
3 - Mark the message as unheard
4 - Skip to the next message
5 - Call the sender
6 - Forward to another extension
# - Skip playback details
After Voicemail Playback
1 - Replay the current message
2 - Delete the message
3 - Mark the message as unheard
4 - Skip to the next message
5 - Call the sender
6 - Forward to another extension
Personal Voicemail Options
1 - Record a new greeting
2 - Change the PIN
* - Return to the voicemail list
Notes
	›
The date and time of each voicemail will be announced before playback.
	›
When forwarding voicemails, users can record an introductory message that will play before the 
original message.
```

#### Page 2 / 2 — `page-002.png`

```text
Changing Voicemail Greeting or PIN
For additional information on managing your voicemail settings, refer to the knowledge base article here.
Checking Messages from an Outside Line
1.	 Call the office number from an outside line like a cell phone.
2.	 When the voicemail greeting starts, press #.
3.	 Follow the prompts to enter the extension number and PIN.
Menu Options
1 - Listen to new messages
2 - Listen to old messages
3 - Access personal options (including greeting recording)
From the Desk Phone
1.	 Press the Message button
2.	 Enter the voicemail PIN 
followed by #
3.	 Press 3 for Personal Options
4.	 Press 1 to record your 
voicemail greeting
5.	 Press 2 to change your PIN
From the Mobile App
1.	 Click the profile circle in the 
top left of the screen
2.	 Click Settings
3.	 Click Voicemail
4.	 Click Greeting to change the 
voicemail greeting
5.	 Select Reset Voicemail PIN 
to change the PIN
From the Desktop App
1.	 Click Settings on the 
bottom left of the screen
2.	 Select Voicemail Settings
3.	 Enter a new PIN in the 
Voicemail PIN field to 
change the PIN
4.	 Click on the microphone 
icon to record a new 
greeting using the computer 
microphone
```


<a id="p-5fbd75d19c6f566a"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams Advanced Archiving 2025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams Advanced Archiving 2025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams Advanced Archiving 2025`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
UC & MICROSOFT TEAMS ARCHIVING 
Tap into your business’ valuable interactions; The intelligent Archiving platform has been 
designed to automatically capture, retain, and simplify searching of UC, Microsoft Teams and 
other critical communication channels. Every interaction is stored in a centralized, secure, and 
encrypted location, offering continuous historical access with retention periods ranging from 
30 days to 10 years.
KEY FEATURES:
Other key features: Legal hold | Audit reporting | Personal & Manager access (role-based 
access) | Single sign-on (SSO) | Multiple geo-location for data residency | Transcribed & 
classified data | Case management | Notifications | Optional WORM storage | and more.
AUTOMATED COLLECTION AND 
PRESERVATION
Seamlessly archives all Microsoft Teams 
and UC interactions: voice, chat, SMS, video, 
and more.
	
UNIFIED SEARCH AND ACCESS
Powerful search across channels lets users 
preview, playback, export, and report on 
archived data contextually.	
ONE PLATFORM, CENTRALIZED 
STORAGE
Stores data centrally and securely, enabling 
easy management and retrieval of archived 
communications.
SECURITY AND ENCRYPTION 
Data is securely encrypted during transit 
and at rest, with multi-factor authentication 
ensuring access for authorized users only.
ARCHIVING: UC FOR 
MICROSOFT TEAMS
UC FOR TEAMS ADVANCED ARCHIVING
PROTECT YOUR ORGANIZATION’S UC & MICROSOFT TEAMS 
INTERACTIONS, AND LEVERAGE INTELLIGENCE.
```

#### Page 2 / 2 — `page-002.png`

```text
WHY ARCHIVE UC & MICROSOFT TEAMS COMMUNICATIONS? 
Capturing daily multimodal interactions is crucial for risk mitigation, regulatory compliance, and 
productivity enhancement through insights.
ADDRESS DISPUTES AND 
COMPLAINTS 
MITIGATE RISK
Disputes are unavoidable – Avoid 
misinterpretations in disputes with call 
recordings and messages, providing a direct 
account of conversations. Bring closure to 
disagreements quickly and efficiently.
ADHERE TO COMPLIANCE
COMPLIANCE
Preserve communications to comply with 
state, local, and industry regulations (e.g., 
HIPAA, FINRA, SEC). Avoid costly fines by 
retaining interactions, enforcing access 
controls, and ensuring tamper-proof storage.
DATA INTELLIGENCE AND INSIGHTS
PRODUCTIVITY
Analyze and evaluate key themes, trends, 
and feedback from conversations to make 
informed decisions, generate revenue, and 
increase efficiency to ultimately reduce 
operational costs.
SATISFY LEGAL OBLIGATIONS 
MITIGATE RISK
Quickly produce interactions for eDiscovery 
and investigations. Courts, regulators, 
and governance teams can depend on 
communication recordings for easy 
identification, collection, and production.
ENHANCE FRONTLINE USER 
PERFORMANCE
PRODUCTIVITY
Frontline users represent your products, 
resolve issues, and answer customers' 
questions. Review interactions for quality, 
feedback, and coaching. Develop skills and 
expertise for sales and support agents.
KNOWLEDGE AND CONTINUITY 
PRODUCTIVITY
Preserve and share communications to 
maintain continuity during employee 
turnover or absences. Utilize Archiving to 
quickly identify and resolve issues, enhancing 
customer satisfaction and experience.
THERE IS VALUE IN YOUR 
BUSINESS INTERACTIONS!
Your organization's communication data holds 
valuable knowledge, IP, and contextual insights. 
Capture and retain these critical interactions to 
leverage insights and safeguard your business!
QUESTIONS? CONTACT US TODAY!
Great Plains Communications
833.341.2324
gpcenterprise@gpcom.com
UCforTeamsArchiving042725
```


<a id="p-2bc57e6340370476"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams datasheet 100325.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams datasheet 100325.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Unified Communications/UC for Teams/UC for Teams datasheet 100325`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
Boost the Power of Microsoft Teams
USING THE ENTERPRISE-GRADE CLOUD PBX OF OUR 
UNIFIED COMMUNICATIONS (UC) SOLUTION
Seamlessly add the power of our UC cloud-based, enterprise-grade PBX to Microsoft Teams, giving 
your business the communication features it needs directly within the Teams applications. Get the 
reliability and features your business deserves from local support experts you can trust.
MICROSOFT TEAMS AS YOUR 
COLLABORATION HUB
Use Microsoft’s collaboration tools to manage 
chat, file sharing and video conferencing.
NATIVE VOICE INTEGRATION WITH 
MICROSOFT TEAMS
Seamlessly add our UC enterprise-grade PBX 
features to Microsoft Teams with no additional 
employee training required.
UC ENTERPRISE-GRADE PBX
Greet and route callers to the right person or 
department and make external calls directly from 
the Microsoft Teams dialer through our UC 
Cloud PBX. 
UC FOR MICROSOFT TEAMS
1. Microsoft Teams licenses purchased separately.
Better Together
Collaborate in Teams; call 
from Teams using UC
Seamless to End-User
Familiar Teams interface 
and minimal user training
Complete Support
Support from local experts
```

#### Page 2 / 2 — `page-002.png`

```text
HOW UC AND TEAMS WORK TOGETHER
Teams
UC
Instant Messaging

Online Meetings

File Storage


5 Concurrent Endpoints

Desktop & Mobile Apps 

Unlimited Domestic 
Calling

Auto Attendant

HD Voice

Caller ID

Call Waiting

Call Forwarding

Call Transfer

Call Hold

3-Way Calling

Music on Hold

Extension Dialing

Advanced Hunt Groups

Voicemail with 
Transcription & Storage

Call Recording

QoS Dashboard

Call History

Hunt Groups with Agent 
Log-In/Out

Hot Desking

Paging & Intercom

Teams
UC
Call Park/Pickup

Spam Call Blocking/
Tagging

30-Day Archiving

Presence Detection/Two-
Way Sync

User Texting

Service Adoption 
Dashboard

Active Directory
 
Embedded MS Teams 
Calling

Click to Call Integration - 
Chrome

Meeting Integration- G 
Suite, Outlook, Slack, 
Office 365

Generic CRM Screen Pop

CRM Integration- 
Sugar, Zoho, Zendesk, 
Salesforce, ServiceNow, 
NetSuite and MS 
Dynamics

Agent Log-In/Out

Call Queueing

Configurable Wrap-Up 
Time

Configurable Agent 
Removal from Queue

Greetings Management

Smart Greetings

Wallboards

Scheduled Graphical 
Reports

Supervisor Functions - 
Monitor, Whisper 
and Barge

2. MSFT Phone System license required per user.
UCforTeams100325
```


<a id="p-d4934844046c41b4"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Voice - Non-UC/Voice Product Sheet 112524.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Voice - Non-UC/Voice Product Sheet 112524.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Voice - Non-UC/Voice Product Sheet 112524`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
GPC 
VOICE SOLUTIONS
SIP TRUNK
SIP trunking enables the end point’s PBX (Private Branch Exchange) phone system to send and 
receive calls via an IP connection with the Great Plains Communications network and PSTN 
(public switched telephone network). A Great Plains Communications switch translates the 
VoIP (Voice over Internet Protocol) connection to the PSTN. Our SIP based voice service does 
not compete for or share transport capacity with other services. Instead, it uses a common 
connection to improve cost efficiencies by consolidating voice and data traffic in a VoIP 
environment.
BENEFITS:
	›
Reduced operating costs
	›
Ability to blend premise and cloud-based services with top IP PBX vendors
	›
Fully scalable to meet present and future needs quickly
	›
Provides a managed Enterprise Session Border Controller (eSBC) placed at the 
customer premise
CUSTOMER LOCATION
GPC NETWORK
PSTN
SWITCH
SIP Trunk
```

#### Page 2 / 2 — `page-002.png`

```text
PRIMARY RATE INTERFACE (PRI)
The Primary Rate Interface (PRI) is a transmission medium that carries multiple voice services 
and data features, such as Caller ID, to medium to large sized businesses.
PLAIN OLD TELEPHONE SYSTEM (POTS)
Landline services from Great Plains Communications offer a crystal clear, affordable 
connection. Our secure phone services are not affected by weather or electrical outages. That 
means around-the-clock 911 access without the need to charge a cell phone battery.
BENEFITS:
	›
Direct Inward Dialing (DID), allowing callers to bypass the PBX auto-attendant or 
receptionist
	›
Trunk hunting to avoid busy signals
	›
Enhanced call clarity and increased reliability with end-to-end digital lines
	›
Enhanced security compared to analog phone lines
	›
Caller ID
CUSTOMER LOCATION
PSTN
SWITCH
GPC NETWORK
CUSTOMER LOCATION
GPC NETWORK
PSTN
SWITCH
VoiceSolutions112524
```


<a id="p-2ab25854e8dd2795"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Wave/WAVE Product Sheet 120424.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Wave/WAVE Product Sheet 120424.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Wave/WAVE Product Sheet 120424`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC 
WAVELENGTH 
SERVICES
WHAT ARE WAVELENGTH SERVICES?
Wavelength services use optical networking and dense wavelength division multiplexing (DWDM) 
technology to deliver highly reliable, low-jitter Layer 1 transport between locations. This service 
provides businesses with a secure, low latency and scalable way to connect your most data 
intensive network needs including data centers, enterprise locations and storage across the 
Midwest.
The Great Plains Communications network supports Wavelength services from 10 Gbps to 400 
Gbps with Service Level commitments and 24x7 network support in our Blair, Nebraska Network 
Operations Center (NOC).
FEATURES & BENEFITS
	›
Optical point-to-point
	›
Secure, private network
	›
Fully dedicated, non-shared service
	›
Predictable network performance
	›
Flexible bandwidth options
	›
Optional diverse routing available
	›
Low latency performance
	›
Transparent to higher protocols, 
such as Ethernet
	›
Standard interface of 10, 100 or 400 
Gbps with 2 fiber, single-mode fiber 
handoff
OPTICAL
CHANNEL
CUSTOMER
SWITCH/ROUTER
CUSTOMER
SWITCH/ROUTER
RECONFIGURABLE 
OPTICAL ADD 
DROP 
MULTIPLEXERS
CUSTOMER 
LOCATION OR 
DATA CENTER
CUSTOMER 
LOCATION OR 
DATA CENTER
2 FIBER NETWORK 
ACCESS CHANNEL 
(NAC) 
TERMINATION
Wave120424
```


<a id="p-757b40db7b39686f"></a>


### `extracted/OneDrive_1_4-10-2026 (1)/Wireless Internet Backup/5G Wireless Internet Backup Product Sheet 103025.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Wireless Internet Backup/5G Wireless Internet Backup Product Sheet 103025.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (1)/Wireless Internet Backup/5G Wireless Internet Backup Product Sheet 103025`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC 
5G WIRELESS 
INTERNET BACKUP
Never stop working during unexpected network outages.
In today’s fast-paced business environment, connectivity is the critical backbone of your operations. 
Power outages, fiber cuts or other unexpected issues can bring your network to a halt, impacting 
productivity and revenue. Great Plains Communications 5G Internet Backup keeps your business running 
by automatically switching to a secure wireless connection if your primary Internet goes down. When 
service is restored, it switches back to your main network, keeping your business seamlessly connected.
Features & Specifications
5GBackup103025
Benefit
How It Works
Maintain Business 
Continuity
Automatically connects to a high-speed wireless network if your 
main Internet line goes down, then switches back once restored
Keep Critical Applications 
Running
Prioritizes essential business apps so you can continue to process 
transactions, serve customers and stay productive
Get Peace of Mind with a 
Fully Managed Solution
Our 24/7 Network Operations Center monitors and manages your 
connection, sending alerts and providing support when needed
Peace of Mind for Hours
Optional battery backup provides up to 8 hours of power during 
an outage
*5G wireless speeds can vary by location, signal strength, proximity to the cell tower, and other environmental factors. Data speeds are up to 50 Mbps after 12GB, up to 25 Mbps after 20 
GB and up to 3 Mbps after 30 GB of total data usage per month. The underlying wireless carrier may temporarily slow data speeds if the network is busy. 
Worry-Free Data Usage
Enjoy unlimited data usage with 
no overage charges
Fast Wireless Speeds
Get 5G speeds up to 100 Mbps 
and higher*
Professional Setup
Includes professional 
configuration and installation of 
the Cradlepoint router
QUESTIONS? CONTACT US TODAY!
gpcenterprise@gpcom.com
gpcom.com/business
```


<a id="p-e21f5ece5d718790"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Approval Requirements Matrix v5.5 - 0725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Approval Requirements Matrix v5.5 - 0725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Approval Requirements Matrix v5.5 - 0725`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
ATG - 0725 
Approval Requirements Matrix v5.5 
1 
Approval Requirements Matrix v5.5  
 
The following Approval Requirements are the same across Enterprise, Channel, and Wholesale. 
Product Discount 
Contract Term range 
(in months) 
Auto-Approves if  
less than or equal to: 
Manager review required if >: 
Discountable, not by Term 
20% 
20% 
Discountable by Term 
 
 
0-23 
20% 
20% 
24-35 
22% 
22% 
36-47 
27% 
27% 
48-59 
29% 
29% 
60+ 
31% 
31% 
The Bulk Process used by Wholesale is not evaluated by the Product Discount Approval Requirement.  
 
 
 
 
 
 
 
 
Payback Months by Term 
Contract Term range 
(in months) 
Auto-Approves if Payback Months are less than or equal to: 
All Sales Teams 
0-23 
1 
24-35 
12 
36-47 
18 
48-59 
24 
60-71 
30 
72-83 
31 
84-95 
33 
96-107 
38 
108-119 
40 
120+ 
44 
If Payback Months are greater than the Auto-Approve level, only Manager approval review is required. 
Strategic Build Solution Site Type bypasses the Payback Months Approval Requirement. 
Net Investment 
Auto-Approves if  
<: 
Manager review 
required ≥: 
CRO review  
required if ≥: 
CFO review  
required if ≥: 
CEO review  
required if ≥: 
$50,000.00 
$50,000.00 
$75,000.00 
$100,000.00 
$500,000.00 
Churn 
Auto-Approves if ≤: 
Manager review required if >: 
CRO review required if >: 
10% 
10% 
10% 
Unfavorable Investment 
Manager review required. 
Product 
Product Manager review required. 
Dark Fiber 
Both Manager and CRO review required. 
Zone Parent Opportunity (Net Investment value) 
Manager 
CRO 
CFO review required if ≥: 
CEO review required if ≥: 
Review required 
Review required 
$100,000.00 
$500,000.00 
Strategic Build Parent Opportunities (including New Market Builds) are approved outside of Salesforce  
and therefore Auto-Approve in the system without an anchor requirement.
```


<a id="p-40f3ffc594708c0d"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Building Entry Process Flyer Generic.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Building Entry Process Flyer Generic.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Building Entry Process Flyer Generic`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
FIBER TO THE PREMISE (FTTP)
Dedicated Project Manager Assigned
Building Access Process Initiated
STEP 1
GPC’s Project Manager will review the scope of the project, schedule a site walk 
at the property and ensure all services are delivered as promised.  
STEP 2
Our Building Access Manager will work with the Property Manager/Owner to 
obtain a Building Access Agreement. This grants us permission to enter the 
property and professionally install ﬁber services for the building's tenants.
Permitting & Network Design
STEP 3
Once the Building Access Agreement is signed, GPC will obtain permits and 
other resources needed to complete the necessary exterior construction.
GPC
Pre-Construction Process
STEP 4
Our Project Manager will notify the Property Manager and the customer of 
construction timelines. GPC will initiate 811 one-call prior to construction, which 
alerts underground facility owners/operators to locate and mark facilities. This 
does NOT include private facilities such as parking lot lamps, sprinkler systems, etc.
STEP 5
STEP 6
Interior Installation
Our Project Manager will conﬁrm timelines for installing equipment inside the 
building for the customer. We may require assistance from the building's 
Property Manager to enter common areas of the building. Once the equipment 
has been installed, services will be tested, turned up and sent to billing. 
Exterior Cleanup
Once installation has been completed, GPC crews will ensure the property is 
restored to its original condition.
```


<a id="p-7fd250d16be0a8d9"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Customer Move Process.Procedure.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Customer Move Process.Procedure.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Customer Move Process.Procedure`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
Est. 1/30/2025 
Customer Move Process & Procedure 
 
Purpose: 
To define differences in move requests and create efficiencies in procedures and 
communication.  
Definitions: 
• 
Outside Move: Relocation of existing services from one 911 service address to another. 
This includes suite changes within a multi-tenant facility. 
• 
Inside Move: Relocating equipment within the same 911 service address. 
• 
DMARC (demarcation): Point of entry where GPC’s wiring meets a subscriber's wiring. 
• 
NID: Network Interface Device – A physical device marking the boundary between GPC’s 
network and the customer’s wiring (serves as the demarcation point). 
• 
Grace Period: An agreement between GPC and a customer to allow time to relocate from 
one address to another. This grace period will not exceed 5 days (1 business week). 
• 
Dual Service: Providing services at two locations simultaneously.  
• 
On-Net: Service address is lit, wired, and/or ONT is installed on premise.  
• 
Off-Net: Service address is not lit, unwired, and no ONT is present. 
• 
Lit Building: Service drop is present up to the building. Wiring/equipment may or may not 
be present – will need to refer to “On-Net” and “Off-Net” definitions for additional direction. 
 
Outside Move 
Off-Net Move 
Off-net locations will be determined by plant data records within NISC. The service address 
will be reviewed to determine if the location has existing wiring and/or equipment on the 
premises. If records indicate that there are no existing facilities, the address will be 
classified as off-net. 
Off-Net move requests will be submitted to Sales via a lead entry. Lead submissions will 
include the standard customer details (name of requestor, contact information, business 
name, business address, etc.) and will clearly state that the customer is moving from one 
911 service address to another.  
Once received by Sales, all existing procedures will be business as usual (BAU). At the time 
of close/winning the solution, the agent will clearly document that the customer is moving 
from “A” address to “B” address. The agents will also indicate if the customer will require 
both locations to be active during the transition, and if a grace period will be provided. 
1. Move (No Dual Service) 
o An Outside Move service order will be entered into NISC. This order type will 
disconnect the old location and connect the new location simultaneously.
```

#### Page 2 / 4 — `page-002.png`

```text
Est. 1/30/2025 
2. Move (Dual Service & Grace Period) 
o A grace period may be provided when a customer needs minimal time to 
complete their relocation. During this grace period (5 business days), the 
customer will not be invoiced for dual services. 
o A New Connect will be entered into NISC to install the new location. The 
existing services will automatically be disconnected 5 business days after 
the new address has been installed. If the customer requires additional 
time, it will be the customer’s responsibility to notify GPC of the extension.  
▪ 
If an extension is granted, the customer will be invoiced for dual 
services until the old location is disconnected. It will be the 
customer’s responsibility to notify GPC once they are ready to 
disconnect the old address. 
3. Move (Dual Service & No Grace Period) 
o A New Connect will be entered into NISC to install the new location. Dual 
services will be provided until the customer is fully transitioned and 
requests to disconnect the old location. Both locations will be invoiced 
according to their contracted services/terms.  The customer will be 
responsible for notifying GPC once they are ready to disconnect the old 
address. 
On-Net Move 
Service addresses with existing plant data will be determined to be on-net locations. These 
locations have existing facilities and do not require construction, splicing, or wiring. On-Net 
move requests (excluding circuits) will be entered directly into NISC by the CRC, and the 
standard move fee will apply. 
 
Inside Move 
Requests to relocate existing equipment within a 911 address will be entered directly into 
NISC by the CRC.  The CRC will provide GPC’s most current hourly labor rates and confirm 
that the customer would like to proceed with a service order. Once on-site, the dispatched 
team will provide a quote of total estimated costs to the customer.  
The CRC will submit a Teledata order (time and material request) and dispatch to one of the 
following: 
1. Business Solutions 
▪ 
VOIP 
▪ 
Trunk 
▪ 
Security 
▪ 
Managed Wifi 
2. Local Exchange 
▪ 
SIA 
▪ 
POTS
```

#### Page 3 / 4 — `page-003.png`

```text
Est. 1/30/2025 
▪ 
Video 
▪ 
Plume 
▪ 
Wireless Backup 
▪ 
SD-WAN (in footprint with active SIA) 
3. Central Office 
▪ 
DIA 
▪ 
Ethernets 
▪ 
SDWAN (in footprint with active DIA) 
In exchanges that Scheduling is implemented and procedures drafted, the CRC will 
schedule the inside move request with the customer. Exchanges/teams that do not 
currently utilize Scheduler will be scheduled by the dispatched team (BSOL, Field, CO).  
NID Move 
NID moves may be requested by customers for various reasons (renovations, demolitions, 
construction, etc.). As NID/DMARC moves will require the involvement of OSP Engineering, 
these requests will be submitted to Sales via a lead form. The CRC will collect all standard 
lead details and clearly identify the lead as a NID/DMARC move.  
Sales will submit the request within SalesForce for processing. The request will be 
submitted as one of the following:  
1. Renewal of all services. 
▪ 
Renewal or extension of existing contract term to absorb move costs. 
2. Upgrade of products. 
▪ 
Service upgrade to absorb move costs. 
3. Standalone request. 
▪ 
No extension or service upgrade – the customer will be invoiced the move 
costs up-front. 
▪ 
The request will be submitted as a 12-month opportunity and the product 
“Construction Charge” will appear as a one-time NRC.  
 
When adding a site location to the request, the agent will select “Request Manual 
Validation”, include detailed site comments, and submit the request to OSP for costing.
```

#### Page 4 / 4 — `page-004.png`

```text
Est. 1/30/2025 
 
Once costing is received, Sales will include a mark-up of 20% to the Construction Charge 
price and submit the request for approval. All normal processes will be followed to 
complete the solution.
```


<a id="p-47fdeef25fa9ff10"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/New APNI form.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/New APNI form.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/New APNI form`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Customer Name
(As it appears on customer's bill copy)
Address
City
State
Zip
Toll Free Number(s) to Port
1
2
3
4
5
6
7
8
9
10
If you have more than 10 TF's send attached excel file and say "See Attached" on line 1.
Authorized Signature
Date
Print Name
Title
        LOA not to exceed 1 page
Responsible Organization Letter of Authorization
As the end-user subscriber, or the authorized representative of an end-user subscriber, of certain Toll Free service numbers, I 
authorize Inteliquent (Entity WW) to be the Responsible Organization (“Resp Org”) for the following Toll Free  service 
numbers, including acting on my behalf, and at my direction, to transfer the Resp Org functions to:
I attest under penalty of law and as an authorized employee, or an authorized representative, of the Customer that the 
Customer is the exclusive end-user subscriber of the Toll Free service numbers listed above. The Customer assumes all liability 
for the use (including without limitation, authorized, fraudulent or misappropriated) of traffic of any other end-user subscriber 
with regards to the Toll Free service numbers listed. In addition, I understand that this request for a Resp Org change does not 
constitute an order for disconnect of service with my existing carrier(s). I, on behalf of the Customer, continue to accept 
responsibility for notifying my existing carrier(s) of any intention to disconnect and/or change my Toll Free service after 
designating the above as my Resp Org for the Toll Free numbers listed above.
New Resp Org ID:  WWT02 
SIGN
```


<a id="p-a72fe19ad5d3b5b8"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR SOP v1.2.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR SOP v1.2.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR SOP v1.2`

**Page count:** 6

#### Page 1 / 6 — `page-001.png`

```text
SOP: Operational Business Review (OBR) 
1. Overview & Vision 
The Operational Business Review (OBR) is a strategic touchpoint designed to solidify our partnership with 
Strategic customers. By providing a concise, data-driven "slick" (front/back) inserted into our trifold collateral, 
we demonstrate proactive management and technical leadership. 
Success Criteria: 
● Zero Fire Drills: Every asset is ready and handed to Marketing by Business Day 14. 
● Accuracy: Billing locations and Network diagrams are 100% synchronized. 
● Client Value: The customer leaves the meeting with a clear understanding of their network health and our 
roadmap. 
2. Core Components of the OBR Slick 
1. Network Design: A high-fidelity "Current vs. Future State" Visio, verified against billing data. 
2. Strategic Billing: Totals and expirations, featuring "Modernization" and "Performance Spotlight" levers. 
3. NOC History & Feedback Loop: 12-mo performance snapshot and holistic partnership feedback loop. 
4. Strategic Roadmap: Planned upgrades and upcoming renewal sync along with GPC solution highlights.
```

#### Page 2 / 6 — `page-002.png`

```text
3. Data Hygiene & Audit Protocol 
1. The "No Raw Dump" Rule: Sales must scrub and audit all data before handoff.  
○ Marketing is for design, not data entry or CID deciphering. 
2. Proactive Billing Wins: Audit for address/tier/MRC errors early.  
○ Presenting an internal fix during the OBR proves proactive account management. 
3. Customer-Facing Language: Translate internal catalog codes into plain-English service descriptions  
○ (e.g., 100M Fiber DIA). 
 
4. Sales Readiness & Marketing Handoff 
• 
Source of Truth: Sales must complete the OBR Sales Readiness Form (Fillable PDF) to lock in the 
strategic copy for Marketing. 
• 
The "Single Packet" Handoff: Marketing will not begin design until a single email is received 
containing: 
1. Completed Sales Readiness Form. 
 
With Scrubbed Data Tables. 
2. Finalized Visio Diagram (Verified).
```

#### Page 3 / 6 — `page-003.png`

```text
5. Process Timeline (Consecutive Days) 
To ensure professional delivery, we will follow a strictly ordered 21-business-day cycle. 
Phase 
Interval 
Responsibility 
Action 
Initiation 
Day 1 
Account Rep 
Schedule the OBR. 
Data Recon 
3 Days 
Account Rep 
Audit of locations, 
addresses, and upgrades. 
Design Phase 
10 Days 
Pete  
Network Design 
(w/ kickoff call). 
Data Collection 
5 Days 
Jill / NOC 
Billing & NOC data 
generation. 
Marketing Design 
5 Days 
Sarah 
 
 
Account Team → 
Professional formatting and 
branding. 
 
Final Review 
Final Prep 
3 Days 
Sarah 
Account Rep → 
Printing 
Pickup, and trifold insertion. 
The Meeting 
Day 21 
Account Team 
OBR Meeting
```

#### Page 4 / 6 — `page-004.png`

```text
6. Communication Templates 
 
To: Ptownsend@gpcom.com 
Subject: OBR Design Request: [Customer Name] | DUE: 10 Business Days from Today 
 
Pete, 
We are initiating the OBR process for [Customer Name] for our meeting on [Meeting Date]. I have completed 
the initial recon and identified the following "knowns" to assist your design: 
 
● Active Locations: [List locations] 
● In-Flight Upgrades/Installs: [List of Solution #s] 
Request: Please provide a current and future state network diagram. 
Kickoff: I have sent a 15-minute calendar invite for tomorrow to walk through these details. 
 
 
 
To: jmjohnson@gpcom.com, klawson@gpcom.com 
 
 
 
Subject: OBR Billing Request: [Customer Name] | DUE: 5 Business Days from Today 
 
Billing Team, 
Could you please provide a comprehensive billing snapshot for [Customer Name]? 
 
For this review, we specifically need: 
 
● Location-specific totals. 
● Breakout by product/service type. 
● Contract expiration dates for all active services. 
Please return this data by [5 Business Days from Today] of our OBR cycle to allow for my final review before 
marketing handoff.
```

#### Page 5 / 6 — `page-005.png`

```text
To: NOC@gpcom.com 
Subject: OBR Performance Request: [Customer Name] | DUE: 5 Business Days from Today 
 
NOC Team, 
Please provide a 12-month ticket history snapshot for [Customer Name]. The report should include: 
● Total volume and incident duration. 
● What Services were Impacted. 
● High-level resolution summaries for major outages. 
I have included known CIDs and Service addresses: 
● [Known CIDs and Locations] 
  
Please ensure this is delivered by [5 Business Days from Today]. 
 
 
To: stinkham@gpcom.com 
Subject: OBR FINAL ASSETS: [Customer Name] | Review Requested: [5 Business Days from Today] 
 
Sarah, 
We are ready for the formatting phase of the [Customer Name] OBR slick. Attached are the three required 
components: 
1. OBR Sales Readiness Form (Contains all audited billing/NOC data and strategic copy) 
2. Finalized Network Diagram (Visio) 
We have scrubbed the data and audited the billing to ensure 100% accuracy. We look forward to the proof by 
the end of [5 Business Days from Today] so we can move to print.
```

#### Page 6 / 6 — `page-006.png`

```text
Document Control 
Version 
Date 
Author 
Description of Changes 
1.0 
1.21.26 
Bryan Anneler 
Initial Version 
1.1 
2.6.26 
Bryan Anneler 
Included live example of OBR Document. 
Improved Sect. 2 with additional “sales levers”  
Introduced new data hygiene & sales readiness section.  
Added provisions for Sales Readiness Form  
1.2 
2.12.26 
Bryan Anneler 
Updated To: Field for Billing Inquiry Email
```


<a id="p-4d7a82f528b0b398"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR Sales Readiness Form - Fillable.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR Sales Readiness Form - Fillable.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR Sales Readiness Form - Fillable`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
OBR SALES READINESS FORM 
SECTION 1: ACCOUNT IDENTITY & ASSET VERIFICATION 
Account Name: 
 OBR Meeting Date: 
Descriptor: Enter the full legal entity name exactly as it should appear on the OBR Slick. 
Network Design Status:      Finalized Visio Provided & Verified against Billing Data 
Descriptor: Check to confirm the Visio Diagram CIDs match the audited billing data.
SECTION 2: REVENUE METRICS & 
PORTFOLIO BREAKOUT 
Metric 
Amount 
Total Current MRC 
$ 
In-Progress MRC 
$ 
Internet 
$ 
Ethernet/Transport 
$ 
Voice 
$ 
Security 
$ 
SDWAN 
$ 
Cloud 
$ 
Video 
$ 
Note: Total Current MRC will calculate automatically in 
the PDF version. 
SECTION 3: INFRASTRUCTURE 
(BANDWIDTH DISTRIBUTION) 
Bandwidth Tier 
Quantity (Qty) 
< 100M 
100M 
200M 
300M 
400M 
500M 
600M 
700M 
800M 
900M 
1G 
2G 
3G 
4G 
5G+ 
0
```

#### Page 2 / 5 — `page-002.png`

```text
SECTION 4: STRATEGIC MESSAGING (THE "SALES LEVERS") 
Strategic Opportunity 
Network Modernization (Spotlight) 
Proactive Billing Audit Win
```

#### Page 3 / 5 — `page-003.png`

```text
SECTION 5: NOC HISTORY & PERFORMANCE (12-MONTH LOOKBACK) 
Ticket # 
Ticket Type 
CID 
Date 
Duration 
Root Cause 
+ Add Ticket
```

#### Page 4 / 5 — `page-004.png`

```text
SECTION 6: CONTRACT ROADMAP (EXPIRED & PENDING) 
CID 
Location 
Current Service 
Contract Exp. 
Next Step 
+ Add Contract Line Item
```

#### Page 5 / 5 — `page-005.png`

```text
SECTION 7: FINAL AUDIT & HANDOFF 
OBR Tone and Takeaway
    DATA HYGIENE CONFIRMATION: I have scrubbed the raw data, translated internal codes to customer-facing 
language, and verified that all strategic copy is final.
```


<a id="p-cc0026c336c4de8e"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Q1 2026 Spiff.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Q1 2026 Spiff.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Q1 2026 Spiff`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2026 Q1 SPIFF
How It Works
Hit your quarterly to unlock the rewards!

100% of goal = $1,000

110% of goal = $3,000

125% of goal = $5,000
Who is Eligible
All seller, Sales Engineer and Sales Support roles are eligible. (Managers, 
you can cheer from the sidelines!)
Why It Matters
Momentum in Q1 sets the tone and trajectory for the entire year. So, start 
fast, finish strong and get rewarded for it!
```


<a id="p-24b32bac7d1c71bb"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Stair Step SPIFF FINAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Stair Step SPIFF FINAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Stair Step SPIFF FINAL`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
Great Plains Communications 
Stair Step SPIFF Program – Official Terms & Overview 
Effective Period: July 1, 2025 – December 31, 2025 
Applies To: Account Executives, Account Directors, Account Managers, Sales 
Leaders, Sales Support Specialists, and Sales Engineers. 
Program Objective 
The Stair Step SPIFF motivates sellers to achieve their individual monthly 
sales quota consistently from July through December.  
SPIFF Structure 
Each month that a seller hits their individual sales quota, they advance up the bonus 
“stairs” and unlock progressively larger one-time SPIFF payments. Cumulative payments 
build month-to-month as long as the streak is unbroken. 
 
 
Miss a Month? 
If you miss your quota in any month, your SPIFF “stair” resets; you restart at the $200 SPIFF 
the next month you hit quota, and begin climbing again. 
Payout Timing 
SPIFF payments will be made one month in arrears in line with the regular commission 
payment cycle. 
(Example: A SPIFF for achieving August’s quota will be paid in September’s commission 
cycle.) 
Payments will be itemized as part of your normal commission statement. 
All SPIFFs are subject to verification of quota attainment and order completion. 
One Time 
Payment
Cumulative 
Payments
Hit your quota in July
200
              
200
                     
Hit your quota in July & August
400
              
600
                     
Hit your quota in July, August & September
600
              
1,200
                
Hit your quota in July, August, September & October
1,000
         
2,200
                
Hit your quota in July, August, September, October & November
1,500
         
3,700
                
Hit your quota in July, August, September, October, November & December
2,000
         
5,700
```

#### Page 2 / 2 — `page-002.png`

```text
Eligibility Criteria 
Must be an active GPC employee in good standing at the time of payout. 
Sales must be entered and verified through the appropriate SalesForce systems  
Applies only to eligible quota-bearing sales roles. 
 
Program Administration 
Monthly performance tracked by Revenue Operations. 
Questions or disputes must be submitted within 5 business days of commission receipt.  
Final decisions on disputes will rest with the Chief Revenue Officer and are not subject to 
further appeal. 
Leadership reserves the right to audit quota and SPIFF calculations. 
GPC reserves the right to adjust or discontinue the SPIFF program at any time. 
All applicable taxes and deductions will apply. 
Participation constitutes acceptance of all program terms.
```


<a id="p-3ef8e2ce5f2041b3"></a>


### `extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P`

**Page count:** 6

#### Page 1 / 6 — `page-001.png`

```text
Temporary Bandwidth Upgrade Policy/Procedure 
 
Purpose 
To streamline the communication and workflow for handling temporary bandwidth 
upgrades, including Shared Internet Access (SIA) and Dedicated Internet Access (DIA). This 
policy ensures that customer requests are addressed efficiently while maintaining proper 
documentation and adhering to internal processes. 
 
Definitions 
• 
Temporary Bandwidth Upgrade: A short-term increase in bandwidth provided to a 
customer, either at no cost or with specified billing adjustments, for a predefined period (up 
to 30 days). These upgrades are typically used for troubleshooting, trial purposes, or 
emergency needs. 
• 
Shared Internet Access (SIA): Standard internet services shared among multiple users or 
businesses. 
• 
Dedicated Internet Access (DIA): High-performance internet services dedicated to a 
single customer, typically for business or enterprise-level applications. DIA upgrades may 
involve additional approvals and custom workflows due to cost implications. 
 
Policy (Est: 8-14-2021) 
There are times when a temporary customer change or an emergency request comes 
through from a customer or is suggested by a GPC employee.  ALL changes to a customer’s 
account must be documented and a service order received through our internal processes 
before any changes are to be made to any customer’s account.  In situations where 
something needs to be done temporarily or quickly to a customer’s account, employees 
should contact CRC.  CRC will create a service order to circulate appropriately for the 
requested temporary or emergency change and coordinate with the required departments if 
necessary.  The service order generated will make the requested changes for a “specified 
period of time” (typically 2 weeks/no longer than 30 days) that will automatically expire at 
the end of the specified timeline in the service order and the customer’s services will revert 
back to the original/prior contracted service.  It will be up to the requestor of the temporary 
change or the emergency change to ensure that the appropriate paperwork/order is 
completed to make the permanent change (if desired) to the customer’s account prior to 
the end of the temporary/emergency service order expiration.  This permanent service order 
should follow all normal processes.  
 
Guidelines 
• 
Customers will be allotted one temporary bandwidth upgrade per site per year. 
• 
All temporary bandwidth requests will be documented through a service order for 
tracking/records. 
• 
Ethernet services are not eligible for temporary bandwidth upgrades.
```

#### Page 2 / 6 — `page-002.png`

```text
Initiating a Request 
A team requesting a temporary bandwidth increase must submit the information to 
CRC via the appropriate email address: 
• 
Business-Level Customers: BusinessCare@gpcom.com 
• 
Residential-Level Customers: CRC@gpcom.com 
This request may originate from support teams during troubleshooting procedures, or from 
Sales offering trial periods during contract negotiations.  
Details to Include in Request 
1. Customer Account Number 
2. Customer Organization Name (if applicable) 
3. Customer Individual Name 
4. Current and Requested Bandwidth Speed 
5. Reason for Trial or Emergency Upgrade 
6. Length of Trial (Up to 30 Days) 
 
Service Order Process 
Requests submitted to the CRC will be entered into NISC via a service order. The service 
order will be documented with the details provided within the request and dispatched to the 
appropriate team to complete the bandwidth changes.  
 
Shared Internet Access (SIA): 
1. CRC generates service order in NISC. 
2. Service order details are documented, and the order is routed to 
Provisioning. 
3. The P&S screen is updated to reflect the temporary bandwidth changes. 
4. The service order will remain open until the trial period expires and will be 
monitored by CRC Management. 
5. At the end of trial: 
o P&S changes are reversed. 
o The order is routed to Provisioning to revert service to original speed. 
6. CRC closes the service order. 
Dedicated Internet Access (DIA): 
1. CRC generates service order in NISC. 
2. The P&S screen is updated to reflect the temporary bandwidth changes. 
3. Service order details are documented, and the order is routed to Network 
Operations Engineering (NetOps) for provisioning. 
4. The service order will remain open until the trial period expires and will be 
monitored by CRC Management. 
5. At the end of trial: 
o P&S changes are reversed. 
o The order is routed to NetOps to revert service to original speed. 
6. CRC closes the service order.
```

#### Page 3 / 6 — `page-003.png`

```text
The above process allows functionality with auto provisioning without impacting customer 
invoicing. 
 
Trial Follow-Up 
Once a trial period ends, customers are automatically reverted to their original internet 
package. Extensions beyond 30 days may be granted with proper approvals, which must be 
communicated to the CRC before the trial ends. 
 
Standard Upgrades (SIA): 
o 
The initiator of the temporary upgrade must follow up with the customer prior to trial 
expiration to discuss retention of the higher bandwidth. 
▪ 
Business-Level Customers: Packages and contract renewals must be 
communicated to the customer by their assigned sales agent. 
▪ 
Residential-Level Customers: Packages and pricing will be communicated 
to the customer by the Residential Customer Service team. 
Dedicated Internet Access (DIA): 
o 
Business-level customers must receive follow-up communication from their sales 
agent regarding package retention and contract renewal terms. 
 
Workflow Tasks:  
Task 
Work Group 
Definition 
Customer Response Center 
CRC 
CSR updates the P&S 
screen and routes the 
workflow. 
Upgrade Internet (KEY) 
SIA: Provisioning 
DIA: NetOps 
Assigned to complete 
bandwidth upgrades 
based on service type. 
Temp Upgrade (Mgmt) 
BCRC 
Monitored by CRC 
Management – routes 
order to Downgrade upon 
trial expiration. 
Downgrade Internet (KEY) 
SIA: Provisioning 
DIA: NetOps 
Assigned to revert 
services to original 
package. Task is moved 
above Temp Upgrade 
(Mgmt).  
 
Trial Service Order Example:  
Initial Request
```

#### Page 4 / 6 — `page-004.png`

```text
P&S Upgrade Changes 
 
Upgrade Workflow 
 
P&S Downgrade Changes 
 
Downgrade Workflow
```

#### Page 5 / 6 — `page-005.png`

> **Note:** Minimal extractable text on this page (0 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (2)/Temporary Bandwidth Upgrade P.P/page-005.png` for layout, charts, or scans.

*[No text extracted — likely image-only or empty page]*

#### Page 6 / 6 — `page-006.png`

```text
Request Received 
CRC Creates 
Service Order 
P&S Updated and 
Route Workflow 
SIA or DIA? 
Route to 
Provisioning 
Route to NetOps 
SIA 
DIA 
Implement 
Bandwidth Upgrade 
Monitor Trial Period 
Customer Follow-
Up 
Retain 
Upgrade? 
Trial Ends 
Bus: Sales Quote Contract 
Res: CRC Quote Pricing 
Revert Bandwidth 
(Downgrade) 
Close Service Order 
Bus: Contract Signed 
Res: Customer Approved 
Follow Normal Order 
Process & Close Service 
Order 
Temporary Bandwidth 
Upgrade Process Flowchart 
Yes 
No
```


<a id="p-de14a141e0350fcd"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Approval Overview and Training Guide - 0725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Approval Overview and Training Guide - 0725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Approval Overview and Training Guide - 0725`

**Page count:** 12

#### Page 1 / 12 — `page-001.png`

```text
ATG - 0725 
Approvals Quick Steps: 
1 
APPROVALS FOR GPC SOLUTIONS TRAINING GUIDE 
 
Contents 
Approvals Quick Steps: ........................................................................................................................................................... 1 
Business Guideline Considerations to Approvals .................................................................................................................... 2 
Approval Questions ................................................................................................................................................................. 4 
Salesforce Approvals Step-by-Step (desktop) ......................................................................................................................... 5 
Salesforce Approvals Step-by-Step (iPhone) ........................................................................................................................... 7 
 ................................................................................................................................................................................................ 9 
Salesforce Approvals Step-by-Step (Android) ....................................................................................................................... 10 
 
 
Approvals Quick Steps: 
1. On the GPC Solution hover over Approval History in the Related List Quick Links section. 
2. After deciding if you are Approving, Rejecting or Reassigning click the respective button. 
3. Enter comments. 
4. Click the corresponding confirmation of completion button. 
5. The action notification emails are then sent automatically to the assigned recipients.
```

#### Page 2 / 12 — `page-002.png`

```text
ATG - 0725 
Business Guideline Considerations to Approvals 
2 
Business Guideline Considerations to Approvals 
These are some of the criteria assessed by Leadership when reviewing GPC Solutions for approval.  This list is not 
designed to be all inclusive and if you have questions about this section, please see your manager for details.  
 
Data Quality Considerations 
▪ 
Solution Site Accuracy 
 
Each Solution Site should have at least one Solution Service associated with it unless the Solution Site is an A 
Location.  To determine, hover over Solution Sites in the Related List Quick Links section and review the list of 
Solution Sites.  The number to the far right is the number of Products associated with that Solution Site (a 
Product cannot be added if no Solution Service has been added.)   
 
The Number of Products should not be zero unless the Solution Site is an A Location. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
▪ 
Solution Service Accuracy 
 
Each Solution Service should have at least one Product associated with it.  To determine, hover over the Solution 
Services in the Related List Quick Links section and review the list of Solution Services.  The number to the far 
right is the number of Products associated with that Solution Service.  
 
The Number of Products should not be zero. 
 
If a Solution Site is an A Location, it will appear in the column highlighted in yellow.
```

#### Page 3 / 12 — `page-003.png`

```text
ATG - 0725 
Business Guideline Considerations to Approvals 
3 
▪ 
Product and Discount Review 
 
To review specific Products and discounting, hover over Quote Lines in the Related List Quick Links section.  The 
columns to the right display Regular Unit Price, Discount Given, Customer Unit Price, and Customer Total.  There 
are not enough columns allowed by the system to include Quantity, so we have to do the math to calculate that.  
 
Product Discounts are specific to Products and are set by the Product Management team, if you have 
questions on this please reach out to them. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Approval Requirements Considerations 
▪ 
Payback Months by Term 
 
Definition: The number of months it will take to recover the cost of service for this Solution Site/GPC Solution. 
 
Calculated by: Net Investment/Goss Margin. 
 
Leadership considerations: 
 
What is the ratio of Payback Months to Term? 
 
Is this a new deal or a renewal? 
 
Where is the current MTD, QTD and YTD Payback? 
 
Do we have room to increase Payback and still stay within target or do we need to be more conversative in 
higher Payback deals? 
 
▪ 
Net Investment 
 
Definition: The amount of build costs, equipment costs, and customer acquisition costs to provide service(s) to a 
customer. Generally, this does not include labor costs but may include permits, etc. 
 
Calculated by: CAC NCOS + Contract NCOS - Contract NRC 
 
Leadership considerations: 
 
Are build costs accurate and timely? 
 
Try to see if the cost could be lower or if factors are adding to costs that could be removed 
 
▪ 
Product Discount 
 
Definition: The manual discounting of Products outside of the Service Tier, Multi-Service, EVPL discounts.  
 
Calculated by: Discount percentages are set by the Product Management team and are based on either Term 
length or Product itself. 
 
Leadership considerations: 
 
Does the discount need to as deep for an initial offer? 
 
Is this a new deal or a renewal? 
 
What is the competitive market on pricing for this Service/Product?
```

#### Page 4 / 12 — `page-004.png`

```text
ATG - 0725 
Approval Questions 
4 
▪ 
Churn 
 
Definition: The percentage reduction between the existing MRC and the newly requested MRC. 
 
Calculated by: subtracting newly submitted MRC from Exiting MRC, then divide the difference by the Existing 
MRC amount.   
 
Leadership considerations: 
 
Can anything be done to lessen churn percentage? 
 
Is MRC churn better than customer churn in this situation? 
 
▪ 
Unfavorable Investment 
 
Definition: Gross Margin is less than or equal to $0 and Net Contract Value is less than $0. 
 
Gross Margin calculated by: Monthly Recurring Charge – Contract MCOS 
 
Net Contract Value calculated by: Total Contract Value – Total Contract Costs 
 
Leadership considerations: 
 
Does the overall deal make sense from a business standpoint for GPC? 
 
▪ 
Sales factors outside Salesforce 
 
Leadership Strategies 
 
Are we passing additional opportunities with this build? 
 
Are we competitive in the area? What does competition look like? Etc. 
 
How far from the Fiber is the location?   
 
Is this part of a Parent Opportunity? 
 
 
 
Approval Questions 
▪ 
Product Management team can answer questions regarding approvals needed by their team.  
▪ 
Sales Management team can answer questions regarding approval decision reasoning. 
▪ 
Salesforce team can answer questions surrounding Salesforce system functionality or issues.
```

#### Page 5 / 12 — `page-005.png`

```text
ATG - 0725 
Salesforce Approvals Step-by-Step (desktop) 
5 
Salesforce Approvals Step-by-Step (desktop) 
1. Navigate to the GPC Solution requesting approval. 
2. Once you have decided which approval action you are making, hover over Approval History in the Related List Quick 
Links section. 
3. Click the corresponding Approving, Rejecting, Reassigning or Recalling for the action you are making. 
 
 
 
 
 
 
 
 
 
 
 
 
 
A. Approving 
a. Click the Approve button  
b. Type any comments regarding your approval. 
c. Click Approve. 
1- An email notification regarding the Approval will be sent to the respective parties.  
 
 
 
 
 
 
 
 
 
 
B. Rejecting 
a. Click the Reject button  
b. Type any comments regarding your rejection. 
c. Click Reject. 
1- An email notification regarding the rejection will be sent to the respective parties.
```

#### Page 6 / 12 — `page-006.png`

```text
ATG - 0725 
 
6 
C. Reassigning 
a. Click the Reassign button  
b. Type in the User you are reassigning to, when their name appears in the listing, click on it. 
c. Type any comments regarding your reassignment. 
d. Click Reassign. 
1- An email notification regarding the reassignment will be sent to the respective parties.  
 
 
 
 
 
 
 
 
 
 
 
D. Recalling 
a. Click the Recall button  
b. Type any comments regarding your recall. 
c. Click Recall. 
1- An email notification regarding the recall will be sent to the respective parties.
```

#### Page 7 / 12 — `page-007.png`

```text
ATG - 0725 
Salesforce Approvals Step-by-Step (iPhone) 
7 
Salesforce Approvals Step-by-Step (iPhone) 
1. Login to the Salesforce app on your mobile device if you are not already. 
A. If you need help on this please see the Salesforce Mobile Application MFA & SSO Login Quick Reference Guide. 
 
2. There are two ways to access the GPC Solution needing approval.  
A. The Notification Bell in the Salesforce App in the upper right corner. 
a. This will take you to the main GPC Solution screen (continue to step 3) 
B. Clicking the link in the email from Salesforce. 
a. Once on the GPC Solution Approval History screen to see details for the GPC Solution (Payback Details, 
Approval Reasons, etc.) touch Back in the upper left corner of the screen to leave the Approval History 
screen. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3. Once on the main GPC Solution screen touch Details about 2/3 of the way down the screen.
```

#### Page 8 / 12 — `page-008.png`

```text
ATG - 0725 
Salesforce Approvals Step-by-Step (iPhone) 
8 
 
A. This will take you to the Details page and you can scroll down to see whichever details you need.  
a. You may need to touch View More to see additional details.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. Once enough information has been viewed to determine the approval decision touch the Back button in the upper 
left corner. 
 
 
 
 
 
5. Touch Approval History
```

#### Page 9 / 12 — `page-009.png`

```text
ATG - 0725 
 
9 
6. Touch the icon indicating the Approval decision for the GPC Solution. 
7. Enter any comments.  
8. Touch the action confirmation button to save the comments. 
9. The GPC Solution Approval decision has been saved and notifications have gone out.
```

#### Page 10 / 12 — `page-010.png`

```text
ATG - 0725 
Salesforce Approvals Step-by-Step (Android) 
10 
Salesforce Approvals Step-by-Step (Android) 
1. Login to the Salesforce app on your mobile device if you are not already. 
A. If you need help on this please see the Salesforce Mobile Application MFA & SSO Login Quick Reference Guide. 
 
2. There are two ways to access the GPC Solution needing approval.  
A. The Notification Bell in the Salesforce App in the upper right corner. 
a. This will take you to the main GPC Solution screen (continue to step 3) 
B. Clicking the link in the email from Salesforce. 
 
3. Once on the main GPC Solution screen touch Details about 2/3 of the way down the screen.
```

#### Page 11 / 12 — `page-011.png`

```text
ATG - 0725 
Salesforce Approvals Step-by-Step (Android) 
11 
A. This will take you to the Details page and you can scroll down to see whichever details you need.  
a. You may need to touch View More to see additional details.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. Once enough information has been viewed to determine the approval decision touch the Back button in the lower 
right corner. 
 
 
 
 
 
 
5. Touch Approval History
```

#### Page 12 / 12 — `page-012.png`

```text
ATG - 0725 
 
12 
6. Touch the icon indicating the Approval decision for the GPC Solution. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
7. Enter any comments.  
8. Touch the action confirmation button to save the comments. 
9. The GPC Solution Approval decision has been saved and notifications have gone out. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Reviewed and approved by Salesforce team and CRO in 02/2024.
```


<a id="p-ebf86d4f9b2bc23e"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
ATG - 0725 
Approval Requirements Matrix v5.5 
1 
Approval Requirements Matrix v5.5  
 
The following Approval Requirements are the same across Enterprise, Channel, and Wholesale. 
Product Discount 
Contract Term range 
(in months) 
Auto-Approves if  
less than or equal to: 
Manager review required if >: 
Discountable, not by Term 
20% 
20% 
Discountable by Term 
 
 
0-23 
20% 
20% 
24-35 
22% 
22% 
36-47 
27% 
27% 
48-59 
29% 
29% 
60+ 
31% 
31% 
The Bulk Process used by Wholesale is not evaluated by the Product Discount Approval Requirement.  
 
 
 
 
 
 
 
 
Payback Months by Term 
Contract Term range 
(in months) 
Auto-Approves if Payback Months are less than or equal to: 
All Sales Teams 
0-23 
1 
24-35 
12 
36-47 
18 
48-59 
24 
60-71 
30 
72-83 
31 
84-95 
33 
96-107 
38 
108-119 
40 
120+ 
44 
If Payback Months are greater than the Auto-Approve level, only Manager approval review is required. 
Strategic Build Solution Site Type bypasses the Payback Months Approval Requirement. 
Net Investment 
Auto-Approves if  
<: 
Manager review 
required ≥: 
CRO review  
required if ≥: 
CFO review  
required if ≥: 
CEO review  
required if ≥: 
$50,000.00 
$50,000.00 
$75,000.00 
$100,000.00 
$500,000.00 
Churn 
Auto-Approves if ≤: 
Manager review required if >: 
CRO review required if >: 
10% 
10% 
10% 
Unfavorable Investment 
Manager review required. 
Product 
Product Manager review required. 
Dark Fiber 
Both Manager and CRO review required. 
Zone Parent Opportunity (Net Investment value) 
Manager 
CRO 
CFO review required if ≥: 
CEO review required if ≥: 
Review required 
Review required 
$100,000.00 
$500,000.00 
Strategic Build Parent Opportunities (including New Market Builds) are approved outside of Salesforce  
and therefore Auto-Approve in the system without an anchor requirement.
```


<a id="p-5035c5e7776fa355"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Assigning Leads Quick Reference Guide - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Assigning Leads Quick Reference Guide - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Assigning Leads Quick Reference Guide - 1123`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
ALQRG – 1123 
Assigning Leads Quick Reference Guide 
Employee Business Lead Referrals and others appear in the (respective team’s) Sales Lead Queue until assigned to 
Account Executives.  Currently that queue is managed by Sales Leadership and Sales Support roles and the queue 
contents are not visible to other users. 
 
If you are assigning a Lead or changing ownership of a Lead outside of the (respective team’s) Sales Lead Queue start 
with step 3. 
 
1. Receive email notifying you of a new Lead submission.  
 
 
2. Click on the link to the Lead in the email or go to the (respective team’s) Sales Lead Queue and click on the name of 
the Lead. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3. Once on the Lead page layout and you have determined to whom you are assigning the Lead, click on the Change 
Ownership icon next to the Lead Owner field.
```

#### Page 2 / 2 — `page-002.png`

```text
ALQRG – 1123 
4. Click in the field next to the User icon to type the name of the Account Executive being assigned the Lead. 
A. Once their name pops up click their name so that it appears in the field. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B. Click Send Notification Email. 
C. Click Change Owner. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5. The Lead has been assigned and the email notification has been sent to the receiving User.
```


<a id="p-16b4559c75c94c75"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
COPST - 0823 
 
 
1 
 
Change Order Process Instructions for the Sales Team 
 
A Change Order is used when the customer needs to make a change to their contract after it has been Closed/Won but 
before Billing has started.  If the customer is changing only a part of their original contract after billing has started that is 
a Move/Add/Change and a different process is followed.  If the customer is removing all services and products from 
their contract before billing has started that is a Cancellation and the Cancellation process is followed. If the customer is 
removing all services and products from their contract after Billing has started that is a Disconnect and the Disconnect 
process is followed.  
 
Steps to process a Change Order: 
1. Ensure the GPC Solution is in the Closed/Won Stage and Booked but not Billed.  A Change Order is not able to be 
processed if the GPC Solution is set to Billed. 
 
2. Email your Sales Manager to let them know if the change is significant or has significant impact on MRC, Payback or 
additional costs.  
 
3. Complete the Change Order form 
A. Navigate to the GPC Solution that needs the Change Order 
B. Click the Conga Files button in the upper right row of options 
 
 
 
 
 
 
C. Once the next screen loads (this may take a moment) select Change Order from the list of templates
```

#### Page 2 / 4 — `page-002.png`

```text
COPST - 0823 
 
 
2 
 
D. Click on Preview. This will download a completed form that you need to open to make sure you have chosen the 
correct GPC Solution and that the form looks good. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E. Open and edit the information not completed by the system. 
a. Click Enable Editing 
1- Fill in the: 
A- Solution Site Affected By This Change Order section 
B- Description of Change section 
C- Specific Changes as needed – make sure the information is accurate to avoid having to re-do and 
have the customer sign multiple times! 
a- For Change Orders adding a Product not currently on the GPC Solution, please provide the 
Product’s correct link in Salesforce.  Be sure to choose the Product record that correlates with 
the Solution Site's Market Group for accurate MCOS, NCOS, and other financial information.
```

#### Page 3 / 4 — `page-003.png`

```text
COPST - 0823 
 
 
3 
 
 
 
 
NOTE: Do not remove the GPC Solution number from the form – it helps SFAdmin, PMO and CRC behind the scenes! 
F. Save the Change Order form 
G. Either print or send to the customer for their signature and date 
H. Add your signature and date 
 
4. Upload the signed Change Order form to the GPC Solution once you have it back from the customer. 
 
5. Email: 
A. Items to be included in the email 
• 
completed and signed Change Order form  
• 
the link to the correct GPC Solution in Salesforce 
 
B. To the following people: 
• 
Your Sales Manager if you felt the changes warranted their involvement based on step 2. 
• 
PMO 
• 
Salesforce Administrator 
• 
CRC 
 
6. Once the Salesforce Administration Team has made the updates in Salesforce, they will reply all letting everyone 
know the changes are complete.  
 
Informational Notes: 
Team Responsibilities: 
• 
Salesforce Administration Team – makes the Booking Adjustment in Salesforce 
• 
PMO – updates the project 
• 
CRC – handles any billing changes  
 
Items to be aware of: 
• 
If the Solution Site Project Stage is in either “Pending Billing” OR “7-10 Day Order”, Salesforce Admin will need to 
request approval from PMO/CRC before proceeding with the booking adjustment
```

#### Page 4 / 4 — `page-004.png`

> **Note:** Minimal extractable text on this page (11 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325/page-004.png` for layout, charts, or scans.

```text
COPST - 0823 
 
 
4
```


<a id="p-cdb754eca54d341d"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Contact Roles Quick Reference Guide - 1023.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Contact Roles Quick Reference Guide - 1023.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Contact Roles Quick Reference Guide - 1023`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
CRQRG - 1023 
 
1 
CONTACT ROLES QUICK REFERENCE GUIDE 
 
Contact Role Overview: 
Contact Roles can be used in Salesforce to identify the relationship between a Contact and the Account they are related 
to.  Setting a Contact Role is a separate step from creating the Contact and is helpful to teams as the GPC Solution 
moves through the Sales Lifecycle. 
 
Contents 
Contact Role Definitions: .................................................................................................................................................................................................... 1 
Setting Contact Roles for Contacts in Salesforce Quick Steps: ............................................................................................................................................ 1 
Setting Contact Roles for Contacts in Salesforce Step by Step Details: ............................................................................................................................... 2 
Contact Roles Best Practices: ............................................................................................................................................................................................. 2 
 
Contact Role Definitions: 
Sales’ Main Contact: This is the person the Account Executive should reach out to regarding the sale or contract for the 
customer.  
Influencer: Someone who encourages or recommends GPC services to the Decision Maker. 
Decision Maker: This is the person who will sign the contract...may or may not be owner. 
Project Contact: This is the main point of Contact for the Project for PMO. Please provide for each GPC Solution you 
Close Won! 
Billing Contact: This is the person PMO or Business Customer Care should contact for Billing purposes. Please provide for 
each GPC Solution you Close Won! 
Property Manager/On-Site Manager: This is the person PMO/Jodi should contact to gain access to the Solution Site. 
Please provide for each GPC Solution you Close Won! 
General Contractor: This is the person PMO should contact to coordinate construction completion, such as dates, 
building entry locations, etc. Only needed when construction is needed on a Project. 
IT/Technical/Data Contact: This is the person PMO should contact to coordinate installation with the customer's IT 
contractor. 
Phone System Contact: This is the person PMO should contact if they need to coordinate a Voice or Phone System 
installation. Only needed when there is Voice on the order and not with UC products. 
Agent (Channel): This is only used by Channel Sales. 
Business User: This is the person who will be using the Services/Product.  
Other: Please only use if the Contact does not fit any of the above options.  
 
 
Setting Contact Roles for Contacts in Salesforce Quick Steps: 
1. Create the Contact if it wasn’t created during Lead Conversion. 
2. Go to the Contact record, hover over Related Accounts, click the drop-down arrow and select Edit Relationship. 
3. Choose the appropriate Contact Role for this Contact.  They may have multiple Roles.  
💡 Best Practice: 
 Set Status to Active on the Contact record. (Then update to Inactive if the Contact leaves that company.) 
 Set Preferred Contact Method on the Contact record and populate the corresponding contact information 
fields.  
 
 
OR 
 
You can set the Contact Roles for the Contact from the Account record. 
1. On the Account record, hover over Related Contacts, click the drop-down arrow and select Edit Relationship. 
2. Choose the appropriate Contact Role for this Contact.  They may have multiple Roles.
```

#### Page 2 / 2 — `page-002.png`

```text
CRQRG - 1023 
Setting Contact Roles for Contacts in Salesforce Step by Step Details: 
2 
Setting Contact Roles for Contacts in Salesforce Step by Step Details: 
1. Create the Contact as normal. 
A. Best practice is to associate the Account Name and set Status to Active when creating the Contact.  
💡 If you created the Contact as part of a Lead conversion, you do not need to create the Contact again.  
 
2. Hover over Related Accounts in the Related List Quick Links section until you see the pop-up menu appear.   
A. Click on the drop-down arrow to the far right and select Edit Relationship.  
 
 
 
 
 
 
 
 
 
OR - You can set the Contact Roles for the Contact from the Account record. 
 
2. Hover over Related Contacts in the Related List Quick Links section until you see the pop-up menu appear.   
A. Click on the drop-down arrow to the far right and select Edit Relationship.  
 
 
 
 
 
 
 
 
 
3. Click on the Role title that is appropriate for this Contact to highlight, then click the arrow pointing to the right to 
select the Role title.  A Contact may have more than one Role for each Account.  
 
 
 
 
 
 
 
 
 
 
 
Account Contact Relationship Best Practices: 
 Set Status to Active on the Contact record so you know going forward the Contact is still relevant to the Account. 
(Update to Inactive if they leave that company.) 
 Set the correct Role for each Contact for that specific Account’s relationship.  A Contact may be related to multiple 
Accounts, so be sure to select the right Role for each Account Contact Relationship. 
 Set Preferred Contact Method on the Contact method and populate the corresponding contact information fields.
```


<a id="p-4b57a02ab86678b5"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Converted Lead Info Button Quick Reference Guide - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Converted Lead Info Button Quick Reference Guide - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Converted Lead Info Button Quick Reference Guide - 1123`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
CLIBQRG - 1123 
 
1 
CONVERTED LEAD INFO BUTTON QUICK REFERENCE GUIDE 
 
Converted Lead Info Overview: 
Leads are created when CRC submits a Lead form through SharePoint or when they are manually created in Salesforce. 
When a Lead is going to continue in the Sales Cycle the next step is to Convert a Lead into an Account (new or existing), 
Contact (new or existing), and an Opportunity (almost always new, but sometimes existing). Please see Converting Leads 
to an Opportunity Quick Reference Guide for more information on that process. 
 
Once a Lead has been converted, that Lead record is no longer visible and the information from the Lead is mapped to 
respective fields on the Contact or Opportunity.  To help with visibility into the information provided on the Lead at the 
time of creation (or before conversion) a Converted Lead Info report has been created.   
 
Leads owned by Users across teams may not be visible to different teams’ members, sharing settings prevail.  
 
Converted Lead Info Button: 
If a Lead was converted into an Opportunity – whether into a new, or existing, you can view Lead details by clicking the 
Converted Lead Info button.  If there is not a Lead that was converted to that specific Opportunity, no data will appear. 
 
1. Navigate to the Opportunity you want to see Converted Lead information for.  
 
2. Click on the Drop-down arrow to the far right of the screen to access the Converted Lead Info button if it doesn’t 
already appear in the row of buttons.  
 
 
 
 
 
 
 
 
 
3. Here is the information that will appear in the report only if there is a Lead that was converted to this Opportunity.  
 
 
 
 
 
 
4. If there was not a Lead converted to this Opportunity this message will display.
```

#### Page 2 / 2 — `page-002.png`

```text
CLIBQRG - 1123 
Converted Lead Info Button: 
2 
To view long comments that are truncated on the report follow these steps: 
 
1. On the far right side of the screen click the down arrow next to Edit. 
 
 
 
 
 
 
 
2. Click on Export  
 
 
 
 
 
 
 
3. Click on Details Only, then Export 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. Find the Excel document in your Downloads and open the file. 
5. Click on Yes to the “Do you want to open it anyway” question 
 
 
 
 
 
6. The full Comments will be visible.  You may need to click on Enable Editing to expand the column/row to view in full.
```


<a id="p-205dfa869e48df13"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Converting Leads to an Opportunity Quick Reference Guide - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Converting Leads to an Opportunity Quick Reference Guide - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Converting Leads to an Opportunity Quick Reference Guide - 1123`

**Page count:** 3

#### Page 1 / 3 — `page-001.png`

```text
CLOQRG - 0723 
1 
Converting Leads to an Opportunity Quick Reference Guide 
 
If the Lead was submitted through the Employee Business Lead Referral program or through the Partner Referral 
program, it is good relationship building to stay in touch with the person who referred the Lead to you throughout the 
process, so they know where in the sales process their referral is and if the Lead is eligible for payment.  
 
1. Once you receive the email notification that a Lead has been assigned to you click the link in the email. 
 
 
 
2. On the Lead page layout in Salesforce click Convert Lead in the upper right corner of the screen. 
 
 
 
 
 
 
 
3. On the Convert Lead pop up screen there are a few sections to review. 
A. Account – you can choose to use an existing Account if the existing Account is the correct one for this Lead – 
otherwise choose Create New.  
*NOTE – existing Account information will only populate if there is an existing Account that matches closely.
```

#### Page 2 / 3 — `page-002.png`

```text
CLOQRG - 0723 
2 
B. Contact - you can choose to use an existing Contact if the existing Contact is the correct one for this Lead – 
otherwise choose Create New.  
*NOTE – existing Contact information will only populate if there is an existing Contact that matches closely.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C. Opportunity – Best practice is to always create a new Opportunity when converting a Employee Business Lead 
Referral.  Only in rare occasions would you choose to use an existing Opportunity – in those cases please see 
your Sales Manager or Salesforce Admin.  Almost never click the box below that says ‘Don’t create an 
opportunity upon conversion’. 
*NOTE – update the Opportunity Name to something that references this specific chance to sell to this specific 
customer.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. Click Convert.
```

#### Page 3 / 3 — `page-003.png`

```text
CLOQRG - 0723 
3 
5. Click on the link to the Opportunity on the confirmation of conversion pop up screen. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
6. Verify Lead Source 
A. If the Lead was submitted through the Employee Business Lead Referral program, verify the Lead Source and 
Referred By fields on the Opportunity in the Referral section of the Opportunity page layout populate correctly. 
B. If the Lead was part of the Partner Referral program update the Partner Referral fields on the Opportunity. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
7. Work the Opportunity and create GPC Solutions as you normally would. Remember to update the employee who 
referred the Lead throughout the process if the Lead was submitted through the Employee Business Lead Referral 
program, so they know where in the sales process their referral is and if their referral is eligible for payment.
```


<a id="p-5a4a070ebda1ee5d"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
CRQRG - 1123 
 
1 
 
COSTING ROUTING QUICK REFERENCE GUIDE 
 
Costing Routing Overview 
Each GPC Solution goes through Costing Routing based on several factors between the Solution Site Type, Services, and Products selected. In addition to those factors, 
the Salesforce team has customized automation within the system to provide estimates to teams for quicker review, or populate information provided by the 
corresponding departments.  Please note that this is only an overview of the Costing Routing process, and each specific Solution Site may go through a different path 
based on the combination of the associated factors. If Request Manual Validation is checked on the Solution Site, all automated routing is bypassed, and each 
department will need to review.  
 
Glossary of Terms 
New Services – choose New when Services will require a new ‘install connection’ or the customer is new.** 
Existing Services – choose Existing when Services are currently provided to the customer and you are doing an upgrade/downgrade, adding features, etc.** 
OSP Automated Costing – estimated costs calculated by the system based on the information previously determined by the OSP team and given to the Salesforce team 
to calculate the estimates.  OSP has the option to use the estimated costs provided or overwrite those estimates and use their own. 
Reusable – when specific criteria are met Reusable is an option for the OSP and Network Engineering teams to allow the system to complete their costing routing on the 
team’s behalf.  Please see the Reusable matrix toward the end of this document for more information. 
 
Costing Routing Considerations 
 Any Solution Site that is associated with a Zone Parent Opportunity may bypass automation in routing.  
 Reusable is not allowed if the Solution Site is associated with a Zone Parent Opportunity. 
 Solution Sites will only be flagged as Strategic Build if the GPS Coordinates for that Site record have been provided in the geographical boundaries that were loaded 
into the systems. If the Solution Site is flagged as Strategic Build the Individual Drop Cost and Individual Equipment Cost will be applied systematically. 
 If New and Existing Services are selected for the same Solution Site, the routing will follow the New Services path for department review.   
 If multiple Services are selected for the same Solution Site, the routing will follow the path of the Service needing the most in-depth review.  
 
** This is a general rule, if you have detailed or specific questions, please reach out to the Business Customer Care team. Customer moves may require additional 
information to determine the correct choice between New and Existing.
```

#### Page 2 / 5 — `page-002.png`

```text
CRQRG - 1123 
Costing Routing Paths 
2 
Costing Routing Paths
```

#### Page 3 / 5 — `page-003.png`

> **Note:** Minimal extractable text on this page (30 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123/page-003.png` for layout, charts, or scans.

```text
CRQRG - 1123 
Costing Routing Paths 
3
```

#### Page 4 / 5 — `page-004.png`

```text
CRQRG - 1123 
Reusable Eligibility 
4 
Reusable Eligibility
```

#### Page 5 / 5 — `page-005.png`

```text
CRQRG - 1123 
Bulk Site Routing – Wholesale Bulk Import Only 
5 
Bulk Site Routing – Wholesale Bulk Import Only
```


<a id="p-3ca8b63f068dfa78"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Create a Custom List View Quick Reference Guide - 0922.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Create a Custom List View Quick Reference Guide - 0922.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Create a Custom List View Quick Reference Guide - 0922`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
CCLVQRG - 0922 
 
CREATE A CUSTOM LIST VIEW QUICK REFERENCE GUIDE 
 
This is a quick way to customize a List View to see exactly what you need!  This example is for Leads, but these same steps apply 
to all Tabs that have List Views! 
 
1. Click the Tab you want the Custom List View for (Leads, GPC Solutions, Solution Sites, etc.) 
 
 
 
 
2. Once you click on the Tab you will see whichever List View is currently pinned.  Click on the List View Control icon toward the 
right-hand side of the screen (it looks like a gear icon or the image used for Settings) 
 
 
 
 
 
 
 
 
 
 
 
3. Once you click on the List View Controls icon this menu will appear; click on Clone.
```

#### Page 2 / 4 — `page-002.png`

```text
CCLVQRG - 0922 
 
4. Once you click Clone this dialogue box will appear.  By default, the name will be “Copy of” the List View name you cloned.   
A. If there is data in the second row called List API Name, delete it 
B. Change the List Name to something that is meaningful to you and relevant to the List View itself. 
C. Press the Tab button on your keyboard, this will auto-populate the List API Name field 
D. Ensure the Radio Button next to Only I can see this list view is highlighted with blue 
E. Click Save 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5. Once you click Save the List View will update to the new name and the Filter option will appear on the right of the screen
```

#### Page 3 / 4 — `page-003.png`

```text
CCLVQRG - 0922 
 
6. From here you can adjust or add any filters to narrow the criteria you want shown in this specific List View. 
A. Click Add Filter 
B. Select the criteria you want matched in this specific List View 
C. Click Done 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D. Repeat as needed to specify all desired criteria 
E. Click Save 
 
 
NOTE: When the Filter option is highlighted in yellow the criteria 
have not been saved and are not applied to the List View yet!
```

#### Page 4 / 4 — `page-004.png`

```text
CCLVQRG - 0922 
 
7. Once Saved a green confirmation banner will appear and the List View will update with all matching criteria  
 
 
 
 
 
8. Close the Filter options by clicking the X or the Funnel icon  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
9. Be sure to Pin your new List View if this is your ’go-to’ List View for all things useful! 
A. Click on the grey, angled thumbtack next to the List View name so that it turns blue and is straight up and down 
 
 
 
 
 
 
 
 
 
 
 
Congratulations! You’ve customized a List View in Salesforce – now you can customize as many as are useful to you for each Tab!   
 
NOTE: If you need to delete a List View that you have Cloned simply click on the List View Controls icon (the one that looks like a 
gear from step 3) and select Delete.
```


<a id="p-d622bc0c72d301b5"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Dark Fiber Quick Reference Guide - 0724.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Dark Fiber Quick Reference Guide - 0724.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Dark Fiber Quick Reference Guide - 0724`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
DFQRG - 0724 
 
 
DARK FIBER QUICK REFERENCE GUIDE 
 
Dark Fiber Considerations 
 
 Dark Fiber is not a lit Service, and the customer is responsible for adding electronics and lighting the Service themselves 
 Dark Fiber offers two Products 
 Dark Fiber Lease Product (5+ yrs.) this includes GPC maintaining the fiber  
 MRC Product 
 Dark Fiber IRU Product (10+ yrs.) fiber maintenance from GPC is required and is a separate Product called Maintenance 
 NRC Product 
 Collaborate with a Sales Engineer on the details of the installation 
 Sales submits Pricing request (the products are not ‘pre-priced’ in the system). 
 
Dark Fiber Details for Sales 
▪ New Dark Fiber Services GPC Solutions 
• Z Location and A Location Solution Sites are required 
• Work collaboratively with your Sales Engineers and OSP to determine the following: 
o Route 
o Fiber Mileage 
o Number of Strands 
• Site Type is Build Fiber 
• Give as many details regarding the Dark Fiber Service as possible to OSP via Site Comments in Salesforce 
o Any notes from the customer or Sales Engineer regarding Dark Fiber service requirements 
o Any specific requests from the customer regarding route or number of strands 
• Provide the following information in the Approval Comment field after clicking Submit for Approval 
o New Service to customer 
o Requested MRC 
o For example, follow this format:  
New Service to customer.  $100 MRC requested. 
 
▪ Straight Renewal Dark Fiber Services GPC Solutions 
• Z Location and A Location Solution Sites are required 
• Site Type should match the needs of the Solution Site (if renewing only Dark Fiber you could use On-Net Fiber) 
• Give as many details regarding the Dark Fiber Service as possible to OSP via Site Comments in Salesforce 
o Any notes from the original contract if they are available since nothing is changing with a Straight Renewal 
• Provide the following information in the Approval Comment field after clicking Submit for Approval 
o Straight Renewal (no changes) 
o Original MRC and newly requested MRC 
• Explanation for change in MRC 
o Current number of strands 
o Existing Contract Expiration Date  
o For example, follow this format:  
Straight Renewal - they currently have 5 strands at $50 MRC, no changes. Existing Contract Expiration Date is 
12/31/2022.  
-or-  
Straight Renewal - they currently have 5 strands at $50 MRC, we are changing to $40 MRC to stay competitive in the 
market, no changes otherwise. Existing Contract Expiration Date is 12/31/2022.
```

#### Page 2 / 2 — `page-002.png`

```text
DFQRG - 0724 
 
 
 
▪ Renewal with changes or Co-terming Change Dark Fiber Services GPC Solutions 
• Z Location and A Location Solution Sites are required 
• Site Type should match the needs of the Solution Site (if renewing only Dark Fiber you could use On-Net Fiber) 
• Give as many details regarding the Dark Fiber Service as possible to OSP via Site Comments in Salesforce 
o Any notes from the original contract if they are available  
o Any notes from the customer or Sales Engineer regarding the new Dark Fiber service requirements/requests 
o Specific adjustments the customer is making with this Renewal or Change 
• Provide the following information in the Approval Comment field after clicking Submit for Approval 
o Renewal with Changes or Co-Terming Change  
o Original MRC and newly requested MRC 
• Explanation for change in MRC 
o Current number of strands and newly requested number of Strands 
o Existing Contract Expiration Date  
o For example, follow this format:  
Renewal with Changes (or Co-Terming Change) – going from 5 strands to 7 strands and $50 MRC to $40 MRC to beat 
major competitor.  Existing Contract Expiration Date is 12/31/2022. 
 
Additional Dark Fiber Details for Sales 
▪ Questions should be directed to the Sales Engineers 
▪ Cloning GPC Solutions carries over the original Comment fields so be sure to adjust those for the cloned GPC Solution changes 
 
Dark Fiber Details for OSP 
▪ OSP adds comments in the OSP Comments field on the Solution Site page layout to provide additional details that will help 
determine if the request can be approved  
o Route map 
o Fiber mileage 
o Number of strands 
▪ If OSP decides Dark Fiber is not going to work, they will Recall to Sales with an explanation as to why it will not work
```


<a id="p-80fa45261be55f76"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Dashboard Pal Quick Reference Guide-0822.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Dashboard Pal Quick Reference Guide-0822.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Dashboard Pal Quick Reference Guide-0822`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
DPQRG-0822 
DASHBOARD PAL QUICK REFERENCE GUIDE 
 
This is a quick way to set whichever Dashboard you want on your Home page.   
 
1. Click the Settings icon (the gear) on the right side of the Dashboard Pal 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. Once you see the options appear click the icon that looks like paper with a hand (this will most likely be blue) 
 
 
 
 
 
3. Under Select a Folder it should be GPC Sales Dashboards 
 
 
 
 
 
4. Under Select a preferred dashboard click the arrows to select the dashboard you want to display on your Home page 
 
 
 
 
 
 
5. Once you have selected your preferred Dashboard click the Settings icon (the gear) again to close the options.
```


<a id="p-f1116e385bacadf3"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Dashboards Quick Reference Guide - Sales - 0224.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Dashboards Quick Reference Guide - Sales - 0224.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Dashboards Quick Reference Guide - Sales - 0224`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
DQRG - 0224 
Dashboard Overview 
1 of 5 
DASHBOARDS QUICK REFERENCE GUIDE - SALES 
This is a general quick reference guide only and Dashboards can change at any time so please refer to specific 
dashboards or Sales Management for details.  
 
Dashboard Overview 
1. You can find Dashboards by navigating to the Dashboard tab in the Navigation bar.   
2. Dashboards do not automatically refresh when populated so you will need to click the Refresh button in the upper 
right corner of the screen to ensure you are viewing accurate data. 
3. Dashboards can be displayed as a User different than the logged in User and therefore may display additional or 
restricted data than the report the component is displaying.   
A. Once the View Report link is clicked the data displayed may be an expanded view or restricted view. 
4. Visibility into records may vary based on role within the Team.  Managers and Support may see additional records. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Acct Exec Pipeline Management dashboard 
This Dashboard shows GPC Solutions at each Stage of the Sales Cycle in Salesforce.  Use this Dashboard to track progress 
of deals and as a quick view as to the next steps for each GPC Solution. 
 
1. This Dashboard is set to display data as the logged in User and only displays records owned by that User. 
2. When View Report is clicked on it will only display records owned by the logged in User.
```

#### Page 2 / 5 — `page-002.png`

```text
DQRG - 0224 
Account Executive Dashboard 
2 of 5 
Account Executive Dashboard 
This Dashboard is for the competitive Account Executives that want to know where their performance is compared to all 
the other Account Executives at GPC. 
 
1. Dashboard view displays all Account Executives numbers at the Dashboard level. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. When the View Report link is clicked the records displayed are filtered based on that report’s filters so records 
displayed will be different depending on which report is being viewed. 
A. Current Year Forecast displays open GPC Solutions and therefore only displays the logged in User’s records. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
NOTE: To see the filters applied to any report click the funnel icon to display them.
```

#### Page 3 / 5 — `page-003.png`

```text
DQRG - 0224 
Account Executive Dashboard 
3 of 5 
B. Current Year: Bookings, for example displays the records owned by Users who share visibility access based on 
Sharing Settings and other access configurations so you may see more records in this report than the Current 
Year Forecast report.
```

#### Page 4 / 5 — `page-004.png`

```text
DQRG - 0224 
GPC Sales Dashboard – Forecast & Pipeline by Rep 
4 of 5 
GPC Sales Dashboard – Forecast & Pipeline by Rep 
This Dashboard is very similar to the Account Executive Dashboard as far as reports within the Dashboard, but the 
Dashboard view and the View Report links display the logged in Users or the Team they can normally view. 
 
1. Dashboard is displayed as the logged in User. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. When the View Report link for Current Year: Bookings report also displays only records owned by the logged in User 
from this Dashboard vs the Account Executive Dashboard source Current Year: Bookings report filters showing 
multiple User’s records.
```

#### Page 5 / 5 — `page-005.png`

```text
DQRG - 0224 
GPC Sales Dashboard – Forecast & Pipeline by Rep – Renewal 
5 of 5 
GPC Sales Dashboard – Forecast & Pipeline by Rep – Renewal 
This Dashboard is specific to Renewal deals. 
 
1. The Dashboard view displays all Sales Reps in respective teams 
 
 
 
 
 
 
 
 
 
 
 
 
2. Similar to the Current Year: Bookings report from the Account Executive Dashboard, the Current Year: Bookings – 
Renewal report shows records owned by those Users who share visibility access based on Sharing Settings and other 
access configurations. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Report and Dashboard Questions 
For general questions regarding the information found in reports and dashboards please see your Sales Manager. 
For data specific questions please reach out to the GPC Business Intelligence team.
```


<a id="p-44a0b94d1d8d1f07"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Disconnection Process - Sales Team - 1022.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Disconnection Process - Sales Team - 1022.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Disconnection Process - Sales Team - 1022`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
DPST 1022 
 
 
1 
 
Disconnection Process Instructions for the Sales Team 
 
A Disconnection is used when the customer is removing all services and products from their contract after it has been 
Closed/Won and after Billing has started.  If the customer is removing all services and products from their contract 
before billing has started that is a Cancellation and the Cancellation process is followed. If the customer is changing only 
a part of their original contract before billing has started that is a Change Order and the Change Order process is 
followed. If the customer is changing only a part of their original contract after billing has started that is a 
Move/Add/Change and a different process is followed.  
 
Steps to process a Disconnection: 
1. Ensure the GPC Solution is in the Closed/Won Stage and Billed not Booked.  A Disconnection is not able to be 
processed if the GPC Solution is set to Booked. 
 
2. Complete the ETL Amount Request form (this form is not yet available, so please skip to step 2.D for the information 
to include when requesting an ETL Amount)  
A. Click the Conga Files button in the upper right row of options 
 
 
 
 
 
 
A. Once the next screen loads select ETL Amount Request Form from the list of templates 
B. Click Preview 
C. Open the downloaded Word Document 
a. Click Enable Editing 
b. Fill in any information that doesn’t auto-complete 
 
D. Temporarily use this step in place of the ETL Request Form 
a. Use this format to request the following information: 
Customer Account Name: 
iVue Customer Id: 
Service Type: 
GPC Circuit ID: 
Billing MRC: $ 
Months Remaining:  
Contract expired Date:  
Off-Net: 
Please advise if further information is needed to process this request. 
Please fill out the following and return to Sales team. 
Total ETL: 
 
3. Email the completed form to BusinessCare@GPCom.com to help calculate the ETL 
A. Subject line: ETL Amount Request for Disconnection (insert GPC Solution number)
```

#### Page 2 / 4 — `page-002.png`

```text
DPST 1022 
 
 
2 
 
4. Email your Sales Manager 
A. Include in the email: 
a. The reason the customer wants to disconnect 
b. All financial impacts this causes  
1- Has GPC incurred build or installation costs, etc.? 
2- What was the MRC and Contract Term? 
3- What is the ETL? 
B. Once your Sales Management team has been made aware and the disconnection is proceeding continue with 
the following steps. 
 
5. Complete the Disconnection form 
A. Navigate to the GPC Solution that needs disconnected 
B. Click the Conga Files button in the upper right row of options 
 
 
 
 
 
 
C. Once the next screen loads select Disconnection Form from the list of templates 
D. Click on Preview
```

#### Page 3 / 4 — `page-003.png`

```text
DPST 1022 
 
 
3 
 
E. Open and edit the information not completed by the system. 
a. Click Enable Editing 
b. Fill in any information that doesn’t auto-complete 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F. Save the Disconnection Form 
G. Either print or send to the customer for their signature and date 
H. Add your signature and date 
 
 
3. Email: 
A. Items to be included in the email 
• 
completed and signed Disconnection form  
• 
your Sales Manager’s approval to process the Disconnection 
 
B. To the following people: 
• 
Disconnects@gpcom.com 
• 
Your Sales Manager
```

#### Page 4 / 4 — `page-004.png`

```text
DPST 1022 
 
 
4 
 
 
Informational Notes: 
The Disconnects@gpcom.com email group includes: 
Bryce Miller  
BusinessCare@gpcom.com 
Becky Brashear  
Erika Smith 
Melissa Yetter 
Natascha Nething-Radnor 
Sarah Worthing 
Tylar Briscoe 
Jodi Scheef 
Josephine Bernson 
Melissa Rice 
 
Team Responsibilities: 
• 
CRC  
o Verifying contract terms with legal 
o Calculating the ETL (number of months and $ amount to be billed) 
o Sending the ETL information/calculations to Sales Manager and COO for approval 
o Processing the disconnect order and billing the customer 
o Confirming disconnect date with customer and Sales manager 
o Attaching the disconnect request document received from the customer to the customer account in NISC 
Document Vault 
o Issue a DFOC to customer name for their records
```


<a id="p-b837635f8eb42d29"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Forecasting Quick Reference Job Aid - 0622.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Forecasting Quick Reference Job Aid - 0622.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Forecasting Quick Reference Job Aid - 0622`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
FQRJA - 0622 
 
1 
Upside
Committed
• This is for any GPC Solution in your 
pipeline that you are +/-  90% sure 
will be Closed/Won.
• The Close Date should be the date 
you think the GPC Solution will be 
Closed/Won.
Forecasted
• For every Opportunity you 
should have at least one 
GPC Solution Forecasted.
• Rule of thumb is to Forecast 
the GPC Solution with the 
lowest MRC.
• The Close Date should be 
the date you think the GPC 
Solution will be Closed/Won.
• This is for any GPC Solution in your 
pipeline that you are +/-  75% sure 
will be Closed/Won next month 
with a potential for this month.
• The Close Date should be the date 
you think the GPC Solution will be 
Closed/Won in the next month.
FORECASTING QUICK REFERENCE JOB AID 
 
What is Forecasting? 
Forecasting is specifying which GPC Solutions you are working on.  It is significant 
to Sales Leadership because it gives visibility into which GPC Solutions you are 
working toward Closed/Won on and by using an accurate Close Date it also gives  
them visibility as to when the GPC Solutions will be Closed/Won. 
 
Forecasting Best Practices 
▪ 
If you have an Opportunity that has several GPC Solutions for the same Solution Site, Forecast one GPC Solution you are 
working on the most, but at least one should be Forecasted. 
▪ 
If you have an Opportunity that has several GPC Solutions for different Solution Sites (not multi-site Solutions though) Forecast 
one GPC Solution you are working on the most for each Solution Site. 
▪ 
Update the Close Date on the GPC Solution as your customer’s timelines adjust as to when they’ll likely sign. 
• 
You can update the Close Date field on the GPC Solution in any Stage after Costing and before Closed/Won at any time, 
or multiple times as needed; except when the GPC Solution is Pending Approval.  
 
Forecasting Parents 
▪ 
If the Solution Site is part of a Parent Opportunity, the Financials of that Solution Site will only roll-up (appear) on the 
Parent Opportunity if the GPC Solution for that Solution Site has been Forecasted at one of the types. 
 
Forecast Types 
The three types of Forecasting are: Forecasted, Upside and Committed.  Forecasted should be used for the GPC Solutions 
you are working on. Once you are +/- 75% sure the customer is going to go with a GPC Solution next month or maybe this month 
you would update the Forecast type to Upside, or at the point when you are +/- 90% sure they are going to go with a GPC 
Solution you would update the Forecast type to Committed. When you have chosen Upside or Committed these are still 
counted as Forecasted.   Use the Close Date to tell Sales Leadership when you think a GPC Solution will be Closed/Won.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Everything 
in Salesforce
Upside
Committed
Forecasted
```

#### Page 2 / 4 — `page-002.png`

```text
FQRJA - 0622 
 
2 
Forecasting Examples 
Use these examples to help you decide which Forecasting type to use. 
 
Example A:  You are in a very competitive market and a potential new customer has one location. You are quoting them two 
Fiber GPC Solutions: #1 is 100:100 w/a $100 MRC and #2 is 300:300 w/a $300 MRC.  The customer has not given you any 
indication whether they are going to choose GPC or a competitor.   
Which do you choose?  Forecasted, Upside or Committed 
Answer to A: In this case you would choose Forecasted for GPC Solution #1 because even though you are working the 
deal the customer has not indicated in any way they are going to go with GPC.  You would Forecast GPC Solution #1 because the 
rule of thumb is to Forecast the lowest MRC. Adjust the Close Date on the GPC Solution to coordinate with when you believe the 
customer will sign the contract.   
 
 
 
 
 
 
 
 
 
 
 
 
Example B: GPC is the only available provider in the area and the customer currently has satellite internet.  Their contract with 
that company is up soon and they are shopping to see what else is available.  They have heard good things about GPC though.  
You are quoting them one bundled GPC Solution with Fiber at 500:500 and a GPC iTV Essentials package.  You are feeling +/- 75% 
sure they are going with GPC because they verbally told you customer service is important to them and you have told them 
about the Customer Service departments.  
Which do you choose?  Forecasted, Upside or Committed 
 
Answer to B: In this case you would choose Upside because they could stay with their current company but are leaning 
heavily toward GPC.  Since they told you customer service is important to them and you have really talked about how good our 
Customer Service departments are, this makes you +/- 75% sure the customer is going to go with GPC either next month or this 
month.  Adjust the Close Date on the GPC Solution to coordinate with when you believe the customer will sign the contract. 
 
 
 
 
 
 
 
 
 
 
Example C: In a competitive market GPC is offering a fantastic new promotion and your potential customer is excited about the 
variety of services you offer.  This customer has three locations, and each location needs different services, so you are quoting 
one GPC Solution for each location.  You are confident at +/- 90% the first location is going to go with GPC because the manager 
at that location has GPC at home and is a big fan!  The second location’s manager really likes the promotion but hasn’t given a 
solid yes or no, but they have been very responsive and are asking great questions.  The third location is one you are working on 
to get all three locations, but they have been a little more difficult to read.   
Which do you choose?  Forecasted, Upside or Committed 
Diagram for 
Example A
Opportunity in Salesforce
GPC Solution #1
1 Example St.
Fiber 100:100
Est. MRC: $100
Term: 24
GPC Solution #2
1 Example St.
Fiber 300:300
Est. MRC: $300
Term: 36
In this case you would choose Forecasted because 
even though you are working the deal the customer 
has not indicated in any way they are going to go with 
GPC.  You would Forecast GPC Solution #1 because 
the rule of thumb is to Forecast the lowest MRC. 
Adjust the Close Date on the GPC Solution to 
coordinate with when you believe the customer will 
sign the contract. 
GPC Solution
2 Example St.
Fiber 500:500
GPC iTV Essentials
Est. MRC: $350
Term: 60
Diagram for 
Example B
Opportunity in 
Salesforce
In this case you would choose Upside because they could stay with their current 
company but are leaning heavily toward GPC.  Since they told you customer service is 
important to them and you have really talked about how good our Customer Service 
departments are, this makes you +/- 75% sure the customer is going to go with GPC 
either next month or maybe this month. Adjust the Close Date on the GPC Solution to 
coordinate with when you believe the customer will sign the contract.
```

#### Page 3 / 4 — `page-003.png`

```text
FQRJA - 0622 
 
3 
 
Answer to C: You need to Forecast each of these GPC Solutions separately because each Solution Site could be a 
Closed/Won contract signed.  For the first location you would choose Committed because their indications are making you +/- 
90% sure they are going to go with GPC.  On the second location you would choose Upside because they are making you +/- 
75% sure they are going to go with GPC due to their interest, responsiveness, and the promotion.  The third location you would 
choose Forecasted because you are working on them to be a Closed/Won GPC Solution, but they have not given you that +/- 
75% or +/- 90% indication yet. Adjust the Close Date on the GPC Solution for each Solution Site to coordinate with when you 
believe the customer will sign the contract. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Example D: You are in a growing market and a potential new customer has one location.  You are quoting them two different 
GPC Solutions, one with Fiber at 500:500 only, and the second GPC Solution with Fiber at 500:500 and UC Phones.  The customer 
has said they are going with GPC Solution #2 but will be on vacation until mid-summer and to send the paperwork while they are 
gone.  But wait, the Solution Site is in a Parent Opportunity, now what?! 
Which do you choose?  Forecasted, Upside or Committed 
 
Answer to D: The financials of the GPC Solution will only roll-up (appear) on the Parent Opportunity if you Forecast it.  
The type (Forecasted, Upside or Committed) doesn’t matter because they are all counted as Forecasted, but it does need to be 
Forecasted.  In this case, you would choose Committed for the second GPC Solution because their indications are making you +/- 
90% sure they are going with that GPC Solution.  You would not Forecast both GPC Solutions just because they are in the Parent 
Opportunity because that would inflate the Parent Opportunity numbers. Adjust the Close Date on the GPC Solution to 
coordinate with when you believe the customer will sign the contract. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
For the first location you would choose Committed 
because their indications are making you +/- 90% sure 
they are going to go with GPC.  Adjust the Close Date on 
the GPC Solution to coordinate with when you believe 
the customer will sign the contract. 
GPC Solution
3 Example St.
Fiber 200:100
Est. MRC: $100
Term: 24
GPC Solution 
4 Example St.
UC Voice
Est. MRC: $125
Term: 36
GPC Solution 
5 Example St.
GPC iTV Essentials
Est. MRC: $125
Term: 36
Diagram for 
Example C
Opportunity in Salesforce
On the second location you would choose Upside 
because they are making you +/- 75% sure they are 
going to go with GPC due to their interest, 
responsiveness, and the promotion.  Adjust the Close 
Date on the GPC Solution to coordinate with when 
you believe the customer will sign the contract. 
The third location you would choose 
Forecasted because you are working on 
them to be a Closed/Won GPC Solution, but 
they have not given you that +/- 75% or 
+/- 90% indication yet. Adjust the Close 
Date on the GPC Solution for each Solution 
Site to coordinate with when you believe the 
customer will sign the contract.
The financials of the GPC Solution will only roll-up (appear) on the Parent Opportunity if you Forecast it.  The type (Forecasted, Upside or Committed) 
doesn t matter because they are all counted as Forecasted, but it does need to be Forecasted.  In this case, you would choose Committed for the 
second GPC Solution because their indications are making you +/- 90% sure they are going with that GPC Solution.  You would not Forecast both 
GPC Solutions just because they are in the Parent Opportunity because that would inflate the Parent Opportunity numbers. Adjust the Close Date on 
the GPC Solution to coordinate with when you believe the customer will sign the contract.
GPC Solution #1
6 Example St.
Fiber 500:500
Est. MRC: $100
Term: 24
GPC Solution #2
6 Example St.
Fiber 500:500
UC Phones
Est. MRC: $250
Term: 36
Diagram for 
Example D
Opportunity in Salesforce
```

#### Page 4 / 4 — `page-004.png`

```text
FQRJA - 0622 
 
4 
Forecasting in Salesforce 
1. Navigate to the GPC Solution in Salesforce that you want to Forecast at some level 
 
 
 
 
 
 
 
 
 
 
 
 
2. On the right side of the screen, you will see the GPC Solution Forecast component 
A. This will give you the current Forecasted type and the available options for Forecasting 
a. The messaging and available options change depending on the current Forecasted type 
B. Click the option you want to select 
C. Click Next 
D. Repeat these steps with any of the options available as needed.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*NOTE: You will also be able to see that the GPC Solution is Forecasted at each type by scrolling  
down on the GPC Solution until you see these checkboxes under the System Information section.   
If Forecasted at Forecasted type only Forecasted will be checked.  If Forecasted at either Upside  
or Committed to Forecast type the respective checkbox for those plus the checkbox for Forecasted  
will be checked.  
 
 
 
 
 
 
Taken from the Salesforce 201 Manual.
```


<a id="p-b1a80443bc99453f"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123`

**Page count:** 26

#### Page 1 / 26 — `page-001.png`

```text
MACPST - 1123 
Steps to process a MOVE 
1 
Move – Add – Change Processes Instructions for the Sales Team 
 
A Move/Add/Change is used when the customer is modifying only a part of their original contract after Billing has started.  If the 
customer is changing only a part of their original contract before billing has started that is a Change Order and the Change Order 
process is followed. If the customer is removing all services and products from their contract before billing has started that is a 
Cancellation and the Cancellation process is followed. If the customer is removing all services and products from their contract 
after Billing has started that is a Disconnect and the Disconnect process is followed.  
 
A MOVE is defined as a customer moving their physical location of services from one site to another site.   
 
For example: a customer is re-locating their office from 123 Old St. to 321 New St. 
 
An ADD is defined as a customer connecting a new Service(s) or re-connecting a prior disconnected Service(s). 
 
For example: a customer currently has Voice Services with us, and they want to add Internet 
 
A CHANGE is defined as a customer altering their current Service(s) that is being billed in such a way that MRC, Services, or 
Products are exchanged, downgraded, or upgraded.   
 
For example: a customer has SIA 50:50 via Copper and they want to change to SIA 100:100 via Fiber 
 
2nd example: a customer has UC phones and wants to add an additional Voice Plus Rugged Cordless phone 
 
Contents 
Steps to process a MOVE .....................................................................................................................................................2 
“ADDS” examples that can be processed by CRC/BCC ..................................................................................................... 10 
Steps to process an ADD ................................................................................................................................................... 11 
“CHANGE” examples that can be processed by CRC/BCC ................................................................................................ 18 
Steps to process a CHANGE .............................................................................................................................................. 19
```

#### Page 2 / 26 — `page-002.png`

```text
MACPST - 1123 
Steps to process a MOVE 
2 
STEPS TO PROCESS A MOVE 
1. Ensure the original GPC Solution is in the Billed Stage in Salesforce.   
 
2. Email your Sales Manager the following information 
A. The original Net Investment amount 
B. The original Contract Term 
C. Number of months customer has been in this Contract 
D. New Net Investment for the move costs 
E. New Contract Term or current Contract’s Expiration Date if not extending 
** for Wholesale Only – Are Circuits involved?  and will this be a “Hot Cut”? 
Once your Sales Management team has been made aware and GPC is willing to incur the costs of the move continue with the 
following steps.  
 
3. Navigate to the Opportunity the original GPC Solution was created under. 
 
4. Create a New GPC Solution 
A. On the Opportunity page click Add Solution in the row of options in the upper right. 
 
 
 
 
 
 
 
 
5. This dialog box will appear.  Everything with red asterisks is required.  
A. Solution Name – this is where the Best Practice tips from Salesforce 201 help.  When naming the GPC Solution 
remember to include the ‘intent’ of the Solution as well as the customer’s name and location.
```

#### Page 3 / 26 — `page-003.png`

```text
MACPST - 1123 
Steps to process a MOVE 
3 
B. Contract Type – depending on the customer’s contract needs see one of the following: 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract w/this change) 
b. Existing Contracts that are extending the length of their original contract with this change 
c. New Contracts not affecting other GPC Solution contracts 
 
 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract with this 
change) 
1- Choose Existing Contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3- Skip to 5.C. on page 6.
```

#### Page 4 / 26 — `page-004.png`

```text
MACPST - 1123 
Steps to process a MOVE 
4 
IF you followed instruction for a. do not complete b. or c. and skip to 5.C on page 6. 
 
 
b. Existing Contracts that are extending the length of their original contract with this change 
1- Choose the length of the ‘extension’ of the contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
For example: If a customer has 24 months left on the contract and you are extending it by 12 months you will select “36 Month 
Contract”. Then enter the existing contract expiration date. At this time, we can only extend the contract by the number of 
months that would equal one of the Contract Type options.   
 
 
3- Skip to 5.C. on page 6.
```

#### Page 5 / 26 — `page-005.png`

```text
MACPST - 1123 
Steps to process a MOVE 
5 
IF you followed instruction for a. or b. do not complete c. and skip to 5.C on page 6. 
 
 
c. New Contracts not affecting other GPC Solution contracts 
1- Choose the length of the new contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Continue to 5.C. on page 6.
```

#### Page 6 / 26 — `page-006.png`

```text
MACPST - 1123 
Steps to process a MOVE 
6 
Continue here after deciding which Contract Type you needed to enter. 
C. Close Date – an approximate date in which you think the deal will close. 
D. Sales Comments – be specific on the fact that Services will need to be Disconnected at the old location so include the old 
location’s address and the date the Services need to be disconnected and the date the equipment needs moved if that is 
happening.  
E. Business Unit, Segment & Sales Team – choose the correct option for you and this GPC Solution 
F. Click Save.
```

#### Page 7 / 26 — `page-007.png`

```text
MACPST - 1123 
Steps to process a MOVE 
7 
6. Add the Solution Site – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
A. Solution Site is for the new location 
B. Type – for a MOVE, it matches the new location’s build needs 
C. Include Site Comments even if the comments from earlier carry over – highlight these and type over with the 
information relevant to the moving of locations.  An example is: “Customer is moving from 123 Test Address to 3 
Example Address.  They are moving on 9.14 and old location Services needed disconnected then.” 
D. Add any relevant Project Notes for the PMO Team as well 
E. Click Save
```

#### Page 8 / 26 — `page-008.png`

```text
MACPST - 1123 
Steps to process a MOVE 
8 
7. Add the Service(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
A. Adding Existing Service(s) to the new location for a MOVE (Straight Move, Upgrade or Downgrade) 
a. Type – choose Existing 
b. Product Family – choose the correct option (See Salesforce 201 for details if needed) 
c. Product Line – choose the correct option (See Salesforce 201 for details if needed) 
1- If choosing Internet Services for either DIA or SIA be sure to enter the Download and Upload speeds that the 
customer wants at the new location. 
d. Complete the Agreement Number for the current Contract 
e. Existing MRC – this is the current MRC for this specific Service only (not the entire current Contract MRC) 
f. 
Existing Product Family, Existing Product Line, Existing Delivery, Existing Download, Existing Upload 
1- Straight moving of Services – make sure these match the left column info exactly 
2- Upgrade or Downgrade – make sure these match exactly what the customer currently has 
       
*NOTE: for Services that do not require Download/Upload speeds these can be left blank 
g. Click Save
```

#### Page 9 / 26 — `page-009.png`

```text
MACPST - 1123 
Steps to process a MOVE 
9 
B. Adding New Service(s) to the new location for a MOVE 
a. Type – choose New 
b. Product Family – choose the correct option (See Salesforce 201 for details if needed) 
c. Product Line – choose the correct option (See Salesforce 201 for details if needed) 
1- If choosing Internet Services for either DIA or SIA be sure to enter the Download and Upload speeds that the 
customer wants at the new location. 
d. Leave the Agreement Number and all fields with Existing in the name blank. 
e. Click Save 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
8. Add the Product(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
This is the end of the Steps to process a MOVE.
```

#### Page 10 / 26 — `page-010.png`

```text
MACPST - 1123 
“ADD” examples that can be processed by CRC/BCC 
10 
“ADD” EXAMPLES THAT CAN BE PROCESSED BY CRC/BCC 
In the following situations CRC/BCC is able to make the ‘add’ directly.  Note that any ‘adds’ processed directly through CRC/BCC 
do not generate commission for the Account Executive on record. 
 
Items that CRC/BCC can adjust: 
▪ 
Adding a single phone line Service to an Account that is currently in billing 
▪ 
Adding a single e-fax line to a Service Order that is currently in billing 
▪ 
Adding an email address for a customer with a Service Order that is currently in billing 
▪ 
Adding a single IP Address to a Service Order that is currently in billing 
▪ 
Service ‘Add-On’ items up to a total of $30 MRC 
o Additional GPCitv streams/DVR hours 
o Channel packages {extra and premiums} 
o Cable equipment, wireless equipment 
 
If the situation falls into the categories above it is imperative that you email businesscare@gpcom.com and include the following 
information in order for the adjustment to be made correctly and quickly.  
▪ 
Organization Name 
▪ 
Customer’s Name (must be CPNI) 
▪ 
Acct # or Customer # 
▪ 
Physical Service Address 
▪ 
Request details (what is being added/removed – if an item is being removed and in contract, need approval from sales 
manager – if changing phone features/directory, on what line - if moving, moving to what address and when) 
▪ 
Confirmation if customer is aware of any possible MRC/NRC changes 
▪ 
Verification if a callback/email to the customer is required 
Callback #/email for customer 
If the situation does not fall into one of the above scenarios it must be processed through Salesforce.
```

#### Page 11 / 26 — `page-011.png`

```text
MACPST - 1123 
Steps to process an ADD 
11 
STEPS TO PROCESS AN ADD 
 
1. Ensure the original GPC Solution is in the Billed Stage in Salesforce.   
 
2. Navigate to the Opportunity the original GPC Solution was created under. 
 
3. Create a New GPC Solution 
A. On the Opportunity page click Add Solution in the row of options in the upper right. 
 
 
 
 
 
 
4. This dialog box will appear.  Everything with red asterisks is required.  
A. Solution Name – this is where the Best Practice tips from Salesforce 201 help.  When naming the GPC Solution 
remember to include the ‘intent’ of the Solution as well as the customer’s name and location.
```

#### Page 12 / 26 — `page-012.png`

```text
MACPST - 1123 
Steps to process an ADD 
12 
B. Contract Type – depending on the customer’s contract needs follow instructions for one of the following: 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract w/this change) 
b. Existing Contracts that are extending the length of their original contract with this change 
c. New Contracts not affecting other GPC Solution contracts 
 
 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract with this 
change) 
1- Choose Existing Contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3- Skip to 4.C. on page 15.
```

#### Page 13 / 26 — `page-013.png`

```text
MACPST - 1123 
Steps to process an ADD 
13 
IF you followed instruction for a. do not complete b. or c. and skip to 4.C on page 15. 
 
b. Existing Contracts that are extending the length of their original contract with this change 
1- Choose the length of the ‘extension’ of the contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
For example: If a customer has 24 months left on the contract and you are extending it by 12 months you will select “36 Month 
Contract”. Then enter the existing contract expiration date. At this time, we can only extend the contract by the number of 
months 
 
 
3- Skip to 4.C. on page 15.
```

#### Page 14 / 26 — `page-014.png`

```text
MACPST - 1123 
Steps to process an ADD 
14 
IF you followed instruction for a. or b. do not complete c. and skip to 4.C on page 15. 
 
 
c. New Contracts not affecting other GPC Solution contracts 
1- Choose the length of the new contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Continue to 4.C on page 15.
```

#### Page 15 / 26 — `page-015.png`

```text
MACPST - 1123 
Steps to process an ADD 
15 
Continue here after deciding which Contract Type you needed to enter. 
C. Close Date – an approximate date in which you think the deal will close. 
D. Sales Comments – please use these to explain what is happening with the customer and deal.  They do get read! 
E. Business Unit, Segment & Sales Team – choose the correct option for you and this GPC Solution 
F. Click Save.
```

#### Page 16 / 26 — `page-016.png`

```text
MACPST - 1123 
Steps to process an ADD 
16 
5. Add the Solution Site – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
A. Solution Site is the same address that Services/Products are currently for 
B. Type – for an ADD 
a. Should be what the current site has if no new delivery type is needed, or  
b. Should be what the current site needs if they are adding/changing Services/Products that require a new delivery 
type.  
C. Include Site Comments as needed even if the comments from earlier carry over – highlight these and type over with the 
relevant information.  An example is: Customer has SIA Fiber with us, and they would like to add Unified 
Communications Service.  Or other relevant details.  
D. Click Save
```

#### Page 17 / 26 — `page-017.png`

```text
MACPST - 1123 
Steps to process an ADD 
17 
6. Add the Service(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
A. Adding new Service(s)  
a. Type – choose New 
b. Product Family – choose the correct option (See Salesforce 201 for details if needed) 
c. Product Line – choose the correct option (See Salesforce 201 for details if needed) 
1- If choosing Internet Services for either DIA or SIA be sure to enter the download and upload speeds or the GPC 
Solution will not be able to proceed.  
d. Leave the Agreement Number and all fields with Existing in the name blank. 
e. Click Save 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
7. Add the Product(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
This is the end of the Steps to process an ADD.
```

#### Page 18 / 26 — `page-018.png`

```text
MACPST - 1123 
“CHANGE” examples that can be processed by CRC/BCC 
18 
“CHANGE” EXAMPLES THAT CAN BE PROCESSED BY CRC/BCC 
In the following situations CRC/BCC is able to make the ‘change’ directly.  Note that any ‘changes’ processed directly through 
CRC/BCC do not generate commission for the Account Executive on record. 
 
Items that CRC/BCC can adjust: 
▪ 
Changing Calling Features up to a total of $30 MRC  
▪ 
Changing a customer’s phone number to a line on a Service Order that is currently in billing 
▪ 
Changing the Directory preference of customer to a line on a Service Order that is currently in billing 
▪ 
Change – adding a UC phone line 
 
If the situation falls into the categories above it is imperative that you email businesscare@gpcom.com and include the following 
information in order for the adjustment to be made correctly and quickly.  
▪ 
Organization Name 
▪ 
Customer’s Name (must be CPNI) 
▪ 
Acct # or Customer # 
▪ 
Physical Service Address 
▪ 
Request details (what is being added/removed – if an item is being removed and in contract, need approval from sales 
manager – if changing phone features/directory, on what line - if moving, moving to what address and when) 
▪ 
Confirmation if customer is aware of any possible MRC/NRC changes 
▪ 
Verification if a callback/email to the customer is required 
▪ 
Callback #/email for customer 
 
If the situation does not fall into one of the above scenarios it must be processed through Salesforce.
```

#### Page 19 / 26 — `page-019.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
19 
STEPS TO PROCESS A CHANGE 
 
1. Ensure the original GPC Solution is in the Billed Stage in Salesforce.   
 
2. Email your Sales Manager the following information only if the Change has a negative impact of greater than 20%. 
A. The original Net Investment amount 
B. The original Contract Term 
C. Number of months customer has been in this Contract 
D. New Net Investment for the move costs 
E. New Contract Term or current Contract’s Expiration Date if not extending 
** for Wholesale Only – Are Circuits involved?  and will this be a “Hot Cut”? 
Once your Sales Management team has been made aware and GPC is willing to incur the costs of the Change continue with the 
following steps.  
 
3. Navigate to the Opportunity the original GPC Solution was created under. 
 
4. Create a New GPC Solution 
A. On the Opportunity page click Add Solution in the row of options in the upper right. 
 
 
 
 
 
 
 
 
 
5. This dialog box will appear.  Everything with red asterisks is required.  
A. Solution Name – this is where the Best Practice tips from Salesforce 201 help.  When naming the GPC Solution 
remember to include the ‘intent’ of the Solution as well as the customer’s name and location.
```

#### Page 20 / 26 — `page-020.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
20 
B. Contract Type – depending on the customer’s contract needs see one of the following: 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract w/this change) 
b. Existing Contracts that are extending the length of their original contract with this change 
c. New Contracts not affecting other GPC Solution contracts 
 
 
a. Existing Contracts that are co-terming to their original contract end date (not extending their contract with this 
change) 
1- Choose Existing Contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3- Skip to 4.C on page 23.
```

#### Page 21 / 26 — `page-021.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
21 
IF you followed instruction for a. do not complete b. or c. and skip to 4.C on page 23. 
 
 
b. Existing Contracts that are extending the length of their original contract with this change 
1- Choose the length of the ‘extension’ of the contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Enter the original contract’s expiration date in the Existing Contract Expiration Date field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
For example: If a customer has 24 months left on the contract and you are extending it by 12 months you will select “36 Month 
Contract”. Then enter the existing contract expiration date. At this time, we can only extend the contract by the number of 
months 
 
 
3- Skip to 4.C on page 23.
```

#### Page 22 / 26 — `page-022.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
22 
IF you followed instruction for a. or b. do not complete c. and skip to 4.C on page 23. 
 
 
c. New Contracts not affecting other GPC Solution contracts 
1- Choose the length of the new contract 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2- Continue to 4.C on page 23.
```

#### Page 23 / 26 — `page-023.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
23 
Continue here after deciding which Contract Type you needed to enter. 
C. Close Date – an approximate date in which you think the deal will close. 
D. Sales Comments – be specific on what is changing – upgrading, downgrading, switching Services/Products etc. 
E. Business Unit, Segment & Sales Team – choose the correct option for you and this GPC Solution 
F. Click Save.
```

#### Page 24 / 26 — `page-024.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
24 
6. Add the Solution Site – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
A. For a CHANGE  
a. Solution Site is the same address that Services/Products are currently for 
b. Type – for a CHANGE  
1- Should be what the current site has if no new Delivery Type is needed, or  
2- Should be what the current site needs if they are adding/changing Services/Products that require a new delivery 
type.  
c. Include Site Comments as needed even if the comments from earlier carry over – highlight these and type over with 
the relevant information.  An example is: Customer is changing from SIA100x100 to SIA 500x500.  Or other relevant 
details.  
d. Click Save
```

#### Page 25 / 26 — `page-025.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
25 
7. Add the Service(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
A. Upgrading or Downgrading Service(s) 
a. Type – choose Existing 
b. Product Family – choose the correct option (See Salesforce 201 for details if needed) 
c. Product Line – choose the correct option for the new Service (See Salesforce 201 for details if needed) 
1- If choosing Internet Services for either DIA or SIA be sure to enter the download and upload speeds, or the GPC 
Solution will not be able to proceed.  
d. Existing MRC – this is the current MRC for this specific Service only (not the entire current Contract MRC) 
e. Existing Product Family, Existing Product Line, Existing Delivery, Existing Download, Existing Upload 
1- Make sure these match exactly what the customer currently has       
*NOTE: for Services that do not require Download/Upload speeds these can be left blank 
f. 
Click Save
```

#### Page 26 / 26 — `page-026.png`

```text
MACPST - 1123 
Steps to process a CHANGE 
26 
B. Adding Product to existing Service(s) 
a. Type – choose Existing 
b. Product Family – choose the correct option (See Salesforce 201 for details if needed) 
c. Product Line – choose the correct option for the new Service (See Salesforce 201 for details if needed) 
1- If choosing Internet Services for either DIA or SIA be sure to enter the download and upload speeds, or the GPC 
Solution will not be able to proceed.  
d. Existing MRC – this is zero when adding Product to an existing Service(s) 
e. Existing Product Family, Existing Product Line, Existing Delivery, Existing Download, Existing Upload 
1- Make sure these match exactly what the customer currently has       
*NOTE: for Services that do not require Download/Upload speeds these can be left blank 
f. 
Click Save 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
8. Add the Product(s) – if you need detailed instructions, please see the Salesforce 201 Training Manual. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
This is the end of the Steps to process a CHANGE.
```


<a id="p-3b565cc1b404ac15"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Off-Net Quick Reference Guide - 0723.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Off-Net Quick Reference Guide - 0723.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Off-Net Quick Reference Guide - 0723`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
ONQRG - 0723 
 
 
OFF-NET QUICK REFERENCE GUIDE 
 
Off-Net Considerations 
 The system does not support using Off-Net as the Solution Site Type for A Locations. 
 Service speeds are required in order to be processed by the Off-Net App. 
 IS:DIA:Fiber:1000:null or IS:DIA:Fiber:null:null, would need to be updated to include both download & upload speeds 
 Please note that Wave Longhaul products are not supported. 
 Services mapping routes to the Off-Net App as outlined below: 
 
 
Solution Service in GPC Solution 
Off-Net App Service Requested 
EPL speeds less than 10G 
Sales needs to re-submit as an EVPL Service 
EPL speeds 10G or greater 
EPL 
EVPL 
EVPL 
ELAN 
EVPL 
DIA 
EVPL 
SIA 
SIA is not supported with Off-Net – choose another Service 
Wave  
Wave 
 
Off-Net in Salesforce 
 Solution Site Type should be set to Off-Net Fiber. 
 Site Comments is the field to use when communicating specific requests to Jay.   
 To Recall a Solution Site from the Off-Net App go to the GPC Solution and click Recall Solution Site. 
 If the GPC Solution is rejected by the Off-Net App due to the mapping routing notated above, or manually recalled by 
Jay, the GPC Solution owner will receive an email notification, see the example below: 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Off-Net Questions 
 Product Management Team can answer questions regarding Services and Products eligibility with Off-Net, or Z Location 
and A Location categorization for Solution Services. 
 Salesforce Admin Team can answer questions about Salesforce system functionality.  
 Jay can answer questions about Off-Net partners or other specifics.  
 
Reviewed and approved by SFAdmin team, Bryce, Mark, and Josh in July 2023.
```


<a id="p-ac6ff1abe67b71a8"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Financial Calculations Quick Reference Guide - 1023.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Financial Calculations Quick Reference Guide - 1023.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Financial Calculations Quick Reference Guide - 1023`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
POFCQRG - 1023 
 
 
PARENT OPPORTUNITY FINANCIAL CALCULATIONS QUICK REFERENCE GUIDE 
Each of the fields below are referenced on either a Zone Parent Opportunity Type or a Strategic Build Parent Opportunity Type.   
 
• Take Rate: Defaulted to 33% but can be adjusted by Sales Managers 
 
Potential (Open + Booked, exclude Closed Lost) Section Fields 
Financial information for this section comes mostly from the Leads, Forecasted Solution Sites [💡], or Closed Won and Billed 
Solution Sites associated to the Parent Opportunity.  
• Parent NCOS: General Construction Cost field + Total COE Cost field 
• Potential Leads: Number of Open Leads (defined as not Converted to a Contact, with a Stage of New or Working) 
• Potential Sites: Total number of Forecasted, Booked, or Billed Solution Sites 
• Potential Gross Margin: (Average Deal Size * Take Rate Factor) + (sum of all Forecasted Solution Sites’ Gross Margin fields) 
• Potential Net Investment: Sum of all Forecasted Solution Sites’ Net Investment fields + ((Individual Equipment Cost field + 
Individual Drop Cost field) * Take Rate Factor) 
• Potential Payback: Potential Net Investment field/Potential Gross Margin field 
 
Coded Calculations: 
Information from these calculations is not displayed on the Parent Opportunity page layout, but instead coded to calculate 
based on the information with the referenced fields from the Leads, Forecasted Solution Sites, Closed Won or Billed Solution 
Sites associated to the Parent Opportunity.  
• Take Rate Factor: Potential Leads*Take Rate, then rounded up to the nearest whole number 
• Average Deal Size: Sum of Lead MRC for all Leads associated to the Parent Opportunity/Potential Leads field 
• Lead MRC: The estimated MRC based on the value in the No. of Employees field on each Lead associated to the Parent 
Opportunity. Below is the matrix between number of employees and the estimated MRC that correlates.  
 
No. of Employees 
Estimated MRC (Lead MRC) 
0-19 
$129 
20-49 
$329 
50-99 
$1,030 
100+ 
$2,500 
 
Booked (Closed Won/Billed) Section Fields 
Financial information for this section comes from the Booking records associated to the Parent Opportunity regardless of 
whether the GPC Solution was Forecasted prior to being Booked. 
• Booked Parent NCOS: This field was used in a prior version of Parent Opportunity use and therefore still displayed for those 
records but is no longer used in calculations.  
• Booked Number: Total Number of Booked or Billed Solution Site Booking records – Total Number of Canceled Solution Site 
Booking records  
• Target Payback Months: Entered by the Sales Manager to notate the expected payback month value Sales should work 
toward.  This field is defaulted to zero and is not used in calculations for other fields.  
• Booked Gross Margin: Sum of all Booked or Billed Solution Sites Booking records’ Gross Margin fields – Sum of all Canceled 
Solution Sites Booking records’ Gross Margin fields  
• Booked Net Investment: Parent NCOS field + sum of all Booked or Billed Solution Sites Booking records’ Net Investment fields 
- sum of all Canceled Solution Sites Booking records’ Net Investment fields 
• Booked Payback: Booked Net Investment field/Booked Gross Margin field 
 
[💡] Forecasted Solution Sites refers to the Solution Sites associated to the Parent Opportunity within a Forecasted GPC Solution.   
 
Reviewed and approved by SFAdmin team October 2023.
```


<a id="p-95ad2fb53a51934f"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Process Training Guide - 0822.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Process Training Guide - 0822.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Parent Opportunity Process Training Guide - 0822`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
POPQRG-0822 
 
PARENT OPPORTUNITY PROCESS QUICK REFERENCE GUIDE 
Parent Opportunity Definitions 
Parent Opportunities are created to leverage shared general construction costs, allowing Sales/GPC to group multiple Solution 
Sites in the same geographical area to help support a build.  There are three types of Parent Opportunities at GPC: Zone, 
Strategic Builds and New Market.   
▪ Zone is used when Sales has an opportunity to possibly make a sale to a specific customer but the geographical area 
surrounding the customer’s location has additional potential for sales and together those sales will help offset the cost to 
build to the new area.   
▪ Strategic Builds are builds GPC as a company has decided to pursue without Sales presenting opportunities for specific sales 
in that area.  Solution Sites will be added to Strategic Builds automatically by the system.   
▪ New Market are builds GPC as a company has decided to pursue without Sales presenting opportunities for specific sales in 
that area, similar to Strategic Builds. 
 
Zone Parent Opportunity Process Overview 
If you don’t know if you will need to create a Zone Parent Opportunity start at number 1.  If you know beforehand that you need 
to create a Zone Parent Opportunity to leverage costs, start at number 4. 
 
1. Create the GPC Solution 
2. Submit the GPC Solution for Costing 
3. If the GPC Solution cannot stand alone determine if a Zone Parent is an option.  If so, continue. 
4. Create the Zone Parent Opportunity 
A. Upload TAM, if applicable 
5. Submit the Zone Parent Opportunity for Costing 
6. Clone the originally created GPC Solution 
A. Add the Zone Parent Opportunity to the Solution Site 
B. Forecast the GPC Solution 
C. Submit the GPC Solution for Costing 
7. After the Zone Parent Opportunity is Validated, submit it for Approval 
8. After the GPC Solution is Validated & the Zone Parent Opportunity is Approved, submit the GPC Solution for Approval 
9. After the GPC Solution is Approved and the customer has signed the paperwork needed Close Won the GPC Solution 
 
Zone Parent Opportunities have the following Stages: 
New – it has been created but not yet submitted for costing 
Outside Plant – this is in OSP’s queue  
Network Engineering – this is in Network Engineering’s queue 
Validated – it has been through costing and has assigned costs, it is ready to submit for approval 
Approval Pending – it has been submitted for approval and is in management’s approval queue’s 
Approved – management has approved it and any associated GPC Solutions can be submitted for approval 
Booked – at least one GPC Solution associated with it has booked, it is Approved so GPC Solutions can be submitted for approval  
In Progress – construction on it has begun, it is Approved so GPC Solutions can be submitted for approval 
Completed – construction on it has completed, it is Approved so GPC Solutions can be submitted for approval 
Archived – it is no longer available to be associated with GPC Solutions 
 
Strategic Build Parent Opportunities and New Market Parent Opportunities  
▪ 
Strategic Build and New Market Parent Opportunities are approved already outside of Salesforce.  
▪ 
OSP costs are automatically assigned to Solution Sites for those associated with either Strategic Build or New Market. 
▪ 
GPC Solutions with Solution Sites associated with only Strategic Build or New Market do not require approvals for the 
reason of Payback. (multi-site GPC Solutions may require approval for Payback if one Site is not part of the Strategic 
Build or New Market)
```


<a id="p-819c79ec95768b28"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
PRPQRG - 1023 
Partner Referral Process Overview 
1 of 5 
PARTNER REFERRAL QUICK REFERENCE GUIDE (ENTERPRISE SALES ONLY) 
Partner Referrals are generally paid the month following when a GPC Solution is Billed.  Follow these steps to ensure 
your Partner Referrals are paid correctly and efficiently. 
 
Contents 
Partner Referral Process Overview ................................................................................................................................................................................... 1 
Creating a Partner Referral in Salesforce Quick Steps ....................................................................................................................................................... 1 
Creating a Partner Referral in Salesforce Details .............................................................................................................................................................. 2 
Partner Referral Process Details........................................................................................................................................................................................ 5 
 
Partner Referral Process Overview 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Creating a Partner Referral in Salesforce Quick Steps 
1. Create an Account for the Partner Referral. 
A. Set Type to Partner. 
2. Create a Contact for the Partner Referral. 
A. On the Contact set Partner Referral Status to Send Setup Email. 
a. Steps are taken by others as Sales continues with their steps. 
3. Create a Lead for the Business the Partner Referral referred. 
A. Convert that Lead to a NEW Opportunity. 
4. Add the Partner Referral’s Contact name to the newly created Opportunity in the Partner Referral Contact Name 
field. 
5. Create the GPC Solution as normal. 
A. Verify the Partner Referral’s Contact name appears in the Partner Referral Contact field on the GPC Solution.
```

#### Page 2 / 5 — `page-002.png`

```text
PRPQRG - 1023 
Creating a Partner Referral in Salesforce Details 
2 of 5 
Creating a Partner Referral in Salesforce Details 
1. Create an Account for the Partner Referral if they don’t already have a Partner Referral Account setup.   
💡It may seem unnecessary to set up a Partner Referral Account for them but systematically it is needed. 
A. Create the Account just as you would for a regular customer. 
a. Account Name is generally their personal name. 
b. Set Type to Partner. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. Create a Contact for the Partner Referral. 
A. Type their First Name, Last Name and Email address. 
💡 Email address is not required on a Contact, but if it is not provided on a Partner Referral the process will fail. 
B. Click the name of the Contact in the green confirmation banner that appears.
```

#### Page 3 / 5 — `page-003.png`

```text
PRPQRG - 1023 
Creating a Partner Referral in Salesforce Details 
3 of 5 
3. On the Contact set Partner Referral Status to Send Setup Email. 
💡This will send the Partner Referral Paperwork packet to the Partner Referral to complete and return to 
AccountsPayable@gpcom.com. The subject of this email is: Partner Referral Program Setup Instructions 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
💡 From here the Partner Referral completes and returns the paperwork packet to AccountsPayable@gpcom.com.  
See the Partner Referral Process Details/Partner Referral Setup in Salesforce section for additional information. 
💡 Do not have them return the packet to you or anyone other than that email address as the paperwork packet  
contains PII and should be treated as confidential. 
💡 Details on Accounting and Salesforce roles’ are in the Partner Referral Process Details. 
 
6. Create a Lead for the Business the Partner Referral referred to you as normal. 
A. You have the option to enter the Lead Source as Partner Referral and the Partner Referral Contact’s name on the 
Lead, or you can add them to the Opportunity.  
B. Click the link to the Lead in the green confirmation banner to go to that record.  
 
 
 
 
7. Convert that Lead to a NEW Opportunity. 
A. ALWAYS choose Create New for Opportunity when working with a Partner Referral! 
💡 Choosing existing for Account or Contact works just fine if they are already in the system, but always choose 
Create New for Opportunity.  This is because that is how the Partner Referral’s Payment record is generated and 
without that Opportunity tie, no Payment record is made or paid out upon.
```

#### Page 4 / 5 — `page-004.png`

```text
PRPQRG - 1023 
Creating a Partner Referral in Salesforce Details 
4 of 5 
B. When the confirmation screen appears, click on the link under Opportunity. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
8. Add the Partner Referral’s to the newly created Opportunity if you didn’t add them to the Lead record. 
A. Set Lead Source to Partner Referral. 
B. Set Partner Referral Contact to the Partner Referral Contact’s name. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
9. Create the GPC Solution as normal. 
A. Verify the Partner Referral’s Contact name appears in the Partner Referral Contact field on the GPC Solution.
```

#### Page 5 / 5 — `page-005.png`

```text
PRPQRG - 1023 
Partner Referral Process Details 
5 of 5 
Partner Referral Process Details 
Partner Referral Setup in Salesforce 
The Partner Referral process pauses until the Partner Referral completes and returns the required paperwork to 
Accounting. Once the Partner Referral returns the required paperwork to Accounting, they continue the process of 
getting them set up.  
1. Accounting adds the Partner Referral payment information into their Accounts Payable system. 
A. When finished they email SFAdmin and cc the Account Executive the Partner Referral is working with the 
following information: Contact Name, Vendor Name, Vendor ID, Start Date 
2. SFAdmin updates the Partner Referral’s Contact record with the information above and Replies All the updates have 
been completed.  
 
Partner Referral Payments 
The Partner Referral process pauses until the GPC Solution is Closed Won.  At that time a Payment record is created for 
the Partner Referral and process resumes.  This section reviews this part in detail. 
1. When the GPC Solution is Closed Won (Booked) a Payment record is generated in Salesforce. 
A. That record becomes part of the monthly Partner Payments for Approval report that is generated on the first of 
each month.  This report is sent to the Enterprise Sales Managers and SFAdmin team with the link to the report 
in Salesforce and an Excel spreadsheet of the Payment records included. 
2. Sales Manager review the Partner Payments for Approval report to determine whether the Partner Referrals are 
eligible, legitimate, etc. 
A. When finished reviewing, the Sales Manager emails Angie Siefert, SFAdmin, and other Enterprise Sales 
Managers with their approval for the payments to be made along with the Excel spreadsheet of Payment 
records. 
3. Accounting adds the Partner Referral payment information for the GPC Solution into their Accounts Payable system 
and prepares payment for the Partner Referrals. 
A. Partner Referral payments are generally paid the month following when the GPC Solution went to Billed, 
provided the Partner Referral has completed and returned the required paperwork to received payment. 
B. Accounting Replies All with the Excel spreadsheet notated with the Accounting Payment Date for each Payment 
record to be paid for that month. 
4. SFAdmin team updates each Payment record with the date provided by Accounting into the Accounting Payment 
Date field. 
A. When finished the SFAdmin team Replies All to the group letting them know the Payment has been made. 
 
 
Questions 
If you have any questions regarding the Partner Referral Program, please reach out to your Sales Manager. 
If you have any questions regarding Partner Referral payments, please reach out to Accounts Payable. 
If you have any questions regarding Salesforce functionality, please reach out to SFAdmin.
```


<a id="p-95831adbf88aa468"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Pre-Approved Order Process Quick Reference Guide - 0723.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Pre-Approved Order Process Quick Reference Guide - 0723.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Pre-Approved Order Process Quick Reference Guide - 0723`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
PAPQRG - 0723 
 
1 
PRE-APPROVED ORDER PROCESS QUICK REFERENCE GUIDE 
 
What is the Pre-Approved Order Process? 
The Pre-Approved Order Process is an alternate process that bypasses Approvals based on specific, pre-determined criteria.  
Only use the Pre-Approved Order Process when you are sure the criteria are met. Please use your best judgement when 
using the Pre-Approved Order Process option.  If you are hesitant about the potential cost amounts and the effect on 
Payback Months or other metrics, please use the Standard Order Process option. 
 
Pre-Approved Order Process Business Guidelines 
▪ 
May be used by Channel, Enterprise, and Wholesale Account Executives 
▪ 
Must have a contract length of 36 months or longer 
• 
No promotions or free months can be applied 
• 
No Contract Buyout or promotional credits can be applied 
▪ 
Must only be used with either Build Fiber or On-Net Fiber Solution Site Types  
• 
Must only be used for Fiber (not Copper or Coax) 
• 
May be used for either new customers or renewals/upgrades 
• 
May only be used with Solution Sites associated with Zone Parent Opportunities that are Booked, In Progress, or 
Completed 
▪ 
Must have a minimum MRC of $150 at each of the Solution Sites on the GPC Solution 
▪ 
Routing of the Fiber Line to the Solution Site must: 
• 
be within 500 feet of the Fiber Line (not just the Fiber Vault) 
• 
not cross railroad tracks, streets, grassy areas, or run through buildings 
▪ 
Product discounts must be within the pre-determined approval limits 
• 
Products whose discount approval threshold are not based on term - maximum discount for Pre-Approved is 20% 
• 
Products whose discount approval threshold are based on term - those thresholds apply for Pre-Approved use 
o For example, a 36-month term approved discount is 27%.  27.01% does not meet Pre-Approved criteria 
▪ 
Excludes Zip Code 68102 
 
Pre-Approved Product Line Exclusions 
▪ 
Colocation (these require Product Manager approval) 
▪ 
SDWAN (these require Product Manager approval) 
▪ 
Wireless Internet Broadband (these require Product Manager approval) 
▪ 
GPC Managed Wi-Fi (these require BSOL approval) 
▪ 
On-Prem PBX (these require BSOL approval) 
▪ 
Business Security (these require BSOL approval) 
▪ 
Dark Fiber (ICB product and it not qualified for use with the Pre-Approved Order Process) 
 
Pre-Approved Order Process in Salesforce 
 
NOTE: Order Process can only be changed when the GPC Solution is first being created or when the Stage is Design.  
If the GPC Solution Stage is anything other than Design, it would need to be recalled to Design before updating to 
Pre-Approved.  
NOTE: Pre-Approved Order Process GPC Solutions do not go through the Costing phase of the Sales Cycle until the 
Closed Won button is clicked.   
NOTE: These GPC Solutions will not appear on Bookings or Production reports until they have been through 
Validation by OSP, COE, etc.
```

#### Page 2 / 2 — `page-002.png`

```text
PAPQRG - 0723 
 
2 
Pre-Approved Order Process in Salesforce Step by Step Instructions 
1. On the GPC Solution page layout click the pencil icon for Order Process 
A. Click on the Order Process drop-down menu on the creation dialogue box – or – on the pencil icon next to Order 
Process if the GPC Solution has already been created 
B. Choose Pre-Approved 
C. Click Save 
 
 
- OR - 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. The button bar across the upper right of the screen will reflect the actions relevant to the Pre-Approved Order Process.   
A. Click Preliminary Quote and choose the correct paperwork from the options that appear in Conga. 
 
 
 
 
 
3. Once the customer has signed and returned the paperwork click Closed Won and upload the paperwork as normal. 
 
 
 
 
 
Questions: 
Business Process – your Sales Manager 
Salesforce System – SalesforceAdministrator@gpcom.com 
 
 
 
Reviewed and approved by VP of Enterprise Sales, Director of Channel Sales, and VP of Wholesale Sales 7/2023.
```


<a id="p-af4f029d1b82eae5"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Product Quick Reference Guide - DIA - 0224.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Product Quick Reference Guide - DIA - 0224.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Product Quick Reference Guide - DIA - 0224`

**Page count:** 4

#### Page 1 / 4 — `page-001.png`

```text
PQRG - 0224 
Configuring Products 
1 of 4 
PRODUCT QUICK REFERENCE GUIDE - DIA 
When adding Products similar to existing Products in Salesforce an easy method to do so is to find a Product and clone in 
the system.  If creating new Products, Product Lines, or Product Families that are not already designed in the system 
please reach out to Salesforce Support. 
 
Configuring Products 
This section reviews the fields and their uses on Products when configuring them in Salesforce.  CPQ is highly 
customizable so be sure you fully understand each of the fields and what the intended outcome is with selections. 
1. Navigate to the Product similar to the one needing created in the system. 
2. Click Clone in the upper right corner of the screen. 
 
Product Information Section 
Set the fields on the Product based on the intended use of the Product in the system and Sales Process. 
1. Product Name: Be consistent with the naming convention of Products to help departments easily find Products. 
2. Product Code: If this is available from the Billing Department at the time of creation add it in the Product Code field, 
if not, leave it blank until provided.  
3. Type: Service or Add-on are the only two options even though this is a text field.  Please ensure consistency when 
typing out which one is needed. 
4. Delivery: Specifies which method can be used to provide this Product to a customer.  To specify a Delivery, choose 
Fiber, Copper, or Coax.  To leave the Delivery as available for any method, choose None. 
5. Product Family: Choose the Product Family this Product belongs to from the drop-down menu options.  If this is left 
blank on the Product, it will display for all Product Families regardless of selection made when the Service is added 
to the GPC Solution. 
6. Line: Like the Type field, this is a Text field, but it is very important to type out the Line consistently.  See the Product 
Line image below for a listing of current Product lines as of this document’s publication.   
A. If the Type is Add-on and the Product should be available across multiple lines leave this field blank because this 
field does not support multiple Lines being populated.  
7. Download Speed: Download Speeds are displayed in Mbps. 
8. Upload Speed: Download Speeds are displayed in Mbps. 
A. If the Delivery is set to Fiber Download Speed and Upload Speed must be symmetrical. 
9. Market Groups: Select the corresponding Market Group this Product is available for from the Available list on the 
left and once highlighted, click the right arrow to move to the Chosen column.  You may select multiple Market 
Groups. If a Market Group is needed but not in the Available list, follow the process to create a Market Group. 
10. Active: Checkmark this checkbox to make the Product available to use. 
11. Term, Facility Service, and Class: These fields are almost always left blank. 
12. Version: Until a future communication is made this should always be left at the default of 2021. 
13. Primary Service Unit: Check this box to all this Product to be sold with or without any other Services from GPC. 
14. Limit Primary Service Unit: When checked this Product can be the only Product associated with the respective 
Service for the GPC Solution.  If multiple Primary Service Unit (PSU) Products are needed for a GPC Solution, multiple 
Services would need to be added first. 
15. Quantity Editable: When blank the quantity of this product cannot be changed from the Default Quantity.  
Checkmark to allow the quantity to be changed. 
16. Default Quantity: Set this to the starting value for the Product to be added when selected or set to the value that is 
required for this Product and then also setting Quantity Editable to unchecked. 
 
 
 
 
Commented [JS1]: I think we should note that blank 
would show up for all Product Families 
 
Commented [JS2R1]:  
Commented [AA3]: I accidentally deleted your comment 
about Product Lines.  I did update the chart below and 
added your suggestion of not using multiple lines. Please let 
me know what you think. Thanks and sorry! I am not sure 
how I did that.
```

#### Page 2 / 4 — `page-002.png`

```text
PQRG - 0224 
Configuring Products 
2 of 4 
GPC Pricing Guidelines Section 
1. Product Type: Select the Product Type for this Product. Generally, Promo is not used. 
2. Product Category: Only populate this field if NRC is selected from the Product Type options.  
3. MCOS: Populate this field if the Product has a monthly recurring cost associated with it. 
4. NCOS: Populate this field if the Product has a one-time cost associated with it. 
A.  
B. This isn’t required but should be set if the NCOS being populated is for CPE cost. 
a. If it is for CPE NCOS, please allocate the amount for each of the ‘buckets’ below.  This is not required but is 
helpful to the automation for the teams creating Work Orders.   
CPE OSP Product NCOS, CPE ENG Product NCOS, CPE BSOL Product NCOS, or CPE IPE Product NCOS. 
5. FUSF MCOS, FUSF NCOS, ILEC FUSF MCOS, ILECT FUSF NCOS, NECA Rate: Populate as needed. 
 
Discounting Section 
1. Non Discountable: Check this box when the price cannot be decreased or increased from the original price point. 
2. Prevent Discounts: Check this box when the price cannot be decreased from the original price point. 
Pro-tip – if you want to allow pricing to increase but not decrease –  
set Non Discountable to FALSE and Prevent Discounts to TRUE. 
3. Discount Approval By Term: Check this box when you want the discount percentage that will be considered auto-
approved to increase based on term length.  If this box is FALSE, the Discount Type will be 20%.  
4. Allow Discount to Zero: Check this box when the price can be discounted all the way to zero. When checked this 
bypasses the Product Discount Approval Rules if the price is $0, but will trigger Approval Rules if the product is 
discounted, but not equal to $0. 
5. Multi-Service Discount Eligible: Check this box to indicate if the product is eligible for this discount. 
6. Multi-Service EVPL Discount Eligible: Check this box to indicate if the product is eligible for this discount. 
 
NOTE: Discount Type will populate based on the selections made in the Discounting section – be sure to 
review this field upon Product creation to ensure you have the desired discounting preferences set. 
 
Approvals/Product Review Section 
1. NonStandard Product: Check this box for Product Manager approval review required on NonStandard Products. 
2. Approval Required – PM: Check this box for Product Manager approval review required on standard Products. 
3. Approval Required – Dark Fiber: Check this box to require the Dark Fiber Approval Rules. (currently set to Manager 
and CRO as of this document’s publication) 
4. Requires BSOL: Check this box when the Product requires the BSOL team to review costs in the costing process. 
5. Tier Pricing: Check this box to add the availability of Service Tier Adjustments to the product. Service Tier 
Adjustment records are required to be added as well in order for this to function correctly. Please see the image at 
the end of this guide for a quick reference point.  
 
Description Information Section 
1. Customer Description: The description in this field will print on the customer facing contract documents. 
2. Product Description: The description in this field will appear when Sales is selecting the Product.  This can be more 
specific to help ensure Sales is choosing the correct product to meet the customer’s needs. 
 
*If fields in the Salesforce CPQ Configuration, Pricing, Subscriptions, Upgrades, Renewals, New Section need edited 
please reach out to Salesforce Support for assistance. 
 
 
 
Commented [JS4]: This isn’t required but should be set if 
it’s CPE cost. It also doesn’t have to be the full cost but 
that’s what we’ve been using so far 
Commented [AA5R4]: I added some clarity - good points.  
I added should be based on code Daniel has for CPE NCOS 
population - I am not sure how he ended up coding it, but 
just in case we probably want these populated in some 
capacity. 
Commented [JS6]: Should we note the Discount Type 
field to check they have the appropriate behavior 
configured? 
Commented [AA7R6]: Great idea! I went back and forth 
since technically this isn’t a field they set - but I called 
attention to it after 6. - let me know if you think this will 
work. 
Commented [JS8]: Should we note this is manager and 
CRO? 
Commented [JS9]: I would note that the service tier 
adjustment records are required to be added it to work. It’s 
not just this checkbox. 
Commented [AA10R9]: I am not sure where these are 
added - if you can let me know I would like to include 
where/how also.  Thanks!!
```

#### Page 3 / 4 — `page-003.png`

```text
PQRG - 0224 
Price Book Additions 
3 of 4 
 
Price Book Additions 
Each Product needs to be associated with at least one Price Book in order to be displayed and function correctly. 
 
1. Hover over Price Books in the Related List Quick Links section 
2. Click the far-right arrow on the Standard Price Book line item 
3. Click Edit 
4. List Price is required.  It can be $0 or any amount you need.  However, once it is set, if it is changed it does not 
update any Product pricing in open GPC Solutions, but it could trigger Product Discount Approval Rules. 
5. Repeat for Enterprise or Wholesale Price Books as needed. 
 
Adding Features and Options 
Each Feature and Option allow you to set configuring requirements for Products.  Features need to be set for a Product 
before Options.  When cloning Products best practice is to have the original Product and the newly created Product side 
by side so you can determine which configurations you need based from the original for the new. 
 
Adding Service Tier Adjustments 
If a Product’s pricing is to be adjusted using the Service Tier field, Service Tier Adjustments are required to be configured 
for the Product. When cloning Products best practice is to have the original Product and the newly created Product side 
by side so you can determine which configurations you need based from the original for the new. 
 
 
 
 
 
 
 
 
 
 
 
This recording may help add clarity: Hands-on Training-1.12.2024 Meeting Recording.mp4
```

#### Page 4 / 4 — `page-004.png`

```text
PQRG - 0224 
Adding Service Tier Adjustments 
4 of 4 
 
 
Product Family and Line information as of 2.2024 
Product Family 
Line 
Ethernet Services 
ELAN 
ELINE – EPL 
ELINE – EVPL 
 
 
Fiber Services 
Dark Fiber 
Wave 
 
 
Internet Services 
DIA 
SIA 
Wireless Internet (Cellular) 
 
 
Managed Services 
Business Security 
Colocation 
Email 
Managed Wifi 
PBX 
SDWAN 
Support 
WIFI – Workpass 
 
 
Video Services 
Bulk Video 
Hospitality Video 
IPTV 
iTV 
RFTV 
Video 
 
 
Voice Services 
SIP 
Unified Communications 
Virtual Voice 
Voice 
Voice Trunk
```


<a id="p-e1bde5464e7aef7d"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce & DocuSign Integration Training Guide - 0623.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce & DocuSign Integration Training Guide - 0623.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce & DocuSign Integration Training Guide - 0623`

**Page count:** 14

#### Page 1 / 14 — `page-001.png`

```text
S&DITG - 0623 
 
 
 
 
 
Salesforce & DocuSign Integration 
Training Guide 
0623
```

#### Page 2 / 14 — `page-002.png`

```text
S&DITG - 0623 
Contents 
Overview ............................................................................................................................................................................. 3 
Considerations .................................................................................................................................................................... 3 
Step by Step in Salesforce ................................................................................................................................................... 3 
Create GPC Solution and Populate Contract Signer Field ............................................................................................... 3 
Conga File Information .................................................................................................................................................... 4 
Send to DocuSign Button ................................................................................................................................................ 5 
Initial Authentication ...................................................................................................................................................... 5 
DocuSign Documents ...................................................................................................................................................... 7 
DocuSign Recipients ........................................................................................................................................................ 7 
Email Subject and Message to Recipients ....................................................................................................................... 9 
Reminders and Envelope Expiration ............................................................................................................................... 9 
Setting Required Fields ................................................................................................................................................. 10 
Email Notifications ........................................................................................................................................................ 12 
Additional DocuSign Integration Functionality ................................................................................................................. 13
```

#### Page 3 / 14 — `page-003.png`

```text
S&DITG - 0623 
 
3 
Overview  
 The purpose of the integration is to allow Sales to send documents using DocuSign without having to leave Salesforce.   
 
Considerations 
 Anyone receiving the documents using the integration should be entered into Salesforce as a Contact and related to the 
Account relevant to the document(s) being sent.  Contact Roles can be helpful with this.  
 DocuSign accounts are created and managed by IT but the integration setting for Users are managed in Salesforce by the 
Salesforce Team.  
 For DocuSign account troubleshooting or issues please reach out to the ServiceDesk Team. 
 The DocuSign and Salesforce integration is not designed to alter or manage any business process using DocuSign, only to 
allow for convenience.  
 
Step by Step in Salesforce 
CREATE GPC SOLUTION AND POPULATE CONTRACT SIGNER FIELD 
1. Create the GPC Solution as you normally would. (Solution Site, Service, Product, etc.) 
2. Populate the Contract Signer field with the Contact in Salesforce that is the person who will be signing the contract.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A. Click in the Contract Signer field and start typing the name of the person and they should appear in the drop-down list.  
Once they do, click on their name.
```

#### Page 4 / 14 — `page-004.png`

```text
S&DITG - 0623 
 
4 
B. Click Save  
 
 
 
 
 
 
 
 
NOTE: It is best practice to add the Contract Signer information to the GPC Solution while creating it initially, however, 
adding the information while in a different Stage other than Design will not pull it back from that Stage.  Also note, while the 
GPC Solution is in the Stage of Approval Pending you will not be able to add the Contract Signer information.  
 
3. Continue the Sales Process in Salesforce until you are ready to send the document. 
 
CONGA FILE INFORMATION 
4. Click Conga Files and select the appropriate document as you normally would. 
(You do have the option to use documents other than Conga templates when sending through DocuSign while in Salesforce, 
for those instructions skip to step 6.B. on page 7). 
A. While on the Conga screen click the drop-down arrow under Save a Copy and select Salesforce File 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B. Click Merge & Download 
 
 
 
NOTE: Once the document is downloaded you have the option to open the download to make formatting adjustments if 
needed. If you need to edit Terms & Conditions, Legal is the business owner to refer to. If you edit the document and save 
you will need to follow the instructions to upload a document on page 7. 
 
C. Click Return to GPC Solution as you normally would to return to that record.
```

#### Page 5 / 14 — `page-005.png`

```text
S&DITG - 0623 
 
5 
SEND TO DOCUSIGN BUTTON 
5. Click Send to DocuSign from the row of action buttons across the upper right corner of the screen. 
 
 
 
 
 
 
 
 
 
 
INITIAL AUTHENTICATION 
The first time you access the Send to DocuSign button you will need to allow your Salesforce and your DocuSign accounts to 
‘talk’ to each other. Please follow these steps. 
 
Click on the Authorize button 
 
 
 
 
 
 
 
Enter your password for your DocuSign account and click Log in 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Click Allow Access
```

#### Page 6 / 14 — `page-006.png`

```text
S&DITG - 0623 
 
6 
Click Allow 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Click on Use Custom Domain  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Type in gpcom and click Continue 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
You should see the screen in Step 6.  If you don’t and have questions, please reach out to SalesforceAdministrator@gpcom.com.
```

#### Page 7 / 14 — `page-007.png`

```text
S&DITG - 0623 
 
7 
DOCUSIGN DOCUMENTS 
6. Decide the source of the document you want to send: 
A. If it is the Conga Template you selected with no changes leave the checkmark next to that document, click Next 
 
 
 
 
 
 
 
 
 
 
B. If you choose to upload a document rather than using the pre-selected one uncheck the checkbox and click Upload 
a. From there upload a file as you would normally upload a file to somewhere 
 
 
 
 
 
 
 
 
 
7. Once the document to be used is chosen/uploaded click Next. 
 
 
 
 
 
 
 
 
 
DOCUSIGN RECIPIENTS 
8. Verify the Recipients of the document. 
A. If you do not need to add additional recipients or change the recipients’ roles in signing, skip to step 9 on page 9. 
B. If needed, additional Recipients may be added. To do this, click Add Recipient.
```

#### Page 8 / 14 — `page-008.png`

```text
S&DITG - 0623 
 
8 
a. Click in the field for Select User or Contact 
1- Start typing their name and when they appear click on their name 
A- Remember, they need to be an existing Salesforce Contact to be a Recipient 
 
 
 
 
 
 
 
 
 
 
 
 
2- Select the Action needed for that Recipient. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3- Click Select 
 
NOTE: Any recipient of the document needs to be a Contact within Salesforce.  
 
 
C. If needed, a Recipient’s Role may be edited. To do this, click the drop-down arrow next to the Recipient’s name that 
needs edited and click Edit.
```

#### Page 9 / 14 — `page-009.png`

```text
S&DITG - 0623 
 
9 
a. Select the Action needed for that Recipient. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b. Click Select 
 
EMAIL SUBJECT AND MESSAGE TO RECIPIENTS 
9. Verify/Edit the Message to All Recipients 
A. The Email Subject is defaulted to the GPC Solution name but is customizable. 
B. The Email Message is set to a default but is customizable. 
C. To customize each of these simply click in the field you want to customize, highlight the text you want to replace and 
start typing your customized information.  
 
 
 
 
 
 
 
 
 
REMINDERS AND ENVELOPE EXPIRATION 
10. Reminder and Expiration are set to a default but can be customized as needed.  
 
 
 
 
 
 
 
 
 
11. When the Recipients, Messages, and Options are set to your preference, click Next.
```

#### Page 10 / 14 — `page-010.png`

```text
S&DITG - 0623 
 
10 
SETTING REQUIRED FIELDS 
12. Add the fields you want ‘required’ for Signer 1 (the default was set to the GPC representative) 
A. In the upper left corner verify the Signer is selected for the fields you are requiring for them 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B. Choose the Field you want required and drag to the location on the document it is needed.
```

#### Page 11 / 14 — `page-011.png`

```text
S&DITG - 0623 
 
11 
a. Drag to the location on the document. 
1- If you need to delete or re-locate the field, while it is highlighted blue, hit Delete on the keyboard and re-do. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b. Repeat for all fields for Signer 1, then set the next Signer in the upper left corner (see step 12.A. above) and repeat 
until all fields for all signers are set. 
 
 
 
 
 
 
 
 
 
 
 
 
c. Click Preview if you would like to see a preview of the document with the required fields before sending. 
 
 
 
 
 
 
 
d. Click Send when ready for the document to be sent.
```

#### Page 12 / 14 — `page-012.png`

```text
S&DITG - 0623 
 
12 
e. The document will be sent to the first signer (set to the GPC Representative as default) and this confirmation screen 
will appear in Salesforce. 
 
 
 
 
 
 
 
 
 
 
 
 
 
NOTE: When the envelope is sent, the GPC Solution Stage changes from Approved to Proposal Delivered. 
 
 
EMAIL NOTIFICATIONS 
13. Go to your GPC email inbox and click Review Document. 
A. Sign and Finish as needed. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a. After signing click on No Thanks on the pop-up window.
```

#### Page 13 / 14 — `page-013.png`

```text
S&DITG - 0623 
 
13 
b. The document will be sent to the next assigned Signer. 
c. When signers click Review Document you will receive an email notification from DocuSign that they have viewed the 
document. 
d. When all signers have Finished the document, all Recipients will receive an email notification saying it has been 
Completed. 
1- You do not need to click on View Completed Document.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
14. The final and fully signed document will be automatically uploaded to the GPC solution in Salesforce with completed in the 
name of the document.  
 
 
 
 
 
 
 
 
 
 
 
Additional DocuSign Integration Functionality 
On the GPC Solution the DocuSign tab contains additional visibility and functionality. 
1. Click on the DocuSign tab
```

#### Page 14 / 14 — `page-014.png`

```text
S&DITG - 0623 
 
14 
2. As the Envelope moves through the different statuses it will update here. 
A. Click on the arrow to expand the view for additional details.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3. For additional actions for the Envelope click the drop-down arrow on the right side of the DocuSign tab. 
 
 
 
 
 
 
 
 
A. Send Reminder sends an email to all signers who have not yet signed. 
B. View Envelope shows you the document sent. 
C. Correct Envelope allows you to adjust fields required, etc. 
D. Void Envelope voids the current Envelope.  It is best practice to void an Envelope if you need to create a new document 
for signatures.  This way each party knows the correct version in play.
```


<a id="p-2dc3110ef1ddd665"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422`

**Page count:** 17

#### Page 1 / 17 — `page-001.png`

> **Note:** Minimal extractable text on this page (27 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422/page-001.png` for layout, charts, or scans.

```text
SALESFORCE 101 
TRAINING MANUAL
```

#### Page 2 / 17 — `page-002.png`

```text
SF101M-0422 
 
 
1 
 
Contents 
 
Section 1 – Login to Salesforce ................................................................................................................................................. 2 
Initial Login Notification .......................................................................................................................................................... 2 
Single Sign-On with Multi-Factor Authentication Login ..................................................................................................... 2 
Section 2 – Navigating Salesforce ........................................................................................................................................... 4 
Salesforce Layout..................................................................................................................................................................... 4 
Working with Tabs ................................................................................................................................................................... 5 
Home Tab .............................................................................................................................................................................. 5 
Campaigns ............................................................................................................................................................................ 5 
Leads ...................................................................................................................................................................................... 6 
Accounts ................................................................................................................................................................................. 6 
Contacts ................................................................................................................................................................................. 6 
Sites ........................................................................................................................................................................................ 6 
Opportunities ........................................................................................................................................................................ 7 
Parent Opportunities ........................................................................................................................................................... 7 
GPC Solutions ....................................................................................................................................................................... 7 
Solution Sites ......................................................................................................................................................................... 7 
Projects ................................................................................................................................................................................... 7 
Reports ................................................................................................................................................................................... 7 
Dashboards ........................................................................................................................................................................... 8 
Products.................................................................................................................................................................................. 8 
Tasks ....................................................................................................................................................................................... 8 
Section 3 – Customize Views ...................................................................................................................................................... 9 
General Display Settings ........................................................................................................................................................ 9 
Customize Tabs Displayed for Apps .................................................................................................................................... 9 
Pinning List Views ...................................................................................................................................................................11 
Setting Display Format ..........................................................................................................................................................12 
Section 4 – Salesforce Sales Cycle.........................................................................................................................................15 
Section 5 – Additional Resources ............................................................................................................................................16 
Additional Trainings Available ............................................................................................................................................16 
Contacts ...................................................................................................................................................................................16
```

#### Page 3 / 17 — `page-003.png`

```text
SF101M-0422 
 
 
2 
 
SECTION 1 – LOGIN TO SALESFORCE 
Initial Login Notification 
 
When you have been setup as a User in Salesforce you will receive a Welcome to Salesforce at GPC! email from either 
SalesforceAdministrator@GPcom.com or Abranda Andersen. This email will outline the steps to login to Salesforce the 
first time as well as useful links and resources to trainings.  
 
Single Sign-On with Multi-Factor Authentication Login 
1. Go to https://gpcom.my.salesforce.com/ 
2. Click on Azure AD under Log in Using 
 
 
 
 
 
NOTE: If you’re already authenticated, it will log you 
into Salesforce and you’ve completed the login process. 
YAY!! If not, keep going! 
 
 
3. If you need to authenticate, enter your email address into the Sign in prompt and click next, or select your email 
address if you’re asked to pick an account. 
 
 
 
 
 
 
 
 
 
 
 
 
OR 
 
 
 
 
 
 
 
 
You will see a message stating that you are being  
redirected to your organization’s sign-in page.
```

#### Page 4 / 17 — `page-004.png`

```text
SF101M-0422 
 
 
3 
 
4. Once you have landed on the Great Plains Communications login page, enter your password and choose Sign in. 
 
 
 
 
 
 
 
 
 
 
5. You will now be presented with a page asking you to provide your OTP token. Place your cursor in the blank field.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
6. If you haven’t yet, insert your Yubikey into a USB port on your computer.  
Press the ‘Y’ button on your Yubikey Device and it will automatically advance you to the next page. 
 
 
 
 
 
 
 
 
7. It might ask you if you would like to stay signed in, check the box for Don’t show this again, and click yes. 
 
 
 
 
 
 
 
 
 
 
8. You have logged in with SSO & MFA!  Congratulations! Your Salesforce Home tab should be displaying.
```

#### Page 5 / 17 — `page-005.png`

```text
SF101M-0422 
 
 
4 
 
SECTION 2 – NAVIGATING SALESFORCE 
Salesforce Layout 
 
Universal Search Field 
At the very top of the screen you will see a field with a magnifying glass and Search… this is the Universal Search field.  
When you type a word or phrase in this search field Salesforce will return any record it finds with that term included. 
 
 
Favorites – Click the star to add a current view to your list of favorites.  
 
 
Global Actions – Create a new Account, new Note, new Activity from anywhere in Salesforce. 
 
Help & Training – Click to get Salesforce help and links to keyboard shortcuts. 
 
Notifications – Salesforce Notifications and Reminders will appear here with a number.  Click the icon to open for more 
details on them. 
 
View Profile – update settings, switch to Classic, logout 
 
 
Application Launcher – (also known as the App Launcher) This menu allows you to switch between all the Applications 
(Apps) you have access to in Salesforce. 
 
 
 
 
Application – The grouping of Tabs related to the App’s job function that are regularly accessed to enter information for 
an object.  Depending on your access you may have access to several Apps. 
 
 
 
 
Navigation Bar – The row just underneath the Universal Search Field that displays all the Tabs available for the selected 
App.  If all the available Tabs do not fit in the row, the rest of the Tabs will be found in the More dropdown menu.  
 
 
 
 
Tabs – A Tab serves as the starting point for viewing, editing, and entering information for an object. When you click a 
tab at the top of the page, the corresponding Tab home page for that object appears which typically includes List Views. 
Use the 
  icon to access handy launchpads like records or pinned List Views.
```

#### Page 6 / 17 — `page-006.png`

```text
SF101M-0422 
 
 
5 
 
Now that you are familiar with the general layout of Salesforce let’s look at what each Tab offers.  Tabs will vary based 
on the App selected so we will use GPC Sales for this training. 
 
Working with Tabs 
 
This is a review of the default Tabs associated with the GPC Sales App.  After reviewing each of these descriptions you 
will know which Tab you want to view when customizing your view in Section 4. 
 
Home Tab 
 
 
The Home Tab gives you information via Dashboards, charts and diagrams containing overviews of related data.  The 
Dashboards update as you refresh the data in Salesforce. Click this icon to refresh data in Salesforce.  
You can expand on Dashboard data by clicking the drop-down arrow or the View… links.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Campaigns 
 
The Campaigns Tab gives you information marketing initiatives, such as an advertisement, direct mail, or conferences, 
that you conduct, or the company conducts in order to generate prospects and build brand awareness.  
 
 
Note – within many tabs there are multiple List Views available.  A List View is a specific set of data within the 
Tab.  See Customize Views to learn how to set your view preferences and shortcuts.
```

#### Page 7 / 17 — `page-007.png`

```text
SF101M-0422 
 
 
6 
 
Leads 
 
 
The Leads Tab gives you information on sales prospects who have expressed interest in your product or company; or 
were generated as a follow up to a Campaign, i.e., mailers that were sent and prospects responded to them. 
 
 
 
 
 
 
 
 
 
Accounts 
 
The Accounts Tab gives you information on organizations, companies or consumers you are working with.  The Account 
is created when a Lead is converted to an Opportunity.     
 
 
 
 
 
 
 
 
Contacts 
 
The Contacts Tab gives you information on people associated with your Accounts.   
 
 
 
 
 
 
 
Note – Contacts should not be added without being associated with an Account.  You are also able to ‘relate’ 
Contacts to multiple Accounts rather than re-entering their information several times.  
 
 
Sites 
 
The Sites Tab gives you information on the Sites (addresses) in Salesforce.  They are listed by Site Name rather than 
Account name.  This tab is not used often.
```

#### Page 8 / 17 — `page-008.png`

```text
SF101M-0422 
 
 
7 
 
Opportunities 
 
The Opportunities Tab gives you information on current deals that have not been finalized.   
 
 
 
 
 
 
Parent Opportunities 
 
The Parent Opportunities Tab gives you information on more complex deals involving multiple parties that may have 
separate billing entities.  
 
GPC Solutions 
 
The GPC Solutions Tab gives you information on your quote status within Salesforce.  You can view approvals and next 
steps in this Tab. 
 
 
 
 
 
 
 
Solution Sites 
 
The Solution Sites Tab gives you information on your quote (Costing) status within Salesforce.  They are listed by 
Solution Site Name rather than Account name.   
 
Projects 
 
The Projects Tab gives you information on the project tasks.  Once a Solution has been Closed/Won a Project is created 
for each Solution Site within Salesforce. 
 
 
 
 
 
 
 
 
Reports 
 
A report returns a set of records that meets certain criteria and displays it in organized rows and columns.
```

#### Page 9 / 17 — `page-009.png`

```text
SF101M-0422 
 
 
8 
 
Dashboards 
 
The Dashboards Tab gives you information on reports via charts or graphs.  There are many Dashboards to choose from 
and you can set them to display on the Home Tab and/or the Dashboard Tab.  
 
Products 
 
The Products Tab gives you information on available Products and descriptions of each.   
 
 
 
 
 
 
 
Tasks 
 
The Tasks Tab gives you information on actions you have entered into Salesforce at items to complete or to follow 
through with.  This Tab is helpful when organizing what you need to accomplish each day.
```

#### Page 10 / 17 — `page-010.png`

```text
SF101M-0422 
 
 
9 
 
SECTION 3 – CUSTOMIZE VIEWS 
 
Customizing your view in Salesforce helps simplify using the software and makes you more efficient.  It may seem like it 
takes time in the beginning, but these views will appear each time you login.  We will walk through how to customize 
views for each of the Tabs.  Some instructions are the same for multiple Tabs, when this is the situation each of the Tabs 
included will be listed. 
 
General Display Settings 
 
Salesforce, like Outlook has different overall settings for viewing.  Salesforce options are Comfy and Cozy.   
 
Customize Tabs Displayed for Apps 
 
Remember, the active App displays on the left side of the screen and the associated Tabs are displayed across the 
Navigation bar.  The displayed Tabs cannot be removed but they can be reordered. 
 
1. Click the Pencil on the right end of the Navigation bar. 
 
 
 
 
2. This pop-up will appear.  Click the 3 lines to the left of each of the Tab icons and drag up or down; up to display 
further to the left and down to display further to the right.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Note:  Tabs toward the bottom of the list may fall under                 if the monitor is not wide enough to display all 
of the Tabs.
```

#### Page 11 / 17 — `page-011.png`

```text
SF101M-0422 
 
 
10 
 
3. Once you have ordered them to your preference click Save. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A green confirmation bar will appear confirming your changes were saved.
```

#### Page 12 / 17 — `page-012.png`

```text
SF101M-0422 
 
 
11 
 
Pinning List Views 
 
Under each of the following Tabs is a List View menu.  Each of the List Views displays data that corresponds to the List 
View’s name.  You have the ability to ‘pin’ or set a default List View for each Tab.  These ‘pinned’ List Views will appear 
when you click each Tab.  They will stay for multiple logins until the cache or cookies are cleared.  The other List View 
options are available under the down arrow.  The default Pinned View will be Recently Viewed. 
 
1. Click the drop-down arrow next to Recently Viewed (or the name of the View you are currently seeing). 
 
 
 
 
 
 
 
 
 
 
 
2. Click on the List View you would like to ‘pin’ as your default List View. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3. Click the grey angled pushpin icon to set as your ‘pinned’ view.
```

#### Page 13 / 17 — `page-013.png`

```text
SF101M-0422 
 
 
12 
 
4. Once the pushpin icon is blue and straight up instead of angled the current List View has been ‘pinned’.  A green 
confirmation bar will appear confirming your changes were saved. 
 
 
 
 
 
 
 
 
5. Repeat this process for each List View you want as your default for each Tab across the Navigation Bar. 
 
 
Setting Display Format 
 
There are three options to display data within Salesforce and you can alternate between them as you prefer.  The 
options are Table, Kanban and Split View.   
 
1. Click the Display icon        in the upper right section of the screen.  
 
 
 
 
 
 
 
 
2. Click which Display you want to view.  
A. Table View is the default view until you select a different option. 
 
 
 
 
 
 
 
 
 
 
Table View is similar to an Excel spreadsheet layout with column headings (Fields) and data displayed in rows.   
 
 
 
 
 
 
 
 
Note:  Table View is helpful when wanting an overview of the data available for the List View selected.
```

#### Page 14 / 17 — `page-014.png`

```text
SF101M-0422 
 
 
13 
 
B. Kanban View is the next option in the menu.   
 
 
 
 
 
 
 
 
 
 
Kanban is similar to a workflow layout with statuses listed across the top and the Records listed under each status.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Note:  Kanban view only displays the first 200 records, if you need to view more than 200 records at one time 
you will need to switch to Table view.  
 
C. Split View is the third option in the menu.
```

#### Page 15 / 17 — `page-015.png`

```text
SF101M-0422 
 
 
14 
 
Split View shows a listing of the available Records in the List View chosen on the right of the screen and when a record is 
selected the details are shown to the right.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Note:  In Split View the Display icon moves positions from the upper right section of the screen to the left side 
above the listings of Records available.
```

#### Page 16 / 17 — `page-016.png`

```text
SF101M-0422 
 
 
15 
 
SECTION 4 – SALESFORCE SALES CYCLE 
 
Each scenario might be a little different than the one before it but let’s look at the basic flow through Salesforce to give 
you an idea of the steps involved and how you can use Salesforce to become more efficient and therefore win more 
sales!  More complex deals have a more complex cycle, but this gives you a great start.  
 
Key – Blue are Phases in the Sales Cycle; Green are the details for each of the Phases. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Lead 
Opportunity 
GPC Solution 
Contracting 
Solution Design 
Sales Reps 
enter the Site 
(address), 
Service and 
Product 
details. 
Depending 
on the details 
different 
Great Plains 
Depts of:  
OSP, COE, 
Off-Net, IPE, 
BSOL assess 
estimates of 
build and 
installation 
costs for the 
deal.   
Depending on the 
details different 
Approvals may be 
needed from 
Product 
Managers,  
Sales Managers, 
the CRO or the 
COO. 
Sales – reviews and 
sends contract to 
customer, review, 
adjust as needed.  
Closed/Won 
Leads are 
inputted by 
Sales Reps or 
through 
Campaigns by 
Home Office. 
There are Phases of the cycle that are under the 
Opportunity.  Sales and other Departments will 
work closely during this Phase. 
Once a Lead 
requests a 
quote or 
pricing from 
you Convert 
them into an 
Opportunity, 
which 
automatically 
creates an 
Account as 
well. 
Costing 
Approval 
Closed 
There are two 
options under 
Closed.  
Closed/Lost 
Do not delete 
any information 
from Salesforce.  
This may turn 
back into an 
option in the 
future.  
Continue 
communication 
with Great 
Plains Depts 
and the 
customer 
regarding each 
Project status.  
A Project is 
created for each 
Site within the 
GPC Solution.  
This is the next 
Phase in the 
cycle.  More 
details are in 
Salesforce 201!
```

#### Page 17 / 17 — `page-017.png`

```text
SF101M-0422 
 
 
16 
 
SECTION 5 – ADDITIONAL RESOURCES 
 
Additional Trainings Available 
 
Salesforce 101 Trainings 
Salesforce 101 Training Courses in GPCU 
Salesforce 101 Training Videos on Teams – Salesforce Users – General – Files – Salesforce Trainings Folder 
Salesforce 101 Quick Reference Guide on Teams – Salesforce Users – General – Files – Salesforce Trainings Folder 
 
Salesforce 201 Trainings 
Salesforce 201 Training Courses in GPCU 
Salesforce 201 Training Videos on Teams – Salesforce Users – General – Files – Salesforce Trainings Folder 
Salesforce 201 Quick Reference Guide on Teams – Salesforce Users – General – Files – Salesforce Trainings Folder 
 
Specific Topic Trainings on Teams – Salesforce Users – General – Files – Updated Salesforce Training Guides Folder 
 
Salesforce Success Tips 
On Teams – Salesforce Users – General – Posts feed weekly 
 
Contacts 
 
SalesforceAdministrator@gpcom.com 
Abranda Andersen, Salesforce Administrator, aandersen@gpcom.com, 402-456-6423
```


<a id="p-df6cb7cd88573ff1"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce Add-in for Outlook Quick Reference Guide - 1123.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Add-in for Outlook Quick Reference Guide - 1123.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Add-in for Outlook Quick Reference Guide - 1123`

**Page count:** 5

#### Page 1 / 5 — `page-001.png`

```text
SAOQRG - 1123 
Salesforce Add-in for Outlook Quick Reference Guide 
What is the Salesforce Add-in for Outlook? 
The Salesforce Add-in for Outlook allows you to log emails etc. to the Salesforce record directly from Outlook.   
 
Step-by-Step instructions to installing the Salesforce Add-in to Outlook:  
1. Go to the Outlook app on your computer 
 
 
 
 
2. Click on File 
 
 
 
 
 
3. Click on Manage Add-ins 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. This will open Outlook in an internet browser.  When the Manage Add-In pop up appears type in Salesforce in the 
upper right corner Search field. 
A. Hit Enter on the keyboard
```

#### Page 2 / 5 — `page-002.png`

```text
SAOQRG - 1123 
5. When the results appear click Add on the official Salesforce Add-in 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
6. Click Continue when this dialogue box appears 
 
 
 
 
 
 
 
 
 
 
 
 
7. A dialogue box with helpful tips will appear, you can click through them to see the tips or click the X right away to 
skip the tutorial. 
 
8. Close the Outlook for Web tab and go back to your Outlook App. 
A. Click the X in the upper right corner to close out of the Outlook App.
```

#### Page 3 / 5 — `page-003.png`

```text
SAOQRG - 1123 
9.  Re-open the Outlook App 
 
10. Click on the Salesforce icon in the menu bar 
 
 
 
 
 
11. You may need to login to your Salesforce account through Outlook to begin the integration between the two apps. 
A. If you do, make sure Environment is set to Production 
B. Click Log In to Salesforce 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
12. You will see one of these versions authentication screens: 
A. Click Confirm and follow the prompts. 
 
 
 
 
 
 
 
 
 
 
B. Click Azure AD and follow the prompts.
```

#### Page 4 / 5 — `page-004.png`

```text
SAOQRG - 1123 
C. Type in gpcom then click Continue and follow the prompts. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D. Type in your GPC email then click Next or select your GPC email, then follow the prompts. 
 
 
 
 
 
 
 
 
 
 
OR 
 
 
 
 
 
 
13. This error may appear the first time you view the Salesforce Add-in for Outlook.  Click the white X and it should not 
persist.  If it does, please reach out to your Salesforce Admin.
```

#### Page 5 / 5 — `page-005.png`

```text
SAOQRG - 1123 
14. Tips for efficiency: 
A. You can pin the Salesforce View by clicking the thumbtack icon if you want the view to always be open.  
 
 
 
 
 
 
 
 
B. Click Log Email to quickly set the default screen within the Add-in to logging emails. 
 
 
 
 
 
 
 
 
 
C. Click the icon to set the default Object you want to log emails to within Salesforce.   
a. Sales use Opportunities (the gold background with the white crown).
```


<a id="p-4ff5a46af061446e"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce Comments Quick Reference Guide - 0723.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Comments Quick Reference Guide - 0723.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Comments Quick Reference Guide - 0723`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
Type the Opportunity Sales Comments 
as though you are directing this 
information to your Sales Management 
team. Keep the Opportunity level Sales 
Comments generic to the Opportunity in 
case you have multiple GPC Solutions 
under that Opportunity. 
Salesforce Comments Quick Reference Guide
SCDQRJA-0723 Taken from SF201M - 0723
Sample: Customer is up for renewal with current provider and 
looking for competitive rates on their internet.
                 
                 
Add more specific Sales Comments on the 
GPC Solution page as though you are 
directing this information to your Sales 
Management team or Billing team.
You can overwrite or keep the Sales 
Comments that pre-filled from the 
Opportunity Sales Comments field.
Sample: Customer is up for renewal with current provider and looking for 
competitive rates on their internet.
(Add) Quoting 100x100 as they currently have 50x10 with their current 
provider and it’s not enough bandwidth for all the POS systems.
Sales Comments 
from the GPC 
Solution page
pre-fill the Sales 
Comments on the 
Project page when
the GPC Solution 
Stage is first set to 
Closed/Won!
Sales Comments from the
GPC Solution page pre-fill the
Site Comment in the dialogue 
box when the Solution Site 
is first created!
Sample: Customer is up for renewal with current provider and looking for competitive rates on their 
internet. Quoting 100x100 as they currently have 50x10 with their current provider and it’s not enough 
bandwidth for all the POS systems.
(Change to) Site has a large sculpture outside the front door with extensive landscaping.  We will 
need to bury fiber behind the building most likely. 
Add the Site Comment as though you 
are directing this information to the 
‘Costing’ or Off-Net departments.  Keep 
this comment specific to this  Solution 
Site. You can overwrite or keep the 
Sales Comments that pre-filled from 
the GPC Solution Sales Comments field.
Add the Project Notes as though you 
are directing this information to the 
Project Management Team assuming 
the GPC Solution will be Closed/Won.  
Type Project Notes in the dialogue box 
under the Site Comment field. These 
are not pre-filled. 
Sample: They’re looking to turn up services before current contract 
with competitor expires on 7/1/22
Project Notes from the 
Solution Site page pre-fill the 
Project Notes field on the 
Project page when the GPC 
Solution Stage is first set to 
Closed/Won!
Sales Comments on the 
Opportunity page pre-fill the 
Sales Comments on the GPC 
Solution page when the GPC 
Solution is first created!
Sales Comments                 
Opportunity page
Sales Comments                 
GPC Solutions page
Site Comment  
Solution Site page            
Project Notes
Solution Site and Project pages        
Sales Comments from the 
GPC Solution page pre-fill 
the Approval Comments in 
the dialogue box when the 
GPC Solution is first 
submitted for Approval.
Comment fields are also 
cloned when a GPC 
Solution is Cloned so be 
sure to update the 
Comments as needed to 
keep the info accurate!
```

#### Page 2 / 2 — `page-002.png`

```text
Approval Comments                 
GPC Solutions page
Add more specific Approval Comments 
in the Submit for Approval dialogue 
box as though you are directing this 
information to your Sales Management 
team. You can overwrite or keep the 
Sales Comments that pre-filled from 
the GPC Solution Sales Comments field.
 Sample: The payback on this is slightly high but I believe we 
should approve this GPC Solution because the owner is well 
known and influential in the community. 
Salesforce Comments Quick Reference Job Aid
                 
                 
Recall Approval 
Comments                 
Add specific Recall Approval Comments in the 
Recall Approval dialogue box as though you are 
directing this information to your Sales 
Management team. These comments tell them 
why you are recalling the Approval as well as 
helpful when looking back at the GPC Solution.
Sample: This Approval request is being recalled to correct the 
Contract Term on the GPC Solution.  The Approval request will be 
resubmitted when finalized.
                 
                 
Recall
Solution Site
Comments                 
Add specific Recall Comments in the Recall 
Solution Site dialogue box as though you are 
directing this information to the ‘Costing’ or 
Off-Net departments. These comments tell 
them why you are recalling the Solution Site 
as well as helpful when looking back at the 
GPC Solution.
  Sample: Recalling the Solution Site due to an error in 
the delivery type, it was submitted as On-Net Copper but 
should be Build fiber.
Comments from other Departments
OSP Comments – found on the Solution Site page
Off-Net Comments – found on the Solution Site page
CPE Comments – found on the Solution Site page
CO Comments – found on the Solution Site page
Recall Reason – found on the Solution Site page
Recall Comments – found on the Solution Site page
SCDQRJA-0522 Taken from SF201M - 0622
```


<a id="p-9e90581d0065a05d"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid - 0522.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid - 0522.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid - 0522`

**Page count:** 10

#### Page 1 / 10 — `page-001.png`

```text
SALQRJA - 0522 
Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid 
1 
SALESFORCE MOBILE APPLICATION MFA & SSO LOGIN QUICK REFERENCE JOB AID 
 
Salesforce Application (App) Best Practices: 
▪ 
Have a screen lock code or password to secure all application on your mobile device 
▪ 
Remember that the Salesforce application has CPNI and other sensitive data that will be available on your phone 
 
*NOTE: If you are already signed into the Salesforce app, you will need to log out, please see the instructions in the last 
section if you need assistance 
*NOTE: You will also need to have an Authenticator app installed on your phone, GPC’s IT dept. suggests Google 
Authenticator.  
 
Contents 
Salesforce Mobile Application MFA & SSO Login Quick Reference Job Aid ........................................................................... 1 
Login with MFA & SSO (both Android & iPhone) .................................................................................................................... 2
```

#### Page 2 / 10 — `page-002.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
2 
Login with MFA & SSO (both Android & iPhone) 
1. When you first open the app without being logged in you will see this screen 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. When this screen appears, touch Use Custom Domain in the lower right corner
```

#### Page 3 / 10 — `page-003.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
3 
3. Type gpcom only in the field, the full URL will appear below 
4. Touch Continue 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5. When this screen appears, touch Azure AD
```

#### Page 4 / 10 — `page-004.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
4 
6. On this screen type in your full gpcom.com email address 
7. Touch Next 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
8. Enter your GPC password 
9. Touch Sign in
```

#### Page 5 / 10 — `page-005.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
5 
*NOTE: this screen will appear and may stay for a moment or so 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
10. This screen will ask for the authentication code from the Google Authenticator.
```

#### Page 6 / 10 — `page-006.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
6 
11. Open the Google Authenticator on your phone  
 
 
 
 
 
 
 
 
 
12. When you open the Google Authenticator app this screen will appear with a six-digit code that you need to copy or 
remember to type in the screen show on step 8.   
*NOTE: the blue circle icon is a timer, and each code is only valid for a minute or so.  If the circle is almost gone wait 
for a new code to generate before copying over. 
A. Copy the code by long pressing on the code itself.  Once copied a confirmation banner should appear.
```

#### Page 7 / 10 — `page-007.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
7 
13. Go back to the authentication screen in the Salesforce app and long press in the blank field to paste the code – or – 
touch the field so the keyboard appears and type the code in the field 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
14. Once the code is copied (it will appear as dots in the field) touch Continue
```

#### Page 8 / 10 — `page-008.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
8 
15. When this screen appears touch the checkbox next to Don’t show this again  
16. Touch Yes
```

#### Page 9 / 10 — `page-009.png`

```text
SMALQRJA - 0522 
Login with MFA & SSO (both Android & iPhone) 
9 
17. When this screen appears, touch Allow  
A. On iPhone it will say iOS 
B. On Android it will say Android 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
18. You will be taken to the default page within the Salesforce app.  You will stay logged into the Salesforce app until 
you log out or restart your phone in some cases.  
 
 
*NOTE: We will be working on the Salesforce app configuration this summer to make it more user friendly!
```

#### Page 10 / 10 — `page-010.png`

```text
SMALQRJA - 0522 
Logging out of the Salesforce application on your mobile device 
10 
Logging out of the Salesforce application on your mobile device 
1. Touch your profile picture in the upper left corner 
 
 
 
2. Once the menu appears touch Log Out 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3. Touch Yes on the Log out confirmation screen
```


<a id="p-f105d2c17a979e99"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422`

**Page count:** 3

#### Page 1 / 3 — `page-001.png`

```text
SSSOMFAQRJA - 0422 
 
1 
Salesforce Single Sign-On with Multi-Factor Authentication Login – required as of 4.21.22 
Why the change? 
The global threat landscape is constantly evolving, and the types of attacks that can cripple a business and exploit 
consumers are on the rise. It's more important than ever to implement stronger security measures. MFA is one of the 
easiest, most effective tools for enhancing login security, and safeguarding your business and data against security 
threats. Salesforce now requires customers to implement MFA to help mitigate the risks stemming from threats like 
phishing attacks, credential surfing, and compromised devices. 
By using the same authentication method for multiple corporate resources like VPN, Outlook, and Salesforce we simplify 
the log in process as there are fewer passwords to remember. And by combining single sign-on with MFA we don’t have 
to compromise security with convenience, win-win! 
 
Timeline to implementation: 
4.11.22 – start using SSO with MFA today and reach out to Abranda at 
SalesforceAdministrator@GPCom.com with any questions or troubles 
 
4.21.22 – SSO with MFA will go live!   
 
Step-by-Step instructions to logging in with SSO & MFA: 
1. Go to https://gpcom.my.salesforce.com/ 
2. Click on Azure AD under Log in Using 
 
 
 
 
 
NOTE: If you’re already authenticated, it will log you 
into Salesforce and you’ve completed the login process. 
YAY!! If not, keep going! 
 
 
3. If you need to authenticate, enter your email address into the Sign in prompt and click next, or select your email 
address if you’re asked to pick an account. 
 
 
 
 
 
 
 
 
 
 
 
 
OR 
 
 
 
 
 
 
 
 
You will see a message stating that you are being  
redirected to your organization’s sign-in page.
```

#### Page 2 / 3 — `page-002.png`

```text
SSSOMFAQRJA - 0422 
 
2 
 
 
4. Once you have landed on the Great Plains Communications login page, enter your password and choose Sign in. 
 
 
 
 
 
 
 
 
 
 
5. You will now be presented with a page asking you to provide your OTP token. Place your cursor in the blank field.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
6. If you haven’t yet, insert your Yubikey into a USB port on your computer.  
Press the ‘Y’ button on your Yubikey Device and it will automatically advance you to the next page. 
 
 
 
 
 
 
 
 
7. It might ask you if you would like to stay signed in, check the box for Don’t show this again, and click yes. 
 
 
 
 
 
 
 
 
 
 
8. You have logged in with SSO & MFA!  Congratulations! Your Salesforce Home tab should be displaying.
```

#### Page 3 / 3 — `page-003.png`

> **Note:** Minimal extractable text on this page (37 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce SSO & MFA Quick Reference Guide - 0422/page-003.png` for layout, charts, or scans.

```text
SSSOMFAQRJA - 0422 
 
3 
Taken from SF101M - 0422
```


<a id="p-6cf019855816bead"></a>


### `extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222`

**Page count:** 9

#### Page 1 / 9 — `page-001.png`

> **Note:** Minimal extractable text on this page (39 non-whitespace characters). Review `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (3)/Salesforce-NISC-iVUE Integration Overview 0222/page-001.png` for layout, charts, or scans.

```text
Salesforce-NISC/iVUE Integration 
Overview
```

#### Page 2 / 9 — `page-002.png`

```text
SF/ iVUE - 0122  
 
 
1 
 
Salesforce and NISC/iVUE currently integrate but not on an automatically synced schedule.  Soon, they will be integrated 
fully and synced consistently.  At that time some important pieces of information will be helpful to know.  Let’s look at 
how the two systems communicate today. 
 
CUSTOMER ACCOUNT IDENTIFICATION: 
 
iVUE – iVUE records are identified by a Customer Number that is assigned in iVUE.  iVUE allows for accounts 
under the main account and assigns those Account Numbers.  
 
Customer Number example in iVUE (red circle)  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Account Number under a Customer Number example in iVUE (blue circle) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Note:  A new field will be added soon to add a Doing Business As name of your customer’s company.
```

#### Page 3 / 9 — `page-003.png`

```text
SF/ iVUE - 0122  
 
 
2 
 
Salesforce – currently Salesforce accounts are identified by an auto-assigned identifier by Salesforce (Though if 
two accounts are entered with the same name they are treated as separate accounts until they are merged, so it is 
possible to see duplicate accounts even though they have different system identifiers). 
 
Account Identifier example in Salesforce 
 
 
 
 
 
 
 
 
 
 
The iVUE Customer ID field on the Account page ties the Salesforce record to the iVUE record. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
The iVUE Account ID on the Billing Account in Salesforce matches the Account Number in iVUE.
```

#### Page 4 / 9 — `page-004.png`

```text
SF/ iVUE - 0122  
 
 
3 
 
Integration Implications: 
Currently the account is tied to each system through the iVUE Customer ID field on the Account page in Salesforce.  For 
the accounts that match iVUE one to one this will integrate with no hiccups.  For the customers that have multiple 
accounts in Salesforce or Customer Numbers in iVUE with Account Numbers this does become a hiccup because the 
iVUE Customer ID field is considered an external id and those cannot be used across different accounts within 
Salesforce. 
Action Items: 
The iVUE Customer ID field on the Account page within Salesforce needs to be updated with the correct Customer 
Number from iVUE.   
 
 
 
Note:  the iVUE system will overwrite the Salesforce fields of: Account Status, Business?, CPNI Opt In, CPNI Opt 
Out, Customer Priority, Federal ID, Incorporated Date, iVUE Customer ID, iVUE Last Sync By, iVUE Last Sync Date, 
iVUE Sync, iVUE Sync Status, Key Account, Master Agreement, Member, Number of Locations, Sales Team, Total 
Revenue, Unit, Upsell Opportunity.  Some of these objects you may not be familiar with, but it is important to 
know they are affected by the integration. 
 
AGREEMENTS 
 
Agreements hold the details of the deal with the customer – service types, contract dates, etc.  Agreements can be 
viewed in Salesforce in two places on the Billing Account page. Either by hovering over Agreements in the Related Quick 
Links section or by clicking the hyperlinks in the Agreements section further down the screen.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
NOTE:  The Agreement numbers should match across Salesforce and iVUE.
```

#### Page 5 / 9 — `page-005.png`

```text
SF/ iVUE - 0122  
 
 
4 
 
Agreements can be viewed in iVUE under Agreements from the left menu.  You will notice both the Customer Number 
and the Account Numbers are referenced in iVUE.   
 
 
 
 
 
 
 
Viewing NISC data within Salesforce 
 
To view NISC data without logging in to NISC click the Fetch from iVUE button in the upper right corner of the Account 
Page.  
 
CHARGES AND CREDITS 
 
Charges and Credits can be viewed in Salesforce by clicking on the Agreement hyperlink on Billing Account page.
```

#### Page 6 / 9 — `page-006.png`

```text
SF/ iVUE - 0122  
 
 
5 
 
From there you will see a hyperlink to Charges and Credits under the Related List Quick Links or scroll down to the 
Charges and Credits section on the page.  
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
Charges and Credits can be viewed in iVUE by clicking on the Agreement Number and then the P&S tab toward the 
middle of the screen.
```

#### Page 7 / 9 — `page-007.png`

```text
SF/ iVUE - 0122  
 
 
6 
 
SERVICE POINTS 
This object ties the Agreements to the Service Address.  It is found in the Related Quick Links section on the Billing 
Account page.  
 
SERVICE ORDERS 
This object opens a ticket on behalf of the customer.  It is found in the Related Quick Links section on the Billing Account.  
 
FETCH FROM IVUE OPTION 
Agreements (and other information covered shortly) can also be viewed within Salesforce with the Fetch from iVUE 
button on the Account Page.  This button retrieves information from iVUE and displays it in Salesforce.
```

#### Page 8 / 9 — `page-008.png`

```text
SF/ iVUE - 0122  
 
 
7 
 
The image below is hard to read but it lists the Customer Number, Account Numbers and Agreement Numbers from 
iVUE. To get back to the Account page in Salesforce simply click the browser back button.  
 
NOTE:  If you click Update Lead Agent this will update the Account data in Salesforce with data from iVUE.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
DOC VAULT 
If there is a file or attachment you would like to add to the record within iVUE click the drop-down arrow next to the 
Fetch from iVUE button and select Doc Vault.
```

#### Page 9 / 9 — `page-009.png`

```text
SF/ iVUE - 0122  
 
 
8 
 
This page below will appear with the information for uploading files.  Note the attachment size requirement.  Click 
Choose File in the lower left corner of the screen. From there select your file and upload to iVUE.
```


<a id="p-5a73f9012596d0f4"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5`

**Page count:** 6

#### Page 1 / 6 — `page-001.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
 
Subscription Service 
Category 
Product Name 
MRC 
Product Description 
Customer Description 
Discount  
Monthly Subscription Service 
Smart Security 
Monitoring 
Service 
 $54.99  
Security Monitoring Service with 
MAINTENANCE included 
24/7 Security Central Station Monitoring Service  
Equipment Maintenance 
Term 
Intelligent Video 
and Security 
Monitoring 
Services 
 $72.99  
Security Monitoring Service with Video 
Surveillance & Maintenance included.  
Up to 16 cameras. 
24/7 Security Central Station Monitoring Service  
Video Analytics 
Video Surveillance up to 16 cameras (5000 
Cloud Video Clips) 
Equipment Maintenance 
Term 
Intelligent Video 
Service 
 $25.99  
Video Surveillance service with 5000 
Cloud Video Clips & Maintenance 
included.  Up to 16 cameras.  
NO Security Monitoring Service 
Video Analytics 
Video Surveillance up to 16 cameras (5000 
Cloud Video Clips) 
Equipment Maintenance 
Term 
DoorPass 
Combo Service 
(up to 4 doors) 
$39.99 
Access Control service covers up to 4 
access doors (order with the Smart 
Security Monitoring and/or Intelligent 
Video service) 
Maintenance included. 
Remote access control 
Grant access permission via mobile and/or web 
user portal   
Equipment Maintenance 
Term 
DoorPass 
Standalone 
Service (up to 4 
doors) 
$44.99 
Access Control service covers up to 4 
access doors (order without the Smart 
Security Monitoring and/or Intelligent 
Video service) 
Maintenance included. 
DoorPass 
Additional Door 
Service 
$8.00 
Access Control service for additional 
door at site that requires more than 4 
doors. 
Maintenance included.
```

#### Page 2 / 6 — `page-002.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
 
Bundled Equipment 
Category 
Product Name 
NRC 
Product Description 
Customer Description 
Discount  
Standard Basic Equipment Package 
Smart Security 
Monitoring 
Starter Kit 
$650.00 
Starter package of equipment 
recommended for the smart security 
monitoring service. Package MUST have 
the Smart Security Monitoring Service 
product included in proposal. GPC 
SIA/DIA service is required. 
Packaged equipment includes  
One (1) control panel  
Three (3) door/window sensors 
One (1) motion detector 
Professional installation 
No 
Intelligent 
Video and 
Security 
Monitoring 
Starter Kit 
$1,400.00 
Starter package of equipment 
recommended for the security 
monitoring & video surveillance service. 
Package MUST have the Intelligent 
Video and Security Monitoring Service 
product included in proposal. GPC 
SIA/DIA service is required. 
Packaged equipment includes  
One (1) control panel  
Three (3) door/window sensors 
One (1) motion detector 
Two (2) indoor/outdoor wireless camera 
One (1) video recorder - 16 channel 2TB  
Professional installation 
No 
Intelligent 
Video Starter 
Kit 
$2,200.00 
Packaged equipment required for the 
video surveillance service. Package 
MUST have the Video Surveillance 
subscription. GPC SIA/DIA service is 
required.  Choose any combination of 4 
indoor/outdoor PoE cameras:  Mini 
Bullet, Dome, Large Bullet, or Turret. 
16 Channel integrated PoE CSVR is 
included. 
Packaged equipment includes  
Four (4) PoE cameras 
One (1) video recorder - 16 channel 6TB with 
integrated PoE switch 
Professional installation 
No 
Intelligent 
Video - 
Expansion Pack 
$1,200.00 
Choose a combination of additional 
cameras (up to 4 total cameras max).  
Choose from indoor/outdoor PoE 
cameras:  Mini Bullet, Dome, Large 
Bullet, or Turret. 
Add an integrated 8 or 16 port CSVR if 
the total cameras exceed 16. 
Packaged equipment includes  
Four (4) PoE cameras 
Professional installation 
No 
One (1) 
DoorPass 
Starter Kit 
$2,100.00 
Starter package of equipment 
recommended for the DoorPass (Access 
Control) service. Package MUST have 
the DoorPass Service product included 
in proposal. GPC SIA/DIA service is 
required. 
Packaged equipment includes  
One (1) Two-Door Controller & Power Kit  
One (1) Door Strike 
One (1) Reader 
Professional installation 
No 
Two (2) 
DoorPass 
Starter Kit 
$2,900.00 
Starter package of equipment 
recommended for the DoorPass (Access 
Control) service. Package MUST have 
the DoorPass Service product included 
in proposal. GPC SIA/DIA service is 
required. 
Packaged equipment includes  
One (1) Two-Door Controller & Power Kit  
Two (2) Door Strikes 
Two (2) Readers 
Professional installation 
No 
Three (3) 
DoorPass 
Starter Kit 
$4,050.00 
Starter package of equipment 
recommended for the DoorPass (Access 
Control) service. Package MUST have 
the DoorPass Service product included 
in proposal. GPC SIA/DIA service is 
required. 
Packaged equipment includes  
One (1) Two-Door Controller & Power Kit  
One (1) Expansion Module 
Three (3) Door Strikes 
Three (3) Readers 
Professional installation 
No 
Four (4) 
DoorPass 
Starter Kit 
$4,850.00 
Starter package of equipment 
recommended for the DoorPass (Access 
Control) service. Package MUST have 
the DoorPass Service product included 
in proposal. GPC SIA/DIA service is 
required. 
Packaged equipment includes  
One (1) Two-Door Controller & Power Kit  
One (1) Expansion Module 
Four (4) Door Strikes 
Four (4) Readers 
Professional installation 
No
```

#### Page 3 / 6 — `page-003.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
Promotional 
Credit 
Business 
Security multi-
year promotion 
credit  
 $(300.00) 
This is ONLY applicable to 3-year, 4-year or 5-year contract term. The promotional bill 
credit to be applied to any one of the service kits - Smart Security Starter Kit, Intelligent 
Video and Security Starter Kit or Intelligent Video Starter Kit.  
No 
 
If a “Starter Kit” is not part of your quote then add “Installation Charge” product to cover cost of truck roll.    Must include a monthly 
service plan with any security product. 
 
A La Carte Optional Equipment 
Category 
Product Name 
NRC 
Product Description 
Customer Description 
Discount  
Install 
Installation 
Charge 
$50.00 
Installation Charge 
No 
gateSensor 
Sensor - 
Door/Window  
$51.95 
PowerG Door/Window Sensor  
Up to 
20% 
Sensor - Recess 
Door Contact 
$83.95 
PowerG Wireless Recess Door Contact   
Up to 
20% 
Sensor - 
Wireless 
Door/Window 
Sensor w/AUX 
Input 
$71.95 
PowerG Door/Window Sensor, w/AUX Input   
Up to 
20% 
Detector 
Detector - 
Motion 
$62.95 
PowerG PIR Motion-85 lbs  
Up to 
20% 
Detector - 
Curtain Motion 
$100.95 
PowerG Curtain PIR Motion  
Up to 
20% 
Detector - 360° 
Motion 
$144.95 
PowerG 360 Motion Detector  
Up to 
20% 
Detector - Glass 
Break 
$81.95 
PowerG Glass Break Detector  
Up to 
20% 
Detector - 
Door/Window 
Contact Relay 
$94.95 
PowerG Commercial DR/W+302 (Relay)  
Up to 
20% 
Detector - 
Flood 
$77.95 
PowerG Flood Detector  
Up to 
20% 
Control Panel and 
Accessories 
Control Panel 
$516.95 
Updated IQ Control Panel  
Up to 
20% 
Control Panel 
Desk Stand 
$29.95 
IQ Panel 4 Desk Stand (White)  
Up to 
20% 
Control Panel 
Remote 
$309.95 
IQ Panel 2+ Remote  
Up to 
20% 
Battery - Panel 
Replacement 
$54.95 
Replacement backup battery for IQ Panel  
Up to 
20% 
Control Panel 
AC Adapter 
$36.95 
IQ Panel 2 7V AC Adapter  
Up to 
20%
```

#### Page 4 / 6 — `page-004.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
 
A La Carte Optional Equipment 
Category 
Product Name 
NRC 
Product Description 
Customer Description 
Discount  
Automation and Accessories 
Smart Plug 
Appliance 
Module  
 $82.95  
Repeater, Ultra Slim Appliance Module    
Up to 
20% 
Smart Plug 
Lamp Module 
 $63.95  
Repeater, Dimmable Lamp Module  
Up to 
20% 
Smart Dimmer 
 $66.95  
Plug-In Smart Dimmer, Dual Plug 2nd Outlet  
Smart Dimmer 
Up to 
20% 
Smart 
Appliance 
Switch 
 $61.95  
Plug-In Smart Appliance, Dual Plug 2nd Outlet  
Smart Appliance Switch 
Up to 
20% 
Wireless Camera & 
Accessories 
Camera - 
Outdoor 
Wireless IP 
 $265.95 
Outdoor Wireless IP Camera  
Up to 
20% 
Camera - 
Indoor 1080p 
Wifi 
 $202.95  
Alarm.com Indoor 1080p Wi-Fi Camera  
Up to 
20% 
Camera - 180° 
HD w/zoom & 
2-way 
 $328.95  
180 Degree HD Camera w/ Zoom & 2way  
Up to 
20% 
PoE Camera 
Camera - 
Indoor/Outdoor 
PoE Dome 
1080p 
 $276.95 
Indoor/Outdoor PoE Dome 1080p Camera  
Up to 
20% 
Camera - 
Indoor/Outdoor 
PoE Large 
Bullet 
 $337.95 
Indoor/Outdoor PoE (Large) Bullet Camera  
Up to 
20% 
Camera - 
Indoor/Outdoor 
PoE Turret 
1080p 
 $347.95 
Indoor/Outdoor PoE Turret 1080p Camera  
Up to 
20% 
Video 
Misc. 
Full HD Color 
Monitor with 
Optical Mouse 
$259.99 
Full HD Color Monitor with Optical Mouse - review video footage 
Up to 
20%
```

#### Page 5 / 6 — `page-005.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
 
A La Carte Optional Equipment 
Category 
Product Name 
NRC 
Product Description 
Customer Description 
Discount  
Energy Management and 
Accessories 
Smart 
Thermostat 
T2000 
 $446.95  
Alarm.com Smart Thermostat T2000  
Up to 
20% 
Smart Gateway 
 $118.95  
Alarm.com Smart Gateway (z-wave)  
Up to 
20% 
Smart Gateway 
 $91.95  
Alarm.com Smart Gateway  
Up to 
20% 
Detector - 
Temperature 
 $100.95 
PowerG Temperature Detector  
Up to 
20% 
Adapter and 
Repeater 
PoE to Wifi 
Bridge  
 $104.95  
Alarm.com PoE to WiFi Bridge  
Up to 
20% 
Wireless 
Repeater 
 $137.95 
PowerG Wireless Repeater 
Up to 
20% 
Wired/Wireless 
Expansion 
Module 
 $230.95  
PowerG 8 Zone Hardwire Takeover  
Up to 
20% 
Video Camera Recorder for Local 
Storage 
Video Recorder 
- (2TB) 
 $742.95 
CSVR126 16 Channel With 1 X 2TB SATA HDD  
Up to 
20% 
Video Recorder 
- (6TB) 
 $925.95 
CSVR126 16 Channel With 2 X 3TB SATA HDD  
Up to 
20% 
Video Recorder 
- (12TB) 
 $1,545.00 
CSVR126 16 Channel With 2 X 6TB SATA HDD  
Up to 
20% 
CSVR with 
Integrated 8 
Port PoE Switch 
 $959.95 
CSVR with PoE port switch - 3TB HD 
Up to 
20% 
CSVR with 
Integrated 16 
Port PoE Switch 
 $1,305.95 
CSVR with PoE port switch - 6TB HD 
Up to 
20% 
PoE Switch 
PoE Switch - 
support up to 4 
Cameras 
 $193.95 
PoE Switch - up to 4 Cameras  
Up to 
20% 
PoE Switch - 
support up to 
14 Cameras 
 $467.95  
PoE Switch - up to 12 Cameras  
Up to 
20% 
PoE Switch - 
support up to 
22 Cameras 
 $617.95  
PoE Switch - up to 20 Cameras  
Up to 
20% 
PoE Switch - 
support up to 
46 Cameras 
 $1,271.95  PoE Switch - up to 44 Cameras  
Up to 
20%
```

#### Page 6 / 6 — `page-006.png`

```text
Pricing Sheet - Sales R5 
 
August 2024 
 
 
A La Carte Optional Equipment 
Category 
Product Name 
NRC 
Product Description 
Customer Description 
Discount  
Security Accessories 
Arming Station 
 $249.95 
PowerG Wireless Arming Station  
Up to 
20% 
Arming Station 
Power Supply 
 $47.95 
Power Supply for DSC Wireless Arming Station  
Up to 
20% 
Panic Button 
 $57.95 
PowerG Panic Button  
Up to 
20% 
Indoor Siren 
 $164.95 
PowerG Wireless Indoor Siren  
Up to 
20% 
Outdoor Siren 
 $267.95 
PowerG Wireless Outdoor Siren  
Up to 
20% 
Access 
Badge 
Access Kob 
 $136.95 
Key Fobs (per 25) 
Up to 
20% 
Access Card 
 $140.00 
Access Cards (per 25) Printable 
Up to 
20% 
Door Strike 
Cylinder 
Centerline 
 $296.95 
7114 Strike (Cylinder Centerline) 
Up to 
20% 
Slimline 
surface 
 $619.95 
9400 Strike (Slimline surface) 
Up to 
20% 
3/4 Surface 
 $594.95  
9600 Strike (3/4 Surface) 
Up to 
20% 
Mortise 
 $637.65 
Mortise Strike 
Up to 
20% 
No Cut 
 $303.95 
No Cut Strike 
Up to 
20% 
Door 
Lock 
Maglock 
 $275.95 
MagLock 
Up to 
20% 
Double 
MagLock 
 $700.95 
Double MagLock 
Up to 
20% 
Reader 
Keypad 
Reader 
 $578.95 
Keypad Reader 
Up to 
20% 
Slimline 
Reader 
 $395.95 
Slimline Reader 
Up to 
20% 
Single Gang 
Reader 
 $395.95 
Single Gang Reader 
Up to 
20% 
Exit Device 
Slim Exit 
Button 
$163.95 
Slim Request to Exit Button 
Up to 
20% 
Single Exit 
Button 
$134.95 
Single Gang Request to Exit Button 
Up to 
20% 
Exit Sensor 
$142.95 
Request to Exit Motion 
Up to 
20%
```


<a id="p-36a7984300a5f182"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2022-12 SIA Market Groups.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2022-12 SIA Market Groups.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2022-12 SIA Market Groups`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
NE-ILEC-PRI
NE-CLEC-PRI
IN-CLEC-PRI
NE-PREM
AINSWORTH
KIMBALL
ARCHER
PRIMROSE
Grant
Atkinson
Greensburg
Bellevue
ALBION
LAUREL
ARNOLD
RAGAN
Imperial
Axtell
Bennington
ALDA
LODGEPOLE
BELGRADE
RED CLOUD
BANCROFT
Elm Creek
COUNCIL BLUFFS, IA
AURORA
LOOMIS
BLOOMFIELD
RUSHVILLE
BEEMER
Elwood
Elkhorn
BARNESTON
LOUISVILLE
BYRON
SAINT EDWARD
DODGE
Grand Island
Gretna
BASSETT
LOUP CITY
CALLAWAY
S BYRON
ELGIN
Kearney
La Vista
BEATRICE
MACY
CEDAR RAPIDS
S CHESTER
INDIANOLA
Lexington
Omaha (Metro)
BENKELMAN
MITCHELL
CENTER
SCRIBNER
OAKDALE
McCook
Papillion
BLAIR
MORRILL
CHAPMAN
SPALDING
SNYDER
Minden
Ralston
BROKEN BOW
ODELL
CHESTER
S RED CLOUD
Overton
Springfield
CAIRO
O'NEIL
CODY
STAPLETON
Wood River
Valley
CENTRAL CITY
ORCHARD
COTESFIELD
STRATTON
ALMA
Waterloo
CHADRON
ORD
CREIGHTON
SUTHERLAND
AUBURN
CHAPPELL
PAWNEE CITY
CROFTON
TRENTON
BARTLEY
CORYDON, IN
PLAINVIEW
CROOKSTON
TRYON
BATTLE CREEK
CRAB ORCHARD
PLATTE CENTER
CULBERTSON
VENANGO
CAMBRIDGE
CRAWFORD
POTTER
DESHLER
VERDIGRE
COLUMBUS
DAKOTA CITY
RANDOLPH
EWING
WALNUT
FREMONT
DILLER
SAINT PAUL
GORDON
WAUSA
HASTINGS
2GB Available 
DONIPHAN
SARGENT
HAYES CENTER
WILCOX
HUMPHERY
DUBOIS
SCHUYLER
HAY SPRINGS
WINNETOON
MADISON
ELSIE
STANTON
HERMAN
WISNER
NEBRASKA CITY
FAIRBURY
Steinauer
KILGORE
WOLBACH
NELIGH
FALLS CITY
SUTTON
MERRIMAN
WOOD LAKE
NEWMAN GROVE
FRANKLIN
TECUMSEH
MIRAGE FLATS
W VENANGO
NORFOLK
FT CALHOUN
WAVERLY
N CODY
WYNOT
NORTH PLATTE
FULLERTON
WINNEBAGO
N CROOKSTON
Napoleon
OAKLAND
GREELEY
WYMORE
N GORDON
Saint Leon
PERU
HEBRON
Batesville
NIOBRARA
Sunman
PILGER
HENDERSON
Morris 
N KILGORE
West Harrison 
REPUBLICAN CITY
HERSHEY
Oldenburg 
NORTH BEND
St. Peters 
SCOTTSBLUFF
HOLDREGE
Brookville
OCONTO
New Alsace’s 
SEWARD
HOMER
Liberty
PAGE
Guilford 
SIDNEY
HUMBOLDT
Rising Sun
PALISADE
Milan 
SYRACUSE
INMAN
Westport
PETERSBURG
Osgood 
VALENTINE
JOHNSON
Lake Santee 
PONCA
WAYNE
JUNIATA
New Pont 
WEST POINT
Millhousen 
This is not a comprehensive list.  All 
communities outside of ILEC, Priority, and 
Prem will fall in CLEC market group.
IA-CB, IN-CLEC, NE-CLEC
IN-ILEC, NE-ILEC 
 GPC Market Division
Area defined by Douglas 
and Sarpy Counties and 
CB city limits
```


<a id="p-128f3e8040257101"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2024-01 SIA Enterprise Pricing.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2024-01 SIA Enterprise Pricing.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/2024-01 SIA Enterprise Pricing`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Fiber
Priority
Copper
Priority
COAX
Priority
50x50Mb
64.95
$    
10x1Mb
64.95
$         
50x10Mb
64.95
$    
100x100Mb
94.95
$    
20x2Mb
64.95
$         
100x20Mb
94.95
$    
300x300Mb
119.95
$  
30x5Mb
64.95
$         
300x20Mb
119.95
$  
500x500Mb
129.95
$  
50x10Mb
64.95
$         
700x20Mb
139.95
$  
1000x1000Mb
199.95
$  
100x20Mb
94.95
$         
1000x30Mb
199.95
$  
2000x2000Mb*
350.95
$  
Fiber
CLEC
Copper
CLEC
COAX
CLEC
50x50Mb
84.95
$    
10x1Mb
64.95
$         
50x10Mb
84.95
$    
100x100Mb
129.95
$  
20x2Mb
69.95
$         
100x20Mb
129.95
$  
300x300Mb
169.95
$  
30x5Mb
74.95
$         
300x20Mb
169.95
$  
500x500Mb
199.95
$  
50x10Mb
84.95
$         
700x20Mb
219.95
$  
1000x1000Mb
279.95
$  
100x20Mb
129.95
$       
1000x30Mb
279.95
$  
2000x2000Mb*
490.95
$  
Fiber
ILEC
Copper
ILEC
COAX
ILEC
50x50Mb
93.95
$    
10x1Mb
71.95
$         
50x10Mb
93.95
$    
100x100Mb
142.95
$  
20x2Mb
76.95
$         
100x20Mb
142.95
$  
300x300Mb
186.95
$  
30x5Mb
82.95
$         
300x20Mb
186.95
$  
500x500Mb
219.95
$  
50x10Mb
93.95
$         
700x20Mb
241.95
$  
1000x1000Mb
307.95
$  
100x20Mb
142.95
$       
1000x30Mb
307.95
$  
2000x2000Mb*
539.95
$  
Pricing 
50x10Mb
89.95
$    
50x50Mb
109.95
$  
100x50Mb
149.95
$  
788.95
$  
100x100Mb
199.95
$  
788.95
$  
300x50Mb
224.95
$  
788.95
$  
300x300Mb
249.95
$  
788.95
$  
500x100Mb
274.95
$  
539.95
$  
500x500Mb
299.95
$  
490.95
$  
1000x300Mb
399.95
$  
490.95
$  
1000x1000Mb
449.95
$  
350.95
$  
2000x2000Mb*
788.95
$  
350.95
$  
788.95
$  
Valley, NE 
Elkhorn, NE
Gretna, NE
Council Bluffs, IA
North Bend, NE
Broken Bow NE
Blair, NE
Fremont, NE
McCook, NE
*2Gb Available
Omaha, NE (Papillion, La 
Vista, Bellevue)
NE-PREM, IA-CB | OMAHA
ENTERPRISE LIST PRICING
NE-ILEC, IN-ILEC
NE-CLEC-PRI, NE-ILEC-PRI, IN-CLEC-PRI 
NE-CLEC, IN-CLEC
```


<a id="p-d913eff30d18b34b"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202401 - DIA Market Groups.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202401 - DIA Market Groups.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202401 - DIA Market Groups`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Albion - NE
Chicago - IL
Imperial - NE
Norfolk - NE
Scottsbluff - NE
Atkinson - NE
Columbus - NE
Johnson - NE
North Platte - NE
Seward - NE
Auburn - NE
Denver - CO
Kansas City - KS
Omaha - NE
Sidney - NE
Batesville - IN
Des Moines - IA
Kearney - NE
Omaha Metro
Sioux City - IA
Beatrice - NE
Elkhorn - NE
Lexington - NE
O'Neill - NE
South Sioux City - NE
Bellevue - NE
Elm Creek - NE
McCook - NE
Overton - NE
Valentine - NE
Bennington - NE
Elwood - NE
Minden - NE
Papillion - NE
Waverly - NE
Blair - NE
Fremont - NE
Minneapolis - MN
Peru - NE
West Point - NE
Broken Bow - NE
Grand Island - NE
Morrill - NE
Plattsmouth - NE
Wood River - NE
Chadron - NE
Greensburg - IN
Nebraska City - NE
Rising Sun - IN
Yankton - SD
Cheyenne - WY
Hastings - NE
Neligh - NE
Schuyler - NE
Ainsworth - NE
Fullerton - NE
Lake Santee - IN
Orchard - NE
St. Paul - NE
Alliance - NE
Genoa - NE
Liberty - IN
Ord - NE
St. Leon - IN
Alma - NE
Gordon - NE
Lodgepole - NE
Osgood - IN
St. Peters - IN
Bassett - NE
Grant - NE
Loup City - NE
Palmer - NE
Stapleton - NE
Beemer - NE
Guilford - IN
Madison - NE
Pawnee City - NE
Sunman - IN
Brookville - IN
Harrison - IN
Milan - IN
Pilger - NE
Sutherland - NE
Cairo - NE
Hay Springs - NE
Millhousen - IN
Plainview - NE
Syracuse - NE
Central City - NE
Hebron - NE
Morris - IN
Platte Center - NE
Tecumseh - NE
Chappell - NE
Herman - NE
Napoleon - IN
Potter - NE
Walthill - NE
Crawford - NE
Humboldt - NE
New Alsace- IN
Red Cloud - NE
Westport - IN
Culbertson - NE
Humphrey - NE
New Point - IN
Republican City - NEWinnebago - NE
Doniphan - NE
Indianola - NE
North Bend - NE
Snyder - NE
Wisner - NE
Ewing - NE
Inman - NE
Oakland - NE
Spalding - NE
Wymore - NE
Fairbury - NE
Kimball - NE
Oldenburg - IN
St. Edward - NE
Archer - NE
Champion - NE
Fordyce - NE
Oakdale - NE
Stratton - NE
Arnold - NE
Chapman - NE
Franklyn - NE
Oconto - NE
Tilden - NE
Bancroft - NE
Chester - NE
Hamlet - NE
Page - NE
Trenton - NE
Bartlett - NE
Cody - NE
Hayes Center - NE
Palisade - NE
Tryon - NE
Bartley - NE
Cotesfield - NE
Hooper - NE
Petersburg - NE
Venango - NE
Batesland - NE
Creighton - NE
Hubbell - NE
Ponca - NE
Verdigre - NE
Battle Creek - NE
Crofton - NE
Huntley - NE
Primrose - NE
Walnut - NE
Belgrade - NE
Crookston - NE
Kilgore - NE
Ragan - NE
Wausa - NE
Benkleman - NE
Deshler - NE
Lamar - NE
Reynolds - NE
Wilcox - NE
Bloomfield - NE
Dodge - NE
Magnet - NE
Riverton - NE
Winnetoon - NE
Byron - NE
Dubois - NE
Merriman - NE
Rushville - NE
Wolbach - NE
Callaway - NE
Eddyville - NE
Mirage Flats - NE
Santee - NE
Wood Lake - NE
Cambridge - NE
Elgin - NE
Newman Grove - NE
Scribner - NE
Wynot - NE
Cedar Rapids - NE
Enders - NE
Nenzel - NE
St. Francis - NE
Center - NE
Falls City - NE
Niobrara - NE
St. Helena - NE
TIER ONE (or any location not in Tier 2 or 3)
TIER TWO
TIER THREE
```


<a id="p-15943f7564ce3764"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Tier
Discount
Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31%
Speed
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
10 Mbps
303
$         
243
$        
237
$        
221
$        
215
$        
209
$        
404
$         
323
$         
315
$         
295
$        
287
$        
279
$        
505
$         
404
$         
394
$         
369
$         
359
$         
349
$         
20 Mbps
375
$         
300
$        
293
$        
274
$        
266
$        
259
$        
500
$         
400
$         
390
$         
365
$        
355
$        
345
$        
625
$         
500
$         
488
$         
456
$         
444
$         
431
$         
30 Mbps
415
$         
332
$        
324
$        
303
$        
295
$        
286
$        
553
$         
443
$         
432
$         
404
$        
393
$        
382
$        
692
$         
553
$         
539
$         
505
$         
491
$         
477
$         
40 Mbps
447
$         
358
$        
349
$        
326
$        
317
$        
308
$        
596
$         
477
$         
465
$         
435
$        
423
$        
411
$        
745
$         
596
$         
581
$         
544
$         
529
$         
514
$         
50 Mbps
479
$         
383
$        
373
$        
350
$        
340
$        
330
$        
638
$         
511
$         
498
$         
466
$        
453
$        
440
$        
798
$         
638
$         
622
$         
583
$         
567
$         
551
$         
60 Mbps
511
$         
409
$        
398
$        
373
$        
363
$        
352
$        
681
$         
545
$         
531
$         
497
$        
483
$        
470
$        
851
$         
681
$         
664
$         
621
$         
604
$         
587
$         
70 Mbps
543
$         
434
$        
423
$        
396
$        
385
$        
374
$        
724
$         
579
$         
564
$         
528
$        
514
$        
499
$        
904
$         
724
$         
705
$         
660
$         
642
$         
624
$         
80 Mbps
575
$         
460
$        
448
$        
419
$        
408
$        
396
$        
766
$         
613
$         
598
$         
559
$        
544
$        
529
$        
958
$         
766
$         
747
$         
699
$         
680
$         
661
$         
90 Mbps
606
$         
485
$        
473
$        
443
$        
431
$        
418
$        
809
$         
647
$         
631
$         
590
$        
574
$        
558
$        
1,011
$     
809
$         
788
$         
738
$         
718
$         
697
$         
100 Mbps
638
$         
511
$        
498
$        
466
$        
453
$        
440
$        
851
$         
681
$         
664
$         
621
$        
604
$        
587
$        
1,064
$     
851
$         
830
$         
777
$         
755
$         
734
$         
200 Mbps
829
$         
663
$        
646
$        
605
$        
588
$        
572
$        
1,030
$     
824
$         
803
$         
752
$        
731
$        
711
$        
1,184
$     
947
$         
923
$         
864
$         
840
$         
817
$         
300 Mbps
908
$         
726
$        
708
$        
663
$        
644
$        
626
$        
1,128
$     
903
$         
880
$         
824
$        
801
$        
778
$        
1,297
$     
1,037
$     
1,011
$     
947
$         
921
$         
895
$         
400 Mbps
982
$         
786
$        
766
$        
717
$        
697
$        
678
$        
1,221
$     
977
$         
952
$         
891
$        
867
$        
842
$        
1,403
$     
1,123
$     
1,094
$     
1,024
$     
996
$         
968
$         
500 Mbps
1,052
$     
842
$        
821
$        
768
$        
747
$        
726
$        
1,308
$     
1,046
$     
1,020
$     
954
$        
928
$        
902
$        
1,503
$     
1,202
$     
1,172
$     
1,097
$     
1,067
$     
1,037
$     
600 Mbps
1,117
$     
894
$        
871
$        
816
$        
793
$        
771
$        
1,389
$     
1,111
$     
1,083
$     
1,014
$     
986
$        
958
$        
1,596
$     
1,277
$     
1,245
$     
1,165
$     
1,133
$     
1,101
$     
700 Mbps
1,164
$     
931
$        
908
$        
850
$        
826
$        
803
$        
1,446
$     
1,157
$     
1,128
$     
1,056
$     
1,027
$     
998
$        
1,663
$     
1,330
$     
1,297
$     
1,214
$     
1,180
$     
1,147
$     
800 Mbps
1,210
$     
968
$        
944
$        
884
$        
859
$        
835
$        
1,504
$     
1,203
$     
1,173
$     
1,098
$     
1,068
$     
1,038
$     
1,729
$     
1,383
$     
1,349
$     
1,262
$     
1,228
$     
1,193
$     
900 Mbps
1,257
$     
1,005
$     
980
$        
918
$        
892
$        
867
$        
1,562
$     
1,250
$     
1,218
$     
1,140
$     
1,109
$     
1,078
$     
1,796
$     
1,436
$     
1,400
$     
1,311
$     
1,275
$     
1,239
$     
1 Gbps
1,303
$     
1,043
$     
1,017
$     
951
$        
925
$        
899
$        
1,620
$     
1,296
$     
1,264
$     
1,183
$     
1,150
$     
1,118
$     
1,862
$     
1,490
$     
1,452
$     
1,359
$     
1,322
$     
1,285
$     
2 Gbps
1,718
$     
1,375
$     
1,340
$     
1,254
$     
1,220
$     
1,186
$     
2,058
$     
1,646
$     
1,605
$     
1,502
$     
1,461
$     
1,420
$     
2,261
$     
1,809
$     
1,764
$     
1,651
$     
1,605
$     
1,560
$     
3 Gbps
1,971
$     
1,577
$     
1,537
$     
1,439
$     
1,399
$     
1,360
$     
2,360
$     
1,888
$     
1,841
$     
1,723
$     
1,676
$     
1,628
$     
2,594
$     
2,075
$     
2,023
$     
1,893
$     
1,841
$     
1,790
$     
4 Gbps
2,198
$     
1,759
$     
1,715
$     
1,605
$     
1,561
$     
1,517
$     
2,632
$     
2,106
$     
2,053
$     
1,922
$     
1,869
$     
1,816
$     
2,893
$     
2,314
$     
2,256
$     
2,112
$     
2,054
$     
1,996
$     
5 Gbps
2,401
$     
1,921
$     
1,873
$     
1,752
$     
1,704
$     
1,656
$     
2,874
$     
2,300
$     
2,242
$     
2,098
$     
2,041
$     
1,983
$     
3,159
$     
2,527
$     
2,464
$     
2,306
$     
2,243
$     
2,180
$     
6 Gbps
2,527
$     
2,022
$     
1,971
$     
1,845
$     
1,794
$     
1,744
$     
3,026
$     
2,421
$     
2,360
$     
2,209
$     
2,148
$     
2,088
$     
3,325
$     
2,660
$     
2,594
$     
2,427
$     
2,361
$     
2,294
$     
7 Gbps
2,603
$     
2,082
$     
2,030
$     
1,900
$     
1,848
$     
1,796
$     
3,117
$     
2,493
$     
2,431
$     
2,275
$     
2,213
$     
2,150
$     
3,425
$     
2,740
$     
2,671
$     
2,500
$     
2,432
$     
2,363
$     
8 Gbps
2,679
$     
2,143
$     
2,089
$     
1,955
$     
1,902
$     
1,848
$     
3,207
$     
2,566
$     
2,502
$     
2,341
$     
2,277
$     
2,213
$     
3,525
$     
2,820
$     
2,749
$     
2,573
$     
2,502
$     
2,432
$     
9 Gbps
2,754
$     
2,204
$     
2,148
$     
2,011
$     
1,956
$     
1,901
$     
3,298
$     
2,638
$     
2,572
$     
2,408
$     
2,342
$     
2,276
$     
3,624
$     
2,899
$     
2,827
$     
2,646
$     
2,573
$     
2,501
$     
10 Gbps
2,830
$     
2,264
$     
2,208
$     
2,066
$     
2,009
$     
1,953
$     
3,389
$     
2,711
$     
2,643
$     
2,474
$     
2,406
$     
2,338
$     
3,724
$     
2,979
$     
2,905
$     
2,719
$     
2,644
$     
2,570
$     
20 Gbps
4,549
$     
3,639
$     
3,548
$     
3,320
$     
3,230
$     
3,139
$     
5,446
$     
4,357
$     
4,248
$     
3,976
$     
3,867
$     
3,758
$     
5,985
$     
4,788
$     
4,668
$     
4,369
$     
4,249
$     
4,130
$     
25 Gbps
5,054
$     
4,043
$     
3,942
$     
3,689
$     
3,588
$     
3,487
$     
6,052
$     
4,841
$     
4,720
$     
4,418
$     
4,297
$     
4,176
$     
6,650
$     
5,320
$     
5,187
$     
4,855
$     
4,722
$     
4,589
$     
30 Gbps
6,065
$     
4,852
$     
4,731
$     
4,427
$     
4,306
$     
4,185
$     
7,262
$     
5,809
$     
5,664
$     
5,301
$     
5,156
$     
5,011
$     
7,980
$     
6,384
$     
6,224
$     
5,825
$     
5,666
$     
5,506
$     
40 Gbp
7,581
$     
6,065
$     
5,913
$     
5,534
$     
5,383
$     
5,231
$     
9,077
$     
7,262
$     
7,080
$     
6,626
$     
6,445
$     
6,263
$     
9,975
$     
7,980
$     
7,781
$     
7,282
$     
7,082
$     
6,883
$     
50 Gbps
8,592
$     
6,873
$     
6,702
$     
6,272
$     
6,100
$     
5,928
$     
10,288
$   
8,230
$     
8,024
$     
7,510
$     
7,304
$     
7,098
$     
11,305
$   
9,044
$     
8,818
$     
8,253
$     
8,027
$     
7,800
$     
100 Gbps
11,850
$   
9,480
$     
9,243
$     
8,651
$     
8,414
$     
8,177
$     
13,606
$   
10,885
$   
10,613
$   
9,932
$     
9,660
$     
9,388
$     
14,630
$   
11,704
$   
11,411
$   
10,680
$   
10,387
$   
10,095
$   
Dedicated Internet Access (DIA) | ENTERPRISE | Updated July 2025
Tier 1
Tier 2
Tier 3
```


<a id="p-090fc8204c58e6d3"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202401 - Ethernet Market Groups.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202401 - Ethernet Market Groups.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202401 - Ethernet Market Groups`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Albion - NE
Chicago - IL
Imperial - NE
Norfolk - NE
Scottsbluff - NE
Atkinson - NE
Columbus - NE
Johnson - NE
North Platte - NE
Seward - NE
Auburn - NE
Denver - CO
Kansas City - KS
Omaha - NE
Sidney - NE
Batesville - IN
Des Moines - IA
Kearney - NE
Omaha Metro
Sioux City - IA
Beatrice - NE
Elkhorn - NE
Lexington - NE
O'Neill - NE
South Sioux City - NE
Bellevue - NE
Elm Creek - NE
McCook - NE
Overton - NE
Valentine - NE
Bennington - NE
Elwood - NE
Minden - NE
Papillion - NE
Waverly - NE
Blair - NE
Fremont - NE
Minneapolis - MN
Peru - NE
West Point - NE
Broken Bow - NE
Grand Island - NE
Morrill - NE
Plattsmouth - NE
Wood River - NE
Chadron - NE
Greensburg - IN
Nebraska City - NE
Rising Sun - IN
Yankton - SD
Cheyenne - WY
Hastings - NE
Neligh - NE
Schuyler - NE
Ainsworth - NE
Fullerton - NE
Lake Santee - IN
Orchard - NE
St. Paul - NE
Alliance - NE
Genoa - NE
Liberty - IN
Ord - NE
St. Leon - IN
Alma - NE
Gordon - NE
Lodgepole - NE
Osgood - IN
St. Peters - IN
Bassett - NE
Grant - NE
Loup City - NE
Palmer - NE
Stapleton - NE
Beemer - NE
Guilford - IN
Madison - NE
Pawnee City - NE
Sunman - IN
Brookville - IN
Harrison - IN
Milan - IN
Pilger - NE
Sutherland - NE
Cairo - NE
Hay Springs - NE
Millhousen - IN
Plainview - NE
Syracuse - NE
Central City - NE
Hebron - NE
Morris - IN
Platte Center - NE
Tecumseh - NE
Chappell - NE
Herman - NE
Napoleon - IN
Potter - NE
Walthill - NE
Crawford - NE
Humboldt - NE
New Alsace- IN
Red Cloud - NE
Westport - IN
Culbertson - NE
Humphrey - NE
New Point - IN
Republican City - NEWinnebago - NE
Doniphan - NE
Indianola - NE
North Bend - NE
Snyder - NE
Wisner - NE
Ewing - NE
Inman - NE
Oakland - NE
Spalding - NE
Wymore - NE
Fairbury - NE
Kimball - NE
Oldenburg - IN
St. Edward - NE
Archer - NE
Champion - NE
Fordyce - NE
Oakdale - NE
Stratton - NE
Arnold - NE
Chapman - NE
Franklyn - NE
Oconto - NE
Tilden - NE
Bancroft - NE
Chester - NE
Hamlet - NE
Page - NE
Trenton - NE
Bartlett - NE
Cody - NE
Hayes Center - NE
Palisade - NE
Tryon - NE
Bartley - NE
Cotesfield - NE
Hooper - NE
Petersburg - NE
Venango - NE
Batesland - NE
Creighton - NE
Hubbell - NE
Ponca - NE
Verdigre - NE
Battle Creek - NE
Crofton - NE
Huntley - NE
Primrose - NE
Walnut - NE
Belgrade - NE
Crookston - NE
Kilgore - NE
Ragan - NE
Wausa - NE
Benkleman - NE
Deshler - NE
Lamar - NE
Reynolds - NE
Wilcox - NE
Bloomfield - NE
Dodge - NE
Magnet - NE
Riverton - NE
Winnetoon - NE
Byron - NE
Dubois - NE
Merriman - NE
Rushville - NE
Wolbach - NE
Callaway - NE
Eddyville - NE
Mirage Flats - NE
Santee - NE
Wood Lake - NE
Cambridge - NE
Elgin - NE
Newman Grove - NE
Scribner - NE
Wynot - NE
Cedar Rapids - NE
Enders - NE
Nenzel - NE
St. Francis - NE
Center - NE
Falls City - NE
Niobrara - NE
St. Helena - NE
TIER ONE (or any location not in Tier 2 or 3)
TIER TWO
TIER THREE
```


<a id="p-0e98b0cb1472d33e"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202505 - Ethernet Enterprise.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202505 - Ethernet Enterprise.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Ethernet/202505 - Ethernet Enterprise`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Tier
Discount
Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31%
Speed
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
10 Mbps
399
$        
319
$        
311
$        
291
$        
283
$        
275
$        
532
$        
426
$        
415
$        
388
$        
378
$        
367
$        
665
$        
532
$        
519
$        
485
$        
472
$        
459
$        
20 Mbps
447
$        
358
$        
349
$        
326
$        
317
$        
308
$        
596
$        
477
$        
465
$        
435
$        
423
$        
411
$        
745
$        
596
$        
581
$        
544
$        
529
$        
514
$        
30 Mbps
495
$        
396
$        
386
$        
361
$        
351
$        
341
$        
660
$        
528
$        
515
$        
482
$        
468
$        
455
$        
825
$        
660
$        
643
$        
602
$        
585
$        
569
$        
40 Mbps
539
$        
431
$        
420
$        
393
$        
382
$        
372
$        
718
$        
575
$        
560
$        
524
$        
510
$        
496
$        
898
$        
718
$        
700
$        
655
$        
637
$        
619
$        
50 Mbps
575
$        
460
$        
448
$        
419
$        
408
$        
396
$        
766
$        
613
$        
598
$        
559
$        
544
$        
529
$        
958
$        
766
$        
747
$        
699
$        
680
$        
661
$        
60 Mbps
606
$        
485
$        
473
$        
443
$        
431
$        
418
$        
809
$        
647
$        
631
$        
590
$        
574
$        
558
$        
1,011
$    
809
$        
788
$        
738
$        
718
$        
697
$        
70 Mbps
630
$        
504
$        
492
$        
460
$        
448
$        
435
$        
841
$        
672
$        
656
$        
614
$        
597
$        
580
$        
1,051
$    
841
$        
820
$        
767
$        
746
$        
725
$        
80 Mbps
650
$        
520
$        
507
$        
475
$        
462
$        
449
$        
867
$        
694
$        
676
$        
633
$        
616
$        
598
$        
1,084
$    
867
$        
845
$        
791
$        
770
$        
748
$        
90 Mbps
666
$        
533
$        
520
$        
486
$        
473
$        
460
$        
888
$        
711
$        
693
$        
649
$        
631
$        
613
$        
1,111
$    
888
$        
866
$        
811
$        
788
$        
766
$        
100 Mbps
682
$        
546
$        
532
$        
498
$        
484
$        
471
$        
910
$        
728
$        
710
$        
664
$        
646
$        
628
$        
1,137
$    
910
$        
887
$        
830
$        
807
$        
785
$        
200 Mbps
866
$        
693
$        
675
$        
632
$        
615
$        
597
$        
1,076
$    
861
$        
839
$        
786
$        
764
$        
743
$        
1,237
$    
990
$        
965
$        
903
$        
878
$        
853
$        
300 Mbps
931
$        
745
$        
726
$        
680
$        
661
$        
642
$        
1,157
$    
926
$        
903
$        
845
$        
822
$        
798
$        
1,330
$    
1,064
$    
1,037
$    
971
$        
944
$        
918
$        
400 Mbps
987
$        
789
$        
770
$        
720
$        
701
$        
681
$        
1,227
$    
981
$        
957
$        
895
$        
871
$        
846
$        
1,410
$    
1,128
$    
1,100
$    
1,029
$    
1,001
$    
973
$        
500 Mbps
1,038
$    
830
$        
810
$        
758
$        
737
$        
716
$        
1,290
$    
1,032
$    
1,006
$    
942
$        
916
$        
890
$        
1,483
$    
1,186
$    
1,157
$    
1,083
$    
1,053
$    
1,023
$    
600 Mbps
1,103
$    
883
$        
861
$        
805
$        
783
$        
761
$        
1,371
$    
1,097
$    
1,070
$    
1,001
$    
974
$        
946
$        
1,576
$    
1,261
$    
1,229
$    
1,151
$    
1,119
$    
1,087
$    
700 Mbps
1,164
$    
931
$        
908
$        
850
$        
826
$        
803
$        
1,446
$    
1,157
$    
1,128
$    
1,056
$    
1,027
$    
998
$        
1,663
$    
1,330
$    
1,297
$    
1,214
$    
1,180
$    
1,147
$    
800 Mbps
1,210
$    
968
$        
944
$        
884
$        
859
$        
835
$        
1,504
$    
1,203
$    
1,173
$    
1,098
$    
1,068
$    
1,038
$    
1,729
$    
1,383
$    
1,349
$    
1,262
$    
1,228
$    
1,193
$    
900 Mbps
1,257
$    
1,005
$    
980
$        
918
$        
892
$        
867
$        
1,562
$    
1,250
$    
1,218
$    
1,140
$    
1,109
$    
1,078
$    
1,796
$    
1,436
$    
1,400
$    
1,311
$    
1,275
$    
1,239
$    
1 Gbps
1,303
$    
1,043
$    
1,017
$    
951
$        
925
$        
899
$        
1,620
$    
1,296
$    
1,264
$    
1,183
$    
1,150
$    
1,118
$    
1,862
$    
1,490
$    
1,452
$    
1,359
$    
1,322
$    
1,285
$    
2 Gbps
1,617
$    
1,294
$    
1,261
$    
1,181
$    
1,148
$    
1,116
$    
1,936
$    
1,549
$    
1,510
$    
1,414
$    
1,375
$    
1,336
$    
2,128
$    
1,702
$    
1,660
$    
1,553
$    
1,511
$    
1,468
$    
3 Gbps
1,769
$    
1,415
$    
1,380
$    
1,291
$    
1,256
$    
1,221
$    
2,118
$    
1,694
$    
1,652
$    
1,546
$    
1,504
$    
1,461
$    
2,328
$    
1,862
$    
1,815
$    
1,699
$    
1,653
$    
1,606
$    
4 Gbps
1,921
$    
1,536
$    
1,498
$    
1,402
$    
1,364
$    
1,325
$    
2,300
$    
1,840
$    
1,794
$    
1,679
$    
1,633
$    
1,587
$    
2,527
$    
2,022
$    
1,971
$    
1,845
$    
1,794
$    
1,744
$    
5 Gbps
2,022
$    
1,617
$    
1,577
$    
1,476
$    
1,435
$    
1,395
$    
2,421
$    
1,936
$    
1,888
$    
1,767
$    
1,719
$    
1,670
$    
2,660
$    
2,128
$    
2,075
$    
1,942
$    
1,889
$    
1,835
$    
6 Gbps
2,123
$    
1,698
$    
1,656
$    
1,550
$    
1,507
$    
1,465
$    
2,542
$    
2,033
$    
1,982
$    
1,855
$    
1,805
$    
1,754
$    
2,793
$    
2,234
$    
2,179
$    
2,039
$    
1,983
$    
1,927
$    
7 Gbps
2,224
$    
1,779
$    
1,735
$    
1,623
$    
1,579
$    
1,534
$    
2,663
$    
2,130
$    
2,077
$    
1,944
$    
1,890
$    
1,837
$    
2,926
$    
2,341
$    
2,282
$    
2,136
$    
2,077
$    
2,019
$    
8 Gbps
2,325
$    
1,860
$    
1,813
$    
1,697
$    
1,651
$    
1,604
$    
2,784
$    
2,227
$    
2,171
$    
2,032
$    
1,976
$    
1,921
$    
3,059
$    
2,447
$    
2,386
$    
2,233
$    
2,172
$    
2,111
$    
9 Gbps
2,426
$    
1,941
$    
1,892
$    
1,771
$    
1,722
$    
1,674
$    
2,905
$    
2,324
$    
2,266
$    
2,120
$    
2,062
$    
2,004
$    
3,192
$    
2,554
$    
2,490
$    
2,330
$    
2,266
$    
2,202
$    
10 Gbps
2,527
$    
2,022
$    
1,971
$    
1,845
$    
1,794
$    
1,744
$    
3,026
$    
2,421
$    
2,360
$    
2,209
$    
2,148
$    
2,088
$    
3,325
$    
2,660
$    
2,594
$    
2,427
$    
2,361
$    
2,294
$    
Tier
Discount
Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31% Discount
20%
22%
27%
29%
31%
Speed
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
List
1 YR
2YR
3YR 
4YR
5YR
10 Mbps
239
$        
192
$        
187
$        
175
$        
170
$        
165
$        
319
$        
255
$        
249
$        
233
$        
227
$        
220
$        
399
$        
319
$        
311
$        
291
$        
283
$        
275
$        
20 Mbps
268
$        
215
$        
209
$        
196
$        
190
$        
185
$        
358
$        
286
$        
279
$        
261
$        
254
$        
247
$        
447
$        
358
$        
349
$        
326
$        
317
$        
308
$        
30 Mbps
297
$        
237
$        
232
$        
217
$        
211
$        
205
$        
396
$        
317
$        
309
$        
289
$        
281
$        
273
$        
495
$        
396
$        
386
$        
361
$        
351
$        
341
$        
40 Mbps
323
$        
259
$        
252
$        
236
$        
229
$        
223
$        
431
$        
345
$        
336
$        
315
$        
306
$        
297
$        
539
$        
431
$        
420
$        
393
$        
382
$        
372
$        
50 Mbps
345
$        
276
$        
269
$        
252
$        
245
$        
238
$        
460
$        
368
$        
359
$        
336
$        
326
$        
317
$        
575
$        
460
$        
448
$        
419
$        
408
$        
396
$        
60 Mbps
364
$        
291
$        
284
$        
266
$        
258
$        
251
$        
485
$        
388
$        
378
$        
354
$        
344
$        
335
$        
606
$        
485
$        
473
$        
443
$        
431
$        
418
$        
70 Mbps
378
$        
303
$        
295
$        
276
$        
269
$        
261
$        
504
$        
403
$        
393
$        
368
$        
358
$        
348
$        
630
$        
504
$        
492
$        
460
$        
448
$        
435
$        
80 Mbps
390
$        
312
$        
304
$        
285
$        
277
$        
269
$        
520
$        
416
$        
406
$        
380
$        
369
$        
359
$        
650
$        
520
$        
507
$        
475
$        
462
$        
449
$        
90 Mbps
400
$        
320
$        
312
$        
292
$        
284
$        
276
$        
533
$        
426
$        
416
$        
389
$        
378
$        
368
$        
666
$        
533
$        
520
$        
486
$        
473
$        
460
$        
100 Mbps
409
$        
327
$        
319
$        
299
$        
291
$        
282
$        
546
$        
437
$        
426
$        
398
$        
388
$        
377
$        
682
$        
546
$        
532
$        
498
$        
484
$        
471
$        
200 Mbps
519
$        
416
$        
405
$        
379
$        
369
$        
358
$        
646
$        
517
$        
504
$        
471
$        
458
$        
446
$        
742
$        
594
$        
579
$        
542
$        
527
$        
512
$        
300 Mbps
559
$        
447
$        
436
$        
408
$        
397
$        
385
$        
694
$        
555
$        
542
$        
507
$        
493
$        
479
$        
798
$        
638
$        
622
$        
583
$        
567
$        
551
$        
400 Mbps
592
$        
474
$        
462
$        
432
$        
420
$        
409
$        
736
$        
589
$        
574
$        
537
$        
523
$        
508
$        
846
$        
677
$        
660
$        
617
$        
601
$        
584
$        
500 Mbps
623
$        
498
$        
486
$        
455
$        
442
$        
430
$        
774
$        
619
$        
604
$        
565
$        
550
$        
534
$        
890
$        
712
$        
694
$        
650
$        
632
$        
614
$        
600 Mbps
662
$        
530
$        
516
$        
483
$        
470
$        
457
$        
823
$        
658
$        
642
$        
601
$        
584
$        
568
$        
946
$        
757
$        
738
$        
690
$        
671
$        
652
$        
700 Mbps
698
$        
559
$        
545
$        
510
$        
496
$        
482
$        
868
$        
694
$        
677
$        
634
$        
616
$        
599
$        
998
$        
798
$        
778
$        
728
$        
708
$        
688
$        
800 Mbps
726
$        
581
$        
566
$        
530
$        
516
$        
501
$        
903
$        
722
$        
704
$        
659
$        
641
$        
623
$        
1,037
$    
830
$        
809
$        
757
$        
737
$        
716
$        
900 Mbps
754
$        
603
$        
588
$        
551
$        
535
$        
520
$        
937
$        
750
$        
731
$        
684
$        
665
$        
647
$        
1,077
$    
862
$        
840
$        
786
$        
765
$        
743
$        
1 Gbps
782
$        
626
$        
610
$        
571
$        
555
$        
540
$        
972
$        
778
$        
758
$        
710
$        
690
$        
671
$        
1,117
$    
894
$        
871
$        
816
$        
793
$        
771
$        
2 Gbps
970
$        
776
$        
757
$        
708
$        
689
$        
670
$        
1,162
$    
930
$        
906
$        
848
$        
825
$        
802
$        
1,277
$    
1,021
$    
996
$        
932
$        
907
$        
881
$        
3 Gbps
1,061
$    
849
$        
828
$        
775
$        
754
$        
732
$        
1,271
$    
1,017
$    
991
$        
928
$        
902
$        
877
$        
1,397
$    
1,117
$    
1,089
$    
1,019
$    
992
$        
964
$        
4 Gbps
1,152
$    
922
$        
899
$        
841
$        
818
$        
795
$        
1,380
$    
1,104
$    
1,076
$    
1,007
$    
980
$        
952
$        
1,516
$    
1,213
$    
1,183
$    
1,107
$    
1,077
$    
1,046
$    
5 Gbps
1,213
$    
970
$        
946
$        
885
$        
861
$        
837
$        
1,452
$    
1,162
$    
1,133
$    
1,060
$    
1,031
$    
1,002
$    
1,596
$    
1,277
$    
1,245
$    
1,165
$    
1,133
$    
1,101
$    
6 Gbps
1,274
$    
1,019
$    
993
$        
930
$        
904
$        
879
$        
1,525
$    
1,220
$    
1,189
$    
1,113
$    
1,083
$    
1,052
$    
1,676
$    
1,341
$    
1,307
$    
1,223
$    
1,190
$    
1,156
$    
7 Gbps
1,334
$    
1,067
$    
1,041
$    
974
$        
947
$        
921
$        
1,598
$    
1,278
$    
1,246
$    
1,166
$    
1,134
$    
1,102
$    
1,756
$    
1,404
$    
1,369
$    
1,282
$    
1,246
$    
1,211
$    
8 Gbps
1,395
$    
1,116
$    
1,088
$    
1,018
$    
990
$        
962
$        
1,670
$    
1,336
$    
1,303
$    
1,219
$    
1,186
$    
1,152
$    
1,835
$    
1,468
$    
1,432
$    
1,340
$    
1,303
$    
1,266
$    
9 Gbps
1,456
$    
1,164
$    
1,135
$    
1,063
$    
1,033
$    
1,004
$    
1,743
$    
1,394
$    
1,359
$    
1,272
$    
1,237
$    
1,203
$    
1,915
$    
1,532
$    
1,494
$    
1,398
$    
1,360
$    
1,321
$    
10 Gbps
1,516
$    
1,213
$    
1,183
$    
1,107
$    
1,077
$    
1,046
$    
1,815
$    
1,452
$    
1,416
$    
1,325
$    
1,289
$    
1,253
$    
1,995
$    
1,596
$    
1,556
$    
1,456
$    
1,416
$    
1,377
$    
ELINE - EPL/EVPL (Price per Circuit) | ENTERPRISE | Updated May 2025
Tier 1
Tier 2
Tier 3
ELAN (Price Per Site) | ENTERPRISE | Updated May 2025
Tier 1
Tier 2
Tier 3
```


<a id="p-0fc95384a5f26912"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - East.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - East.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - East`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2022 Price (MRC)
2023 Pricing 
Change 
Product Name
2022 Price (MRC) 2023 Pricing Change 
Product Name
Product Description
$20.95
Starter TV IP
$20.95
GPC iTV Essentials
Requires : Must pick the number of streams and a DVR product.   Reminder : 
Must have GPC Internet
$82.95
$89.95
Preferred TV IP
$62.00
$68.95
GPC iTV Preferred
Requires Essentials & Preferred channel line up.  
$108.95
Extra TV IP
$19.49
$19.49
GPC iTV Extra
Requires Essentials & Preferred,channel line up.  
$139.95
Ultimate TV IP
$162.14
$199.95
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires Essentials 
and Preferred channel line up.  
$50.00
NFL RedZone
$187.14
$225.95
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$2.95
HBO Movie Group
$237.14
$274.95
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$40.00
Fox Sports Network - Ohio 0-50
$287.14
$324.95
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities. Requires 
Essentials and Preferred channel line up.  
$55.00
Fox Sports Network - Ohio 51-100
$337.14
$375.95
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$80.00
Fox Sports Network - Ohio 101-150
$387.14
$415.95
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$487.14
$524.95
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires Essentials 
and Preferred channel line up.  
$27.70
GPC iTV Extra - Entertainment
Requires Essentials, Preferred - Entertainment and Extra-Entertainment 
channel line up.  
$18.75
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
 $-   
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
 $-   
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$5.00
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
Product Not discountable. 
Legacy 
GPC iTV
```


<a id="p-90948e3c47dc1b80"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - West.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - West.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV April 2023 Pricing Sales - West`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Pricing 2023 
Change  
Product Name
Product Description
$24.95 
GPC iTV Essentials
Requires : Must pick a stream and a DVR product.   Reminder : Must have GPC Internet
$34.45 
GPC iTV Efficiency
Requires : GPC iTV Essentials package.  Reminder : Waiting room and lobbies. Public viewing, Reduced GPC iTV Expanded channel line-up.  
$70.24 
GPC iTV Preferred
Requires : GPC iTV Essentials package.  
$13.00 
GPC iTV Extra
Requires : GPC iTV Essentials & Preferred package 
$11.95 
GPC iTV FANatic
Requires : GPC iTV Essentials & Preferred package 
$6.95 
GPC iTV Sports
Requires : GPC iTV Essentials, Extra & Preferred package.  
$179.45 
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$192.45 
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$216.95 
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$241.95 
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$266.95 
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$291.95 
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$341.95 
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$42.95 
GPC iTV Extra - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$39.95 
GPC iTV FANatic - Entertainment
An alternative to Extra and Sports. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$18.75 
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$0.00 
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00 
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00 
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00 
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00 
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00 
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00 
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00 
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
$0.00 
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$0.00 
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00 
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00 
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
```


<a id="p-104769a588c2aa42"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - East.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - East.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - East`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2024 Price 
(MRC)
Product Name
Product Description
$24.95
GPC iTV Essentials
Requires : Must pick the number of streams and a DVR product.   Reminder : 
Must have GPC Internet
$75.25
GPC iTV Preferred
Requires Essentials and Preferred channel line up.  
$19.49
GPC iTV Extra
Requires Essentials, Preferred, and Extra channel line up.  
$199.95
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires Essentials 
and Preferred channel line up.  
$225.95
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$274.95
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$324.95
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities. Requires 
Essentials and Preferred channel line up.  
$375.95
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$415.95
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$524.95
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$27.70
GPC iTV Extra - Entertainment
Requires Essentials, Preferred - Entertainment and Extra-Entertainment 
channel line up.  
$18.75
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package. 
$-   
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
$-   
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$5.00
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
Product Not discountable. 
GPC iTV
```


<a id="p-07fa72c2d7e32bb6"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - West.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - West.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2024 Pricing Sales - West`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2024 Price (MRC) 
Product Name
Product Description
$24.95 
GPC iTV Essentials
Requires : Must pick a stream and a DVR product.   Reminder : Must have GPC Internet
$34.45 
GPC iTV Efficiency
Requires : GPC iTV Essentials package.  Reminder : Waiting room and lobbies. Public viewing, Reduced GPC iTV Expanded channel line-up.  
$78.24 
GPC iTV Preferred
Requires : GPC iTV Essentials package.  
$14.00 
GPC iTV Extra
Requires : GPC iTV Essentials package.  
$11.95 
GPC iTV FANatic
Requires : GPC iTV Essentials package.  
$6.95 
GPC iTV Sports
Requires : GPC iTV Essentials and Extra package.  
$179.45 
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$192.45 
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$216.95 
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$241.95 
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$266.95 
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$291.95 
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$341.95 
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$42.95 
GPC iTV Extra - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$39.95 
GPC iTV FANatic - Entertainment
An alternative to Extra and Sports. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$18.75 
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$0.00 
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00 
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00 
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00 
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00 
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00 
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00 
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00 
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
$0.00 
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$0.00 
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00 
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00 
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
GPC ITV regardless of the package requires GPC Internet
GPC iTV Essentials is required as the base package.  All other packages are in addition to this.
```


<a id="p-b39fcc43d807dcbf"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - East.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - East.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - East`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2025 Price 
(MRC)
Product Name
Product Description
$24.95
GPC iTV Essentials
Requires : Must pick the number of streams and a DVR product.   Reminder : 
Must have GPC Internet
$76.25
GPC iTV Preferred
Requires Essentials and Preferred channel line up.  
$19.49
GPC iTV Extra
Requires Essentials, Preferred, and Extra channel line up.  
$199.95
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires Essentials 
and Preferred channel line up.  
$225.95
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$274.95
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$324.95
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities. Requires 
Essentials and Preferred channel line up.  
$375.95
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$415.95
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$524.95
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires 
Essentials and Preferred channel line up.  
$27.70
GPC iTV Extra - Entertainment
Requires Essentials, Preferred - Entertainment and Extra-Entertainment 
channel line up.  
$18.75
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package. 
$-   
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
$-   
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$5.00
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
Product Not discountable. 
GPC iTV
```


<a id="p-02ae73f90be89db0"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - West.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - West.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/GPC iTV/Old Pricing/GPC iTV February 2025 Pricing Sales - West`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
2025 Price (MRC) 
Product Name
Product Description
$24.95 
GPC iTV Essentials
Requires : Must pick a stream and a DVR product.   Reminder : Must have GPC Internet
$34.45 
GPC iTV Efficiency
Requires : GPC iTV Essentials package.  Reminder : Waiting room and lobbies. Public viewing, Reduced GPC iTV Expanded channel line-up.  
$84.34 
GPC iTV Preferred
Requires : GPC iTV Essentials package.  
$17.00 
GPC iTV Extra
Requires : GPC iTV Essentials package.  
$11.95 
GPC iTV FANatic
Requires : GPC iTV Essentials package.  
$6.95 
GPC iTV Sports
Requires : GPC iTV Essentials and Extra package.  
$179.45 
GPC iTV Preferred - Entertainment
Seating Area 0-50. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$192.45 
GPC iTV Preferred - Entertainment
Seating Area 51-100. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$216.95 
GPC iTV Preferred - Entertainment
Seating Area 101-150. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$241.95 
GPC iTV Preferred - Entertainment
Seating Area 151-200. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$266.95 
GPC iTV Preferred - Entertainment
Seating Area 201-300. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$291.95 
GPC iTV Preferred - Entertainment
Seating Area 301-500. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$341.95 
GPC iTV Preferred - Entertainment
Seating Area 500+. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$42.95 
GPC iTV Extra - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$39.95 
GPC iTV FANatic - Entertainment
An alternative to Extra and Sports. Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$18.75 
GPC iTV Music - Entertainment
Bars, Restaurants and similar facilities.  Requires : GPC iTV Essentials package.  
$0.00 
GPC iTV - 3 Concurrent Streams
3 Concurrent Streams
$1.00 
GPC iTV - 4 Concurrent Streams
4 Concurrent Streams
$2.00 
GPC iTV - 5 Concurrent Streams
5 Concurrent Streams
$3.00 
GPC iTV - 6 Concurrent Streams
6 Concurrent Streams
$4.00 
GPC iTV - 7 Concurrent Streams
7 Concurrent Streams
$5.00 
GPC iTV - 8 Concurrent Streams
8 Concurrent Streams
$6.00 
GPC iTV - 9 Concurrent Streams
9 Concurrent Streams
$7.00 
GPC iTV - 10 Concurrent Streams
10 Concurrent Streams
$0.00 
GPC iTV - 50 Cloud DVR Hours
50 Cloud DVR Hours
$0.00 
GPC iTV - 100 Cloud DVR Hours
100 Cloud DVR Hours
$15.00 
GPC iTV - 200 Cloud DVR Hours
200 Cloud DVR Hours
$25.00 
GPC iTV - 300 Cloud DVR Hours
300 Cloud DVR Hours
GPC ITV regardless of the package requires GPC Internet
GPC iTV Essentials is required as the base package.  All other packages are in addition to this.
```


<a id="p-347abab2953e309a"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/Managed Network Security Service Pricing 03-2026.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/Managed Network Security Service Pricing 03-2026.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/Managed Network Security Service Pricing 03-2026`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Product: Product Name  
NGFW Platform Computer Users Type List Price
Discounts
Product Description
Notes
NGFW Small Office
FortiGate-30G
Up to 20
MRC
$300
Term
Recommended with Internet speeds up to 300Mbps.  Desktop Form 
factor.  Fortinet FortiGate 30G Firewall Appliance.
NGFW Medium Office
FortiGate-50G
Up to 50
MRC
$342
Term
Recommended with Internet speeds up to 500Mbps.  Desktop Form factor.  
Fortinet FortiGate 50G Firewall Appliance.
NGFW Large Office
FortiGate-70G
Up to 100
MRC
$410
Term
Recommended with Internet speeds up to 1Gbps.  Desktop Form factor.  
Fortinet FortiGate 70G Firewall Appliance.
NGFW Hub/HQ Office
FortiGate-90G
Up to 200
MRC
$753
Term
Recommended with Internet speeds up to 2Gbps.  Desktop Form factor.  Fortinet 
FortiGate 90G Firewall Appliance.
NGFW Small Data Center
FortiGate-100F
Up to 100
MRC
$890
Term
Recommended with Internet speeds up to 1Gbps.  Rackmount Form factor - Dual 
Power Supplies.  Fortinet FortiGate 100F Firewall Appliance.
NGFW Medium Data Center
FortiGate-120G
Up to 200
MRC
$985
Term
Recommended with Internet speeds up to 3Gbps.  Rackmount Form factor - Dual 
Power Supplies.  Fortinet FortiGate 120G Firewall Appliance.
NGFW Large Data Center
FortiGate-400F
Up to 500
MRC
$3,561
Term
Recommended with Internet speeds up to 10Gbps.  Rackmount Form factor - Dual 
Power Supplies.  Fortinet FortiGate 400F Firewall Appliance.
NGFW Configuration
All Fortinets
NRC
$400
20%
Firewall Configuration and Implementation charge per site.
Note:  NRC costs can be moved to MRC in Saleforece.  
Requires Product Approval.  Configuration charge must 
be included on order even if zero.
NGFW ZTNA VPN Service
All Fortinets
MRC
$100
Term
FortiClient VPN/ZTNA Agent Subscription for 25 endpoints.  Includes EMS hosted by 
FortiCloud with FortiCare Premium.
NGFW ZTNA VPN Configuration
NRC
$350
20%
ZTNA VPN Configuration and Implementation Charge Per order (25 endpoints)
Firewall Management
MRC
$170
Term
Requires at least 1 site as on-net if part of a multi-site opportunity.  Requires NRC:  
'Firewall Management - Configuration' product.  Management of customer owned 
firewall.    Includes 24x7 SOC monitoring, management, alerting & troubleshooting.   
Firewall not incuded.
Firewall Management - Configuration
NRC
$400
20%
Design & Configuration of Customer Firewall - Charge per site
Note:  NRC costs can be moved to MRC in Salesforce.  
Requires Product Approval.  Configuration charge must 
be included on order even if zero.
Firewall Plus - Managed SOC & SIEM
MRC
$0
ICB
Network Intrusion Monitoring  24 x 7 x 365 real-time monitoring of security threats 
Event and Intelligence correlation, event prioritization Incident Response Assistance   
Log Management and retention for auditing and forensics
 - Add on to Managed Firewall or 3rd Party Firewall
Management Service.
- Custom pricing based on customer specific 
requirements.
Managed Email Security - Configuration
NRC
$1,800
Not Discountable
Managed Email protection against Malware, Ransomeware Advanced AI-based Anti-
Spam/Phishing  Data Loss Protection.  Based on Checkpoint Avanon email security 
solution
Managed Email Security - Email Boxes
MRC
$10
Not Discountable Charge per Email Box
Enterprise Security Assessment
NRC
$2,000
Not Discountable
Review security policies and configuration. Review software version for currency. 
Review overall security architecture.   Validation of EOL/EOS status. Identify 
vulnerable devices. Report with remediation recommendations
Firewall Assessment
NRC
$600
Not Discountable
Review firewall policies and configuration. Review firewall software version for 
currency. Review firewall LAN/WAN redundancy. Validation of EOL/EOS status
Vulnerability Scan - BiWeekly
MRC
$1,450
Not Discountable
Initial setup with Two (2) collectors.   Public & Private IP Addresses.  Active BiWeekly 
scanning   Agents and passive monitoring.  Report with 1hr of Remote Security 
Engineer Review
Vulnerability Scan - Monthly
MRC
$1,150
Not Discountable
Initial setup with Two (2) collectors.   Public & Private IP Addresses.  Active monthly 
scanning,  Agents and passive monitoring.  Report with 1hr of Remote Security 
Engineer Review
Additional Collectors Setup
NRC
$1,150
Not Discountable Set up and configuration for additional software agent collector
Enhanced Edge Firewall
MRC
$105
Not Discountable
Requires SD-WAN product with speeds up to and including 200Mbps.  Requires NRC: 
'Enhanced Edge Firewall - Configuration' product.
Enhanced Edge Firewall
MRC
$115
Not Discountable
Requires SD-WAN product with  500Mbps speeds.   Requires NRC: 'Enhanced Edge 
Firewall - Configuration' product.
Enhanced Edge Firewall
MRC
$130
Not Discountable
Requires SD-WAN product with 1Gbps speeds.  Requires NRC: 'Enhanced Edge 
Firewall - Configuration' product.
Enhanced Edge Firewall
MRC
$145
Not Discountable
Requires SD-WAN product with 2Gbps speeds.  Requires NRC: 'Enhanced Edge 
Firewall - Configuration' product.
Enhanced Edge Firewall
MRC
$185
Not Discountable
Requires SD-WAN product with 10Gbps speeds.  Requires NRC: 'Enhanced Edge 
Firewall - Configuration' product.
Enhanced Edge Firewall - Configuration
NRC
$400
Not Discountable
Required Non-recurring charge to set up and configure Enhanced Edge Firewall on SD-
WAN product from 10Mbps to 10Gbps.
Circuit Monitoring (Non-GPC Circuit)
NRC
$15
Not Discountable Configure to monitor and manage 3rd party circuit procured by customer
Required 3 yr term minimum on all products
GPC MANAGED NETWORK SECURITY PRODUCT PRICING - MAR 2026
Product Incudes:  
- FortiGuard Enterprise Protection Package. 
- Converter Service. 
- Cloud Management & Analytics with 1 yr logs. 
- Premium Support & Warranty.
- 24x7 SOC Proactive Monitoring & Mgt.
```


<a id="p-afb87144a36f6a40"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
SD-WAN OR NETWORK SECURITY 
REMOTE SERVICE FEE SCHEDULE
Product
Description
Normal Business 
Hours
Outside Business 
Hours
On-Site Support
All location charges including technician and project management 
based on two hours of on-site work; Requires 3-day lead time and a 
minimum of a two-hour charge
$325
$525
Same-Day On-Site 
Support
Same-day dispatch - All location charges including technician and 
project management based on two hours of on-site work
$400
$600
Additional On-Site 
Support
Additional on-site support, per hourly rate, billed in 15-minute 
increments
$125
$200
Project Management 
Support
Support provided by a Project Manager, billed at an hourly rate
$100
$125
Remote Engineering 
Support
Remote support by a Network Engineer, billed hourly
$175
$275
Remote Security 
Engineer Support
Remote support by a Network Security Engineer, billed hourly
$225
$325
Installation Cancellation 
Charge
Charge applies to any installation canceled within 48 hours of the 
scheduled install date
$275
n/a
Business hours are defined as 8 a.m. to 5 p.m. local time.
Rates are subject to change.
```


<a id="p-41f27431b1216ff7"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Multi-Service Discount.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Multi-Service Discount.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Multi-Service Discount`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Phone
SIP
PRI
UC service 
SIA
DIA
GPC Managed WIFI 
GPC iTV/CATV
Business Security Systems
Services that would receive the discount:
SIA
DIA
GPC Managed WIFI - Small Business
Business Security Systems
Calling Features 
LD
% Discount based on number of services:
2 Services
5%
3 or more S
7%
Services that can be part of a bundle (quantity of 
the same service doesn’t count as additional service 
toward bundle):
```


<a id="p-efdc57a139e69ef9"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD-WAN or Network Security Fee Schedule.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD-WAN or Network Security Fee Schedule.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD-WAN or Network Security Fee Schedule`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
SD-WAN OR NETWORK SECURITY 
REMOTE SERVICE FEE SCHEDULE
Product
Description
Normal Business 
Hours
Outside Business 
Hours
On-Site Support
All location charges including technician and project management 
based on two hours of on-site work; Requires 3-day lead time and a 
minimum of a two-hour charge
$325
$525
Same-Day On-Site 
Support
Same-day dispatch - All location charges including technician and 
project management based on two hours of on-site work
$400
$600
Additional On-Site 
Support
Additional on-site support, per hourly rate, billed in 15-minute 
increments
$125
$200
Project Management 
Support
Support provided by a Project Manager, billed at an hourly rate
$100
$125
Remote Engineering 
Support
Remote support by a Network Engineer, billed hourly
$175
$275
Remote Security 
Engineer Support
Remote support by a Network Security Engineer, billed hourly
$225
$325
Installation Cancellation 
Charge
Charge applies to any installation canceled within 48 hours of the 
scheduled install date
$275
n/a
Business hours are defined as 8 a.m. to 5 p.m. local time.
Rates are subject to change.
```


<a id="p-22dd58a4d18769a4"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Enterprise_Pricing_120624 - INTERNAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Enterprise_Pricing_120624 - INTERNAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Enterprise_Pricing_120624 - INTERNAL`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC SD-WAN - Enterprise
MRC - List
NRC
SDWAN 10Mbps
$172
SDWAN 30Mbps
$206
SDWAN 50Mbps
$252
SDWAN 100Mbps
$330
SDWAN 200Mbps
$426
SDWAN 500Mbps
$656
SDWAN 1Gbps
$809
SDWAN 2Gbps
$841
SDWAN 10Gbps
$2,563
SDWAN LTE 10Mbps
$209
SDWAN LTE 30Mbps
$244
SDWAN LTE 50Mbps
$289
SDWAN LTE 100Mbps
$324
SDWAN LTE 200Mbps
$419
SDWAN High Availability 10Mbps
$200
SDWAN High Availability 30Mbps
$234
SDWAN High Availability 50Mbps
$280
SDWAN High Availability 100Mbps
$403
SDWAN High Availability 200Mbps
$498
SDWAN High Availability 500Mbps
$728
SDWAN High Availability 1Gbps
$1,003
SDWAN High Availability 2Gbps
$1,035
SDWAN High Availability 10Gbps
$3,069
SDWAN LTE High Availability 10Mbps
$275
SDWAN LTE High Availability 30Mbps
$310
SDWAN LTE High Availability 50Mbps
$355
SDWAN LTE High Availability 100Mbps
$389
SDWAN LTE High Availability 200Mbps
$485
SDWAN Install
$400.00
SDWAN Customer POC
$0.00
$0.00
Term Discounts:                                                     3yr.
27%
4yr.
29%
5yr.
31%
Products include SD-WAN Service, Enterprise 
Subscription, VMware Edge Appliance,  24x7 
proactive monitoring &  management.
High Availability (HA) includes dual Edge devices.
LTE includes LTE wireless capable device (LTE 
service is not included).
CONFIDENTIAL – FOR INTERNAL USE ONLY
```


<a id="p-d8f7b0a192984b7c"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Premium_Pricing_120624 - INTERNAL.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Premium_Pricing_120624 - INTERNAL.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/SD-WAN/SD_WAN_Premium_Pricing_120624 - INTERNAL`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
GPC SD-WAN - Premium
MRC - List NRC
SDWAN Premium 10Mbps
$195
SDWAN Premium 30Mbps
$241
SDWAN Premium 50Mbps
$302
SDWAN Premium 100Mbps
$404
SDWAN Premium 200Mbps
$571
SDWAN Premium 500Mbps
$858
SDWAN Premium 1Gbps
$1,243
SDWAN Premium 2Gbps
$1,492
SDWAN Premium 10Gbps
$3,576
SDWAN Premium LTE 10Mbps
$232
SDWAN Premium LTE 30Mbps
$279
SDWAN Premium LTE 50Mbps
$339
SDWAN Premium LTE 100Mbps
$397
SDWAN Premium LTE 200Mbps
$564
SDWAN Premium High Availability 10Mbps
$223
SDWAN Premium High Availability 30Mbps
$269
SDWAN Premium High Availability 50Mbps
$330
SDWAN Premium High Availability 100Mbps
$477
SDWAN Premium High Availability 200Mbps
$643
SDWAN Premium High Availability 500Mbps
$931
SDWAN Premium High Availability 1Gbps
$1,437
SDWAN Premium High Availability 2Gbps
$1,686
SDWAN Premium High Availability 10Gbps
$4,082
SDWAN Premium LTE High Availability 10Mbps
$298
SDWAN Premium LTE High Availability 30Mbps
$345
SDWAN Premium LTE High Availability 50Mbps
$405
SDWAN Premium LTE High Availability 100Mbps
$463
SDWAN Premium LTE High Availability 200Mbps
$629
SDWAN Install
$400.00
SDWAN Customer POC
$0.00
$0.00
Term Discounts:                                                            3yr.
27%
  4yr.
29%
  5yr.
31%
Products include SD-WAN Service, Premium 
Subscription, and VMware Edge Appliance, 24x7 
proactive monitoring &  management.
High Availability (HA) includes dual Edge devices.
LTE includes LTE wireless capable device (LTE service 
is not included).
CONFIDENTIAL – FOR INTERNAL USE ONLY
```


<a id="p-0fea5860833b25fc"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Unified Communications/UC Pricing in SF Intermedia Feb 2026.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Unified Communications/UC Pricing in SF Intermedia Feb 2026.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Unified Communications/UC Pricing in SF Intermedia Feb 2026`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Base Pricing
1-10 Seats
11-50 Seats
51+ Seats
Term Discount (Y/N)
UC Resource Line - Basic Phone
UC Resource Line (IPN) - Basic Phone
$30.00
$30.00
$27.00
$24.00
Y
UC Resource Line - Intermediate Phone
UC Resource Line (IPN) - Intermediate Phone
$35.00
$35.00
$31.50
$28.00
Y
24
22%
UC Resource Line - Advanced Phone
UC Resource Line (IPN) - Advanced Phone
$40.00
$40.00
$36.00
$32.00
Y
36
27%
UC Resource Line - Cordless Phone
UC Resource Line (IPN) - Cordless Phone
$40.00
$40.00
$36.00
$32.00
Y
48
29%
UC Resource Line - Conference Phone
UC Resource Line (IPN) - Conference Phone
$60.00
$60.00
$54.00
$48.00
Y
60
31%
UC Express - Soft Phone
UC Express (IPN) - Soft Phone
$30.00
$30.00
$27.00
$24.00
Y
UC Express - Basic Phone
UC Express (IPN) - Basic Phone
$40.00
$40.00
$36.00
$32.00
Y
UC Express - Intermediate Phone
UC Express (IPN) - Intermediate Phone
$45.00
$45.00
$40.50
$36.00
Y
UC Express - Advanced Phone
UC Express (IPN) - Advanced Phone
$50.00
$50.00
$45.00
$40.00
Y
UC Express - Cordless Phone
UC Express (IPN) - Cordless Phone
$50.00
$50.00
$45.00
$40.00
Y
UC Collab Essentials - Soft Phone
UC Collab Essentials (IPN) - Soft Phone
$35.00
$35.00
$31.50
$28.00
Y
UC Collab Essentials - Basic Phone
UC Collab Essentials (IPN) - Basic Phone
$45.00
$45.00
$40.50
$36.00
Y
UC Collab Essentials - Intermediate Phone
UC Collab Essentials (IPN) - Intermediate Phone
$50.00
$50.00
$45.00
$40.00
Y
UC Collab Essentials - Advanced Phone
UC Collab Essentials (IPN) - Advanced Phone
$55.00
$55.00
$49.50
$44.00
Y
1-10 Seats
0%
UC Collab Essentials - Cordless Phone
UC Collab Essentials (IPN) - Cordless Phone
$55.00
$55.00
$49.50
$44.00
Y
11-50 Seats
10%
UC Collab Pro - Soft Phone
UC Collab Pro (IPN) - Soft Phone
$39.00
$39.00
$35.10
$31.20
Y
51+
20%
UC Collab Pro - Basic Phone
UC Collab Pro (IPN) - Basic Phone
$49.00
$49.00
$44.10
$39.20
Y
UC Collab Pro - Intermediate Phone
UC Collab Pro (IPN) - Intermediate Phone
$54.00
$54.00
$48.60
$43.20
Y
UC Collab Pro - Advanced Phone
UC Collab Pro (IPN) - Advanced Phone
$59.00
$59.00
$53.10
$47.20
Y
UC Collab Pro - Cordless Phone
UC Collab Pro (IPN) - Cordless Phone
$59.00
$59.00
$53.10
$47.20
Y
UC Web Fax
UC Web Fax  (IPN)
$14.00
N
UC Company Messaging
UC Company Messaging  (IPN)
$12.00
N
UC Paging Adapter
UC Paging Adapter  (IPN)
$30.00
Y
UC Additional Auto Attendant
UC Additional Auto Attendant  (IPN)
$6.50
N
UC - Archiving 1 Year Retention
UC - Archiving 1 Year Retention  (IPN)
$4.25
N
UC - Archiving 3 Year Retention
UC - Archiving 3 Year Retention  (IPN)
$5.50
N
UC - Archiving 7 Year Retention
UC - Archiving 7 Year Retention (IPN)
$9.50
N
CC - Pro Concurent User
CC - Pro Concurent User (IPN)
$65.00
CC - Elite Concurent User 
CC - Elite Concurent User (IPN)
$110.00
CC - Chat Channel
CC - Chat Channel (IPN)
$10.95
CC - Dynamic Notification
CC - Dynamic Notification (IPN)
$10.95
CC - Email Channel
CC - Email Channel (IPN)
$10.95
CC - Evaluator
CC - Evaluator (IPN)
$10.95
CC - Schedule Manager
CC - Schedule Manager (IPN)
$10.95
CC - Screen Recording 
CC - Screen Recording (IPN)
$10.95
CC - SMS & Messaging Channel
CC - SMS & Messaging Channel (IPN)
$10.95
Contact Center
Intermedia Hosted PBX/UC Solutions
Product
Term Discounts
Reminder:   Min 24 
month contract
Volume Discount
Intermedia UC Feb 2026
```


<a id="p-9a0c6579db287864"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Voice/Enterprise SIP - Mar 2021.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Voice/Enterprise SIP - Mar 2021.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Voice/Enterprise SIP - Mar 2021`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Product 
Base Price
SIP Trunk Service
16.50
$       
12
20%
6-14
0.0%
24
22%
15-29
3.0%
36
27%
30-49
7.0%
Reminders
48
29%
50-99
10.0%
Min 3 yr term
60
31%
100-149
15.0%
Min 6 trunks
150-200
20.0%
Term Discounts
Volume Discount
```


<a id="p-35fb54658aadf66c"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC International Calling Rates - East Aug2024.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC International Calling Rates - East Aug2024.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC International Calling Rates - East Aug2024`

**Page count:** 6

#### Page 1 / 6 — `page-001.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
*
USA to Canada
DD
6
10
0.12
$      
0.012
$
AI
Anquilla
DD
60
1
0.39
$      
0.39
$   
AN
Antigua
DD
60
1
0.39
$      
0.39
$   
AS
American Samoa
DD
60
1
0.39
$      
0.39
$   
BA
Bahamas
DD
60
1
0.39
$      
0.39
$   
BD
Barbados
DD
60
1
0.39
$      
0.39
$   
BM
Bermuda
DD
60
1
0.14
$      
0.14
$   
BV
British Virgin Islands
DD
60
1
0.39
$      
0.39
$   
CQ
Cayman Islands
DD
60
1
0.39
$      
0.39
$   
DM
Dominica
DD
60
1
0.39
$      
0.39
$   
DR
Dominican Republic
DD
60
1
0.14
$      
0.14
$   
GN
Grenada
DD
60
1
0.39
$      
0.39
$   
GU
Guam
DD
60
1
0.14
$      
0.14
$   
JM
Jamaica
DD
60
1
0.19
$      
0.19
$   
KA
St Kitts/Nevis
DD
60
1
0.39
$      
0.39
$   
NN
Saipan
DD
60
1
0.14
$      
0.14
$   
PR
Puerto Rico
DD
60
1
0.14
$      
0.14
$   
SA
St Lucia
DD
60
1
0.39
$      
0.39
$   
SF
St Maarten
DD
60
1
0.39
$      
0.39
$   
TC
Turks
DD
60
1
0.39
$      
0.39
$   
TR
Trinidad
DD
60
1
0.39
$      
0.39
$   
VI
Virgin Islands
DD
60
1
0.14
$      
0.14
$   
ZF
St Vincent
DD
60
1
0.39
$      
0.39
$   
7
RUSSIA
DD
60
1
0.14
$      
0.14
$   
7
9
RUSSIA
MOBILE
DD
60
1
0.39
$      
0.39
$   
20
EGYPT
DD
60
1
0.39
$      
0.39
$   
27
S AFRICA
DD
60
1
0.14
$      
0.14
$   
30
GREECE
DD
60
1
0.14
$      
0.14
$   
31
NETHERLAND
DD
60
1
0.14
$      
0.14
$   
32
BELGIUM
DD
60
1
0.14
$      
0.14
$   
33
FRANCE
DD
60
1
0.14
$      
0.14
$   
34
SPAIN
DD
60
1
0.14
$      
0.14
$   
36
HUNGARY
DD
60
1
0.14
$      
0.14
$   
39
ITALY
DD
60
1
0.14
$      
0.14
$   
40
ROMANIA
DD
60
1
0.39
$      
0.39
$   
41
SWITZERLND
DD
60
1
0.14
$      
0.14
$   
43
AUSTRIA
DD
60
1
0.14
$      
0.14
$   
44
UK
DD
60
1
0.14
$      
0.14
$   
45
DENMARK
DD
60
1
0.14
$      
0.14
$   
46
SWEDEN
DD
60
1
0.14
$      
0.14
$   
47
NORWAY
DD
60
1
0.14
$      
0.14
$   
48
POLAND
DD
60
1
0.34
$      
0.34
$   
49
GERMANY
DD
60
1
0.14
$      
0.14
$   
51
PERU
DD
60
1
0.14
$      
0.14
$   
52
MEXICO
DD
60
1
0.39
$      
0.39
$   
53
CUBA
DD
60
1
0.99
$      
0.99
$   
54
ARGENTINA
DD
60
1
0.14
$      
0.14
$   
55
BRAZIL
DD
60
1
0.14
$      
0.14
$   
56
CHILE
DD
60
1
0.14
$      
0.14
$   
57
COLOMBIA
DD
60
1
0.14
$      
0.14
$   
58
VENEZUELA
DD
60
1
0.14
$      
0.14
$   
60
MALAYSIA
DD
60
1
0.14
$      
0.14
$   
61
AUSTRALIA
DD
60
1
0.29
$      
0.29
$   
62
INDONESIA
DD
60
1
0.39
$      
0.39
$   
63
PHILIPPINE
DD
60
1
0.39
$      
0.39
$   
64
NEW ZEALND
DD
60
1
0.14
$      
0.14
$   
65
SINGAPORE
DD
60
1
0.14
$      
0.14
$   
66
THAILAND
DD
60
1
0.14
$      
0.14
$   
71
USA to Intl
DD
60
1
0.14
$      
0.14
$   
GPC East Rates
```

#### Page 2 / 6 — `page-002.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
73
USA to Intl
DD
60
1
0.14
$      
0.14
$   
74
USA to Intl
DD
60
1
0.14
$      
0.14
$   
75
USA to Intl
DD
60
1
0.14
$      
0.14
$   
77
USA to Intl
DD
60
1
0.14
$      
0.14
$   
78
USA to Intl
DD
60
1
0.14
$      
0.14
$   
81
JAPAN
DD
60
1
0.14
$      
0.14
$   
82
S KOREA
DD
60
1
0.14
$      
0.14
$   
84
VIET-NAM
DD
60
1
0.39
$      
0.39
$   
86
CHINA
DD
60
1
0.14
$      
0.14
$   
90
TURKEY
DD
60
1
0.39
$      
0.39
$   
91
INDIA
DD
60
1
0.39
$      
0.39
$   
92
PAKISTAN
DD
60
1
0.39
$      
0.39
$   
93
AFGHANISTA
DD
60
1
0.39
$      
0.39
$   
94
SRI LANKA
DD
60
1
0.39
$      
0.39
$   
95
MYANMAR
DD
60
1
0.39
$      
0.39
$   
98
IRAN
DD
60
1
0.39
$      
0.39
$   
212
MOROCCO
DD
60
1
0.39
$      
0.39
$   
213
ALGERIA
DD
60
1
0.39
$      
0.39
$   
216
TUNISIA
DD
60
1
0.39
$      
0.39
$   
218
LIBYA
DD
60
1
0.39
$      
0.39
$   
220
GAMBIA
DD
60
1
0.39
$      
0.39
$   
221
SENEGAL
DD
60
1
0.39
$      
0.39
$   
222
MAURITANIA
DD
60
1
0.39
$      
0.39
$   
223
MALI
DD
60
1
0.39
$      
0.39
$   
224
GUINEA
DD
60
1
0.39
$      
0.39
$   
225
COTE D'IVO
DD
60
1
0.39
$      
0.39
$   
226
BURKINA
DD
60
1
0.39
$      
0.39
$   
227
NIGER
DD
60
1
0.39
$      
0.39
$   
228
TOGO
DD
60
1
0.39
$      
0.39
$   
229
BENIN
DD
60
1
0.14
$      
0.14
$   
230
MAURITIUS
DD
60
1
0.39
$      
0.39
$   
231
LIBERIA
DD
60
1
0.39
$      
0.39
$   
232
SRRA LEONE
DD
60
1
0.39
$      
0.39
$   
233
GHANA
DD
60
1
0.39
$      
0.39
$   
234
NIGERIA
DD
60
1
0.14
$      
0.14
$   
235
CHAD
DD
60
1
0.39
$      
0.39
$   
236
C AFRICA
DD
60
1
0.39
$      
0.39
$   
237
CAMEROON
DD
60
1
0.39
$      
0.39
$   
238
CAPE VERDE
DD
60
1
0.39
$      
0.39
$   
239
SAO TOME
DD
60
1
0.99
$      
0.99
$   
240
EQUATORIAL
DD
60
1
0.39
$      
0.39
$   
241
GABONESE
DD
60
1
0.39
$      
0.39
$   
242
CONGO
DD
60
1
0.39
$      
0.39
$   
243
CONGO, DEM
DD
60
1
0.39
$      
0.39
$   
244
ANGOLA
DD
60
1
0.39
$      
0.39
$   
245
GUINEA-BIS
DD
60
1
0.99
$      
0.99
$   
246
DIEGO GARC
DD
60
1
0.99
$      
0.99
$   
247
ASCENSION
DD
60
1
0.99
$      
0.99
$   
248
SEYCHELLES
DD
60
1
0.39
$      
0.39
$   
249
SUDAN
DD
60
1
0.39
$      
0.39
$   
250
RWANDA
DD
60
1
0.39
$      
0.39
$   
251
ETHIOPIA
DD
60
1
0.39
$      
0.39
$   
252
SOMALI
DD
60
1
0.99
$      
0.99
$   
253
DJIBOUTI
DD
60
1
0.39
$      
0.39
$   
254
KENYA
DD
60
1
0.39
$      
0.39
$   
255
TANZANIA
DD
60
1
0.39
$      
0.39
$   
256
UGANDA
DD
60
1
0.39
$      
0.39
$   
257
BURUNDI
DD
60
1
0.14
$      
0.14
$   
258
MOZAMBIQUE
DD
60
1
0.39
$      
0.39
$   
GPC East Rates
```

#### Page 3 / 6 — `page-003.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
260
ZAMBIA
DD
60
1
0.14
$      
0.14
$   
261
MADAGASCAR
DD
60
1
0.39
$      
0.39
$   
262
REUNION IS
DD
60
1
0.39
$      
0.39
$   
263
ZIMBABWE
DD
60
1
0.39
$      
0.39
$   
264
NAMIBIA
DD
60
1
0.39
$      
0.39
$   
265
MALAWI
DD
60
1
0.39
$      
0.39
$   
266
LESOTHO
DD
60
1
0.39
$      
0.39
$   
267
BOTSWANA
DD
60
1
0.39
$      
0.39
$   
268
SWAZILAND
DD
60
1
0.39
$      
0.39
$   
269
COMOROS
DD
60
1
0.39
$      
0.39
$   
271
USA to Intl
DD
60
1
0.14
$      
0.14
$   
277
USA to Intl
DD
60
1
0.14
$      
0.14
$   
278
USA to Intl
DD
60
1
0.14
$      
0.14
$   
290
ST HELENA
DD
60
1
0.99
$      
0.99
$   
291
ERITREA
DD
60
1
0.39
$      
0.39
$   
297
ARUBA
DD
60
1
0.39
$      
0.39
$   
298
FAROE IS
DD
60
1
0.39
$      
0.39
$   
299
GREENLAND
DD
60
1
0.99
$      
0.99
$   
309
USA to Intl
DD
60
1
0.14
$      
0.14
$   
321
USA to Intl
DD
60
1
0.14
$      
0.14
$   
324
USA to Intl
DD
60
1
0.14
$      
0.14
$   
350
GIBRALTAR
DD
60
1
0.14
$      
0.14
$   
351
PORTUGAL
DD
60
1
0.14
$      
0.14
$   
352
LUXEMBOURG
DD
60
1
0.14
$      
0.14
$   
353
IRELAND
DD
60
1
0.14
$      
0.14
$   
354
ICELAND
DD
60
1
0.14
$      
0.14
$   
355
ALBANIA
DD
60
1
0.39
$      
0.39
$   
356
REP MALTA
DD
60
1
0.39
$      
0.39
$   
357
CYPRUS
DD
60
1
0.14
$      
0.14
$   
358
FINLAND
DD
60
1
0.14
$      
0.14
$   
359
BULGARIA
DD
60
1
0.39
$      
0.39
$   
363
USA to Intl
DD
60
1
0.14
$      
0.14
$   
370
LITHUANIA
DD
60
1
0.39
$      
0.39
$   
371
LATVIA
DD
60
1
0.39
$      
0.39
$   
372
ESTONIA
DD
60
1
0.14
$      
0.14
$   
373
MOLDOVA
DD
60
1
0.39
$      
0.39
$   
374
ARMENIA
DD
60
1
0.39
$      
0.39
$   
375
BELARUS
DD
60
1
0.39
$      
0.39
$   
376
ANDORRA
DD
60
1
0.14
$      
0.14
$   
377
MONACO
DD
60
1
0.14
$      
0.14
$   
378
SAN MARINO
DD
60
1
0.14
$      
0.14
$   
380
UKRAINE
DD
60
1
0.39
$      
0.39
$   
381
SERBIA
DD
60
1
0.39
$      
-
$     
382
MONTENEGRO
DD
60
1
0.39
$      
0.39
$   
385
CROATIA
DD
60
1
0.14
$      
0.14
$   
386
SLOVENIA
DD
60
1
0.14
$      
0.14
$   
387
BOSNIA
DD
60
1
0.39
$      
0.39
$   
389
MACEDONIA
DD
60
1
0.39
$      
0.39
$   
393
USA to Intl
DD
60
1
0.14
$      
0.14
$   
409
USA to Intl
DD
60
1
0.39
$      
0.39
$   
417
USA to Intl
DD
60
1
0.14
$      
0.14
$   
420
CZECH REP
DD
60
1
0.14
$      
0.14
$   
421
SLOVAKIA
DD
60
1
0.14
$      
0.14
$   
423
LIECHTENST
DD
60
1
0.14
$      
0.14
$   
436
USA to Intl
DD
60
1
0.14
$      
0.14
$   
452
USA to Intl
DD
60
1
0.14
$      
0.14
$   
453
USA to Intl
DD
60
1
0.14
$      
0.14
$   
454
USA to Intl
DD
60
1
0.14
$      
0.14
$   
455
USA to Intl
DD
60
1
0.14
$      
0.14
$   
GPC East Rates
```

#### Page 4 / 6 — `page-004.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
467
USA to Intl
DD
60
1
0.14
$      
0.14
$   
474
USA to Intl
DD
60
1
0.14
$      
0.14
$   
479
USA to Intl
DD
60
1
0.14
$      
0.14
$   
485
USA to Intl
DD
60
1
0.14
$      
0.14
$   
491
USA to Intl
DD
60
1
0.14
$      
0.14
$   
497
USA to Intl
DD
60
1
0.14
$      
0.14
$   
500
FALKLAND
DD
60
1
0.99
$      
0.99
$   
501
BELIZE
DD
60
1
0.39
$      
0.39
$   
502
GUATEMALA
DD
60
1
0.39
$      
0.39
$   
503
EL SALVADR
DD
60
1
0.39
$      
0.39
$   
504
HONDURAS
DD
60
1
0.39
$      
0.39
$   
505
NICARAGUA
DD
60
1
0.39
$      
0.39
$   
506
COSTA RICA
DD
60
1
0.39
$      
0.39
$   
507
PANAMA
DD
60
1
0.14
$      
0.14
$   
508
ST PIERRE
DD
60
1
0.39
$      
0.39
$   
509
HAITI
DD
60
1
0.39
$      
0.39
$   
511
USA to Intl
DD
60
1
0.14
$      
0.14
$   
515
USA to Intl
DD
60
1
0.14
$      
0.14
$   
521
USA to Intl
DD
60
1
0.39
$      
0.39
$   
539
USA to Intl
DD
60
1
0.99
$      
0.99
$   
551
USA to Intl
DD
60
1
0.14
$      
0.14
$   
552
USA to Intl
DD
60
1
0.14
$      
0.14
$   
553
USA to Intl
DD
60
1
0.14
$      
0.14
$   
569
USA to Intl
DD
60
1
0.14
$      
0.14
$   
582
USA to Intl
DD
60
1
0.14
$      
0.14
$   
590
GUADELOUPE
DD
60
1
0.14
$      
0.14
$   
591
BOLIVIA
DD
60
1
0.39
$      
0.39
$   
592
GUYANA
DD
60
1
0.39
$      
0.39
$   
593
ECUADOR
DD
60
1
0.39
$      
0.39
$   
594
FR GUIANA
DD
60
1
0.39
$      
0.39
$   
595
PARAGUAY
DD
60
1
0.39
$      
0.39
$   
596
FR ANTILLS
DD
60
1
0.14
$      
0.14
$   
597
SURINAME
DD
60
1
0.39
$      
0.39
$   
598
URUGUAY
DD
60
1
0.39
$      
0.39
$   
599
NETH ANTIL
DD
60
1
0.39
$      
0.39
$   
611
USA to Intl
DD
60
1
0.14
$      
0.14
$   
614
USA to Intl
DD
60
1
0.14
$      
0.14
$   
639
USA to Intl
DD
60
1
0.39
$      
0.39
$   
642
USA to Intl
DD
60
1
0.14
$      
0.14
$   
659
USA to Intl
DD
60
1
0.14
$      
0.14
$   
670
EAST TIMOR
DD
60
1
0.99
$      
0.99
$   
672
ANTARCTICA
DD
60
1
0.99
$      
0.99
$   
673
BRUNEI
DD
60
1
0.14
$      
0.14
$   
674
NAURU
DD
60
1
0.99
$      
0.99
$   
675
NEW GUINEA
DD
60
1
0.99
$      
0.99
$   
676
TONGA ISL
DD
60
1
0.39
$      
0.39
$   
677
SOLOMON IS
DD
60
1
0.99
$      
0.99
$   
678
VANUATU
DD
60
1
0.99
$      
0.99
$   
679
FIJI ISLND
DD
60
1
0.39
$      
0.39
$   
680
REP PALAU
DD
60
1
0.99
$      
0.99
$   
681
WALLIS/FUT
DD
60
1
0.99
$      
0.99
$   
682
COOK ISLND
DD
60
1
0.99
$      
0.99
$   
683
SURINAME
DD
60
1
0.99
$      
0.99
$   
685
WEST SAMOA
DD
60
1
0.39
$      
0.39
$   
686
KIRIBATI
DD
60
1
0.99
$      
0.99
$   
687
NEW CALEDO
DD
60
1
0.39
$      
0.39
$   
688
TUVALU
DD
60
1
0.99
$      
0.99
$   
689
FR POLYNSA
DD
60
1
0.39
$      
0.39
$   
690
TOKELAU
DD
60
1
0.99
$      
0.99
$   
GPC East Rates
```

#### Page 5 / 6 — `page-005.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
691
MICRONESIA
DD
60
1
0.39
$      
0.39
$   
692
MARSHALL
DD
60
1
0.39
$      
0.39
$   
731
USA to Intl
DD
60
1
0.39
$      
0.39
$   
732
USA to Intl
DD
60
1
0.39
$      
0.39
$   
812
USA to Intl
DD
60
1
0.14
$      
0.14
$   
813
USA to Intl
DD
60
1
0.14
$      
0.14
$   
814
USA to Intl
DD
60
1
0.14
$      
0.14
$   
815
USA to Intl
DD
60
1
0.14
$      
0.14
$   
816
USA to Intl
DD
60
1
0.14
$      
0.14
$   
817
USA to Intl
DD
60
1
0.14
$      
0.14
$   
818
USA to Intl
DD
60
1
0.14
$      
0.14
$   
819
USA to Intl
DD
60
1
0.14
$      
0.14
$   
821
USA to Intl
DD
60
1
0.14
$      
0.14
$   
850
N KOREA
DD
60
1
0.99
$      
0.99
$   
852
HONG KONG
DD
60
1
0.14
$      
0.14
$   
853
MACAO
DD
60
1
0.14
$      
0.14
$   
855
CAMBODIA
DD
60
1
0.39
$      
0.39
$   
856
LAOS
DD
60
1
0.14
$      
0.14
$   
861
USA to Intl
DD
60
1
0.14
$      
0.14
$   
870
INMARSAT S
DD
60
1
0.99
$      
0.99
$   
876
USA to Intl
DD
60
1
0.99
$      
0.99
$   
880
BANGLADESH
DD
60
1
0.39
$      
0.39
$   
881
GLOBAL MOB
DD
60
1
0.99
$      
0.99
$   
882
INT.NETWOR
DD
60
1
0.99
$      
0.99
$   
886
TAIWAN
DD
60
1
0.14
$      
0.14
$   
905
USA to Intl
DD
60
1
0.39
$      
0.39
$   
919
USA to Intl
DD
60
1
0.39
$      
0.39
$   
960
MALDIVES
DD
60
1
0.39
$      
0.39
$   
961
LEBANON
DD
60
1
0.39
$      
0.39
$   
962
JORDAN
DD
60
1
0.39
$      
0.39
$   
963
SYRIA
DD
60
1
0.39
$      
0.39
$   
964
IRAQ
DD
60
1
0.39
$      
0.39
$   
965
KUWAIT
DD
60
1
0.39
$      
0.39
$   
966
SAUDI ARAB
DD
60
1
0.39
$      
0.39
$   
967
YEMEN
DD
60
1
0.39
$      
0.39
$   
968
OMAN
DD
60
1
0.39
$      
0.39
$   
970
PALESTINE
DD
60
1
0.39
$      
0.39
$   
971
U.A.E.
DD
60
1
0.39
$      
0.39
$   
972
ISRAEL
DD
60
1
0.14
$      
0.14
$   
973
BAHRAIN
DD
60
1
0.39
$      
0.39
$   
974
QATAR
DD
60
1
0.39
$      
0.39
$   
975
BHUTAN
DD
60
1
0.39
$      
0.39
$   
976
MONGOLIA
DD
60
1
0.14
$      
0.14
$   
977
NEPAL
DD
60
1
0.39
$      
0.39
$   
992
TAJIKISTAN
DD
60
1
0.39
$      
0.39
$   
993
TURKMENIST
DD
60
1
0.39
$      
0.39
$   
994
AZERBAIJAN
DD
60
1
0.39
$      
0.39
$   
995
GEORGIA
DD
60
1
0.39
$      
0.39
$   
996
KYRGYZSTAN
DD
60
1
0.14
$      
0.14
$   
998
UZBEKISTAN
DD
60
1
0.14
$      
0.14
$   
2126
USA to Intl
DD
60
1
0.39
$      
0.39
$   
2696
USA to Intl
DD
60
1
0.39
$      
0.39
$   
3519
USA to Intl
DD
60
1
0.14
$      
0.14
$   
3538
USA to Intl
DD
60
1
0.14
$      
0.14
$   
3584
USA to Intl
DD
60
1
0.14
$      
0.14
$   
3585
USA to Intl
DD
60
1
0.14
$      
0.14
$   
4206
USA to Intl
DD
60
1
0.14
$      
0.14
$   
4207
USA to Intl
DD
60
1
0.14
$      
0.14
$   
4219
USA to Intl
DD
60
1
0.14
$      
0.14
$   
GPC East Rates
```

#### Page 6 / 6 — `page-006.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
5037
USA to Intl
DD
60
1
0.39
$      
0.39
$   
5521
USA to Intl
DD
60
1
0.14
$      
0.14
$   
5531
USA to Intl
DD
60
1
0.14
$      
0.14
$   
6722
USA to Intl
DD
60
1
0.14
$      
0.14
$   
6724
USA to Intl
DD
60
1
0.14
$      
0.14
$   
7367
USA to Intl
DD
60
1
0.14
$      
0.14
$   
8816
USA to Intl
DD
60
1
0.99
$      
0.99
$   
8869
USA to Intl
DD
60
1
0.14
$      
0.14
$   
9725
USA to Intl
DD
60
1
0.14
$      
0.14
$   
9989
USA to Intl
DD
60
1
0.14
$      
0.14
$   
GPC East Rates
```


<a id="p-dcfefa6a0839dda1"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC Interneional Calling Rates - West Aug2024.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC Interneional Calling Rates - West Aug2024.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Voice/GPC Interneional Calling Rates - West Aug2024`

**Page count:** 6

#### Page 1 / 6 — `page-001.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
*
Canada to USA
DD
60
1
0.14
$   
0.14
$ 
*
USA to Canada
DD
60
1
0.14
$   
0.14
$ 
*
Canada to USA
CC
60
1
0.25
$   
0.25
$ 
*
USA to Canada
CC
60
1
0.25
$   
0.25
$ 
AI
Anquilla
DD
60
1
0.39
$   
0.39
$ 
AN
Antigua
DD
60
1
0.39
$   
0.39
$ 
AS
American Samoa
DD
60
1
0.39
$   
0.39
$ 
BA
Bahamas
DD
60
1
0.39
$   
0.39
$ 
BD
Barbados
DD
60
1
0.39
$   
0.39
$ 
BM
Bermuda
DD
60
1
0.14
$   
0.14
$ 
BV
British Virgin Islands
DD
60
1
0.39
$   
0.39
$ 
CQ
Cayman Islands
DD
60
1
0.39
$   
0.39
$ 
DM
Dominica
DD
60
1
0.39
$   
0.39
$ 
DR
Dominican Republic
DD
60
1
0.14
$   
0.14
$ 
GN
Grenada
DD
60
1
0.39
$   
0.39
$ 
GU
Guam
DD
60
1
0.14
$   
0.14
$ 
JM
Jamaica
DD
60
1
0.19
$   
0.19
$ 
KA
St Kitts/Nevis
DD
60
1
0.39
$   
0.39
$ 
NN
Saipan
DD
60
1
0.14
$   
0.14
$ 
PR
Puerto Rico
DD
60
1
0.14
$   
0.14
$ 
SA
St Lucia
DD
60
1
0.39
$   
0.39
$ 
SF
St Maarten
DD
60
1
0.39
$   
0.39
$ 
TC
Turks
DD
60
1
0.39
$   
0.39
$ 
TR
Trinidad
DD
60
1
0.39
$   
0.39
$ 
VI
Virgin Islands
DD
60
1
0.14
$   
0.14
$ 
ZF
St Vincent
DD
60
1
0.39
$   
0.39
$ 
7
RUSSIA
DD
60
1
0.14
$   
0.14
$ 
7
9 RUSSIA
MOBILE
DD
60
1
0.39
$   
0.39
$ 
20
EGYPT
DD
60
1
0.39
$   
0.39
$ 
27
S AFRICA
DD
60
1
0.14
$   
0.14
$ 
30
GREECE
DD
60
1
0.14
$   
0.14
$ 
31
NETHERLAND
DD
60
1
0.14
$   
0.14
$ 
32
BELGIUM
DD
60
1
0.14
$   
0.14
$ 
33
FRANCE
DD
60
1
0.14
$   
0.14
$ 
34
SPAIN
DD
60
1
0.14
$   
0.14
$ 
36
HUNGARY
DD
60
1
0.14
$   
0.14
$ 
39
ITALY
DD
60
1
0.14
$   
0.14
$ 
40
ROMANIA
DD
60
1
0.39
$   
0.39
$ 
41
SWITZERLND
DD
60
1
0.14
$   
0.14
$ 
43
AUSTRIA
DD
60
1
0.14
$   
0.14
$ 
44
UK
DD
60
1
0.14
$   
0.14
$ 
45
DENMARK
DD
60
1
0.14
$   
0.14
$ 
46
SWEDEN
DD
60
1
0.14
$   
0.14
$ 
47
NORWAY
DD
60
1
0.14
$   
0.14
$ 
48
POLAND
DD
60
1
0.14
$   
0.14
$ 
49
GERMANY
DD
60
1
0.14
$   
0.14
$ 
51
PERU
DD
60
1
0.14
$   
0.14
$ 
52
MEXICO
DD
60
1
0.39
$   
0.39
$ 
53
CUBA
DD
60
1
0.99
$   
0.99
$ 
54
ARGENTINA
DD
60
1
0.14
$   
0.14
$ 
55
BRAZIL
DD
60
1
0.14
$   
0.14
$ 
56
CHILE
DD
60
1
0.14
$   
0.14
$ 
57
COLOMBIA
DD
60
1
0.14
$   
0.14
$ 
58
VENEZUELA
DD
60
1
0.14
$   
0.14
$ 
60
MALAYSIA
DD
60
1
0.14
$   
0.14
$ 
61
AUSTRALIA
DD
60
1
0.29
$   
0.29
$ 
62
INDONESIA
DD
60
1
0.39
$   
0.39
$ 
GPC West Rates
```

#### Page 2 / 6 — `page-002.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
63
PHILIPPINE
DD
60
1
0.39
$   
0.39
$ 
64
NEW ZEALND
DD
60
1
0.14
$   
0.14
$ 
65
SINGAPORE
DD
60
1
0.14
$   
0.14
$ 
66
THAILAND
DD
60
1
0.14
$   
0.14
$ 
71
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
73
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
74
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
75
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
77
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
78
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
81
JAPAN
DD
60
1
0.14
$   
0.14
$ 
82
S KOREA
DD
60
1
0.14
$   
0.14
$ 
84
VIET-NAM
DD
60
1
0.39
$   
0.39
$ 
86
CHINA
DD
60
1
0.14
$   
0.14
$ 
90
TURKEY
DD
60
1
0.39
$   
0.39
$ 
91
INDIA
DD
60
1
0.39
$   
0.39
$ 
92
PAKISTAN
DD
60
1
0.39
$   
0.39
$ 
93
AFGHANISTA
DD
60
1
0.39
$   
0.39
$ 
94
SRI LANKA
DD
60
1
0.39
$   
0.39
$ 
95
MYANMAR
DD
60
1
0.39
$   
0.39
$ 
98
IRAN
DD
60
1
0.39
$   
0.39
$ 
212
MOROCCO
DD
60
1
0.39
$   
0.39
$ 
213
ALGERIA
DD
60
1
0.39
$   
0.39
$ 
216
TUNISIA
DD
60
1
0.39
$   
0.39
$ 
218
LIBYA
DD
60
1
0.39
$   
0.39
$ 
220
GAMBIA
DD
60
1
0.39
$   
0.39
$ 
221
SENEGAL
DD
60
1
0.39
$   
0.39
$ 
222
MAURITANIA
DD
60
1
0.39
$   
0.39
$ 
223
MALI
DD
60
1
0.39
$   
0.39
$ 
224
GUINEA
DD
60
1
0.39
$   
0.39
$ 
225
COTE D'IVO
DD
60
1
0.39
$   
0.39
$ 
226
BURKINA
DD
60
1
0.39
$   
0.39
$ 
227
NIGER
DD
60
1
0.39
$   
0.39
$ 
228
TOGO
DD
60
1
0.39
$   
0.39
$ 
229
BENIN
DD
60
1
0.14
$   
0.14
$ 
230
MAURITIUS
DD
60
1
0.39
$   
0.39
$ 
231
LIBERIA
DD
60
1
0.39
$   
0.39
$ 
232
SRRA LEONE
DD
60
1
0.39
$   
0.39
$ 
233
GHANA
DD
60
1
0.39
$   
0.39
$ 
234
NIGERIA
DD
60
1
0.14
$   
0.14
$ 
235
CHAD
DD
60
1
0.39
$   
0.39
$ 
236
C AFRICA
DD
60
1
0.39
$   
0.39
$ 
237
CAMEROON
DD
60
1
0.39
$   
0.39
$ 
238
CAPE VERDE
DD
60
1
0.39
$   
0.39
$ 
239
SAO TOME
DD
60
1
0.99
$   
0.99
$ 
240
EQUATORIAL
DD
60
1
0.39
$   
0.39
$ 
241
GABONESE
DD
60
1
0.39
$   
0.39
$ 
242
CONGO
DD
60
1
0.39
$   
0.39
$ 
243
CONGO, DEM
DD
60
1
0.39
$   
0.39
$ 
244
ANGOLA
DD
60
1
0.39
$   
0.39
$ 
245
GUINEA-BIS
DD
60
1
0.99
$   
0.99
$ 
246
DIEGO GARC
DD
60
1
0.99
$   
0.99
$ 
247
ASCENSION
DD
60
1
0.99
$   
0.99
$ 
248
SEYCHELLES
DD
60
1
0.39
$   
0.39
$ 
249
SUDAN
DD
60
1
0.39
$   
0.39
$ 
250
RWANDA
DD
60
1
0.39
$   
0.39
$ 
251
ETHIOPIA
DD
60
1
0.39
$   
0.39
$ 
GPC West Rates
```

#### Page 3 / 6 — `page-003.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
252
SOMALI
DD
60
1
0.99
$   
0.99
$ 
253
DJIBOUTI
DD
60
1
0.39
$   
0.39
$ 
254
KENYA
DD
60
1
0.39
$   
0.39
$ 
255
TANZANIA
DD
60
1
0.39
$   
0.39
$ 
256
UGANDA
DD
60
1
0.39
$   
0.39
$ 
257
BURUNDI
DD
60
1
0.14
$   
0.14
$ 
258
MOZAMBIQUE
DD
60
1
0.39
$   
0.39
$ 
260
ZAMBIA
DD
60
1
0.14
$   
0.14
$ 
261
MADAGASCAR
DD
60
1
0.39
$   
0.39
$ 
262
REUNION IS
DD
60
1
0.39
$   
0.39
$ 
263
ZIMBABWE
DD
60
1
0.39
$   
0.39
$ 
264
NAMIBIA
DD
60
1
0.39
$   
0.39
$ 
265
MALAWI
DD
60
1
0.39
$   
0.39
$ 
266
LESOTHO
DD
60
1
0.39
$   
0.39
$ 
267
BOTSWANA
DD
60
1
0.39
$   
0.39
$ 
268
SWAZILAND
DD
60
1
0.39
$   
0.39
$ 
269
COMOROS
DD
60
1
0.39
$   
0.39
$ 
271
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
277
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
278
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
290
ST HELENA
DD
60
1
0.99
$   
0.99
$ 
291
ERITREA
DD
60
1
0.39
$   
0.39
$ 
297
ARUBA
DD
60
1
0.39
$   
0.39
$ 
298
FAROE IS
DD
60
1
0.39
$   
0.39
$ 
299
GREENLAND
DD
60
1
0.99
$   
0.99
$ 
309
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
321
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
324
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
350
GIBRALTAR
DD
60
1
0.14
$   
0.14
$ 
351
PORTUGAL
DD
60
1
0.14
$   
0.14
$ 
352
LUXEMBOURG
DD
60
1
0.14
$   
0.14
$ 
353
IRELAND
DD
60
1
0.14
$   
0.14
$ 
354
ICELAND
DD
60
1
0.14
$   
0.14
$ 
355
ALBANIA
DD
60
1
0.39
$   
0.39
$ 
356
REP MALTA
DD
60
1
0.39
$   
0.39
$ 
357
CYPRUS
DD
60
1
0.14
$   
0.14
$ 
358
FINLAND
DD
60
1
0.14
$   
0.14
$ 
359
BULGARIA
DD
60
1
0.39
$   
0.39
$ 
363
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
370
LITHUANIA
DD
60
1
0.39
$   
0.39
$ 
371
LATVIA
DD
60
1
0.39
$   
0.39
$ 
372
ESTONIA
DD
60
1
0.14
$   
0.14
$ 
373
MOLDOVA
DD
60
1
0.39
$   
0.39
$ 
374
ARMENIA
DD
60
1
0.39
$   
0.39
$ 
375
BELARUS
DD
60
1
0.39
$   
0.39
$ 
376
ANDORRA
DD
60
1
0.14
$   
0.14
$ 
377
MONACO
DD
60
1
0.14
$   
0.14
$ 
378
SAN MARINO
DD
60
1
0.14
$   
0.14
$ 
380
UKRAINE
DD
60
1
0.39
$   
0.39
$ 
381
SERBIA
DD
60
1
0.39
$   
-
$    
382
MONTENEGRO
DD
60
1
0.39
$   
0.39
$ 
385
CROATIA
DD
60
1
0.14
$   
0.14
$ 
386
SLOVENIA
DD
60
1
0.14
$   
0.14
$ 
387
BOSNIA
DD
60
1
0.39
$   
0.39
$ 
389
MACEDONIA
DD
60
1
0.39
$   
0.39
$ 
393
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
409
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
GPC West Rates
```

#### Page 4 / 6 — `page-004.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
417
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
420
CZECH REP
DD
60
1
0.14
$   
0.14
$ 
421
SLOVAKIA
DD
60
1
0.14
$   
0.14
$ 
423
LIECHTENST
DD
60
1
0.14
$   
0.14
$ 
436
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
452
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
453
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
454
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
455
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
467
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
474
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
479
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
485
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
491
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
497
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
500
FALKLAND
DD
60
1
0.99
$   
0.99
$ 
501
BELIZE
DD
60
1
0.39
$   
0.39
$ 
502
GUATEMALA
DD
60
1
0.39
$   
0.39
$ 
503
EL SALVADR
DD
60
1
0.39
$   
0.39
$ 
504
HONDURAS
DD
60
1
0.39
$   
0.39
$ 
505
NICARAGUA
DD
60
1
0.39
$   
0.39
$ 
506
COSTA RICA
DD
60
1
0.39
$   
0.39
$ 
507
PANAMA
DD
60
1
0.14
$   
0.14
$ 
508
ST PIERRE
DD
60
1
0.39
$   
0.39
$ 
509
HAITI
DD
60
1
0.39
$   
0.39
$ 
511
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
515
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
521
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
539
USA to Intl
DD
60
1
0.99
$   
0.99
$ 
551
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
552
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
553
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
569
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
582
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
590
GUADELOUPE
DD
60
1
0.14
$   
0.14
$ 
591
BOLIVIA
DD
60
1
0.39
$   
0.39
$ 
592
GUYANA
DD
60
1
0.39
$   
0.39
$ 
593
ECUADOR
DD
60
1
0.39
$   
0.39
$ 
594
FR GUIANA
DD
60
1
0.39
$   
0.39
$ 
595
PARAGUAY
DD
60
1
0.39
$   
0.39
$ 
596
FR ANTILLS
DD
60
1
0.14
$   
0.14
$ 
597
SURINAME
DD
60
1
0.39
$   
0.39
$ 
598
URUGUAY
DD
60
1
0.39
$   
0.39
$ 
599
NETH ANTIL
DD
60
1
0.39
$   
0.39
$ 
611
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
614
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
639
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
642
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
659
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
670
EAST TIMOR
DD
60
1
0.99
$   
0.99
$ 
672
ANTARCTICA
DD
60
1
0.99
$   
0.99
$ 
673
BRUNEI
DD
60
1
0.14
$   
0.14
$ 
674
NAURU
DD
60
1
0.99
$   
0.99
$ 
675
NEW GUINEA
DD
60
1
0.99
$   
0.99
$ 
676
TONGA ISL
DD
60
1
0.39
$   
0.39
$ 
677
SOLOMON IS
DD
60
1
0.99
$   
0.99
$ 
678
VANUATU
DD
60
1
0.99
$   
0.99
$ 
GPC West Rates
```

#### Page 5 / 6 — `page-005.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
679
FIJI ISLND
DD
60
1
0.39
$   
0.39
$ 
680
REP PALAU
DD
60
1
0.99
$   
0.99
$ 
681
WALLIS/FUT
DD
60
1
0.99
$   
0.99
$ 
682
COOK ISLND
DD
60
1
0.99
$   
0.99
$ 
683
SURINAME
DD
60
1
0.99
$   
0.99
$ 
685
WEST SAMOA
DD
60
1
0.39
$   
0.39
$ 
686
KIRIBATI
DD
60
1
0.99
$   
0.99
$ 
687
NEW CALEDO
DD
60
1
0.39
$   
0.39
$ 
688
TUVALU
DD
60
1
0.99
$   
0.99
$ 
689
FR POLYNSA
DD
60
1
0.39
$   
0.39
$ 
690
TOKELAU
DD
60
1
0.99
$   
0.99
$ 
691
MICRONESIA
DD
60
1
0.39
$   
0.39
$ 
692
MARSHALL
DD
60
1
0.39
$   
0.39
$ 
731
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
732
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
812
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
813
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
814
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
815
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
816
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
817
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
818
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
819
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
821
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
850
N KOREA
DD
60
1
0.99
$   
0.99
$ 
852
HONG KONG
DD
60
1
0.14
$   
0.14
$ 
853
MACAO
DD
60
1
0.14
$   
0.14
$ 
855
CAMBODIA
DD
60
1
0.39
$   
0.39
$ 
856
LAOS
DD
60
1
0.14
$   
0.14
$ 
861
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
870
INMARSAT S
DD
60
1
0.99
$   
0.99
$ 
876
USA to Intl
DD
60
1
0.99
$   
0.99
$ 
880
BANGLADESH
DD
60
1
0.39
$   
0.39
$ 
881
GLOBAL MOB
DD
60
1
0.99
$   
0.99
$ 
882
INT.NETWOR
DD
60
1
0.99
$   
0.99
$ 
886
TAIWAN
DD
60
1
0.14
$   
0.14
$ 
905
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
919
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
960
MALDIVES
DD
60
1
0.39
$   
0.39
$ 
961
LEBANON
DD
60
1
0.39
$   
0.39
$ 
962
JORDAN
DD
60
1
0.39
$   
0.39
$ 
963
SYRIA
DD
60
1
0.39
$   
0.39
$ 
964
IRAQ
DD
60
1
0.39
$   
0.39
$ 
965
KUWAIT
DD
60
1
0.39
$   
0.39
$ 
966
SAUDI ARAB
DD
60
1
0.39
$   
0.39
$ 
967
YEMEN
DD
60
1
0.39
$   
0.39
$ 
968
OMAN
DD
60
1
0.39
$   
0.39
$ 
970
PALESTINE
DD
60
1
0.39
$   
0.39
$ 
971
U.A.E.
DD
60
1
0.39
$   
0.39
$ 
972
ISRAEL
DD
60
1
0.14
$   
0.14
$ 
973
BAHRAIN
DD
60
1
0.39
$   
0.39
$ 
974
QATAR
DD
60
1
0.39
$   
0.39
$ 
975
BHUTAN
DD
60
1
0.39
$   
0.39
$ 
976
MONGOLIA
DD
60
1
0.14
$   
0.14
$ 
977
NEPAL
DD
60
1
0.39
$   
0.39
$ 
992
TAJIKISTAN
DD
60
1
0.39
$   
0.39
$ 
993
TURKMENIST
DD
60
1
0.39
$   
0.39
$ 
GPC West Rates
```

#### Page 6 / 6 — `page-006.png`

```text
Rates are subject to change
Country Code
City Code
Country Name
City Name
Rate Code
Bill Unit
Initial Incr
Initial Rate
Addl Rate
994
AZERBAIJAN
DD
60
1
0.39
$   
0.39
$ 
995
GEORGIA
DD
60
1
0.39
$   
0.39
$ 
996
KYRGYZSTAN
DD
60
1
0.14
$   
0.14
$ 
998
UZBEKISTAN
DD
60
1
0.14
$   
0.14
$ 
2126
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
2696
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
3519
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
3538
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
3584
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
3585
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
4206
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
4207
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
4219
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
5037
USA to Intl
DD
60
1
0.39
$   
0.39
$ 
5521
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
5531
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
6722
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
6724
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
7367
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
8816
USA to Intl
DD
60
1
0.99
$   
0.99
$ 
8869
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
9725
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
9989
USA to Intl
DD
60
1
0.14
$   
0.14
$ 
GPC West Rates
```


<a id="p-3ea16bf096e3331f"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Voice/Usage Plan Pricing July2022.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Voice/Usage Plan Pricing July2022.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Voice/Usage Plan Pricing July2022`

**Page count:** 2

#### Page 1 / 2 — `page-001.png`

```text
Usage Plan Pricing July2022 
 
 
 
 
 
 
 
 
 
 
 
 
 
Page 1 
 
 
Domestic Outbound (1+) ONLY Plan  
Market 
Plan Type 
Plan Name 
Plan Description 
MRC 
Overage Rate 
Eligibility   
Limitation 
NE-ILEC 
MRC + Per 
Minute 
Overage 
500 Minute (1+ only) 
500 Minutes  
$22.00 
$0.14/min 
POTS, SIP, PRI 
– sold per 
customer 
(not per line) 
Cannot be 
combined 
with 
unlimited 
plan 
NE-CLEC 
IA-CB 
500 Minute (1+ only) 
500 Minutes  
$3.00 
$0.05/min 
sold with 
POTS/SIP line. 
Price per 
customer 
(not per line). 
NE-CLEC 
IA-CB 
Per Minute 
Rate 
Long Distance 
($0.05/minute) 
Long Distance 
($0.05/minute) 
N/A 
$0.05/min 
POTS, SIP, PRI 
Use this plan 
on a stand-
alone line for 
occasional 
dialing 
IN-CLEC 
IN-ILEC 
Per Minute 
Rate 
$0.06 Per Minute 
Long Distance 
Long Distance 
($0.06/minute) 
N/A 
$0.06/min 
NE-CLEC 
IN-CLEC 
IN-ILEC 
Unlimited 
Unlimited LD (1+ 
only) 
Unlimited LD 
$10.00 
N/A 
Sold with 
POTS/SIP 
Per Line 
Cannot be 
combined 
with other 
usage plan 
 
Domestic Inbound (Toll-Free) ONLY Plan 
Market 
Plan Type 
Plan Name 
Plan Description 
MRC 
Overage Rate 
Eligibility   
Limitation 
NE-CLEC 
IA-CB 
Per Minute 
Rate 
Toll Free 
($0.05/Minute) 
Toll-Free - $0.05 per 
minute.  
N/A 
$0.05/min 
SIP ONLY 
Select a plan 
for the toll-
free service 
IN-CLEC 
IN-ILEC 
Any Voice 
Service 
NE-CLEC 
IA-CB 
IN-CLEC 
IN-ILEC 
Toll Free 
($0.10/Minute) 
Toll-Free- $0.10 per 
minute. 
N/A 
$0.10/min 
POTS, SIP, PRI 
NE-ILEC 
Toll Free 
($0.19/Minute) 
Toll-Free- $0.19 per 
minute. 
N/A 
$0.19/min
```

#### Page 2 / 2 — `page-002.png`

```text
Usage Plan Pricing July2022 
 
 
 
 
 
 
 
 
 
 
 
 
 
Page 2 
 
 
 
Domestic Inbound & Outbound (1+ & Toll-Free) SHARED Plan 
Market 
Plan Type 
Plan Name 
Plan Description 
MRC 
Overage Rate 
Eligibility   
Limitation 
NE-CLEC 
IN-CLEC 
IN-ILEC 
IA-CB 
MRC + 
Overage 
Rate 
250 Minute  
250 Minutes 
$11.25 
$0.05/min 
POTS, SIP, PRI 
Cannot be 
combined 
with 
unlimited 
plan 
500 Minute  
500 Minutes  
$22.00 
$0.05/min 
1000 Minute  
1000 Minutes  
$42.50 
$0.05/min 
2000 Minute  
2000 Minutes  
$85.00 
$0.05/min 
3000 Minute  
3000 Minutes  
$120.00 
$0.05/min 
4500 Minute  
4500 Minutes  
$180.00 
$0.05/min 
7500 Minute  
7500 Minutes  
$280.00 
$0.04/min 
10,000 Minute  
10,000 Minutes 
$350.00 
$0.04/min 
NE-CLEC 
IA-CB 
15,000 Minute  
15,000 Minutes 
$450.00 
$0.35/min 
20,000 Minute  
20,000 Minutes 
$550.00 
$0.03/min 
25,000 Minute  
25,000 Minutes 
$625.00 
$0.03/min 
50,000 Minutes  
50,000 Minutes 
$1,125.00 
$0.03/min 
100,000 Minutes  
100,000 Minutes 
$2,100.00 
$0.03/min 
150,000 Minutes 
150,000 Minutes 
$3,000.00 
$0.03/min 
NE-ILEC 
120 Minute  
120 Minutes 
$12.00 
$0.14/min
```


<a id="p-a3e29b03938dab4f"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Wave/202401 - WAVE Market Groups.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Wave/202401 - WAVE Market Groups.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Wave/202401 - WAVE Market Groups`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Albion - NE
Chicago - IL
Imperial - NE
Norfolk - NE
Scottsbluff - NE
Atkinson - NE
Columbus - NE
Johnson - NE
North Platte - NE
Seward - NE
Auburn - NE
Denver - CO
Kansas City - KS
Omaha - NE
Sidney - NE
Batesville - IN
Des Moines - IA
Kearney - NE
Omaha Metro
Sioux City - IA
Beatrice - NE
Elkhorn - NE
Lexington - NE
O'Neill - NE
South Sioux City - NE
Bellevue - NE
Elm Creek - NE
McCook - NE
Overton - NE
Valentine - NE
Bennington - NE
Elwood - NE
Minden - NE
Papillion - NE
Waverly - NE
Blair - NE
Fremont - NE
Minneapolis - MN
Peru - NE
West Point - NE
Broken Bow - NE
Grand Island - NE
Morrill - NE
Plattsmouth - NE
Wood River - NE
Chadron - NE
Greensburg - IN
Nebraska City - NE
Rising Sun - IN
Yankton - SD
Cheyenne - WY
Hastings - NE
Neligh - NE
Schuyler - NE
Ainsworth - NE
Fullerton - NE
Lake Santee - IN
Orchard - NE
St. Paul - NE
Alliance - NE
Genoa - NE
Liberty - IN
Ord - NE
St. Leon - IN
Alma - NE
Gordon - NE
Lodgepole - NE
Osgood - IN
St. Peters - IN
Bassett - NE
Grant - NE
Loup City - NE
Palmer - NE
Stapleton - NE
Beemer - NE
Guilford - IN
Madison - NE
Pawnee City - NE
Sunman - IN
Brookville - IN
Harrison - IN
Milan - IN
Pilger - NE
Sutherland - NE
Cairo - NE
Hay Springs - NE
Millhousen - IN
Plainview - NE
Syracuse - NE
Central City - NE
Hebron - NE
Morris - IN
Platte Center - NE
Tecumseh - NE
Chappell - NE
Herman - NE
Napoleon - IN
Potter - NE
Walthill - NE
Crawford - NE
Humboldt - NE
New Alsace- IN
Red Cloud - NE
Westport - IN
Culbertson - NE
Humphrey - NE
New Point - IN
Republican City - NEWinnebago - NE
Doniphan - NE
Indianola - NE
North Bend - NE
Snyder - NE
Wisner - NE
Ewing - NE
Inman - NE
Oakland - NE
Spalding - NE
Wymore - NE
Fairbury - NE
Kimball - NE
Oldenburg - IN
St. Edward - NE
Archer - NE
Champion - NE
Fordyce - NE
Oakdale - NE
Stratton - NE
Arnold - NE
Chapman - NE
Franklyn - NE
Oconto - NE
Tilden - NE
Bancroft - NE
Chester - NE
Hamlet - NE
Page - NE
Trenton - NE
Bartlett - NE
Cody - NE
Hayes Center - NE
Palisade - NE
Tryon - NE
Bartley - NE
Cotesfield - NE
Hooper - NE
Petersburg - NE
Venango - NE
Batesland - NE
Creighton - NE
Hubbell - NE
Ponca - NE
Verdigre - NE
Battle Creek - NE
Crofton - NE
Huntley - NE
Primrose - NE
Walnut - NE
Belgrade - NE
Crookston - NE
Kilgore - NE
Ragan - NE
Wausa - NE
Benkleman - NE
Deshler - NE
Lamar - NE
Reynolds - NE
Wilcox - NE
Bloomfield - NE
Dodge - NE
Magnet - NE
Riverton - NE
Winnetoon - NE
Byron - NE
Dubois - NE
Merriman - NE
Rushville - NE
Wolbach - NE
Callaway - NE
Eddyville - NE
Mirage Flats - NE
Santee - NE
Wood Lake - NE
Cambridge - NE
Elgin - NE
Newman Grove - NE
Scribner - NE
Wynot - NE
Cedar Rapids - NE
Enders - NE
Nenzel - NE
St. Francis - NE
Center - NE
Falls City - NE
Niobrara - NE
St. Helena - NE
TIER ONE (or any location not in Tier 2 or 3)
TIER TWO
TIER THREE
```


<a id="p-140cbda0920ef532"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Wave/2025-07 WAVE Enterprise Pricing.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Wave/2025-07 WAVE Enterprise Pricing.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Wave/2025-07 WAVE Enterprise Pricing`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Enterprise
Tier 1
Tier 2
Tier 3        
10 Gbps
$1,451
$1,737
$1,909 
12
20%
10 Gbps (long haul)
$1,088
$1,303
$1,432 
24
22%
100 Gbps
$5,289
$6,073
$6,530 
36
27%
100 Gbps (long haul)
$3,401
$3,905
$4,199 
48
29%
400 Gbps
$13,224
$15,183
$16,326 
60
31%
400 Gbps (long haul)
$9,068
$10,411
$11,195 
Term Discounts
```


<a id="p-fe290c8b3b4852ee"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/WiFi/WiFi Pricing V3 09222023.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/WiFi/WiFi Pricing V3 09222023.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/WiFi/WiFi Pricing V3 09222023`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
WiFi Pricing V3 09222023 
 
 
Product Name 
Service 
Category 
Product Description 
NRC 
MRC 
Discount 
GPC Managed 
WiFi - Custom 
GPC-
Managed 
Includes: lease of equipment and management, Ruckus or Ubiquiti 
equipment designed by GPC. Requires GPC internet service. DIA is 
preferred, however SIA can be quoted with approval from Business 
Solutions team. 3-year minimum term. 
N/A 
Custom 
Custom 
GPC Managed 
WiFi – Small 
Business 
Includes: Up to 3 Ubiquiti indoor/outdoor APs, 1 PoE switch, and USG. 
Access Point MUST be within 250ft of switch. 
Requires GPC SIA or DIA service WITH MAX SPEED OF 500Mb (>500Mb 
requires custom solution).  
Minimum 2-year term. 
N/A 
$129.00 
Term 
GPC Managed 
WiFi – Small 
Business – 1 
additional AP 
This is an addition of ONLY 1 Ubiquiti access point to the GPC Managed WIFI 
– Small Business product.  
Used for upgrades and not sold with the initial package as 4 AP’s is the limit 
on available ports. 
N/A 
$30.00 
Term 
Business WiFi – 
WorkPass (2-
WAP) 
Self-
Managed 
This is the small business service package. It includes two (2) lease WAP and 
the service subscription. The self-managed service requires GPC SIA/DIA. 
The NRC can be waived for a 3-year or longer-term agreement contract. 
$150.00 
$40.00 
Term 
Business WiFi – 
WorkPass (1-
WAP) 
This is the micro business service package. It includes one (1) lease WAP 
and the service subscription. The self-managed service requires GPC 
SIA/DIA. The NRC can be waived for a 3-year or longer-term agreement 
contract. 
$75.00 
$27.00 
Term 
Business WiFi – 
Additional 
WAP 
This is an add-on service if customer needs to expand coverage. It includes 
one (1) lease WAP and the service subscription.  Account must have 
"Business WiFi - WorkPass". Add quantity service to increase coverage. 
N/A 
$15.00 
Term
```


<a id="p-20b0eb5a91bde6f0"></a>


### `extracted/OneDrive_1_4-10-2026 (4)/Wireless Backup & Broadband/Wireless Backup & Broadband Pricing and Plans.pdf`

- **PDF:** `/Users/ba/Desktop/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Wireless Backup & Broadband/Wireless Backup & Broadband Pricing and Plans.pdf`
- **Page images folder:** `/Users/ba/Desktop/GPC Training Material - page images/extracted/OneDrive_1_4-10-2026 (4)/Wireless Backup & Broadband/Wireless Backup & Broadband Pricing and Plans`

**Page count:** 1

#### Page 1 / 1 — `page-001.png`

```text
Wireless Internet Backup Pricing and Plans 
Product 
Carrier 
List Price 
Discount 
Data Included Overage Rate 
Remarks 
Wireless 
Backup* 
AT&T   
Verizon 
$45 MRC 
Term 
1GB 
$9 per 1GB 
Rounded up to next 1GB   
Battery 
  
$216 NRC** 
20% 
NA 
NA 
Router can hold 
one or two 8-hour 
batteries 
*Wireless Backup bandwidth is best effort and can vary by location and time of day. 
**Battery (one or two) is sold to customer for NRC. Customer will be responsible for replacing battery at end of life. 
Temporary Wireless Broadband Pricing and Plans 
Temporary 
Wireless 
Broadband* 
Verizon 
SIA/DIA MRC** 
Term 
300GB 
$14 per 5GB 
Rounded up to next 5GB 
50GB Priority 
Data*** 
*Backup bandwidth is best effort and can vary by location and time of day. 
**Temporary Service Pricing – Customer begins billing for SIA or DIA once wireless is installed. 
***Traffic that exceeds Priority Data ceiling may be deprioritized by Verizon during times of congestion. 
Permanent Wireless Broadband Pricing and Plans 
Wireless 
Broadband 
10Mbps* 
Verizon 
$148.00  
Term 
300GB 
$14 per 5GB 
Rounded up to next 5GB 
25GB Priority 
Data** 
Wireless 
Broadband  
25Mbps* 
Verizon 
$187.00  
Term 
300GB 
$14 per 5GB  
Rounded up to next 5GB 
50GB Priority 
Data** 
Wireless 
Broadband 
50Mbps* 
Verizon 
$320.00  
Term 
300GB 
$14 per 5GB  
Rounded up to next 5GB 
150GB Priority 
Data** 
*Bandwidth is best effort and can vary by location and time of day.  Verizon will block traffic above the stated rate, but there is no minimum 
guaranteed bandwidth. 
**Traffic that exceeds Priority Data ceiling may be deprioritized by Verizon during times of congestion.
```
