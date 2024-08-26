module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 强制使用一致的缩进
    indent: ['error', 2],

    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],

    // 强制使用一致的引号风格
    quotes: ['error', 'single'],

    // 要求或禁止使用分号
    semi: ['error', 'always'],

    // 禁止出现未使用过的变量
    'no-unused-vars': 'warn',

    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 强制使用一致的反勾号、双引号或单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // 要求或禁止使用命名的 function 表达式
    'func-names': 'warn',

    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',

    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': ['error', { before: true, after: true }],
  },
};
