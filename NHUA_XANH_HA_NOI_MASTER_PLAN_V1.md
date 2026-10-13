# NHỰA XANH HÀ NỘI — MASTER PLAN (SINGLE FILE)

> Bản gộp để trao cho một AI Agent; phiên bản chia 14 file trong ZIP là bản hợp tác theo vai trò.

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


---

# 01 — PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Sản phẩm:** Nhựa Xanh Hà Nội · **Phiên bản mục tiêu:** Public V1 · **Chủ sở hữu sản phẩm:** Khách hàng (chờ xác nhận) · **Điều phối:** PO (ChatGPT hỗ trợ kế hoạch) + User làm đầu mối xác nhận khách hàng · **Ngày baseline:** 13/10/2026

## 1. Product vision

> Một địa chỉ tin cậy và thân thiện, giúp người dân Hà Nội hiểu **loại nhựa mình đang cầm**, biết **cách chuẩn bị/phân loại đúng**, và tìm được **điểm tiếp nhận phù hợp, đã được xác minh**.

Không làm một “landing page trưng bày”. Tạo đường đi thực tế: **Nhận diện → Hiểu → Chuẩn bị → Tìm nơi chuyển giao → Hành động.**

### Vấn đề cần giải quyết
- Người dùng không rõ PET/HDPE/PP/... khác nhau thế nào, dễ nhầm mã nhựa là cam kết tái chế.
- Hướng dẫn phân loại rải rác, đôi khi không phù hợp quy trình thu gom địa phương.
- Thông tin trạm thu gom thay đổi, thiếu giờ tiếp nhận/loại nhựa nhận, người dân đi nhầm hoặc mất công.
- Website môi trường dễ mắc lỗi “khẩu hiệu quá nhiều, ít chỉ dẫn hữu ích”.

### Đối tượng chính
1. **Người dân Hà Nội** (điện thoại là thiết bị phổ biến trong giả định UX): muốn biết chai/hộp/túi nhựa bỏ đâu.
2. **Học sinh, sinh viên, người mới tìm hiểu:** học loại nhựa qua ví dụ trực quan.
3. **Tình nguyện viên / nhóm truyền thông:** chia sẻ hướng dẫn đáng tin và bản đồ.

*Các persona chỉ là giả thuyết thiết kế; không gán đặc điểm nhân khẩu học chưa được nghiên cứu.*

## 2. Mục tiêu và cách đo

| Objective | Thước đo | Cách kiểm tra tại V1 |
|---|---|---|
| Dễ tiếp cận kiến thức | Người mới tìm thấy nội dung 7 nhóm nhựa trong ≤ 2 thao tác từ home | UAT 5 người, ghi nhận thao tác, không đoán số liệu |
| Làm đúng bước cơ bản | Người thử có thể nêu cách chuẩn bị chai/hộp và hiểu cần kiểm tra quy định điểm nhận | UAT theo kịch bản |
| Tìm được điểm phù hợp | Người dùng lọc một loại nhựa → xem địa chỉ/tình trạng/nguồn → mở chỉ đường | E2E + UAT với **điểm thật đã xác minh** |
| Chất lượng cảm nhận | Mobile dễ đọc, có bản sắc Hà Nội, không “AI template” | Design review + checklist định tính |
| Kỹ thuật đủ tin cậy | 0 blocker, các trang và bản đồ không lỗi | CI/QA + production smoke |

**Không tự bịa KPI traffic/conversion/impact môi trường.** Sau phát hành 2–4 tuần mới đặt mục tiêu định lượng dựa trên dữ liệu thực, và phải duyệt việc thu thập analytics.

## 3. Scope & mức ưu tiên

### P0 — MUST để ra mắt V1

| ID | Chức năng | Quy tắc nghiệm thu cấp sản phẩm |
|---|---|---|
| PR-01 | Home `/` | Hero có giá trị rõ, ít nhất 3 CTA đến 3 phần chức năng; tối ưu mobile |
| PR-02 | Thư viện 7 nhóm nhựa `/loai-nhua` | Hiển thị đầy đủ 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS, 7 OTHER; tách nội dung với khả năng tiếp nhận thực tế |
| PR-03 | Chi tiết từng nhựa `/loai-nhua/[slug]` | Đặc điểm, ví dụ, mã, cách chuẩn bị, cảnh báo/ngoại lệ, trích nguồn, link tìm nơi tiếp nhận; không khẳng định tất cả tái chế được |
| PR-04 | Hướng dẫn `/phan-loai` | Flow ưu tiên hướng dẫn phân loại tại nguồn của Hà Nội; các bước về nhựa; hình ảnh/ví dụ; FAQ |
| PR-05 | Bản đồ `/ban-do` | Map tương tác, danh sách điểm tương đương, lọc loại nhựa, chi tiết tiếp nhận, chỉ đường, trạng thái rỗng/lỗi |
| PR-06 | Quản trị dữ liệu tĩnh có kiểm soát | Schema + validation; không xuất bản điểm chưa xác minh; ngày xác minh và nguồn cho người dùng |
| PR-07 | Chất lượng phát hành | Responsive, keyboard, SEO cơ bản, 404, privacy/attribution, kiểm thử và tài liệu bàn giao |

### P1 — SHOULD nhưng không chặn V1
- Mini quiz 3–5 câu hỏi nhận diện nhựa; không lưu thành tích/dữ liệu người dùng.
- Tìm nhanh theo vật dụng phổ biến (chai nước, hộp đựng, túi...) với kết quả hướng dẫn phân biệt.
- In/share checklist phân loại khổ A4.
- FAQ tổng hợp từng nhóm câu hỏi.

### P2 — LATER
- Đóng góp địa điểm, duyệt từ người dùng, cập nhật cộng đồng (cần chống spam, dữ liệu và quy trình vận hành).
- CMS dashboard, lịch sử chỉnh sửa chuyên sâu, API realtime, đăng nhập.
- Điều hướng tới điểm gần nhất theo vị trí (cần người dùng đồng ý), lịch làm việc real-time.
- Gamification, workshop/events, truyền thông đối tác, AR, AI nhận diện vật liệu bằng camera.

### Không thuộc V1
Thanh toán, đặt lịch thu gom, giao dịch phế liệu, cam kết ảnh hưởng môi trường đo lường được, chức năng nộp ảnh người dùng, hệ thống thu thập PII.

## 4. Functional requirements chi tiết

**FR-HOME:** 6 phần khuyến nghị: Header → Hero → Vì sao hiểu đúng về nhựa → 7 mã nhựa preview → Hướng dẫn phân loại preview → Tìm điểm thu gom → Footer. Một H1; CTA rõ; ảnh được cấp phép và có alt phù hợp; không “fake counter”, fake partners, fake reviews.

**FR-PLASTIC:** data-driven render từ một bộ dữ liệu duy nhất; trang chi tiết có breadcrumb, điều hướng quay lại, liên kết `/ban-do?plastic=PET` hoặc mã tương ứng; không hiển thị verdict toàn quốc “tái chế được/không” như chân lý cố định. Thay bằng “khả năng tiếp nhận tùy điểm”.

**FR-SORT:** mô hình 2 tầng: (1) luật nhóm rác tại nguồn ở Hà Nội (tái sử dụng/tái chế, thực phẩm, còn lại + loại nguy hại xử lý riêng theo hướng dẫn) và (2) cách chuẩn bị/cất giữ **nhựa tái chế**. Không suy luận mọi chất liệu nhựa cùng một thùng. Nội dung có `lastReviewedAt` và `sources`.

**FR-MAP:** filter theo nhóm vật liệu chấp nhận, danh sách có tên/địa chỉ/phường, loại nhựa được xác nhận, giờ tiếp nhận nếu biết, ngày kiểm tra và trạng thái. Click marker ↔ chọn card, zoom/fit, nút mở ứng dụng bản đồ bên ngoài, link báo thông tin sai qua email (tránh form dữ liệu cá nhân nếu chưa duyệt). Không yêu cầu geolocation. Không có kết quả → thông báo tử tế, reset filter, không giả mạo nơi nhận.

**FR-CONTENT:** mỗi bài/thẻ có đường dẫn trực tiếp, metadata tiếng Việt, nội dung viết lại có biên tập, credits ảnh, nguồn dẫn; thay đổi dữ liệu phải qua PR và kiểm chứng.

## 5. Ranh giới chất lượng nội dung

- Mã 1–7 là **mã nhận diện vật liệu nhựa**, **không** bảo đảm vật dụng tái chế được ở Hà Nội.
- Không đưa lời khuyên xử lý nhựa dính hóa chất, vật chứa sắc nhọn hay rác nguy hại như nhựa sạch thông thường.
- Không gây cảm giác người dùng có lỗi; ngôn ngữ khích lệ, thực tế, có hướng dẫn.
- Không nói số liệu môi trường/tỷ lệ tái chế khi không có nguồn và năm công bố.
- Đặc biệt phân biệt **trạm/điểm tiếp nhận nhựa** với điểm tập kết rác sinh hoạt thông thường.

## 6. Non-functional requirements

| ID | Yêu cầu | Mức đích / cách chứng minh |
|---|---|---|
| NFR-01 | Responsive | 320, 375/390, 768, 1024, 1440px; không tràn ngang, không che CTA |
| NFR-02 | Accessibility | Hướng tới WCAG 2.2 AA; keyboard; focus; semantic HTML; tương phản >= 4.5:1 cho text thường; reduce motion; map có list fallback |
| NFR-03 | Performance | Mục tiêu lab Lighthouse mobile ≥ 85 Performance, ≥ 90 Accessibility/Best Practices/SEO ở các trang nội dung; báo cáo điều kiện đo; map kiểm riêng; theo dõi Core Web Vitals LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 khi có field data |
| NFR-04 | SEO | Titles/descriptions riêng, H1 duy nhất, canonical, sitemap, robots, Open Graph, meta image; noindex preview |
| NFR-05 | Maintainability | TS strict, data schema, reusable components, validation tests, không có magic strings nguy hiểm |
| NFR-06 | Security/privacy | Không bí mật trong client; link ngoài `rel="noopener noreferrer"`; không thu vị trí/lưu PII mặc định; dependency/security scan |
| NFR-07 | Availability & failure | Bản đồ lỗi tile/JS phải có danh sách địa điểm; trang không bị crash |
| NFR-08 | Attribution | OpenStreetMap attribution hiển thị rõ; ảnh & font có hồ sơ quyền sử dụng |

**Các con số chất lượng là mục tiêu PO đề xuất**, không được ghi là “đã đạt” nếu chưa kiểm thử.

## 7. Định nghĩa thành công V1

Thành công = người dùng mở website trên điện thoại, hiểu được vật liệu và cách chuẩn bị, tìm thấy một điểm phù hợp **có khả năng tiếp nhận thật** hoặc được giải thích rõ khi chưa có dữ liệu; website không có lỗi nghiêm trọng, nội dung không đưa kết luận sai, thiết kế có bản sắc và dễ sử dụng.

## 8. Điều kiện không được phát hành (hard blockers)

- Trang quan trọng 404/blank, không truy cập mobile; lỗi runtime console nghiêm trọng.
- Điểm hiển thị công khai chưa kiểm chứng hoặc sai vị trí/vật liệu tiếp nhận.
- Nội dung phân loại sai quy định/không có người duyệt.
- Dùng ảnh, logo, code, typography không có quyền; mạo nhận đối tác.
- Map không có fallback danh sách; không có attribution theo điều khoản nguồn tile.
- Security high/critical chưa xử lý; thông tin nội bộ hoặc key lộ.
- PO/khách hàng chưa phê duyệt UAT và release gate.

## 9. Dependencies & giả định

- Dữ liệu trạm thu gom **phải có con người/đối tác kiểm chứng**; việc web search không xác nhận đang hoạt động.
- Hình ảnh sản phẩm nếu chưa có ảnh gốc cần mua/cấp phép/thiết kế có provenance.
- Khách hàng đồng ý scope V1 không có backend riêng.
- Nếu chưa có đủ ≥3 địa điểm thật được xác minh cho launch, **PO phải đưa ra quyết định**: (a) liên hệ thêm nguồn; (b) ra mắt trang bản đồ ở trạng thái “danh sách đang cập nhật” và **truyền thông rõ giới hạn** (chỉ nếu khách hàng duyệt); không bơm dữ liệu giả để đạt KPI.

## 10. Quy trình thay đổi scope

Mỗi thay đổi phải có: `Change ID`, vấn đề, tác động người dùng, hạng mục thay đổi, chi phí/độ khó tương đối, ảnh hưởng sprint, proposal, quyết định của khách hàng/PO. Agent không tự thêm chatbot, CMS, animation nặng hoặc tính năng backend vì “trông hay”.


---

# 02 — DESIGN BRIEF & DESIGN SYSTEM

**Role owner:** AI Product Designer / Art Director | **Approval:** PO + khách hàng | **Trạng thái:** Style đã chốt; chi tiết tokens/art direction `PROPOSED`.

## 1. Art direction: MODERN ECO EDITORIAL (không phải template AI)

**Big idea:** *“Sổ tay vật liệu đô thị”* — những vật dụng nhựa quen thuộc ở Hà Nội được quan sát bằng ngôn ngữ thiết kế tạp chí minh họa: bố cục biên tập, ảnh đồ vật thật, annotation bằng số/mũi tên, đường viền tinh tế, lớp giấy nền ấm, các nhãn thông tin hữu ích.

**Keywords:** grounded, Vietnamese, editorial, tactile, optimistic, practical, restrained motion, scientific clarity, local identity.

**Tránh:** dark cinematic toàn trang; glassmorphism; neon; gradient xanh-tím AI; hình 3D chung chung; tràn ngập card giống nhau; emoji ở mọi nơi; vector cây/lá vô danh; số liệu không nguồn; “floating plastic” vô cớ; scroll-jacking; chữ chạy quá nhiều; hero tươi cười stock photo không liên quan; quái vật rác AI vô nghĩa.

**Reference:** https://hailuunguoc.vn/ để học storytelling theo section và CTA; **không** dùng lại nhận diện, minh họa, bố cục độc quyền, texture/ảnh của họ.

## 2. Visual principles

1. **Material first:** vật dụng nhựa (chai PET, can HDPE, bao bì LDPE, hộp PP…) làm nhân vật chính; icon chỉ hỗ trợ.
2. **Context Hanoi:** cảm giác Hà Nội qua ảnh đời thực (bối cảnh nhà ở, quầy hàng, ngõ phố/điểm thu gom được phép chụp); không dùng ngẫu nhiên hình bãi biển ngoại quốc.
3. **Editorial rhythm:** xen kẽ photo crop cận cảnh, bảng chú giải, số lớn và đoạn chữ ngắn; không dùng 6 section liên tiếp cùng pattern 3 cards.
4. **Responsible claims:** mọi biểu đồ/số liệu đều có nguồn; nếu thiếu dữ liệu, dùng minh họa phi định lượng.
5. **Usability over decoration:** người dùng luôn tìm thấy “tôi cần làm gì với món đồ này?”.
6. **Small delight:** hiệu ứng hover, reveal, hình giấy chuyển động < 400ms, không làm chậm/giấu nội dung.

## 3. Token baseline — có thể thay đổi sau khi kiểm tra WCAG

| Token | Giá trị | Vai trò |
|---|---|---|
| `color.background` | `#F8F7F2` | giấy trắng ấm |
| `color.foreground` | `#193F2A` | chữ chính |
| `color.primary` | `#357A54` | CTA, link, điểm nhấn |
| `color.surface` | `#E7F0E7` | background ô chú thích |
| `color.accent` | `#BCE1B8` | highlight vật liệu/nhãn |
| `color.muted` | `#52665A` | chữ phụ (cần verify contrast trên nền thực tế) |
| `color.sand` | `#E8DCC4` | sắc giấy/nhấn editorial |
| `color.white` | `#FFFFFF` | card nền trắng |
| `color.error` | `#A83232` | thông báo lỗi đủ tương phản |

**Font đề xuất:** `Be Vietnam Pro` cho nội dung/UI tiếng Việt; `Lora` hoặc `Source Serif 4` cho một phần tiêu đề editorial, nếu có đầy đủ glyph tiếng Việt. Quyết định cuối sau prototype. Không trộn quá 2 họ font. Self-host hoặc dùng `next/font` và kiểm tra license.

**Typography:** desktop H1 56–72px có kiểm soát số dòng; mobile H1 36–44px; body 16–18px/line-height 1.6; nhãn 12–14px. Đừng giảm body dưới 16px trên mobile.

**Layout:** grid 12 cột desktop, 4 cột mobile; max content width ~1200px; chiều dài dòng nội dung 60–75 ký tự; gutter 20–32px; spacing theo hệ 4/8/12/16/24/32/48/64/96; radius 8/16/24 không bo tròn quá mức, shadow nhẹ hoặc ưu tiên border.

**Icon:** Lucide cho chức năng, bản đồ; mã resin 1–7 phải dùng đồ họa/hệ ký hiệu đúng dạng, không vẽ tam giác và gán ý nghĩa “recyclable everywhere”.

## 4. Hình ảnh và asset policy

- Ưu tiên bộ ảnh chụp vật dụng thật cùng ánh sáng/nền và cùng góc máy; hậu kỳ nhất quán.
- Đồ họa hỗ trợ kiểu cut-paper / studio still-life / annotated photograph; chất liệu đẹp nhưng không phóng đại ô nhiễm.
- Trường hợp dùng ảnh AI: ghi nguồn nội bộ, rà lỗi vật lý/chữ nhựa/sai nhãn; **không giả làm ảnh trạm thu gom thật**. Đối với điểm thu gom, chỉ ảnh thật được phép sử dụng.
- Tạo asset inventory: `asset-id`, mục đích, tệp gốc, tác giả, license, link, hạn sử dụng, alt, người duyệt.
- Tránh tải ảnh đại diện web mẫu về rồi sửa màu. Tôn trọng IP.

## 5. Components bắt buộc thiết kế

`HeaderDesktop`, `HeaderMobile`, `Footer`, `EditorialHero`, `SectionIntro`, `ImageCaption`, `PlasticResinCard`, `PlasticDetailFact`, `SortingStep`, `Checklist`, `FAQAccordion`, `CollectionPointCard`, `FilterChips`, `MapPinSelected`, `MapPopup`, `DataStatus`, `EmptyState`, `ErrorState`, `Breadcrumb`, `CTA`, `FocusState`, `Skeleton`, `404Page`.

Mỗi component phải có: default / hover / focus / disabled (nếu có) / loading / empty; component map/card có selection và long-text wrapping.

## 6. Màn hình Design Agent phải giao

| Màn hình | Desktop 1440 | Mobile 390 | Hiện trạng quan trọng |
|---|---|---|---|
| Home | hi-fi | hi-fi | Hero, 7 nhựa preview, sorting/map teaser, sticky header |
| Plastic list | hi-fi | hi-fi | Cards 7 code, bộ lọc/quick browse nếu có |
| Plastic detail | hi-fi | hi-fi | Long-form editorial, related links, CTA map |
| Sorting | hi-fi | hi-fi | Step-by-step, ví dụ rác đúng/sai, FAQ |
| Collection map | hi-fi | hi-fi | Map/list switch, selected point, no results, invalid data/partial data |
| Shared | Library | Library | Header/menu/footer/breadcrumb/404/loading |

**Bàn giao:** Figma file hoặc equivalent có layer đặt tên, tokens, reusable components, responsive rules, text thật tiếng Việt, asset references, prototype luồng chính; ảnh export có license manifest; link/comment có version duyệt. Không chỉ gửi PNG.

## 7. Motion guidance

- Motion cơ bản CSS/Framer Motion (Motion) là đủ cho V1; **không bắt buộc GSAP**. Dùng GSAP khi chứng minh có lợi ích rõ.
- Hero text stagger 100–150ms, card hover translate ≤4px, section reveal theo viewport nhẹ; tránh 100% animation-dependent content.
- Luôn đáp ứng `prefers-reduced-motion: reduce`; không tự phát video có âm thanh; không ngăn user scroll.
- Interaction có feedback: filter chip selected, map marker selected, button loading nếu cần.

## 8. Design QA — chống “AI-looking” checklist

- [ ] Bỏ được các mảng gradient/3D không có ý nghĩa.
- [ ] Ảnh thật nhựa/không gian Hà Nội có tác dụng kể chuyện, không phải ảnh cho đủ chỗ.
- [ ] Ít nhất 3 layout section khác nhau về nhịp không gian và typography.
- [ ] Mọi heading là tiếng Việt tự nhiên, không sáo ngữ hoặc lặp khẩu hiệu.
- [ ] 7 hình đại diện nhóm nhựa nhất quán và đúng loại vật liệu.
- [ ] UI của map gọn, rõ filter và trạng thái; map/list dùng được bằng bàn phím.
- [ ] Mobile được **thiết kế riêng**, không chỉ scale desktop.
- [ ] Focus state, contrast, alt, tap target min ~44×44 CSS px ở tương tác quan trọng.
- [ ] Có giới hạn ảnh/animation và tải trang; không giật.
- [ ] PO/khách hàng duyệt bản thiết kế trước khi FE làm hàng loạt.

## 9. Prompt dành cho Design Agent

```text
Role: Senior Visual Designer + UX Designer. Dự án “Nhựa Xanh Hà Nội”, website tiếng Việt giúp hiểu 7 mã nhựa, phân loại đúng và tìm điểm thu gom đã xác minh tại Hà Nội.
Direction LOCKED: Modern Eco Editorial, light warm off-white #F8F7F2, forest green #357A54, dark text #193F2A. Hình ảnh vật dụng nhựa đời thực ở Hà Nội, editorial annotation, typography có cá tính, paper/collage tinh tế. Không dark cinematic, không gradient/3D AI cliché, không stock photo vô can. Tham khảo hailuunguoc.vn chỉ ở storytelling/section rhythm; không sao chép tài sản hoặc bố cục.
Deliver: 2 art-direction boards trong CÙNG phong cách, sitemap, user flow, wireframe, high-fidelity desktop 1440 + mobile 390 cho 5 màn hình; component library & states (loading, empty, error, selected); tokens; clickable prototype; asset rights log. Dùng copy tiếng Việt thực. Ưu tiên accessibility, dữ liệu chưa xác minh phải thể hiện trạng thái, bản đồ có list view. Giải thích design rationale cho từng quyết định. Không viết production code. Chờ PO duyệt G1.
```


---

# 03 — INFORMATION ARCHITECTURE & USER FLOWS

## 1. Sitemap V1

```text
/                              Home / Landing editorial
├── /loai-nhua                 7 nhóm nhựa: tổng quan + danh sách
│   └── /loai-nhua/[slug]      Trang chi tiết 1 nhóm nhựa (7 trang)
├── /phan-loai                 Hướng dẫn & câu hỏi thường gặp
├── /ban-do                    Map + List điểm thu gom
├── /gioi-thieu                [P1, nếu có nội dung rõ / đơn vị chủ quản]
├── /nguon-du-lieu             Nguồn, ngày cập nhật & cách phản ánh (có thể tích hợp vào /ban-do hoặc footer)
├── /quyen-rieng-tu            Thông báo riêng tư ngắn (nội dung phải được duyệt)
└── /not-found                 404 có đường quay về
```

Lưu ý: `/gioi-thieu` optional nếu khách hàng chưa xác nhận đơn vị. `quyen-rieng-tu` và `nguon-du-lieu` là đường dẫn có thể thay bằng trang thông tin tích hợp, nhưng bắt buộc có thông báo/credits thích hợp trước khi public.

## 2. Primary navigation (max 4 main items)

`Trang chủ` | `Các loại nhựa` | `Cách phân loại` | `Điểm thu gom`.

Desktop header sticky nhẹ; mobile menu đóng khi điều hướng, ESC/backdrop nếu thiết kế dùng overlay. Active state rõ ràng. CTA nổi bật “Tìm điểm thu gom” trên Home nhưng không được lấn nội dung.

## 3. Home — storyboard chi tiết

| Section | Copy mục tiêu / nội dung | UI dạng | CTA |
|---|---|---|---|
| H1 Hero | **“Hiểu về nhựa. Sống xanh hơn.”** + lời mô tả lợi ích rõ | Split editorial hero: ảnh vật dụng thật / still-life, label, câu chuyện nhỏ | “Khám phá 7 loại nhựa” / “Tìm điểm thu gom” |
| Why it matters | “Không phải loại nhựa nào cũng được tiếp nhận ở cùng một nơi.” | Photo with marginal annotations, không tạo biểu đồ giả | “Vì sao cần phân loại?” |
| Field guide 1–7 | 7 mã nhựa với vật dụng minh họa | Scrollable mobile gallery / grid asymmetrical desktop | Mở chi tiết từng loại |
| Step by step | “Làm rỗng → Phân loại → Kiểm tra nơi nhận” kèm ngoại lệ | 3 bước + cận cảnh đồ nhựa | “Xem hướng dẫn” |
| Hanoi callout | Bức ảnh/illustration bối cảnh Hà Nội; chỉ báo về độ phủ dữ liệu thực | Map mini preview **chỉ dùng điểm verified**, hoặc ảnh tĩnh map Hà Nội nếu chưa đủ data | “Mở bản đồ thu gom” |
| Closing | “Việc nhỏ, làm đúng chỗ.” | Short CTA + footer | “Bắt đầu từ một món đồ” |

Không tự phát biểu số tấn nhựa, số cây cứu được, % tái chế, số trạm hiện tại trừ khi dữ liệu thật được phê duyệt.

## 4. Page requirements / wireframe text

### 4.1 `/loai-nhua`

```
Breadcrumb | H1: 7 mã nhận diện nhựa
Intro ngắn + caution: Mã vật liệu ≠ khả năng được tái chế tại địa phương
[Card 1 PET] [Card 2 HDPE] ... [Card 7 OTHER]
Each card: mã, tên, ví dụ 1–2 vật dụng, link "Xem chi tiết"
Bottom CTA: Bạn đã nhận diện được? → Phân loại / Tìm nơi tiếp nhận
```

### 4.2 `/loai-nhua/[slug]`

```
Breadcrumb / Back
Hero tên nhựa + code + still-life vật dụng + tóm tắt
Đặc điểm nhận diện (không khẳng định mọi sản phẩm cùng mã có hình dạng giống nhau)
Một số ví dụ thường gặp, ví dụ không chắc chắn được ghi rõ
Cách chuẩn bị trước khi mang tới điểm tiếp nhận
Lưu ý quan trọng / ngoại lệ và FAQ
Nguồn / Last reviewed
CTA lọc điểm tiếp nhận [chỉ nếu có metadata accepted code]
```

### 4.3 `/phan-loai`

```
H1 "Phân loại nhựa đúng cách, bắt đầu từ nhà"
Banner: quy định phân loại rác sinh hoạt tại nguồn ở Hà Nội
Flow tách nhóm chính → chọn vật liệu nhựa → kiểm tra nhãn → chuẩn bị sạch/khô vừa đủ → tìm điểm nhận
Ví dụ đúng/sai: chai nước, túi nilon, hộp nhựa sạch, hộp dính đồ ăn, chai hóa chất (ngoại lệ)
FAQ & nguồn cập nhật
CTA mở bản đồ
```

### 4.4 `/ban-do`

```
H1 "Điểm thu gom tại Hà Nội" + "Đã kiểm tra dữ liệu đến [ngày]"
Filter: loại nhựa [1..7 hoặc tên], khu vực [tùy data], trạng thái / Reset
[ MAP ]   [ LIST verified places, selected item ]  (desktop)
Map/List tabs trên mobile, không đặt map cố định che hết màn hình
Card: Tên / Địa chỉ / Nhận vật liệu / Giờ tiếp nhận nếu xác nhận / Ngày xác minh
CTA: "Xem đường đi" (deep link map ngoài) / "Báo thông tin cần cập nhật"
Data disclaimer + OSM attribution + source credit
No results / map fail / location not given / tile slow states
```

**Không đưa điểm chưa được xác minh vào map public.** Có thể hiển thị thông báo “Hiện chưa có điểm phù hợp đã được kiểm chứng” khi lọc.

## 5. User flows

### U-01: Phân loại từ vật dụng

`Home → 7 loại → PET (ví dụ) → Cách chuẩn bị → Bản đồ filter PET → Chọn điểm đã xác minh → Mở chỉ đường.`

**Happy path acceptance:** người dùng hiểu không phải mọi điểm đều nhận PET, link filter giữ đúng vật liệu, chỉ đường nhận tọa độ của điểm đã xác minh.

### U-02: Tìm điểm trực tiếp

`Home/Header → Bản đồ → Chọn bộ lọc → xem danh sách/marker → chi tiết → chỉ đường.`

**Edge cases:** không có điểm, tile lỗi, điểm không có giờ mở cửa xác nhận, không cho phép vị trí, chuyển mobile từ map sang list. Không được ghi “Đang mở cửa” khi không có dữ liệu real-time.

### U-03: Học kiến thức

`Home → Phân loại → FAQ → nguồn dẫn → truy cập thư viện nhựa.`

**Acceptance:** copy không gây hiểu nhầm, câu trả lời có ví dụ nhựa cụ thể và nguồn có thể xem.

### U-04: Người truy cập bằng bàn phím / screen reader

`Skip to content → chọn menu → chọn tab List → duyệt địa điểm theo thứ tự → mở link chỉ đường.`

**Acceptance:** không buộc tương tác kéo thả map; mỗi điểm có thông tin tương đương ngoài bản đồ.

## 6. State inventory bắt buộc

| Vùng | Normal | Empty | Error/Offline | Loading |
|---|---|---|---|---|
| Thư viện | 7 loại đủ | Không được xảy ra khi dữ liệu hợp lệ | Lỗi import/schema → fail build | Skeleton nếu dùng dynamic |
| Trang chi tiết | Đúng slug | slug không tồn tại → 404 | asset hỏng → fallback text | SSR static không cần spinner |
| Map | verified locations | “Chưa có điểm đã xác minh” + reset | Tile/API lỗi → vẫn có list | Placeholder/map skeleton |
| Filter | có match | no results message | invalid query → ignore/recover gracefully | không đơ UX |
| External directions | link hợp lệ | thiếu coords → không show CTA | new tab blocked → link vẫn có thể copy | không cần |

## 7. SEO / structured information

- Metadata tiếng Việt riêng cho Home, loại nhựa, từng code và bản đồ.
- Trang nội dung có heading hierarchy và breadcrumb; mô tả alt đúng vật thể.
- Sitemap/robots phù hợp môi trường; loại bỏ preview URL khỏi index.
- Deep link `/ban-do?plastic=PET` khi đổi filter phải nhất quán, sửa URL được, có thể back/forward và reload.
- Không nhồi “nhựa PET tái chế 100%” hoặc từ khóa SEO giả.


---

# 04 — CONTENT STRATEGY & EDITORIAL QUALITY

**Owner:** Research/Content Agent | **Reviewer:** PO + người am hiểu môi trường/đơn vị vận hành nếu có | **Status:** Khung nội dung; thông tin chuyên môn phải rà soát trước publish.

## 1. Editorial voice

- Thân thiện, bình tĩnh, có ích; **không giáo điều, không guilt-tripping**.
- Câu ngắn, ưu tiên động từ, hình ảnh vật dụng người Hà Nội thường gặp.
- Khi không chắc: “thường gặp”, “có thể”, “tùy điểm thu gom”, “hãy kiểm tra nơi tiếp nhận” thay vì phán chắc.
- Độ tuổi đọc phù hợp người trưởng thành và học sinh lớn; giải thích thuật ngữ khi xuất hiện lần đầu.
- Không tạo bài “copy 7 lần”: mỗi trang phải có hình minh họa, công dụng, lưu ý và nguồn thực sự khác nhau.

## 2. Nguyên tắc khoa học và pháp lý

**Quan trọng:** Hai hệ thống phân loại khác nhau:

A. **Mã nhựa (resin identification code, RIC)**: nhận diện chất liệu thường ghi 1–7; nó không phải phiếu bảo đảm tái chế.

B. **Nhóm rác sinh hoạt tại nguồn**: Hà Nội có quy định năm 2025 áp dụng từ 2026 về phân loại theo nhóm chất thải và chuyển giao; cần theo hướng dẫn cụ thể của địa phương. Nguồn khởi đầu: văn bản Quyết định 87/2025/QĐ-UBND và trang thông tin chính quyền địa phương. Có trường hợp đơn vị địa phương hướng dẫn chi tiết hơn; không đánh đồng 7 mã nhựa với số nhóm rác đô thị.

Nguồn đối chiếu: https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-trien-khai-thuc-hien-quyet-dinh-cua-ubnd-thanh-pho-ve-quan-ly-chat-thai-ran-sinh-hoat-2802260211155551127.htm và https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-87-2025-QD-UBND-quan-ly-chat-thai-ran-sinh-hoat-cua-ho-gia-dinh-ca-nhan-Ha-Noi-687687.aspx . Đối chiếu bản gốc/hiệu lực trước công bố.

## 3. Data content cho 7 loại — bản brief, KHÔNG phải copy-final

| Mã | Ký hiệu | Mẫu vật minh họa đề xuất | Ghi chú biên tập |
|---|---|---|---|
| 1 | PET/PETE | Chai nước giải khát, chai nước đóng chai (xác định nhãn) | Giải thích khác nhau giữa chai/thành phần phụ như nắp/nhãn |
| 2 | HDPE | Can/chai đựng hóa mỹ phẩm hoặc sữa ở một số thị trường, thùng nhựa có nhãn | Tránh hướng dẫn xử lý chai chứa hóa chất nguy hại như rác nhựa sạch |
| 3 | PVC | Ống nhựa/nhóm bao bì có mã PVC (chọn ảnh có xác minh) | Không cam kết các trạm tái chế phổ thông tiếp nhận |
| 4 | LDPE | Túi/màng nhựa có mã phù hợp | Điểm thu gom chai cứng có thể không nhận màng/túi |
| 5 | PP | Hộp thực phẩm, nắp/hộp có xác nhận nhãn PP | Cách chuẩn bị/hạn chế bẩn; không đồng nhất PP = luôn được nhận |
| 6 | PS | Một số cốc/hộp xốp và sản phẩm PS | Phân biệt PS dạng cứng và xốp EPS; thường có giới hạn tại điểm nhận |
| 7 | OTHER | Nhóm vật liệu khác/pha trộn; tùy bao bì | Không suy luận đây là một polymer duy nhất hoặc an toàn/độc theo mã |

**Bắt buộc xác minh từng ví dụ vật dụng bằng ký hiệu vật liệu trên hình hoặc nguồn sản phẩm**. Không dùng bức ảnh minh họa có sản phẩm khác vật liệu chỉ vì giống hình dáng.

### Schema nội dung (`src/data/plastics.ts` hoặc JSON)

```ts
type PlasticCode = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface PlasticGuide {
  code: PlasticCode;
  slug: string;
  shortName: string;
  fullName: string;
  summary: string;
  typicalItems: { label: string; image: string; verifiedMaterial?: boolean }[];
  identificationNotes: string[];
  preparationSteps: string[];
  cautions: string[];
  sources: { title: string; url: string; accessedAt: string }[];
  lastReviewedAt: string; // YYYY-MM-DD
  reviewer: string;
}
```

Không gắn `isRecyclable: boolean` cho từng loại nhựa. Khả năng tiếp nhận thuộc **từng điểm thu gom**, không phải bản chất duy nhất của code.

## 4. Cấu trúc nội dung từng trang chi tiết

1. **Nhận diện:** code, tên đủ và tên ngắn, ví dụ đời thực.
2. **Dùng để làm gì:** 2–3 ví dụ đã xác thực, ảnh chuẩn.
3. **Dấu hiệu cần kiểm tra:** vị trí ký hiệu, nhãn bao bì, lưu ý vật liệu nhiều lớp.
4. **Chuẩn bị:** làm rỗng, vệ sinh/làm sạch theo tình trạng nếu được, để khô khi phù hợp; không lãng phí nước thái quá.
5. **Điểm nhận:** yêu cầu kiểm tra quy định/địa điểm, nút lọc tương ứng trên map nếu có data.
6. **Cẩn trọng:** chất có hại, đồ sắc nhọn, nhựa pha trộn.
7. **Nguồn và thời gian rà soát.**

## 5. Hướng dẫn phân loại — phiên bản copy v0 cần chuyên gia duyệt

**Title:** “Bắt đầu từ món đồ nhựa bạn đang cầm.”

**Ba bước gợi ý:**

1. **Xác định nhóm rác:** nhựa có khả năng tái sử dụng/tái chế được tách khỏi rác thực phẩm và các nhóm khác theo hướng dẫn địa phương; với bao bì dính chất nguy hại cần xử lý riêng.
2. **Nhận diện và chuẩn bị:** kiểm tra nhãn vật liệu; làm rỗng; loại bỏ lượng thức ăn tồn dư để hạn chế nhiễm bẩn; chỉ tách nắp/nhãn nếu điểm nhận yêu cầu.
3. **Kiểm tra điểm tiếp nhận:** chọn vật liệu, xem giờ/quy định từ nguồn đã xác minh, trước khi di chuyển.

*Lưu ý biên tập:* hướng dẫn “rửa sạch hoàn toàn” cho mọi vật dụng không luôn tối ưu, và hướng dẫn tháo nắp không đồng nhất mọi quy trình. Hãy dẫn người dùng đến yêu cầu của nơi nhận và cập nhật theo chính sách địa phương.

## 6. Copy micro-UX đã gợi ý

| State | Copy |
|---|---|
| Hero | “Hiểu về nhựa. Sống xanh hơn.” |
| Home secondary | “Mỗi món đồ có một cách xử lý phù hợp.” |
| CTA primary | “Khám phá 7 loại nhựa” |
| CTA map | “Tìm điểm thu gom” |
| Filter empty | “Chưa có điểm đã xác minh phù hợp với bộ lọc này. Hãy thử loại nhựa khác hoặc xem toàn bộ điểm.” |
| Missing hours | “Giờ tiếp nhận: Chưa được xác nhận. Vui lòng kiểm tra với điểm thu gom trước khi đến.” |
| Data freshness | “Thông tin được kiểm tra lần gần nhất: [ngày]. Vui lòng xác nhận lại trước khi di chuyển.” |
| Map down | “Bản đồ hiện chưa tải được. Bạn vẫn có thể xem danh sách các điểm bên dưới.” |
| Material caution | “Mã nhựa cho biết loại vật liệu; không bảo đảm mọi địa điểm đều nhận tái chế.” |

## 7. Workflow nghiên cứu → duyệt → publish

1. Research Agent tìm nguồn primary/secondary đáng tin; trích dữ kiện có ngày.
2. Viết bản copy tiếng Việt mới, không sao chép bài báo, ghi `sourceUrl`, `accessedAt`.
3. Phân loại claim: **confirmed** / **context-specific** / **unverified**.
4. Người review kiểm tra tính đúng chuyên môn/địa phương, loại bỏ claim chưa xác minh.
5. Design Agent đặt text thật lên bố cục; tránh truncation/hidden content.
6. FE mã hóa thành data; content checks + link check CI.
7. PO duyệt chính tả, tone, nguồn, ngày cuối trước release.

## 8. Editorial release checklist

- [ ] Có đủ 7 mã nhựa, không nhầm PET/PP, PS/EPS, PVC/OTHER.
- [ ] Không nói mã 1/2/5 “luôn tái chế được” hay mã 7 “luôn độc hại”.
- [ ] Đúng luật phân loại tại nguồn; người đọc hiểu đây không phải toàn bộ quy trình địa phương.
- [ ] Mỗi ảnh minh họa đúng mã và có quyền sử dụng.
- [ ] Không khẳng định điểm thu gom nhận vật liệu chưa xác minh.
- [ ] Mọi con số thống kê nếu có phải ghi nguồn/năm/phạm vi.
- [ ] Bài đầy đủ nguồn, người biên tập, ngày duyệt; links sống.
- [ ] CTA có dẫn đến trang thật, không tới placeholder.


---

# 05 — COLLECTION POINT DATA & MAP GOVERNANCE

**Đây là rủi ro quan trọng nhất của sản phẩm.** Bản đồ đẹp nhưng chỉ sai một điểm nhận cũng gây hại niềm tin người dùng.

## 1. Điều đã tìm thấy từ desk research (13/10/2026)

Các nguồn sau là **đầu mối cần xác minh**, không phải danh sách địa chỉ đủ điều kiện công bố:

- **Ưu tiên cao nhất — URENCO 100 HUB (09/2026):** URENCO và đối tác công bố triển khai/thí điểm mạng lưới 100 điểm phân loại/thu hồi vật liệu tái chế trong khu vực từ Vành đai 2 vào trung tâm Hà Nội; báo Nông nghiệp & Môi trường nói chương trình có **bản đồ số** để tra cứu và HUB có mã định danh. Việc có chương trình **không đồng nghĩa** đã nhận được file địa chỉ/toạ độ/điều kiện tiếp nhận từng HUB. PO nên **liên hệ URENCO xin nguồn dữ liệu/bản đồ chính thức, quyền tái sử dụng, lịch cập nhật và đầu mối xác minh** trước khi làm dataset. Nguồn: https://nongnghiepmoitruong.vn/urenco-thi-diem-100-diem-phan-loai-thu-hoi-vat-lieu-tai-che-d831371.html và https://english.nnmt.net.vn/21-days-of-waste-sorting-making-source-separation-part-of-urban-life .

- Báo Nhân Dân 10/04/2025 mô tả dự án Tagom và hoạt động thu gom ở Thanh Xuân Bắc; không đủ bằng chứng địa điểm/lịch hiện tại: https://nhandan.vn/post-871467.html .
- VnExpress bài cũ 2020 nêu hoạt động Urenco và ví dụ tại 59C Hoàng Cầu; quá cũ để coi còn hoạt động năm 2026: https://vnexpress.net/ha-noi-phan-loai-rac-tu-nguon-de-tai-che-4157466.html .
- Vietnamnet đưa tin mạng lưới thu gom bao bì của Coca-Cola/đối tác mở rộng Hà Nội, TP.HCM; cần xin danh mục địa điểm chính thức hiện hành và loại bao bì: https://vietnamnet.vn/coca-cola-mo-rong-30-diem-thu-gom-bao-bi-tai-ha-noi-va-tphcm-2559851.html .
- Trang UBND xã Dân Hòa có lịch xe thu gom rác tái chế theo địa bàn, là **dịch vụ lưu động theo lịch**, không tự động biến thành marker “trạm cố định”: https://danhoa.hanoi.gov.vn/thong-bao/thong-bao-lich-thu-gom-rac-thai-sinh-hoat-rac-tai-che-tren-dia-ban-xa-dan-hoa-tu-ngay-01-6-2026-2765260610195708054.htm .

**Kết luận:** web search giúp tìm lead, **không xác minh thời gian hoạt động, chất liệu nhận, tọa độ, tính công khai**. Không có bộ dữ liệu đã xác minh nào được cung cấp cho pack này.

## 2. Verification protocol (bắt buộc)

Mỗi ứng viên đi qua pipeline:

`SOURCED → CONTACT_PENDING → VERIFIED → PUBLISHED → RECHECK_DUE → [REVERIFIED | PAUSED | RETIRED]`.

- **SOURCED:** có nguồn gốc đáng tin, địa chỉ gợi ý.
- **CONTACT_PENDING:** cần gọi/email/đến nơi xác nhận; AI không được giả mạo việc đã gọi.
- **VERIFIED:** người có trách nhiệm kiểm tra được điểm thật, tọa độ, loại nhựa nhận, điều kiện giao, lịch nhận, có quyền công khai.
- **PUBLISHED:** đã qua review PO & Data Steward; xuất bản từ dữ liệu verified.
- **RECHECK_DUE:** đã đến kỳ rà soát (gợi ý 60 ngày với nơi cố định, ngắn hơn nếu lịch sự kiện).
- **PAUSED/RETIRED:** tạm dừng/đóng/mất liên hệ; tự động ẩn khỏi kết quả “đang tiếp nhận” khi hết xác minh.

**Chứng cứ phù hợp:** website chính thức công bố danh mục còn hiệu lực; xác nhận trực tiếp của đơn vị vận hành có ngày và tên người kiểm chứng; ảnh hiện trường được phép sử dụng + tin cậy; lịch cơ quan địa phương còn hiệu lực. Bản đồ Google/OSM hoặc tin báo cũ **không** đủ tự thân để xác nhận nhận loại nhựa nào.

## 3. Schema dữ liệu đề xuất

```ts
type Resin = 'PET' | 'HDPE' | 'PVC' | 'LDPE' | 'PP' | 'PS' | 'OTHER';
type PointStatus = 'sourced' | 'contact_pending' | 'verified' | 'published' | 'recheck_due' | 'paused' | 'retired';
type CollectionMode = 'fixed' | 'scheduled_mobile' | 'event_only';

interface CollectionPoint {
  id: string; // immutable slug/UUID
  name: string;
  fullAddress: string;
  wardOrArea?: string; // tên hành chính phải kiểm tra theo hiện trạng
  city: 'Hà Nội';
  location: { lat: number; lng: number }; // WGS84 đã kiểm tra
  collectionMode: CollectionMode;
  acceptedResins: Resin[]; // chỉ chứa material ĐÃ XÁC NHẬN
  preparationNotes?: string;
  scheduleText?: string; // text đã xác minh, không đoán open-now
  instructions?: string;
  publicContact?: string; // chỉ contact của tổ chức được phép công khai
  source: { title: string; url?: string; type: string; checkedBy: string };
  verifiedAt: string; // YYYY-MM-DD
  nextReviewAt: string; // YYYY-MM-DD
  status: PointStatus;
  publicationApprovedBy?: string;
  publicationApprovedAt?: string;
}
```

**Quan hệ logic:** `acceptedResins=[]` không đồng nghĩa “không nhận nhựa”; nghĩa là chưa được xác nhận. Điểm này không được đưa ra như nơi nhận nhựa qua filter; tốt nhất chưa xuất bản cho tới khi chứng minh được ít nhất một loại nhựa.

## 4. Data validation bắt buộc

- id duy nhất, non-empty name/address; WGS84 coords finite, trong bounding box Hà Nội thiết lập theo nguồn hành chính; kiểm tra thủ công xem pin trên đúng lối vào.
- Status `published` bắt buộc `verifiedAt`, `nextReviewAt`, nguồn, người duyệt, ít nhất 1 acceptedResin, tọa độ địa điểm thật.
- `verifiedAt <= current date`; `nextReviewAt >= verifiedAt`; quá hạn thì flag `recheck_due` và ẩn hay dán nhãn chờ rà soát theo quyết định PO (mặc định ẩn).
- De-duplicate theo tên/địa chỉ/tọa độ; điểm sự kiện không được vĩnh viễn.
- Không lưu số cá nhân của tình nguyện viên, số riêng không được phép chia sẻ.
- Link ngoài chỉ https (ngoại lệ `mailto:`/`tel:` có phê duyệt); escape nội dung HTML, không render raw HTML từ dataset.

## 5. Map interactions và UI contract

- Map center mặc định vị trí nhìn Hà Nội (không dùng location người dùng); map tile thực hiện theo chính sách nhà cung cấp.
- Card ↔ marker highlight đồng bộ. Filter theo acceptedResins **đã xác minh**, URL query sync; có clear all.
- List mode song song/map fallback đầy đủ; marker click không phải cách duy nhất để truy cập địa điểm.
- Chỉ đường: link người dùng chọn mở Google Maps/ứng dụng map; **không** tính/dự đoán thời gian di chuyển bằng nội bộ nếu không có API.
- Không sử dụng nhãn `Open now` nếu không có dữ liệu lịch & múi giờ đáng tin.
- Hiện `last verified` và câu nhắc “Liên hệ xác nhận trước khi tới” nếu dữ liệu không realtime.
- `report an issue` có thể là mailto có thông tin ID điểm, không thu thập form người dùng ở V1 nếu chưa duyệt privacy.

## 6. Nhà cung cấp bản đồ & sử dụng hợp lệ

- Leaflet là thư viện render, **không cung cấp dữ liệu marker**; OSM là dữ liệu bản đồ, cũng **không chứng minh** trạm thu gom hoạt động.
- Nếu dùng `tile.openstreetmap.org` phải: hiển thị attribution rõ, URL HTTPS đúng, không prefetch/offline download, tuân thủ caching/referrer, và biết dịch vụ best-effort, **không SLA**. Với production có traffic đáng kể nên đánh giá hosted tile provider với terms/cost phù hợp.
- Link chính sách: https://operations.osmfoundation.org/policies/tiles/ .
- Không được dùng bulk Nominatim geocoding hoặc scraping tile tùy tiện. Geocoding danh sách ứng viên nên thực hiện có trách nhiệm với provider cho phép và kiểm tra địa chỉ bằng người.

## 7. Kế hoạch thu thập dữ liệu V1

1. PO xin khách hàng **nguồn hợp tác/chủ trạm/đối tác** có thẩm quyền cập nhật; **ưu tiên tiếp cận URENCO** để xin dữ liệu/bản đồ 100 HUB và điều khoản tái sử dụng chính thức (không scrape bản đồ bên thứ ba).
2. Data Steward tạo sheet `collection-candidates` tách khỏi production; ghi nguồn và độ tin cậy.
3. User hoặc đại diện khách hàng liên hệ xác minh lần lượt; đưa bằng chứng, date, accepted materials, schedule.
4. Map Dev nhập verified dataset theo schema, chạy validation.
5. QA kiểm pin ↔ address ↔ accepted materials, đường dẫn directions, map/list, mobile.
6. PO ký duyệt công bố và lịch kiểm tra định kỳ; chỉ sau đó set `published`.

**Mục tiêu kiểm thử launch đề xuất:** ≥3 địa điểm được xác minh độc lập nếu có nguồn/đối tác đủ mạnh. Không tạo marker giả để đạt chỉ tiêu. Nếu 0 địa điểm thật, không được gọi bản đồ là “danh sách các trạm đang hoạt động”; PO phải xin phê duyệt fallback/giảm scope trước public.

## 8. Test dữ liệu (gọi mã trong QA plan)

- `DATA-01`: unpublished/expired excluded from production map.
- `DATA-02`: ID duplicate, bad coords, future verifiedAt → validation fails.
- `DATA-03`: point showing `PET` really has PET confirmed in evidence.
- `DATA-04`: after retiring location, it disappears from list/map and URLs fail gracefully.
- `DATA-05`: scheduled-mobile/event point not represented as 24/7 permanent pin.
- `DATA-06`: visible OSM attribution and map fallback on blocked tiles.


---

# 06 — TECHNICAL ARCHITECTURE & ENGINEERING STANDARDS

**Owner:** Tech Lead / Frontend Lead | **Source of truth:** PRD + approved design | **Architecture:** static-first, no custom backend in V1.

## 1. Stack & rationale

| Layer | Baseline | Lý do / hạn chế |
|---|---|---|
| App | Next.js App Router, TS strict | Pages/router/static rendering/SEO |
| UI | Tailwind CSS v4, reusable components | Dùng token từ thiết kế, hạn chế style tùy tiện |
| Icons | Lucide React | Chức năng, không thay cho ảnh editorial |
| Motion | CSS transitions; Motion nếu thật cần | Reduced motion mặc định; GSAP optional ở Phase 2 nếu UI design yêu cầu |
| Data | Typed local `.ts` hoặc JSON + Zod validation (đề xuất) | Không cần server/database ở V1, dữ liệu có version, được review qua Git |
| Maps | Leaflet + React Leaflet (version compatible) | Client-only component; server-render SEO text/list |
| Tests | Vitest + Testing Library + Playwright + axe-core | Logic, component, E2E, accessibility tự động |
| Hosting | Vercel hoặc nền tảng hỗ trợ Next.js | Preview deployments, HTTPS, rollback; lựa chọn cuối thuộc khách hàng |

**Không khẳng định package version cụ thể trong tài liệu.** Tech Lead phải khóa dependency tương thích trong lockfile trước khi code, đọc current docs; không auto-upgrade không kiểm tra.

## 2. Render strategy & boundaries

- Home, pages kiến thức, chi tiết nhựa, sorting: ưu tiên **Server Components/SSG**; SEO và nội dung có sẵn ngay từ HTML.
- Map UI dùng `dynamic` client wrapper `ssr: false` **trong Client Component phù hợp**, vì Leaflet cần DOM; tránh `window is not defined`.
- List điểm và page copy hoạt động độc lập khỏi tile; có thể server-render initial list/metadata.
- `use client` chỉ đặt ở component cần state/DOM event, không đặt toàn bộ app layout.
- Assets dùng `next/image` (nếu phù hợp), width/height để tránh CLS; ưu tiên AVIF/WebP; tải lazy below fold; preload hero chính có kiểm tra.

## 3. Cấu trúc code đề xuất

```text
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    globals.css
    loai-nhua/page.tsx
    loai-nhua/[slug]/page.tsx
    phan-loai/page.tsx
    ban-do/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/{Header,Footer}.tsx
    home/{Hero,EditorialSection,PlasticPreview,MapCTA}.tsx
    plastics/{PlasticCard,PlasticDetail}.tsx
    sorting/{SortingGuide,FAQ}.tsx
    map/{CollectionMap.client,MapView,PointList,PointCard,Filters}.tsx
    ui/{Button,Breadcrumb,EmptyState,ErrorState}.tsx
  data/{plastics,sorting,collection-points}.ts
  lib/{navigation,filter-points,urls,validation,seo}.ts
  types/{plastic,collection-point}.ts
  styles/tokens.css  # nếu được thiết kế yêu cầu
public/assets/{resins,editorial,icons}/
tests/{unit,e2e,fixtures}/
docs/  # nhúng bộ delivery pack này hoặc link đến nguồn truth
```

**Đối với code Phase 1 đã được user hướng dẫn từ trước:** Agent audit trước. Nếu đã có `Header`, `Footer`, `globals.css`, routes thì refactor có kiểm soát; không tự xóa code hoặc làm lại toàn repo.

## 4. Contract logic và URL

- Stable route: `/loai-nhua?` all + `/loai-nhua/pet`, `/hdpe`, `/pvc`, `/ldpe`, `/pp`, `/ps`, `/other`.
- Stable map query: `/ban-do?plastic=PET` (case normalized, whitelist); dữ liệu để lọc là acceptedResins của điểm **đã verified**.
- Data function thuần (có unit test): `getPublishedCollectionPoints`, `filterCollectionPoints`, `getPlasticBySlug`, `getDirectionsUrl`, `formatVerifiedDate`.
- `getDirectionsUrl`: validate finite coords; build link với encodeURIComponent hoặc URLSearchParams; target `_blank`/rel an toàn. Không hiển thị nếu invalid.
- `lastReviewedAt` bài viết và `verifiedAt` địa điểm tách nhau.

## 5. Data reliability / security

- `src/data/plastics.ts` phải 7 code duy nhất, slug duy nhất, source không rỗng, alt ảnh có thật.
- `src/data/collection-points.ts`: chỉ published mới được build vào public export; ưu tiên build-time validation khiến build fail nếu dữ liệu sai.
- External URLs validate, no `dangerouslySetInnerHTML` nội dung nguồn ngoài.
- Không đưa Google Maps secret key/token, thông tin cá nhân, nội bộ/điện thoại riêng vào public bundle.
- Không bật analytics/cookie/tracking mặc định; trước khi bật phải duyệt phương án riêng tư/cookie (nếu cần).
- Nếu dùng provider tile/API có API key, đánh giá hạn chế domain và phía server phù hợp.

## 6. Non-functional implementation

**Accessibility:** skip link, semantic nav/main, `aria-current`, visible focus, alt đúng ảnh, filter keyboard accessible, marker/map list equivalent. `prefers-reduced-motion` tắt motion không thiết yếu. Test thiết bị touch và zoom 200%.

**Performance:** render content above fold không phụ thuộc animation; tối ưu hero LCP; code-split Leaflet khỏi Home/other pages; tránh heavy 3D; debounce search/filter nếu thêm text search. Đọc và tuân thủ map tile policy.

**SEO:** metadata per-route, OG static assets có quyền, sitemap, robots, canonical, headings và breadcrumbs; bảo đảm preview environment `noindex` (cấu hình phải review).

## 7. CI pipeline (khuyến nghị)

```text
Pull Request
  ├── npm ci
  ├── npm run lint
  ├── npm run typecheck
  ├── npm run test:unit
  ├── npm run data:validate
  ├── npm run build
  └── npm run test:e2e  (Chrome + mobile viewport, trên preview server)
       └── Playwright screenshot diff / axe smoke

Main branch → preview/staging → human UAT → production deploy
```

**Lệnh trên là scripts mong muốn cần được team khai báo trong `package.json`; hiện chưa xác nhận repo có sẵn.** Không được báo “CI xanh” nếu chưa chạy.

## 8. Git / code review standards

- Protected main; branch `feat/TICKET-short-name`, `fix/TICKET-short-name`.
- Small PR with objective, acceptance checklist, screenshots desktop/mobile, tests run, risks, source/license changes.
- Content/data PR bắt buộc review Data Steward + PO; visual PR review Design Agent; test evidence review QA Agent; Tech Lead kiểm type/perf/security.
- Không merge PR khi lint/typecheck/build fail, hoặc chưa có design/content approvals.
- Lockfile commit. Dependency inventory + license attribution.

## 9. Phát hành tối thiểu

- Nếu dùng Vercel: root, env, build/start được ghi runbook; không cấp quyền cho agent không cần; branch protection & secret policies.
- No backend nghĩa là update địa điểm sẽ qua PR/CI/redeploy; cần **người sở hữu dữ liệu sau launch**. Nếu nhiều update hằng ngày/khách hàng cần tự chỉnh sửa, mở RFC bổ sung CMS ở V1.1.
- Không nên chọn Kubernetes cho website này chỉ vì đội đã học K8s; Vercel/managed hosting đơn giản hơn cho V1. Kubernetes chỉ sau khi có yêu cầu vận hành cụ thể.


---

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


---

# 08 — QA MASTER TEST PLAN: V1 PUBLIC RELEASE

**Owner:** Independent QA Agent | **Accountable:** PO | **Test types:** Static/content, unit, component, integration, E2E, visual, accessibility, performance, privacy/security, UAT.

## 1. Test strategy

Tập trung theo rủi ro: **sai dữ liệu trạm**, **sai cách phân loại**, **mobile UX**, **map lỗi**, **visual không giống design**, **SEO/accessibility**. QA phải kiểm cả tình huống “không có dữ liệu/không có mạng”, không chỉ happy path.

**Environments:** local dev (có fixture ghi rõ MOCK), preview/staging (có thể có mock nhưng banner bắt buộc), production (CHỈ dữ liệu verified đã duyệt). Dữ liệu mock không được cùng file dữ liệu production.

**Devices/browsers tối thiểu:** Chrome desktop, Edge desktop, Safari iOS hoặc device thật nếu có, Chrome Android; responsive 320/375/390/768/1024/1440; thử 200% zoom; keyboard navigation.

**Severity:** `S0` an toàn/sai dữ liệu có thể gây hại, leak, site down; `S1` core journey blocked/sai quan trọng; `S2` chức năng phụ/đẹp; `S3` cosmetic. `S0/S1` phải zero trước go-live. `S2` có thể release nếu PO ghi accept risk và workaround, không được mặc nhiên bỏ.

## 2. Test matrix chi tiết

| ID | Mức | Setup / thao tác | Kết quả kỳ vọng |
|---|---|---|---|
| NAV-01 | P0 | Từ Home nhấp từng mục Header/Footer | Đúng URL, nội dung đúng, active state, không 404 |
| NAV-02 | P0 | Mobile mở menu → chọn mục → back | Menu đóng và URL đúng; keyboard/ESC nếu overlay |
| NAV-03 | P0 | Bấm skip-to-content & Tab xuyên Header | Focus visible; thứ tự logic; không keyboard trap |
| HOME-01 | P0 | Desktop/mobile mở `/` | H1, CTA, section chính thấy được; không overflow |
| HOME-02 | P0 | Bấm 3 CTA nội dung | Điều hướng đúng Library/Sorting/Map |
| HOME-03 | P0 | Bật prefers-reduced-motion | Nội dung hiển thị, không scroll-jack |
| PL-01 | P0 | Mở `/loai-nhua` | Đúng 7 mã 1–7, duy nhất, ảnh không sai mã |
| PL-02 | P0 | Click PET/HDPE/OTHER | Trang detail chính xác, breadcrumb/nguồn/caution |
| PL-03 | P0 | Mở slug không tồn tại | 404 thân thiện; không crash |
| PL-04 | P0 | Click CTA “Tìm nơi nhận PET” | URL query chính xác, filter map tương ứng |
| PL-05 | P0 | Review chữ và nguồn | Không khẳng định mọi vật dụng đều tái chế; source rõ |
| SORT-01 | P0 | Mở `/phan-loai` | Các bước rõ; phân biệt nhóm rác địa phương và mã 1–7 |
| SORT-02 | P0 | Đọc ví dụ hộp dính dầu/chai hóa chất | Có cảnh báo khác nhựa sạch; không hướng dẫn nguy hiểm |
| SORT-03 | P1 | FAQ accordion qua keyboard | Enter/Space và aria-expanded đúng, không che nội dung |
| MAP-01 | P0 | Mở `/ban-do` với dữ liệu verified | Map và list có cùng số item sau filter |
| MAP-02 | P0 | Lọc PET → PP → reset | Đúng `acceptedResins`, URL query khớp, kết quả đúng |
| MAP-03 | P0 | Không có kết quả filter | Empty state rõ và nút reset hoạt động |
| MAP-04 | P0 | Click card A rồi marker B | Selected state/popup và card đồng bộ |
| MAP-05 | P0 | Tắt tile network / block request | Map báo lỗi nhẹ, danh sách vẫn xem/click được |
| MAP-06 | P0 | Query `?plastic=INVALID` | Không crash; fallback/reset query an toàn |
| MAP-07 | P0 | Mở chỉ đường 1 điểm | Link hợp lệ dùng tọa độ của điểm (không phải Hà Nội center) |
| MAP-08 | P0 | Không cấp permission geolocation | Không cần permission; flows vẫn hoạt động |
| MAP-09 | P0 | Điểm thiếu giờ nhận | Không tự in “Đang mở” hoặc giờ tự đoán |
| MAP-10 | P0 | Mobile map/list toggle | Có thể dùng riêng list, không che filter, không overflow |
| DATA-01 | P0 | Fixture statuses: sourced, published, retired | Chỉ published chưa quá hạn xuất hiện public |
| DATA-02 | P0 | Duplicate ID / coord invalid / future verify date | Validation script báo lỗi và build fail |
| DATA-03 | P0 | Audit 100% điểm công khai | Có chứng cứ địa chỉ/tọa độ/nhựa nhận/lịch hiện hành |
| DATA-04 | P0 | Thay trạng thái published→retired | Pin và list biến mất sau deploy |
| DATA-05 | P0 | Event/scheduled-mobile dataset | Không hiển thị như điểm cố định 24/7 |
| DATA-06 | P0 | Xem map footer trên mobile | © OSM contributors/attribution không bị che |
| CONT-01 | P0 | Review full copy, spelling, sources | Không typo nghiêm trọng, URL nguồn đúng, text thật tiếng Việt |
| CONT-02 | P0 | Audit ảnh/fonts/icons | Manifest bản quyền, alt, không sao chép web mẫu |
| A11Y-01 | P0 | Axe scan các trang | Không có serious/critical violations; manual keyboard pass |
| A11Y-02 | P0 | Contrast & zoom 200% | Body/button/tag dễ đọc; không che controls; focus rõ |
| VIS-01 | P0 | Screenshots 1440/390 đối chiếu hi-fi | Layout đúng token/spacing/typography; lệch được Design duyệt |
| VIS-02 | P0 | Long address/titles/diacritics | Không tràn, không bị cắt phần quan trọng |
| PERF-01 | P0 | Lighthouse mobile Home/library/sorting | Mục tiêu PRD; lưu audit + thiết bị/điều kiện, có review regression |
| PERF-02 | P0 | Lazy load map/library | JS map không vào bundle home không cần; ảnh không gây CLS |
| SEO-01 | P0 | Crawl pages/inspect metadata | Title/meta/canonical/H1/OG/sitemap/robots đúng, preview noindex |
| SEC-01 | P0 | Audit bundles/network | Không secrets, data cá nhân, external raw HTML injection |
| SEC-02 | P0 | Dependency + headers/link | No known high/critical unresolved; `_blank` an toàn |
| OPS-01 | P0 | Production smoke + rollback rehearsal | URL sống, preview/prod khác nhau, có quy trình quay lại |

## 3. Test automation đề xuất

### Unit tests (Vitest)

- `getPlasticBySlug`: 7 hợp lệ, không hợp lệ → undefined/404.
- `filterCollectionPoints`: xác thực PET + status published + còn hạn, reset, invalid query, acceptedResins empty.
- `validatePoints`: duplicate, missing evidence, NaN/out-of-bounds coords, dates inconsistent → throws.
- `getDirectionsUrl`: lat/lng hợp lệ, URL encoded; invalid thì không tạo link.
- `validateContent`: unique resin codes, ảnh có alt, sources hợp lệ.

### E2E smoke skeleton (sau khi UI có accessible names)

```ts
import { test, expect } from '@playwright/test';

test('home contains the primary navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: /các loại nhựa/i }).first()).toBeVisible();
});

test('7 plastic codes and a detail page load', async ({ page }) => {
  await page.goto('/loai-nhua');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: /PET/i }).first()).toBeVisible();
  await page.goto('/loai-nhua/pet');
  await expect(page.getByText(/PET/i).first()).toBeVisible();
});

test('map list remains usable without map tiles', async ({ page }) => {
  await page.route('**/tile.openstreetmap.org/**', route => route.abort());
  await page.goto('/ban-do');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  // Hợp đồng selector/nội dung list do Map Agent & QA thống nhất tại implementation.
  await expect(page.getByRole('region', { name: /danh sách điểm thu gom/i })).toBeVisible();
});
```

**Chú ý:** trên đây là template tests mục tiêu; selector/route blocking cần chỉnh theo code thật. Khi không có điểm công khai đã verified, test phải xác minh empty state thay vì ép có items. Không claim tests passed khi chưa chạy.

### Visual regression

- Design xuất reference screenshots 1440 và 390 cho Home/Plastic List/Detail/Sorting/Map states.
- QA dùng Playwright screenshot snapshot có nền tảng chạy thống nhất; giữ golden image trong repo; không cập nhật snapshot chỉ để xóa fail. Mọi thay đổi baseline cần Design/PO review.
- Snapshot không thay thế visual review thủ công font tiếng Việt, crop ảnh, animation, cảm giác “AI-looking”.

### Accessibility

- `@axe-core/playwright` cho automated smoke; manual Tab/Shift+Tab, Enter/Space, ESC, focus, text size, giảm chuyển động, screen reader quick test.
- Test map bằng list chỉ qua keyboard, không phụ thuộc pointer.

## 4. Test data & bằng chứng

- `fixtures/plastics.valid`: đủ 7 mã.
- `fixtures/points.valid`: 3 điểm **mock**, hostname `example.invalid`, name prefix `[MOCK]`, tọa độ giả cho TEST ONLY; không ship client bundle production.
- `fixtures/points.invalid`: bad coords, duplicate ID, expired source, unverified status.
- `production/points`: chỉ dữ liệu có chữ ký/verifier & approved; không copy từ fixtures.
- Evidence bắt buộc: CLI output (`lint`, `typecheck`, `build`, unit, e2e); Lighthouse HTML/JSON; accessibility report; annotated screenshots; bug tickets; verification sheet; UAT signoff.

## 5. Performance goals và cách đọc đúng

- Mục tiêu trước release: Lighthouse mobile Performance ≥85 **trong lab** trên Home, Plastic List/Detail, Sorting; Accessibility/Best Practices/SEO ≥90 hoặc lý do chấp thuận ngoại lệ. Bản đồ đánh giá riêng dưới network throttle và chức năng fallback.
- Core Web Vitals tốt khi có **field data p75**: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 (nguồn: https://web.dev/articles/vitals). Đây là mục tiêu, không dùng lighthouse lab để tuyên bố field CWV đạt.
- Regression: nếu bundle/map dependency tăng đáng kể, cần Tech Lead đánh giá và QA đo lại.

## 6. Exit criteria / QA sign-off

- Mọi test P0 pass hoặc ngoại lệ được PO + khách hàng ký trong release decision.
- Không có S0/S1 open; tất cả S2 có owner + ETA/backlog.
- Người thật duyệt nội dung/địa điểm; QA không tự nhận trách nhiệm xác minh thực địa.
- Đủ test evidence và reproducible commands; commit hash & preview URL.
- 100% dữ liệu công khai đã duyệt; 0 điểm giả/không nguồn.


---

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


---

# 10 — UAT, RELEASE & POST-LAUNCH RUNBOOK

**Release candidate:** V1.0.0 (chưa phát hành) | **Owner:** PO + QA + DevOps | **Policy:** Không production launch chỉ vì code build thành công.

## 1. Trước khi mở staging cho khách hàng

- [ ] Có commit SHA/tag release candidate, khóa dependency lockfile.
- [ ] `lint`, `typecheck`, `test:unit`, `data:validate`, `build`, `test:e2e` xanh; có logs/links.
- [ ] Design Agent xác nhận 5 màn hình mobile/desktop bám thiết kế đã duyệt; không dùng ảnh thiếu quyền.
- [ ] Content reviewer xác nhận 7 loại, sorting copy, nguồn và bản địa hóa.
- [ ] Data Steward + human verifier gửi record/trạm thực tế; danh sách production không có candidate/mock/expired.
- [ ] QA có test report (S0/S1=0, exceptions có phê duyệt).
- [ ] Đã kiểm Lighthouse/axe/keyboard trên representative pages.
- [ ] Preview/staging có `noindex`; link staging không lẫn với production.
- [ ] Privacy/terms/attribution được khách hàng xem qua.
- [ ] Đã chuẩn bị người sở hữu cập nhật điểm thu gom sau phát hành.

## 2. UAT 5 kịch bản thật (10–20 phút mỗi người, điều chỉnh theo thực tế)

| UAT | Bối cảnh người dùng | Nhiệm vụ | Kết quả chấp nhận |
|---|---|---|---|
| UAT-01 | Chưa biết mã nhựa | Tìm PET, xem ví dụ và cách chuẩn bị | Tìm được <2 điều hướng từ Home; nhận thức mã nhựa không bảo đảm tái chế |
| UAT-02 | Có hộp nhựa | Vào phân loại và kể lại 3 bước | Hiểu nhóm rác, biết cần chuẩn bị và kiểm tra nơi nhận |
| UAT-03 | Muốn đem rác đi | Lọc nhựa → chọn điểm phù hợp → chỉ đường | Chỉ tới điểm **đã xác minh**, đọc được địa chỉ/giờ/nguồn |
| UAT-04 | Mobile user | Mở menu, đọc chi tiết, chuyển Map/List | Dễ chạm, không cắt chữ, không cần pinch map mới thấy địa điểm |
| UAT-05 | Giới hạn/tình huống lỗi | Lọc không kết quả, chặn map tiles | Có trạng thái hữu ích; danh sách vẫn chạy/không crash |

**Ghi nhận:** người thử, kịch bản, timestamp, observation, câu trích thực tế (nếu đồng ý), bug ticket, critical confusion, quyết định sửa. Không bịa kết quả khảo sát.

## 3. Go/No-Go meeting (15–30 phút)

Tham dự: User (đầu mối), PO, Tech Lead, QA, Design, Data/Content owner và khách hàng hoặc người được ủy quyền.

Báo cáo gồm:
- Scope thực hiện vs PRD; câu hỏi còn mở.
- Demo 4 journeys, desktop/mobile, map offline fallback.
- Quality dashboard: tests, bugs, performance, a11y, SEO.
- Danh sách điểm công khai và tình trạng xác minh; nguồn license.
- Privacy/hosting cost/owner of operations.
- Rollback path, contact on incident.

Kết luận bắt buộc ký **GO** hoặc **NO-GO**, không “tự hiểu là đã đồng ý”.

## 4. Production deployment checklist

- [ ] Domain, SSL, DNS, legal footer/organization thông tin chính xác.
- [ ] Production env đặt đúng provider/config; không leak `.env`, preview keys.
- [ ] Tắt mock/test toggles; production dataset đã được duyệt.
- [ ] Robots index bật cho các trang public đã duyệt; sitemap/canonical production đúng.
- [ ] Kiểm OSM attribution visible và tile provider terms.
- [ ] Security headers phù hợp, no secrets public, HTTPS.
- [ ] Cache revalidation/deployment correctly bust nội dung địa điểm cũ.
- [ ] Rollback artifact/deployment trước đó còn truy cập; xác định ai có quyền rollback.

## 5. Production smoke ngay sau deploy

1. Mở homepage trên mobile/desktop; logo, fonts, ảnh và CTA.
2. Mở list, cả 7 chi tiết nhựa, sorting, map.
3. Test 1 địa điểm được xác minh: filter / card / pin / directions.
4. Chặn tile / mạng chậm và kiểm list fallback.
5. Kiểm external links, sitemap, robots, SSL, console error, analytics/cookie status (nếu có).
6. Cập nhật deployment URL + SHA + thời điểm + QA signer vào release log.

## 6. Rollback & incident response

| Mức | Ví dụ | Hành động |
|---|---|---|
| Sev 0 | Công bố nhầm trạm, dữ liệu cá nhân/leaked key, site mất hoàn toàn | Disable site/rollback ngay; ẩn dữ liệu liên quan; contact PO + khách hàng; điều tra nguồn |
| Sev 1 | Map không dùng được và list fallback cũng hỏng; route chính lỗi | Rollback bản ổn định hoặc hotfix được QA smoke |
| Sev 2 | Misalignment visual nhỏ, một ảnh hỏng không ảnh hưởng flow | Ticket + hotfix theo kế hoạch, không ưu tiên trên Sev 0/1 |

**Rollback:** Vercel (nếu dùng) redeploy/restore prior known-good deployment theo quyền được ủy quyền; nếu hosting khác phải ghi thao tác tương đương. Sau rollback chạy lại smoke và xác minh cache/data không còn sai. Không yêu cầu AI hành động production nếu chưa cấp quyền/được phê duyệt.

## 7. Operational ownership sau release

- **PO/User:** tiếp nhận phản hồi khách hàng và ưu tiên bugs.
- **Content Owner:** rà soát 7 guides khi có thay đổi nguồn, ít nhất theo định kỳ đã thống nhất (đề xuất mỗi quý).
- **Data Steward (human in the loop):** kiểm tra lại trạm theo lịch (đề xuất 60 ngày; địa điểm sự kiện theo ngày kết thúc), pause khi không xác nhận được.
- **Tech Lead:** dependency updates, build health, logs, tile provider capacity/cost.
- **QA:** regression khi thay đổi dữ liệu/layout/hạ tầng.

## 8. Release notes template

```md
Release: V1.0.0
Date / timezone: ... (Asia/Bangkok / Vietnam UTC+7)
Commit SHA: ...
Production URL: ...
What's included: Home, Resin Library, Sorting, Verified Collection Map
Data: # published verified points ... ; latest verification date ...
Known issues / limitations: ...
Tests: link to report ...
Content approval: ...
Design approval: ...
Customer/UAT signoff: ...
Rollback URL/deployment: ...
Operations contact: ...
```

Không tự điền giả ngày, số điểm, test pass hay chữ ký.


---

# 11 — DESIGN AGENT TOOLING RESEARCH & HANDOFF

**Nghiên cứu ngày:** 13/10/2026. Đây là đánh giá *fit-for-purpose* theo tài liệu chính thức và nhu cầu dự án, **không** phải benchmark tốc độ/chất lượng có đo lường của Codex/Claude.

## 1. Khuyến nghị PO

> **Workflow ưu tiên:** **Figma Design + Figma AI/Figma Make** để có thiết kế được chỉnh sửa/duyệt; **Google Stitch** để khám phá concept nếu cần; **v0** để dựng thử component React/Next.js và đọc Figma handoff; **Codex hoặc Claude Code** để thực hiện, tích hợp và test dự án thực tế.

Đội AI không nên giao một coding agent vừa invent visual direction, vừa code, vừa tự duyệt kết quả. Một **Design Agent có trách nhiệm visual QA** độc lập chính là yếu tố quan trọng nhất để tránh UI “AI template”.

## 2. So sánh theo vai trò

| Công cụ | Khả năng xác nhận từ tài liệu | Tốt nhất dùng khi | Hạn chế/cảnh báo |
|---|---|---|---|
| **Figma Design + Figma AI agent** | Tạo/chỉnh designs trong canvas, components, collaboration; agent UI trong Figma | Tạo design source-of-truth, review/comment, handoff | Sản phẩm/seat/quyền truy cập có thể khác nhau; cần Design Agent kiểm bố cục |
| **Figma Make** | Prompt-to-app prototypes, dùng existing Figma design, properties panel, annotations, preview | Prototype tương tác nhanh, sửa trực quan cùng khách hàng | Prototype không mặc nhiên production-ready; các tính năng trả phí/seat giới hạn |
| **Google Stitch** | Tạo/điều chỉnh UI từ text/voice/code/files, design canvas, xuất sang workflow code; `DESIGN.md` rules | Khám phá 2–3 art directions/screen alternatives, iterate style | Hình ảnh/giao diện do AI tạo cần kiểm tra bản quyền, chức năng, layout, consistency |
| **Vercel v0** | Tạo React/Next UI từ prompts, screenshots và Figma links, Design Mode | Chuyển frame/components được duyệt thành React/Tailwind prototype, tăng tốc code UI | Dễ lặp design pattern mặc định (shadcn SaaS/card); phải ép style editorial bằng design tokens, assets thật |
| **Codex / Claude Code** | Coding agents cho repo, implementation, refactor, test | Feat/dev infra/tests sau khi có design contract | Không nên dùng làm nguồn phê duyệt thẩm mỹ duy nhất; phải review screenshots |

**Không thể kết luận “Codex/Claude thiết kế kém hơn X theo số điểm”** khi chưa chạy cùng benchmark cho chính brief này.

## 3. Proof-of-concept 1 vòng trước khi mua tool

- Giao **cùng brief** (Design System + IA) cho Figma Make / Stitch / v0, cùng màn hình `Home` mobile + desktop.
- Cấm thêm copy thương mại vô cớ, UI SaaS template, mock stats; yêu cầu dùng 1 ảnh vật thể có nguồn rõ hoặc placeholder annotated.
- Review 6 tiêu chí (mỗi tiêu chí 0–5): bản sắc editorial, đọc tiếng Việt, bố cục responsive, accessibility, handoff editability, chi phí/quyền/bản quyền.
- Chọn **1 canonical Figma design file** sau phiên demo; công cụ còn lại chỉ trợ giúp, tránh design drift.
- Không đánh giá chỉ bằng ảnh chụp đẹp; cần prototype các trạng thái Map empty/error và content dài.

## 4. Workflow handoff đề xuất

`PRD + Design Brief → Design Agent (Figma/Stitch concepts) → human selects direction → approved Figma components/tokens → v0 prototype components (optional) → Codex/Claude Code integrate Next.js repo → QA automated + visual review → PO signoff.`

**Nếu chỉ chọn 1 tool thứ ba:** ưu tiên **Figma** (vì đội cần chốt design trước code và review khách hàng). Nếu muốn rẻ/nhanh ở giai đoạn ý tưởng, **Stitch** để dựng thử concept; nếu cần scaffold React/Tailwind sớm, **v0**. Kiểm tra hạn mức/giá và điều khoản tại thời điểm đăng ký, không lấy giá trong tài liệu làm cam kết.

## 5. Tài liệu gốc của nhà cung cấp

- Figma AI & Figma Agent: https://help.figma.com/hc/en-us/articles/24039793359767-Get-started-with-Figma-AI
- Figma Make: https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make
- Figma Make access/seat: https://help.figma.com/hc/en-us/articles/31722591905559-Figma-Make-FAQs
- Google Stitch May 2026: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/
- Stitch open DESIGN.md spec: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- Vercel v0 ↔ Figma: https://v0.app/docs/figma
- v0 screenshot importing: https://v0.app/docs/screenshots
- v0 Design Mode: https://v0.app/docs/design-mode

## 6. Prompt tách riêng cho Stitch / Figma Make

```text
Create a MOBILE-FIRST Vietnamese editorial environmental information website called “Nhựa Xanh Hà Nội” (working title), NOT a commercial SaaS landing page. Its job is to explain 7 plastic resin codes, household sorting in Hanoi, and a verified recycling collection map.
Visual direction: Modern Eco Editorial, off-white paper #F8F7F2, deep-green type #193F2A, botanical green #357A54, tactile still-life everyday plastic objects, native Hanoi context, generous whitespace, magazine typography with Be Vietnam Pro and optional Vietnamese-supporting serif. Realistic object annotations with tiny field-guide labels.
Avoid: glassmorphism, neon gradients, AI 3D renders, arbitrary green leaves, SaaS feature-card overload, false impact counters, fake stations, fake partner logos, stock people, copying hailuunguoc.vn.
Deliver two distinct alternatives WITHIN this one style, then high-fidelity desktop 1440/mobile 390 for Home, Resin List, Detail, Sorting, Map/List, including empty/loading/error states and reusable components. All copy must be meaningful Vietnamese; map markers must say SAMPLE on prototypes. Provide tokens, spacing, components, accessibility intent and asset licensing checklist. Ask for approval before production handoff.
```

## 7. Prompt từ Figma handoff sang v0/Codex/Claude

```text
Implement approved Figma screens for Nhựa Xanh Hà Nội using Next.js App Router + TypeScript + Tailwind. Figma frames and design tokens are the single visual source-of-truth. Preserve exact editorial composition, photographic asset treatment, Vietnamese typography and mobile rules; do not replace with default shadcn SaaS cards. Build reusable semantic components, ensure keyboard/a11y and prefers-reduced-motion. Keep collection-point dataset validated and mock fixtures out of production. Deliver PR with tests, Lighthouse, screenshots 1440/390 against Figma and list of unresolved design mismatches. Do NOT invent content or claim verified locations.
```


---

# 12 — DECISION LOG, CUSTOMER QUESTIONS & RISK REGISTER

## 1. Chốt rồi (CONFIRMED từ hội thoại)

| ID | Quyết định | Trạng thái |
|---|---|---|
| D-001 | Chủ đề: thông tin các loại nhựa | CONFIRMED |
| D-002 | Chủ đề: cách phân loại rác nhựa | CONFIRMED |
| D-003 | Bản đồ điểm thu gom nhựa tại Hà Nội | CONFIRMED |
| D-004 | Phong cách **Modern Eco Editorial** cho toàn website | CONFIRMED |
| D-005 | Học storytelling từ https://hailuunguoc.vn/ nhưng nội dung chủ đề khác | CONFIRMED |
| D-006 | Triển khai trên Next.js với đội AI Dev; user là người giao task và trao đổi khách hàng | CONFIRMED |

## 2. PO proposal cần phê duyệt thêm

| ID | Phương án mặc định | Vì sao | Approver |
|---|---|---|---|
| P-001 | Tên làm việc “Nhựa Xanh Hà Nội” | Dễ trao đổi, chưa coi là logo chính thức | Khách hàng |
| P-002 | V1 = 4 trang/khu vực + 7 detail pages, no login/backend/CMS | Tập trung giá trị thực, dễ hoàn thiện | Khách hàng/PO |
| P-003 | 7 mã nhựa là thư viện kiến thức; vật liệu tiếp nhận là metadata **theo trạm** | Tránh thông tin sai | PO + chuyên gia |
| P-004 | Dữ liệu trạm lưu static đã xác minh, cập nhật bằng PR | Thích hợp V1 ít địa điểm | Khách hàng/tech |
| P-005 | Ưu tiên design approval Figma trước bulk FE implementation | Tránh UI AI-generic | PO/khách hàng |
| P-006 | Mini quiz / print guide là P1, không chặn launch | Giữ trọng tâm | PO |
| P-007 | Production hosting managed (ví dụ Vercel) | Tiết kiệm ops V1 | Khách hàng |

## 3. Câu hỏi cần user mang đi hỏi khách hàng — sắp theo mức độ chặn

### P0 — Cần giải quyết trước gate tương ứng

1. **Đơn vị sở hữu & mục đích cuối:** Website cho tổ chức nào, chương trình nào? Kênh thông tin chính thức hay dự án cộng đồng? Ai có quyền phê duyệt nội dung/ảnh và release?
2. **Tên/logo/domain:** Giữ “Nhựa Xanh Hà Nội” không? Logo, màu thương hiệu, ảnh thật đã có? Có cần nhắc logo đối tác được phép?
3. **Nguồn trạm thu gom:** Khách hàng có thể kết nối URENCO/đơn vị vận hành mạng lưới 100 HUB (09/2026) hoặc đối tác khác để xin dữ liệu chính thức không? Khách hàng/đối tác có **danh sách điểm hoạt động hiện tại**, địa chỉ, tọa độ, loại nhựa nhận, giờ nhận, contact và sự đồng ý công bố không? Ai liên hệ xác minh và cập nhật sau launch?
4. **Phạm vi địa lý:** Hà Nội toàn thành phố hay chỉ nội thành/một nhóm khu vực để có dữ liệu đáng tin? Tính tới địa giới hành chính hiện hành chưa?
5. **Quy tắc công bố:** Nếu ngày phát hành chỉ có 0–2 điểm verified, khách hàng chấp nhận hiển thị trạng thái dữ liệu đang bổ sung thay vì “bản đồ đầy đủ” không?
6. **Review khoa học/pháp lý:** Ai bên khách hàng rà soát nội dung phân loại và tuyên bố môi trường? Ai xác nhận hướng dẫn địa phương?
7. **Nguồn hình ảnh & bản quyền:** Có ảnh thực tế sản phẩm/trạm, quyền sử dụng ảnh chụp, font và logo không? Có ngân sách chụp ảnh minh họa không?
8. **Release constraints:** Ngày cần demo/go-live, budget, domain, hosting account, ai sẽ ký UAT và hỗ trợ vận hành?

### P1 — Nên giải quyết trong sprint thiết kế

9. Đối tượng trọng tâm là học sinh/sinh viên, hộ gia đình hay người lao động? Ưu tiên nội dung bình dân hay khoa học?
10. Tiếng Việt duy nhất V1? Có cần English?
11. Chấp nhận sử dụng tool nào cho design (Figma, Stitch, v0)? Team có Figma seat?
12. Tên gọi “điểm thu gom” có bao gồm xe thu gom lưu động, sự kiện, cơ sở thu mua phế liệu không? Quy tắc xác thực từng loại?
13. Có thu thập analytics/feedback user không? Nếu có, chủ thể quản lý dữ liệu, privacy wording, retention?
14. Khách hàng có người bảo trì danh sách trạm theo chu kỳ và xử lý báo sai không?

### P2 — V1.1

15. Có cần CMS tự cập nhật, cộng đồng gửi trạm, quiz, gamification hoặc sự kiện sau launch?

## 4. Risk register

| Risk | Probability | Impact | Mitigation | Owner | Trigger |
|---|---|---|---|---|---|
| R-01 Không đủ điểm thu gom xác minh | High | Critical | Data research trước, human confirmation, không mock public, quyết định fallback minh bạch | User/PO/Data | <3 verified trước G3 |
| R-02 Thông tin phân loại nhầm | Medium | Critical | Người duyệt nội dung, legal sources, claim register, không phát biểu universal recyclability | Content/PO | Review fail |
| R-03 UI AI-generic, không đúng brand | High | High | Design role độc lập, visual board/hi-fi trước code, assets thực | Design/PO | Design G1 fail |
| R-04 Thiếu bản quyền ảnh/font/logo | Medium | High | Asset license manifest, tự chụp/cấp phép, no-copy | Design/Customer | Không có chứng cứ |
| R-05 Map SSR, tiles fail/chậm | Medium | High | Client-only Leaflet, map/list fallback, provider policy | Map/QA | map smoke fail |
| R-06 Agent conflicts / scope creep | High | Medium | Ticket ownership, PR nhỏ, stable contracts, DoR/DoD | Tech Lead/PO | Nhiều file conflict |
| R-07 Không có người duy trì dữ liệu | High | High | Owner, recheck cadence, pause stale locations | Customer/PO | Chưa assign ops |
| R-08 Không đạt mobile/a11y | Medium | High | Design mobile-first, QA Playwright/axe, test thực tế | QA/Design | Release gate fail |
| R-09 Tracking/privacy không được duyệt | Medium | Medium | No tracking default, approve before adding | Tech Lead/Customer | Feature request |
| R-10 Điểm/tên đơn vị thay đổi | Medium | High | Verification date, edit history, reassess every cycle | Data Steward | Broken link/complaint |

## 5. Decision log mẫu cập nhật

```md
- ID: D-0XX
- Date: YYYY-MM-DD
- Question:
- Options & trade-offs:
- Final decision:
- Decided by (human):
- Source of approval (link/message):
- Affected tickets/specs:
- Effective version:
```

**Trước khi trao task coding số lượng lớn**, user có thể gửi cho khách hàng đúng 8 câu P0 ở trên; agent tiếp tục phần không phụ thuộc để tránh đình trệ.


---

# 13 — REFERENCES & RESEARCH LOG

**Reviewed:** 13/10/2026 | Link có thể thay đổi theo thời gian; người thực hiện nội dung phải kiểm tra lại nguồn trước khi publish. Không dùng tài liệu này thay xác minh vận hành tại trạm.

## A. Website cảm hứng

- https://hailuunguoc.vn/ — tham khảo cấu trúc storytelling/interactive campaign; nội dung/dự án khác; không copy assets/source.

## B. Tài liệu địa phương / nội dung môi trường

- https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-trien-khai-thuc-hien-quyet-dinh-cua-ubnd-thanh-pho-ve-quan-ly-chat-thai-ran-sinh-hoat-2802260211155551127.htm — cơ quan phường tóm tắt Quyết định 87/2025/QĐ-UBND, các nhóm rác nguồn Hà Nội.
- https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-87-2025-QD-UBND-quan-ly-chat-thai-ran-sinh-hoat-cua-ho-gia-dinh-ca-nhan-Ha-Noi-687687.aspx — văn bản quy định quản lý chất thải rắn sinh hoạt Hà Nội ban hành 29/12/2025, cần kiểm bản gốc/hiệu lực khi viết copy pháp lý.
- https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-huong-dan-phan-loai-chat-thai-ran-sinh-hoat-tai-nguon-2802260311195650077.htm — ví dụ chi tiết hướng dẫn địa phương trong năm 2026; số nhóm trong hướng dẫn chi tiết có thể khác mô hình tổng quát, không suy diễn thành quy định thống nhất mọi nơi.
- https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000PQU.TXT — hướng dẫn EPA (cũ) để đối chiếu ký hiệu 1–7; cập nhật bằng nguồn resin code hiện đại khi final review.

## C. Candidate source leads về điểm tiếp nhận — KHÔNG xác minh đang mở

- **Tin ưu tiên gần đây:** https://nongnghiepmoitruong.vn/urenco-thi-diem-100-diem-phan-loai-thu-hoi-vat-lieu-tai-che-d831371.html — URENCO 100 HUB thử nghiệm, 16/09/2026; cần danh sách và điều khoản dùng dữ liệu.
- https://english.nnmt.net.vn/21-days-of-waste-sorting-making-source-separation-part-of-urban-life — bài báo 20/09/2026 có chi tiết HUB định danh và bản đồ số do URENCO/đối tác sử dụng; **không** suy ra có API công khai.
- https://www2.en.baochinhphu.vn/phat-dong-chien-dich-lam-cho-the-gioi-sach-hon-nam-2026-tu-dia-an-sach-den-thanh-pho-sach-102260920110159828.htm — thông tin chương trình ở cổng báo Chính phủ (09/2026).

- https://nhandan.vn/post-871467.html — câu chuyện dự án Tagom (04/2025), liên hệ xác nhận hoạt động cụ thể.
- https://vnexpress.net/ha-noi-phan-loai-rac-tu-nguon-de-tai-che-4157466.html — chương trình Urenco (2020), đã cũ.
- https://vietnamnet.vn/coca-cola-mo-rong-30-diem-thu-gom-bao-bi-tai-ha-noi-va-tphcm-2559851.html — mạng lưới chương trình thu gom bao bì, cần danh sách official/hiệu lực.
- https://danhoa.hanoi.gov.vn/thong-bao/thong-bao-lich-thu-gom-rac-thai-sinh-hoat-rac-tai-che-tren-dia-ban-xa-dan-hoa-tu-ngay-01-6-2026-2765260610195708054.htm — lịch thu gom theo khu vực, **không phải mặc định trạm cố định**.

## D. Design tools (primary/vendor sources)

- https://help.figma.com/hc/en-us/articles/24039793359767-Get-started-with-Figma-AI
- https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make
- https://help.figma.com/hc/en-us/articles/31722591905559-Figma-Make-FAQs
- https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/
- https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- https://v0.app/docs/figma
- https://v0.app/docs/screenshots
- https://v0.app/docs/design-mode

## E. Engineering & quality

- https://nextjs.org/docs/app — App Router / performance / routing.
- https://tailwindcss.com/docs/theme — Tailwind v4 design tokens.
- https://leafletjs.com/ — Leaflet docs.
- https://operations.osmfoundation.org/policies/tiles/ — **bắt buộc** nếu dùng OSM public raster tiles; attribution/cache/limit.
- https://www.w3.org/TR/WCAG22/ — Web Content Accessibility Guidelines 2.2.
- https://web.dev/articles/vitals — Core Web Vitals.
- https://playwright.dev/docs/test-snapshots — snapshot/visual comparison tests.
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content — nội dung hữu ích, chính xác, có nguồn.

## F. Quy tắc trích dẫn/cập nhật

Mỗi nội dung public hoặc điểm thu gom có claim ảnh hưởng hành động người dùng nên có `sourceUrl`, `sourceTitle`, `accessedAt`, `reviewedAt`, `reviewedBy`; điểm thu gom phải thêm `verifiedAt`, `verifiedBy`, phạm vi vật liệu, `nextReviewAt` và bằng chứng từ nơi vận hành. Source link trong bài viết **không thay thế** việc đã gọi/xác minh trực tiếp điểm hoạt động.
