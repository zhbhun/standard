module.exports = {
  extends: ['eslint-config-ease-base', './rules/angular'].map(
    require.resolve
  ),
};
