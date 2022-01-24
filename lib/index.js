module.exports = {
    env: {
        node: true,
        commonjs: false,
        es6: true,
        mocha: true,
        jest: true,
    },
    settings: {
        jsdoc: {mode: 'typescript'},
    },
    extends: [
        'eslint:recommended',
        'google',
        'prettier',
        'plugin:jsdoc/recommended',
        'plugin:node/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:sonarjs/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:security/recommended',
    ],
    plugins: ['jsdoc', 'prettier', 'node', 'sonarjs', 'jest', 'promise', 'security'],
    globals: {},
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['test/*'],
            rules: {
                'no-unused-vars': 'off',
                'node/no-unpublished-require': 'off',
                'node/no-unpublished-import': 'off',
            },
            env: {
                'jest/globals': true,
            },
        },
    ],
    rules: {
        indent: ['off'],
        'max-len': ['off'],
        'require-jsdoc': ['off'],
        'valid-jsdoc': 'off',
        'promise/always-return': 'off',
    },
};