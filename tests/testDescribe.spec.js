const { test, expect } = require("@playwright/test");

test.describe("To-Do App Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the To-Do app
    await page.goto("https://demo.playwright.dev/todomvc/");
  });

  test("Add a new to-do item", async ({ page }) => {
    // Add a new to-do item
    await page.fill(".new-todo", "Buy groceries");
    await page.press(".new-todo", "Enter");

    // Check if the to-do item is added
    const todoItem = page.locator(".todo-list li");
    await expect(todoItem).toHaveText("Buy groceries");
  });

  test("Mark a to-do item as completed", async ({ page }) => {
    // Add a new to-do item
    await page.fill(".new-todo", "Walk the dog");
    await page.press(".new-todo", "Enter");

    // Mark the item as completed
    await page.click(".toggle");

    // Check if the item has the "completed" class
    const todoItem = page.locator(".todo-list li");
    await expect(todoItem).toHaveClass(/completed/);
  });

  test("Clear completed to-do items", async ({ page }) => {
    // Add and complete a new to-do item
    await page.fill(".new-todo", "Read a book");
    await page.press(".new-todo", "Enter");
    await page.click(".toggle"); // Mark as completed

    // Clear completed items
    await page.click(".clear-completed");

    // Verify that no items remain in the list
    const todoItems = page.locator(".todo-list li");
    await expect(todoItems).toHaveCount(0);
  });
});
