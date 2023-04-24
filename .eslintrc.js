module.exports = {
    root: false,
    plugins: ['@typescript-eslint', 'react', 'react-native'],
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        'react-native/react-native': true,
    },
    rules: {
        // 0=off, 1=warn, 2=error
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' }, // Underscore before parameter name prevents warning
        ],
        'react-native/no-unused-styles': 'off',
        'react-native/split-platform-components': 'off',
        'react-native/no-inline-styles': 'off',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'off', // Temporarily off due to: https://github.com/Intellicode/eslint-plugin-react-native/issues/271
        'react-native/no-single-element-style-arrays': 'error',
    },
};
