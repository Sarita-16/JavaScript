let binarySearch = function (arr, key) {
  let flag = 0;
  let location;
  let length = arr.length;
  let low = 0;
  let high = length - 1;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    if (key == arr[mid]) {
      flag = 1;
      location = mid + 1;
      break;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (flag == 1) {
    console.log(`Search is Sucessful 😊 at the location ${location}`);
  } else {
    console.log("Search is NOT Sucessful 😟");
  }
};
binarySearch([1, 3, 5, 8, 9, 51, 58, 94, 102, 125], 1);
