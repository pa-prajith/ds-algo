/*
    String search - Naive Approach
    Problem: function accept 2 string and find occur of second string on first
*/

function countSequence(mainStr, str) {
  let count = 0;
  for (let k = 0; k < mainStr.length; k++) {
    if (mainStr[k] === str[0]) {
      for (let q = 0; q < str.length; q++) {
        if (str[q] !== mainStr[k + q]) {
          break;
        }
        count = (q === str.length - 1 ? 1 : 0) + count;
      }
    }
  }

  return count;
}

const s1 =
  "this is my way to do thing and my way i always like and my way is always right also way Way";
const s2 = "like";

console.log(countSequence(s1, s2));
