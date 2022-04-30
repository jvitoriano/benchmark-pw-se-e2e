const {
    chromium
} = require('@playwright/test');
require('dotenv').config()

module.exports = async config => {

    const browser = await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://191.31.240.244/');
    await page.waitForNavigation();

    await page.fill('#User', process.env.LOGIN_FACTHUS);
    await page.fill('#Pass', process.env.PASSWORD_FACTHUS);


    await page.click('.container > .login-box > .form > .form__field:nth-child(4) > input');
    await page.waitForNavigation();

    await page.context().storageState({
        path: 'tests/playwright/storageStates/storageState.json'
    });

    await browser.close();
};