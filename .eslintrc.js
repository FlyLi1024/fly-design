module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [1, 'never'],
    // quotes: ['error', 'single'],
    // semi: [2, 'always'],
    // curly: [2, 'all'],
    // indent: ['off', 2],
    // eqeqeq: 2,
    // 'id-match': 0,
    // 'arrow-parens': 0,
    // 'no-tabs': 0,
    // 'comma-dangle': [2, 'never'],
    // 'no-mixed-spaces-and-tabs': [0],
    // 'no-multiple-empty-lines': 2,
    // 'space-before-function-paren': 0,
    // 'no-undef': 2,
  },
};