/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
module.exports = {
  root: true,
  env: {
    node: 1,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
