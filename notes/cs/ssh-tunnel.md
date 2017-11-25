# ssh的几个用法

## ssh -D

<!--todo-->

## ssh -L

<!--todo-->

## ssh -R

```shell
$ ssh -CqTfnN -R [代理机器绑定地址]:[代理机器绑定端口]:[目标地址]:[目标端口] 用户@代理机器
```

## ssh -t

```
$ ssh -t [one] ssh [two]
```
