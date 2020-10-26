function binarySearch(array, value) {
  const sortedArray = array
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
const value = binarySearch([1, 2, 3, 4, 5, 6, 7], 6)
console.log(value)