const {
    devices
} = require('@playwright/test');

const config = {
    workers: 1,
    outputDir: 'tests/playwright/screenshots',
    globalSetup: require.resolve('./global-setup.js'),

    use: {
        storageState: 'tests/playwright/storageStates/storageState.json',
    },

    projects: [{
        name: 'Chrome',
        use: {
            ...devices['Desktop Chrome']
        },
    }, ],
};

module.exports = config;