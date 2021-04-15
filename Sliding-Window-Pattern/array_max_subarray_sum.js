/*
    Problem: Find the max sun of specified consecutive elements in an array
*/

function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let sum = 0;
  for (let item = 0; item < num; item++) {
    sum = sum + arr[item];
  }
  for (let ctr = num; ctr < arr.length; ctr++) {
    let temp = sum + arr[ctr] - arr[ctr - num];
    sum = Math.max(temp, sum);
  }
  return sum;
}

console.log(
  `Input Array - [1,2,5,2,8,1,5], Input count = 4. Output ${maxSubArraySum(
    [1, 2, 5, 2, 8, 1, 5],
    4
  )}`
);
