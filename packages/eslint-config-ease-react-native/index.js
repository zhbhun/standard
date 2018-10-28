module.exports = {
  extends: ['eslint-config-ease-react', './rules/react-native'].map(
    require.resolve
  ),
  env: {
    node: true,
    browser: true,
  },
  globals: {
    __DEV__: true,
  },
};
