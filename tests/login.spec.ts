import { chromium, test } from "@playwright/test";


test("Login Test", async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext(); 
  const page = await context.newPage();

  
  await page.goto("https://ecommerce-playground.lambdatest.io/", {
    timeout: 60000,
  });

  
  await browser.close();
});
