---
title: 顺序搜索
date: 2020-10-26
---

顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找 的元素做比较。顺序搜索是最低效的一种搜索算法。

```js
const DOES_NOT_EXIST = -1;
function sequentialSearch(array, value) { 
  for (let i = 0; i < array.length; i++) {
      if (value === array[i])) {
        return i;
    } 
  }
  return DOES_NOT_EXIST;
}

```
![顺序搜索](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/747ca5b0901748548b775ecf4a3086f0~tplv-k3u1fbpfcp-watermark.image)