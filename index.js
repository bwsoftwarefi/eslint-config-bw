module.exports = {
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  plugins: ["react", "import", "ascii"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": [
      "error",
      {
        forbid: []
      }
    ],
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/order": "off",
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "comma-dangle": [0],
    "no-console": "off",
    "import/first": "off",
    "arrow-parens": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "no-else-return": ["error", { allowElseIf: true }],
    "operator-linebreak": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "operator-linebreak": "off",
    indent: "off",
    "indent-legacy": "off"
  },
  globals: {
    describe: false,
    it: false,
    test: false,
    expect: false,
    beforeEach: false,
    afterEach: false,
    before: false,
    window: true
  }
};
