let bubbleSort = function (arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(`Sorted Array : `);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
bubbleSort([5, 8, 0, 48, 9, 27, 6, 30]);
