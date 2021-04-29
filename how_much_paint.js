/*
Given a room size, and the square footage a paint can can cover, 
return how many cans of paint you need to buy to paint a room. 
Assume the room has four walls. If you’d like to expand this, 
you can add doors, windows, or any other room features that might 
make the problem interesting to solve.

Example:
room = { length: 12, width: 10, height: 9 }
canCoverage = 200
$ numberOfCans(room, canCoverage)
$ 2 // (12x9x2)+(10x9x2) = 396, so two cans will cover it
*/

const room = { length: 12, width: 10, height: 9 };
const canCoverage = 200;

const calcCanCoverage = (length, width, height, canCoverage) =>
  Math.ceil((length * height * 2 + width * height * 2) / canCoverage);

const numberOfCans = (room, canCoverage) => {
  const { length, width, height } = room;
  if (
    !room ||
    Object.keys(room).length === 0 ||
    !Object.values(room).every((val) => Number(val) > 0)
  ) {
    return -1;
  }
  return calcCanCoverage(length, width, height, canCoverage);
};

console.log(numberOfCans(room, canCoverage));
