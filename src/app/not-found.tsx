import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found container" id="main-content" tabIndex={-1}>
      <p className="eyebrow">404 · KHÔNG TÌM THẤY TRANG</p>
      <h1>Trang này chưa có trong sổ tay.</h1>
      <p>Địa chỉ có thể đã thay đổi hoặc nội dung vẫn đang được chuẩn bị.</p>
      <Link className="primary-link" href="/">
        Trở về trang chủ
      </Link>
    </main>
  );
}
