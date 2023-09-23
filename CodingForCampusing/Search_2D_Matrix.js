let searchMatrix = function (matrix, target) {
  let flag = 0;
  let row = matrix.length;
  let column = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (target == matrix[i][j]) {
        flag = 1;
      }
    }
  }
  if (flag == 1) {
    console.log("Element is found :)");
  } else {
    console.log("Element is not found :(");
  }
};
searchMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ],
  5
);
