/*
    Problem: Recursive method to return sum range
*/

function sumRange(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

console.log(`Sum Range 10 ${sumRange(10)}`);
console.log(`Sum Range 5 ${sumRange(5)}`);
console.log(`Sum Range -10 ${sumRange(-10)}`);
