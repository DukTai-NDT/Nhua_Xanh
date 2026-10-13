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
