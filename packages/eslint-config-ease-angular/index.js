module.exports = {
  extends: [
    'eslint-config-ease-base',
    'eslint-config-ease-base/rules/strict',
    './rules/angular'
  ].map(require.resolve)
};
