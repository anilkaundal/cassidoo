/*
Given a positive or negative real number, round it to the next whole
integer closer to zero. This means if it’s positive, round down, and
if it’s negative, round up. Try to do this in as few characters possible!

Test cases:

 1.7    =>  1
-2.1    => -2
 500.4  =>  500
-369.5  => -369
 150    =>  150
-350    => -350
*/

const rnd = (n) => ~~n;
console.log(rnd(1.7), 1);
console.log(rnd(-2.1), -2);
console.log(rnd(500.4), 500);
console.log(rnd(-369.5), -369);
console.log(rnd(150), 150);
console.log(rnd(-350), -350);
