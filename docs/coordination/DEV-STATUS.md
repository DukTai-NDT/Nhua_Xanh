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
| `FE-01` Foundation | IN_REVIEW | `feat/FE-01-foundation`, [PR #7](https://github.com/DukTai-NDT/Nhua_Xanh/pull/7), commit `0495e13db8dca4e3d4cdd2042fa63093975d6cb3` | Next.js App Router, strict TypeScript, Tailwind v4, responsive shell/Header/Footer, skip link, focus/reduced motion, 404 and Vietnamese metadata. Lint/typecheck/build/audit PASS; Chromium smoke at 1440/390 and axe PASS; screenshots attached. Human review pending. |
| `QA-01` Test scaffolding | IN_REVIEW | `qa/QA-01-test-scaffolding`, [PR #8](https://github.com/DukTai-NDT/Nhua_Xanh/pull/8), commit `da34d94a237ba07c849087a8c818f904d0aaad04` | Vitest/Testing Library, Playwright/axe, CI workflow. Local npm ci/lint/typecheck/unit 4/4/build/E2E 4/4/audit PASS. PR is stacked on PR #7; GitHub Actions has not run yet. Independent human QA/review pending. |

## Sprint W2 progress (updated 2026-10-13)

| Ticket | Status | Branch / PR | Evidence, dependencies and next action |
|---|---|---|---|
| `CNT-01` Resin guides | IN_REVIEW — content approval pending | `docs/CNT-01-resin-guides`, [PR #9](https://github.com/DukTai-NDT/Nhua_Xanh/pull/9), commit `30f656d0ebaaee4bb0d463139e2f3cff20d698b8` | Seven sourced Vietnamese drafts with caveats and provenance. No PR comments/reviews found at this snapshot. Requires PO + domain reviewer approval before public copy or FE-03 integration. |
| `CNT-02` Local sorting | IN_REVIEW — legal/content approval pending | `docs/CNT-02-hanoi-sorting`, [PR #10](https://github.com/DukTai-NDT/Nhua_Xanh/pull/10), commit `73f3bd0623dd4005f2ab7b84cd85f36d30d48919` | Draft based on the official Hanoi decision; no PR comments/reviews found. Requires legal/domain verification and PO copy approval before FE-04 integration. |
| `FE-02` Home | IN_REVIEW | `feat/FE-02-home`, [PR #11](https://github.com/DukTai-NDT/Nhua_Xanh/pull/11), commit `4e617885d7da0b7122c497018990c9ffeeb59422` | Concept A/G1 home, seven resin-code index, cautious three-step preview, and explicit zero-verified-points state. Depends on FE-01/QA-01 PRs #7/#8; stacked on #8. `npm ci`, format, lint, typecheck, unit 4/4, build, Chromium E2E 4/4 with axe 0 violations (home desktop/mobile and 404; all 3 CTAs), audit and diff check PASS. Screenshots and command matrix in `docs/FE-02-home.md` and `docs/evidence/FE-02/`. Author checks only; no CI result or independent/PO acceptance yet. |
| `FE-03` Plastic library | BLOCKED — awaits CNT-01 approval | Not started | Backlog requires approved content, exactly seven detail pages with stable routes and approved examples/sources. Do not embed pending PR #9 copy. Resume after PO/domain approval is recorded. |
| `FE-04` Sorting guide | BLOCKED — awaits CNT-02 approval | Not started | Backlog requires approved Hanoi-specific copy. Do not embed pending PR #10 draft. Resume after legal/domain and PO approval is recorded. |

### W2 dependency and review order proposal (not approval)

1. Review and integrate the W1/design chain in dependency order: PR #4 (DSG-01) → PR #6 (DSG-02; G1 approval is only the handoff gate) → PR #7 (FE-01) → PR #8 (QA-01). Keep the established stacked bases until parent changes are integrated; no agent merges or approves.
2. Review PRs #9 (CNT-01) and #10 (CNT-02) with appropriate human domain/legal reviewers. FE-03/FE-04 remain blocked until the corresponding approved content is recorded.
3. Review PR #11 (FE-02) after its #7/#8 base chain; its current GitHub status is open/unmerged. Re-check mergeability after parent branches are integrated.
4. Once CNT-01 and CNT-02 approvals are recorded, start FE-03 and FE-04 respectively on ticket branches; keep them independent where dependencies permit.

No PRs #7–#11 had submitted reviews at this snapshot; #9 and #10 had no issue comments. GitHub Actions remote status for #8/#11 remains unverified. No self-approval, merge, or production deployment occurred.

## Approval and scope notes

- Existing client answers remain in `12-DECISIONS-RISKS.md`. D-OPS-002 records Concept A selection; D-OPS-003 records PO's G1 approval for the exact DSG-02 commit with mandatory browser QA conditions.
- Q-001 remains open for the exact demo presentation of candidate collection points. Candidate research is internal and not included in a public dataset.
- Q-002 is ANSWERED. G1 is approved per the PO comment on PR #6; G2–G5 and DSG-02/FE/QA acceptance remain open.
- Google Stitch was assessed as unnecessary for DSG-01. No Stitch access, project creation, login, or cost occurred.
- PRs #1–#11 are open and unmerged; PR #4 remains draft. PR #8 is intentionally stacked on FE-01 PR #7; PR #11 is stacked on PR #8. Current PR review/merge details and W2 dependencies are recorded below. No PR was self-approved or auto-merged. No production deployment occurred.

## Suggested review / merge order (not approval)

1. Review PR #1 coordination/audit updates; PR #2 README repair, PR #3 sourced-candidate research and PR #5 planning are independent and may be reviewed in parallel.
2. PR #5 is a planning document and may merge independently. Review/merge PR #4 DSG-01 before PR #6 DSG-02 because DSG-02 depends on its selected concept.
3. Review/merge PR #6 after PR #4. G1 is already recorded against its exact commit, but that comment is not PR approval or merge.
4. Review PR #7 FE-01 against the G1-approved design after PR #4/#6 design review. PR #7 is based on `main`; do not merge it before design review and required human checks are resolved.
5. PR #8 QA-01 uses PR #7 as its base. Review it after FE-01 review; retarget/rebase only after PR #7 is integrated. Its local tests PASS, but GitHub Actions and independent review remain pending.

## Next actions

1. Review/integrate design and foundation dependencies in order: PR #4 → #6 → #7 → #8. PR #6's G1 comment is not PR approval or merge; no agent merges or approves.
2. Review PRs #9/#10 with human domain/legal reviewers. Until written content approval is recorded, FE-03/FE-04 must not use their draft copy.
3. Review PR #11 after its FE-01/QA-01 base chain; the home implementation is ready for review, not accepted.
4. PO/operator continues DAT-01 verification from SP0-03 candidates. Do not publish candidates as operating/verified points.

## Checks and limitations

- PR #1: audit-only documentation; application tests NOT RUN because no app/package scripts exist.
- PR #2: local link check (14 links, 0 broken), NUL-byte check (0), `git diff --check` PASS.
- PR #3: `git diff --cached --check` PASS; app tests/build/lint/typecheck NOT RUN; documentation-only research.
- PR #4: PowerShell XML parse for both SVG files PASS; `git diff --cached --check` PASS; app checks NOT RUN; browser screenshots NOT RUN.
- PR #6: `node --check docs/design/dsg02-prototype.js` PASS; Python `HTMLParser` nesting check PASS (0 mismatches, 0 unclosed tags); `git show --check --oneline HEAD` PASS. Browser screenshot/visual QA NOT RUN because no browser executable or CUA browser surface is available; app lint/build/unit/E2E NOT RUN because no app/scripts exist.
- G1: PO comment on PR #6 explicitly approves commit `70234846095737d6d09657bda5025601631b9a29`; approval is limited to design handoff and requires FE visual QA. It is not a QA/accessibility/UAT/release approval.
- PR #7 / FE-01 at commit `0495e13db8dca4e3d4cdd2042fa63093975d6cb3`: `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm audit`, `git diff --check` PASS; manual production-build Chromium/axe smoke PASS on desktop 1440/mobile 390 and 404. Screenshots are in `docs/evidence/FE-01/`. Feature routes and their loading/empty/error states are outside FE-01.
- PR #8 / QA-01 at commit `da34d94a237ba07c849087a8c818f904d0aaad04`: `npm ci`, lint, typecheck, unit (4/4), build, E2E (4/4), `npm audit`, `git diff --check` PASS. Chromium axe has 0 violations for covered home desktop/mobile and 404. CI workflow is configured but remote GitHub Actions has not run; this is not independent QA.
- PR #11 / FE-02 at commit `4e617885d7da0b7122c497018990c9ffeeb59422`: `npm ci`, format, lint, typecheck, unit (4/4), build, Chromium E2E (4/4), `npm audit`, `git diff --check` PASS. Axe reports 0 violations on home desktop/mobile and 404; E2E asserts all three section CTAs. Screenshots and detailed test commands are committed under `docs/evidence/FE-02/` and `docs/FE-02-home.md`. CI remote and independent/PO review remain pending.
- This snapshot does not claim independent QA of the design agent's artifacts or human acceptance of any ticket.
