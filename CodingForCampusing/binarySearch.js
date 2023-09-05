let binarySearch = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;
  flag = 0;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    if (key == arr[mid]) {
      flag = 1;
      break;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (flag == 1) {
    console.log(key + " is present in an Array 👍🏻.");
  } else {
    console.log(key + " is not present in an Array 👎🏻.");
  }
};

binarySearch([1, 5, 8, 9, 10, 15, 19, 21], 15);

/*  -----------------------
Using Filter
-----------------------  */
let binSearch = function (array, ele) {
  let result = array.filter((x) => x == ele);
  if (result.length) console.log(ele + " is Found :)");
  else console.log(ele + " is not Found :(");
};
binSearch([5, 9, 40, 54, 68, 70, 75, 80], 0);
