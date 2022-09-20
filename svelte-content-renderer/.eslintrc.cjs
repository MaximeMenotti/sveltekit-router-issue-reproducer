module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: ['svelte3', 'import', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    },
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
  rules: {
    'import/no-unresolved': 0,
    'import/namespace': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'internal',
          'object',
          'type'
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};