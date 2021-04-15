/*
    Problem - Find Count of max adjacent unique chars in a word. Assume all in lower cases
    Input string - 'jesuschrist'
*/

function uniqeCharsInWord(str) {
  if (str.length === 0) {
    return 0;
  }
  let counter = 0;
  let tempCounter = 0;
  let objChars = {};
  for (let itx = 0; itx < str.length; itx++) {
    if (objChars[str[itx]]) {
      tempCounter = Math.max(tempCounter, objChars[str[itx]]);
    }
    counter = Math.max(counter, itx - tempCounter + 1);
    objChars[str[itx]] = itx + 1;
  }
  return counter;
}

console.log(`Input 'jesuschrist', Output - ${uniqeCharsInWord("jesuschrist")}`);
