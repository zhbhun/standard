module.exports = {
  extends: [
    'plugin:vue/essential',
    '@zhbhun/eslint-config-base',
    require.resolve('./rules/import.js'),
  ],
  parser: require.resolve('vue-eslint-parser'),
}
