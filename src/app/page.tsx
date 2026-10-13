import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site-main" id="main-content" tabIndex={-1}>
      <section className="home-shell container" aria-labelledby="home-title">
        <div className="home-shell__copy">
          <p className="eyebrow">NHỰA XANH HÀ NỘI · BẢN DEMO</p>
          <h1 id="home-title">
            Hiểu về nhựa.
            <br />
            Sống xanh hơn.
          </h1>
          <p className="lede">
            Một sổ tay đang được xây dựng để giúp bạn nhận diện vật liệu, tìm hiểu cách phân loại và
            kiểm tra thông tin nơi tiếp nhận.
          </p>
          <div className="home-shell__actions">
            <Link className="primary-link" href="/loai-nhua" prefetch={false}>
              Khám phá các loại nhựa <span aria-hidden="true">↗</span>
            </Link>
            <Link className="secondary-link" href="/phan-loai" prefetch={false}>
              Tìm hiểu cách phân loại
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

      <section className="foundation-note container" aria-labelledby="foundation-note-title">
        <div>
          <p className="eyebrow">ĐANG HOÀN THIỆN</p>
          <h2 id="foundation-note-title">Nội dung hướng dẫn sẽ được bổ sung theo từng phần.</h2>
        </div>
        <p>Danh sách điểm thu gom chưa có điểm nào được xác minh để công bố trong bản demo này.</p>
      </section>
    </main>
  );
}
