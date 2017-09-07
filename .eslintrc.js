module.exports = {
  root: true,
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  extends: 'airbnb-base',
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
  rules: {
    'global-require': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'always', {
      js: 'never'
    }],
    'no-param-reassign': ['error', {
      props: false
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
  },

}
// http://eslint.org/docs/user-guide/configuring
