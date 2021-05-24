/*
This week’s question (another similar parser but a liiiittle trickier):
Given a string that is an HTML-like code snippet, return whether or not
the tags are valid.

Examples:
$ htmlValidator('<tag>I love coding <Component />!</tag>')
$ true
*/

function validateHtml(str) {
  let tagStr = "";
  let tagStack = [];
  let isCheckingTag = false;
  let isCheckingTagProperty = false;
  let isValidHtml = true;
  str.split("").forEach((chr) => {
    if (isCheckingTag) {
      if (chr === "<") {
        isValidHtml = false;
      } else if (chr === ">") {
        isCheckingTag = false;
        isCheckingTagProperty = false;
        if (tagStr[0] === "/") {
          // is closing tag of stack
          const toCheck = tagStr.substring(1, tagStr.length);
          const tag = tagStack.pop();
          if (toCheck !== tag) {
            isValidHtml = false;
          }
        } else if (tagStr[tagStr.length - 1] !== "/" && tagStr[0] !== "/") {
          // is not closing tag
          tagStack.push(tagStr);
        }
        // is self closing tag
        tagStr = "";
      } else {
        if (chr === " " && isCheckingTag) {
          isCheckingTagProperty = true;
        }
        if (!isCheckingTagProperty || chr === "/") {
          tagStr += chr;
        }
      }
    } else {
      if (chr === "<") {
        isCheckingTag = true;
      } else if (tagStack.length <= 0) {
        // text that is not wrapped in any tag
        isValidHtml = false;
      }
    }
  });
  return isValidHtml && tagStack.length === 0;
}

console.log(
  "test simple example",
  validateHtml("<tag>I love coding <Component />!</tag>")
);
console.log(
  "test multiple tags",
  validateHtml("<div><p><p> <Component /></p>!</p></div>")
);
console.log("test property", validateHtml("<p id='test'>asdfasdf</p>"));
console.log(
  "extra starting <",
  validateHtml("<<tag>I love coding <Component />!</tag>")
);
console.log(
  "mismatch tag",
  validateHtml("<tag>I love coding <Component />!</asdf>")
);
console.log(
  "extra ending tag",
  validateHtml("<p><p> <Component /></p>!</p></p>")
);
console.log("extra starting tag", validateHtml("<p><p>asdfasdf</p>"));
