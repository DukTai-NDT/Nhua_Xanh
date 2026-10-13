# 13 — REFERENCES & RESEARCH LOG

**Reviewed:** 13/10/2026 | Link có thể thay đổi theo thời gian; người thực hiện nội dung phải kiểm tra lại nguồn trước khi publish. Không dùng tài liệu này thay xác minh vận hành tại trạm.

## A. Website cảm hứng

- https://hailuunguoc.vn/ — tham khảo cấu trúc storytelling/interactive campaign; nội dung/dự án khác; không copy assets/source.

## B. Tài liệu địa phương / nội dung môi trường

- https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-trien-khai-thuc-hien-quyet-dinh-cua-ubnd-thanh-pho-ve-quan-ly-chat-thai-ran-sinh-hoat-2802260211155551127.htm — cơ quan phường tóm tắt Quyết định 87/2025/QĐ-UBND, các nhóm rác nguồn Hà Nội.
- https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-87-2025-QD-UBND-quan-ly-chat-thai-ran-sinh-hoat-cua-ho-gia-dinh-ca-nhan-Ha-Noi-687687.aspx — văn bản quy định quản lý chất thải rắn sinh hoạt Hà Nội ban hành 29/12/2025, cần kiểm bản gốc/hiệu lực khi viết copy pháp lý.
- https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-huong-dan-phan-loai-chat-thai-ran-sinh-hoat-tai-nguon-2802260311195650077.htm — ví dụ chi tiết hướng dẫn địa phương trong năm 2026; số nhóm trong hướng dẫn chi tiết có thể khác mô hình tổng quát, không suy diễn thành quy định thống nhất mọi nơi.
- https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000PQU.TXT — hướng dẫn EPA (cũ) để đối chiếu ký hiệu 1–7; cập nhật bằng nguồn resin code hiện đại khi final review.

## C. Candidate source leads về điểm tiếp nhận — KHÔNG xác minh đang mở

- **Tin ưu tiên gần đây:** https://nongnghiepmoitruong.vn/urenco-thi-diem-100-diem-phan-loai-thu-hoi-vat-lieu-tai-che-d831371.html — URENCO 100 HUB thử nghiệm, 16/09/2026; cần danh sách và điều khoản dùng dữ liệu.
- https://english.nnmt.net.vn/21-days-of-waste-sorting-making-source-separation-part-of-urban-life — bài báo 20/09/2026 có chi tiết HUB định danh và bản đồ số do URENCO/đối tác sử dụng; **không** suy ra có API công khai.
- https://www2.en.baochinhphu.vn/phat-dong-chien-dich-lam-cho-the-gioi-sach-hon-nam-2026-tu-dia-an-sach-den-thanh-pho-sach-102260920110159828.htm — thông tin chương trình ở cổng báo Chính phủ (09/2026).

- https://nhandan.vn/post-871467.html — câu chuyện dự án Tagom (04/2025), liên hệ xác nhận hoạt động cụ thể.
- https://vnexpress.net/ha-noi-phan-loai-rac-tu-nguon-de-tai-che-4157466.html — chương trình Urenco (2020), đã cũ.
- https://vietnamnet.vn/coca-cola-mo-rong-30-diem-thu-gom-bao-bi-tai-ha-noi-va-tphcm-2559851.html — mạng lưới chương trình thu gom bao bì, cần danh sách official/hiệu lực.
- https://danhoa.hanoi.gov.vn/thong-bao/thong-bao-lich-thu-gom-rac-thai-sinh-hoat-rac-tai-che-tren-dia-ban-xa-dan-hoa-tu-ngay-01-6-2026-2765260610195708054.htm — lịch thu gom theo khu vực, **không phải mặc định trạm cố định**.

## D. Design tools (primary/vendor sources)

- https://help.figma.com/hc/en-us/articles/24039793359767-Get-started-with-Figma-AI
- https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make
- https://help.figma.com/hc/en-us/articles/31722591905559-Figma-Make-FAQs
- https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/
- https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- https://v0.app/docs/figma
- https://v0.app/docs/screenshots
- https://v0.app/docs/design-mode

## E. Engineering & quality

- https://nextjs.org/docs/app — App Router / performance / routing.
- https://tailwindcss.com/docs/theme — Tailwind v4 design tokens.
- https://leafletjs.com/ — Leaflet docs.
- https://operations.osmfoundation.org/policies/tiles/ — **bắt buộc** nếu dùng OSM public raster tiles; attribution/cache/limit.
- https://www.w3.org/TR/WCAG22/ — Web Content Accessibility Guidelines 2.2.
- https://web.dev/articles/vitals — Core Web Vitals.
- https://playwright.dev/docs/test-snapshots — snapshot/visual comparison tests.
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content — nội dung hữu ích, chính xác, có nguồn.

## F. Quy tắc trích dẫn/cập nhật

Mỗi nội dung public hoặc điểm thu gom có claim ảnh hưởng hành động người dùng nên có `sourceUrl`, `sourceTitle`, `accessedAt`, `reviewedAt`, `reviewedBy`; điểm thu gom phải thêm `verifiedAt`, `verifiedBy`, phạm vi vật liệu, `nextReviewAt` và bằng chứng từ nơi vận hành. Source link trong bài viết **không thay thế** việc đã gọi/xác minh trực tiếp điểm hoạt động.
