const { test, expect } = require("@playwright/test");
const { login } = require("../../helpers/login");

test("Edit Employee", async ({ page }) => {
  await login(page);

  console.log("Navigating to Benefits page...");
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );

  console.log("Waiting for Benefits page to load...");
  await page.waitForSelector("text=Benefits Dashboard");

  console.log("Waiting for employee data to load...");
  await page.waitForSelector("table#employeesTable tbody tr", {
    timeout: 10000,
  });

  console.log("Checking table content...");
  const tableContent = await page.innerHTML("table#employeesTable");
  console.log("Table content:", tableContent);

  console.log("Waiting for employee to be present in the table...");
  const employeeRow = await page
    .locator('table#employeesTable tr:has-text("Viki")')
    .first();

  if (await employeeRow.isVisible({ timeout: 1000 })) {
    console.log("Employee 'Viki' found in the table. Clicking edit button...");

    await employeeRow.locator("i.fa-edit").first().click();

    console.log("Filling in updated employee details...");
    await page.fill("#firstName", "Rico");
    await page.fill("#lastName", "Man");
    await page.fill("#dependants", "3");

    console.log("Clicking update employee button...");
    await page.click("button#updateEmployee");

    console.log("Waiting for employee to be updated...");
    await page.waitForTimeout(3000);

    console.log("Checking if employee is updated...");
    await page.waitForSelector("table#employeesTable td", { timeout: 5000 });
    const updatedEmployeeRow = await page
      .locator('table#employeesTable td:has-text("Rico")')
      .isVisible();
    expect(updatedEmployeeRow).toBeTruthy();
  }
});
