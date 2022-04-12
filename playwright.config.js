const {
    devices
} = require('@playwright/test');

const config = {
    outputDir: './screenshots',
    globalSetup: require.resolve('./global-setup'),

    use: {
        storageState: 'storageState.json',
        launchOptions: {
            slowMo: 2000,
        },
    },

    projects: [{
        name: 'Chrome',
        use: {
            ...devices['Desktop Chrome']
        },
    }, ],
};

module.exports = config;