### 基本概念

- 镜像（Image）
- 容器（Container）
- 仓库（Repository）

**容器**（Container）可以看作是**镜像**（Image）实例。容器可以被创建、启动、停止、删除、暂停等。当容器需要写文件时，应当使用**数据卷**（Volume）

一个**Docker Registry**中可以包含多个**仓库**（Repository），每个仓库可以包含多个**标签**（Tag），每个标签对应一个镜像，形式为：`<仓库名>:<标签>`，默认标签是`latest`

仓库名经常以两段式路径形式出现，比如 `jwilder/nginx-proxy`，前者往往意味着Docker Registry多用户环境下的用户名，后者则往往是对应的软件名

> ubuntu:14.04、ubuntu:latest

### 常用参数

- -i：交互式操作
- -t：终端
- --rm：容器退出后将其删除
- -v：数据卷
- -p：端口映射
- --name：指定容器名字
- -d：后台进程

### 常用命令

- FROM：基础镜像
- RUN：在shell或exec环境下执行的命令，将创建一个新层
- ADD：复制文件
- COPY：复制文件
- CMD：容器默认执行命令，只能使用一次
- EXPOSE：运行时监听端口
- ENTRYPOINT：配置一个可执行的命令，只能使用一次
- WORKDIR：指定`RUN`、`CMD`与`ENTRYPOINT` 命令的工作目录
- ENV：环境变量