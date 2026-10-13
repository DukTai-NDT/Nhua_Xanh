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
