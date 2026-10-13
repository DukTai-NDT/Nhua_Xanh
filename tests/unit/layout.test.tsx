import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Footer } from "../../src/components/layout/Footer";
import { Header } from "../../src/components/layout/Header";
import { SkipLink } from "../../src/components/layout/SkipLink";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

function mobileNavigation() {
  const navigation = document.getElementById("mobile-navigation");
  if (!navigation) throw new Error("Không tìm thấy điều hướng điện thoại");
  return navigation;
}

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("exposes a collapsed mobile menu and opens it on request", () => {
    const toggle = screen.getByRole("button", { name: "Mở điều hướng chính" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation()).not.toBeVisible();

    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: "Đóng điều hướng chính" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("navigation", { name: "Điều hướng điện thoại" })).toBeVisible();
  });

  it("closes the mobile menu on Escape and after choosing a link", () => {
    fireEvent.click(screen.getByRole("button", { name: "Mở điều hướng chính" }));
    fireEvent.keyDown(window, { key: "Escape" });
    expect(mobileNavigation()).not.toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Mở điều hướng chính" }));
    const link = document.querySelector<HTMLAnchorElement>(
      '#mobile-navigation a[href="/loai-nhua"]',
    );
    expect(link).not.toBeNull();
    if (!link) throw new Error("Không tìm thấy liên kết trong menu điện thoại");
    link.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(link);
    expect(mobileNavigation()).not.toBeVisible();
  });
});

describe("shared shell", () => {
  it("provides a skip link to the main landmark", () => {
    render(<SkipLink />);
    expect(
      screen.getByRole("link", { name: "Bỏ qua điều hướng, đến nội dung chính" }),
    ).toHaveAttribute("href", "#main-content");
  });

  it("labels the footer and provides the brand notice", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText(/bản demo truyền thông/)).toBeInTheDocument();
  });
});
