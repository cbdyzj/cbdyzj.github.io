# 使用Gradle构建Swift

使用`gradle init`生成一个Swift项目之后，构建报错如下

```
$ ./gradlew build

> Task :app:compileTestSwift FAILED
xcrun: error: unable to lookup item 'PlatformPath' from command line tools installation
xcrun: error: unable to lookup item 'PlatformPath' in SDK '/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk'

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:compileTestSwift'.
> Failed to calculate the value of task ':app:compileTestSwift' property 'compilerArgs'.
   > Process 'command 'xcrun'' finished with non-zero exit value 1

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 616ms
4 actionable tasks: 2 executed, 2 up-to-date
```

从App Store安装安装Xcode，然后运行以下命令查看当前的SDK path

```
$ xcrun --show-sdk-path --sdk macosx
/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk
```

切换SDK path

```
$ sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

再查看一下切换后的SDK path

```
$ xcrun --show-sdk-path --sdk macosx                                  
/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk
```

再次尝试构建就可以成功了

```
$ ./gradlew clean build

BUILD SUCCESSFUL in 2s
9 actionable tasks: 9 executed
```

参考：[Running Swift build in Terminal leading to “Platform Path” errors](https://stackoverflow.com/questions/43418533/running-swift-build-in-terminal-leading-to-platform-path-errors/43418980)