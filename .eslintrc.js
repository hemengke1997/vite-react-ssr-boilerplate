const { builtinModules } = require('node:module')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:node/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['warn', { singleQuote: true, jsxSingleQuote: true, semi: false }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports',
      },
    ],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-process-exit': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-deprecated-api': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'import/no-nodejs-modules': ['error', { allow: builtinModules.map((mod) => `node:${mod}`) }],
    'import/no-duplicates': 'error',
    'import/order': 'off',
    'sort-imports': 'off',
  },
})
