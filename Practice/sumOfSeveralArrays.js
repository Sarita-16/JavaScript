// Without Reduce
let sumOfSeveralArrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
  }
  console.log(`Sum of all Arrays without REDUCE ${sum} 👻`);
};
sumOfSeveralArrays([
  [5, 6, 1],
  [2, 0, 8, 4],
  [3, 7, 9],
]);

// With Reduce
let sumOfAllArrays = function (arr) {
  let result = arr.reduce(
    (sum, arr) =>
      sum +
      arr.concate(
        arr.reduce((sum, arr) => sum + arr),
        0
      ),
    0
  );
  console.log(`Sum of all Arrays without REDUCE ${result} 🪶`);
};
sumOfAllArrays([[8, 0], [5, 9, 1], [2], [6, 17, 15, 4]]);
