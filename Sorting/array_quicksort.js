const pivot = (arr, start = 0, end = arr.length) => {
  //   console.table(arr);
  //   console.log("*".repeat(20));

  const pivot = arr[start];
  let swapIndex = start;
  const swap = (arr, aIndex, bIndex) =>
    ([arr[aIndex], arr[bIndex]] = [arr[bIndex], arr[aIndex]]);
  for (let itx = start + 1; itx < end; itx++) {
    if (pivot > arr[itx]) {
      swapIndex++;
      swapIndex !== itx && swap(arr, swapIndex, itx);
      //   swapIndex !== itx && console.table(arr);
    }
  }

  swapIndex !== start && swap(arr, swapIndex, start);
  //   console.log("*".repeat(20));
  //   console.table(arr);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const input = [4, 8, 2, 1, 5, 7, 6, 3];
const result = quickSort(input);
console.table(result);
