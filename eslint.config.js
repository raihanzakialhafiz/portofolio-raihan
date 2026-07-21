import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
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
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // Tandai identifier yang hanya dipakai di JSX (mis. `motion` pada <motion.span>)
      // sebagai "terpakai" agar tidak jadi false-positive no-unused-vars.
      // Sekaligus mendaftarkan rule react/* (mis. react/no-unknown-property) agar
      // komentar eslint-disable di Lanyard.jsx tidak error "rule not found".
      'react/jsx-uses-vars': 'error',
    },
  },
])
