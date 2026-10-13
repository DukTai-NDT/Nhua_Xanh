# 06 — TECHNICAL ARCHITECTURE & ENGINEERING STANDARDS

**Owner:** Tech Lead / Frontend Lead | **Source of truth:** PRD + approved design | **Architecture:** static-first, no custom backend in V1.

## 1. Stack & rationale

| Layer | Baseline | Lý do / hạn chế |
|---|---|---|
| App | Next.js App Router, TS strict | Pages/router/static rendering/SEO |
| UI | Tailwind CSS v4, reusable components | Dùng token từ thiết kế, hạn chế style tùy tiện |
| Icons | Lucide React | Chức năng, không thay cho ảnh editorial |
| Motion | CSS transitions; Motion nếu thật cần | Reduced motion mặc định; GSAP optional ở Phase 2 nếu UI design yêu cầu |
| Data | Typed local `.ts` hoặc JSON + Zod validation (đề xuất) | Không cần server/database ở V1, dữ liệu có version, được review qua Git |
| Maps | Leaflet + React Leaflet (version compatible) | Client-only component; server-render SEO text/list |
| Tests | Vitest + Testing Library + Playwright + axe-core | Logic, component, E2E, accessibility tự động |
| Hosting | Vercel hoặc nền tảng hỗ trợ Next.js | Preview deployments, HTTPS, rollback; lựa chọn cuối thuộc khách hàng |

**Không khẳng định package version cụ thể trong tài liệu.** Tech Lead phải khóa dependency tương thích trong lockfile trước khi code, đọc current docs; không auto-upgrade không kiểm tra.

## 2. Render strategy & boundaries

- Home, pages kiến thức, chi tiết nhựa, sorting: ưu tiên **Server Components/SSG**; SEO và nội dung có sẵn ngay từ HTML.
- Map UI dùng `dynamic` client wrapper `ssr: false` **trong Client Component phù hợp**, vì Leaflet cần DOM; tránh `window is not defined`.
- List điểm và page copy hoạt động độc lập khỏi tile; có thể server-render initial list/metadata.
- `use client` chỉ đặt ở component cần state/DOM event, không đặt toàn bộ app layout.
- Assets dùng `next/image` (nếu phù hợp), width/height để tránh CLS; ưu tiên AVIF/WebP; tải lazy below fold; preload hero chính có kiểm tra.

## 3. Cấu trúc code đề xuất

```text
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    globals.css
    loai-nhua/page.tsx
    loai-nhua/[slug]/page.tsx
    phan-loai/page.tsx
    ban-do/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/{Header,Footer}.tsx
    home/{Hero,EditorialSection,PlasticPreview,MapCTA}.tsx
    plastics/{PlasticCard,PlasticDetail}.tsx
    sorting/{SortingGuide,FAQ}.tsx
    map/{CollectionMap.client,MapView,PointList,PointCard,Filters}.tsx
    ui/{Button,Breadcrumb,EmptyState,ErrorState}.tsx
  data/{plastics,sorting,collection-points}.ts
  lib/{navigation,filter-points,urls,validation,seo}.ts
  types/{plastic,collection-point}.ts
  styles/tokens.css  # nếu được thiết kế yêu cầu
public/assets/{resins,editorial,icons}/
tests/{unit,e2e,fixtures}/
docs/  # nhúng bộ delivery pack này hoặc link đến nguồn truth
```

**Đối với code Phase 1 đã được user hướng dẫn từ trước:** Agent audit trước. Nếu đã có `Header`, `Footer`, `globals.css`, routes thì refactor có kiểm soát; không tự xóa code hoặc làm lại toàn repo.

## 4. Contract logic và URL

- Stable route: `/loai-nhua?` all + `/loai-nhua/pet`, `/hdpe`, `/pvc`, `/ldpe`, `/pp`, `/ps`, `/other`.
- Stable map query: `/ban-do?plastic=PET` (case normalized, whitelist); dữ liệu để lọc là acceptedResins của điểm **đã verified**.
- Data function thuần (có unit test): `getPublishedCollectionPoints`, `filterCollectionPoints`, `getPlasticBySlug`, `getDirectionsUrl`, `formatVerifiedDate`.
- `getDirectionsUrl`: validate finite coords; build link với encodeURIComponent hoặc URLSearchParams; target `_blank`/rel an toàn. Không hiển thị nếu invalid.
- `lastReviewedAt` bài viết và `verifiedAt` địa điểm tách nhau.

## 5. Data reliability / security

- `src/data/plastics.ts` phải 7 code duy nhất, slug duy nhất, source không rỗng, alt ảnh có thật.
- `src/data/collection-points.ts`: chỉ published mới được build vào public export; ưu tiên build-time validation khiến build fail nếu dữ liệu sai.
- External URLs validate, no `dangerouslySetInnerHTML` nội dung nguồn ngoài.
- Không đưa Google Maps secret key/token, thông tin cá nhân, nội bộ/điện thoại riêng vào public bundle.
- Không bật analytics/cookie/tracking mặc định; trước khi bật phải duyệt phương án riêng tư/cookie (nếu cần).
- Nếu dùng provider tile/API có API key, đánh giá hạn chế domain và phía server phù hợp.

## 6. Non-functional implementation

**Accessibility:** skip link, semantic nav/main, `aria-current`, visible focus, alt đúng ảnh, filter keyboard accessible, marker/map list equivalent. `prefers-reduced-motion` tắt motion không thiết yếu. Test thiết bị touch và zoom 200%.

**Performance:** render content above fold không phụ thuộc animation; tối ưu hero LCP; code-split Leaflet khỏi Home/other pages; tránh heavy 3D; debounce search/filter nếu thêm text search. Đọc và tuân thủ map tile policy.

**SEO:** metadata per-route, OG static assets có quyền, sitemap, robots, canonical, headings và breadcrumbs; bảo đảm preview environment `noindex` (cấu hình phải review).

## 7. CI pipeline (khuyến nghị)

```text
Pull Request
  ├── npm ci
  ├── npm run lint
  ├── npm run typecheck
  ├── npm run test:unit
  ├── npm run data:validate
  ├── npm run build
  └── npm run test:e2e  (Chrome + mobile viewport, trên preview server)
       └── Playwright screenshot diff / axe smoke

Main branch → preview/staging → human UAT → production deploy
```

**Lệnh trên là scripts mong muốn cần được team khai báo trong `package.json`; hiện chưa xác nhận repo có sẵn.** Không được báo “CI xanh” nếu chưa chạy.

## 8. Git / code review standards

- Protected main; branch `feat/TICKET-short-name`, `fix/TICKET-short-name`.
- Small PR with objective, acceptance checklist, screenshots desktop/mobile, tests run, risks, source/license changes.
- Content/data PR bắt buộc review Data Steward + PO; visual PR review Design Agent; test evidence review QA Agent; Tech Lead kiểm type/perf/security.
- Không merge PR khi lint/typecheck/build fail, hoặc chưa có design/content approvals.
- Lockfile commit. Dependency inventory + license attribution.

## 9. Phát hành tối thiểu

- Nếu dùng Vercel: root, env, build/start được ghi runbook; không cấp quyền cho agent không cần; branch protection & secret policies.
- No backend nghĩa là update địa điểm sẽ qua PR/CI/redeploy; cần **người sở hữu dữ liệu sau launch**. Nếu nhiều update hằng ngày/khách hàng cần tự chỉnh sửa, mở RFC bổ sung CMS ở V1.1.
- Không nên chọn Kubernetes cho website này chỉ vì đội đã học K8s; Vercel/managed hosting đơn giản hơn cho V1. Kubernetes chỉ sau khi có yêu cầu vận hành cụ thể.
