- 设置elasticsearch用户，不能为root
- 系统文件描述符数量需要不小于65536

```shell
vim /etc/security/limits.conf

# limits.conf
* soft nofile 65536
* hard nofile 131072
* soft nproc 2048
* hard nproc 4096
```

- 虚拟内存限制

```shell
sudo vi /etc/sysctl.conf
# sysctl.conf 
vm.max_map_count=262144
```

