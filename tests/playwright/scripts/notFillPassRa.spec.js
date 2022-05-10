const { test, expect } = require("@playwright/test");

let locator

test("Verificar retorno caso senha ou RA não tenham sido preenchidos", async ({ page }) => {
  await page.goto("https://portal.facthus.edu.br");

  await page.locator('input:has-text("Acessar")').click();
  locator = await page.locator('.align > #toast-container > .toast');
  await expect(locator).toBeVisible();
  await page.fill('#User', '3453434');
  await page.locator('input:has-text("Acessar")').click();
  locator = await page.locator('.container > .login-box > .form > .form__field:nth-child(4) > input');
  await expect(locator).toBeVisible();

});