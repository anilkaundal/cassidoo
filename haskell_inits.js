/*
Given a list, return a list of all its prefixes in ascending order of their
length. You’re essentially implementing the inits function in Haskell!

Example:

$ inits([4, 3, 2, 1])
$ [[], [4], [4,3], [4,3,2], [4,3,2,1]]

$ inits([144])
$ [[], [144]]
*/

const inits = (input) =>
  new Array(input.length + 1)
    .fill("")
    .map((_, index, arr) =>
      index > 0 ? input.slice(0, index) : typeof input === "object" ? [] : ""
    );

console.log(inits([4, 3, 2, 1]));
console.log(inits("321"));
