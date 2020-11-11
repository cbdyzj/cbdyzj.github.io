# 对NullPointerException说NO！

## 小工具和小技巧

手动判断空

- 原始类型使用`==`
- 非空类型放前面
- 注意自动装箱时的空指针
- 注意空集合
- `Objects#equals`
- `java.util.Optional`
- `java.util.Joiner`
- Sugar

## Fail-fast

- 断言
- `java.util.Objects#requireNonNull`
- `org.springframework.util.Assert`
- `lombok.NonNull`

## 静态类型检查

- 空安全的编程语言
- 类型标注与静态检查
- Jetbrains annotations

