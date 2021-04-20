/*
Given an integer n and a sorted array of prime integers called primes, 
return the nth “super ugly number”. A “super ugly number” is a positive 
number whose all prime factors are in the array primes.

Example:
$ superUgly(1, [2,3,5])
$ 1
$ superUgly(11, [2,7,13,19])
$ 28
*/
const superUgly = (n, primes) => {
  let ugly = [1];
  let prevIndices = new Array(primes.length).fill(0);
  while (new Set(ugly).size < n) {
    const options = primes.map(
      (item, index) => item * ugly[prevIndices[index]]
    );
    const next = Math.min(...options);
    const updateIndex = options.findIndex((item) => item === next);
    prevIndices[updateIndex]++;
    ugly.push(next);
  }
  return ugly.pop();
};

console.log(superUgly(11, [2, 7, 13, 19]));
console.log(superUgly(12, [2, 7, 13, 19]));
