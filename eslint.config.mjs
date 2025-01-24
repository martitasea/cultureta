import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';

import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ['**/node_modules/']
}, ...compat.extends(
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/eslint-recommended'
), {
  plugins: {
    react,
    '@typescript-eslint': typescriptEslint
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha
    },
    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'brace-style': ['error', '1tbs'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-double']
  }
}, {
  files: ['**/*.json'],
  plugins: { 'i18n-json': i18nJsonPlugin },
  processor: {
    meta: { name: '.json' },
    ...i18nJsonPlugin.processors['.json'],
  },
  rules: {
    ...i18nJsonPlugin.configs.recommended.rules,
    'i18n-json/valid-json': 2,
    'i18n-json/sorted-keys': 2,
    'i18n-json/identical-keys': [2, {
      'filePath': '../../../../src/i18n/es.json'
    }],
  },
}];
