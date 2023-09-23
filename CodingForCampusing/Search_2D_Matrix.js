let searchMatrix = function (matrix, target) {
  let result = matrix.indexOf(target);
  if (result === -1) {
    console.log("Element is not found :)");
  } else {
    console.log("Element is found :(");
  }
};
searchMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  5
);
