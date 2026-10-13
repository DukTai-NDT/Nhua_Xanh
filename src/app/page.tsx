import Link from "next/link";

export default function HomePage() {
  const resinCodes = [
    { code: "01", name: "PET / PETE", material: "Polyetylen terephtalat" },
    { code: "02", name: "HDPE", material: "Polyetylen mật độ cao" },
    { code: "03", name: "PVC", material: "Polyvinyl clorua" },
    { code: "04", name: "LDPE", material: "Polyetylen mật độ thấp" },
    { code: "05", name: "PP", material: "Polypropylen" },
    { code: "06", name: "PS", material: "Polystyren" },
    { code: "07", name: "Nhựa khác", material: "Nhóm khác hoặc hỗn hợp" },
  ];

  return (
    <main className="site-main" id="main-content" tabIndex={-1}>
      <section className="home-shell home-hero container" aria-labelledby="home-title">
        <div className="home-shell__copy">
          <p className="eyebrow">SỔ TAY VẬT LIỆU · HÀ NỘI</p>
          <h1 id="home-title">
            Hiểu về nhựa.
            <br />
            Sống xanh hơn.
          </h1>
          <p className="lede">
            Bắt đầu bằng cách nhận diện vật liệu, tìm hiểu cách phân loại và kiểm tra thông tin
            trước khi chuyển giao.
          </p>
          <div className="home-shell__actions">
            <Link className="primary-link" href="#thu-vien">
              Khám phá 7 mã nhựa <span aria-hidden="true">↗</span>
            </Link>
            <Link className="secondary-link" href="#cach-phan-loai">
              Xem cách phân loại
            </Link>
          </div>
          <p className="home-shell__note">
            Mã trên bao bì hỗ trợ nhận diện nhóm vật liệu; khả năng tiếp nhận tùy theo từng điểm.
          </p>
        </div>
        <div className="home-shell__art" aria-label="Minh họa biên tập dạng hình khối" role="img">
          <span className="art-label art-label--top">01 · VẬT LIỆU</span>
          <span className="bottle-art" aria-hidden="true">
            <span className="bottle-art__cap" />
            <span className="bottle-art__neck" />
            <span className="bottle-art__body">
              <span>01</span>
              <small>PET / PETE</small>
            </span>
          </span>
          <span className="art-label art-label--bottom">
            HÌNH MINH HỌA · KHÔNG PHẢI ẢNH SẢN PHẨM
          </span>
          <span className="art-rule" aria-hidden="true" />
        </div>
      </section>

      <section className="home-index container" id="thu-vien" aria-labelledby="home-index-title">
        <div className="section-heading">
          <div>
            <p className="serial">01 / MỤC LỤC</p>
            <h2 id="home-index-title">Bảy mã nhận diện</h2>
          </div>
          <p>Ký hiệu giúp nhận diện vật liệu; hãy đọc thông tin trên từng món đồ.</p>
        </div>
        <ol className="code-grid" aria-label="Bảy mã nhận diện nhựa">
          {resinCodes.map((resin) => (
            <li className="code-item" key={resin.code}>
              <span className="code-item__number">{resin.code}</span>
              <div>
                <h3>{resin.name}</h3>
                <p>{resin.material}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="editorial-note">
          Các mã này nói về vật liệu, không xác nhận rằng nơi thu gom tại Hà Nội sẽ tiếp nhận món
          đồ.
        </p>
      </section>

      <section
        className="guide-preview container"
        id="cach-phan-loai"
        aria-labelledby="guide-preview-title"
      >
        <div className="guide-preview__intro">
          <p className="serial">02 / CÁCH BẮT ĐẦU</p>
          <h2 id="guide-preview-title">Mỗi món đồ cần được xem đúng ngữ cảnh.</h2>
          <p>
            Mã nhựa và nhóm rác sinh hoạt là hai cách phân loại khác nhau. Hãy kiểm tra nhãn, hướng
            dẫn địa phương và yêu cầu của nơi tiếp nhận.
          </p>
        </div>
        <ol className="guide-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Tìm ký hiệu</h3>
              <p>Đọc nhãn hoặc ký hiệu trên bao bì; đừng đoán chỉ từ hình dáng.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Kiểm tra hướng dẫn</h3>
              <p>Quy định địa phương và yêu cầu của từng nơi nhận có thể khác nhau.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Hỏi trước khi mang đi</h3>
              <p>Không coi mã vật liệu là xác nhận nơi tiếp nhận.</p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="collection-status container"
        id="diem-thu-gom"
        aria-labelledby="collection-title"
      >
        <div className="collection-status__copy">
          <p className="serial">03 / THÔNG TIN ĐIỂM THU GOM</p>
          <h2 id="collection-title">Chưa có điểm nào được xác minh để công bố.</h2>
          <p>
            Chúng tôi chỉ hiển thị địa chỉ và vật liệu nhận sau khi thông tin được kiểm chứng và
            duyệt. Hãy kiểm tra lại khi dữ liệu chính thức được bổ sung.
          </p>
          <a className="secondary-link" href="#nguyen-tac-du-lieu">
            Tìm hiểu nguyên tắc hiển thị
          </a>
        </div>
        <aside
          className="collection-status__note"
          id="nguyen-tac-du-lieu"
          aria-label="Trạng thái xác minh dữ liệu"
        >
          <span className="status-mark" aria-hidden="true">
            —
          </span>
          <strong>Chưa có dữ liệu đã xác minh</strong>
          <span>Không hiển thị pin, địa chỉ hay giờ tiếp nhận chưa được xác nhận.</span>
        </aside>
      </section>
    </main>
  );
}
