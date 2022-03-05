const {
    test
} = require('@playwright/test');

test('Verificar cadastro acadêmico', async ({
    page
}) => {
    await page.goto('http://189.112.118.250/FrameHTML/web/app/edu/PortalEducacional/#/');
    await page.locator('#show-menu span').nth(1).click();
    await page.locator('#EDU_PORTAL_ACADEMICO_CENTRALALUNO_NOTAS').click({
        delay: 150
    });
    await page.locator('select[name="controller_periodoletivo"]').selectOption('1');
    await page.locator('text=Ver avaliações').first().click();
});