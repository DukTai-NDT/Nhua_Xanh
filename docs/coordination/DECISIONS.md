# Incremental decision log

The **historical product decisions and user answers** are in [`../nhua-xanh-hanoi-v1-spec/12-DECISIONS-RISKS.md`](../nhua-xanh-hanoi-v1-spec/12-DECISIONS-RISKS.md). Do not duplicate them here. Record **new human-approved** decisions from this point onward with precise source/date. A bot's recommendation is not an approval.

## Decision record template

```md
### D-OPS-001 — [concise question]
- Status: PROPOSED / CONFIRMED / SUPERSEDED
- Date:
- Decision maker (human):
- Context / ticket:
- Options considered:
- Decision:
- Approval evidence (GitHub comment, message, or meeting note):
- Affected spec, tickets and branches:
- Supersedes:
```

## Proposed coordination decision (not yet customer-approved)

### D-OPS-001 — GitHub is the PO ↔ Codex handoff surface
- Status: PROPOSED
- Date: 2026-10-13
- Decision maker (human): Pending
- Proposal: use GitHub PRs + `docs/coordination/` for questions, approvals, dev status; `main` contains only reviewed changes. ChatGPT PO reads pushed content on request; Codex does not assume ChatGPT sees local edits.
- Impact: Team process only; no product-scope change.
