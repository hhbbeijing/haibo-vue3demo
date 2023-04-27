/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
    overrides: [
        {
            files: ['src/views/*.vue','src/views/**/*.vue'],
            rules: {
                'vue/multi-word-component-names':"off"
            }
        }
    ]
}
