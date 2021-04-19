/*
    Problem : Write a function countDown to print count down numbers
*/

function countDownNumbers(num) {
  // Base condition
  if (num <= 0) {
    console.log("All Done!!!");
    return false;
  }

  console.log(`Here we go - ${num}`);
  countDownNumbers(num - 1);
}

console.log(`Num  10 ${countDownNumbers(10)}`);
console.log(`Num  -10 ${countDownNumbers(-10)}`);
