const {
    devices
} = require('@playwright/test');

const config = {
    outputDir: './screenshots',
    globalSetup: require.resolve('./global-setup'),

    use: {
        storageState: 'tests/playwright/storageStates/storageState.json',
        // launchOptions: {
        //     slowMo: 5000,
        // },
    },

    projects: [{
        name: 'Chrome',
        use: {
            ...devices['Desktop Chrome']
        },
    }, ],
};

module.exports = config;