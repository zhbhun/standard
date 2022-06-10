# Stylelint-order

### 简单介绍 Stylelint
  stylelint 是css代码审查工具，只是强化了前端开发人员更加注重 CSS的书写规范，增强代码可读性。
与ESLint类似, 也可以是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误
例如一些细微的错误，单词拼错、无效十六进制颜色或[重写简写属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)等

### Stylelint-order
  stylelint-order 是 stylyelint的一个插件包，一个校验 css 属性顺序的 插件，需要配合stylelint 插件一起使用。
  可以让我们的代码样式更加整洁，当然我们可以不用限制的很死，但是大体的代码框架可以写的一样
  
#### 为什么要使用 stylelint-order ?
可以看两个例子
```css
/*例子1：*/
a {
	top: 0;
	height: 10px;
	color: pink;
    position: absolute;
    align-item: center;
    @media (min-width: 100px) {}
    display: flex;
    width: 100px;
}
```
```css
/*例子2：*/
a {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
	color: pink;
    @media (min-width: 100px) {}
}
```
我们可以清晰的看出来 例子2 可以更加的直观。这就是为什么在原来使用stylelint 校验的基础上还要添加 stylelint-order 来对
于属性的顺序进行校验，但是可以不用严格的对每个属性的字母顺序也进行校验，我们可以支队模块内容顺序进行校验。

### 如何使用 Stylelint-order
```shell script
npm install stylelint --save-dev
```
#### Installation

以下配置是结合 [prettier]()工具一起使用的
具体的配置可以参考 [stylelint-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md#examples)

1、安装相关依赖
```shell script
yarn add -D prettier stylelint-prettier stylelint-order stylelint-config-standard stylelint-prettier/recommended
```
2、项目根目录 新建 .stylelint.js 文件 添加以下相关配置

具体的 stylelint-order 配置可以参考 [stylelint-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md#examples)
```js
module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    // 指定声明块内的内容顺序
    'order/order': ['custom-properties', 'declarations'],
    // 指定声明块中的属性顺序。
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'never',
          properties: ['position'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['display'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['width', 'height'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['font', 'color'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['border'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['transform'],
        },
      ],
      {
        unspecified: 'bottom',
        emptyLineBeforeUnspecified: 'threshold',
        emptyLineMinimumPropertyThreshold: 4,
      },
    ],
  },
}

```
#### 校验

```shell script
npx stylelint src/demo.css --fix // 校验加格式化
```



