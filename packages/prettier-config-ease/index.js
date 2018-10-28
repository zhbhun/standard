const javascript = require('./javascript');
const markdown = require('./markdown');

module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      options: javascript
    }, {
      files: '*.md',
      options: markdown
    }
  ]
};
