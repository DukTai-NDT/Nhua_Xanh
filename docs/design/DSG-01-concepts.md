# DSG-01 — Hai hướng Modern Eco Editorial

**Trạng thái:** Đề xuất để PO/khách hàng xem xét; chưa chọn concept, chưa được duyệt G1.
**Ticket:** `DSG-01 Art direction` (P0, phụ thuộc `SP0-02`; tiền đề `FE-01` là một design contract được con người duyệt).
**Phạm vi:** Hai concept cùng hướng Modern Eco Editorial; bộ token đề xuất; phác thảo Header/Footer desktop và mobile; nguồn tài sản. Đây là tài liệu ý tưởng, không phải thiết kế hi-fi hay thiết kế đã duyệt.

## Tóm tắt để chọn hướng

| | Concept A — Sổ tay vật liệu | Concept B — Mục lục đô thị |
|---|---|---|
| Cảm giác | Gần gũi, quan sát bằng tay, như một trang ghi chép về vật liệu thường ngày | Có hệ thống, rõ đường đi, như một ấn phẩm tra cứu và bản đồ biên tập |
| Nhịp thị giác | Tiêu đề serif lớn, lề chú giải, nét mảnh, mảng giấy và sắc xanh lá nhạt | Lưới chỉ mục, số chương lớn, thanh xanh rừng, điểm nhấn đất nung và đường phân cách rõ |
| Header desktop | Wordmark ở trái; điều hướng và CTA trên cùng một hàng | Masthead hai tầng: nhận diện/nhãn chuyên mục phía trên, điều hướng ở hàng dưới |
| Mobile | Wordmark gọn, menu mở thành danh sách dọc; CTA nằm trong menu | Thanh đầu trang có số/chapter marker và menu; menu hiển thị như mục lục đánh số |
| Footer | Tờ ghi chú sáng, ba cột nội dung | Dải xanh rừng tương phản, bố cục chỉ mục và hàng ghi nguồn |
| Phù hợp khi | Muốn nội dung giải thích mang tính khám phá, thân thiện với học sinh sinh viên | Muốn ưu tiên tra cứu nhanh và tạo cảm giác một cẩm nang có cấu trúc |

**Khuyến nghị của Design Agent:** Concept A là điểm bắt đầu phù hợp hơn với ý “Sổ tay vật liệu đô thị” trong design brief; Concept B giữ lại như phương án đối chiếu. Đây chỉ là đề xuất của agent. PO/khách hàng cần chọn hoặc yêu cầu chỉnh trước khi FE dùng token/visual contract. Không tự ghi nhận lựa chọn hay G1.

## Concept A — Sổ tay vật liệu

### Ý tưởng

Trang web như một cuốn sổ quan sát những món đồ nhựa quen thuộc: nền giấy sáng, lề chú giải, số thứ tự, đường kẻ nhỏ và kiểu chữ có tương phản. Nhịp dàn trang tạo cảm giác nội dung được biên tập, không biến các loại nhựa thành một dãy thẻ giống nhau. Đồ vật thật có thể được thêm ở giai đoạn DSG-02 sau khi có asset được phép dùng.

### Ngôn ngữ giao diện

- Nền ngà sáng; xanh rừng cho chữ và điều hướng; xanh non nhạt cho vùng ghi chú; màu cát làm dấu nhỏ.
- Serif dùng có chọn lọc cho tiêu đề lớn; sans-serif cho điều hướng, nội dung, nhãn và trạng thái.
- Thành phần ưu tiên đường viền 1px, góc 8–16px, ít bóng.
- Header sticky nhẹ, không che nội dung; menu mobile là danh sách đơn giản, đóng sau khi chọn mục.
- Footer có thông tin điều hướng và ghi chú trách nhiệm; không tạo số liệu hoặc tuyên bố điểm thu gom.

### Token đề xuất

| Token | Giá trị | Vai trò / trạng thái |
|---|---|---|
| `paper` | `#F8F7F2` | Nền trang |
| `ink` | `#193F2A` | Chữ chính, nền focus |
| `leaf` | `#357A54` | CTA, link, trạng thái đang chọn |
| `note` | `#E7F0E7` | Ghi chú và vùng phụ |
| `lime` | `#BCE1B8` | Nhấn nhỏ, không dùng làm chữ body |
| `sand` | `#E8DCC4` | Nhãn biên tập và dấu phân cách mềm |
| `muted` | `#52665A` | Chữ phụ; cần kiểm tra tương phản trong hi-fi |
| `white` | `#FFFFFF` | Bề mặt tương phản |
| `error` | `#A83232` | Lỗi |
| `rule` | `#D7DCCF` | Viền, lưới |

## Concept B — Mục lục đô thị

### Ý tưởng

Trang web như một mục lục để tra cứu dòng đi của vật liệu: cấu trúc rõ, thứ bậc nhãn dễ quét và dấu chương giúp người đọc biết mình đang ở đâu. Màu xanh rừng tạo các dải neo, màu cát/đất nung dùng ít để đánh dấu chỉ mục. Hướng này vẫn sáng, tự nhiên và giàu nhịp biên tập; không dùng dark cinematic, gradient, glass, hay thẻ SaaS đồng dạng.

### Ngôn ngữ giao diện

- Nền giấy vẫn là nền chính, nhưng header/footer dùng các mảng xanh rừng có giới hạn.
- Số chương/nhãn biên tập lớn đóng vai trò định hướng, không phải số liệu về môi trường.
- Điều hướng desktop tách khỏi masthead; mobile có mục lục đánh số khi mở menu.
- CTA có hình khối chữ nhật, nét viền rõ và tương phản cao; vùng chạm tối thiểu 44×44 CSS px.
- Footer như trang cuối của một cẩm nang: điều hướng, ghi nguồn và lưu ý về nội dung được nhóm theo hàng.

### Token đề xuất

| Token | Giá trị | Vai trò / trạng thái |
|---|---|---|
| `paper` | `#F8F7F2` | Nền trang |
| `ink` | `#193F2A` | Chữ chính, dải footer |
| `leaf` | `#357A54` | CTA, link |
| `note` | `#E7F0E7` | Bề mặt phụ |
| `lime` | `#BCE1B8` | Điểm nhấn nhỏ |
| `sand` | `#E8DCC4` | Nhãn chương/đường nền |
| `clay` | `#A85C3A` | Điểm nhấn biên tập nhỏ; không thay màu trạng thái lỗi |
| `muted` | `#52665A` | Chữ phụ; cần kiểm tra tương phản trong hi-fi |
| `white` | `#FFFFFF` | Bề mặt tương phản |
| `error` | `#A83232` | Lỗi |
| `rule` | `#D7DCCF` | Đường lưới và phân khu |

## Token chung và quy tắc áp dụng

- Lưới: tối đa khoảng 1200px; 12 cột desktop, 4 cột mobile; lề/gutter 20–32px.
- Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px.
- Radius: 8 / 16px; ưu tiên border thay cho shadow.
- Type scale tham chiếu: H1 desktop 56–72px; mobile 36–44px; body 16–18px, line-height khoảng 1.6; nhãn 12–14px.
- Màu muted và các trạng thái cần được kiểm tra tương phản WCAG trên nền sử dụng trước khi chốt.
- Focus: viền rõ 2px, offset 2px; focus keyboard luôn nhìn thấy. Reduced motion: không phụ thuộc chuyển động để hiện nội dung; tôn trọng `prefers-reduced-motion`.
- Tap target ở điều khiển quan trọng tối thiểu 44×44 CSS px.
- Cả hai concept giữ cùng định hướng/brand palette đã xác nhận trong `02-DESIGN-SYSTEM.md`; biến thể chỉ là cách phối màu và nhịp bố cục, chưa thay đổi yêu cầu sản phẩm.

## Header/Footer wireframe và bằng chứng

Các SVG sau là phác thảo tĩnh do Design Agent tự dựng, dùng copy tiếng Việt và hình khối tự vẽ. Kích thước trên board mô phỏng desktop 1440px và mobile 390px; chúng không phải screenshot trình duyệt, không phải layout hi-fi, và không đại diện cho logo được duyệt.

- [Concept A — Sổ tay vật liệu: desktop/mobile Header & Footer](./concept-a-field-notebook.svg)
- [Concept B — Mục lục đô thị: desktop/mobile Header & Footer](./concept-b-city-index.svg)

Copy điều hướng theo IA hiện hành: `Trang chủ`, `Các loại nhựa`, `Cách phân loại`, `Điểm thu gom`; CTA `Tìm điểm thu gom`. Tên `Nhựa Xanh Hà Nội` được thể hiện như wordmark tạm, không phải logo/brand approval.

## Font và asset provenance

| Asset | Nguồn / tác giả | Giấy phép hoặc trạng thái | Cách dùng trong đề xuất |
|---|---|---|---|
| Be Vietnam Pro | Tác giả dự án Be Vietnam Pro; file giấy phép tại [google/fonts — OFL](https://github.com/google/fonts/blob/main/ofl/bevietnampro/OFL.txt) | SIL Open Font License 1.1 theo tệp giấy phép nguồn. Chưa tải hay nhúng font vào repo. | Sans UI/body đề xuất cho tiếng Việt; xác minh glyph, weights và cách tự host/`next/font` ở FE-01. |
| Lora | Họ font có trong kho Google Fonts; [tệp giấy phép Lora](https://github.com/google/fonts/blob/main/ofl/lora/OFL.txt) | Tệp OFL trong kho nguồn. Chưa tải hay nhúng font vào repo. | Serif tiêu đề thử nghiệm; trước khi chốt cần kiểm tra đủ dấu tiếng Việt ở đúng subset/weight. |
| Hai SVG wireframe | Tự dựng trong ticket DSG-01, các hình khối và nét là vector nguyên gốc | Nội bộ; không lấy từ website tham khảo, không dùng ảnh bên thứ ba | Dùng làm bằng chứng bố cục và khác biệt giữa hai hướng. |
| Ảnh vật thể / Hà Nội | Chưa có | Chưa chọn hoặc cấp phép | Chưa dùng trong phác thảo; bổ sung ở DSG-02 khi có ảnh được phép hoặc hình minh họa tự tạo, ghi rõ tính minh họa. |
| Logo | Chưa có; quyết định hiện tại cho phép bỏ qua logo trong demo | Không có logo được duyệt | Wordmark chữ thuần, không vẽ biểu tượng nhận diện giả. |

## Chưa được quyết định / yêu cầu PO

1. Chọn Concept A, Concept B, hoặc yêu cầu chỉnh; chỉ ghi nhận sau khi có trả lời của PO/khách hàng.
2. G1 cần người có thẩm quyền duyệt visual direction, wireframe và các màn hình hi-fi/responsive theo design gate. Tài liệu này chỉ giải quyết hai concept và Header/Footer; DSG-02 còn phải giao 5 màn hình, component states và prototype theo design system.
3. Chưa có asset ảnh thực tế/được cấp phép; hình ảnh trong sản phẩm vẫn cần kế hoạch quyền sử dụng và kiểm tra trước khi dùng.

## Ranh giới ticket

Không tạo giao diện sản phẩm, code FE, ảnh sản phẩm, trang home/library/sorting/map, content khoa học, hay xác minh dữ liệu. Google Stitch không được dùng; hai hướng và wireframe tĩnh có thể được review bằng các tệp trong repo. Không yêu cầu hoặc phát sinh chi phí/tool login.

## Handover

- **Status:** IN_REVIEW — concept pack sẵn sàng review, lựa chọn/G1 đang chờ PO/khách hàng.
- **Đã giao:** hai concept Modern Eco Editorial; hai bộ token; Header/Footer desktop/mobile; font/asset provenance.
- **Chưa làm:** DSG-02 hi-fi/prototype; chưa có lựa chọn concept hoặc G1; chưa có screenshot browser.
- **Checks:** kiểm tra cấu trúc tài liệu và SVG là thủ công; không chạy build/lint/test vì repo chưa có app/package scripts.
- **Rủi ro:** màu muted cần contrast review; font subset tiếng Việt và license cần lưu cùng asset nếu được nhúng; tên/wordmark chưa phải nhận diện cuối.
- **Kế tiếp:** PO/khách hàng chọn hướng và ghi nhận quyết định; sau đó DSG-02 hoàn tất màn hình và G1 trước khi FE-01 triển khai yếu tố thị giác.
