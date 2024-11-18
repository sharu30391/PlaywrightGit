const { test, expect } = require("@playwright/test");

test("First Playwright Test", async ({ browser, page }) => {
  //const context = await browser.newContext();// to open an instance in browser without cookies
  //const page = await context.newPage();
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  // Fill search input
  await page.locator("#APjFqb").fill("learning");

  // Click on Google Search button
  await page.locator(".iblpc").click();
});
