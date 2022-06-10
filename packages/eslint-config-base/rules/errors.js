const development =
  process.env.NODE_ENV !== 'production' && !process.env.GIT_AUTHOR_DATE

module.exports = {
  rules: {
    // disallow use of console
    'no-console': development ? 'off' : 'error',
    // disallow use of debugger
    'no-debugger': development ? 'off' : 'error',
  },
}
