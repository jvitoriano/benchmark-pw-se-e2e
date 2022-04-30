const { test } = require("@playwright/test");

test("Verificar cadastro acadêmico", async ({ page }) => {
	await page.goto("http://191.31.240.244/FrameHTML//web/app/edu/PortalEducacional/#/");

	await page.locator("#menu-header-items > .list-inline > .dropdown > #desktopHeaderMenu > .caret").click();

	await page.locator(".list-inline > .dropdown > .dropdown-menu > .ng-scope:nth-child(1) > .ng-binding").click();

	await page.waitForSelector(
		".totvs-style-guide > .dadosPessoais > .page-details > .row > .media"
	);

	await page.screenshot({
		path: `tests/playwright/screenshots/[Playwright] Cadastro academico - Sucesso.png`,
		fullPage: true,
		timeout: 5000
	});
});