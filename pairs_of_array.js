/*
Given an array of integers and a target value, return the number of
pairs of array elements that have a difference equal to a target value.


Examples:
$ arrayDiff([1, 2, 3, 4], 1)
$ 3 // 2 - 1 = 1, 3 - 2 = 1, and 4 - 3 = 1
*/

const arrayDiff = (arr, target) => {
  const otherNumMap = {};
  for (let value of arr) {
    const OtherNum = value - target;
    if (!otherNumMap[OtherNum]) {
      otherNumMap[OtherNum] = 0;
    }
    otherNumMap[OtherNum] = otherNumMap[OtherNum] + 1;
  }
  // console.log(arr, otherNumMap);
  return arr.reduce((acc, curr) => acc + (otherNumMap[curr] || 0), 0);
};

console.log(arrayDiff([1, 2, 3, 4], 1));
console.log(arrayDiff([2, 2, 1, 1], 1)); // assuming arr[0] - arr[2], arr[0] - arr[3], arr[1] - arr[2], arr[1] - arr[3] are considered separate pairs, solution should be 4
console.log(arrayDiff([1, 1, 1, 2], 1));
