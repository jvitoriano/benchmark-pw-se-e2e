const {
    test
} = require('@playwright/test');


test('Verificar cadastro acadêmico', async ({
    page
}) => {
    await page.goto('http://189.112.118.250/FrameHTML/web/app/edu/PortalEducacional/#/');

    await page.waitForSelector('#menu-header-items > .list-inline > .dropdown > #desktopHeaderMenu > .caret');
    await page.click('#menu-header-items > .list-inline > .dropdown > #desktopHeaderMenu > .caret');

    await page.waitForSelector('.list-inline > .dropdown > .dropdown-menu > .ng-scope:nth-child(1) > .ng-binding');
    await page.click('.list-inline > .dropdown > .dropdown-menu > .ng-scope:nth-child(1) > .ng-binding');

    await page.screenshot({
        path: `tests/playwright/screenshots/Cadastro academico - Sucesso.png`,
        fullPage: true
    });
});