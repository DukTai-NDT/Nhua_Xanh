import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("home foundation", () => {
  test("renders Vietnamese metadata, a single H1 and no horizontal overflow on desktop", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    await expect(page).toHaveTitle(/Nhựa Xanh Hà Nội/);
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("keeps keyboard skip navigation and accessible mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Bỏ qua điều hướng, đến nội dung chính" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();

    await page.getByRole("button", { name: "Mở điều hướng chính" }).click();
    await expect(page.getByRole("navigation", { name: "Điều hướng điện thoại" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Đóng điều hướng chính" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Điều hướng điện thoại" })).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("respects reduced motion preferences", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const durations = await page.locator("body").evaluate((body) => {
      const style = getComputedStyle(body);
      return [...style.transitionDuration.split(","), ...style.animationDuration.split(",")];
    });
    expect(durations.every((duration) => Number.parseFloat(duration) <= 0.00001)).toBe(true);
  });
});

test("renders the custom not-found page with accessible home route", async ({ page }) => {
  const response = await page.goto("/not-found-qa-smoke");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Trở về trang chủ" })).toHaveAttribute("href", "/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
