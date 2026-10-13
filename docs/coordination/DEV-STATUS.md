# Development status — Nhựa Xanh Hà Nội

> Latest repo snapshot for PO/human review. Tests are only reported as PASS when actually run.

## Latest verified repository baseline

- Reviewed at: 2026-10-13
- Repository: `DukTai-NDT/Nhua_Xanh`
- Base branch / HEAD: `main` / `bd3324bb5275b5e5d3d62684aeb9e63eb1f4b6b4` (also `origin/main` at audit start)
- Audit branch: `chore/SP0-01-repo-audit`
- Tracked contents: `AGENTS.md`, master plan, product spec pack (README + 13 specs), coordination docs, and `.github/pull_request_template.md`.
- Untracked at audit start: `INSTALL.md`; preserved and excluded from this ticket.
- Application source: no `src/`, `app/`, `pages/`, `public/`, or `tests/` directories.
- Project/dependency configuration: no `package.json`, npm/pnpm/yarn/bun lockfile, `tsconfig.json`, Next config, Tailwind/PostCSS config, ESLint config, Vitest/Playwright config, or declared scripts/dependencies. Therefore installed environment versions (Node `v22.16.0`, npm `10.9.2`) do not establish project dependency versions.
- CI: no `.github/workflows/` files.
- Existing implementation: none found. No routes, components, data schema, map, validation, SEO implementation, tests, or deployment configuration.
- Git baseline correction: previous status recorded HEAD `1f8bb3de…`; current `main` is `bd3324bb…` (2026-10-13). This audit used the actual checked-out tree.

## README audit

- Root `README.md` is valid UTF-8 through its product-pack content, then ends with 13 NUL bytes and a NUL-interleaved `# Nhua_Xanh` fragment (UTF-16-like bytes). This malformed trailing fragment is the encoding anomaly.
- The 14 Markdown links to specs/decision log use root-relative targets such as `01-PRD.md`; all resolve as broken because the files are under `docs/nhua-xanh-hanoi-v1-spec/`.
- The product spec pack README uses correct relative links within its directory.
- README was inspected, not modified in this audit.

## SP0-01 report

- Ticket / role: `SP0-01 Repo audit` / Tech Lead
- Status: IN_REVIEW
- Branch / commit / PR: `chore/SP0-01-repo-audit` / `c0e90b7` (audit commit; final status-link commit follows) / [PR #1](https://github.com/DukTai-NDT/Nhua_Xanh/pull/1)
- Scope: inspect repository and baseline only; no application code was created and product requirements were not changed.
- Tests/build/lint/typecheck/unit/E2E: **NOT RUN**. There is no app, package manifest, dependency installation, or scripts to execute. This is not a PASS.
- Informational environment commands: `node --version` → `v22.16.0`; `npm --version` → `10.9.2`.

## Comparison to product baseline

- PRD P0 routes and capabilities (`/`, `/loai-nhua`, resin detail, `/phan-loai`, `/ban-do`, approved static data, release quality): **not implemented**.
- Architecture baseline (Next App Router, strict TypeScript, Tailwind v4, typed static data, Leaflet client map + server/list fallback, SEO, validation/tests/CI): **not initialized**; no dependencies or versions are declared.
- Roadmap: `SP0-01` is the first ticket; `FE-01 Foundation` is next in the technical sequence and depends on `SP0-01` and `DSG-01`. `DSG-01` design contract/G1 is not evidenced in this repository. FE-01 acceptance summary is Next App Router + TypeScript + Tailwind tokens, responsive Header/Footer, 404 and SEO base. No foundation implementation was started here.

## Risks and blockers

- High: README links prevent navigation from repository root; malformed trailing NUL/UTF-16-like bytes can confuse tooling/readers.
- High: repository has no runnable application or declared dependency baseline, so there is no app-level test/build baseline.
- High / release critical: no verified collection-point dataset or app implementation; public map cannot claim working/verified points. Existing Q-001 covers candidate point labels; do not re-ask answers already recorded in spec 12.
- High: design details and G1 approval are absent; FE-01's `DSG-01` dependency is unmet. See Q-002 in `OPEN-QUESTIONS.md`.
- Medium: previous DEV-STATUS HEAD was stale relative to actual main.
- Existing `INSTALL.md` is untracked user material and was left untouched.

## Recommended next work

1. PO/design completes `DSG-01` and records the selected concept/design contract and G1 approval. Keep `Modern Eco Editorial` as the confirmed direction; no agent should mark G1 approved.
2. Then assign `FE-01 Foundation` on `feat/FE-01-foundation`: initialize the agreed Next App Router/strict TypeScript/Tailwind baseline with compatible pinned dependencies and committed lockfile; establish semantic responsive Header/Footer, skip link/focus/reduced-motion baseline, 404, Vietnamese metadata/SEO base, and token mapping from approved design. Keep scope to foundation; do not build home/library/sorting/map pages or introduce backend/tracking.
3. Define available scripts for lint, typecheck, unit, and build alongside the scaffold; add only foundation-proportional checks. QA scaffolding is separately tracked as `QA-01` and depends on FE-01.
4. Capture desktop/mobile screenshots for implemented UI and document asset/font provenance. Do not claim tests/screenshots until produced.
5. Track verified point research through `SP0-03`/`DAT-01`; never ship candidate mock points as verified data.

## SP0-01 handoff

- Files changed: `docs/coordination/DEV-STATUS.md`, `docs/coordination/OPEN-QUESTIONS.md`
- Tests: application checks NOT RUN (reason above).
- Screenshots/preview: not applicable to repository audit.
- Design/content approvals: none requested or granted by this audit.
- Questions: `Q-001` remains open for the candidate demo point presentation rule; `Q-002` records the pending design/G1 contract needed by FE-01.
- PR: [#1 — repository audit and FE-01 recommendation](https://github.com/DukTai-NDT/Nhua_Xanh/pull/1), open for PO review.
