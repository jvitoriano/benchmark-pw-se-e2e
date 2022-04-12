const {
    chromium
} = require('@playwright/test');

module.exports = async config => {

    const browser = await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://191.31.240.244/');
    await page.waitForNavigation();

    await page.fill('#User', '11800884');
    await page.fill('#Pass', '919599jj');


    await page.click('.container > .login-box > .form > .form__field:nth-child(4) > input');
    await page.waitForNavigation();

    await page.context().storageState({
        path: 'storageState.json'
    });

    await browser.close();
};