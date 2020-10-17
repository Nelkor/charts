module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-trailing-spaces': 2,
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'curly': ['error', 'all'],
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 80 }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
