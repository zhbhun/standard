module.exports = {
  plugins: ['react-native'],

  // View link below for react rules documentation
  // https://github.com/intellicode/eslint-plugin-react-native#list-of-supported-rules
  rules: {
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 'warn',

    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'off',

    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'warn',

    'react-native/no-color-literals': 'off',
  },
};
