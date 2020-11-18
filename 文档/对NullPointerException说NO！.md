# 对NullPointerException说NO！

---

## 小工具和小技巧
## Fail-fast
## 静态类型检查

---

# 小工具和小技巧

---

## 手动判断空

```java
Foo foo = getFoo();
if (foo != null) {
    foo.bar();
}
```

---

## 非空类型放前面

```java
String name = getName();
if ("Alice".equals(name)) {
    // ...
}
```

---

## 注意自动拆箱时的空指针：参数传递、`==`比较

```java
Integer n = getName();
// Unboxing of 'n' may produce 'NullPointerException' 
if(1 == n){
    // ...
}
```

---

## 注意空集合

```java
List<String> items = getItems();
// Dereference of 'items' will produce 'NullPointerException' 
for (String item : items) {
    // ...
}
```

---

## 空安全的比较方法

```java
Objects.equals(foo, bar);
// 此时`foo`和`bar`对象都可以为`null`
```

---

## 使用`Optional`对象

```java
Optional<User> optionalUser = getUser();
// 显式判断
if (optionalUser.isPresent()) {
    // ...
}
```

---

更多地，可以自定义一些空安全的工具方法。

比如可以自定义一个空安全`map`工具方法，用来代替`java.util.stream.Stream#map`。

或者自定义一些处理可能为空的对象的工具类。

---

# Fail-fast

在系统设计中，Fail-fast是指在接口处立即报告任何可能导致故障的情况。

Fail-fast通常被设计成停止正常运行，而不是试图继续一个可能有缺陷的过程。

这种设计通常在操作的几个点检查系统的状态，因此任何故障都可以及早检测到。

Fail-fast模块的职责是检测抛出错误，然后让系统的更高级别的错误处理机制处理它们。

---

## 断言

```java
Foo foo = getFoo();
assert foo != null;
foo.bar();
```

注意：`assert`开关是JVM的选项，默认是关闭的，需要增加JVM启动参数`-enableassertions`或`-ea`开启。

---

## `Objects#requireNonNull`

```java
Foo foo = Objects.requireNonNull(getFoo());
// 期望getFoo()的返回值不是null
foo.bar();
```

---

## `Assert#notNull`

```java
Foo foo = getFoo();
Assert.notNull(foo, "foo must be not null");
// 期待foo不为null，否则抛出java.lang.IllegalArgumentException
foo.bar();
```

---

# 静态类型检查

---

## 空安全的编程语言

### Kotlin

```kotlin
var a: String = "abc"
a = null    // 编译时报错

fun getStr(): String? {
    return if (Random.Default.nextBoolean()) {
        "str"
    } else {
        null
    }
}

var b: String? = getStr()
b?.length   // 安全调用操作符?.
```

---

## 类型标注与静态检查

- Jetbrains annotations: https://github.com/JetBrains/java-annotations

---

### 为方法增加类型标注

#### 根据产品ID获取产品对象

```java
public abstract @Nullable Product getProductById(@NotNull Long productId);
```

方法`getProductById`接受一个非`null`的`Long`类型的参数`productId`，返回一个可能为`null`的产品对象。

#### 根据用户组获取用户ID名称映射

```java
public abstract @NotNull Map<@NotNull Long, @Nullable String> getUserNameMap(@NotNull String userGroup);
```

方法`getUserNameMap`接受一个非`null`的`String`类型的参数`userGroup`，返回一个非`null`的用户ID名称`Map`。

其中，该`Map`的键为`Long`类型，不能为`null`，值为`String`类型，可能为`null`。

---

### 两个注解，`@NotNull`和`@Nullable`

- `org.jetbrains.annotations.NotNull`
- `org.jetbrains.annotations.Nullable`

它们一般被用来注解带有返回值的方法、方法参数、类的成员变量。

当`@NotNull`注解一个方法参数的时候，IDE会在调用处提示处理`null`的情况（如果IDE语义上认为传入的参数不可能是`null` ，那么不会有提示）；当它注解一个有返回值的方法的时候，它会检查返回值是否可能是`null` ,如果可能，也会有相应提示。

当`@Nullable`注解一个方法参数的时候，IDE会在方法内部提示你处理该参数为`null`的情况；当它注解一个有返回值的方法的时候，会在调用处提示你处理方法返回值为`null`的情况。

---

![](./npe.png)

---

### 更多注解

- `org.jetbrains.annotations.Nls`：用于修饰自然语言字符串
- `org.jetbrains.annotations.NonNls`：用于修饰非自然语言
- `org.jetbrains.annotations.Contract`：标注方法契约，如：方法有没有副作用、方法对于特定参数的返回值等

组合使用注解标注，完善静态检查。

---

### 思考题

#### 如何为以下方法标注注解

- 接受`String`类型的可变长参数，参数对象可以为`null`，但是`args`自身不能为`null`。
- 返回值为二维数组，二维数组自身不能为`null`，二维数组内的元素可以为`null`。

```java
public abstract List<List<Integer>> getMatrixByArgs(String... args);
```

---

# End