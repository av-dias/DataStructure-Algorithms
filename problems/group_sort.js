// Count the number of occurencies in arr and save in arry as [number,frequency]
// arr = [3,3,2,1] then res = [ [3,2], [2,1], [1,2] ]
// Sort arr desc by frequency
// grouped = [[3,2], [2,1], [1,2]], then res = [ [3,2], [1,2], [2,1] ]
// If numbers have the same number of frequency, then order number by ascending
// final example -> arr = [3, 3, 1, 2, 1]; then response = [[ [ 1, 2 ], [ 3, 2 ], [ 2, 1 ]]

// Write your code here
let value_freq_array = [];
let indexing = {};
let index = 0;

function groupSort(arr) {
  // Write your code here
  let value_freq_array = [];
  let indexing = {};
  let index = 0;

  // counting occurrencies
  for (let i = 0; i < arr.length; i++) {
    if (indexing[arr[i]] == undefined) {
      indexing[arr[i]] = index++;
      value_freq_array.push([arr[i], 1]);
    } else {
      value_freq_array[indexing[arr[i]]][1]++;
    }
  }

  // Sorting by frequency
  return mergeSort(value_freq_array);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
  //return arr;
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0][1] > right[0][1]) {
      sortedArray.push(left.shift());
    } else if (left[0][1] < right[0][1]) {
      sortedArray.push(right.shift());
    } else {
      if (left[0][0] < right[0][0]) {
        sortedArray.push(left.shift());
      } else sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(groupSort([3, 3, 2, 1]));

console.log(
  groupSort([
    4, 3, 3, 1, 2, 1, 5, 10, 2, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 4,
  ])
);
