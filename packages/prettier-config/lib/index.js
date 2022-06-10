const base = require('./base')
const javascript = require('./javascript')
const markdown = require('./markdown')
const vue = require('./vue')

module.exports = {
  ...base,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.ts', '*.tsx'],
      options: javascript,
    },
    {
      files: ['*.vue'],
      options: vue,
    },
    {
      files: '*.md',
      options: markdown,
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
}
