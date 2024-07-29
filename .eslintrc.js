module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "react-app",
  ],
  plugins: ["react", "prettier", "import"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
    },
  },
  rules: {
    "import/no-unresolved": [2, { ignore: ["^@/"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-nested-ternary": "off",
    "react/jsx-filename-extension": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "default-param-last": "off",
    "func-names": "off",
    "no-unused-vars": "off",
    "import/no-anonymous-default-export": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "consistent-return": "off",
    "no-return-assign": "off",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "no-plusplus": "off",
    "react/no-unescaped-entities": "off",
  },
};
