# 对NullPointerException说NO！

## 小工具和小技巧

### 手动判断空

```java
var foo = getFoo();
if (foo != null) {
    foo.bar();
}
```

#### 非空类型放前面

```java
var name = getName();
if ("Alice".equals(name)) {
    // ...
}
```

#### 注意自动拆箱时的空指针：参数传递、`==`比较

```java
Integer n = getName();
// Unboxing of 'n' may produce 'NullPointerException' 
if(1 == n){
    // ...
}
```

#### 注意空集合

```java
List<String> items = getItems();
// Dereference of 'items' will produce 'NullPointerException' 
for (String item : items) {
    // ...
}
```

#### 一些工具方法

空安全的比较方法

```java
Objects.equals(foo, bar);
```

Optional对象

```java
Optional<User> optionalUser = getUser();
if (optionalUser.isPresent()) {
    // ...
}
```

更多地，可以自定义一些空安全的工具方法。比如可以自定义一个空安全`map`工具方法，用来代替`java.util.stream.Stream#map`

## Fail-fast

### 断言

```java
var foo = getFoo();
assert foo != null;
foo.bar();
```

```java
var foo = Objects.requireNonNull(getFoo());
foo.bar();
```

```java
var foo = Objects.requireNonNull(getFoo());
foo.bar();
```

```java
var foo = getFoo();
Assert.notNull(foo, "foo must be not null");
foo.bar();
```

```java
public void foo(@NonNull Bar bar) {
    // ...
}
```

## 静态类型检查

- 空安全的编程语言
- 类型标注与静态检查
- Jetbrains annotations

