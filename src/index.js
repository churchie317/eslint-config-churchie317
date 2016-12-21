module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './best-practices.js',
    './stylistic.js',
    './import/index.js',
    './es6/index.js',
  ],
  rules: {},
}
