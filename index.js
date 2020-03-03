module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true,
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "ignorePatterns": ["types/"],
  "extends": [
    "eslint-config-react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "graphql",
    "prettier",
    "import"
  ],
  "rules": {
    "import/no-webpack-loader-syntax": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": `warn`,
    "jsx-a11y/alt-text": `warn`,
    "jsx-a11y/anchor-has-content": `warn`,
    "jsx-a11y/anchor-is-valid": `warn`,
    "jsx-a11y/aria-activedescendant-has-tabindex": `warn`,
    "jsx-a11y/aria-props": `warn`,
    "jsx-a11y/aria-proptypes": `warn`,
    "jsx-a11y/aria-role": `warn`,
    "jsx-a11y/aria-unsupported-elements": `warn`,
    // TODO: It looks like the `autocomplete-valid` rule hasn't been published yet
    // "jsx-a11y/autocomplete-valid": [
    //   "warn",
    //   {
    //     inputComponents: [],
    //   },
    // ],
    "jsx-a11y/click-events-have-key-events": `warn`,
    "jsx-a11y/heading-has-content": `warn`,
    "jsx-a11y/html-has-lang": `warn`,
    "jsx-a11y/iframe-has-title": `warn`,
    "jsx-a11y/img-redundant-alt": `warn`,
    "jsx-a11y/interactive-supports-focus": `warn`,
    "jsx-a11y/label-has-associated-control": `warn`,
    "jsx-a11y/lang": `warn`,
    "jsx-a11y/media-has-caption": `warn`,
    "jsx-a11y/mouse-events-have-key-events": `warn`,
    "jsx-a11y/no-access-key": `warn`,
    "jsx-a11y/no-autofocus": `warn`,
    "jsx-a11y/no-distracting-elements": `warn`,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": `warn`,
    "jsx-a11y/no-noninteractive-element-interactions": `warn`,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": `warn`,
    "jsx-a11y/no-noninteractive-tabindex": `warn`,
    "jsx-a11y/no-onchange": `warn`,
    "jsx-a11y/no-redundant-roles": `warn`,
    "jsx-a11y/no-static-element-interactions": `warn`,
    "jsx-a11y/role-has-required-aria-props": `warn`,
    "jsx-a11y/role-supports-aria-props": `warn`,
    "jsx-a11y/scope": "warn",
    "jsx-a11y/tabindex-no-positive": "warn",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
        "error",
        "single"
    ],
    "@typescript-eslint/unified-signatures": "error",
    "camelcase": "off",
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "dot-notation": "error",
    "eqeqeq": [
        "error",
        "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
        "error",
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined"
    ],
    "id-match": "error",
    "import/order": "off",
    "max-classes-per-file": [
        "error",
        1
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-shadow": [
        "error",
        {
            "hoist": "all"
        }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "object-shorthand": "error",
    "one-var": [
        "error",
        "never"
    ],
    "radix": "error",
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "graphql/template-strings": ['warn', {
      "env": "literal",
      "tagName": "graphql",
    }]
  }
}
