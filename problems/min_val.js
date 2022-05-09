// Find the month in which the min value occurs from averaging stock prices
// average using floor so 2,5 = 2
// example
// [1,3,2,4,5]
// Month 1: [1]     [3,2,4,5]
// average 1 = 1    average 2 = 3
// min value = abs(3-1) = 2
// Month 2: [1,3]     [2,4,5]
// average 1 = 2    average 2 = 3
// min value = abs(2-3) = 1         <- FIRST MIN occurency
// Month 3: [1,3,2]     [4,5]
// average 1 = 3    average 2 = 4
// min value = abs(3-4) = 1
// Month 3: [1,3,2,4]     [5]
// average 1 = 2    average 2 = 5
// min value = abs(2-5) = 3

function findEarliestMonth(stockPrice) {
  // Write your code here
  let index = -1; // >>10^9
  let last_value = 1000000;
  for (let i = 1; i < stockPrice.length; i++) {
    let avg_left = average(stockPrice, 0, i);
    let avg_right = average(stockPrice, i, stockPrice.length);
    let net_price_change = Math.abs(avg_left - avg_right);

    if (net_price_change < last_value) {
      index = i;
      last_value = net_price_change;
    }
  }
  return index;
}

function average(stockPrice, begin, end) {
  let total = 0;
  for (let i = begin; i < end; i++) {
    total = total + stockPrice[i];
  }
  return Math.round(total / (end - begin));
}

console.log("Month " + findEarliestMonth([1, 1, 1, 1, 1, 1]));
console.log("Month " + findEarliestMonth([1, 3, 2, 4, 5]));
