/**
 * Synatic shared ESLint configuration for Node projects (ESLint 9 flat config).
 *
 * Usage in a consumer project (eslint.config.js):
 *   const synatic = require('@synatic/eslint-config-synatic-node');
 *   module.exports = [...synatic];
 *
 * This is the flat-config successor of the v2 eslintrc configuration. The rule
 * intent of the old .eslintrc.json is preserved; see README for what changed
 * (eslint-config-google and eslint-plugin-node were dropped/replaced).
 */
const js = require('@eslint/js');
const globals = require('globals');
const pluginN = require('eslint-plugin-n');
const pluginImportX = require('eslint-plugin-import-x');
const pluginJsdoc = require('eslint-plugin-jsdoc');
const pluginSonarjs = require('eslint-plugin-sonarjs');
const pluginPromise = require('eslint-plugin-promise');
const pluginSecurity = require('eslint-plugin-security');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
    // eslint:recommended
    js.configs.recommended,

    // plugin:jsdoc/recommended
    pluginJsdoc.configs['flat/recommended'],

    // plugin:node/recommended (eslint-plugin-node is unmaintained; eslint-plugin-n is its successor)
    pluginN.configs['flat/recommended'],

    // plugin:import/errors + plugin:import/warnings (eslint-plugin-import-x is the maintained fork)
    pluginImportX.flatConfigs.errors,
    pluginImportX.flatConfigs.warnings,

    // plugin:sonarjs/recommended
    pluginSonarjs.configs.recommended,

    // plugin:promise/recommended
    pluginPromise.configs['flat/recommended'],

    // plugin:security/recommended
    pluginSecurity.configs.recommended,

    // "prettier" + plugin:prettier/recommended (keeps prettier/prettier as an error;
    // also applies eslint-config-prettier to switch off conflicting rules)
    eslintPluginPrettierRecommended,

    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2022,
                ...globals.mocha,
            },
        },
        settings: {
            jsdoc: {mode: 'typescript'},
        },
        rules: {
            // The rules below preserve the custom rules from the v2 .eslintrc.json.
            // eslint-config-google has no flat-config successor and was dropped;
            // the google rules this project relied on were already switched off
            // here (indent, max-len, require-jsdoc, valid-jsdoc) or overridden
            // by eslint-config-prettier, so dropping it loses no active rules.
            indent: 'off',
            'max-len': 'off',
            'require-jsdoc': 'off',
            'valid-jsdoc': 'off',
            'promise/always-return': 'off',
            'sonarjs/no-duplicate-string': 'warn',
            'sonarjs/cognitive-complexity': 'warn',
            'prettier/prettier': 'error',
            'security/detect-object-injection': 'off',
            'no-invalid-this': 'warn',
            'promise/no-callback-in-promise': 'off',
        },
    },

    // Test relaxations, carried over from the v2 overrides block
    // (node/* rule names renamed to their eslint-plugin-n equivalents).
    {
        files: ['test/**/*', 'tests/**/*', '**/*.test.js', '**/*.spec.js'],
        rules: {
            'no-unused-vars': 'warn',
            'n/no-unpublished-require': 'off',
            'n/no-unpublished-import': 'off',
            'jsdoc/require-jsdoc': 'off',
            'sonarjs/no-identical-functions': 'off',
            'sonarjs/cognitive-complexity': 'off',
            'security/detect-object-injection': 'off',
            'security/detect-non-literal-fs-filename': 'off',
            'no-invalid-this': 'off',
            'jsdoc/require-returns': 'off',
        },
    },
];
