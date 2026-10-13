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
- Decision: Chọn Concept A làm hướng art direction để Design tiếp tục DSG-02. Giữ Concept B làm tư liệu đối chiếu, không triển khai song song. Tại thời điểm comment này, G1 chưa được duyệt; PO đã duyệt G1 sau đó theo D-OPS-003.
- Approval evidence: [PO comment on PR #4, 2026-10-13](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4#issuecomment-6139008847)
- Affected spec, tickets and branches: `Q-002`, `DSG-02`, `FE-01`, `QA-01`; `docs/DSG-02-hi-fi`.
- Supersedes: Chưa có.

### D-OPS-003 — Duyệt G1 design handoff DSG-02
- Status: CONFIRMED
- Date: 2026-10-13
- Decision maker (human): PO
- Context / ticket: `DSG-02`, `FE-01`, `QA-01`; Concept A — “Sổ tay vật liệu”.
- Options considered: Chờ chỉnh sửa thiết kế hoặc cho phép FE-01 triển khai theo handoff đã bàn giao.
- Decision: **G1 APPROVED** cho design handoff của DSG-02 tại PR #6, commit `70234846095737d6d09657bda5025601631b9a29`. Cho phép triển khai FE-01 và chuẩn bị QA-01 theo 5 màn hình, desktop 1440/mobile 390, typography/màu, responsive rules, component states và UX được bàn giao. Điều kiện bắt buộc của FE-01: chụp/đối chiếu render desktop/mobile trên trình duyệt thật; kiểm tra điều hướng, bàn phím, overflow, contrast, dấu tiếng Việt và empty/loading/error; sửa khác biệt trước khi đề nghị nghiệm thu. G1 không phê duyệt QA, accessibility, UAT, nội dung, dữ liệu, release hoặc các gate G2–G5.
- Approval evidence: [PO comment “G1 APPROVED” on PR #6, 2026-10-13](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6#issuecomment-6139240456).
- Affected spec, tickets and branches: `FE-01`, `QA-01`, `FE-02`, `FE-03`, `FE-04`; `feat/FE-01-foundation`.
- Supersedes: Chỉ supersedes phần “G1 chưa được duyệt” trong D-OPS-002/Q-002; Concept A selection remains in force.
