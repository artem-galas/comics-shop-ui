module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    "react-hooks"
  ],
  extends: [
    "airbnb",
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    "max-len": ["warn", { "code": 115, "tabWidth": 2 }],
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-props-no-spreading": ["warn", {
      "html": "ignore",
      "exceptions": ["Component"],
    }],
    "react/jsx-one-expression-per-line": ["off"],
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "@typescript-eslint/unbound-method": [ "off"],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true },
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true, "minProperties": 5 },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }]
  }
};
