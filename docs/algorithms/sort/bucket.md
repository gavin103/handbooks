---
title: 桶排序
date: 2020-10-26
---

桶排序(也被称为箱排序)也是分布式排序算法，它将元素分为不同的桶(较小的数组)， 再使用一个简单的排序算法，例如插入排序(用来排序小数组的不错的算法)，来对每个桶进行 排序。然后，它将所有的桶合并为结果数组。

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

  function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      } else if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
    // 计算桶的个数
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    // 初始化桶数组
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
      buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
    }
    return buckets;
  }

  function sortBuckets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] != null) {
        insertionSort(buckets[i]);
        sortedArray.push(...buckets[i]);
      }
    }
    return sortedArray;
  }

  function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
      return array;
    }
    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
  }
```

![桶排序](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f60b1778a4a4a92aa2ecb1eb182aa7d~tplv-k3u1fbpfcp-watermark.image)