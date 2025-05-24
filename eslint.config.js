const js = require('@eslint/js')
const globals = require('globals')
const standard = require('eslint-config-standard')
const pluginImport = require('eslint-plugin-import')
const pluginN = require('eslint-plugin-n')
const pluginPromise = require('eslint-plugin-promise')

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    plugins: {
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise
    },
    rules: {
      ...standard.rules,
      // Aquí puedes agregar o sobrescribir reglas
      // 'no-console': 'warn',
      'eol-last': 'off'
    }
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.git/**',
      '**/.vscode/**',
      '**/*.min.js',
      '**/public/**'
    ]
  }
]