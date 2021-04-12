/*
  Program - Write a function to take two strings and check whether they are anagrams. Assume input is in lowercase and a single word
 */

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let objStr1 = {};
  let objStr2 = {};
  for (let i = 0; i < str1.length; i++) {
    objStr1[str1[i]] = (objStr1[str1[i]] || 0) + 1;
    objStr2[str2[i]] = (objStr2[str2[i]] || 0) + 1;
  }
  console.log(objStr1, objStr2);
  for (let key in objStr1) {
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
  }
  return true;
}

console.log(`Input 'saew' 'wase'- ${isValidAnagram("saew", "wase")}`);
console.log(`Input 'sae' 'wase'- ${isValidAnagram("sae", "wase")}`);
console.log(`Input 'saes' 'wase'- ${isValidAnagram("saes", "wase")}`);
console.log(`Input 'saew' 'wase'- ${isValidAnagram("saew", "wase")}`);
