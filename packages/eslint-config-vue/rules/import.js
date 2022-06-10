module.exports = {
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.vue',
        ],
      },
      alias: {
        extensions: [
          '.mjs',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.vue',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx',
      '.d.ts',
      '.vue',
    ],
  },

  rules: {
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'ignorePackages',
        mjs: 'ignorePackages',
        jsx: 'ignorePackages',
        ts: 'ignorePackages',
        tsx: 'ignorePackages',
        '.d.ts': 'ignorePackages',
        vue: 'ignorePackages',
      },
    ],
  },
}
