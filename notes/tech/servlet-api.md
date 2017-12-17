- Servlet 3.0之后允许实现ServletContainerInitializer用于取代web.xml来初始化容器。其中，要求实现类是公有的。Spring Boot的内置Tomcat就用的该规范

```java
package javax.servlet;
import java.util.Set;

public interface ServletContainerInitializer {

    void onStartup(Set<Class<?>> c,ServletContext ctx) throws ServletException;
}
```