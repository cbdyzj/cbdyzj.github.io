| Memo                            |                   |
| ------------------------------- | ----------------- |
| war, compiler, javadoc, source  | maven plugin      |
| mvn -N  io.takari:maven:wrapper | maven  wrapper    |
| mvn install:install-file        | install local jar |
| mvn deploy:deploy-file          | deploy local jar  |
| failOnMissingWebXml             |                   |
| maven.compiler.source           |                   |
| maven.compiler.target           |                   |
| project.build.sourceEncoding    | encoding          |

#### Demo

```shell
# deploy
mvn deploy:deploy-file \
-DgroupId=org.jianzhao \
-DartifactId=j \
-Dversion=0.1 \
-Dpackaging=jar \
-Dfile=j.jar \
-Durl=http://jianzhao.org \
-DrepositoryId=releases
```