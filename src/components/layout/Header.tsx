"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/loai-nhua", label: "Các loại nhựa" },
  { href: "/phan-loai", label: "Cách phân loại" },
  { href: "/ban-do", label: "Điểm thu gom" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function navLinkClass(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`)
      ? "site-nav__link is-current"
      : "site-nav__link";
  }

  return (
    <>
      <aside className="notice-strip" aria-label="Ghi chú về khả năng tiếp nhận">
        Mã nhựa cho biết loại vật liệu, không bảo đảm mọi nơi đều tiếp nhận tái chế.
      </aside>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Nhựa Xanh Hà Nội — về trang chủ">
          <span className="brand__name">Nhựa Xanh Hà Nội</span>
          <span className="brand__tag">SỔ TAY VẬT LIỆU ĐÔ THỊ</span>
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <Link
              className={navLinkClass(item.href)}
              href={item.href}
              prefetch={false}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/ban-do" prefetch={false}>
          Tìm điểm thu gom <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Đóng điều hướng chính" : "Mở điều hướng chính"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <nav
          className="site-nav site-nav--mobile"
          id="mobile-navigation"
          aria-label="Điều hướng điện thoại"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link
              className={navLinkClass(item.href)}
              href={item.href}
              prefetch={false}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            className="primary-link"
            href="/ban-do"
            prefetch={false}
            onClick={() => setMenuOpen(false)}
          >
            Tìm điểm thu gom
          </Link>
        </nav>
      </header>
    </>
  );
}
