const {
    test,
    expect
} = require('@playwright/test');

test('basic test', async ({
    page
}) => {
    await page.goto('/');
    await page.locator('#show-menu span').nth(1).click();
    await page.locator('#EDU_PORTAL_ACADEMICO_CENTRALALUNO_NOTAS').click();
    await page.locator('select[name="controller_periodoletivo"]').selectOption('1');
    await page.locator('text=Ver avaliações').first().click();
});