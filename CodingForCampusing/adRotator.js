const adRotator = function (base10) {
  let arr = [];
  while (base10 >= 1) {
    if (base10 % 2 == 0) {
      arr.push(0);
    } else {
      arr.push(1);
    }
    base10 = Math.trunc(base10 / 2);
  }
  console.log(arr);
  arr = arr.reverse();
  console.log(arr);

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr2.push(1);
    }
    if (arr[i] == 1) {
      arr2.push(0);
    }
  }
  console.log(arr2);
  let binary = arr2.concat().join("");
  console.log(binary);
  let digit = parseInt(binary, 2);
  console.log(digit);
};

adRotator(50);
