# DSG-02 — Thiết kế hi-fi theo Concept A

**Trạng thái:** IN_REVIEW — prototype và bản thiết kế đề xuất, chưa được duyệt G1.
**Ticket:** `DSG-02 UX & hi-fi`, phụ thuộc `DSG-01`.
**Hướng được chọn:** Concept A — “Sổ tay vật liệu”, theo xác nhận của PO tại [bình luận PR #4](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4#issuecomment-6139008847) ngày 13/10/2026. Phạm vi xác nhận chỉ chọn hướng DSG-01; PO ghi rõ không phê duyệt G1, màn hình hi-fi, prototype, nội dung, tài sản hay implementation.

## Phạm vi và trạng thái duyệt

Thiết kế năm màn hình ở khung desktop 1440px và mobile 390px: Home, danh sách loại nhựa, chi tiết PET, hướng dẫn phân loại, bản đồ/danh sách. Prototype local có chuyển màn hình, đổi khung thiết bị và thử trạng thái. Đây là prototype trình bày design, không phải Next.js/production UI, không kết nối tile/API hoặc dữ liệu điểm thu gom.

**Không gọi G1 approved.** G1 vẫn cần PO/khách hàng review và chấp thuận rõ ràng. Copy về vật liệu/phân loại là nội dung đề xuất cần domain reviewer; chưa phải nội dung đã duyệt. Không dùng Figma, Google Stitch, v0 hay công cụ thiết kế/dịch vụ bên thứ ba.

## Tệp review

- [Mở prototype tương tác](./dsg02-prototype.html) — mở bằng trình duyệt trên máy; điều khiển đầu trang chuyển 5 màn hình, kích thước desktop/mobile và trạng thái.
- [Styles local](./dsg02-prototype.css)
- [Tương tác local](./dsg02-prototype.js)
- [Bảng Concept A gốc từ DSG-01](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4/tree/docs/DSG-01-modern-eco-concepts/docs/design)

Prototype không tải thư viện, font, ảnh, bản đồ hoặc script từ mạng. Trong trình duyệt desktop, chọn `Desktop · 1440` hoặc `Điện thoại · 390`; vùng xem có thể cuộn ngang nếu màn hình host hẹp hơn khung 1440.

## Thiết kế từng màn hình

### 1. Trang chủ

- Hero chia đôi: nội dung hướng dẫn ở trái, minh họa chai vector tự vẽ ở phải; headline theo PRD “Hiểu về nhựa. Sống xanh hơn.”
- CTA rõ: “Khám phá 7 loại nhựa” và “Tìm điểm thu gom”. Không dùng số liệu tác động môi trường hay số lượng điểm.
- Dải mục lục bảy mã, đoạn lưu ý “Mã nhựa cho biết loại vật liệu; không bảo đảm mọi địa điểm đều nhận tái chế”, khối ba bước và lời mời mở bản đồ.
- Mobile chuyển thành một cột, nội dung/CTA trước minh họa; mục lục là hàng ngang cuộn có nhãn và chỉ báo.
- Trạng thái: default; loading có skeleton cho phần mục lục; error có thông báo khôi phục và CTA tới thư viện; map teaser rỗng thể hiện “Dữ liệu điểm thu gom đang được bổ sung”.

### 2. Danh sách loại nhựa

- H1 “7 mã nhận diện nhựa”, thông báo phân biệt ký hiệu vật liệu với khả năng tiếp nhận địa phương.
- Bảy mục theo danh sách biên tập, số lớn làm mốc và thông tin gọn; desktop dùng bố cục hai cột lệch nhịp, mobile thành danh sách một cột.
- Ví dụ vật dụng ghi “ví dụ tham khảo” và giữ đúng các ví dụ gợi ý trong spec 04; không khẳng định mẫu vật cụ thể đã được xác minh trên một bao bì.
- Trạng thái rỗng thư viện là trạng thái lỗi dữ liệu, không bình thường hóa thành “không có loại nhựa”. Error có thể quay lại; loading chỉ là skeleton.

### 3. Chi tiết loại nhựa — PET/PETE

- Hero biên tập với nhãn `01 · PET/PETE`, tiêu đề “Nhựa PET/PETE”, chú giải “Ví dụ thường gặp: chai đồ uống có nhãn vật liệu phù hợp”.
- Minh họa chai là SVG tự vẽ, được dán nhãn rõ là hình minh họa; không giả làm ảnh sản phẩm đã kiểm chứng.
- Các vùng nội dung: nhận diện (kiểm tra ký hiệu), chuẩn bị (làm rỗng; yêu cầu rửa/tách nắp phụ thuộc điểm nhận), cảnh báo tiếp nhận và CTA lọc map.
- Lưu ý bền vững: “Mã vật liệu không bảo đảm khả năng tiếp nhận tại mọi nơi.”
- Loading/error dùng các state panel trong prototype; slug không hợp lệ nên là 404 khi implementation, không phải bản hi-fi riêng trong DSG-02.

### 4. Hướng dẫn phân loại

- H1 từ copy v0 trong spec 04: “Bắt đầu từ món đồ nhựa bạn đang cầm.”
- Ba bước: xác định nhóm rác theo hướng dẫn địa phương; nhận diện và chuẩn bị; kiểm tra yêu cầu của điểm tiếp nhận.
- Một đường đọc rõ ràng với số chương/lề chú giải; câu trả lời accordion giải thích “Mã trên bao bì cho biết điều gì?”
- Banner nêu rõ “Bản copy khung cần được rà soát trước khi công bố”; link nguồn/spec chỉ là bằng chứng bàn giao, không thêm trích dẫn pháp lý chưa xác minh.
- Mobile dùng timeline dọc và FAQ 1 cột. Loading/error là state thử được bằng thanh điều khiển prototype.

### 5. Bản đồ / danh sách

- Bộ lọc 7 vật liệu, nút xóa lọc và chuyển `Bản đồ` / `Danh sách`.
- Desktop có hai cột: khu vực bản đồ và panel danh sách; mobile chuyển bằng hai tab lớn, không ép bản đồ thành bề mặt cuộn duy nhất.
- **Không có điểm đã xác minh trong dữ liệu cung cấp**, vì vậy thiết kế mặc định là empty: “Chưa có điểm đã xác minh phù hợp. Dữ liệu đang được bổ sung.” Không có pin, tên, địa chỉ, giờ hay vật liệu nhận giả.
- Bản đồ là sơ đồ khối trung tính tự vẽ, đóng dấu “Sơ đồ minh họa · chưa có điểm đã xác minh”, không mô phỏng bản đồ thực/đường địa lý. Không tải OSM tiles.
- Lỗi tile/API: thông báo bản đồ chưa tải nhưng danh sách vẫn xem được; prototype thể hiện mẫu trạng thái này, song không có API thật.
- Mẫu thẻ selected chỉ thể hiện cấu trúc bằng placeholder (`Tên điểm`, `Địa chỉ đã xác minh sẽ hiển thị ở đây`, `Thông tin nhận vật liệu cần nguồn xác nhận`) và nhãn “Khung nội dung · không phải địa điểm thật”; CTA chỉ đường bị vô hiệu khi chưa có tọa độ. Không có dữ liệu địa điểm bịa.
- Loading sử dụng skeleton và không tạo marker giả; trạng thái rỗng/lỗi có đường khôi phục phù hợp.

## Design tokens và typography

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--paper` | `#F8F7F2` | nền trang |
| `--ink` | `#193F2A` | chữ chính, tiêu đề, viền đậm |
| `--leaf` | `#357A54` | CTA và link chính |
| `--note` | `#E7F0E7` | vùng chú giải |
| `--lime` | `#BCE1B8` | điểm nhấn không dùng làm chữ nhỏ trên nền sáng |
| `--sand` | `#E8DCC4` | mặt phẳng minh họa/nhãn |
| `--muted` | `#52665A` | chữ phụ |
| `--error` | `#A83232` | lỗi và cảnh báo nghiêm trọng |
| `--rule` | `#D7DCCF` | phân khu |

- Lưới tối đa ~1200px; spacing theo 4/8/12/16/24/32/48/64/96; radius 8/16px; ưu tiên viền nhẹ.
- H1 desktop 56–64px, mobile 38–42px; body 16–18px, line-height 1.6; nhãn 12–14px; chữ bản đồ/list vẫn tối thiểu 14px.
- Đề xuất Be Vietnam Pro cho sans/UI và Lora cho tiêu đề ở DSG-01. Chưa tải font; prototype dùng system fallback (`system-ui`, Georgia) để không gọi dịch vụ ngoài. Kiểm tra glyph tiếng Việt và giữ giấy phép nguồn khi font được thêm ở implementation.
- Contrast tính theo WCAG relative luminance cho các cặp được dùng: `#193F2A`/`#F8F7F2` = 10.96:1; `#52665A`/`#F8F7F2` = 5.75:1; `#FFFFFF`/`#357A54` = 5.17:1; `#193F2A`/`#E7F0E7` = 10.09:1; `#A83232`/`#F8F7F2` = 6.18:1; `#43584B`/`#E8DCC4` = 5.65:1. Các cặp này vượt ngưỡng WCAG AA cho chữ thường; sắc nhạt chỉ dùng làm nền, không dùng cho chữ body. Kết quả tính màu chưa thay thế kiểm thử trình duyệt/zoom.

## Component và trạng thái

| Component | Trạng thái / tương tác được thể hiện |
|---|---|
| Header, nav, menu | active route, mobile mở/đóng, focus ring, link nội bộ prototype |
| CTA / link | mặc định, hover, focus; hành động đổi màn hình |
| Resin code item | 7 mã, selected PET, mở detail |
| Bộ lọc map | lựa chọn vật liệu, xóa lọc, thông báo không có kết quả |
| Bản đồ / list | chuyển tab, tải, rỗng, tile lỗi có list fallback, placeholder selected không chứa dữ liệu thật |
| FAQ | mở/đóng bằng nút bàn phím được |
| Loading / error | có skeleton, copy, phương án khôi phục; không dùng animation bắt buộc |
| Footer | điều hướng/ghi chú, co thành nhóm dọc trên mobile |

## Design QA — checklist đã rà trong prototype

- [x] Concept A: nền sáng, xanh thiên nhiên, chú giải và nhịp editorial; không gradient, glass, 3D hoặc card lặp đều.
- [x] Năm màn hình có responsive layout riêng ở breakpoint 640px; khung prototype có chính xác lựa chọn 1440px và 390px.
- [x] Copy hiển thị bằng tiếng Việt; mã/viết tắt vật liệu giữ nguyên theo spec.
- [x] Không dùng ảnh/bản đồ/địa chỉ, giờ, marker hoặc số liệu không có nguồn.
- [x] Map có list fallback; empty, loading và lỗi tile có thiết kế.
- [x] Skip link, focus-visible, nhãn button, `aria-expanded`, tab semantics và target điều khiển tối thiểu 44px đã đưa vào HTML.
- [x] CSS tôn trọng `prefers-reduced-motion`; không có animation bắt buộc.
- [ ] G1 review/approval: chưa có.
- [ ] Domain review nội dung phân loại; xác minh mọi vật thể/ảnh; xác minh điểm thu gom: chưa có.
- [ ] Visual QA độc lập trên trình duyệt/thiết bị thật: chưa có.

## Asset provenance

| ID | Tài sản | Tác giả / nguồn | Quyền / ghi chú |
|---|---|---|---|
| DSG02-ILL-01 | Chai, nắp, mặt phẳng bao bì dạng vector | Vẽ inline bằng SVG/CSS trong prototype | Tự tạo cho minh họa; không phải ảnh hay chứng cứ vật liệu; không tải từ website ngoài. |
| DSG02-MAP-01 | Sơ đồ các khối không có đường/địa chỉ thật | Vẽ bằng CSS trong prototype | Minh họa vị trí map và empty state; không đại diện bản đồ địa lý. |
| DSG02-FONT-01 | Be Vietnam Pro, Lora | Đề xuất kế thừa DSG-01; giấy phép nguồn đã ghi ở PR #4 | Không tải/nhúng; HTML dùng fallback hệ thống. |
| DSG02-PHOTO-01 | Ảnh vật thể thật / bối cảnh Hà Nội | Chưa có | Không dùng trong thiết kế. Cần ảnh do khách hàng cung cấp/cấp phép trước khi thay placeholder. |
| DSG02-LOGO-01 | Logo | Chưa có, theo brief có thể tạm bỏ qua | Chỉ dùng wordmark chữ “Nhựa Xanh Hà Nội”, chưa phải nhận diện được duyệt. |

## Hạn chế và bước kế tiếp

- Đây là một prototype HTML/CSS/JS tĩnh phục vụ review, không phải code ứng dụng, không có backend, analytics, CMS, API, tile map, dữ liệu verified hay deployment.
- Nội dung giáo dục và phân loại cần review chuyên môn; Q-001 về quy tắc hiển thị ứng viên dữ liệu vẫn mở. Prototype tránh ứng viên để không phụ thuộc quyết định đó.
- Kiểm tra đã chạy: Python `html.parser` stack check trên `docs/design/dsg02-prototype.html` — PASS; `node --check docs/design/dsg02-prototype.js` — PASS (exit 0); `git diff --check` — PASS (exit 0). Không có lint/test/build scripts cho prototype.
- Không có trình duyệt desktop khả dụng trong môi trường hiện tại; kiểm tra `Get-Command msedge,chrome,chromium,firefox` không tìm thấy executable và CUA cũng không có app/browser. Vì vậy chưa chụp screenshot, chưa kiểm tra render trực tiếp hoặc thao tác trên thiết bị thật; các tệp HTML/SVG prototype là bằng chứng có thể review.
- Mở `dsg02-prototype.html` bằng trình duyệt trên máy để xem; trong môi trường hiện tại không dùng dịch vụ/tool bên thứ ba để tạo preview.
- **Trạng thái handoff:** IN_REVIEW; Concept A đã được PO chọn cho hướng tiếp tục thiết kế; G1 chưa được phê duyệt.
- **Kế tiếp:** PO/khách hàng review prototype và đưa feedback; ghi nhận mọi thay đổi/approval trong coordination PR. Chỉ sau phê duyệt G1 mới giao FE triển khai visual contract.
