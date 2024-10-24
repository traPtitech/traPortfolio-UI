import globals from 'globals'
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
    parserOptions: {
      parser: '@typescript-eslint/parser'
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

    'vue/custom-event-name-casing': ['error', 'camelCase'],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-indent': ['off']
  }
}

export default [
  eslint.configs.recommended,
  ...tsESLint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  commonLint,
  vueLint
]
