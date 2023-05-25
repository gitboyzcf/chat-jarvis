/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "@typescript-eslint/naming-convention": [0],
    "@typescript-eslint/semi": [0],
    "curly": [1], //使用 if(){} 中的{}
    "eqeqeq": [1], //使用全等
    "no-throw-literal": [1], //抛出字面量错误 throw "error";
    "semi": [0],//关闭检测分号结尾
    "no-mixed-spaces-and-tabs":[0], //关闭空格 和 tab 混合缩进 检测
    "linebreak-style": [ 0,"windows" ], //取消對lf和crlf的檢測
    "no-console": [1],//新增加的验证代码有没有console(不影响调式）
    "no-debugger": [1] //新增加的验证代码有没有debugger(不影响调式）
  }
}
