/*
    Helper Method Recursion Pattern
    Problem : Function accepts an array and return the Odd Numbers
*/

const N = 10;
const arr = [...Array(N + 1).keys()].slice(1);

function collectOldValues(arr) {
  let result = [];
  const helper = (inp) => {
    if (inp.length === 0) {
      return;
    }
    if (inp[0] % 2 !== 0) {
      result.push(inp[0]);
    }
    helper(inp.slice(1));
  };
  helper(arr);
  return result;
}

console.log(`Input Array - ${arr} \n Output - ${collectOldValues(arr)}`);
