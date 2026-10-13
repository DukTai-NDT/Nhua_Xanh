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

### D-OPS-002 — Chọn Concept A làm hướng cho DSG-02
- Status: CONFIRMED
- Date: 2026-10-13
- Decision maker (human): PO
- Context / ticket: Q-002; `DSG-01` / `DSG-02`; [PR #4](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4)
- Options considered: Concept A — “Sổ tay vật liệu”; Concept B — “Mục lục đô thị”; yêu cầu chỉnh sửa.
- Decision: Chọn Concept A làm hướng art direction để Design tiếp tục DSG-02. Giữ Concept B làm tư liệu đối chiếu, không triển khai song song. Phê duyệt này chỉ chốt hướng DSG-01; **G1 chưa được duyệt**. Chưa duyệt màn hình hi-fi, component states, prototype, asset/font cuối hoặc implementation giao diện.
- Approval evidence: [PO comment on PR #4, 2026-10-13](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4#issuecomment-6139008847)
- Affected spec, tickets and branches: `Q-002`, `DSG-02`, `FE-01`, `QA-01`; `docs/DSG-02-hi-fi`.
- Supersedes: Chưa có.
