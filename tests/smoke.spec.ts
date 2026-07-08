import { test, expect } from "@playwright/test";

test("OpsBridge dashboard renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "OpsBridge" })).toBeVisible();
  await expect(page.getByRole("img", { name: "D3 trend chart" })).toBeVisible();
});
