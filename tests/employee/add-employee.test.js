const { test, expect } = require("@playwright/test");
const { login } = require("../../helpers/login");

test("Add Employee", async ({ page }) => {
  await login(page);

  console.log("Navigating to Benefits page...");
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );

  console.log("Clicking add button...");
  await page.click("button#add");

  console.log("Filling in employee details...");
  await page.fill("#firstName", "Randy");
  await page.fill("#lastName", "White");
  await page.fill("#dependants", "2");

  console.log("Clicking add employee button...");
  await page.click("button#addEmployee");

  console.log("Waiting for employee to be added...");
  await page.waitForTimeout(3000);

  console.log("Checking if employee is added...");
  await page.waitForSelector("table#employeesTable td", { timeout: 5000 });
  const employeeRow = await page
    .locator('table#employeesTable td:has-text("Randy")')
    .isVisible();
  expect(employeeRow).toBeTruthy();
});
