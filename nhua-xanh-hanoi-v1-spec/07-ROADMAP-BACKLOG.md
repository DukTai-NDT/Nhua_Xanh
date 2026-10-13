# 07 — DELIVERY ROADMAP, RACI & READY-TO-ASSIGN BACKLOG

**Mô hình:** 1 PO/đầu mối khách hàng + 1 Tech Lead Agent + 1 Design Agent + 1 Content/Data Agent (hoặc 2 vai nếu đủ lực) + 1 Frontend Agent + 1 Map Agent + 1 QA Agent + DevOps hỗ trợ release. Các agent có thể do cùng một AI đảm trách tuần tự nếu tài nguyên hạn chế, nhưng **không** bỏ review độc lập.

## 1. Quyền quyết định (RACI rút gọn)

| Lĩnh vực | Responsible (R) | Accountable (A) | Consulted (C) |
|---|---|---|---|
| Phạm vi/ưu tiên | PO | Khách hàng qua user | Tech Lead, Design |
| Visual direction/high fidelity | Design Agent | PO + khách hàng | FE, QA |
| Content khoa học/luật | Content Agent | PO + domain reviewer của khách hàng | Data Steward |
| Trạm thu gom/địa chỉ | Data Steward + human verifier | Khách hàng/PO | Map Dev, QA |
| Kiến trúc/quality code | Tech Lead, FE/Map Dev | Tech Lead + PO cho trade-off product | QA, Design |
| Test và release evidence | QA Agent | PO/khách hàng go/no-go | Tech Lead, DevOps |
| Production deploy | DevOps/Tech Lead | PO/khách hàng | QA |

AI không là nguồn duy nhất để chứng thực địa điểm đang vận hành, phê duyệt quyền ảnh hoặc ký UAT với khách hàng.

## 2. Sprint plan theo dependency (không cam kết số ngày giả)

| Wave | Theme | Tác vụ có thể chạy song song | Exit Gate |
|---|---|---|---|
| **W0 Discovery / Baseline** | Chốt sản phẩm & rủi ro | Audit repo; brief khách hàng; nghiên cứu nguồn điểm thu gom; dựng checklist brand/assets | G0: PO thống nhất phạm vi và các blocker |
| **W1 Design first** | UX/hi-fi + architecture | Design 2 concept trong B; IA; FE audit/refactor foundation; Data research | G1: Design + mobile + components approved |
| **W2 Functional content** | Home/Library/Sorting | FE Home; FE Library; Content xác minh; QA thiết kế test | G2: Nội dung đủ và approved, pages review |
| **W3 Map & hardening** | Điểm thu gom verified + map | Map Dev tích hợp Leaflet; Data Steward xác minh; QA logic/edge | G3: map đúng và có list fallback |
| **W4 Polish/Release** | Design QA, E2E, UAT | Accessibility, visual regressions, SEO, perf, copyedit, security, deploy preview | G4/G5: QA & UAT signed off, launch |

**Critical path:** nguồn điểm thu gom + brand/ảnh + duyệt visual design → bản đồ chính xác và giao diện đúng → QA → launch. Nếu không có nguồn điểm thu gom, đừng để cả đội FE đợi: làm map bằng **test fixtures** đã gắn `mock` trên preview và chặn phát hành public fixtures.

## 3. Backlog — user stories/ticket giao được cho agent

Trạng thái mặc định **TODO**; cột “effort” là sizing tương đối `S/M/L`, không là ước lượng cam kết theo ngày.

| Ticket | Priority | Owner | Effort | Depends on | Deliverable & acceptance summary |
|---|---|---|---|---|---|
| SP0-01 Repo audit | P0 | Tech Lead | S | — | Báo cáo repo hiện có, versions, scripts, pass/fail baseline, không phá source |
| SP0-02 Client brief | P0 | PO/user | S | — | Trả lời P0 câu hỏi trong decision log, source of truth |
| SP0-03 Data discovery | P0 | Data Steward | M | — | Candidate table có provenance/status, **không giả mạo verified** |
| DSG-01 Art direction | P0 | Design | M | SP0-02 | 2 concept trong phong cách B, chọn 1; asset plan |
| DSG-02 UX & hi-fi | P0 | Design | L | DSG-01 | 5 screens desktop/mobile + component states + prototype + design QA |
| FE-01 Foundation | P0 | FE | M | SP0-01, DSG-01 | Next App Router/TS/Tailwind tokens + Header/Footer responsive, 404/SEO base |
| CNT-01 Resin guides | P0 | Content | L | — | 7 bài có nguồn, review, ảnh/alt đúng mã |
| CNT-02 Local sorting | P0 | Content | M | — | Hướng dẫn phù hợp Hà Nội, cross-check văn bản hiện hành |
| FE-02 Home | P0 | FE | M | DSG-02, FE-01 | Home có editorial layout, CTA thật, mobile + reduced motion |
| FE-03 Plastic library | P0 | FE | L | CNT-01, DSG-02, FE-01 | List + 7 detail pages + route/SEO + unit tests |
| FE-04 Sorting guide | P0 | FE | M | CNT-02, DSG-02, FE-01 | Steps, ví dụ, FAQ, responsive, content approved |
| DAT-01 Verify points | P0 | Data Steward + user | L/External | SP0-03 | Verified evidence + approved publication list, no fake entries |
| MAP-01 Data validation | P0 | Map Dev | M | DAT-01 schema | Schema, build validation, published-only rule, tests |
| MAP-02 Map/list UX | P0 | Map Dev | L | DSG-02, MAP-01 | Leaflet client-only, list fallback, filters/deeplinks, directions |
| QA-01 Test scaffolding | P0 | QA/Tech Lead | M | FE-01 | Vitest/Playwright/axe scripts, smoke + CI |
| QA-02 Functional/E2E | P0 | QA | L | FE-02/03/04, MAP-02 | Test matrix executed, bug log, evidence |
| QA-03 Visual/a11y/perf | P0 | QA + Design | L | DSG-02, FE complete | Screenshot review, WCAG issues, Lighthouse, remediation |
| REL-01 UAT & go-live | P0 | PO/QA/DevOps | M | QA pass, DAT-01 | Client signoff, go/no-go, deployment, rollback plan |
| ENH-01 Micro quiz | P1 | FE + Content | M | FE-04 | 3–5 câu có giải thích, không lưu data, chỉ sau P0 |
| ENH-02 Printable guide | P1 | Design + FE | S | CNT-02 | A4 PDF/print CSS, khi có nguồn và thời gian |

## 4. Chi tiết acceptance criteria trọng yếu

### Ticket FE-02 Home
- Given mobile 390px, when mở `/`, then H1 không tràn, CTA thật có hành động, hình ảnh được phép dùng, nội dung tải ngay không đợi animation.
- Given keyboard nav, then skip link → main và các CTA có visible focus.
- Given reduced motion, then nội dung không biến mất hoặc bị khóa scroll.
- Given no verified points, then không hiển thị “có X trạm thu gom”/pin mock ngoài preview.

### Ticket FE-03 Plastic library
- Exactly 7 resin codes uniquely rendered and accessible via stable deep links.
- 404 cho slug bất kỳ ngoài whitelist; link giữa detail và map đúng query.
- Mọi vật dụng minh họa/caution/source là dữ liệu approved.
- Unit tests cover duplicates, missing source, slug routing.

### Ticket MAP-02 Map/list
- Given published point and material matching, then appears in map **and** list.
- Given filter no match, then clear empty copy and reset.
- Given unverified/expired point, then it never appears in public list/map.
- Given tile request fails, then list remains usable + message.
- Given mobile, then map/list switch works, controls ≥44px target, no horizontal scroll.
- Given user refuses location permissions, nothing breaks (we do not request permission at V1).

### Ticket REL-01 Release
- QA artifacts + content/license/source audit + visual signoff + confirmed data + preview demo + rollback instructions.
- No P0/P1 severity bugs open; PO explicitly decides exceptions with written explanation.

## 5. DoR — Definition of Ready

Ticket có business value, link spec/design approved, data/source requirements, acceptance criteria, dependency, test cases, owner, rủi ro. Nếu thiếu một trong các yếu tố làm thay đổi scope, agent phải báo BLOCKED/PENDING, không tự tưởng tượng khách hàng đã đồng ý.

## 6. DoD — Definition of Done

Code PR, lint/typecheck/unit/e2e phù hợp pass, build pass, screenshot mobile/desktop, semantic/accessibility review, verified content/data, asset license, reviewer signoff, docs update, bug list, deploy preview. **Done ≠ code compile only**.

## 7. Điều phối song song

- Không để Design và FE cùng sửa token/theme; Design giữ **design contract**, Tech Lead kiểm mapping.
- Content và FE có thể song song trên schema/fixtures đã đồng ý; content approved nhập sau.
- QA viết tests từ AC trước khi FE hoàn tất, chạy lại sau PR.
- Data Steward làm việc liên tục, vì phụ thuộc xác minh con người.
- Mọi đóng góp AI đi qua human PO review; không commit trực tiếp production.
