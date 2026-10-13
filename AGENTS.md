# AGENTS.md — Nhựa Xanh Hà Nội

> Instructions for Codex and other coding agents working in this repository.
> Last updated: 2026-10-13. Product language: Vietnamese.

## 1. Project context

- Product: a Vietnamese-language environmental education website for students, featuring plastic resin information, sorting guidance, and a Hanoi collection-point map.
- Current deliverable: **customer-facing demo V1, not verified production service**.
- Approved visual direction: **Modern Eco Editorial** throughout the product: light editorial composition, nature-inspired palette, distinctive typography, restrained animation. Avoid generic AI SaaS visuals and copying assets/layouts from the reference site.
- Preferred engineering baseline: Next.js App Router, TypeScript strict, Tailwind CSS, static-first data, Leaflet for map. No separate backend, CMS, login, or user tracking unless a human approves a scope change.
- Working brand name: Nhựa Xanh Hà Nội; final name/logo/domain are not yet approved.

## 2. Mandatory reading (source of truth)

Before code changes, read these repository files:

1. `docs/nhua-xanh-hanoi-v1-spec/README.md` — document index and scope summary.
2. `docs/nhua-xanh-hanoi-v1-spec/01-PRD.md` — product requirements.
3. `docs/nhua-xanh-hanoi-v1-spec/02-DESIGN-SYSTEM.md` — design direction and constraints.
4. `docs/nhua-xanh-hanoi-v1-spec/06-TECH-ARCHITECTURE.md` — technical contract.
5. `docs/nhua-xanh-hanoi-v1-spec/07-ROADMAP-BACKLOG.md` — ticket IDs, DoR/DoD and dependencies.
6. `docs/nhua-xanh-hanoi-v1-spec/08-QA-TEST-PLAN.md` — tests and release gates.
7. `docs/nhua-xanh-hanoi-v1-spec/09-AI-TEAM-PLAYBOOK.md` — team rules.
8. `docs/nhua-xanh-hanoi-v1-spec/12-DECISIONS-RISKS.md` — existing human answers; do not ask answered questions again.
9. `docs/coordination/WORKFLOW.md`, `OPEN-QUESTIONS.md`, `DECISIONS.md`, `DEV-STATUS.md` when present.

Read additional specs by task: Content `04`, Map `05`, Release `10`, Design tools `11`, References `13`.

**Priority when instructions disagree:** explicit, recent human approval in `docs/coordination/DECISIONS.md` or linked GitHub Issue > previously approved decisions in `12-DECISIONS-RISKS.md` > PRD / acceptance criteria > agent proposals. Do not silently override any conflict: stop and record a question. Code, mockups, or agent guesses never constitute customer approval.

## 3. Safety and data integrity

- Never invent collection-point addresses, coordinates, operating hours, accepted materials, partner approvals, facts, or test results.
- Data found online can be a **candidate**; it is not automatically **verified operating data**. For demo builds, unverified sample points must be conspicuously labelled and kept out of any public production publication data set. Follow `05-COLLECTION-POINTS.md`.
- Explain uncertainty in educational content; do not assert all plastics carrying a resin code are recyclable in Hanoi.
- Generated imagery is permitted for demo illustration, but identify it as illustrative. No copyrighted third-party site assets without permission.
- No personal-data collection, secrets in repo, external analytics, live APIs, production deployment or paid services without human sign-off.
- Treat this repository as public until settings are actually changed; never commit confidential customer material.

## 4. Execution contract per ticket

1. Inspect repository state: branch, `git status`, project files, existing code, scripts and lockfile. **Never assume Next.js has already been initialized.**
2. Identify the ticket ID from `07-ROADMAP-BACKLOG.md` or a GitHub Issue; state scope, dependencies, exact acceptance criteria, and unresolved approvals.
3. For visual work, request/check approved design gate G1 before pixel-level implementation; for research/data work, do not upgrade `CANDIDATE` to `VERIFIED` without evidence and human review.
4. Work on a ticket-specific branch (`chore/SP0-01-repo-audit`, `feat/FE-01-foundation`, etc.). Do not push straight to `main`. Preserve other agents' edits; make small focused changes.
5. Add tests proportional to the change. Run only commands actually available, report exit codes honestly. If codebase is not initialized, explicitly mark build/lint/test as NOT RUN rather than PASS.
6. Provide screenshots (desktop and mobile) for UI work, and document asset provenance where relevant.
7. Update `docs/coordination/DEV-STATUS.md` and any question in `docs/coordination/OPEN-QUESTIONS.md`. Record newly approved human decisions in `docs/coordination/DECISIONS.md` with evidence.
8. Open a PR linking the ticket, with changes, tests, blockers, risks, and review checklist; request human approval before merging. **Do not self-approve G0–G5, do not auto-merge, and do not deploy production.**

## 5. Agent roles

- Tech Lead: audit, architecture, PR integration, cross-agent conflict resolution.
- Design Agent: visual research, distinct editorial art direction, Figma/wireframes/mobile states, asset rights, design QA. No final design without human approval.
- Content/Data Steward: resin and sorting fact checks, candidate point sources, classification and verification evidence.
- FE Agent: implementation of responsive pages, accessibility, SEO, performance.
- Map Agent: typed dataset, Leaflet map **and accessible list fallback**, filters, error/empty states.
- QA Agent: independent functional, E2E, mobile, accessibility and visual checks. Evidence required.
- PO/human: scope approvals, priorities, design sign-off, customer decisions, UAT and release go/no-go.

One AI may assume multiple roles in sequence, but must clearly mark role switching and must not claim independent review of its own work.

## 6. Initial assignment

**First ticket is `SP0-01 Repo audit`**, not immediate feature coding. Inspect `main` and report what really exists. As of the 2026-10-13 inspection, this repository contains the PO documents but no Next.js source or package manifest. Confirm that observation on your working branch before starting implementation. Include the README link/encoding anomaly in the audit. Then propose `FE-01 Foundation` as the next PR, subject to design contract and PO decisions.

## 7. Human / ChatGPT PO synchronization

GitHub is the shared record, **not a live sync with ChatGPT or the local Codex terminal**. The human should ask ChatGPT PO to read the latest pushed branch/PR plus `DEV-STATUS.md`; ChatGPT cannot see local unpushed changes. Use `OPEN-QUESTIONS.md` for short, batched questions; PO answers once in the same file. Use the GitHub PR discussion for review details and approval evidence.
