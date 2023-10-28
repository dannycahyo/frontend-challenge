## Description

Without calling Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce(), or Array.prototype.forEach(), implement the following three similar functions on the Array prototype:

- `myMap(callback)`: Without mutating the original array, this function should call the passed callback function on every element of the array and return a new array containing the results of all these calls, in the corresponding order.

  The callback function can take in up to three parameters:
  - The current value in the array.
  - The current index in the array.
  - The array itself.

- `myFilter(callback)`: Without mutating the original array, this function should call the passed callback function on every element of the array and return a new array containing the values of the original array that, when passed to the callback function, returned true. These values should maintain their original order.

  The callback function takes in the same arguments as the ones that the callback function in `myMap` takes in.

- `myReduce(callback, initialValue)`: Without mutating the original array, this function should call the passed callback function on every element of the array and return the result of the last call to the callback.

  The callback function can take in up to four parameters:
  - The accumulator, which is the return value of the previous call to the callback. On the first call to the callback, the accumulator should be set to the `initialValue`. If the `initialValue` is undefined, then it should be set to the first value of the array, and the callback should skip the first element in the array and be called directly on the second element.
  - The current value in the array.
  - The current index in the array.
  - The array itself.

  If the array contains no elements, the `initialValue` should be returned. Note that this differs slightly from the `Array.prototype.reduce` function.

## Sample Usage

```javascript
const array = [1, 2, 3];

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[1];
});

const filteredArray = array.myFilter((value, i, arr) => {
  return (value + i + arr[1]) > 5;
});

const reducedValue = array.myReduce((accumulator, value, i, arr) => {
  return accumulator + value + i + arr[1];
}, 3);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedValue);
```