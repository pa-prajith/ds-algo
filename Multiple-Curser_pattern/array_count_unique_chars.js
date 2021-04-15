/*
 Program: Count unique chars in a sorted array
*/

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let pointer = 0;
  for (let p = 0; p < arr.length; p++) {
    if (p !== 0 && arr[p - 1] !== arr[p]) {
      pointer = pointer + 1;
      arr[pointer] = arr[p];
    }
  }
  return pointer + 1;
}

console.log(
  `Input Array: [-4, -4, -2 , -1, 0, 2, 2, 3 , 4, 4, 5] - Count - ${countUniqueValues(
    [-4, -4, -2, -1, 0, 2, 2, 3, 4, 4, 5]
  )}`
);
