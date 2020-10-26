---
title: 二分搜索
date: 2020-10-26
---

顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找 的元素做比较。顺序搜索是最低效的一种搜索算法。

```js
  // 执行步骤:
  // (1) 选择数组的中间值。
  // (2) 如果选中值是待搜索值，那么算法执行完毕(值找到了)。
  // (3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找(较小)。 
  // (4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找(较大)。
  function binarySearch(array, value) {
    //先将数组排序 这里使用前面介绍的快速排序方法
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const element = sortedArray[mid];
      // console.log('mid element is ' + element);
      if (element < value) {
        low = mid + 1;
        // console.log('low is ' + low);
      } else if (element > value) {
        high = mid - 1;
        // console.log('high is ' + high);
      } else {
        // console.log('found it');
        return mid;
      }
    }
    return -1;
  }
  const arr = binarySearch([1, 2, 3, 4, 5, 6, 7],6)
```
![二分搜索](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/962e6c414fef481e8a64cac016a8a4ee~tplv-k3u1fbpfcp-watermark.image)