/*
Given an array of numbers that represent stock prices (where each number
is the price for a certain day), find 2 days when you should buy and sell
your stock for the highest profit.

Example:
$ stockBuySell([110, 180, 260, 40, 310, 535, 695])
$ “buy on day 4, sell on day 7”
*/

const stockBuySell = (prices) => {
  let lowest = Number.POSITIVE_INFINITY;
  let highProfit = 0;
  let indexLow, indexHigh, indexLowTemp;
  for (let priceIndex in prices) {
    const price = prices[priceIndex];
    if (price < lowest) {
      indexLowTemp = priceIndex;
      lowest = price;
    }
    const currProfit = price - lowest;
    if (highProfit < currProfit) {
      // this logic to handle lowest price on last day
      indexLow = indexLowTemp;
      highProfit = currProfit;
      indexHigh = priceIndex;
    }
  }
  // increment due to daycount start from 1
  return `buy on day ${++indexLow}, sell on day ${++indexHigh}`;
};

console.log(stockBuySell([110, 180, 260, 40, 310, 535, 695]));
console.log(stockBuySell([110, 180, 260, 310, 535, 695, 40]));
