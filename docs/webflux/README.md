# Spring WebFlux

WebFlux，响应式的异步编程模式，技术的趋势！

## 高吞吐量

webflux由于异步非阻塞，不需要等待，所以响应时间基本上不变，而传统方式，响应时间线性增长。

![](./images/time.png)

## 使用tomcat

webflux 默认使用netty, 如果需要使用tomcat

```xml
<!-- 使用tomcat容器 -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-tomcat</artifactId>
</dependency>
```