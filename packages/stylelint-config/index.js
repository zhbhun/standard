module.exports = {
  extends: [
    'stylelint-config-standard',
    require.resolve('./rules/prettier'),
    require.resolve('./rules/selector'),
    require.resolve('./rules/style'),
    require.resolve('./rules/unit'),
    require.resolve('./rules/value'),
    require.resolve('./rules/order'),
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
