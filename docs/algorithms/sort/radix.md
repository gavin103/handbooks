---
title: 基数排序
date: 2020-10-26
---

基数排序也是一个分布式排序算法，它根据数字的有效位或基数将整数分布到桶中。

基数是基于数组中值的记数制的。比如，对于十进制数，使用的基数是 10。

因此，算法将会使用 10 个桶用来分布元素并且首先基于个位数字进行排序，然后基于十位数字，然后基于百位数字，以此类推。

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
function findMinValue(array) {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  }
  return undefined;
}

const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase);

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    console.log(bucketsIndex, array[i])
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};
function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  // Perform counting sort for each significant digit, starting at 1
  let significantDigit = 1;

  while ((maxValue - minValue) / significantDigit >= 1) {
    // console.log(maxValue - minValue)
    // console.log('radix sort for digit ' + significantDigit);
    // 当significantDigit为1的时候，按个位排序
    // 当significantDigit为10的时候，按十位排序
    // 当significantDigit为100的时候，按百位排序
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    // console.log(array.join());
    significantDigit *= radixBase;
  }
  return array;
}

const arr = radixSort([456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999])
console.log(arr)
```

![基数排序](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19aa06a32ad14d7aa000ed57d85d8025~tplv-k3u1fbpfcp-watermark.image)

排序小型数组时，此算法比选择排序和冒泡排序性能要好。