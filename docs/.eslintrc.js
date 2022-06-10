const path = require('path')

module.exports = {
  root: true,
  extends: ['@zhbhun/eslint-config-vue/typescript'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve(__dirname, './src')]],
      },
    },
  },
}
