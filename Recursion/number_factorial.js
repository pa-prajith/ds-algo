/*
    Problem: Recursive method to return torial
*/

function fact(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return num * fact(num - 1);
}

console.log(`Factorial 10 ${fact(10)}`);
console.log(`Factorial 5 ${fact(5)}`);
console.log(`Factorial -10 ${fact(-10)}`);
