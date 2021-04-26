/*
Given an integer array, move all 0s to the end of it while maintaining the relative order of the non-zeroes. Bonus: do this without making a copy of the array!

Example:

$ moveZeroes([0,2,0,3,8])
$ [2,3,8,0,0]
*/

const moveZeroes = (arr) => arr.sort((a, b) => (b === 0 ? -1 : 0));

const arr = [0, 2, 0, 3, 8];
moveZeroes(arr);
console.log(arr);