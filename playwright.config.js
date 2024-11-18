// @ts-check
const { devices } = require("@playwright/test");
const config = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [["list"], ["json", { outputFile: "test-results.json" }]],
  use: {
    browserName: "chromium",
    headless: false,
    video: "on",
  },
};
module.exports = config;
