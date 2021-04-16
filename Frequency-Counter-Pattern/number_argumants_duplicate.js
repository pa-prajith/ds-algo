/*
    Problem - Write a function accepts arguments and check whether it has duplicates
*/

function areThereDuplicates(...args) {
  if (args.length === 0) {
    return false;
  }
  let objArgs = {};
  for (let val of args) {
    if (val in objArgs) {
      return true;
    }
    objArgs[val] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates("a", "b", "c", "d"));
