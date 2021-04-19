/*
    Binary Search
    Program: Function to accept a sorted array and check the element exists
*/

const arr = [1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 15, 17, 19, 21];

function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;
  while (left < right) {
    middle = Math.ceil((left + right) / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[left] === num) {
      return left;
    } else if (middle === right) {
      return -1;
    } else if (arr[middle] > num) {
      right = middle;
    } else if (arr[middle] < num) {
      left = middle;
    } else {
      return -1;
    }
  }
  return -1;
}

console.log(`arr - ${arr} - search - 9 - ${binarySearch(arr, 9)} `);
console.log(`arr - ${arr} - search - 1 - ${binarySearch(arr, 1)} `);
console.log(`arr - ${arr} - search - 15 - ${binarySearch(arr, 15)} `);
console.log(`arr - ${arr} - search - 20 - ${binarySearch(arr, 20)} `);
console.log(`arr - ${arr} - search - 21 - ${binarySearch(arr, 21)} `);
console.log(`arr - ${arr} - search - 25 - ${binarySearch(arr, 25)} `);
console.log(`arr - ${arr} - search - 0 - ${binarySearch(arr, 0)} `);
