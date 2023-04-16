module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        '@html-eslint/require-closing-tags': [
            'error',
            { selfClosing: 'always' },
        ],
        '@html-eslint/no-extra-spacing-attrs': [
            'error',
            { enforceBeforeSelfClose: true },
        ],
    },
    plugins: ['@html-eslint'],
    overrides: [
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
        },
    ],
};
