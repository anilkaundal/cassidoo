/*
Given a n x m binary matrix filled with 0s and 1s, find the largest rectangle 
containing only 1s and return its area.

Example:
$ matrix =
  [
  [“1”,”0”,”1”,”0”,”0”],
  [“1”,”0”,”1”,”1”,”1”],
  [“1”,”1”,”0”,”1”,”1”],
  [“1”,”0”,”0”,”1”,”0”]
  ]
$ largestRect(matrix)
$ 4
*/

let input = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 0],
];

let input2 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
];

let input3 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
];

const largestHist = (row) => {
  let max = 0;
  let rows = []; // Row segments
  for (let i = 0; i < row.length; i++) {
    let height = row[i];
    for (let j = 0; j < height; j++) {
      if (!rows[j]) {
        rows[j] = 0;
      }
      rows[j]++;
      max = Math.max(max, rows[j] * (j + 1));
    }
    for (let j = rows.length - 1; j > height - 1; j--) {
      rows[j] = 0;
    }
  }
  return max;
};

const largestRect = (input) => {
  let largestArea = 0;
  let histRow = [];
  input.forEach((row, index) => {
    if (index === 0) {
      histRow = JSON.parse(JSON.stringify(row));
    } else {
      histRow = histRow.map((item, i) => (row[i] === 0 ? 0 : item + row[i]));
    }
    largestArea = Math.max(largestHist(histRow), largestArea);
  });
  return largestArea;
};

console.log(largestRect(input)); //4
console.log(largestRect(input2)); //6
console.log(largestRect(input3)); //5
