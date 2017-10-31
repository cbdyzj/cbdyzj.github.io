- ASI：auto semicolon insertion

在ASI的机制中有一类语句叫做restricted productions。简单来说，就是组成这类语句的两个token当中不允许出现换行符 \n。如果在第一个token后面遇到了换行符，则判断语句结束，插入分号。restricted productions包括：

- return xxx （xxx是要返回的对象）
- throw xxx（xxx是要抛出的错误对象）
- break / continue xxx（xxx是循环的标签）
- 作为后缀的 ++ / --

ASI真正需要注意的坑只有两个，restricted productions是其一，另一个就是当下一行开头是 ( [ / 这三个字符之一的时候：

```javascript
a = b
(function () { ... }())
```

会被解析成

```javascript
a = b(function () {...}());
```

换言之，( ) 会被看做是在调用函数b。同理，[ ] 会被看做是在获取b的属性，而被斜杠坑的情况则要求更苛刻一些：

```javascript
a = b
/Error/i.test(str) && doSomething()
```

斜杠被解析成了除号！

要躲开这个坑，其实真的挺简单，只要尽量别用这三个字符作为一行开头就行了。事实上遇到比较多的也只有括号开头。真的避不开的话，可以在行头手动加个分号：

```javascript
a = b
;(function () { ... }())
```

额外的一点是在for循环声明里面的分号是永远不能省的，ASI不会在for循环声明中插分号，但一般正常人不会把for的声明分三行写吧...