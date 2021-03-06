const { test, expect } = require("@playwright/test");

test("Gerar relatório de atividades complementares", async ({ page }) => {
	await page.goto(
		"http://191.31.240.244/FrameHTML//web/app/edu/PortalEducacional/#/"
	);

	await page.locator("#show-menu span").nth(1).click();
	await page.locator('li:has-text("Relatórios")').click();
	await expect(page).toHaveURL(
		"http://191.31.240.244/FrameHTML//web/app/edu/PortalEducacional/#/relatorios"
	);

		await Promise.all([
		page.waitForEvent("popup"),
		page
			.locator(
				'text=RP.01.01 - Atividades Complementares Emitir relatório >> a[role="button"]'
			)
			.click()
	]);
});
