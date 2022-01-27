module.exports = {
    env: {
        jest: true,
    },
    extends: ['@synatic/eslint-config-synatic-node', 'plugin:jest/recommended'],
    plugins: ['jest'],
    overrides: [
        {
            files: ['test/*'],
            env: {
                'jest/globals': true,
            },
        },
    ],
    rules: {
        'jest/no-commented-out-tests': 'warn',
    },
};
