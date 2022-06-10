# HTML

## 规范

### 代码格式

- 缩进：用两个空格来代替制表符（tab）
- 标签：

    - 标签不要大写，即便是 doctype 标签。
    - 不要在自闭合（self-closing）元素的尾部添加斜线

- 属性：对于属性的定义，永远全部使用双引号，绝不要使用单引号。

### HTML5 doctype

为每个 HTML 页面的第一行添加 standards mode（标准模式） 声明，这样能够确保在每个浏览器中拥有一致的展现。

### 语言属性

根据 HTML5 规范：强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。

### IE 兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的绘制模式。

### 字符编码

通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。

### 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- role, aria-*

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

### 布尔（boolean）型属性

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。

## 参考文献

- [Google HTML Style Guide](https://google.github.io/styleguide/htmlcssguide.html#HTML)
- [HTML 编码规范](https://codeguide.bootcss.com/#html)
- [CSS 代码规范](https://guide.aotu.io/docs/html/code.html)

