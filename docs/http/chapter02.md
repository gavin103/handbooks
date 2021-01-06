---
title: 第二章：URL与资源
date: 2021-01-06
---

[[TOC]]

URL 是因特网资源的标准化名称。URL 指向一条电子信息片段，告诉你它们位于 何处，以及如何与之进行交互。
本章，我们将介绍以下内容:

- URL 语法，以及各种 URL 组件的含义及其所做的工作;
- 很多 Web 客户端都支持的 URL 快捷方式，包括相对 URL 和自动扩展 URL; URL 编码和字符规则;
- 支持各种因特网信息系统的常见 URL 方案;
- URL 的未来，包括 URN——这种框架可以在对象从一处搬移到另一处时，保持 稳定的访问名称。

## 2.1 URL组成

想要获取 URL http://www.joes-hardware.com/seasonal/index-fall.html。 
那么 URL 分以下三部分。
- URL 的第一部分(http)是 URL 方案(scheme)。方案可以告知 Web 客户端怎 样访问资源。在这个例子中，URL 说明要使用 HTTP 协议。
- URL 的第二部分(www.joes-hardware.com)指的是服务器的位置。这部分告知 Web 客户端资源位于何处。
- URL 的第三部分(/seasonal/index-fall.html)是资源路径。路径说明了请求的是 服务器上哪个特定的本地资源。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/263462fbd8b24cd2bfb568dfe311e81c~tplv-k3u1fbpfcp-watermark.image)

URL 可以通过 HTTP 之外的其他协议来访问资源。
> 它们可以指向因特网上的任意资源，或者个人的 E-mail 账户: mailto:president@whitehouse.gov
<br>或者通过其他协议(比如 FTP 协议)访问的各种文件: ftp://ftp.lots-o-books.com/pub/complete-price-list.xls
<br>或者从流视频服务器上下载电影: rtsp://www.joes-hardware.com:554/interview/cto_video

## 2.2 URL语法

大多数 URL 方案的 URL 语法都建立在这个由 9 部分构成的通用格式上: 
```js
<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>
```
几乎没有哪个 URL 中包含了所有这些组件。URL 最重要的 3 个部分是方案(scheme)、 主机(host)和路径(path)。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46c45bbf2c7640cb9465bddcc8b8cf1e~tplv-k3u1fbpfcp-watermark.image)

**TIPs:**
> 1. 方案名是大小写无关的<br>
> 2. HTTP URL 的路径组件可以分成若干路径段。每段都可以有自己的**参数**。比如:
```http://www.joes-hardware.com/hammers;sale=false/index.html;graphics=true``` 这个例子就有两个路径段，hammers 和 index.html。hammers 路径段有参数 sale，其值为 false。index.html 段有参数 graphics，其值为 true。

## 2.3 URL快捷方式

### 2.3.1 相对URL

之前提到的URL包含有访问资源所需的全部信息，属于绝对URL（类比Linux中的绝对路径）。
相对 URL（类比Linux中的相对路径）是不完整的。要从相对 URL 中获取访问资源所需的全部信息，就必须相对于另一个，被称为其基础(base)的 URL 进行解析。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/beb76555004941b086bcd096c6b906f7~tplv-k3u1fbpfcp-watermark.image)
这一解析的过程被是通过一套算法完成的，这一算法记录在RFC2396中。流程如下：
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0e68c15210409a9770c3daa558b4cc~tplv-k3u1fbpfcp-watermark.image)
相对 URL 为保持一组资源(比如一些 HTML 页面)的可移植性 提供了一种便捷方式。

### 2.3.2 自动扩展URL

有些浏览器会在用户提交 URL 之后，或者在用户输入的时候尝试着自动扩展 URL。 这就为用户提供了一条捷径:用户不需要输入完整的 URL，因为浏览器会自动 扩展。

1. **主机名扩展**
    如果在地址栏中输入 baidu，浏览器就会自动在主机名中插入 www. 和 .com，构建出 www.baidu.com。
2. **历史扩展**
    如果你输入了 一个以前访问过的 URL 的开始部分，比如 http://www.joes-，浏览器就可能会建 议使用 http://www.joes-hardware.com。然后你就可以选择这个地址，不用输入完整的 URL 了。

## 2.4 令人头疼的字符

设计 URL，使其**可以通过任意因特网协议安全地传输**是很重要的。
安全传输意味着 URL 的传输不能丢失信息。
为了避开一些问题，URL 只能使用一些相对较小的、通用的安全字母表中的字符。

除此之外，设计者们还希望 **URL 也可供人类阅读**。
有时人们可能会希望 URL 中包含除通用的安全字母表之外的二进制数据或字符。
因此，需要有一种转义机制，能够将不安全的字符编码为安全字符，再进行传输。

**编码机制**

为了避开安全字符集表示法带来的限制，人们设计了一种编码机制，用来在 URL 中表示各种不安全的字符。
这种编码机制就是通过一种“转义”表示法来表示不安全字符的，这种转义表示法包含一个百分号(%)，后面跟着两个表示字符 ASCII 码的十六进制数。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f8130d305e94ee482d43bab60038aa9~tplv-k3u1fbpfcp-watermark.image)

**字符限制**

在 URL 中，有几个字符被保留起来，有着特殊的含义。有些字符不在定义的 US- ASCII 可打印字符集中。还有些字符会与某些因特网网关和协议产生混淆，因此不赞成使用。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/513034a2a4134bf8947a5a52a7293ddf~tplv-k3u1fbpfcp-watermark.image)

## 2.5 方案简介

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a54369d982234a60838ffd843ca3efce~tplv-k3u1fbpfcp-watermark.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dd587ba06084ca7b2a2eec6ebe2304c~tplv-k3u1fbpfcp-watermark.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2a44d9651fd4252a2f15acbc24a2007~tplv-k3u1fbpfcp-watermark.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f77ea28a821f4389bb108aa2ead230aa~tplv-k3u1fbpfcp-watermark.image)
