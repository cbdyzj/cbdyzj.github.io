## Compile and install

```shell
# dependence: zlib, pcre, openssl
./configure
# ./configure --help
make
make install
```

## Modules

- Core：--without-http
- Access：--without-http_access_module
- Auth Basic：--without-http_auth_basic_module
- Auto Index：--without-http_autoindex_module
- FastCGI：--without-http_fastcgi_module
- Gzip：--without-http_gzip_module
- Proxy：--without-http_proxy_module
- Rewirite：--without-http_rewrite_module
- uWSGI：—without-http_uwsgi_module

## Request phase

- post-read：解析完毕头
- server-rewrite
- find-config：匹配location
- **rewrite**
- post-rewrite：完成内部跳转（实质是回退到3阶段）
- preaccess
- **access**
- post-access：控制access协作
- try-files
- **content**
- log

## Variable

```nginx
$args
$arg_?
$request_method
$uri
$request_uri
$http_?
```

## Static resources

no content command in location

- ngx_index: location /
- ngx_autoindex: location pathname
- ngx_static: location filename