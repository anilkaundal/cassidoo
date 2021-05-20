/*
Given two non-negative integers n1 and n2 represented as strings, 
return the product of n1 and n2, also represented as a string. 
Neither input will start with 0, and don’t just convert it to an 
integer and do the math that way.

Examples:
$ stringMultiply(“123”, “456”)
$ “56088”
*/

const stringMultiply = (a, b) => {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    const aExpo = Math.pow(10, a.length - 1 - i);
    for (let j = 0; j < b.length; j++) {
      const bExpo = Math.pow(10, b.length - 1 - j);
      const digitMult = a[i] * b[j];
      console.log(a[i], b[j], digitMult, total);
      total += digitMult * aExpo * bExpo;
    }
  }
  return total;
};

console.log(stringMultiply("123", "456"));
