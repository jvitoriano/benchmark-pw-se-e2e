const {
    devices
} = require('@playwright/test');

const config = {
    baseURL: 'https://portal.facthus.edu.br',
    globalSetup: require.resolve('./global-setup'),

    use: {
        storageState: 'storageState.json'
    },

    projects: [{
            name: 'Chrome',
            use: {
                ...devices['Desktop Chrome']
            },
        },
        {
            name: 'Firefox',
            use: {
                ...devices['Desktop Firefox']
            },
        },
        {
            name: 'Webkit',
            use: {
                ...devices['Desktop Safari']
            },
        },
    ],
};

module.exports = config;