let binarySearch = function (arr, key) {
  let length = arr.length;
  let low = 0;
  let high = length - 1;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    if (key == arr[mid]) {
      console.log("Search is Sucessful 😊");
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};
binarySearch([1, 3, 5, 8, 9, 51, 58, 94, 102, 125], 102);
