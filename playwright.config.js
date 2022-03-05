const {
    devices
} = require('@playwright/test');

const config = {
    baseURL: 'http://189.112.118.250/FrameHTML/web/app/edu/PortalEducacional/#/',
    globalSetup: require.resolve('./global-setup'),
    use: {
        storageState: 'storageState.json',
        launchOptions: {
            slowMo: 1000,
        },
    },

    projects: [{
            name: 'Chrome',
            use: {
                ...devices['Desktop Chrome']
            },
        },
        // {
        //     name: 'Firefox',
        //     use: {
        //         ...devices['Desktop Firefox']
        //     },
        // },

        // {
        //     name: 'Webkit',
        //     use: {
        //         ...devices['Desktop Safari']
        //     },
        // },
    ],
};

module.exports = config;