---
title: 插入排序
date: 2020-10-26
---

插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。

接着， 它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢?

这样，头两项就已正确 排序，接着和第三项比较(它是该插入到第一、第二还是第三的位置呢)，以此类推。

```js
  function insertionSort(array) {
    const { length } = array;
    let temp;
    for (let i = 1; i < length; i++) {
      let j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
    return array;
  };
```

![插入排序](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a64762e9af84c209aef3fc860de84c5~tplv-k3u1fbpfcp-watermark.image)

排序小型数组时，此算法比选择排序和冒泡排序性能要好。