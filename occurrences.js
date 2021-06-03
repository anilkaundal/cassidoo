/*
Given a string s and a character c, return the number of occurrences of c in s.

Example:
$ numChars(‘oh heavens’, ‘h’)
$ 2
*/

const numChars = (str, ch) =>
  str.length - str.replace(new RegExp(ch, "g"), "").length;
//str.length - str.replaceAll(ch, "").length;

console.log(numChars("oh heavens", "h")); //2
