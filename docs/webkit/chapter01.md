---
title: 第一章：浏览器和浏览器内核
date: 2020-10-27
---
[[TOC]]

## 浏览器
1. 浏览器功能包括：
   - **网络**，浏览器要通过网络请求静态资源和服务端的数据
   - **资源管理**，包含网络下载资源和本地资源，这些资源需要一个高效的管理机制，避免重复请求，实现浏览器的缓存机制
   - **网页浏览**，这是我们使用浏览器的最主要目的，网页浏览包含有将静态资源渲染成可视化内容的一个过程
   - **多页面管理**，多个tab标签打开的时候，如何解决多页面之间的相互影响和安全等问题
   - **插件和扩展**，为浏览器提供附加功能
   - **账户与同步**
   - **安全机制**，避免用户信息被非法窃取等
   - **开发者工具**

2. HTML5类别和包含的各种规范
    | 类别       |                                          具体规范                                           |
    | ---------- | :-----------------------------------------------------------------------------------------: |
    | 离线       |                 Application cache, Local storage, Indexed DB, 在线/离线事件                 |
    | 存储       |                       Application cache, Local storage, Indexed DB 等                       |
    | 连接       |                                Web Sockets, Server-sent 事件                                |
    | 文件访问   |                      File API, File System, FileWriter, ProgressEvents                      |
    | 语义       | 各种新的元素，包含Media, structural, 国际化, Link relation, 属性, form类型, microdata等方面 |
    | 音频和视频 |                        Html5 Video, Web Audio, WebRTC, Video track等                        |
    | 3D和图形   |                             Canvas 3D, 3D CSS变换, WebGL, SVG等                             |
    | 展示       |                       CSS3 2D/3D变换, 转换（transition）, WebFonts等                        |
    | 性能       |                                 Web Worker, HTTP caching等                                  |
    | 其他       |                            触控和鼠标, shadow DOM, CSS masking等                            |

3. User Agent
   表明浏览器身份，服务端可以根据获取到的UA信息，进行区分处理。


## 浏览器内核及特性

1. 浏览器中最重要的模块，就是浏览器内核。 它主要作用是将页面转化为可视化的图像呈现出来。
因此浏览器内核也被称为渲染引擎。
渲染的定义是这样的： 根据描述或者定义，构建数学模型，通过模型生成图像的过程

![渲染引擎](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e758417798e43e0b3446b037f8c937e~tplv-k3u1fbpfcp-watermark.image)

| 内核   | Trident | Gecko   | WebKit                                                |
| ------ | ------- | ------- | ----------------------------------------------------- |
| 浏览器 | IE      | Firefox | Safari,Chrome/Chromium,Andriod浏览器,ChromeOS,WebOS等 |

2. 渲染引擎中的功能模块
   
   ![模块](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71ccd9192c194ff89a375f730a53dbc3~tplv-k3u1fbpfcp-watermark.image)

   可以看到渲染引擎的主体包含四大模块，HTML解释器，CSS解释器，布局，JavaScript引擎，
   - HTML解释器，将html文本生成DOM树
   - CSS解释器，将css文本生成CSSOM树
   - 布局，将两棵树结合起来，生成模型
   - JS引擎，运行JS代码实现交互，修改DOM和CSSOM
   - 绘图，将布局生成的模型，绘制成图像
  
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c44f5f8a821e42a9ab26fcdc802a91af~tplv-k3u1fbpfcp-watermark.image)
  上图中虚线箭头表示，每个阶段可能使用到的其他模块。

  渲染完成后，用户可能需要跟渲染结果进行交互，或者网页本身有动画操作，这需要持续的重复渲染过程。


## WebKit内核

1. 广义的WebKit指的是WebKit项目，狭义的WebKit指的是“WebKit嵌入式接口”
   ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4082a48795684f76b04502308ea78254~tplv-k3u1fbpfcp-watermark.image)
   
   上图中WebCore包含前面提到的html解释器，css解释器，和布局等模块。
   上面的WebKit嵌入式接口，就是封装好的API给各种浏览器调用。

   > webkit代码，可以在www.webkit.org获取
   > 还有chromium代码可以在www.chromium.org获取

2. WebKit和WebKit2
   ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/150f73466ed34be0be519bf70cb3e888~tplv-k3u1fbpfcp-watermark.image)
   
   WebKit2 不是狭义WebKit的简单修改版，而是一组支持新架构的全新绑定和接口层。

   WebKit2的进程结构模型可以看出，至少有两个进程：UI进程和Web进程

3. Blink是Chromium内核，基本上市WebKit的复制
   
   