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
| `DSG-02` UX & hi-fi | IN_REVIEW | `docs/DSG-02-hi-fi`, [PR #6](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6) | Five screens at desktop 1440/mobile 390, state controls, local prototype, tokens, contrast notes and asset provenance. `node --check`, HTML structure check and `git show --check` PASS. Browser screenshots/visual QA NOT RUN because no browser is available. Concept A selected; G1 pending; no third-party design tool used. |
| `FE-01` Foundation | PREPARATION — visual work gated | Plan in [PR #5](https://github.com/DukTai-NDT/Nhua_Xanh/pull/5) | Technical structure/scripts are planned; no app scaffold or visual implementation until DSG-02 review and explicit G1 approval. |
| `QA-01` Test scaffolding | PREPARATION — implementation gated | Plan in [PR #5](https://github.com/DukTai-NDT/Nhua_Xanh/pull/5) | Foundation test matrix/CI plan prepared; implementation/execution depends on FE-01. |

## Approval and scope notes

- Existing client answers remain in `12-DECISIONS-RISKS.md`. New human decision D-OPS-002 selects Concept A for DSG-02; it does not approve G1.
- Q-001 remains open for the exact demo presentation of candidate collection points. Candidate research is internal and not included in a public dataset.
- Q-002 is ANSWERED per the PO comment on PR #4. DSG-02 must complete and receive human review; FE visual work remains gated until explicit G1 approval.
- Google Stitch was assessed as unnecessary for DSG-01. No Stitch access, project creation, login, or cost occurred.
- PRs #1–#6 are open and unmerged; no PR was self-approved or auto-merged. No production deployment occurred.

## Next actions

1. Human reviews PRs #1–#6. DSG-02 is ready for design review; Concept A is selected, while G1 remains pending.
2. PO/qualified reviewer reviews the five screens and prototype, gives feedback, and records explicit G1 approval before visual FE implementation.
3. FE-01 and QA-01 plans are prepared in PR #5. Start implementation only after G1; run QA-01 after FE-01 exists.
4. PO/operator continues DAT-01 verification from SP0-03 candidates. Do not publish candidates as operating/verified points.

## Checks and limitations

- PR #1: audit-only documentation; application tests NOT RUN because no app/package scripts exist.
- PR #2: local link check (14 links, 0 broken), NUL-byte check (0), `git diff --check` PASS.
- PR #3: `git diff --cached --check` PASS; app tests/build/lint/typecheck NOT RUN; documentation-only research.
- PR #4: PowerShell XML parse for both SVG files PASS; `git diff --cached --check` PASS; app checks NOT RUN; browser screenshots NOT RUN.
- PR #6: `node --check docs/design/dsg02-prototype.js` PASS; Python `HTMLParser` nesting check PASS (0 mismatches, 0 unclosed tags); `git show --check --oneline HEAD` PASS. Browser screenshot/visual QA NOT RUN because no browser executable or CUA browser surface is available; app lint/build/unit/E2E NOT RUN because no app/scripts exist.
- This snapshot does not claim independent QA of the design agent's artifacts or human acceptance of any ticket.
