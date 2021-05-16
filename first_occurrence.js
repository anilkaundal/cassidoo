/*
You’re given a string of characters that are only 2s and 0s. 
Return the index of the first occurrence of “2020” without using 
the indexOf (or similar) function, and -1 if it’s not found in the string.

Example:
$ find2020(‘2220000202220020200’)
$ 14
*/

const prefixMapping = (str) => {
  let prefixArray = new Array(str.length + 1);
  let prefixLen = 0;
  prefixArray[0] = -1;
  prefixArray[1] = 0;
  let i = 1;
  while (i < str.length) {
    if (str.charAt(prefixLen) === str.charAt(i)) {
      // matches with prefix
      prefixLen++;
      i++;
      prefixArray[i] = prefixLen;
    } else if (prefixLen > 0) {
      // i is not iterated
      prefixLen = prefixArray[prefixLen];
    } else {
      i++;
      prefixArray[i] = 0;
    }
  }
  return prefixArray;
};

const kmp = (text, pattern) => {
  let tIndex = 0;
  let pIndex = 0;
  let matches = [];
  let prefixArr = prefixMapping(pattern);
  while (tIndex < text.length) {
    if (pattern.charAt(pIndex) === text.charAt(tIndex)) {
      pIndex++;
      tIndex++;
      if (pIndex === pattern.length) {
        matches.push(tIndex - pIndex);
        pIndex = prefixArr[pIndex];
      }
    } else {
      pIndex = prefixArr[pIndex];
      if (pIndex < 0) {
        tIndex++;
        pIndex++;
      }
    }
  }
  return matches;
};

const find2020 = (str) => {
  let matches = kmp(str, "2020");
  return matches.length > 0 ? matches[0] : -1;
};

console.log(find2020("2220000202220020200"));
