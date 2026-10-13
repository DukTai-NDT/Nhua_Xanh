# FE-01 — Nền tảng ứng dụng

**Trạng thái:** IN_REVIEW trên nhánh `feat/FE-01-foundation`.
**Design contract:** G1 handoff được PO duyệt tại [PR #6, commit `70234846095737d6d09657bda5025601631b9a29`](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6#issuecomment-6139240456). Xem thêm [DSG-02](https://github.com/DukTai-NDT/Nhua_Xanh/pull/6).

## Phạm vi FE-01

- Next.js App Router, TypeScript strict, Tailwind CSS v4 và lockfile npm.
- Shell responsive theo Concept A: Header/Footer, skip link, visible focus, reduced motion, metadata tiếng Việt và 404.
- Trang chủ là khung nền tảng, không thay thế các ticket FE-02/03/04.
- Không có backend, CMS, analytics, Leaflet, điểm thu gom hoặc nội dung kiến thức hoàn chỉnh.

## Môi trường và lệnh

- Node.js tối thiểu `20.9.0`; môi trường triển khai dùng Node `22.16.0`, npm `10.9.2`.
- Dependency versions được khóa chính xác trong `package.json` và `package-lock.json`.
- Lint dùng Biome. Thử nghiệm ban đầu với ESLint preset của Next cho thấy dependency lint có 5 advisory mức cao và TypeScript 7.0 chưa tương thích với `typescript-eslint`; chuyển sang Biome 2.5.15 + TypeScript 6.0.3. `npm audit` sau đó báo 0 vulnerabilities.

| Lệnh | Mục đích |
|---|---|
| `npm ci` | Cài dependency đúng lockfile |
| `npm run dev` | Chạy Next.js dev server |
| `npm run lint` | Biome check trên `src`, `next.config.ts` và `postcss.config.mjs` |
| `npm run typecheck` | TypeScript strict, không emit |
| `npm run build` | Production build |
| `npm run start` | Chạy production build cục bộ |
| `npm run format` | Định dạng mã nguồn bằng Biome |

QA-01 sẽ bổ sung scripts unit/E2E/a11y và CI sau khi foundation ổn định.

## Ghi chú hiển thị

- Be Vietnam Pro và Lora chưa được tải/nhúng; shell dùng system sans và Georgia để giữ glyph tiếng Việt mà không gọi font CDN.
- Minh họa chai trên trang chủ là CSS tự tạo, có nhãn hình minh họa; không phải ảnh sản phẩm.
- Header trỏ tới routes được giao cho FE-03/FE-04/MAP về sau; các trang feature chưa thuộc FE-01.
- Không có điểm thu gom nào được đưa vào giao diện vì `VERIFIED=0`.
- Tắt `agentRules` của Next.js để `next dev` không tự sửa `AGENTS.md` được quản lý trong repo.

## Kiểm tra thực tế

| Kiểm tra | Lệnh / phương pháp | Kết quả |
|---|---|---|
| Cài đúng lockfile | `npm ci` | PASS; cài theo lockfile, 0 vulnerabilities |
| Lint | `npm run lint` | PASS; Biome kiểm tra 9 file |
| Typecheck | `npm run typecheck` | PASS; TypeScript strict |
| Production build | `npm run build` | PASS; `/` và `/_not-found` prerender tĩnh |
| Dependency audit | `npm audit` | PASS; 0 vulnerabilities |
| Browser QA + screenshots | Production server + transient Playwright 1.64.0 / Chromium 156.0.8078.4 + axe-core/playwright 4.13.0; công cụ được cài tạm bằng `npm install --no-save --package-lock=false` | PASS: HTTP 200 home, HTTP 404 unknown route, `lang=vi`, một H1, không tràn ngang ở 1440/390, skip link → main, mobile menu mở/ESC đóng, reduced motion, axe 0 violation trên home desktop/mobile và 404, 0 uncaught page errors. Không phải script CI bền vững; QA-01 sẽ thêm browser tests vào repo. |
| Evidence | [Desktop 1440](./evidence/FE-01/home-1440.png), [mobile 390](./evidence/FE-01/home-390.png) | Ảnh được chụp từ production build chạy cục bộ, không phải mockup |

### Lỗi phát hiện và đã sửa

- ESLint thử nghiệm ban đầu không chạy với TypeScript 7; hạ về TypeScript 6.0.3 rồi thay preset lint có advisory bằng Biome.
- Browser QA phát hiện tương phản nhỏ trên nền cát thấp hơn WCAG AA và dải thông báo ngoài landmark; đã sửa màu chữ và đặt dải trong landmark `aside` có tên.
- Next dev server chặn HMR khi test từ `127.0.0.1`; không nới bảo vệ dev-origin, chuyển browser QA sang production server.
- `npm ci` lần đầu bị khóa file SWC do server test vẫn chạy; dừng tiến trình server do ticket tạo và chạy lại thành công.

### Giới hạn còn lại

- `/loai-nhua`, `/phan-loai`, `/ban-do` chưa được triển khai theo phạm vi FE-01; các liên kết đã trỏ tới route backlog và tắt prefetch để tránh lỗi nền trong shell. Nội dung/loading/empty/error của feature sẽ được kiểm tra khi các ticket FE-02/03/04/MAP triển khai.
- Test runner, test suite lưu trong repo và CI thuộc QA-01; browser smoke hiện là bằng chứng thực hiện riêng cho điều kiện visual QA G1.
- Đây là QA của tác giả, chưa phải review độc lập hoặc nghiệm thu của PO.
- Kiểm tra này không bao gồm các trạng thái tải/rỗng/lỗi của trang tính năng chưa được triển khai; cần kiểm tra ở ticket tương ứng.
