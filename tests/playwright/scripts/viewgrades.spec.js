const { test, expect } = require("@playwright/test");

test.only("Validar funcionamento do botão de visualizar notas", async ({ page }) => {
	await page.goto(
		"http://191.31.240.244/FrameHTML//web/app/edu/PortalEducacional/#/"
	);

	await page.locator("#show-menu").click();
  await page.locator('#EDU_PORTAL_ACADEMICO_CENTRALALUNO_NOTAS').click();
  await page.locator('text=Ver avaliações').first().click();
  const locator = await page.locator('div[role="complementary"]:has-text("ver disciplina")');
  await expect(locator).toBeVisible();
});

