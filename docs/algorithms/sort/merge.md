---
title: 归并排序
date: 2020-10-25
---

归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只 有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

```js
  function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
      result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
  function mergeSort(array) {
    if (array.length > 1) {
      const { length } = array;
      const middle = Math.floor(length / 2);
      const left = mergeSort(array.slice(0, middle)); //递归调用让数组拆分到最小
      const right = mergeSort(array.slice(middle, length));
      array = merge(left, right);
    }
    return array;
  }
```

![归并排序](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/075496bfd2db4394872fa38039ae1775~tplv-k3u1fbpfcp-watermark.image)

**复杂度** O(nlog(n))

>归并排序是第一个可以实际使用的排序算法。JavaScript 的 Array 类定义了一个 sort 函数(Array.prototype.sort)用以排序 JavaScript 数组(我们不必自己实现这个算法)。ECMAScript 没有定义用哪个排序算法，所以浏览器厂商可以自行去实现算法。例如，Mozilla Firefox 使用 归并排序作为 Array.prototype.sort 的实现，而 Chrome(V8 引擎)使用了 一个快速排序的变体(下面我们会学习)。