module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "babel",
    "react",
    "promise",
    "jest"
  ],
  "globals": {
    "__DEV__": false,
    "__TEST__": false
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "arrow-body-style": ["error", "as-needed", {
      "requireReturnForObjectLiteral": false
    }],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "jsx-quotes": ["error", "prefer-single"],
    "no-underscore-dangle": "off",
    "no-const-assign": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "react/jsx-curly-spacing": ["error", "always", {"spacing": {
      "objectLiterals": "never"
    }}],
    "react/jsx-no-bind": ["error", {
      "allowArrowFunctions": true
    }],
    "semi": [2, "always"]
  }
};
