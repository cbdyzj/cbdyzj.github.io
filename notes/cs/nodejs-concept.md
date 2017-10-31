# nodejs

- 事件驱动、异步编程
- CommonJS规范

## 模块化策略

```javascript
// 形成闭包
(function(exports, require, module, __filename, __dirname) {})
```

## require的查找策略

1. 查找缓存，不命中则查找并缓存
2. 相对路径，绝对路径，path
3. 添加拓展名，查找package.json

## 包结构

- package.json
- /bin
- /lib
- /doc
- /test
