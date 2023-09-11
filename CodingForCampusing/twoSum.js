let twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = 0;
      sum = sum + arr[i] + arr[j];
      if (target == sum) {
        console.log([i, j]);
        break;
      }
    }
    break;
  }
};
twoSum([1, 2, 3, 4, 5], 6);
