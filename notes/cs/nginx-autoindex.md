```nginx
location / {
    root   /usr/share/nginx/html;
    # index  index.html index.htm;
    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;
    charset utf-8,gbk;
}
```

