### 得到key.der

```shell
$ echo $keybase64d | base64 -D > key.der
```

### 转化der到pem

```shell
$ openssl rsa -pubin -in key.der -inform DER -out key.pem -outform PEM
```

