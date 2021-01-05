---
title: 第一章：HTTP 概述
date: 2020-10-27
---

[[TOC]]

在本章中可以看到 Web 应用程序是如何使用 HTTP 进行通信的。
本章内容:

- Web 客户端与服务器是如何通信的;
- (表示 Web 内容的)资源来自何方;
- Web 事务是怎样工作的;
- HTTP 通信所使用的报文格式;
- 底层 TCP 网络传输;
- 不同的 HTTP 协议变体;
- 因特网上安装的大量 HTTP 架构组件中的一部分。

## 1.1

HTTP 使用的是可靠的数据传输协议，因此即使数据来自地球的另一端，它也能够确保数据在传输的过程中不会被损坏或产生混乱。

## 1.2

HTTP 客户端（Web 客户端）和 HTTP 服务器（Web 服务器）共同构成了万维网的基本组件。
客户端向服务器发送 HTTP 请求，服务器会在 HTTP 响应中回送所请求的数据。

## 1.3 资源

Web 服务器是 Web 资源(Web resource)的宿主。Web 资源是 Web 内容的源头。资源可以是静态文件，也可以是软件程序。

Web 服务器会为所有 HTTP 对象数据附加一个 MIME 类型，用于区分数据格式。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afd39c28dc1a4696b4f716e6bd7ee8aa~tplv-k3u1fbpfcp-watermark.image)

URI(Uniform Resource Identifier)统一资源标识符。
URI 就像因特网上的邮政地址一样，在世界范围内唯一标识并定位信息资源。
URI 有两种形式，分别称为 URL 和 URN。

统一资源定位符(URL)是资源标识符最常见的形式。URL 描述了一台特定服务器上某资源的特定位置。它们可以明确说明如何从一个精确、固定的位置获取资源。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fc5658ca3584253b2544dec0f1b20a5~tplv-k3u1fbpfcp-watermark.image)

大部分 URL 都遵循一种标准格式，这种格式包含三个部分。

- URL 的第一部分被称为方案(scheme)，说明了访问资源所使用的协议类型。这 部分通常就是 HTTP 协议(http://)。
- 第二部分给出了服务器的因特网地址(比如，www.joes-hardware.com)。
- 其余部分指定了 Web 服务器上的某个资源(比如，/specials/saw-blade.gif)。

URI 的第二种形式就是统一资源名(URN)。URN 是作为特定内容的唯一名称使用的，与目前的资源所在地无关。比如，不论因特网标准文档 RFC 2141 位于何处(甚至可以将其复制到多个地方)，都可以用下列 URN 来命名它:
`urn:ietf:rfc:2141`

## 1.4 事务

一个 HTTP 事务由一条(从客户端发往服务器的)请求命令和一个(从服务器 发回客户端的)响应结果组成。这种通信是通过名为 HTTP 报文(HTTP message) 的格式化数据块进行的。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84301921066744d882e9931ba2902907~tplv-k3u1fbpfcp-watermark.image)

**HTTP Method**：
每条 HTTP 请求报文都包含一个方法。这个方法会告诉服务器要执行什么动作

**状态码**：
每条 HTTP 响应报文返回时都会携带一个状态码。状态码是一个三位数字的代码， 告知客户端请求是否成功，或者是否需要采取其他动作。

一个“Web 页面”通常并不是单个资源，而是一组 资源的集合。浏览器会执行一个 事务来获取描述页面布局的 HTML“框架”，然后发布另外的 HTTP 事务来获取每 个嵌入式图片、图像面板、Java 小程序等。

## 1.5 报文

快速浏览一下 HTTP 请求和响应报文的结构
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/358acdb6c66e426187a57fe85df998e8~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c55f09cd5304478986c251387d9c6dd~tplv-k3u1fbpfcp-watermark.image)

## 1.6 连接

接下来介绍 HTTP 报文是如何通过传输控制协议 (Transmission Control Protocol，TCP)连接从一个地方搬移到另一个地方去的。

TCP 提供了：

- 无差错的数据传输;
- 按序传输(数据总是会按照发送的顺序到达);
- 未分段的数据流(可以在任意时刻以任意尺寸将数据发送出去)。

TCP/IP 是全世界的计算机和网络设备常用的层次 化分组交换网络协议集。

只要建立了 TCP 连接，客户端和服务器之间的报文交换就不会丢失、不会被破坏， 也不会在接收时出现错序了。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6dd38c98fed249d0a42ef2b95a5aa144~tplv-k3u1fbpfcp-watermark.image)

在 HTTP 客户端向服务器发送报文之前，需要用网际协议(Internet Protocol，IP) 地址和端口号在客户端和服务器之间建立一条 TCP/IP 连接。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d503e69c4d3461ea7b4f199002b0ad5~tplv-k3u1fbpfcp-watermark.image)
步骤如下:
(a) 浏览器从 URL 中解析出服务器的主机名;
(b) 浏览器将服务器的主机名转换成服务器的 IP 地址; (c) 浏览器将端口号(如果有的话)从 URL 中解析出来; (d) 浏览器建立一条与 Web 服务器的 TCP 连接;
(e) 浏览器向服务器发送一条 HTTP 请求报文;
(f) 服务器向浏览器回送一条 HTTP 响应报文;
(g) 关闭连接，浏览器显示文档。

## 1.7 协议版本

- HTTP/0.9
- HTTP/1.0
- HTTP/1.0+
- HTTP/1.1
- HTTP-NG(HTTP/2.0)

## 1.8 Web 的结构组件

- **代理**

  位于客户端和服务器之间的 HTTP 中间实体。

  代理位于客户端和服务器之间，接收所有客户端的 HTTP 请求，并 将这些请求转发给服务器(可能会对请求进行修改之后转发)。对用户来说，这些应 用程序就是一个代理，代表用户访问服务器。
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be1aeee2845742399a2864faccb020ec~tplv-k3u1fbpfcp-watermark.image)
  出于安全考虑，通常会将代理作为转发所有 Web 流量的可信任中间节点使用。代理 还可以对请求和响应进行过滤。比如，在企业中对下载的应用程序进行病毒检测， 或者对小学生屏蔽一些成人才能看的内容。

- **缓存**

  HTTP 的仓库，使常用页面的副本可以保存在离客户端更近的地方。

  Web 缓存(Web cache)或代理缓存(proxy cache)是一种特殊的 HTTP 代理服务 器，可以将经过代理传送的常用文档复制保存起来。下一个请求同一文档的客户端 就可以享受缓存的私有副本所提供的服务了。
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44ff52c5bb4c4d4cb9eee5b1fd5a4d82~tplv-k3u1fbpfcp-watermark.image)
  客户端从附近的缓存下载文档会比从远程 Web 服务器下载快得多。HTTP 定义了很 多功能，使得缓存更加高效，并规范了文档的新鲜度和缓存内容的隐私性。

- **网关**

  连接其他应用程序的特殊 Web 服务器。

  网关(gateway)是一种特殊的服务器，作为其他服务器的中间实体使用。通常用于将 HTTP 流量转换成其他的协议。网关接受请求时就好像自己是资源的源端服务器 一样。客户端可能并不知道自己正在与一个网关进行通信。
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bba137e5bc3d48aaa889d53545ded1b6~tplv-k3u1fbpfcp-watermark.image)

- **隧道**

  对 HTTP 通信报文进行盲转发的特殊代理。

  隧道(tunnel)是建立起来之后，就会在两条连接之间对原始数据进行盲转发的 HTTP 应用程序。HTTP 隧道通常用来在一条或多条 HTTP 连接上转发非 HTTP 数 据，转发时不会窥探数据。

  HTTP 隧道的一种常见用途是通过 HTTP 连接承载加密的安全套接字层(SSL， Secure Sockets Layer)流量，这样 SSL 流量就可以穿过只允许 Web 流量通过的防 火墙了。
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/669f1358c9be48b681b1e173119e47c4~tplv-k3u1fbpfcp-watermark.image)
  HTTP/SSL 隧道收到一条 HTTP 请求，要求建立一条到目 的地址和端口的输出连接，然后在 HTTP 信道上通过隧道传输加密的 SSL 流量，这 样就可以将其盲转发到目的服务器上去了。

- **Agent 代理**

  发起自动 HTTP 请求的半智能 Web 客户端。

  用户 Agent 代理(或者简称为 Agent 代理)是代表用户发起 HTTP 请求的客户端程 序。所有发布 Web 请求的应用程序都是 HTTP Agent 代理。到目前为止，我们只提 到过一种 HTTP Agent 代理:Web 浏览器，但用户 Agent 代理还有很多其他类型。
  ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9774140bac05412291e132af88ca41f3~tplv-k3u1fbpfcp-watermark.image)
