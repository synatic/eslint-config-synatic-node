/**
 * This repository lints itself with its own shared configuration,
 * exactly as a consumer project would.
 */
const synatic = require('./lib/index');

module.exports = [
    {
        ignores: ['**/node_modules/**', 'build/**', 'coverage/**'],
    },
    ...synatic,
];
