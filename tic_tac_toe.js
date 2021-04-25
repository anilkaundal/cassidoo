/*
Given a string array representing a tic-tac-toe board, return true if and only if 
it’s possible to reach this board position during the course of a valid tic-tac-toe 
game. You can assume the first player will always play X first, and players will only 
fill in blank spaces. The game will end if there is 3 in a row, column, or diagonal, 
or if the board is full.

Example:
$ validTTTPosition([“XOX”, ” X “, ”   “])
$ false
$ validTTTPosition([“XOX”, “O O”, “XOX”])
$ true
$ validTTTPosition([“OOO”, ”   “, “XXX”])
$ false
$ validTTTPosition([”  O”, ”   “, ”   “])
$ false
*/

var validTicTacToe = function (board) {
  const boardArr = board.map((item) => item.split("")).flat();
  let xCount = 0;
  let oCount = 0;
  boardArr.forEach((item) =>
    item === "X" ? xCount++ : item === "O" && oCount++
  );

  let xWin, oWin;
  for (let index = 0; index < 3; index++) {
    const colIndexes = [index, index + 3, index + 6];
    const firstRowIndex = index * 3;
    const rowIndexes = [firstRowIndex, firstRowIndex + 1, firstRowIndex + 2];
    if (
      boardArr[colIndexes[0]] === boardArr[colIndexes[1]] &&
      boardArr[colIndexes[0]] === boardArr[colIndexes[2]]
    ) {
      if (boardArr[colIndexes[0]] === "X") {
        xWin = true;
      }
      if (boardArr[colIndexes[0]] === "O") {
        oWin = true;
      }
    }
    if (
      boardArr[rowIndexes[0]] === boardArr[rowIndexes[1]] &&
      boardArr[rowIndexes[0]] === boardArr[rowIndexes[2]]
    ) {
      if (boardArr[rowIndexes[0]] === "X") {
        xWin = true;
      }
      if (boardArr[rowIndexes[0]] === "O") {
        oWin = true;
      }
    }
  }
  if (boardArr[0] === boardArr[4] && boardArr[0] === boardArr[8]) {
    if (boardArr[0] === "X") {
      xWin = true;
    }
    if (boardArr[0] === "O") {
      oWin = true;
    }
  }
  if (boardArr[2] === boardArr[4] && boardArr[2] === boardArr[6]) {
    if (boardArr[2] === "X") {
      xWin = true;
    }
    if (boardArr[2] === "O") {
      oWin = true;
    }
  }

  return (xCount === oCount && !xWin) || (xCount === oCount + 1 && !oWin);
};
