### Apache Commons

```java
//反射
org.apache.commons.beanutils.PropertyUtils.copyProperties(Object dest, Object orig);
org.apache.commons.beanutils.BeanUtils.copyProperties(Object dest, Object orig);
```

### Spring

```java
//反射
org.springframework.beans.BeanUtils.copyProperties(Object source, Object target);
```

### CGlib

```java
//动态代理
net.sf.cglib.beans.BeanCopier.copy(Object paramObject1, Object paramObject2, Converter paramConverter);
```