# Spring MVC原理

### 重要接口

- HandlerMapping
- HandlerExceptionResolver
- HandlerInterceptor
- HttpMessageConverter
- HandlerAdapter
- View
- ViewResolver

### 重要类

- HandlerExecutionChain
- InternalResourceViewResolver

### 配置方法

- Java配置`@EnableWebMvc`、XML命名空间配置`<mvc:annotation-driven/>`将启用以下组件
  - 若干自带组件
    - RequestMappingHandlerMapping
    - RequestMappingHandlerAdapter
    - ExceptionHandlerExceptionResolver
  - 提供ConversionService支持
  - 接入验证框架（JSR303）
  - 根据类路径中的组件将自动拓展HttpMessageConverter（具体参考官方文档）