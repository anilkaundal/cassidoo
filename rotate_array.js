/*
Given an n x n array, rotate it 90 degrees without making a new array.

Example:
$ rotate90([[1,2,3],[4,5,6],[7,8,9]])
$ [[7,4,1],[8,5,2],[9,6,3]]
*/

const rotate90 = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      const temp = arr[i][j];
      arr[i][j] = arr[j][arr.length - 1 - i];
      arr[j][arr.length - 1 - i] = arr[arr.length - 1 - i][arr.length - 1 - j];
      arr[arr.length - 1 - i][arr.length - 1 - j] = arr[arr.length - 1 - j][i];
      arr[arr.length - 1 - j][i] = temp;
    }
  }
  return arr;
};

console.log(
  rotate90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
    .map((item) => String(item))
    .reduce((a, c) => a + "\n" + c, "")
);
