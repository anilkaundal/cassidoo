/*
Given an array of integers representing asteroids in a row, for each asteroid,
the absolute value represents its size, and the sign represents its direction
(positive = right, negative = left). Return the state of the asteroids after
all collisions (assuming they are moving at the same speed). If two asteroids
meet, the smaller one will explode. When they are the same size, they both explode.
Asteroids moving in the same direction will never meet.

Example:
$ asteroids([5, 8, -5])
$ [5, 8] // The 8 and -5 collide, 8 wins. The 5 and 8 never collide.

$ asteroids([10, -10])
$ [] // The 10 and -10 collide and they both explode.
*/

function removeCrash(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currAst = arr[i];
    let nextAst = arr[i + 1] || 0;
    if (arr[i] > 0 && arr[i + 1] < 0) {
      let crashWinner = arr[i] + arr[i + 1];
      if (crashWinner > 0) {
        result.push(arr[i]);
      } else if (crashWinner < 0) {
        result.push(arr[i + 1]);
      }
      i++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(removeCrash([5, 8, -5]));
// console.log(removeCrash([10, -10]));
// console.log(removeCrash([5, 8, -5, -10]));
// console.log(removeCrash([5, 8, -10]));
// console.log(removeCrash([5, -10]));

function* asteroidStep(arr) {
  while (arr.length !== removeCrash(arr).length) {
    arr = removeCrash(arr);
    yield arr;
  }
}

const gen = asteroidStep([5, 8, -5, -10]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
const nextgen = asteroidStep([5, 8, -5, -10]);
console.log([...nextgen]);
