/*
Given a basic Lisp-like string expression, parse it (where the available
functions are add, subtract, multiply, and divide, and they all take in
2 values).

Examples:
$ babyLisp(‘(add 1 2)’)
$ 3

$ babyLisp(‘(multiply 4 (add 2 3))’)
$ 20
*/

const babyLisp = (input) => {
  if (!isWrapped(input)) {
    return input;
  }
  const tokens = tokenise(input);
  if (tokens[0] === "add") {
    return Number(babyLisp(tokens[1])) + Number(babyLisp(tokens[2]));
  } else if (tokens[0] === "subtract") {
    return Number(babyLisp(tokens[1])) - Number(babyLisp(tokens[2]));
  } else if (tokens[0] === "multiply") {
    return Number(babyLisp(tokens[1])) * Number(babyLisp(tokens[2]));
  } else if (tokens[0] === "divide") {
    return Number(babyLisp(tokens[1])) - Number(babyLisp(tokens[2]));
  } else {
    return NaN;
  }
};

const tokenise = (input) => {
  input = unwrapBracket(input.trim());
  let firstSpaceIndex = endOfToken(input);
  const tokens = [input.substring(0, firstSpaceIndex)];
  input = input.substring(firstSpaceIndex + 1);
  let results = tokeniseSubToken(input);
  input = results.truncatedInput;
  tokens.push(results.subToken);
  results = tokeniseSubToken(input);
  input = results.truncatedInput;
  tokens.push(results.subToken);
  return tokens;
};

const endOfToken = (input) =>
  input.indexOf(" ") === -1 ? input.length - 1 : input.indexOf(" ");

const tokeniseSubToken = (input) => {
  let returnToken = "";
  if (input[0] === "(") {
    let numberOfStartingBrackets = 1;
    let endBracket = 0;
    while (numberOfStartingBrackets > 0) {
      endBracket++;
      if (input[endBracket] === "(") {
        numberOfStartingBrackets += 1;
      } else if (input[endBracket] === ")") {
        numberOfStartingBrackets -= 1;
      }
    }

    returnToken = input.substring(0, endBracket + 1);
    input = input.substring(endBracket + 1).trim();
  } else {
    firstSpaceIndex = endOfToken(input);
    returnToken = input.substring(0, firstSpaceIndex);
    input = input.substring(firstSpaceIndex + 1);
  }
  return { truncatedInput: input, subToken: returnToken };
};

const isWrapped = (inputStr) =>
  inputStr[0] === "(" && inputStr[inputStr.length - 1] === ")";

const unwrapBracket = (inputStr) =>
  isWrapped(inputStr) ? inputStr.substring(1, inputStr.length) : inputStr;

console.log(babyLisp("(add 1 2)"));
console.log(babyLisp("(multiply 4 (add 2 3))"));
console.log(babyLisp("(add (add 1 2) (add 3 4))"));
console.log(babyLisp("(add (subtract 2 (add 1 2)) (add 3 4))"));
