let medianSortedArray = function (arr1, arr2) {
  // Concat both array
  let arr = arr1.concat(arr2);
  // sort the arr
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(`After sorting and concatenation the Array is :  ${arr}`);
  // length
  let len = arr.length;
  // if len is even
  if (len % 2 == 0) {
    let m = Math.floor((len - 1) / 2);
    let median = (arr[m] + arr[m + 1]) / 2;
    console.log(`Median : ${median}`);
  }
  // if len is odd
  else {
    let m = (len - 1) / 2;
    let median = arr[m];
    console.log(`Median : ${median}`);
  }
};
medianSortedArray([5, 9, 8, 4, 2], [25, 50, 38]);
