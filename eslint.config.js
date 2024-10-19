import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import eslint from '@eslint/js'
import tsESLint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'

const commonLint = {
  languageOptions: {
    globals: {
      ...globals.browser
    }
  }
}

const vueLint = {
  files: ['*.vue', '**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsESLint.parser
    }
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',

    'no-restricted-imports': [
      'error',
      {
        name: '/@/lib/apis/generated',
        message: 'Please use /@/lib/apis instead.'
      }
    ],

    'vue/custom-event-name-casing': ['error', 'camelCase']
  }
}

export default [
  eslint.configs.recommended,
  ...tsESLint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  commonLint,
  vueLint
]
