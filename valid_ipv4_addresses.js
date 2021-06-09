/*
Given a string S containing only digits, write a function that returns a
list containing all possible combinations of valid IPv4 IP addresses.

Example:
$ getIp(‘11211’)
1.1.2.11
1.1.21.1
1.12.1.1
11.2.1.1
*/

function getIp(str) {
  let indivDigits = str.split("");
  let returnArr = [];
  const max = indivDigits.length - 3;
  //start from 1.1.1.max end at max.1.1.1 where max < 12
  let ips = [1, 1, 1, max - 1];
  while (ips[0] <= max && ips[1] <= max) {
    ips[3] += 1;
    for (let i = 3; i > 0; i--) {
      if (ips[i] > max) {
        ips[i] = 1;
        ips[i - 1] += 1;
      }
    }

    if (ips.reduce((acc, item) => acc + item, 0) === indivDigits.length) {
      let index = 0;
      let ip = [];
      for (let i = 0; i < ips.length; i++) {
        ip.push(str.substr(index, ips[i]));
        index += ips[i];
      }
      if (ip.every((item) => parseInt(item) >= 0 && parseInt(item) < 256)) {
        returnArr.push(ip.join("."));
      }
    }
  }

  return returnArr;
}

console.log(getIp("11211"));
// 1.1.2.11
// 1.1.21.1
// 1.12.1.1
// 11.2.1.1

console.log(getIp("255255255255"));
console.log(getIp("0000"));
console.log(getIp("111"));
