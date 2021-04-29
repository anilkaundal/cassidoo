/*
Given a string str containing only the characters x and y,
change it into a string such that there are no matching adjacent 
characters. You’re allowed to delete zero or more characters in the string. 
Find the minimum number of required deletions.

Example:
$ everyOther(‘xxyxxy’)
$ 2 // str becomes ‘xyxy’

$ everyOther(‘yyyyy’)
$ 4 // str becomes ‘y’
*/

const everyOther = (str) => {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    const curr = str[i];
    const next = str[i + 1];
    if (curr === next) {
      count++;
    }
  }
  return count;
};

console.log(everyOther("xxyxxy"));
console.log(everyOther("yyyyy"));
