---
title: 第八章：网关、隧道和中继
date: 2021-01-27
---

[[TOC]]

## 网关

单个应用程序无法处理所有资源怎么办？

为了解决这个问题，开发者提出了网关(gateway)的概念。网关是资源和应用程序之间的粘合 剂。应用程序可以(通过 HTTP 或其他已定义的接口)请求网关来处理某条请求， 网关可以提供一条响应。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cfae2ac2dc94025bf3232537d0a1ccc~tplv-k3u1fbpfcp-watermark.image)

- 在图 a 中，网关收到了对 FTP URL 的 HTTP 请求。然后网关打开 FTP 连接， 并向 FTP 服务器发布适当的命令。然后将文档和正确的 HTTP 首部通过 HTTP 回送，这是一个协议网关。
- 在图 b 中，网关通过 SSL 收到了一条加密的 Web 请求，网关会对请求进行解密，然后向目标服务器转发一条普通的 HTTP 请求。可以将这些安全加速器直 接放在(通常处于同一场所的)Web 服务器前面，以便为原始服务器提供高性能 的加密机制。
- 在图 c 中，网关通过应用程序服务器网关 API，将 HTTP 客户端连接到服务 器端的应用程序上去。在网上的电子商店购物、查看天气预报，或者获取股票报 价时，访问的就是应用程序服务器网关。

**HTTP/HTTPS:服务器端安全网关**

一个组织可以通过网关对所有的输入 Web 请求加密，以提供额外的隐私和安全性保 护。客户端可以用普通的 HTTP 浏览 Web 内容，但网关会自动加密用户的对话
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/645be622d87b4ae981680da024507e7e~tplv-k3u1fbpfcp-watermark.image)

**HTTPS/HTTP客户端安全加速器网关**

HTTPS/HTTP 网关位于 Web 服务器之前，通常作为不可见的拦截网关或反向代理使用。它们接收安全的 HTTPS 流量，对安全流量进行解密，并向 Web 服务器发送 普通的 HTTP 请求
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4e3d0585a004d49a3235f7fbcd3711b~tplv-k3u1fbpfcp-watermark.image)

### 资源网关

最常见的网关是应用程序服务器，会将目标服务器与网关结合在一个服务器中实现。应用程序 服务器是服务器端网关，与客户端通过 HTTP 进行通信，并与服务器端的应用程序相连。（例如在线打印机）
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4357f09ef9e24048a3faf5d1ecdd735e~tplv-k3u1fbpfcp-watermark.image)

通用网关接口(Common Gateway Interface， CGI)。CGI 是一个标准接口集，Web 服务器可以用它来装载程序以响应对特定 URL 的 HTTP 请求，并收集程序的输出数据，将其放在 HTTP 响应中回送。

## 隧道

Web 隧道允许用户通过 HTTP 连接发送非 HTTP 流量，这样就可以在 HTTP 上捎带 其他协议数据了。使用 Web 隧道最常见的原因就是要在 HTTP 连接中嵌入非 HTTP 流量，这样，这类流量就可以穿过只允许 Web 流量通过的防火墙了。

Web 隧道是用 HTTP 的 CONNECT 方法建立起来的。CONNECT 方法并不是 HTTP/1.1 核心规范的一部分，但却是一种得到广泛应用的扩展。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e931a352068413298acaa498a884971~tplv-k3u1fbpfcp-watermark.image)
- 在图 a 中，客户端发送了一条 CONNECT 请求给隧道网关。客户端的 CONNECT 方法请求隧道网关打开一条 TCP 连接(在这里，打开的是到主机 orders.joes-hardware.com 的标准 SSL 端口 443 的连接)。
- 在图 b 和图 c 中创建了 TCP 连接。
- 一旦建立了 TCP 连接，网关就会发送一条 HTTP 200 Connection Established 响
应来通知客户端(参见图 d)。
- 此时，隧道就建立起来了。客户端通过 HTTP 隧道发送的所有数据都会被直接转
发给输出 TCP 连接，服务器发送的所有数据都会通过 HTTP 隧道转发给客户端。

管道化数据对网关是不透明的，所以网关不能对分组的顺序和分组流作任何假设。 一旦隧道建立起来了，数据就可以在任意时间流向任意方向了。

如果在任意时刻，隧道的任意一个端点断开了连接，那个端点发出的所有未传输数 据都会被传送给另一个端点，之后，到另一个端点的连接也会被代理终止。如果还 有数据要传输给关闭连接的端点，数据会被丢弃。

## 中继

HTTP 中继(relay)是没有完全遵循 HTTP 规范的简单 HTTP 代理。中继负责处理 HTTP 中建立连接的部分，然后对字节进行盲转发。

某些简单盲中继实现中存在的一个更常见(也更声名狼藉的)问题是，由于它们无 法正确处理 Connection 首部，所以有潜在的挂起 keep-alive 连接的可能。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c6906272c9149c98f6866da4a81caf1~tplv-k3u1fbpfcp-watermark.image)

有一些方法可以使中继稍微智能一些，以消除这些风险，但所有简化的代理都存在 着出现互操作性问题的风险。要为某个特定目标构建简单的 HTTP 中继，一定要特 别注意其使用方法。对任何大规模部署来说，都要非常认真地考虑使用真正的、完 全遵循 HTTP 的代理服务器。
