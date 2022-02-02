module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        style: 'kebab-case',
      },
    ],
    eqeqeq: ['error', 'smart'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'dot-notation': 'off',
    'id-blacklist': 'off',
    'id-match': 'off',
    'no-empty-function': 'off',
    'no-magic-numbers': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    radix: 'off',
  }
};
