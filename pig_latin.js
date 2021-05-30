/*
Write a function that converts a sentence into Pig Latin.
*/

const pigify = (str) =>
  str
    .split(" ")
    .map((word) => {
      const firstVowelIndex = word
        .split("")
        .findIndex((letter) => ["a", "e", "i", "o", "u"].includes(letter));

      return (
        word.substring(firstVowelIndex) +
        word.substring(0, firstVowelIndex) +
        (firstVowelIndex ? "ay" : "yay")
      );
    })
    .join(" ");

console.log(pigify("smile daily everyone"));
