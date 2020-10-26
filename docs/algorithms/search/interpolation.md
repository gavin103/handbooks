---
title: 内插搜索
date: 2020-10-26
---

内插搜索是改良版的二分搜索。二分搜索总是检查 mid 位置上的值，而内插搜索可能会根据要搜索的值检查数组中的不同地方。

和二分搜索一样，内插搜索也要求数组先进行排序

```js
  // 执行步骤:
  // (1) 使用 position 公式选中一个值;
  // (2) 如果这个值是待搜索值，那么算法执行完毕(值找到了);
  // (3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找(较小); 
  // (4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找(较大)。
  function interpolationSearch(
    array, //假设array已排序
    value,
  ) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;
    while (
      low <= high
      && (value >= array[low])
      && (value <= array[high])
    ) {
      // 利用delta计算出position,对于元素分布比较均匀的数组，效率更高。
      delta = (value - array[low]) / (array[high] - array[low]);
      position = low + Math.floor((high - low) * delta);
      if (array[position] === value) {
        return position;
      }
      if (array[position] < value) {
        low = position + 1;
      } else {
        high = position - 1;
      }
    }
    return -1;
  }
```
![内插搜索](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8f4c980bd6f4ebba27ee549ac06aa09~tplv-k3u1fbpfcp-watermark.image)