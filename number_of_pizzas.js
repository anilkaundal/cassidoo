/*
Given an array of people objects (where each person has a name and a number
of pizza slices they’re hungry for) and a number for the number of slices
that the pizza can be sliced into, return the number of pizzas you need to buy.

Example:
$ arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
$ gimmePizza(arr, 8)
$ 2 // 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered
*/

const gimmePizza = (arr, pizzaSize) =>
  Math.ceil(arr.reduce((acc, curr) => acc + curr.num, 0) / pizzaSize);

console.log(
  "16 pieces min",
  gimmePizza(
    [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 4 },
    ],
    8
  )
);

console.log(
  "17 pieces min",
  gimmePizza(
    [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 4 },
      { name: "Cassidy", num: 4 },
    ],
    8
  )
);
