module.exports = {
  plugins: ['prettier', 'react'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // jsx 활성화
    },
    ecmaVersion: 2021,
    sourceType: 'module', // import 사용
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-unused-vars": 1,
    "no-param-reassign": [2, { 
      "props": false
  }]
  }
};
