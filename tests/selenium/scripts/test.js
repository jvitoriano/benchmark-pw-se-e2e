const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder('/tests/selenium/drivers/chrome/chromedriver.exe');

async function example() {

  const driver = new Builder().forBrowser("chrome").setChromeService(service).build();

  await driver.get("http://google.com");

  await driver.quit();
}

example();