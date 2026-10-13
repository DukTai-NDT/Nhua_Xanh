# NHỰA XANH HÀ NỘI — PRODUCT DELIVERY PACK V1

> **Bản bàn giao cho đội AI Dev | PO baseline 1.0 | 13/10/2026 | Ngôn ngữ sản phẩm: tiếng Việt**
>
> **Trạng thái:** Kế hoạch sẵn sàng giao việc, **chưa phải** xác nhận khách hàng đã duyệt toàn bộ chi tiết. Các giả định/chỗ chờ duyệt được đánh dấu `PROPOSED` hoặc `OPEN`.

## 0. Đọc tài liệu theo thứ tự nào?

| File | Người đọc chính | Mục đích |
|---|---|---|
| [01-PRD.md](01-PRD.md) | PO, tất cả agent | Tầm nhìn, người dùng, phạm vi, yêu cầu, tiêu chí chấp nhận |
| [02-DESIGN-SYSTEM.md](02-DESIGN-SYSTEM.md) | Design Agent, FE | Art direction, UX, tokens, màn hình cần thiết kế, quy tắc chống “AI-looking” |
| [03-IA-USER-FLOWS.md](03-IA-USER-FLOWS.md) | Design, FE, QA | Sitemap, nội dung từng trang, user flows, states |
| [04-CONTENT-EDITORIAL.md](04-CONTENT-EDITORIAL.md) | Content Agent, PO | Cấu trúc kiến thức nhựa, giọng văn, chuẩn xác minh nội dung |
| [05-COLLECTION-POINTS.md](05-COLLECTION-POINTS.md) | Data Steward, Map Dev, QA | Hợp đồng dữ liệu điểm thu gom, kiểm chứng, pháp lý bản đồ |
| [06-TECH-ARCHITECTURE.md](06-TECH-ARCHITECTURE.md) | Tech Lead, Dev | Tech stack, kiến trúc, hợp đồng component, NFR, CI |
| [07-ROADMAP-BACKLOG.md](07-ROADMAP-BACKLOG.md) | PO, mọi agent | Phân vai, dependency, thứ tự sprint, user stories có acceptance criteria |
| [08-QA-TEST-PLAN.md](08-QA-TEST-PLAN.md) | QA Agent, FE, PO | Ma trận test, case chi tiết, test tự động, chất lượng phát hành |
| [09-AI-TEAM-PLAYBOOK.md](09-AI-TEAM-PLAYBOOK.md) | Mọi AI agent | Cách nhận task, báo cáo, PR, review, quy tắc chống tự ý quyết định |
| [10-RELEASE-RUNBOOK.md](10-RELEASE-RUNBOOK.md) | PO, QA, DevOps | UAT, go/no-go, deploy, rollback, hậu phát hành |
| [11-DESIGN-TOOLING.md](11-DESIGN-TOOLING.md) | PO, Design Agent | Figma / Stitch / v0 / Codex / Claude, workflow và prompt mẫu |
| [12-DECISIONS-RISKS.md](12-DECISIONS-RISKS.md) | User, PO, khách hàng | Quyết định đã chốt, các câu hỏi còn mở, risk register |
| [13-REFERENCES.md](13-REFERENCES.md) | Content, Map, QA | Nguồn chính thống/official docs và phạm vi xác minh |

## 1. Tóm tắt điều đã CHỐT trong hội thoại

- **Sản phẩm:** website công cộng cung cấp (1) thông tin các loại nhựa, (2) hướng dẫn phân loại rác thải nhựa, (3) bản đồ các điểm thu gom rác thải nhựa **tại Hà Nội**.
- **Tên làm việc:** “Nhựa Xanh Hà Nội” — **chưa xác nhận** là thương hiệu chính thức, còn cần khách hàng duyệt tên/logo/domain.
- **Visual style:** **Modern Eco Editorial trên toàn website**, không chọn Cinematic Dark. Ưu tiên nền sáng, xanh thiên nhiên, nội dung dễ đọc, ảnh/đồ họa vật thể thật, typography có cá tính, chuyển động vừa phải.
- **Website tham khảo về cách kể chuyện/nhịp trang:** https://hailuunguoc.vn/ . **Không** sao chép mã nguồn, ảnh, logo, bố cục đặc thù hoặc nội dung có bản quyền.
- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS; responsive desktop/mobile.
- **Map:** Leaflet + nguồn bản đồ OpenStreetMap/phương án nhà cung cấp tile phù hợp; marker từ danh sách **đã xác minh**.
- **V1:** ưu tiên website hữu ích, gọn, chạy thật; chưa cần login, CMS, backend riêng, tài khoản người dùng.
- **Phase 1:** trước đó đã được hướng dẫn code khởi tạo, Header/Footer và placeholder; **chưa có bằng chứng code đã chạy, lint/build đã pass**. Dev phải khảo sát repo hiện tại trước khi ghi đè.

## 2. Quyết định PO đề xuất để có V1 có thể phát hành (`PROPOSED`)

1. 4 khu vực chính: `/`, `/loai-nhua` (+ trang chi tiết `[slug]`), `/phan-loai`, `/ban-do`.
2. Trang chủ ưu tiên điều hướng và truyền cảm hứng; thư viện nhựa ưu tiên tri thức; phân loại ưu tiên hành động; bản đồ ưu tiên độ tin cậy.
3. `V1 MUST`: nội dung 7 mã nhựa (được biên tập/xác thực), quy trình phân loại có hướng dẫn phù hợp Hà Nội, bản đồ + danh sách accessible, chỉ công bố điểm đã xác minh, tìm/lọc, hướng dẫn đường đi, nguồn dữ liệu, trạng thái lỗi/rỗng.
4. `V1 SHOULD`: mini quiz ngắn không lưu dữ liệu người dùng; chỉ đưa vào nếu không đe dọa tiêu chí phát hành bắt buộc.
5. `OUT OF V1`: AR, gamification lớn, login, profile, booking thu gom, đặt lịch xe, quản trị web hoàn chỉnh, chatbot AI, phát thưởng, chữ ký, mô phỏng tác động môi trường thiếu cơ sở.
6. Tập trung **chất lượng nội dung và ảnh gốc/được cấp phép** hơn hiệu ứng hoành tráng.

## 3. Mốc duyệt (approval gates)

`G0` PO + khách hàng chốt brief/vùng địa lý/brand/sở hữu dữ liệu → `G1` duyệt visual direction, wireframe, hi-fi 4 màn hình & mobile → `G2` duyệt dữ liệu/nội dung tối thiểu → `G3` demo tính năng & design QA → `G4` QA/security/performance/UAT → `G5` quyết định phát hành.

**Không agent nào được tự đánh dấu gate “approved”.** Duyệt phải do người có thẩm quyền xác nhận trong decision log/issue.

## 4. Quy tắc giao việc ngay

- Gửi **README + PRD + Design System + Playbook** cho mọi agent.
- Agent được giao một ticket phải đọc thêm các tài liệu liên quan; luôn cập nhật status, bằng chứng, PR link, giới hạn còn lại.
- Design Agent đi trước FE ở các màn hình có ảnh hưởng thị giác. Content/Data Steward nghiên cứu song song với Design.
- Map Dev **không** được tạo dữ liệu địa điểm giả để chuyển vào production; mock data chỉ dùng môi trường dev/test và ghi rõ `mock`.
- QA Agent không được tự cho pass bằng lập luận; cần test logs/screenshots và kết quả chạy thực tế.

## 5. Cách bắt đầu ngày đầu

1. PO giao `SP0-01` audit repo, `SP0-02` nhận brand brief, `SP0-03` nghiên cứu dữ liệu thu gom.
2. Design Agent dựng 2 concept cùng chủ đề Modern Eco Editorial, **không** đổi phong cách đã chốt.
3. Tech Lead xác nhận version Node/Next/Tailwind hiện có, baseline tests và hạ tầng deploy.
4. Data Steward đưa danh sách ứng viên **không công bố** và yêu cầu liên hệ kiểm chứng.
5. PO gửi các câu hỏi `P0` trong [12-DECISIONS-RISKS.md](12-DECISIONS-RISKS.md) cho khách hàng.

---
**Nguồn chuẩn duy nhất cho scope:** tài liệu này cùng PRD/decision log đã được PO duyệt. Code/prototype AI tạo ra không tự động trở thành yêu cầu sản phẩm.
