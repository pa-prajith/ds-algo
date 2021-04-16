/*
    Problem : function to accept 2 positive numbers and find 2 numbers has same frequency of digits
*/

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false;
  }

  let objNum1 = {};
  let objNum2 = {};
  for (let itx = 0; itx < strNum1.length; itx++) {
    objNum1[strNum1[itx]] = objNum1[strNum1[itx]]
      ? objNum1[strNum1[itx]] + 1
      : 1;
    objNum2[strNum2[itx]] = objNum2[strNum2[itx]]
      ? objNum2[strNum2[itx]] + 1
      : 1;
  }

  for (let key in objNum1) {
    if (!objNum2[key] || objNum1[key] !== objNum2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
