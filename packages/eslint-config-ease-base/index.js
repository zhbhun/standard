module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/prettier',
  ].map(require.resolve),
};
