/*
You have a character who jumps forward n number of units at a time,
and an array representing the road in front of them (where 0 is a flat
piece of road, and 1 is an obstacle). Return true or false if your
character can jump to the end without hitting an obstacle in front of them.

Examples:
$ characterJump(3, [0,1,0,0,0,1,0])
$ true // no hits

$ characterJump(4, [0,1,1,0,1,0,0,0,0])
$ false // hits obstacle at position 4
*/

const characterJump = (jumpBy, arr) =>
  arr.filter((val, index) => index % jumpBy === 0 && val !== 0).length === 0;

console.log(characterJump(3, [0, 1, 1, 0, 1, 1, 0]));
console.log(characterJump(4, [0, 1, 1, 0, 1, 0, 0, 0, 0]));
