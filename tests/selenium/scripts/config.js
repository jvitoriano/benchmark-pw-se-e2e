const { Builder } = require("selenium-webdriver");

const PATH_TO_DRIVER = "../drivers/chrome/chromedriver.exe";

const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder(PATH_TO_DRIVER);
const driver = new Builder().forBrowser("chrome").setChromeService(service).build();

async function example() {

  await driver.get("http://google.com");

  await driver.quit();
}

example();