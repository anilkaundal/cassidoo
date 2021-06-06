/*
There are x lions, y tigers, z leopards, and w panthers. Find the number 
of ways to place them on a line such that no two same animals are adjacent 
to each other (assume w, x, y, and z are <= 50).
*/

const checkNextCase = (w, x, y, z, last) => {
  if (w < 0 || x < 0 || y < 0 || z < 0) {
    return 0;
  }

  if (w + x + y + z === 1) {
    if (
      (w === 1 && last === "w") ||
      (x === 1 && last === "x") ||
      (y === 1 && last === "y") ||
      (z === 1 && last === "z")
    ) {
      return 1;
    }
  }

  if (last === "w") {
    const nextCase = [w - 1, x, y, z];
    return (
      checkNextCase(...nextCase, "x") +
      checkNextCase(...nextCase, "y") +
      checkNextCase(...nextCase, "z")
    );
  }
  if (last === "x") {
    const nextCase = [w, x - 1, y, z];
    return (
      checkNextCase(...nextCase, "w") +
      checkNextCase(...nextCase, "y") +
      checkNextCase(...nextCase, "z")
    );
  }
  if (last === "y") {
    const nextCase = [w, x, y - 1, z];
    return (
      checkNextCase(...nextCase, "w") +
      checkNextCase(...nextCase, "x") +
      checkNextCase(...nextCase, "z")
    );
  }
  if (last === "z") {
    const nextCase = [w, x, y, z - 1];
    return (
      checkNextCase(...nextCase, "w") +
      checkNextCase(...nextCase, "x") +
      checkNextCase(...nextCase, "y")
    );
  }
};

const getSoln = (w, x, y, z) => {
  const nextCase = [w, x, y, z];
  return (
    checkNextCase(...nextCase, "w") +
    checkNextCase(...nextCase, "x") +
    checkNextCase(...nextCase, "y") +
    checkNextCase(...nextCase, "z")
  );
};

console.log(getSoln(1, 1, 1, 1)); // should be 4!
console.log(getSoln(1, 0, 1, 1)); // should be 3!
console.log(getSoln(1, 5, 4, 3));
