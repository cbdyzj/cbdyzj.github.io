## JavaScript风格指南@cbdyzj

### 命名风格

- 文件名（模块名）视情况而定
  - 通常小写，使用下划线`_`连接单词
  - 类名等使用大驼峰
  - 在另一些场景使用小写，使用连字符`-`连接单词
- 类名：大驼峰
- 变量名：小驼峰
- 谨慎使用缩写

```javascript
const opts = {}     // bad
const options = {}  // good

const t = await db.transaction()            // bad
const trans = await db.transaction()        // bad
const transaction = await db.transaction()  // good
```

### 变量

- 注意`var`的声明提升，尽量使用`const`与`let`
- 优先使用`const`而不是`let`

### 字符串

- 使用单引号字符串

### 函数

- 立即调用的函数，但尽量不要使用

```javascript
; (function () {
  // todo
})()
```

### 对象

- 实例化对象时，使用`new`关键词，尽管有的时候`new`可以省略

```Javascript
const error = Error('错误信息')      // bad
const error = new Error('错误信息')  // good

const regExp = RegExp('foo')       // bad
const regExp = new RegExp('foo')   // good
```

### 模块

- 尽量使用ECMAScript 6的模块化方案

### 分号

- 注意JavaScript分号ASI的坑，加不加按照团队风格决定

### 缩进

- 两个空格缩进，适当使用空格使代码更好看
- 使用空行分割代码块，文件最后一行后面加一个空行

### 逗号

- 数组、对象、函数等的形参表单行与多行采用不同的方式

```javascript
// 单行
const foo = [1, 2, 3]

// 多行
const foo = [
  1,
  2,
  3,
]
```

### 代码分支

- 优先处理错误，提前返回或抛出异常
- 最后一种情况省略`else`
- 始终使用`{}`包裹代码

### 判断

- 在不确定的情况下，始终使用`===`
- `switch`分支采用的是`===`匹配`case`
- 使用快捷方式

```javascript
// good
if (foo) { }

// bad
if (foo === 0) { }

// good
const bar = foo || ''
```

### 类型转换

- 几个建议用法

```Javascript
// 转成数字
const bar = Number(foo)

// 转成整数
const bar =  foo | 0 // 注意，位运算会使foo会被转化成32为整数处理
const bar = parseInt(foo, 10)

// 转成字符串
const bar = String(foo)
const bar = '' + foo

const foo = 1..toFixed(2) // "1.00"

// 布尔
const bar = Boolean(foo)
const bar = !!foo

```

### 异步

- 使用更容易阅读的`async`与`await`关键词组织异步代码

### 静态类型检查

- 使用TypeScript或者Flow检查类型

### 注释

- 参考本文的注释