module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-else-return': 0,
    'lines-between-class-members': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    'import/prefer-default-export': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    'no-undef': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
      typescript: {
        moduleDirectory: ['node_modules', 'src'],
        project: './tsconfig.json',
      },
    },
  },
};
