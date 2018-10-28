module.exports = {
  rules: {
    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': 'off',
  },
};
