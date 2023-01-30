module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-exports': 0,
    'default-param-last': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
