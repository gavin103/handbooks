function interpolationSearch(
  array,
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
    delta = (value - array[low]) / (array[high] - array[low]);
    position = low + Math.floor((high - low) * delta);
    console.log(delta, position)
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
const value = interpolationSearch([1, 2, 3, 5, 6, 7], 6)
console.log(value)