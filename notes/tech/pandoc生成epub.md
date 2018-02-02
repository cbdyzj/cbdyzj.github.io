# Pacdoc生成ePub

- 实际书的来源格式是通常是markdown，如`分身.txt`
- 在书的开头初添加元数据，比如使用`YAML metadata block`（如下）或者直接使用markdown的语法
  - [参考1](http://pandoc.org/MANUAL.html#creating-epubs-with-pandoc)
  - [参考2](http://pandoc.org/epub.html)

```
---
title: 分身
author:
 - 东野圭吾
cover-image: ./cover.jpg
---
```

- 然后使用markdown的标题来自动生成目录（如下）
  - 使用`--toc-depth=NUMBER`控制目录生成的深度

```
...
# 第1章 鞠子之章 一
...
# 第2章 双叶之章 一
...
```

- 使用pacdoc命令生成epub电子书

```sh
$ pandoc 分身.txt -o 分身.epub --toc
```