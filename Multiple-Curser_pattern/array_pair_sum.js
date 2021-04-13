/*
 Problem. Sorted Array find first pair of zero in array
*/

function pairSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum > 0) {
      right--;
    }
    if (sum < 0) {
      left++;
    }
  }
}

console.log(
  `[-5, -3, -2, 0, 1, 2,4, 7] - ${pairSumZero([-5, -3, -2, 0, 1, 2, 4, 7])}`
);

console.log(
  `[-5, -3, -2, 0, 1, 4, 7] - ${pairSumZero([-5, -3, -2, 0, 1, 4, 7])}`
);
console.log(pairSumZero([-2, -1, 1]));
