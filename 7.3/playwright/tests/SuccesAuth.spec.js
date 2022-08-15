import { userParams } from "../../user";

let userParam = userParams;

const { test, expect } = require("@playwright/test");

test("Проверка формы авторизации", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator("[placeholder=Email]").click();
  await page.fill('[placeholder="Email"]', userParam.email);
  // await page.locator("[placeholder=Password]").type();
});
