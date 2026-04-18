import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    '.agents/**',
    '.claude/**',
  ]),
  {
    files: ['server/**/*.js', 'api/**/*.js', 'vite-plugin-contact-api.js'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: globals.node,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      'server/**',
      'api/**',
      'vite-plugin-contact-api.js',
    ],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // JSX like <motion.div> does not mark `motion` as used for no-unused-vars
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^([A-Z_].*|motion)$' },
      ],
    },
  },
])
