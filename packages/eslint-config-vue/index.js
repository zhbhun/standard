module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@zhbhun/eslint-config-base',
    require.resolve('./rules/import.js'),
  ],
  parser: require.resolve('vue-eslint-parser'),
}
