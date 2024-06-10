const { test, expect } = require("@playwright/test");
const { login } = require("../../helpers/login");

test("Delete Employee", async ({ page }) => {
  await login(page);

  console.log("Navigating to Benefits page...");
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );

  console.log("Waiting for Benefits page to load...");
  await page.waitForSelector("text=Benefits Dashboard");

  console.log("Finding employee row...");
  const employeeRow = await page
    .locator('table#employeesTable tr:has-text("Randy")')
    .first();

  console.log("Clicking delete icon...");
  await employeeRow.locator("i.fa-times").click();

  console.log("Clicking delete button...");
  await page.locator('button:has-text("Delete")').click();

  console.log("Waiting for employee to be deleted...");
  await page.waitForTimeout(5000);

  console.log("Checking if employee is deleted...");
  const deletedEmployeeRow = await page
    .locator('table#employeesTable tr:has-text("Randy")')
    .first();
  const deletedEmployee = await deletedEmployeeRow.isVisible();

  expect(deletedEmployee).toBeFalsy();
});
