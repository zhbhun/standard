module.exports = {
  extends: [
    'eslint-config-ease-base',
    'eslint-config-ease-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve)
};
