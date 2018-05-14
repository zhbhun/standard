module.exports = {
  extends: [
    'eslint-config-ease-react',
    './rules/imports.js',
    './rules/react-native',
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
  },
  globals: {
    __DEV__: true,
  }
};
