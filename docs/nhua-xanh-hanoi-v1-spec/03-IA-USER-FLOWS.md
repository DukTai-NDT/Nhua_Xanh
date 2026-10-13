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
