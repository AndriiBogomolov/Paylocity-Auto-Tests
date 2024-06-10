const { expect } = require("@playwright/test");

async function login(page) {
  console.log("Navigating to login page...");
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
  );

  console.log("Waiting for username field...");
  await page.waitForSelector("#Username", { timeout: 10000 });

  console.log("Filling in username...");
  await page.fill("#Username", "TestUser385");

  console.log("Filling in password...");
  await page.fill("#Password", "8{9O8Rpa^(cl");

  console.log("Clicking login button...");
  await page.click('button[type="submit"]');

  console.log("Waiting for Benefits Dashboard...");
  await page.waitForSelector("text=Benefits Dashboard", { timeout: 10000 });

  console.log("Login successful");
}

module.exports = { login };
