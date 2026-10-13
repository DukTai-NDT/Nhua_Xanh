import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link className="brand brand--footer" href="/">
          <span className="brand__name">Nhựa Xanh Hà Nội</span>
          <span className="brand__tag">SỔ TAY VẬT LIỆU ĐÔ THỊ</span>
        </Link>
        <p>Hiểu đúng vật liệu, kiểm tra hướng dẫn và tìm nơi tiếp nhận phù hợp.</p>
      </div>

      <nav className="footer-group" aria-label="Khám phá">
        <h2>KHÁM PHÁ</h2>
        <Link href="/loai-nhua" prefetch={false}>
          Các loại nhựa
        </Link>
        <Link href="/phan-loai" prefetch={false}>
          Cách phân loại
        </Link>
      </nav>

      <nav className="footer-group" aria-label="Tại Hà Nội">
        <h2>TẠI HÀ NỘI</h2>
        <Link href="/ban-do" prefetch={false}>
          Điểm thu gom
        </Link>
        <Link href="/ban-do#danh-sach" prefetch={false}>
          Danh sách điểm
        </Link>
      </nav>

      <p className="footer-note">
        Đây là bản demo truyền thông. Điểm thu gom chỉ được hiển thị khi thông tin được xác minh và
        duyệt công bố.
      </p>
      <div className="footer-bottom">
        <span>Nhựa Xanh Hà Nội · Tên làm việc</span>
        <span>Mã vật liệu không thay thế hướng dẫn của từng nơi tiếp nhận.</span>
      </div>
    </footer>
  );
}
