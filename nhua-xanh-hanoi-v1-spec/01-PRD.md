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
