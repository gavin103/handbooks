---
title: 第二章：HTML网页和结构
date: 2020-10-28
---
[[TOC]]

## 网页结构

### 1. 框结构
   
   用于对网页布局分割成几个框，可以用frameset,frame,iframe，在当前页面嵌入新的框结构。
   ::: details 查看图片
   ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e212077f5f2465a9755b915bed337fb~tplv-k3u1fbpfcp-watermark.image)
   :::
   多框结构的网页现在比较少了，不多做了解。


### 2. 层次结构
   
   网页的层次结构是只网页中的元素可能分布在不同层次，例如某元素的子元素，可能因为某些因素存在于不同于它父元素的某个层次。
   同时还要注意，CSS的某些特性也会影响到DOM元素的层次。
   ::: details 查看图片
   ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa361038fc8b4a5081fca31d9127a916~tplv-k3u1fbpfcp-watermark.image)
   上图代码的层级如下
   ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce0eef34e3564e03a1b9449e62e7153f~tplv-k3u1fbpfcp-watermark.image)
   :::
   >笔者注：在chrome浏览器的开发者工具中，找到Layer工具（如果没有，可以在右侧三点下拉菜单的more tools中找到）。该工具可以很好的展示当前页面的层级关系。


## WebKit的网页渲染过程

### 1. 加载和渲染
   
   浏览器的主要作用：将输入的URL转化为可视化的图像。

   这其中中包含两个过程：
   - 加载：从URL到构建DOM树
   - 渲染：从DOM树到生成可视化图像
  
   以上两个过程有交叉，难以明确区分，所以我们将两个过程统称为网页的渲染过程


### 2. WebKit的渲染过程
   
   根据数据的流向，将渲染过程分为三个阶段：
   - 从URL到构建DOM树
   - 从DOM树到构建完WebKit的绘图上下文
   - 从绘图上下文到生成图像
  
   2.1. **从URL到构建DOM树**
   ::: details 查看详细解释
   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5378806ae95d489eb6daafc6e49d9a3e~tplv-k3u1fbpfcp-watermark.image)
   ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c02fa0c52d5a4efe91873539e0f710cd~tplv-k3u1fbpfcp-watermark.image)

   网页在加载和渲染过程中会触发以下两个事件：
   - “DOMContent”事件：DOM树构建完成后
   - -DOM的onload事件：DOM树建完，并且网页所依赖的资源都加载完成后
  
   ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/654c98b4d2894d018bae83f136558734~tplv-k3u1fbpfcp-watermark.image)
   图中蓝色标注的是DOMContent触发的时机，红色标注的是load触发时机
   :::

   2.2. **从DOM树到构建完WebKit的绘图上下文**
   
   WebKit利用DOM树和CSS构建RenderObject树直到绘图上下文
   ::: details 查看详细解释
   ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b907c28775c43cabda47b155179c382~tplv-k3u1fbpfcp-watermark.image)
   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91ab57acfbd449e59495a8ec6ebedf3c~tplv-k3u1fbpfcp-watermark.image)
   RenderObject树的建立并不表示DOM树被销毁，上述的四个内部表示结构会一直存在知道网页销毁。
   :::

   2.3. **从绘图上下文到生成图像**
   ::: details 查看详细解释
   ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/838a175a9c924fd8a5874fd683566fe1~tplv-k3u1fbpfcp-watermark.image)
   ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdedd91cacd242a68bed0f3b67ac7f1a~tplv-k3u1fbpfcp-watermark.image)
   现代浏览器为了绘图的高效性和安全性，可能会在这一过程中引入复杂的机制，而且绘图也从单纯的软件渲染，到现在的GPU硬件渲染、混合渲染模型等方式。
   :::