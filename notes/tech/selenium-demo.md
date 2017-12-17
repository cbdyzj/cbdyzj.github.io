# 怎样使用selenium

- 安装firefox

```shell
$ brew cask install firefox
```

- 安装Java

```shell
$ brew cask install java
```

- 安装selenium-server-standalone（可选）

```shell
$ brew install selenium-server-standalone
```

- 安装浏览器驱动

```shell
# 火狐浏览器驱动
$ brew install geckodriver
```

- 安装node的依赖

```shell
$ npm i -D selenium-webdriver
```

- 启动火狐浏览器驱动

```shell
$ geckodriver
```

- 运行演示代码

```javascript
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.baidu.com/');
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 10000);
driver.quit();
```