/*
 *Problem : Write a function accepts two arrays and check second array should countain square of elements of all element in first array
 order doesn't matter. Length of both should be same also
 *
 */

function isArraySquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqArr1 = {};
  let freqArr2 = {};

  for (let itx = 0; itx < arr1.length; itx++) {
    freqArr1[arr1[itx]] = (freqArr1[arr1[itx]] || 0) + 1;
    freqArr2[arr2[itx]] = (freqArr2[arr2[itx]] || 0) + 1;
  }
  console.log(freqArr1, freqArr2);
  for (let key in freqArr1) {
    if (freqArr1[key] !== freqArr2[key * key]) {
      return false;
    }
  }
  return true;
}

console.log(
  `First Array [1,2,3] and Second One [9,1,4] - validate ${isArraySquare(
    [1, 2, 3],
    [9, 1, 4]
  )}`
);

console.log(
  `First Array [1,2,3] and Second One [9,4] - validate ${isArraySquare(
    [1, 2, 3],
    [9, 4]
  )}`
);

console.log(
  `First Array [1,2,1] and Second One [1,4] - validate ${isArraySquare(
    [1, 2, 1],
    [1, 4]
  )}`
);

console.log(
  `First Array [1,2,1] and Second One [1,1,4] - validate ${isArraySquare(
    [1, 2, 1],
    [1, 1, 4]
  )}`
);
