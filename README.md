# Paylocity Automation Tests

## Description

This project contains automated tests for verifying the functionality of the Paylocity web application using Playwright on JavaScript.

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AndriiBogomolov/Paylocity-Auto-Tests
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers (preferably Chromium):

   ```bash
   npx playwright install
   ```

## Running Tests

To run all tests, use the following command:

```bash
npx playwright test
```

## Note

It's recommended to use Chromium for running tests. Tests can also be run individually. Ensure that the selectors or locators are prepared for specific data, such as deleting or editing an employee.

## Running in VSCode

To run the project in VSCode:

- Open the project folder in VSCode.
- Open a new terminal.
- Use the command npx playwright test to run the tests or run individually each test.

## Project Structure

- tests/ - directory containing the tests
- helpers/ - directory with helper modules and functions
- playwright.config.js - Playwright configuration file

## Configuration

To change test settings such as base URL, timeouts, and parallelism, edit the playwright.config.js file.
