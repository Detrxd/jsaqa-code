const { test, expect, chromium } = require("@playwright/test");

// const userParams = require("../user.js");
import { userParams } from "../user.js";

test("Неуспешная проверка формы авторизации", async ({ page }) => {
  const browser = await chromium.launch();
  const title = page.locator("[data-testid=login-error-hint]");
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click("[placeholder=Email]");
  await page.locator("[placeholder=Email]").type("qwerty@test.ru");
  await page.click("[placeholder=Пароль]");
  await page.locator("[placeholder=Пароль]").type("123456");
  await page.locator("[data-testid=login-submit-btn]").click();
  await expect(title).toBeVisible();
  await expect(title).toHaveText("Вы ввели неправильно логин или пароль");
  await browser.close();
});
