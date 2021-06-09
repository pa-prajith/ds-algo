const getDigit = (num, pos) => {
  // return Math.abs(num) % Math.pow(10, pos + q);
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const getCountDigit = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getLargestDigitCount = (arr) => {
  if (arr.length === 0) return undefined;
  let maxLen = 0;
  for (let n of arr) {
    maxLen = Math.max(maxLen, getCountDigit(n));
  }
  return maxLen;
};

const radixSort = (arr) => {
  const maxLen = getLargestDigitCount(arr);
  let bucket;
  for (let outer = 0; outer < maxLen; outer++) {
    bucket = [];
    for (let r = 0; r < 10; r++) {
      bucket[r] = [];
    }
    for (let inner = 0; inner < arr.length; inner++) {
      const digit = getDigit(arr[inner], outer);
      bucket[digit].push(arr[inner]);
    }

    arr = [];
    for (let a of bucket) {
      if (a.length > 0) {
        arr = [...arr, ...a];
      }
    }
  }
  return arr;
};

// console.log(2345, 2, getDigit(2345, 2));
// console.log(2345, getCountDigit(2345));
// console.log(
//   [100, 99, 8765, 12, 222, 55554],
//   getLargestDigitCount([100, 99, 8765, 12, 222, 55554])
// );
const input = [3, 10000, 4, 2000, 90, 5, 300, 6, 7, 10, 8, 1, 5];
console.table(input);
const result = radixSort(input);
console.table(result);
