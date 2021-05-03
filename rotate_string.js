/*
Given a string of brackets, return a rotation of those brackets that is balanced. 
The numbers of opening and closing brackets will always be equal, so [ or ][] won’t 
be given as inputs.

Example:
$ rotateBrackets(‘]][][[‘)
$ ‘[[]][]’ // First rotation yields ‘[]][][‘. Second one yields ‘[[]][]’.
*/

const isValid = (input) => {
  const BRACKET_MAPPING = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  const bracketCount = {};
  input.split("").forEach((char) => {
    if (BRACKET_MAPPING[char]) {
      if (!!bracketCount[BRACKET_MAPPING[char]]) {
        bracketCount[BRACKET_MAPPING[char]] =
          bracketCount[BRACKET_MAPPING[char]] - 1;
      }
    } else {
      if (!bracketCount[char]) {
        bracketCount[char] = 0;
      }
      bracketCount[char] = bracketCount[char] + 1;
    }
  });
  return (
    Object.entries(bracketCount).reduce((acc, [_key, val]) => acc + val, 0) ===
    0
  );
};

const rotateBrackets = (bracketStr) => {
  let nextBracketState = bracketStr;
  while (!isValid(nextBracketState)) {
    let lastChar = nextBracketState[nextBracketState.length - 1];
    nextBracketState = lastChar + nextBracketState.slice(0, -1);
  }
  return nextBracketState;
};

console.log(rotateBrackets("]][][["));
