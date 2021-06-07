const mergeArray = (aArr, bArr) => {
  //   console.table(aArr);
  //   console.table(bArr);
  const merged = [];
  let aIndex = 0,
    bIndex = 0;

  while (aIndex < aArr.length || bIndex < bArr.length) {
    if (aIndex === aArr.length) {
      while (bIndex < bArr.length) {
        merged.push(bArr[bIndex]);
        bIndex++;
      }
    } else if (bIndex === bArr.length) {
      while (aIndex < aArr.length) {
        merged.push(aArr[aIndex]);
        aIndex++;
      }
    } else {
      if (aArr[aIndex] < bArr[bIndex]) {
        merged.push(aArr[aIndex]);
        aIndex++;
      } else {
        merged.push(bArr[bIndex]);
        bIndex++;
      }
    }
  }
  //   console.table(merged);
  return merged;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
};

const inputArray = [3, 1, 4, 2, 9, 5, 3, 6, 7, 0, 8, 1, 5];
const sortedArray = mergeSort(inputArray);

console.table(sortedArray);

// mergeArray([7, 10, 20, 30, 40, 50, 100, 101], [7, 9, 26, 33, 66]);
