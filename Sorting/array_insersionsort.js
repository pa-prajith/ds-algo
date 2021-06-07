const insertionSort = (arr) => {
  console.table(arr);
  for (let a = 0; a < arr.length; a++) {
    const currentValue = arr[a];
    let swapIndex = -1;
    for (b = a - 1; b >= 0 && arr[b] > currentValue; b--) {
      arr[b + 1] = arr[b];
      swapIndex = b;
    }
    if (swapIndex !== -1) {
      arr[swapIndex] = currentValue;
    }
  }

  console.table(arr);
};

insertionSort([3, 1, 4, 2, 7, 4, 8, 9, 5]);
