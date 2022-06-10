# CSS

## 规范

### 代码格式

- 缩进：用两个空格来代替制表符（tab）
- 选择器：

    - 为选择器分组时，将单独的选择器单独放在一行。
    - 为选择器中的属性添加双引号，例如，input[type="text"]。只有在某些情况下是可选的，但是，为了代码的一致性，建议都加上双引号。

- 空格：

    - 选择器 与 { 之间必须包含空格。
    - 属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。
    - 列表型属性值 书写在单行时，, 后必须跟一个空格。

- 换行：

    - 声明块的右花括号应当单独成行。
    - 每行不得超过 80 个字符，除非单行不可分割。
    - 对于超长的样式，在样式值的 空格 处或 , 后换行，建议按逻辑分组。

- 属性值：

    - 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
    - 十六进制值应该全部小写，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。
    - 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
    - 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

### 声明顺序

1. Positioning
2. Box model
3. Typographic
4. Visual
5. Misc

参考 [stylelint-order](../../blog/tools/stylelint-order.md)。

### 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。下面给出一个典型的实例。

### Less 和 Sass 中的嵌套

避免不必要的嵌套。这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。

扩展阅读：

- [Nesting in Sass and Less](http://markdotto.com/2015/07/20/css-nesting/)

### 选择器名称

遵循 BEM 规范。

## 参考文献

- [Google CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)
- [CSS 编码规范](https://github.com/fex-team/styleguide/blob/master/css.md)
- [CSS 编码规范](https://codeguide.bootcss.com/#css)
- [CSS 代码规范](https://guide.aotu.io/docs/css/code.html)

