/*
Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.

Examples of valid numbers: “7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”

Examples of invalid numbers: “abc”, “1a”, “e8”, “–6”, “-+3”, “95x54e53.”
*/

const isValidNumber = (str) => /^[+-]?[0-9]*\.?[0-9]*$/.test(str);

console.log(
  ["7", "0011", "+3.14", "4.", "-.9", "-123.456", "-0.1"].every(isValidNumber),
  ["abc", "1a", "e8", "–6", "-+3", "95x54e53."].every(
    (item) => !isValidNumber(item)
  )
);
