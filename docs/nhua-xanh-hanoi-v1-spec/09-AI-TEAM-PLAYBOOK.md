# 09 — AI DEVELOPMENT TEAM PLAYBOOK

> Dùng khi đội gồm nhiều AI coding agents (Codex, Claude Code, v0 hỗ trợ UI) và 1 người điều phối nhận feedback khách hàng.

## 1. Mô hình tổ chức

```
Customer (final authority)
      │
User / Product representative (human; receives questions, signs approvals)
      │
PO (roadmap, story, priority, release decision)
      │
Tech Lead Agent (architecture + integration + review)
      ├── Design Agent (Figma/Stitch; UX/UI & asset rights)
      ├── Content Agent / Data Steward (accuracy + data source)
      ├── FE Agent (Next.js + UI implementation)
      ├── Map Agent (Leaflet + dataset)
      ├── QA Agent (independent test/review)
      └── Release/DevOps Agent (CI/deploy/rollback)
```

**Một AI có thể giữ nhiều role, nhưng phải thay “hat” khi viết code và khi review; critical PR cần một agent khác/human review độc lập.**

## 2. System rules áp dụng cho MỌI agent

1. Đọc README, PRD, Design System, backlog, phần spec liên quan **trước khi sửa code**.
2. Không tự mở rộng scope, đổi ngôn ngữ, visual style, hay thêm backend nếu không có change approval.
3. Phân biệt `CONFIRMED`, `PROPOSED`, `OPEN`; mọi phần chưa được approve có thể làm prototype nhưng không merge final.
4. **Không bịa:** trạm thu gom, dữ liệu môi trường, giờ mở, nguồn, đối tác, customer approval, kết quả test.
5. Dựng UI bằng hình/đồ họa có nguồn và bản quyền, ưu tiên asset thật, không copy Hải Lưu Ngược.
6. Không xóa/thay đổi công việc agent khác nếu chưa sync; tránh “rewrite all” mỗi lần.
7. Tất cả PR phải link ticket, có test evidence và screenshots. Không gộp design/content/data/map vào PR khổng lồ.
8. Dữ liệu cần kiểm chứng con người luôn để trạng thái chờ; gửi câu hỏi ngắn rõ cho User/PO.
9. Nếu khó triển khai, gửi trade-off + recommendation + impact thay vì tự bẻ yêu cầu.
10. Kết thúc task: bàn giao chính xác file đã sửa, lệnh đã chạy, test pass/fail, known issues, what needs approval.

## 3. Ticket template (copy vào issue tracker)

```md
## [TICKET-ID] Title
### User story
As a [persona], I want [capability], so that [outcome].
### Context & references
- PRD: ...
- Design Figma URL + version: ...
- Data/content source: ...
### Scope
IN: ...
OUT: ...
### Acceptance criteria (Given/When/Then)
- ...
### Dependencies / assumptions
- ...
### Definition of Done
- [ ] Implemented [ ] Unit [ ] E2E [ ] A11y [ ] Visual QA [ ] Docs [ ] Approved
### Test evidence
- Commands/logs/screenshots/preview URL:
### Risks / open questions
- ...
```

## 4. Agent work order

**Design Agent:** nhận PRD + DESIGN-SYSTEM + IA; khảo sát brand/assets; đưa wireframe + hi-fi; token/component naming; chờ gate G1. Không phát sinh 100 trang screenshot vô ích.

**Content Agent:** làm source claim registry; nghiên cứu luật Hà Nội và mã nhựa; soạn 7 entries + sorting guide với sources, review; không quyết định `isRecyclable` toàn cục.

**Data Steward:** biến leads thành candidates; hỏi human verifier; xuất bản dataset approved có evidence và next review date; không lấy từ map search rồi gọi `VERIFIED`.

**FE Agent:** đọc Figma + tokens, thực hiện pages data-driven, Lighthouse/SEO/responsive; mỗi feature có tests; không dùng mock points ở prod.

**Map Agent:** client-only map, server list, filters/query, validation, OSM/provider compliance, fallback; chứng minh edge cases.

**QA Agent:** viết cases từ acceptance trước implementation, chạy automation và manual, log bug độc lập, submit test evidence; không tự sửa production code nếu chưa assign.

**Tech Lead:** phối hợp contract, review performance/security/build/deps; rollback decisions cùng PO.

**PO:** kiểm scope và cross-dependency, gom điểm cần hỏi khách hàng, ký duyệt design & acceptance, giữ changelog.

## 5. Quy tắc branching/merge

- Mỗi ticket một branch/PR; no direct push main.
- Nguyên tắc: rebase/merge main thường xuyên, không để >1 agent sửa cùng file thiết kế/token trong cùng thời điểm.
- Integrate sequentially: design tokens/foundation → content data contract → page features → map → hardening.
- Preview per PR, review screenshots desktop/mobile.
- Khi conflict, Tech Lead quyết định sau khi kiểm tra tác động, **không** chọn bản code mới nhất vô điều kiện.

## 6. Standard task handoff report

```md
### TASK STATUS: DONE / BLOCKED / REVIEW
- Ticket:
- Summary (what changed):
- Files/PR link:
- Contract/design version used:
- Tests actually executed (pass/fail):
- Screenshots (1440, 390):
- Content/data approval IDs:
- Known limitations:
- Questions for PO/customer:
- Next recommended task:
```

## 7. Escalation matrix

| Tình huống | Agent phải làm |
|---|---|
| Không rõ tên dự án/logo | Dùng working name có nhãn, báo PO, không tự vẽ logo cuối |
| Không có địa điểm thu gom verified | Tiếp tục UI mock riêng dev; báo BLOCKED DAT-01; tuyệt đối không xuất bản mock |
| Thiếu hình ảnh có license | Dùng placeholder được gắn rõ ở preview; cần asset handoff; không giả nguồn |
| Design AI và FE khác nhau | Ưu tiên hi-fi đã được PO duyệt; đề xuất change nếu không khả thi |
| Build fail | Đưa logs thật, cách tái hiện, không báo DONE |
| Mơ hồ về luật/claim nhựa | Không xuất bản; gửi PO + content reviewer xác minh |
| Dữ liệu người dùng/cookie | Dừng phát sinh tính năng thu thập; hỏi PO/privacy owner |

## 8. Bộ prompt giao việc khởi đầu

**Tech Lead:** “Audit repo hiện tại theo SP0-01. Báo Next/TS/Tailwind versions, tree, scripts, baseline lint/build/test, chênh lệch với 06-TECH. Không tự ghi đè. Đề xuất PR nhỏ nhất.”

**Content:** “Soạn source registry và 7 PlasticGuide theo 04-CONTENT. Mỗi claim có URL/date/confidence. Không bịa recycling availability. Nêu phần cần chuyên gia duyệt.”

**Map:** “Dựng typed schema/validator và Leaflet map/list theo 05 + 06 với mock chỉ ở test/dev. E2E map failure/list mode. Không dùng mock trong production export.”

**QA:** “Đọc 08-QA. Tạo test skeleton và severity log trước khi FE merge. Các case P0 phải có evidence; không tuyên bố pass khi chưa có runtime.”
