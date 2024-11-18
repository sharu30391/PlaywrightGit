import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page
    .locator('iframe[name="callout"]')
    .contentFrame()
    .getByLabel("Stay signed out")
    .click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("playwright test");
  await page.pause();
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
});