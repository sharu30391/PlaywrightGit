import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('w3schools');
  await page.getByLabel('Search', { exact: true }).press('Enter');
  console.log(await page.title());
});