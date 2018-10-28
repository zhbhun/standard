module.exports = {
  extends: [
    'eslint-config-ease-base',
    'eslint-config-airbnb/rules/react',
    // https://github.com/prettier/eslint-config-prettier/blob/master/react.js
    'eslint-config-prettier/react',
    './rules/react',
  ].map(require.resolve),
};
