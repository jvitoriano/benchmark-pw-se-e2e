const { test } = require("@playwright/test");
require("dotenv").config();

test("Retorno de erro quando login inválido", async ({ page }) => {
  await page.goto(
    "http://191.31.240.244/FrameHTML/web/app/edu/PortalEducacional/login/"
  );

  await page.fill("#User", process.env.LOGIN_FACTHUS);
  await page.fill("#Pass", "falharLogin");
  await page.click(
    ".container > .login-box > .form > .form__field:nth-child(4) > input"
  );

  await page.screenshot({
    path: `tests/playwright/screenshots/[Playwright] Erro de login.png`,
    fullPage: true
  });
});
