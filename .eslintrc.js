// .eslintrc.js
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@stylistic"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@stylistic/semi": "error",
    "@stylistic/jsx-indent": "error",
    "@stylistic/max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/quote-props": ["error", "as-needed"],
    "curly": "error",
    
    // "@stylistic/array-bracket-newline": ["error", { "multiline": true }],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    // "@stylistic/array-element-newline": ["error", { "multiline": true }],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/comma-spacing": ["error", { before: false, after: true }],
    "@stylistic/computed-property-spacing": ["error", "never"],
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
    "@stylistic/semi-spacing": "error",
    "@stylistic/indent": ["error", 2],
    "@stylistic/key-spacing": ["error", { "mode": "strict" }],
    "@stylistic/keyword-spacing": ["error", { "before": true, "after": true }],
    "@stylistic/new-parens": "error",
    "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],


    "@typescript-eslint/no-explicit-any": "off",
  },
};
