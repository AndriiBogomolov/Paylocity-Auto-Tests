const { test, expect } = require("@playwright/test");

test("Login test", async ({ page }) => {
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
  );

  await page.fill('input[name="Username"]', "TestUser385");

  await page.fill('input[name="Password"]', "8{9O8Rpa^(cl");

  await page.click('button[type="submit"]');

  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );

  const dashboard = await page.locator("text=Benefits Dashboard").isVisible();
  expect(dashboard).toBeTruthy();
});
