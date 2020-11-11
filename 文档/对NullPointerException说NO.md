# 对NullPointerException说NO

- 手动判断空（小技巧）
  - 原始类型使用`==`
  - 非空类型放前面
  - 注意自动装箱时的空指针
  - 注意吃空集合
- `Objects#equals`
- `java.util.Optional`
- Fail-fast
  - 断言
  - `java.util.Objects#requireNonNull`
  - `lombok.NonNull`
- 类型理论
  - 空安全的编程语言
  - 类型标注与静态检查
  - Jetbrains annotations
- 更多的小工具
  - `java.util.Joiner`
  - Sugar
