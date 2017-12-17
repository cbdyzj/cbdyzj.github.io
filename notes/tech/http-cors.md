# HTTP CORS

> CORS：Cross-Origin Resource Sharing

CORS出现前，跨源时能够通过 script 或者 image 标签触发 GET 请求或通过表单发送一条 POST 请求，但这两种请求 HTTP 头信息中都不能包含任何自定义字段。

简单请求：请求方法是HEAD、GET或POST且HTTP头信息不超过以下几个字段：Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type（只限于 application/x-www-form-urlencoded、multipart/form-data、text/plain）。

## 简单请求

对于简单请求，CORS 的策略是请求时，在头信息中添加一个 Origin 字段，服务器收到请求后，根据该字段判断是否允许该请求。

- 如果允许，则在 HTTP 头信息中添加 `Access-Control-Allow-Origin` 字段，并返回正确的结果
- 如果不允许，则不在头信息中添加 `Access-Control-Allow-Origin` 字段。

如：

```http
GET /test HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, sdch, br
Origin: http://www.examples.com
Host: www.examples.com
```

浏览器先于用户得到返回结果，根据有无 `Access-Control-Allow-Origin` 字段来决定是否拦截该返回结果。

- script 或者 image 触发的 GET 请求不包含 Origin 头，所以不受到 CORS 的限制，依旧可用。
- 如果是 ajax 请求，HTTP 头信息中会包含 Origin 字段，由于服务器没有做任何配置，所以返回结果不会包含 `Access-Control-Allow-Origin`，因此返回结果会被浏览器拦截，接口依旧不可以被 ajax 跨源访问。

另外，除了提到的`Access-Control-Allow-Origin`还有几个字段用于描述 CORS 返回结果：

- `Access-Control-Allow-Credentials`：可选，用户是否可以发送、处理 cookie。
- `Access-Control-Expose-Headers`：可选，可以让用户拿到的字段。有几个字段无论设置与否都可以拿到的，包括：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。

## 非简单请求

除了简单请求之外的请求，就是非简单请求。

对于非简单请求的跨源请求，浏览器会在真实请求发出前，增加一次OPTION请求，称为预检请求（preflight request）。预检请求将真实请求的信息，包括请求方法、自定义头字段、源信息添加到 HTTP 头信息字段中，询问服务器是否允许这样的操作。

比如对于DELETE请求：

```http
OPTIONS /test HTTP/1.1
Origin: http://www.examples.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: X-Custom-Header
Host: www.examples.com
```

与CORS相关的字段有：

- `Access-Control-Request-Method`：真实请求使用的 HTTP 方法。
- `Access-Control-Request-Headers`：真实请求中包含的自定义头字段。

服务器收到请求时，需要分别对Origin、`Access-Control-Request-Method`、Access-Control-Request-Headers进行验证，验证通过后，会在返回HTTP头信息中添加。

```http
...
Access-Control-Allow-Origin: http://www.examples.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
...
```

他们的含义分别是：

- `Access-Control-Allow-Methods`：真实请求允许的方法
- `Access-Control-Allow-Headers`：服务器允许使用的字段
- `Access-Control-Allow-Credentials`：是否允许用户发送、处理 cookie
- `Access-Control-Max-Age`：预检请求的有效期，单位为秒。有效期内，不会重复发送预检请求

当预检请求通过后，浏览器会发送真实请求到服务器。这就实现了跨源请求。