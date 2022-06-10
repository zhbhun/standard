module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@zhbhun/eslint-config-base/typescript',
    require.resolve('./rules/import.js'),
    require.resolve('./rules/typescript.js'),
  ],
  parser: require.resolve('vue-eslint-parser'),
}
