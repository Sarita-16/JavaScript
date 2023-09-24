let searchRotatedArray = function (arr, target) {
  let result = arr.filter((x) => x == target);
  if (result) {
    console.log(arr.indexOf(target));
  } else {
    console.log(-1);
  }
};
searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3);
