## 步骤

1. 生成私钥

```shell
$ openssl genrsa -des3 -out server.key 2048
```

2. ​生成CSR（证书签名请求）

```shell
$ openssl req -new -key server.key -out server.csr
```

3. 删除私钥中的密码

```shell
$ cp server.key server.key.org
$ openssl rsa -in server.key.org -out server.key
```

4. 自签名

```shell
$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

5. 安装私钥和证书

   需要server.key、server.crt


## 说明

X.509证书包含三个文件：key，csr，crt。

- key是服务器上的私钥文件，用于对发送给客户端数据的加密，以及对从客户端接收到数据的解密
- csr是证书签名请求文件，用于提交给证书颁发机构（CA）对证书签名
- crt是由证书颁发机构（CA）签名后的证书，或者是开发者自签名的证书，包含证书持有人的信息，持有人的公钥，以及签署者的签名等信息

