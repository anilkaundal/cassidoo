/*
Given an array of increasing integers, find the length of the longest
fibonacci-like subsequence of the array. If one does not exist, return 0.
A sequence is “fibonacci-like” if X_i + X_{i+1} = X_{i+2}.

Example:
$ fibonacciLike([1,3,7,11,12,14,18])
$ 3 // these sequences: [1,11,12], [3,11,14] or [7,11,18]
*/

const fibbonacciLike = (arr) => {
  let memo = {};
  let sequences = [];
  for (let i in arr) {
    for (let j = i; j < arr.length; j++) {
      if (i !== j) {
        const sum = arr[i] + arr[j];
        memo[sum] = [i, j];
      }
    }
    //dont need to check for 0 cus no 0
    if (!!memo[arr[i]]) {
      sequences.push([...memo[arr[i]], i]);
    }
  }
  console.log(sequences.map((subArr) => subArr.map((index) => arr[index])));
  return sequences.length;
};

console.log(fibbonacciLike([1, 3, 7, 11, 12, 14, 18]));
