/*
    Pure Recursion
    Problem : Function accepts an array and return the Odd Numbers
*/

const N = 10;
const arr = [...Array(N + 1).keys()].slice(1);

function collectOldValues(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOldValues(arr.slice(1)));
  return result;
}

console.log(`Input Array - ${arr} \n Output - ${collectOldValues(arr)}`);
