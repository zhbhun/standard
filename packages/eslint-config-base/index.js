module.exports = {
  extends: [
    './rules/standard',
    './rules/errors',
    './rules/imports',
    './rules/style',
  ].map(require.resolve),
}
