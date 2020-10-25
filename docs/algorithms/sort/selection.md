---
title: 选择排序
date: 2020-10-26
---

选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。

```js
  function selectionSort(array) {
    const { length } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) indexMin = j;
      }
      // 找到最小值的索引，将最小值换到前面
      if (i !== indexMin) {
        [array[indexMin], array[i]] = [array[i], array[indexMin]]
      }
    }
    return array;
  }
```

![选择排序](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dbe85f3515241779d822e5b037a495b~tplv-k3u1fbpfcp-watermark.image)

**复杂度** O(n2)