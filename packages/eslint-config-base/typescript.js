module.exports = {
  extends: [
    './rules/standard',
    './rules/imports',
    './rules/typescript',
    './rules/style',
  ].map(require.resolve),
}
