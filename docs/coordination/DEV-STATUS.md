# Development status — Nhựa Xanh Hà Nội

> Latest coordination snapshot for PO/human review. An open PR is not accepted or merged; tests are reported as PASS only when actually run.

## Verified baseline

- Reviewed: 2026-10-13
- Repository: `DukTai-NDT/Nhua_Xanh`
- Main HEAD at audit: `bd3324bb5275b5e5d3d62684aeb9e63eb1f4b6b4`
- Application baseline: no Next.js app, package manifest/lockfile, declared scripts, tests, or CI workflows on `main`.
- Existing untracked user file: `INSTALL.md`; preserved and excluded from all sprint branches.
- Root README issue: 14 broken doc links and a malformed NUL-interleaved trailing fragment. Separate repair is proposed in PR #2.
- Application lint/typecheck/unit/E2E/build: **NOT RUN**; no app or scripts exist.

## Sprint W1 ticket status

| Ticket | Status | Branch / PR | Evidence and next action |
|---|---|---|---|
| `SP0-01` Repo audit | IN_REVIEW | `chore/SP0-01-repo-audit`, [PR #1](https://github.com/DukTai-NDT/Nhua_Xanh/pull/1) | Audit confirms the baseline above. PR #1 has no reviews, comments, or inline review threads as of 2026-10-13; human review remains pending. App checks NOT RUN. |
| README follow-up | IN_REVIEW | `fix/readme-links-encoding`, [PR #2](https://github.com/DukTai-NDT/Nhua_Xanh/pull/2) | All 14 links resolve; 0 NUL bytes remain; `git diff --check` PASS. Documentation-only; app checks NOT RUN. |
| `SP0-03` Data discovery | IN_REVIEW | `research/SP0-03-hanoi-candidates`, [PR #3](https://github.com/DukTai-NDT/Nhua_Xanh/pull/3) | 18 sourced candidate leads from a 2026 Coca-Cola Vietnam program page. `SOURCED=18`, `VERIFIED=0`, `PUBLISHED=0`; not map-ready. `git diff --cached --check` PASS. DAT-01 needs human/operator verification and reuse permission. Q-001 remains open. |
| `DSG-01` Art direction | IN_REVIEW | `docs/DSG-01-modern-eco-concepts`, [draft PR #4](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4) | Concept A — “Sổ tay vật liệu” selected by PO in the PR #4 comment and recorded as D-OPS-002. Concept B remains reference only. DSG-01 pack is still in review; this selection is not G1. |
| `DSG-02` UX & hi-fi | IN_REVIEW — G1 APPROVED | `docs/DSG-02-hi-fi`, [PR #6](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6) | PO approved G1 for commit `70234846095737d6d09657bda5025601631b9a29` in [PR #6 comment](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6#issuecomment-6139240456). Browser visual QA remains mandatory in FE/QA. |
| `FE-01` Foundation | IN_PROGRESS | `feat/FE-01-foundation`; PR pending | G1 handoff approved. Implement Next.js App Router, strict TypeScript, Tailwind v4, tokens, responsive Header/Footer, skip link, focus/reduced motion, 404 and Vietnamese metadata. Browser QA at 1440/390 is mandatory. |
| `QA-01` Test scaffolding | READY AFTER FE-01 BASELINE | Plan in [PR #5](https://github.com/DukTai-NDT/Nhua_Xanh/pull/5); implementation branch pending | Start after FE-01 package/scripts exist; add CI, unit/E2E/a11y tooling and independently review the foundation. |

## Approval and scope notes

- Existing client answers remain in `12-DECISIONS-RISKS.md`. D-OPS-002 records Concept A selection; D-OPS-003 records PO's G1 approval for the exact DSG-02 commit with mandatory browser QA conditions.
- Q-001 remains open for the exact demo presentation of candidate collection points. Candidate research is internal and not included in a public dataset.
- Q-002 is ANSWERED. G1 is approved per the PO comment on PR #6; G2–G5 and DSG-02/FE/QA acceptance remain open.
- Google Stitch was assessed as unnecessary for DSG-01. No Stitch access, project creation, login, or cost occurred.
- PRs #1–#6 are open and unmerged; PR #4 remains draft. GitHub currently reports them mergeable. No PR was self-approved or auto-merged. No production deployment occurred.

## Suggested review / merge order (not approval)

1. Review PR #1 coordination/audit updates; PR #2 README repair and PR #3 sourced-candidate research are independent and may be reviewed in parallel.
2. PR #5 is a planning document and may merge independently. Review/merge PR #4 DSG-01 before PR #6 DSG-02 because DSG-02 depends on its selected concept.
3. Review/merge PR #6 after PR #4. G1 is already recorded against its exact commit, but that comment is not PR approval or merge.
4. FE-01 is based on `main` and references the G1-approved handoff; its PR can be reviewed while PR #6 awaits human merge. Do not merge FE-01 before the design PRs and required reviews are resolved.

## Next actions

1. Human reviews PRs #1–#6 and selects a merge order; no agent merges or approves them.
2. FE-01 implements the G1-approved handoff and captures browser evidence at 1440/390; G1 does not waive visual QA.
3. Start QA-01 after FE-01 package/scripts exist; add CI and independent browser/accessibility checks.
4. PO/operator continues DAT-01 verification from SP0-03 candidates. Do not publish candidates as operating/verified points.

## Checks and limitations

- PR #1: audit-only documentation; application tests NOT RUN because no app/package scripts exist.
- PR #2: local link check (14 links, 0 broken), NUL-byte check (0), `git diff --check` PASS.
- PR #3: `git diff --cached --check` PASS; app tests/build/lint/typecheck NOT RUN; documentation-only research.
- PR #4: PowerShell XML parse for both SVG files PASS; `git diff --cached --check` PASS; app checks NOT RUN; browser screenshots NOT RUN.
- PR #6: `node --check docs/design/dsg02-prototype.js` PASS; Python `HTMLParser` nesting check PASS (0 mismatches, 0 unclosed tags); `git show --check --oneline HEAD` PASS. Browser screenshot/visual QA NOT RUN because no browser executable or CUA browser surface is available; app lint/build/unit/E2E NOT RUN because no app/scripts exist.
- G1: PO comment on PR #6 explicitly approves commit `70234846095737d6d09657bda5025601631b9a29`; approval is limited to design handoff and requires FE visual QA. It is not a QA/accessibility/UAT/release approval.
- This snapshot does not claim independent QA of the design agent's artifacts or human acceptance of any ticket.
