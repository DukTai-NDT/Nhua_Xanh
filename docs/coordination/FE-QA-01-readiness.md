# Chuẩn bị FE-01 và QA-01 — Sprint W1

**Trạng thái:** Tài liệu kế hoạch; chưa có ứng dụng hoặc scaffold. FE-01 chưa được triển khai. G1 chưa được PO duyệt.
**Phạm vi:** Chuẩn bị kỹ thuật và ma trận kiểm thử nền tảng để thực hiện sau khi DSG-02 được xem xét và G1 được duyệt rõ ràng.
**Nguồn:** `02-DESIGN-SYSTEM.md`, `06-TECH-ARCHITECTURE.md`, `07-ROADMAP-BACKLOG.md`, `08-QA-TEST-PLAN.md`, quyết định PO D-OPS-002.

## Cổng trước khi bắt đầu FE-01

- DSG-01: Concept A — “Sổ tay vật liệu” đã được PO chọn theo [bình luận PR #4](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4#issuecomment-6139008847).
- DSG-02: còn phải hoàn tất 5 màn hình desktop/mobile, trạng thái component, prototype và design QA.
- G1: chỉ được coi là duyệt khi PO/người có thẩm quyền ghi rõ phê duyệt sau khi xem bàn giao DSG-02. Lựa chọn concept không thay cho G1.
- Khi chưa có G1, không đưa token/theme/layout thị giác vào code. Có thể cập nhật kế hoạch, nhưng không khởi tạo scaffold giao diện.

## FE-01 — Foundation

### Phạm vi dự kiến

- Next.js App Router, TypeScript `strict`, Tailwind CSS v4, dependency tương thích được khóa rõ trong lockfile.
- Layout ngữ nghĩa và responsive; Header/Footer theo thiết kế đã duyệt; link bỏ qua tới nội dung chính; focus bàn phím nhìn thấy được; hỗ trợ `prefers-reduced-motion`.
- Trang 404 tiếng Việt, metadata tiếng Việt và nền tảng SEO.
- Nội dung sản phẩm chỉ gồm phần cần cho foundation; không làm trang chủ/library/phan-loai/map hoàn chỉnh, nội dung khoa học, dữ liệu điểm, backend, CMS, analytics hay tích hợp Leaflet.
- Tên “Nhựa Xanh Hà Nội” vẫn là tên làm việc; không tạo logo/domain như thể đã được duyệt.

### Cấu trúc kỹ thuật đề xuất

```text
src/
  app/
    layout.tsx          # html lang=vi, metadata gốc, layout chung
    globals.css         # reset, token/theme sau G1, focus và reduced-motion
    page.tsx            # shell nền tối thiểu; không thêm nội dung feature
    not-found.tsx       # trạng thái 404 tiếng Việt
  components/
    layout/
      Header.tsx
      Footer.tsx
    ui/
      SkipLink.tsx
```

Cấu trúc là đề xuất theo `06-TECH-ARCHITECTURE.md`; Tech Lead rà lại khi khởi tạo repo. Không khóa phiên bản Next/Node/Tailwind trong tài liệu này; khi bắt đầu cần kiểm tra tài liệu chính thức hiện hành, tương thích, license, rồi commit lockfile.

### Script dự kiến

| Script | Mục đích |
|---|---|
| `dev` | Chạy môi trường phát triển |
| `build` / `start` | Build và chạy ứng dụng |
| `lint` | Kiểm tra quy tắc mã |
| `typecheck` | TypeScript strict, không phát sinh build |
| `test:unit` | Vitest + Testing Library |
| `test:e2e` | Playwright smoke trên Chromium và viewport mobile |

Script chỉ được khai báo khi có công cụ và cấu hình thật. Không báo script/test PASS khi chưa chạy.

## QA-01 — Test scaffolding và CI

### Cấu hình dự kiến

- Vitest + Testing Library cho component/hành vi nhỏ.
- Playwright cho smoke desktop/mobile; axe-core cho quét accessibility.
- CI chạy `npm ci`, `npm run lint`, `npm run typecheck`, `npm run test:unit`, `npm run build`; E2E chạy với browser dependency được cài có chủ đích.
- CI chỉ kiểm tra PR; không triển khai preview/production tự động trong QA-01.
- `data:validate` sẽ bổ sung khi có schema/dataset; chưa áp dụng vào foundation chưa có dữ liệu.

### Ma trận kiểm thử nền tảng

| ID | Kiểm tra | Cách xác nhận |
|---|---|---|
| FND-01 | App Router render shell | `/` trả nội dung thành công và không có lỗi runtime |
| FND-02 | Ngôn ngữ/metadata | `html[lang]` là `vi`; title/description dùng tiếng Việt và tên làm việc có kiểm soát |
| NAV-01 | Điều hướng Header/Footer | Link giữ đúng URL route đã thống nhất; trạng thái hiện hành có ngữ nghĩa phù hợp khi route có mặt |
| NAV-02 | Menu mobile | Mở menu, chọn link, đóng menu; kiểm tra bàn phím và Escape nếu menu dạng overlay |
| NAV-03 | Skip link | Kích hoạt bằng bàn phím, focus chuyển đến vùng nội dung chính; focus hiển thị |
| A11Y-01 | Ngữ nghĩa và accessibility tự động | Axe không có lỗi serious/critical trên shell và 404; kiểm tra landmarks/name |
| A11Y-02 | Bàn phím/focus | Thứ tự Tab hợp lý, focus dễ nhìn, không có keyboard trap |
| MOTION-01 | Reduced motion | Với `prefers-reduced-motion: reduce`, nội dung vẫn hiện và chuyển động không thiết yếu được tắt/giảm |
| RWD-01 | Responsive | Viewport 390px và 1440px không tràn ngang; menu, Header/Footer dùng được |
| RWD-02 | Kích thước điều khiển | Điều khiển quan trọng đạt mục tiêu chạm tối thiểu 44×44 CSS px theo design system |
| ERR-01 | 404 | Đường dẫn không tồn tại hiển thị 404 tiếng Việt, có đường quay lại và không crash |
| SEO-01 | Metadata gốc | Metadata cơ bản có mặt; không khẳng định domain/canonical/OG chưa được chốt |

QA Agent sẽ bổ sung case cụ thể theo component/token đã duyệt trong DSG-02. Các kiểm thử feature/map trong `08-QA-TEST-PLAN.md` thuộc ticket sau, không bị tuyên bố đã chạy bởi QA-01.

## Bằng chứng và DoD khi triển khai

- Branch triển khai: `feat/FE-01-foundation`; PR riêng cho FE-01.
- QA scaffolding: branch/PR riêng `qa/QA-01-test-scaffolding` sau khi FE-01 có nền để test.
- Lưu lệnh đã chạy và exit code thực; chụp ảnh 1440px và 390px khi đã có UI được duyệt.
- Ghi font/asset provenance; không lấy ảnh/logo của website tham khảo.
- Báo lỗi, giới hạn kiểm thử, accessibility và khác biệt thiết kế; không tự phê duyệt G1 hoặc merge.

## Trạng thái chạy hiện tại

- FE-01 implementation: **NOT STARTED — chờ DSG-02 và G1**.
- QA-01 implementation/test execution: **NOT STARTED — chờ FE-01**.
- Build/lint/typecheck/unit/E2E: **NOT RUN — repo hiện chưa có package/app/scripts**.
- Không phát sinh dependency, lockfile, source app, CI workflow, screenshot hoặc deployment trong tài liệu chuẩn bị này.
