# Docker

## 基本概念

- 镜像（Image）：容器的原型
- 容器（Container）：镜像的实例
- 仓库（Repository）：镜像仓库，`<仓库>:<标签>`对应一个具体镜像
- 数据卷（Volume）：用于存储容器运行文件

## 参数

- -i：交互式操作
- -t：终端
- --rm：容器退出后将其删除
- -v：数据卷
- -p：端口映射
- --name：指定容器名字
- -d：后台进程

## Dockerfile

- FROM：基础镜像
- RUN：在shell或exec环境下执行的命令，将创建一个新层
- ADD：复制文件
- COPY：复制文件
- CMD：容器默认执行命令，只能使用一次
- EXPOSE：运行时监听端口
- ENTRYPOINT：配置一个可执行的命令，只能使用一次
- WORKDIR：指定`RUN`、`CMD`与`ENTRYPOINT` 命令的工作目录
- ENV：环境变量

## Network

- 网络隔离
- 网络驱动：本地网络、全局网络
- DNS服务：为容器分配一个内部域名，可以用于服务发现

### 默认网络

- host：和宿主机共享网络栈
- bridge：桥接，网桥，`veth`
- container：使用容器网络
- none：设置基本网络设施，不设置网络
- 用户自定义：bridge、overlay、macvlan
  - overlay：`VxLAN`隧道，用UDP封装链路层的以太网包
  - macvlan：虚拟mac地址

## Volume

- ​