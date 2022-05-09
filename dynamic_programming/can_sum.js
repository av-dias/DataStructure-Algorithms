// Write a function 'canSum(targetSum, numbers)'
// The functions should return a boolean indicating wheter or not it is possible to
// generate the targetSum using an array of numbers
// use the numbers of the array as much as needed
// all input numbers are nonnegative

const numbers = [2, 5, 7];

//      0
//    / | \
//   2  5  7

const sum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return true;
  else if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (sum(remainder, numbers, memo) == true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(sum(7, [2, 3]) + " " + "true");
console.log(sum(7, [5, 3, 4, 7]) + " " + "true");
console.log(sum(7, [2, 4]) + " " + "false");
console.log(sum(8, [2, 3, 5]) + " " + "true");
console.log(sum(300, [7, 14]) + " " + "false");
