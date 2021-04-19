/* Given an array of 0s and 1s that represent a garden, where 0 is a plot 
that hasn’t been planted on, and 1 is a plot that has been planted on, 
return true if n plants can be planted without touching another plant.

Example:

garden = [1,0,0,0,1]

$ canPlant(garden, 1)
$ true // plant at position 2
$ canPlant(garden, 4)
$ false // there are only 3 plots, and two of them can't be planted on */

const garden = [1, 0, 0, 0, 1, 0, 0];

const canPlant = (gardenOrig, n) => {
  const garden = [...gardenOrig];
  let plantCount = 0;

  for (let i = 0; i < garden.length; i++) {
    const curr = garden[i];
    const prev = garden[i - 1] || 0;
    const next = garden[i + 1] || 0;
    if ([curr, prev, next].every((item) => item === 0)) {
      plantCount++;
      garden[i] = 1;
    }
  }
  return plantCount >= n;
};

console.log(canPlant(garden, 1));
console.log(canPlant(garden, 2));
console.log(canPlant(garden, 4));
