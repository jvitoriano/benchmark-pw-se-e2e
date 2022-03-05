const {
    chromium
} = require('@playwright/test');
const {
    baseURL
} = require('./playwright.config');

module.exports = async config => {
    const browser = await chromium.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://portal.facthus.edu.br');

    await page.fill('#User', '11800884');
    await page.fill('#Pass', '919599');

    await Promise.all([
        page.waitForNavigation(),
        await page.click('input:has-text("Acessar"))'),
    ]);

    await page.context().storageState({
        path: 'storageState.json'
    });

    await browser.close();
};