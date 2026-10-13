# QA-01 — Test scaffolding

**Trạng thái:** IN_REVIEW trên nhánh `qa/QA-01-test-scaffolding`, phụ thuộc nhánh FE-01 `feat/FE-01-foundation`.
**Phạm vi:** Vitest + Testing Library cho shell; Playwright + axe-core cho browser smoke; GitHub Actions CI.

## Scripts

| Lệnh | Tác vụ |
|---|---|
| `npm run lint` | Biome trên app, unit tests và config QA |
| `npm run typecheck` | TypeScript strict |
| `npm run test:unit` | Unit tests với Vitest và jsdom |
| `npm run build` | Production build Next.js |
| `npm run test:e2e` | Playwright Chromium; tự chạy production server |
| `npm run format` | Định dạng mã app/test/config |

Workflow `.github/workflows/ci.yml` chạy `npm ci`, lint, typecheck, unit, build, cài Chromium và browser tests trên pull request; push `main` cũng kích hoạt workflow. CI chỉ kiểm tra, không deploy.

## Coverage hiện tại

- Unit: menu mobile mở, `aria-expanded`, đóng bằng Escape/chọn liên kết; skip link target; footer notice.
- Browser: metadata và ngôn ngữ tiếng Việt, một H1, tràn ngang desktop/mobile, skip link bằng bàn phím, menu/Escape, reduced motion, trang 404; axe-core kiểm tra home desktop/mobile và 404.
- Browser dùng Chromium một project. Test feature routes, nội dung và trạng thái tải/rỗng/lỗi thuộc các ticket feature tương ứng.

## Kết quả kiểm tra cục bộ

Môi trường: Windows, Node `v22.16.0`, npm `10.9.2`, Chromium do Playwright cài; không cần tài khoản/dịch vụ trả phí.

| Lệnh | Kết quả thực tế |
|---|---|
| `npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test @axe-core/playwright` | PASS; thêm dependencies vào lockfile, npm audit báo 0 vulnerabilities |
| `npx playwright install chromium` | PASS |
| `npm run format` | PASS; không còn thay đổi định dạng |
| `npm run lint` | PASS; Biome kiểm tra 13 file |
| `npm run typecheck` | PASS |
| `npm run test:unit` | PASS; 1 file, 4 tests |
| `npm run build` | PASS; `/` và `/_not-found` prerender tĩnh |
| `npm run test:e2e` | PASS; 4 Chromium tests, gồm axe không có violation trên các route/state đã kiểm tra |
| `npm audit` | PASS; 0 vulnerabilities |
| `git diff --check` | PASS |

CI workflow đã được cấu hình nhưng chưa có lần chạy GitHub Actions trong PR này; kết quả local không được coi là CI run hay review QA độc lập. Browser test đầu tiên bắt lỗi selector mơ hồ của route 404; selector được thu hẹp về tên “Trở về trang chủ” và chạy lại PASS.

## Rủi ro và giới hạn

- Đây là QA automation do cùng tác giả triển khai, không thay thế human/independent review, G2–G5 hoặc UAT.
- PR QA-01 được xếp chồng trên nhánh FE-01 để giữ dependency minh bạch; sau khi FE-01 được duyệt/tích hợp cần retarget/rebase QA-01 theo trạng thái `main`.
- Workflow dùng GitHub Actions bản `actions/checkout@v4`, `actions/setup-node@v4`; không truy cập dịch vụ ngoài trong runtime ứng dụng.

## Next

Sau review và tích hợp FE-01/QA-01, tiếp tục CNT-01 và CNT-02 với nguồn có provenance, trạng thái nội dung chờ reviewer chuyên môn, song song với FE-02 theo backlog. Không công bố nội dung khoa học hoặc dữ liệu điểm chưa được người có thẩm quyền duyệt.
