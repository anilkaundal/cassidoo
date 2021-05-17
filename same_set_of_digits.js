/*
Given an integer n, return true if n^3 and n have the same set of digits.

Example:

$ sameDigits(1) // true
$ sameDigits(10) // true
$ sameDigits(251894) // true
$ sameDigits(251895) // false
*/

const compareSet = (a, b) => a.size === b.size && [...b].every((n) => a.has(n));

const sameDigits = (n) =>
  compareSet(
    new Set(n.toString().split("")),
    new Set(Math.pow(n, 3).toString().split(""))
  );

console.log(1, sameDigits(1));
console.log(10, sameDigits(10));
console.log(251894, sameDigits(251894));
console.log(251895, sameDigits(251895));
