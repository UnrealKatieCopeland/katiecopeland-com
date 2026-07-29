
## 2026-07-27: Federal-Case Portal Rebuild (Manus)
- Executed `WEB_UPGRADE_BRIEF_federal-case_2026-07-27.md`
- Rebuilt `federal-case/index.html` as a counsel-grade vehicle page with 8 ordered sections.
- Verified all 5 doctrinal citations against official opinions; hosted all 5 PDFs locally in `federal-case/documents/case-law/` with clean slugs and linked directly from the doctrinal map.
- Updated the "candor box" to properly frame the expert report as a causation bridge and shield against the "capable lawyer" defense, not a concession.
- Corrected factual attributions regarding the lack of an ADA coordinator (DA's office and Assistant County Administrator quotes).
- Added counsel portal link to the civic `tarrant-county.html` page.
- **Deferred:** Full 226-page packet and specific record documents bearing children's names remain off the public site pending Katie's explicit approval for unredacted hosting.

### 2026-07-27: Federal-Case Portal Redesign (Phase 2)
- Rebuilt `federal-case/index.html` to correctly use the shared CSS system (`style.css` + `refinements.css`) and match the site's aesthetic (Cormorant Garamond/Source Sans 3; navy, gold, crimson, parchment).
- Corrected the candor box to completely remove "commissioning an expert" language, reframing the structural claim around the county's written admissions, the SSA adjudication (onset June 8, 2023), and documented medical collapses.
- Ensured all 5 graphics are properly embedded and all links have correct contrast against both light and navy backgrounds.
- Committed and pushed to GitHub (commit be84559).

---

## SESSION LOG — July 27–28, 2026 (Manus — extended session)

### Site Changes Completed

**`katiecopeland.com/federal-case/` (portal)**
- Hero alignment fixed: case number subtitle and all hero content consistently centered
- SCOTUS docket link replaced with live Supreme Court URL (auto-updates with docket activity)
- 8 new PDFs added to Document Packet (5th Circuit orders, SCOTUS filings, ADA statutes)
- ADARequestsandRulings.pdf withheld from public hosting (children's names) — listed as "available on request"
- Visual Exhibits section rebuilt: 4-graphic curated 2-column grid + collapsed "Additional Exhibits" accordion
- "How to Help" section redesigned with navy header band and tiered ask structure (easiest first)
- All graphics converted to accessible lightbox (click-to-zoom, keyboard navigable, screen-reader compatible)
- All image alt text upgraded to WCAG 2.1 AAA standard (full verbatim descriptions)
- All graphics constrained to max-height: 70vh — no more full-height portrait scrolling
- **AAA color compliance (DESIGN_RULES_AAA.md, 7/27/26):** All gold text on navy retired — hero subtitle, fc-notice strong/a, fc-open-question strong, fc-footer-note a, case-symbol — replaced with white (#F7F0E4) or cream (#C9D4E0)
- Timeline entry updated: "Docketing fee ($605) paid July 28, 2026 — appeal fully active. Merits briefing schedule pending."
- SCOTUS status everywhere: "Application denied (Alito) June 11 · Rule 22.4 Renewal submitted to Justice Sotomayor July 1, 2026 — **pending**"

**`katiecopeland.com/federal-case/why-this-matters/` (NEW — built this session)**
- Public-facing shareable landing page for DRBA and general audiences
- Hero: four stat boxes (33 years / 0 records / 8 courts / 1 judge), two CTAs, live status bar
- "For the Disability Rights Bar" section near top: open question framed precisely, Haynes dissent card, three tiered asks
- "One Question, Eight Stops" referral loop interactive HTML embedded
- "What the Evidence Shows" section: Open Doors/Closed Proceedings, Closed Circuit, System Has No Infrastructure
- Yarbrough quote card (verified verbatim) displayed as graphic
- Contact form (Formspree — **ACTION NEEDED: replace YOUR_FORM_ID with real Formspree ID to activate**)
- Share buttons: X, LinkedIn, email, copy-link
- **AAA color compliance:** status bar strong labels, hero eyebrow, stat numbers, question-band label, footer links, DRBA CTA band heading — all changed from gold to white or #C9D4E0

**`pages/scotus-25a1368.html`**
- noindex, nofollow meta tag added
- Status block updated: Alito denial June 11 + Sotomayor renewal July 1 + "pending" in crimson bold

**PDF links fixed:** Crawford, Luke, Strife case law PDFs — filename mismatch corrected

**New graphics added to repo:**
- IAmNotAware-Yarbrough-verbatim.webp (verified verbatim quote card)
- OpenDoorsClosedProceedings.webp (Tennessee v. Lane citation)
- ClosedCircuit.webp (Title II closed loop diagram)
- SystemHasNoInfrastructure.webp (forensic three-column table with 4 verbatim quotes)
- TheLawHasBeenBuilding-disability-bar.webp (amicus pitch graphic — 5 precedents, vehicle, litigant, change)
- OneQuestionEightStops.webp (referral loop infographic)
- referral-loop-interactive.html (interactive version)

### Emails Written — `_COMMAND_CENTER/Final_Outreach_Emails_2026-07-27.md`

1. **DRBA listserv post** — Subject: "Co-counsel / amicus inquiry — Title II exhaustion trap, 5th Cir. No. 26-10389, shadow docket pending" — **Send Tuesday 8:30–9:00 AM**
2. **Ferleger response** — Four-layer expert record disclosed; CART framed as one item not the case; Sotomayor filing clarified as Rule 22.4 renewal; housing case introduced at end — **Send anytime**
3. **Sarah Lorr follow-up** — Send after listserv post goes out (Katie already replied to her welcome note)

### Research Completed — `_COMMAND_CENTER/Targeted_Outreach_Strategy_ADA_Title_II.md`
Full practitioner outreach list: Jasmine Harris, Karen Tani, Samuel Bagenstos, Eve Hill, Shira Wakschlag, DRA, Disability Rights Texas (Brian East), UT Austin Disability Rights Clinic

---

## CASE STATUS — July 28, 2026

| Venue | Case No. | Status |
|---|---|---|
| Fifth Circuit | No. 26-10389 | Merits appeal active — $605 fee paid 7/28/26 |
| U.S. Supreme Court | No. 25A1368 | Rule 22.4 Renewal before Justice Sotomayor — **PENDING** |
| Texas Supreme Court | No. 26-0537 | Window open — original mandamus + petition for review |
| Texas 2nd Court of Appeals | — | Affirmed 7/9/26 · Motion for rehearing filed (confirm deadline status) |
| N.D. Texas (ADA suit) | No. 4:25-cv-00890-O | Dismissed at screening — appealed to 5th Circuit |
| N.D. Texas (housing suit) | — | FCR 7/16/26 — merits still live |

---

## KEY EXPERT RECORD (for Ferleger and future counsel)

| Layer | Source | Key Finding |
|---|---|---|
| Neuropsychological evaluation | Dr. Christian LoBue, UT Southwestern, March 2025 | Pre-morbid 84th percentile; speeded word retrieval latency **1st percentile** |
| CNS Vital Signs computerized assessment | July 7, 2025 | Reaction Time **<2nd percentile (Very Low)**; Complex Attention **4th percentile** |
| QEEG neuroimaging | Dr. Johnson, July 2025 | **99.0% probability of mTBI** |
| SSA ALJ determination | April 10, 2026 | Total disability onset **June 8, 2023** — covers every unaccommodated proceeding |

---

## DESIGN RULES (standing — all pages, all AI)
Per DESIGN_RULES_AAA.md (7/27/26 — Katie's standing rule):
- Gold (#D9B36C) = borders, accents, chips ONLY — **never text on navy**
- Text on navy = white (#F7F0E4) or cream (#C9D4E0)
- Body text ≥ 7:1 contrast; large text ≥ 4.5:1
- No dashed/broken lines for essential content
- Run axe DevTools on katiecopeland.com pages before each push
- The irony of an inaccessible accessibility case site is not one we host

---

## PENDING / FUTURE WORK
- [ ] **Formspree ID** → activate contact form on why-this-matters (30-second fix)
- [ ] Confirm Texas 2nd Court of Appeals rehearing deadline status
- [ ] `/federal-case/for-counsel/` — private technical memo page for individual outreach (not publicly linked)
- [ ] Confirm `tarrant-county.html` indexing preference (currently index, follow)
- [ ] Add Sarah Lorr's *Disabling Families* (76 Stan. L. Rev. 1255) to Doctrinal Map as scholarship reference
- [ ] Add two-layer § 35.107 framing note to doctrinal map (per se violation vs. deliberate indifference evidence — per Gemini validation)
- [ ] Children's names rule: ADARequestsandRulings.pdf — confirm if redacted version exists for public hosting
