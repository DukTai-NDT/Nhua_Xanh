# PO ↔ Codex operating workflow — V1

## Who owns what?

- Human representative: receives customer answers, decides approvals, updates questions/decisions, accepts or rejects PRs.
- ChatGPT PO: reads **pushed** repo/PR/files when asked, reviews status against PRD, recommends tasks or changes; does not have a direct connection to the local Codex process.
- Codex Tech Lead / Developers: work from ticket and approved specs; implement and test on a branch; push PR; write status and pending questions.
- Independent QA/design reviewer (human or separate agent): verifies behavior/visuals and attaches evidence; an agent must not pretend to provide independent QA of its own work.

## One work cycle

1. **PO assigns** a ticket from `07-ROADMAP-BACKLOG.md` or GitHub Issues with requirements and acceptance criteria. Branch name includes ticket ID.
2. **Codex researches and implements** in its own branch; updates `docs/coordination/DEV-STATUS.md` and `OPEN-QUESTIONS.md`, opens PR. No direct main pushes.
3. **Human asks ChatGPT PO** to read latest PR/branch and the status file; ChatGPT reviews against accepted scope and points out gaps.
4. **If blocked**, Codex adds a concise question in `OPEN-QUESTIONS.md` with recommendation and impact. Human answers in place and pushes; material approvals are also entered in `DECISIONS.md` with a source link. Historical answers already live in `12-DECISIONS-RISKS.md`, do not duplicate needlessly.
5. **QA/Design reviews** attach browser/test evidence. Human approves merge after gates. GitHub `main` represents integrated work, not a channel for unreviewed agent drafts.
6. **PO closes ticket** and selects next from backlog; user can ask ChatGPT: “Đọc main + PR mới nhất + docs/coordination/DEV-STATUS.md, đối chiếu với PRD/DoD, đề xuất task kế tiếp.”

## File responsibilities

| File | Editor | Rule |
|---|---|---|
| `OPEN-QUESTIONS.md` | Codex asks; human answers | One record per issue; don't re-ask already answered spec 12 |
| `DECISIONS.md` | Human / PO after approval | Only approved decisions in CONFIRMED; proposed options stay PROPOSED |
| `DEV-STATUS.md` | Codex | Latest status, exact branch/commit/PR, actual tests and blockers |
| `AGENTS.md` | Tech Lead, approved by human | Agent policy, short and repo-specific |
| `docs/nhua-xanh-hanoi-v1-spec/*` | PO via reviewed PR | Existing baseline; don't silently rewrite |

## Branch / PR minimum

- Pattern: `feat/TICKET-short-description`, `fix/TICKET-...`, `docs/TICKET-...`, `chore/TICKET-...`.
- One ticket per PR, no unreviewed merge.
- PR must name the ticket, summarize user value, list exact test commands and results, identify preview/screenshots, link design/data evidence, and show blockers.
- When `package.json` exists, CI should eventually validate lint, typecheck, tests, data validation, build. Until then label unavailable checks **NOT RUN**, never PASS.
- GitHub Issues are optional at setup time; use backlog ticket IDs immediately without duplicating the entire backlog in more documents.

## First sprint sequence

1. `SP0-01`: Tech Lead audits repo, README root links/encoding, existing scripts and branch; posts report. No app creation inside an audit-only PR.
2. `SP0-02`: Human reviews existing `12-DECISIONS-RISKS.md` answers and marks pending approvals; avoid reasking answered questions.
3. `SP0-03`: Data Steward researches actual Hanoi leads, records candidate source/evidence; does not publish locations as verified.
4. `DSG-01`: Design Agent prepares **two distinct Modern Eco Editorial concepts** using free tools/assets, not generic SaaS cards.
5. `FE-01`: Once foundation direction approved, FE creates Next.js foundation; then CI/QA scaffolding.

## Client demo is not production release

Demo may use clearly labelled illustrated/generated visuals and explicitly unverified candidate points if the human signs off on the wording. Production publication needs the verification, rights, accuracy and QA gates in specs 05/08/10. No agent may silently change this boundary.

## Copy-paste prompt for Codex (first assignment)

> Read AGENTS.md and the product spec pack. Work as Tech Lead on ticket SP0-01. Inspect this exact repository and local Git state; verify there is no Next.js app yet, inspect README links and encoding, and identify missing scripts/CI. Do not bootstrap the app or alter product requirements in this audit. On branch `chore/SP0-01-repo-audit`, update `docs/coordination/DEV-STATUS.md` with evidence, report test commands as PASS/FAIL/NOT RUN, log any blockers in `OPEN-QUESTIONS.md`, and create a small PR for review. Do not merge or push directly to main.
