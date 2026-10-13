import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nhựa Xanh Hà Nội — Hiểu về nhựa. Sống xanh hơn.",
    template: "%s | Nhựa Xanh Hà Nội",
  },
  description: "Tìm hiểu các loại nhựa, cách phân loại và thông tin điểm thu gom tại Hà Nội.",
  applicationName: "Nhựa Xanh Hà Nội",
  category: "environment",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
