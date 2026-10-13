# 12 — DECISION LOG, CUSTOMER QUESTIONS & RISK REGISTER

## 1. Chốt rồi (CONFIRMED từ hội thoại)

| ID | Quyết định | Trạng thái |
|---|---|---|
| D-001 | Chủ đề: thông tin các loại nhựa | CONFIRMED |
| D-002 | Chủ đề: cách phân loại rác nhựa | CONFIRMED |
| D-003 | Bản đồ điểm thu gom nhựa tại Hà Nội | CONFIRMED |
| D-004 | Phong cách **Modern Eco Editorial** cho toàn website | CONFIRMED |
| D-005 | Học storytelling từ https://hailuunguoc.vn/ nhưng nội dung chủ đề khác | CONFIRMED |
| D-006 | Triển khai trên Next.js với đội AI Dev; user là người giao task và trao đổi khách hàng | CONFIRMED |

## 2. PO proposal cần phê duyệt thêm

| ID | Phương án mặc định | Vì sao | Approver |
|---|---|---|---|
| P-001 | Tên làm việc “Nhựa Xanh Hà Nội” | Dễ trao đổi, chưa coi là logo chính thức | Khách hàng |
| P-002 | V1 = 4 trang/khu vực + 7 detail pages, no login/backend/CMS | Tập trung giá trị thực, dễ hoàn thiện | Khách hàng/PO |
| P-003 | 7 mã nhựa là thư viện kiến thức; vật liệu tiếp nhận là metadata **theo trạm** | Tránh thông tin sai | PO + chuyên gia |
| P-004 | Dữ liệu trạm lưu static đã xác minh, cập nhật bằng PR | Thích hợp V1 ít địa điểm | Khách hàng/tech |
| P-005 | Ưu tiên design approval Figma trước bulk FE implementation | Tránh UI AI-generic | PO/khách hàng |
| P-006 | Mini quiz / print guide là P1, không chặn launch | Giữ trọng tâm | PO |
| P-007 | Production hosting managed (ví dụ Vercel) | Tiết kiệm ops V1 | Khách hàng |

## 3. Câu hỏi cần user mang đi hỏi khách hàng — sắp theo mức độ chặn

### P0 — Cần giải quyết trước gate tương ứng

1. **Đơn vị sở hữu & mục đích cuối:** Website cho tổ chức nào, chương trình nào? Kênh thông tin chính thức hay dự án cộng đồng? Ai có quyền phê duyệt nội dung/ảnh và release?
- Trả lời : Đây là website truyền thông cho 1 nhóm đồ án làm về chủ đề bảo vệ môi trường.
2. **Tên/logo/domain:** Giữ “Nhựa Xanh Hà Nội” không? Logo, màu thương hiệu, ảnh thật đã có? Có cần nhắc logo đối tác được phép?
- Trả lời : Chưa có logo. Tạm thời bỏ qua. Nhưng có thể dùng logo tạm thời, còn ảnh thì hãy tạm thời generate
3. **Nguồn trạm thu gom:** Khách hàng có thể kết nối URENCO/đơn vị vận hành mạng lưới 100 HUB (09/2026) hoặc đối tác khác để xin dữ liệu chính thức không? Khách hàng/đối tác có **danh sách điểm hoạt động hiện tại**, địa chỉ, tọa độ, loại nhựa nhận, giờ nhận, contact và sự đồng ý công bố không? Ai liên hệ xác minh và cập nhật sau launch?
- Trả lời : Tạm thời xây dựng dữ liệu mock có thật ở Hà Nội mà bạn nghiên cứu được
4. **Phạm vi địa lý:** Hà Nội toàn thành phố hay chỉ nội thành/một nhóm khu vực để có dữ liệu đáng tin? Tính tới địa giới hành chính hiện hành chưa?
- Trả lời : Ở version 1. CHỉ làm ở Hà Nội
5. **Quy tắc công bố:** Nếu ngày phát hành chỉ có 0–2 điểm verified, khách hàng chấp nhận hiển thị trạng thái dữ liệu đang bổ sung thay vì “bản đồ đầy đủ” không?
- Trả lời :  Chấp nhận
6. **Review khoa học/pháp lý:** Ai bên khách hàng rà soát nội dung phân loại và tuyên bố môi trường? Ai xác nhận hướng dẫn địa phương?
- Trả lời : Phần này bỏ qua sau này sẽ làm sau.
7. **Nguồn hình ảnh & bản quyền:** Có ảnh thực tế sản phẩm/trạm, quyền sử dụng ảnh chụp, font và logo không? Có ngân sách chụp ảnh minh họa không?
- Trả lời :  Đây mới là demo với khách chưa lên production. Sau này khách sẽ phải tự cung cấp thông tin cho chúng ta
8. **Release constraints:** Ngày cần demo/go-live, budget, domain, hosting account, ai sẽ ký UAT và hỗ trợ vận hành?
- Trả lời : Sẽ làm luôn trong thời gian gần. Càng nhanh càng tốt

### P1 — Nên giải quyết trong sprint thiết kế

9. Đối tượng trọng tâm là học sinh/sinh viên, hộ gia đình hay người lao động? Ưu tiên nội dung bình dân hay khoa học?
- Trả lời : Học sinh sinh viên
10. Tiếng Việt duy nhất V1? Có cần English?
- Trả lời : Only tiếng việt
11. Chấp nhận sử dụng tool nào cho design (Figma, Stitch, v0)? Team có Figma seat?
- Trả lời : Hãy đề xuất tool đạt hiệu quả tốt nhất với mức phí = 0 ( free)
12. Tên gọi “điểm thu gom” có bao gồm xe thu gom lưu động, sự kiện, cơ sở thu mua phế liệu không? Quy tắc xác thực từng loại?
- Trả lời : Có thể là toàn bộ. Hãy có phần phân loại điểm thu gom
13. Có thu thập analytics/feedback user không? Nếu có, chủ thể quản lý dữ liệu, privacy wording, retention?
- Trả lời : Tạm thời bỏ qua thu thập thông tin người dùng. Website phiên bản này chỉ mang tính truyền thông
14. Khách hàng có người bảo trì danh sách trạm theo chu kỳ và xử lý báo sai không?
- Trả lời : Tạm thời bỏ qua không quan tâm

### P2 — V1.1

15. Có cần CMS tự cập nhật, cộng đồng gửi trạm, quiz, gamification hoặc sự kiện sau launch?
- Trả lời : Bỏ qua. sẽ làm ở v2

## 4. Risk register

| Risk | Probability | Impact | Mitigation | Owner | Trigger |
|---|---|---|---|---|---|
| R-01 Không đủ điểm thu gom xác minh | High | Critical | Data research trước, human confirmation, không mock public, quyết định fallback minh bạch | User/PO/Data | <3 verified trước G3 |
| R-02 Thông tin phân loại nhầm | Medium | Critical | Người duyệt nội dung, legal sources, claim register, không phát biểu universal recyclability | Content/PO | Review fail |
| R-03 UI AI-generic, không đúng brand | High | High | Design role độc lập, visual board/hi-fi trước code, assets thực | Design/PO | Design G1 fail |
| R-04 Thiếu bản quyền ảnh/font/logo | Medium | High | Asset license manifest, tự chụp/cấp phép, no-copy | Design/Customer | Không có chứng cứ |
| R-05 Map SSR, tiles fail/chậm | Medium | High | Client-only Leaflet, map/list fallback, provider policy | Map/QA | map smoke fail |
| R-06 Agent conflicts / scope creep | High | Medium | Ticket ownership, PR nhỏ, stable contracts, DoR/DoD | Tech Lead/PO | Nhiều file conflict |
| R-07 Không có người duy trì dữ liệu | High | High | Owner, recheck cadence, pause stale locations | Customer/PO | Chưa assign ops |
| R-08 Không đạt mobile/a11y | Medium | High | Design mobile-first, QA Playwright/axe, test thực tế | QA/Design | Release gate fail |
| R-09 Tracking/privacy không được duyệt | Medium | Medium | No tracking default, approve before adding | Tech Lead/Customer | Feature request |
| R-10 Điểm/tên đơn vị thay đổi | Medium | High | Verification date, edit history, reassess every cycle | Data Steward | Broken link/complaint |

## 5. Decision log mẫu cập nhật

```md
- ID: D-0XX
- Date: YYYY-MM-DD
- Question:
- Options & trade-offs:
- Final decision:
- Decided by (human):
- Source of approval (link/message):
- Affected tickets/specs:
- Effective version:
```

**Trước khi trao task coding số lượng lớn**, user có thể gửi cho khách hàng đúng 8 câu P0 ở trên; agent tiếp tục phần không phụ thuộc để tránh đình trệ.
