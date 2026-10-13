# 04 — CONTENT STRATEGY & EDITORIAL QUALITY

**Owner:** Research/Content Agent | **Reviewer:** PO + người am hiểu môi trường/đơn vị vận hành nếu có | **Status:** Khung nội dung; thông tin chuyên môn phải rà soát trước publish.

## 1. Editorial voice

- Thân thiện, bình tĩnh, có ích; **không giáo điều, không guilt-tripping**.
- Câu ngắn, ưu tiên động từ, hình ảnh vật dụng người Hà Nội thường gặp.
- Khi không chắc: “thường gặp”, “có thể”, “tùy điểm thu gom”, “hãy kiểm tra nơi tiếp nhận” thay vì phán chắc.
- Độ tuổi đọc phù hợp người trưởng thành và học sinh lớn; giải thích thuật ngữ khi xuất hiện lần đầu.
- Không tạo bài “copy 7 lần”: mỗi trang phải có hình minh họa, công dụng, lưu ý và nguồn thực sự khác nhau.

## 2. Nguyên tắc khoa học và pháp lý

**Quan trọng:** Hai hệ thống phân loại khác nhau:

A. **Mã nhựa (resin identification code, RIC)**: nhận diện chất liệu thường ghi 1–7; nó không phải phiếu bảo đảm tái chế.

B. **Nhóm rác sinh hoạt tại nguồn**: Hà Nội có quy định năm 2025 áp dụng từ 2026 về phân loại theo nhóm chất thải và chuyển giao; cần theo hướng dẫn cụ thể của địa phương. Nguồn khởi đầu: văn bản Quyết định 87/2025/QĐ-UBND và trang thông tin chính quyền địa phương. Có trường hợp đơn vị địa phương hướng dẫn chi tiết hơn; không đánh đồng 7 mã nhựa với số nhóm rác đô thị.

Nguồn đối chiếu: https://ngocha.hanoi.gov.vn/kinh-te-ha-tang-do-thi/phuong-ngoc-ha-trien-khai-thuc-hien-quyet-dinh-cua-ubnd-thanh-pho-ve-quan-ly-chat-thai-ran-sinh-hoat-2802260211155551127.htm và https://thuvienphapluat.vn/van-ban/Tai-nguyen-Moi-truong/Quyet-dinh-87-2025-QD-UBND-quan-ly-chat-thai-ran-sinh-hoat-cua-ho-gia-dinh-ca-nhan-Ha-Noi-687687.aspx . Đối chiếu bản gốc/hiệu lực trước công bố.

## 3. Data content cho 7 loại — bản brief, KHÔNG phải copy-final

| Mã | Ký hiệu | Mẫu vật minh họa đề xuất | Ghi chú biên tập |
|---|---|---|---|
| 1 | PET/PETE | Chai nước giải khát, chai nước đóng chai (xác định nhãn) | Giải thích khác nhau giữa chai/thành phần phụ như nắp/nhãn |
| 2 | HDPE | Can/chai đựng hóa mỹ phẩm hoặc sữa ở một số thị trường, thùng nhựa có nhãn | Tránh hướng dẫn xử lý chai chứa hóa chất nguy hại như rác nhựa sạch |
| 3 | PVC | Ống nhựa/nhóm bao bì có mã PVC (chọn ảnh có xác minh) | Không cam kết các trạm tái chế phổ thông tiếp nhận |
| 4 | LDPE | Túi/màng nhựa có mã phù hợp | Điểm thu gom chai cứng có thể không nhận màng/túi |
| 5 | PP | Hộp thực phẩm, nắp/hộp có xác nhận nhãn PP | Cách chuẩn bị/hạn chế bẩn; không đồng nhất PP = luôn được nhận |
| 6 | PS | Một số cốc/hộp xốp và sản phẩm PS | Phân biệt PS dạng cứng và xốp EPS; thường có giới hạn tại điểm nhận |
| 7 | OTHER | Nhóm vật liệu khác/pha trộn; tùy bao bì | Không suy luận đây là một polymer duy nhất hoặc an toàn/độc theo mã |

**Bắt buộc xác minh từng ví dụ vật dụng bằng ký hiệu vật liệu trên hình hoặc nguồn sản phẩm**. Không dùng bức ảnh minh họa có sản phẩm khác vật liệu chỉ vì giống hình dáng.

### Schema nội dung (`src/data/plastics.ts` hoặc JSON)

```ts
type PlasticCode = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface PlasticGuide {
  code: PlasticCode;
  slug: string;
  shortName: string;
  fullName: string;
  summary: string;
  typicalItems: { label: string; image: string; verifiedMaterial?: boolean }[];
  identificationNotes: string[];
  preparationSteps: string[];
  cautions: string[];
  sources: { title: string; url: string; accessedAt: string }[];
  lastReviewedAt: string; // YYYY-MM-DD
  reviewer: string;
}
```

Không gắn `isRecyclable: boolean` cho từng loại nhựa. Khả năng tiếp nhận thuộc **từng điểm thu gom**, không phải bản chất duy nhất của code.

## 4. Cấu trúc nội dung từng trang chi tiết

1. **Nhận diện:** code, tên đủ và tên ngắn, ví dụ đời thực.
2. **Dùng để làm gì:** 2–3 ví dụ đã xác thực, ảnh chuẩn.
3. **Dấu hiệu cần kiểm tra:** vị trí ký hiệu, nhãn bao bì, lưu ý vật liệu nhiều lớp.
4. **Chuẩn bị:** làm rỗng, vệ sinh/làm sạch theo tình trạng nếu được, để khô khi phù hợp; không lãng phí nước thái quá.
5. **Điểm nhận:** yêu cầu kiểm tra quy định/địa điểm, nút lọc tương ứng trên map nếu có data.
6. **Cẩn trọng:** chất có hại, đồ sắc nhọn, nhựa pha trộn.
7. **Nguồn và thời gian rà soát.**

## 5. Hướng dẫn phân loại — phiên bản copy v0 cần chuyên gia duyệt

**Title:** “Bắt đầu từ món đồ nhựa bạn đang cầm.”

**Ba bước gợi ý:**

1. **Xác định nhóm rác:** nhựa có khả năng tái sử dụng/tái chế được tách khỏi rác thực phẩm và các nhóm khác theo hướng dẫn địa phương; với bao bì dính chất nguy hại cần xử lý riêng.
2. **Nhận diện và chuẩn bị:** kiểm tra nhãn vật liệu; làm rỗng; loại bỏ lượng thức ăn tồn dư để hạn chế nhiễm bẩn; chỉ tách nắp/nhãn nếu điểm nhận yêu cầu.
3. **Kiểm tra điểm tiếp nhận:** chọn vật liệu, xem giờ/quy định từ nguồn đã xác minh, trước khi di chuyển.

*Lưu ý biên tập:* hướng dẫn “rửa sạch hoàn toàn” cho mọi vật dụng không luôn tối ưu, và hướng dẫn tháo nắp không đồng nhất mọi quy trình. Hãy dẫn người dùng đến yêu cầu của nơi nhận và cập nhật theo chính sách địa phương.

## 6. Copy micro-UX đã gợi ý

| State | Copy |
|---|---|
| Hero | “Hiểu về nhựa. Sống xanh hơn.” |
| Home secondary | “Mỗi món đồ có một cách xử lý phù hợp.” |
| CTA primary | “Khám phá 7 loại nhựa” |
| CTA map | “Tìm điểm thu gom” |
| Filter empty | “Chưa có điểm đã xác minh phù hợp với bộ lọc này. Hãy thử loại nhựa khác hoặc xem toàn bộ điểm.” |
| Missing hours | “Giờ tiếp nhận: Chưa được xác nhận. Vui lòng kiểm tra với điểm thu gom trước khi đến.” |
| Data freshness | “Thông tin được kiểm tra lần gần nhất: [ngày]. Vui lòng xác nhận lại trước khi di chuyển.” |
| Map down | “Bản đồ hiện chưa tải được. Bạn vẫn có thể xem danh sách các điểm bên dưới.” |
| Material caution | “Mã nhựa cho biết loại vật liệu; không bảo đảm mọi địa điểm đều nhận tái chế.” |

## 7. Workflow nghiên cứu → duyệt → publish

1. Research Agent tìm nguồn primary/secondary đáng tin; trích dữ kiện có ngày.
2. Viết bản copy tiếng Việt mới, không sao chép bài báo, ghi `sourceUrl`, `accessedAt`.
3. Phân loại claim: **confirmed** / **context-specific** / **unverified**.
4. Người review kiểm tra tính đúng chuyên môn/địa phương, loại bỏ claim chưa xác minh.
5. Design Agent đặt text thật lên bố cục; tránh truncation/hidden content.
6. FE mã hóa thành data; content checks + link check CI.
7. PO duyệt chính tả, tone, nguồn, ngày cuối trước release.

## 8. Editorial release checklist

- [ ] Có đủ 7 mã nhựa, không nhầm PET/PP, PS/EPS, PVC/OTHER.
- [ ] Không nói mã 1/2/5 “luôn tái chế được” hay mã 7 “luôn độc hại”.
- [ ] Đúng luật phân loại tại nguồn; người đọc hiểu đây không phải toàn bộ quy trình địa phương.
- [ ] Mỗi ảnh minh họa đúng mã và có quyền sử dụng.
- [ ] Không khẳng định điểm thu gom nhận vật liệu chưa xác minh.
- [ ] Mọi con số thống kê nếu có phải ghi nguồn/năm/phạm vi.
- [ ] Bài đầy đủ nguồn, người biên tập, ngày duyệt; links sống.
- [ ] CTA có dẫn đến trang thật, không tới placeholder.
