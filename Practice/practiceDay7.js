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
/* 
  count = {
    1: 2,
    2: 2,
    3: 3,
    4: 1,
  }
*/
occurance([1, 1, 2, 3, 4, 2, 3, 3]);

// 2.Empty an Array using 4 methods
console.log("Empty Arrays --->");
// a) Assigning it to a new empty array
let emptyArray1 = function (arr1) {
  arr1 = [];
  console.log(arr1);
};
emptyArray1([1, 2, 3, 4, 5]);
// b)Setting its length to zero
let emptyArray2 = function (arr2) {
  arr2.length = 0;
  console.log(arr2);
};
emptyArray2([0, 2, 4, 6, 8]);
// c)Using splice() method
let emptyArray3 = function (arr3) {
  arr3.splice(0, arr3.length);
  console.log(arr3);
};
emptyArray3([10, 12, 14, 16, 18]);
// d)Using pop() method
let emptyArray4 = function (arr4) {
  while (arr4.length > 0) {
    arr4.pop();
  }
  console.log(arr4);
};
emptyArray4([100, 99, 98, 97, 96]);

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
let flag = 1;
let equivalent = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1.forEach((ele, index) => {
      if (!arr2.includes(ele)) {
        flag = 0;
        console.log("2 arrays are not equivalent 😟");
        return;
      }
    });
    if (flag == 1) {
      console.log("2 arrays are equivalent 😊");
    }
  } else {
    console.log("2 arrays are not equivalent 😟");
  }
};

equivalent([1, 2, 3, 4, 5], [4, 3, 1, 5, 2]);
