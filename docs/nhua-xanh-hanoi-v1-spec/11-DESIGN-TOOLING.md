# 11 — DESIGN AGENT TOOLING RESEARCH & HANDOFF

**Nghiên cứu ngày:** 13/10/2026. Đây là đánh giá *fit-for-purpose* theo tài liệu chính thức và nhu cầu dự án, **không** phải benchmark tốc độ/chất lượng có đo lường của Codex/Claude.

## 1. Khuyến nghị PO

> **Workflow ưu tiên:** **Figma Design + Figma AI/Figma Make** để có thiết kế được chỉnh sửa/duyệt; **Google Stitch** để khám phá concept nếu cần; **v0** để dựng thử component React/Next.js và đọc Figma handoff; **Codex hoặc Claude Code** để thực hiện, tích hợp và test dự án thực tế.

Đội AI không nên giao một coding agent vừa invent visual direction, vừa code, vừa tự duyệt kết quả. Một **Design Agent có trách nhiệm visual QA** độc lập chính là yếu tố quan trọng nhất để tránh UI “AI template”.

## 2. So sánh theo vai trò

| Công cụ | Khả năng xác nhận từ tài liệu | Tốt nhất dùng khi | Hạn chế/cảnh báo |
|---|---|---|---|
| **Figma Design + Figma AI agent** | Tạo/chỉnh designs trong canvas, components, collaboration; agent UI trong Figma | Tạo design source-of-truth, review/comment, handoff | Sản phẩm/seat/quyền truy cập có thể khác nhau; cần Design Agent kiểm bố cục |
| **Figma Make** | Prompt-to-app prototypes, dùng existing Figma design, properties panel, annotations, preview | Prototype tương tác nhanh, sửa trực quan cùng khách hàng | Prototype không mặc nhiên production-ready; các tính năng trả phí/seat giới hạn |
| **Google Stitch** | Tạo/điều chỉnh UI từ text/voice/code/files, design canvas, xuất sang workflow code; `DESIGN.md` rules | Khám phá 2–3 art directions/screen alternatives, iterate style | Hình ảnh/giao diện do AI tạo cần kiểm tra bản quyền, chức năng, layout, consistency |
| **Vercel v0** | Tạo React/Next UI từ prompts, screenshots và Figma links, Design Mode | Chuyển frame/components được duyệt thành React/Tailwind prototype, tăng tốc code UI | Dễ lặp design pattern mặc định (shadcn SaaS/card); phải ép style editorial bằng design tokens, assets thật |
| **Codex / Claude Code** | Coding agents cho repo, implementation, refactor, test | Feat/dev infra/tests sau khi có design contract | Không nên dùng làm nguồn phê duyệt thẩm mỹ duy nhất; phải review screenshots |

**Không thể kết luận “Codex/Claude thiết kế kém hơn X theo số điểm”** khi chưa chạy cùng benchmark cho chính brief này.

## 3. Proof-of-concept 1 vòng trước khi mua tool

- Giao **cùng brief** (Design System + IA) cho Figma Make / Stitch / v0, cùng màn hình `Home` mobile + desktop.
- Cấm thêm copy thương mại vô cớ, UI SaaS template, mock stats; yêu cầu dùng 1 ảnh vật thể có nguồn rõ hoặc placeholder annotated.
- Review 6 tiêu chí (mỗi tiêu chí 0–5): bản sắc editorial, đọc tiếng Việt, bố cục responsive, accessibility, handoff editability, chi phí/quyền/bản quyền.
- Chọn **1 canonical Figma design file** sau phiên demo; công cụ còn lại chỉ trợ giúp, tránh design drift.
- Không đánh giá chỉ bằng ảnh chụp đẹp; cần prototype các trạng thái Map empty/error và content dài.

## 4. Workflow handoff đề xuất

`PRD + Design Brief → Design Agent (Figma/Stitch concepts) → human selects direction → approved Figma components/tokens → v0 prototype components (optional) → Codex/Claude Code integrate Next.js repo → QA automated + visual review → PO signoff.`

**Nếu chỉ chọn 1 tool thứ ba:** ưu tiên **Figma** (vì đội cần chốt design trước code và review khách hàng). Nếu muốn rẻ/nhanh ở giai đoạn ý tưởng, **Stitch** để dựng thử concept; nếu cần scaffold React/Tailwind sớm, **v0**. Kiểm tra hạn mức/giá và điều khoản tại thời điểm đăng ký, không lấy giá trong tài liệu làm cam kết.

## 5. Tài liệu gốc của nhà cung cấp

- Figma AI & Figma Agent: https://help.figma.com/hc/en-us/articles/24039793359767-Get-started-with-Figma-AI
- Figma Make: https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make
- Figma Make access/seat: https://help.figma.com/hc/en-us/articles/31722591905559-Figma-Make-FAQs
- Google Stitch May 2026: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/
- Stitch open DESIGN.md spec: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- Vercel v0 ↔ Figma: https://v0.app/docs/figma
- v0 screenshot importing: https://v0.app/docs/screenshots
- v0 Design Mode: https://v0.app/docs/design-mode

## 6. Prompt tách riêng cho Stitch / Figma Make

```text
Create a MOBILE-FIRST Vietnamese editorial environmental information website called “Nhựa Xanh Hà Nội” (working title), NOT a commercial SaaS landing page. Its job is to explain 7 plastic resin codes, household sorting in Hanoi, and a verified recycling collection map.
Visual direction: Modern Eco Editorial, off-white paper #F8F7F2, deep-green type #193F2A, botanical green #357A54, tactile still-life everyday plastic objects, native Hanoi context, generous whitespace, magazine typography with Be Vietnam Pro and optional Vietnamese-supporting serif. Realistic object annotations with tiny field-guide labels.
Avoid: glassmorphism, neon gradients, AI 3D renders, arbitrary green leaves, SaaS feature-card overload, false impact counters, fake stations, fake partner logos, stock people, copying hailuunguoc.vn.
Deliver two distinct alternatives WITHIN this one style, then high-fidelity desktop 1440/mobile 390 for Home, Resin List, Detail, Sorting, Map/List, including empty/loading/error states and reusable components. All copy must be meaningful Vietnamese; map markers must say SAMPLE on prototypes. Provide tokens, spacing, components, accessibility intent and asset licensing checklist. Ask for approval before production handoff.
```

## 7. Prompt từ Figma handoff sang v0/Codex/Claude

```text
Implement approved Figma screens for Nhựa Xanh Hà Nội using Next.js App Router + TypeScript + Tailwind. Figma frames and design tokens are the single visual source-of-truth. Preserve exact editorial composition, photographic asset treatment, Vietnamese typography and mobile rules; do not replace with default shadcn SaaS cards. Build reusable semantic components, ensure keyboard/a11y and prefers-reduced-motion. Keep collection-point dataset validated and mock fixtures out of production. Deliver PR with tests, Lighthouse, screenshots 1440/390 against Figma and list of unresolved design mismatches. Do NOT invent content or claim verified locations.
```
