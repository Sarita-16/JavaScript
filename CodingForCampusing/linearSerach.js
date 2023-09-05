/*  --------------
Using For loop
--------------  */
let linearSerach = function (arr, key) {
  let flag = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == key) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    console.log(key + " is present in the array 😊");
  } else {
    console.log(key + " is not present in the array 🫥");
  }
};

linearSerach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

/*  --------------
using IndexOf
------------    */
let linSearch = function (ary, ele) {
  let result = ary.indexOf(ele);
  if (result >= 0) {
    console.log(ele + " is Found ✌🏻");
  } else {
    console.log(ele + " is not Found 👎🏻");
  }
};
linSearch(["a", "b", "c", "d", "e", "f", "g", "h"], "s");
