// 1.Find occurence of all elements in an Array using forEach loop
const occurance = function (array) {
  const count = {};
  array.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  console.log(count);
};

occurance([1, 1, 2, 3, 4, 2, 3, 3]);

// 2.Empty an Array using 4 methods

// 3.Check if an integer is a number using Number.isInteger() method
let integer = function (key) {
  if (Number.isInteger(key)) {
    console.log(key + " is an Integer");
  } else {
    console.log(key + " is not an Integer");
  }
};
integer("25");

// 4.Array check using isArray() method
let checkArray = function (arr) {
  result = Array.isArray(arr);
  if (result == true) {
    console.log("It's an Array 😉");
  } else {
    console.log("It's not an Array 😟");
  }
};
checkArray("[]");
console.log(Array.isArray([]));

// 5.Suppose you have 2 arrays. Check 2 arrays are equal or not
