#!/bin/sh
docker run --rm \
-p 8000:80 \
-v `pwd`/nginx.conf:/etc/nginx/conf.d/default.conf \
--name ngx \
nginx
