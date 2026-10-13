# FE-02 — Trang chủ

**Trạng thái:** IN_REVIEW trên `feat/FE-02-home`, phụ thuộc chuỗi FE-01/QA-01.
**Design contract:** Concept A “Sổ tay vật liệu”, G1 handoff được PO duyệt tại [PR #6](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6#issuecomment-6139240456).

## Thay đổi

- Hoàn thiện trang chủ editorial: hero hai cột, mục lục 7 mã, hướng dẫn khởi đầu 3 bước và tình trạng dữ liệu điểm thu gom.
- CTA dùng liên kết neo tới đúng phần trên trang; E2E kiểm tra các anchor, không đưa người dùng tới route feature chưa triển khai.
- Liệt kê mã và tên polymer tiếng Việt; không đưa ví dụ vật dụng hoặc tuyên bố tái chế chưa được reviewer duyệt.
- Hiển thị rõ chưa có điểm được xác minh; không có pin, địa chỉ, giờ hay loại nhựa nhận giả.
- CSS responsive tại 390px; giữ focus, skip link, reduced motion và semantic landmarks từ foundation.

## Provenance và giới hạn nội dung

- Bố cục tham chiếu phần Home trong DSG-02 đã được PO duyệt G1; minh họa chai/CSS được tạo cho demo, không phải ảnh sản phẩm.
- Copy bám PRD/DSG-02 và các cảnh báo trong spec hiện hành. CNT-01/CNT-02 vẫn là draft chờ duyệt chuyên môn; trang này không nhúng ví dụ hay hướng dẫn chi tiết từ các draft đó.
- Tên/logo/domain vẫn là tên làm việc; trang bản đồ, thư viện chi tiết và nội dung phân loại đầy đủ thuộc các ticket riêng.

## Kiểm thử và bằng chứng

Môi trường: Node `v22.16.0`, npm `10.9.2`, Chromium cài bằng Playwright; production build cục bộ.

| Lệnh | Kết quả |
|---|---|
| `npm ci` | PASS; 145 packages, 0 vulnerabilities |
| `npm run format` | PASS |
| `npm run lint` | PASS; Biome 13 files |
| `npm run typecheck` | PASS |
| `npm run test:unit` | PASS; 4 tests |
| `npm run build` | PASS; `/` và `/_not-found` prerender tĩnh |
| `npm run test:e2e` | PASS; 4 Chromium tests, axe 0 violations cho home desktop/mobile và 404; kiểm tra 3 CTA neo hoạt động |
| `npm audit` | PASS; 0 vulnerabilities |
| `git diff --check` | PASS |

- [Ảnh desktop 1440×2195](./evidence/FE-02/home-1440.png)
- [Ảnh mobile 390×3250](./evidence/FE-02/home-390.png)

### Lỗi tìm thấy và sửa

- Axe phát hiện nhãn mục điểm thu gom có contrast 3,8:1 trên nền cát. Màu nhãn đổi sang ink; lần kiểm tra tiếp theo không còn vi phạm.
- Một lần chạy đầu dùng selector chưa đủ cụ thể cho link 404 ở test suite kế thừa từ QA-01; selector đã được thu hẹp ở QA-01 và test 404 PASS trong các vòng gần nhất.

## Giới hạn / review

- Đây là kiểm tra của tác giả; CI GitHub chưa chạy và chưa có review QA độc lập/PO acceptance.
- Các route feature chưa triển khai; CTA trên home là anchor hoạt động tới phần tương ứng của trang hiện tại.
- Không kiểm tra thiết bị vật lý hoặc trình duyệt ngoài Chromium.
- Không tự approve/merge, không deploy production.

## Next

Review FE-02 cùng ảnh desktop/mobile và tiêu chí CTA/overflow/axe. Sau đó tiếp tục FE-03 khi CNT-01 được người chuyên môn/PO duyệt; tiếp tục FE-04 khi CNT-02 được duyệt.
