## 语法

```shell
crontab [ -u user ] file
crontab [ -u user ] { -l | -r | -e }
```

### 时程表

```
* * * * * /usr/bin/foo.sh
```

- 格式：分、时、日、月、周、程序
- 任意时间：*
- 时间点：,
- 时间间隔：-
- 时间频率：/