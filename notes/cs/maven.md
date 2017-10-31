# Maven

- maven plugin：war, compiler, javadoc, source
- maven  wrapper：mvn -N  io.takari:maven:wrapper
- install local jar ：mvn install:install-file
- deploy local jar：mvn deploy:deploy-file
- failOnMissingWebXml
- maven.compiler.source
- maven.compiler.target
- encoding：project.build.sourceEncoding

### Demo

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