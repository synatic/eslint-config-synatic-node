/**
 * Synatic shared ESLint configuration for Node projects that use Jest.
 *
 * Usage in a consumer project (eslint.config.js):
 *   const synaticJest = require('@synatic/eslint-config-synatic-node/lib/jest');
 *   module.exports = [...synaticJest];
 *
 * This is the base Synatic configuration plus the Jest plugin
 * (plugin:jest/recommended in the v2 eslintrc version).
 */
const globals = require('globals');
const pluginJest = require('eslint-plugin-jest');
const base = require('./index');

module.exports = [
    ...base,

    // plugin:jest/recommended
    pluginJest.configs['flat/recommended'],

    {
        files: ['test/**/*', 'tests/**/*', '**/*.test.js', '**/*.spec.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            'jest/no-commented-out-tests': 'warn',
            'jest/no-done-callback': 'off',
        },
    },
];
