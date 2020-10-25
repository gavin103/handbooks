---
title: 冒泡排序
date: 2020-10-26
---

冒泡排序是最简单的排序，但是从运行时间的角度来看，冒泡排序是最差的一个。

冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至
正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。

原理动图展示，可以在这里找到
> https://visualgo.net/zh/sorting 
> 
> https://www.toptal.com/developers/sorting-algorithms

```js
  function bubbleSort(array) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (array[j]>array[j + 1]) {
          // 交换 [a,b]=[b,a]
          [array[j+1],array[j]]=[array[j],array[j+1]]
        }
      } 
    }
    return array;
  }
```
计算过程如下图：
![冒泡排序](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf7992f896df44afb23e9a7cfef09cf1~tplv-k3u1fbpfcp-watermark.image)

由于冒泡排序是从后向前排序的，最后排序好的部分，在每次循环中无需重新比较，所以对此可以优化。
```js
  function bubbleSort(array) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) { //length - 1 - i 之后的部分已经排序
        if (array[j]>array[j + 1]) {
          // 交换 [a,b]=[b,a]
          [array[j+1],array[j]]=[array[j],array[j+1]]
        }
      } 
    }
    return array;
  }
```
![冒泡排序优化](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3248ec8c9444c68a315f7ccf7f6d033~tplv-k3u1fbpfcp-watermark.image)

**复杂度** O(n2)
