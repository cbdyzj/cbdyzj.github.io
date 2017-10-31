## 概念

- index：索引
- type：类型
- id：主键
- document：文档

```shell
# docker启动
sudo docker run -d -p 9200:9200 -p 9300:9300 elasticsearch

# 测试
curl localhost:9200

# 请求形式
curl http://localhost:9200/index/type/id
```
## 搜索

```
?q=
```