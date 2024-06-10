const { test, expect } = require("@playwright/test");
const { login } = require("../../helpers/login");

test("Logout test", async ({ page }) => {
  await login(page);

  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );

  await page.click('a[href="/Prod/Account/LogOut"]');

  await page.waitForSelector("input#Username");

  const loginPageVisible = await page.isVisible("text=Log In");
  expect(loginPageVisible).toBeTruthy();
});
