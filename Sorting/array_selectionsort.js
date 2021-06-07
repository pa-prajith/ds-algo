const selectionSort = (arr) => {
  console.table(arr);
  let minStartIndex, minLastIndex;
  for (let a = 0; a < arr.length - 1; a++) {
    minStartIndex = a;
    minLastIndex = a;
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] < arr[minLastIndex]) {
        minLastIndex = b;
      }
    }
    if (minStartIndex !== minLastIndex) {
      [arr[minStartIndex], arr[minLastIndex]] = [
        arr[minLastIndex],
        arr[minStartIndex],
      ];
    }
  }
  console.table(arr);
};

selectionSort([3, 1, 4, 2, 7, 4, 8, 9, 5]);
