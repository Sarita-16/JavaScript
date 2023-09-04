let luckySevens = function (arr) {
  let seven = 0;
  let flag = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    seven = arr[i] + arr[i + 1] + arr[i + 2];
    if (seven === 7) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    console.log("true");
  } else {
    console.log("false");
  }
};
luckySevens([5, 1, 0, 3, 2, 1]);
