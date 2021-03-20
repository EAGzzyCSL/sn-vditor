module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:eslint-plugin-import/errors',
    'plugin:eslint-plugin-import/warnings',
    'prettier',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'object',
          'unknown',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-plugin-import/typescript',
      ],
      rules: {
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      },
    },
  ],
}
