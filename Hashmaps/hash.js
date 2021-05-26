function hash_v1(key, arrayLen) {
  let total = 0;
  for (let c in key) {
    let charValue = key[c].charCodeAt(0) - 96;
    total = (total + charValue) % arrayLen;
  }
  return total;
}
function hash(key, arrayLen) {
  let total = 0;
  const WEIRED_PRIME = 31;
  for (let c = 0; c < Math.min(key.length, 100); c++) {
    let charValue = key[c].charCodeAt(0) - 96;
    total = (total * WEIRED_PRIME + charValue) % arrayLen;
  }
  return total;
}

console.log(hash("cyan", 10));

console.log(hash("yanc", 10));
