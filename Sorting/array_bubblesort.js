/*
    Problem: Bubble Sort
*/

function bubbleSortMethod1(arr) {
  console.log("input - ", arr);
  for (let ity = 0; ity < arr.length; ity++) {
    for (let itx = 0; itx < arr.length - ity - 1; itx++) {
      if (arr[itx] > arr[itx + 1]) {
        let temp = arr[itx + 1];
        arr[itx + 1] = arr[itx];
        arr[itx] = temp;
      }
    }
  }
  console.log("output - ", arr);
}

function bubbleSortMethod2(arr) {
  console.log("input - ", arr);
  let noSwaps = true;
  for (let ity = arr.length; ity > 0; ity--) {
    noSwaps = true;
    for (let itx = 0; itx < ity - 1; itx++) {
      if (arr[itx] > arr[itx + 1]) {
        [arr[itx], arr[itx + 1]] = [arr[itx + 1], arr[itx]];
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  console.log("output - ", arr);
}

bubbleSortMethod1([3, 1, 4, 2, 7, 4, 8, 9, 5]);
bubbleSortMethod2([3, 1, 4, 2, 7, 4, 8, 9, 5]);
