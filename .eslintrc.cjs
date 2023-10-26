module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['**/*.js', '**/*.less', '**/*.css', '**/*.scss', '**/*.html'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'func-style': ['error', 'expression'],
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-useless-empty-export': 2,
    '@typescript-eslint/no-shadow': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
}
