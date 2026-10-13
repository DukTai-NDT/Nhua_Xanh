# 05 — COLLECTION POINT DATA & MAP GOVERNANCE

**Đây là rủi ro quan trọng nhất của sản phẩm.** Bản đồ đẹp nhưng chỉ sai một điểm nhận cũng gây hại niềm tin người dùng.

## 1. Điều đã tìm thấy từ desk research (13/10/2026)

Các nguồn sau là **đầu mối cần xác minh**, không phải danh sách địa chỉ đủ điều kiện công bố:

- **Ưu tiên cao nhất — URENCO 100 HUB (09/2026):** URENCO và đối tác công bố triển khai/thí điểm mạng lưới 100 điểm phân loại/thu hồi vật liệu tái chế trong khu vực từ Vành đai 2 vào trung tâm Hà Nội; báo Nông nghiệp & Môi trường nói chương trình có **bản đồ số** để tra cứu và HUB có mã định danh. Việc có chương trình **không đồng nghĩa** đã nhận được file địa chỉ/toạ độ/điều kiện tiếp nhận từng HUB. PO nên **liên hệ URENCO xin nguồn dữ liệu/bản đồ chính thức, quyền tái sử dụng, lịch cập nhật và đầu mối xác minh** trước khi làm dataset. Nguồn: https://nongnghiepmoitruong.vn/urenco-thi-diem-100-diem-phan-loai-thu-hoi-vat-lieu-tai-che-d831371.html và https://english.nnmt.net.vn/21-days-of-waste-sorting-making-source-separation-part-of-urban-life .

- Báo Nhân Dân 10/04/2025 mô tả dự án Tagom và hoạt động thu gom ở Thanh Xuân Bắc; không đủ bằng chứng địa điểm/lịch hiện tại: https://nhandan.vn/post-871467.html .
- VnExpress bài cũ 2020 nêu hoạt động Urenco và ví dụ tại 59C Hoàng Cầu; quá cũ để coi còn hoạt động năm 2026: https://vnexpress.net/ha-noi-phan-loai-rac-tu-nguon-de-tai-che-4157466.html .
- Vietnamnet đưa tin mạng lưới thu gom bao bì của Coca-Cola/đối tác mở rộng Hà Nội, TP.HCM; cần xin danh mục địa điểm chính thức hiện hành và loại bao bì: https://vietnamnet.vn/coca-cola-mo-rong-30-diem-thu-gom-bao-bi-tai-ha-noi-va-tphcm-2559851.html .
- Trang UBND xã Dân Hòa có lịch xe thu gom rác tái chế theo địa bàn, là **dịch vụ lưu động theo lịch**, không tự động biến thành marker “trạm cố định”: https://danhoa.hanoi.gov.vn/thong-bao/thong-bao-lich-thu-gom-rac-thai-sinh-hoat-rac-tai-che-tren-dia-ban-xa-dan-hoa-tu-ngay-01-6-2026-2765260610195708054.htm .

**Kết luận:** web search giúp tìm lead, **không xác minh thời gian hoạt động, chất liệu nhận, tọa độ, tính công khai**. Không có bộ dữ liệu đã xác minh nào được cung cấp cho pack này.

## 2. Verification protocol (bắt buộc)

Mỗi ứng viên đi qua pipeline:

`SOURCED → CONTACT_PENDING → VERIFIED → PUBLISHED → RECHECK_DUE → [REVERIFIED | PAUSED | RETIRED]`.

- **SOURCED:** có nguồn gốc đáng tin, địa chỉ gợi ý.
- **CONTACT_PENDING:** cần gọi/email/đến nơi xác nhận; AI không được giả mạo việc đã gọi.
- **VERIFIED:** người có trách nhiệm kiểm tra được điểm thật, tọa độ, loại nhựa nhận, điều kiện giao, lịch nhận, có quyền công khai.
- **PUBLISHED:** đã qua review PO & Data Steward; xuất bản từ dữ liệu verified.
- **RECHECK_DUE:** đã đến kỳ rà soát (gợi ý 60 ngày với nơi cố định, ngắn hơn nếu lịch sự kiện).
- **PAUSED/RETIRED:** tạm dừng/đóng/mất liên hệ; tự động ẩn khỏi kết quả “đang tiếp nhận” khi hết xác minh.

**Chứng cứ phù hợp:** website chính thức công bố danh mục còn hiệu lực; xác nhận trực tiếp của đơn vị vận hành có ngày và tên người kiểm chứng; ảnh hiện trường được phép sử dụng + tin cậy; lịch cơ quan địa phương còn hiệu lực. Bản đồ Google/OSM hoặc tin báo cũ **không** đủ tự thân để xác nhận nhận loại nhựa nào.

## 3. Schema dữ liệu đề xuất

```ts
type Resin = 'PET' | 'HDPE' | 'PVC' | 'LDPE' | 'PP' | 'PS' | 'OTHER';
type PointStatus = 'sourced' | 'contact_pending' | 'verified' | 'published' | 'recheck_due' | 'paused' | 'retired';
type CollectionMode = 'fixed' | 'scheduled_mobile' | 'event_only';

interface CollectionPoint {
  id: string; // immutable slug/UUID
  name: string;
  fullAddress: string;
  wardOrArea?: string; // tên hành chính phải kiểm tra theo hiện trạng
  city: 'Hà Nội';
  location: { lat: number; lng: number }; // WGS84 đã kiểm tra
  collectionMode: CollectionMode;
  acceptedResins: Resin[]; // chỉ chứa material ĐÃ XÁC NHẬN
  preparationNotes?: string;
  scheduleText?: string; // text đã xác minh, không đoán open-now
  instructions?: string;
  publicContact?: string; // chỉ contact của tổ chức được phép công khai
  source: { title: string; url?: string; type: string; checkedBy: string };
  verifiedAt: string; // YYYY-MM-DD
  nextReviewAt: string; // YYYY-MM-DD
  status: PointStatus;
  publicationApprovedBy?: string;
  publicationApprovedAt?: string;
}
```

**Quan hệ logic:** `acceptedResins=[]` không đồng nghĩa “không nhận nhựa”; nghĩa là chưa được xác nhận. Điểm này không được đưa ra như nơi nhận nhựa qua filter; tốt nhất chưa xuất bản cho tới khi chứng minh được ít nhất một loại nhựa.

## 4. Data validation bắt buộc

- id duy nhất, non-empty name/address; WGS84 coords finite, trong bounding box Hà Nội thiết lập theo nguồn hành chính; kiểm tra thủ công xem pin trên đúng lối vào.
- Status `published` bắt buộc `verifiedAt`, `nextReviewAt`, nguồn, người duyệt, ít nhất 1 acceptedResin, tọa độ địa điểm thật.
- `verifiedAt <= current date`; `nextReviewAt >= verifiedAt`; quá hạn thì flag `recheck_due` và ẩn hay dán nhãn chờ rà soát theo quyết định PO (mặc định ẩn).
- De-duplicate theo tên/địa chỉ/tọa độ; điểm sự kiện không được vĩnh viễn.
- Không lưu số cá nhân của tình nguyện viên, số riêng không được phép chia sẻ.
- Link ngoài chỉ https (ngoại lệ `mailto:`/`tel:` có phê duyệt); escape nội dung HTML, không render raw HTML từ dataset.

## 5. Map interactions và UI contract

- Map center mặc định vị trí nhìn Hà Nội (không dùng location người dùng); map tile thực hiện theo chính sách nhà cung cấp.
- Card ↔ marker highlight đồng bộ. Filter theo acceptedResins **đã xác minh**, URL query sync; có clear all.
- List mode song song/map fallback đầy đủ; marker click không phải cách duy nhất để truy cập địa điểm.
- Chỉ đường: link người dùng chọn mở Google Maps/ứng dụng map; **không** tính/dự đoán thời gian di chuyển bằng nội bộ nếu không có API.
- Không sử dụng nhãn `Open now` nếu không có dữ liệu lịch & múi giờ đáng tin.
- Hiện `last verified` và câu nhắc “Liên hệ xác nhận trước khi tới” nếu dữ liệu không realtime.
- `report an issue` có thể là mailto có thông tin ID điểm, không thu thập form người dùng ở V1 nếu chưa duyệt privacy.

## 6. Nhà cung cấp bản đồ & sử dụng hợp lệ

- Leaflet là thư viện render, **không cung cấp dữ liệu marker**; OSM là dữ liệu bản đồ, cũng **không chứng minh** trạm thu gom hoạt động.
- Nếu dùng `tile.openstreetmap.org` phải: hiển thị attribution rõ, URL HTTPS đúng, không prefetch/offline download, tuân thủ caching/referrer, và biết dịch vụ best-effort, **không SLA**. Với production có traffic đáng kể nên đánh giá hosted tile provider với terms/cost phù hợp.
- Link chính sách: https://operations.osmfoundation.org/policies/tiles/ .
- Không được dùng bulk Nominatim geocoding hoặc scraping tile tùy tiện. Geocoding danh sách ứng viên nên thực hiện có trách nhiệm với provider cho phép và kiểm tra địa chỉ bằng người.

## 7. Kế hoạch thu thập dữ liệu V1

1. PO xin khách hàng **nguồn hợp tác/chủ trạm/đối tác** có thẩm quyền cập nhật; **ưu tiên tiếp cận URENCO** để xin dữ liệu/bản đồ 100 HUB và điều khoản tái sử dụng chính thức (không scrape bản đồ bên thứ ba).
2. Data Steward tạo sheet `collection-candidates` tách khỏi production; ghi nguồn và độ tin cậy.
3. User hoặc đại diện khách hàng liên hệ xác minh lần lượt; đưa bằng chứng, date, accepted materials, schedule.
4. Map Dev nhập verified dataset theo schema, chạy validation.
5. QA kiểm pin ↔ address ↔ accepted materials, đường dẫn directions, map/list, mobile.
6. PO ký duyệt công bố và lịch kiểm tra định kỳ; chỉ sau đó set `published`.

**Mục tiêu kiểm thử launch đề xuất:** ≥3 địa điểm được xác minh độc lập nếu có nguồn/đối tác đủ mạnh. Không tạo marker giả để đạt chỉ tiêu. Nếu 0 địa điểm thật, không được gọi bản đồ là “danh sách các trạm đang hoạt động”; PO phải xin phê duyệt fallback/giảm scope trước public.

## 8. Test dữ liệu (gọi mã trong QA plan)

- `DATA-01`: unpublished/expired excluded from production map.
- `DATA-02`: ID duplicate, bad coords, future verifiedAt → validation fails.
- `DATA-03`: point showing `PET` really has PET confirmed in evidence.
- `DATA-04`: after retiring location, it disappears from list/map and URLs fail gracefully.
- `DATA-05`: scheduled-mobile/event point not represented as 24/7 permanent pin.
- `DATA-06`: visible OSM attribution and map fallback on blocked tiles.
