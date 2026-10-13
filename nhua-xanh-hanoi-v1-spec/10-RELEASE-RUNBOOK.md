# 10 — UAT, RELEASE & POST-LAUNCH RUNBOOK

**Release candidate:** V1.0.0 (chưa phát hành) | **Owner:** PO + QA + DevOps | **Policy:** Không production launch chỉ vì code build thành công.

## 1. Trước khi mở staging cho khách hàng

- [ ] Có commit SHA/tag release candidate, khóa dependency lockfile.
- [ ] `lint`, `typecheck`, `test:unit`, `data:validate`, `build`, `test:e2e` xanh; có logs/links.
- [ ] Design Agent xác nhận 5 màn hình mobile/desktop bám thiết kế đã duyệt; không dùng ảnh thiếu quyền.
- [ ] Content reviewer xác nhận 7 loại, sorting copy, nguồn và bản địa hóa.
- [ ] Data Steward + human verifier gửi record/trạm thực tế; danh sách production không có candidate/mock/expired.
- [ ] QA có test report (S0/S1=0, exceptions có phê duyệt).
- [ ] Đã kiểm Lighthouse/axe/keyboard trên representative pages.
- [ ] Preview/staging có `noindex`; link staging không lẫn với production.
- [ ] Privacy/terms/attribution được khách hàng xem qua.
- [ ] Đã chuẩn bị người sở hữu cập nhật điểm thu gom sau phát hành.

## 2. UAT 5 kịch bản thật (10–20 phút mỗi người, điều chỉnh theo thực tế)

| UAT | Bối cảnh người dùng | Nhiệm vụ | Kết quả chấp nhận |
|---|---|---|---|
| UAT-01 | Chưa biết mã nhựa | Tìm PET, xem ví dụ và cách chuẩn bị | Tìm được <2 điều hướng từ Home; nhận thức mã nhựa không bảo đảm tái chế |
| UAT-02 | Có hộp nhựa | Vào phân loại và kể lại 3 bước | Hiểu nhóm rác, biết cần chuẩn bị và kiểm tra nơi nhận |
| UAT-03 | Muốn đem rác đi | Lọc nhựa → chọn điểm phù hợp → chỉ đường | Chỉ tới điểm **đã xác minh**, đọc được địa chỉ/giờ/nguồn |
| UAT-04 | Mobile user | Mở menu, đọc chi tiết, chuyển Map/List | Dễ chạm, không cắt chữ, không cần pinch map mới thấy địa điểm |
| UAT-05 | Giới hạn/tình huống lỗi | Lọc không kết quả, chặn map tiles | Có trạng thái hữu ích; danh sách vẫn chạy/không crash |

**Ghi nhận:** người thử, kịch bản, timestamp, observation, câu trích thực tế (nếu đồng ý), bug ticket, critical confusion, quyết định sửa. Không bịa kết quả khảo sát.

## 3. Go/No-Go meeting (15–30 phút)

Tham dự: User (đầu mối), PO, Tech Lead, QA, Design, Data/Content owner và khách hàng hoặc người được ủy quyền.

Báo cáo gồm:
- Scope thực hiện vs PRD; câu hỏi còn mở.
- Demo 4 journeys, desktop/mobile, map offline fallback.
- Quality dashboard: tests, bugs, performance, a11y, SEO.
- Danh sách điểm công khai và tình trạng xác minh; nguồn license.
- Privacy/hosting cost/owner of operations.
- Rollback path, contact on incident.

Kết luận bắt buộc ký **GO** hoặc **NO-GO**, không “tự hiểu là đã đồng ý”.

## 4. Production deployment checklist

- [ ] Domain, SSL, DNS, legal footer/organization thông tin chính xác.
- [ ] Production env đặt đúng provider/config; không leak `.env`, preview keys.
- [ ] Tắt mock/test toggles; production dataset đã được duyệt.
- [ ] Robots index bật cho các trang public đã duyệt; sitemap/canonical production đúng.
- [ ] Kiểm OSM attribution visible và tile provider terms.
- [ ] Security headers phù hợp, no secrets public, HTTPS.
- [ ] Cache revalidation/deployment correctly bust nội dung địa điểm cũ.
- [ ] Rollback artifact/deployment trước đó còn truy cập; xác định ai có quyền rollback.

## 5. Production smoke ngay sau deploy

1. Mở homepage trên mobile/desktop; logo, fonts, ảnh và CTA.
2. Mở list, cả 7 chi tiết nhựa, sorting, map.
3. Test 1 địa điểm được xác minh: filter / card / pin / directions.
4. Chặn tile / mạng chậm và kiểm list fallback.
5. Kiểm external links, sitemap, robots, SSL, console error, analytics/cookie status (nếu có).
6. Cập nhật deployment URL + SHA + thời điểm + QA signer vào release log.

## 6. Rollback & incident response

| Mức | Ví dụ | Hành động |
|---|---|---|
| Sev 0 | Công bố nhầm trạm, dữ liệu cá nhân/leaked key, site mất hoàn toàn | Disable site/rollback ngay; ẩn dữ liệu liên quan; contact PO + khách hàng; điều tra nguồn |
| Sev 1 | Map không dùng được và list fallback cũng hỏng; route chính lỗi | Rollback bản ổn định hoặc hotfix được QA smoke |
| Sev 2 | Misalignment visual nhỏ, một ảnh hỏng không ảnh hưởng flow | Ticket + hotfix theo kế hoạch, không ưu tiên trên Sev 0/1 |

**Rollback:** Vercel (nếu dùng) redeploy/restore prior known-good deployment theo quyền được ủy quyền; nếu hosting khác phải ghi thao tác tương đương. Sau rollback chạy lại smoke và xác minh cache/data không còn sai. Không yêu cầu AI hành động production nếu chưa cấp quyền/được phê duyệt.

## 7. Operational ownership sau release

- **PO/User:** tiếp nhận phản hồi khách hàng và ưu tiên bugs.
- **Content Owner:** rà soát 7 guides khi có thay đổi nguồn, ít nhất theo định kỳ đã thống nhất (đề xuất mỗi quý).
- **Data Steward (human in the loop):** kiểm tra lại trạm theo lịch (đề xuất 60 ngày; địa điểm sự kiện theo ngày kết thúc), pause khi không xác nhận được.
- **Tech Lead:** dependency updates, build health, logs, tile provider capacity/cost.
- **QA:** regression khi thay đổi dữ liệu/layout/hạ tầng.

## 8. Release notes template

```md
Release: V1.0.0
Date / timezone: ... (Asia/Bangkok / Vietnam UTC+7)
Commit SHA: ...
Production URL: ...
What's included: Home, Resin Library, Sorting, Verified Collection Map
Data: # published verified points ... ; latest verification date ...
Known issues / limitations: ...
Tests: link to report ...
Content approval: ...
Design approval: ...
Customer/UAT signoff: ...
Rollback URL/deployment: ...
Operations contact: ...
```

Không tự điền giả ngày, số điểm, test pass hay chữ ký.
