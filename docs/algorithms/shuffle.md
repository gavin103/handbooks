---
title: Fisher-Yates 随机
date: 2020-05-27
---

随机算法将一个数组中的值进行随机排列。现实中的一个常见场景是洗扑克牌。

Fisher-Yates 随机算法由 Fisher 和 Yates 创造，并由高德纳(Donald E. Knuth)在《计算机程序设计艺术》系列图书中推广。

该算法从最后一位开始并将当前位置和一个随机位置进行交换。这个随机位置比当前位置小。这样，这个算法可以保证随机过的位置不会再被随机一次(洗扑克牌的次数越多，随机效果越差)

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }
  return array;
}

```
![随机](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb2c58ba2e064d53929adac6f9851434~tplv-k3u1fbpfcp-watermark.image)
