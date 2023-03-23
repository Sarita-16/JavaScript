/*      // 1. Multiplication Table using for-each loop
let multiplication = function (number) {
  console.log("Multiplication Table of " + number + "--->");
  for (let i = 1; i <= 10; i++) {
    let mul = i * number;
    console.log(number + " * " + i + " = " + mul);
  }
};
multiplication(9);      */

// 2.Frequency of elements in an Array
let frequency = function (key, array) {
  let count = 0;
  let flag = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] == key) {
      count++;
    } else {
      flag = 1;
    }
  }

  console.log(count);
  if (flag == 1) {
    console.log("Element is not present in Array. 😉");
  } else {
    console.log("Number of element present in an Array : " + count);
  }
};
frequency(5, [5, 9, 1, 1, 1, 5, 0, 2, 4, 2, 25]);
