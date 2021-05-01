/* Given a string str and a dictionary dict containing a list of non-empty words, 
add spaces in str to construct a “sentence” where each word is a valid word in dict. 
Return all possible sentences. You are allowed to reuse the words in dict.

Example:
str = “penpineapplepenapple”
dict = [“apple”, “pen”, “applepen”, “pine”, “pineapple”]

$ makeSentence(str, dict)
$ [
    “pen pine apple pen apple”,
    “pen pineapple pen apple”,
    “pen pine applepen apple”
  ]
*/

const str = "penpineapplepenapple";
const dict = ["apple", "pen", "applepen", "pine", "pineapple"];

const makeSentence = (str, dict) => {
  return breakFirstWord([str], dict).map((item) => item.trim());
};

const breakFirstWord = (strArr, dict) => {
  const newStrArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    const currTestStr = strArr[i];
    let mostRecentSpace = currTestStr.lastIndexOf(" ") + 1;
    if (mostRecentSpace === currTestStr.length) {
      newStrArr.push(currTestStr);
    } else {
      for (let j = 0; j < dict.length; j++) {
        const currDictTest = dict[j];
        const testSubStr = currTestStr.substring(
          mostRecentSpace,
          mostRecentSpace + currDictTest.length
        );

        if (testSubStr === currDictTest) {
          const newStr =
            currTestStr.substring(0, mostRecentSpace) +
            testSubStr +
            " " +
            currTestStr.substring(mostRecentSpace + currDictTest.length);
          newStrArr.push(newStr);
        }
      }
    }
  }
  return newStrArr.every((item) => item[item.length - 1] === " ")
    ? newStrArr
    : breakFirstWord(newStrArr, dict);
};

console.log(makeSentence(str, dict));
