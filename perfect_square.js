/*
Given a positive integer n, write a function that returns true if it
is a perfect square and false otherwise. Don’t use any built-in math
functions like sqrt. Hint: Use binary search!

Examples:
$ perfectSquare(25)
$ true

$ perfectSquare(10)
$ false
*/

const perfectSquare = (num, curr = 1, prevMin = 0) =>
  curr * curr === num
    ? true
    : curr * curr > num
    ? curr - prevMin === 1
      ? false // no midpoint between curr and prevmin
      : perfectSquare(num, Math.floor((curr + prevMin) / 2), prevMin) // find mindpoint between curr and prev min
    : perfectSquare(num, curr * 2, curr); // increase curr by 2

console.log(perfectSquare(25));
console.log(perfectSquare(10));
console.log(perfectSquare(256));
