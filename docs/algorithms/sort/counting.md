---
title: 计数排序
date: 2020-10-26
---

计数排序是一个分布式排序。

分布式排序使用已组织好的辅助数据结构(称为桶)，然后进行合并，得到排好序的数组。

计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组。在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序后的结果数组。

它是用来排序**整数**的优秀算法(它是一个整数排序算法)，时间复杂度为 O(n+k)，其中 k 是 临时计数数组的大小;但是，它确实需要更多的内存来存放临时数组。

```js
  function findMaxValue(array) {
    if (array && array.length > 0) {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
      }
      return max;
    }
    return undefined;
  }

  function countingSort(array) {
    if (array.length < 2) {
      return array;
    }
    const maxValue = findMaxValue(array);
    let sortedIndex = 0;
    const counts = new Array(maxValue + 1);
    // 实现数组项转化为新数组count的索引，形成桶
    array.forEach(element => {
      if (!counts[element]) {
        counts[element] = 0;
      }
      counts[element]++;
    });
    // console.log('Frequencies: ' + counts.join());
    // 索引再次转为数组
    counts.forEach((element, i) => {
      console.log(element, i)
      while (element > 0) {
        array[sortedIndex++] = i;
        element--;
      }
    });
    return array;
  }
```

![计数排序](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2234f35746a4ace84371e30b0102004~tplv-k3u1fbpfcp-watermark.image)