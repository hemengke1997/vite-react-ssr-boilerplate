const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@minko-fe'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/self-closing-comp': 'error',
  },
})
