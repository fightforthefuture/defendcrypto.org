module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'space-infix-ops': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off'
  }
}
