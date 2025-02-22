module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2023: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "prettier", "jest", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-key": "error",
    "react/jsx-no-useless-fragment": "warn",
    "react/self-closing-comp": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-cycle": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-conditional-expect": "error",
    eqeqeq: ["error", "always"],
    "no-shadow": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "arrow-spacing": ["error", { before: true, after: true }],
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"],
      env: {
        jest: true,
      },
      rules: {
        "no-console": "off",
        "jest/no-mocks-import": "warn",
        "jest/consistent-test-it": ["warn", { fn: "it", withinDescribe: "it" }],
      },
    },
  ],
};
