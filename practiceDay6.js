// 1. Frequency of elements in an Array using for-each loop
let eleFrequency = function (key, array) {
  let count = 0;
  array.forEach((element) => {
    if (element == key) {
      count++;
    }
  });
  if (count == 0) {
    console.log(key + " is not present in Array. 😉");
  } else {
    console.log(key + ", the number of element present in an Array : " + count);
  }
};
eleFrequency(5, [5, 9, 1, 1, 1, 5, 0, 2, 4, 2, 25]);

// 2.Frequency of elements in an Array
let frequency = function (key, array) {
  let count = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] == key) {
      count++;
    }
  }
  if (count == 0) {
    console.log(key + " is not present in Array. 😉");
  } else {
    console.log(key + ", the number of element present in an Array : " + count);
  }
};
frequency(15, [5, 9, 1, 1, 1, 5, 0, 2, 4, 2, 25]);
