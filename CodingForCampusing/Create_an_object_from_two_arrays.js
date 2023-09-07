/*  ----------------------------------------------------------------------
arr.forEach() method : Calls the provided function once 
for each element of the array. 
The provided function may perform any kind of operation 
on the elements of the given array. 
--------------------------------------------------------------------    */

let ar1 = [1, 2, 3, 4, 5];
let ar2 = ["Namjoon", "Jin", "Yoongi", "JHhope", "BTS"];

let arraysToObj = function (arr1, arr2) {
  // Checking if the array lengths are same or not & none of the array is empty
  if (arr1.length != arr2.length || arr1.length == 0 || arr2.length == 0) {
    console.log("Arrays size are not same or one of them can be EMPTY array.");
    return null;
  }

  let obj = {};
  // Using foreach() method
  arr1.forEach((item, index) => {
    obj[item] = arr2[index];
  });
  console.log(obj);
};
arraysToObj(ar1, ar2);

/*  ----------------------------------------------------------------------
Object.assign() method : Copy the values and properties from one or more
source objects to a target object.
----------------------------------------------------------------------  */
let ar3 = [6, 7, 8];
let ar4 = ["Jimin", "V", "Jungkook"];

let convertToObj = function (arr3, arr4) {
  // Checking if the array lengths are same or not & none of the array is empty
  if (arr3.length != arr4.length || arr3.length == 0 || arr4.length == 0) {
    console.log("Arrays size are not same or one of them can be EMPTY array.");
    return null;
  }
  // Using Object.assign() method
  let result = Object.assign(
    ...arr3.map((item, index) => ({
      [item]: arr4[index],
    }))
  );
  console.log(result);
};
convertToObj(ar3, ar4);

/*  ----------------------------------------------------------------------
arr.reduce() method : Reduce the array to a single value & executes 
a provided function for each value of the array (from left to right) & 
the return value of the function is stored in an accumulator. 
--------------------------------------------------------------------    */
let ar5 = ["a", "b", "c", "d", "e"];
let ar6 = [10, 20, 30, 40, 50];

let convertToObject = function (arr5, arr6) {
  if (arr5.length != arr6.length || arr5.length == 0 || arr6.length == 0) {
    console.log("Either Arrays size are not same or any one of them is null");
    return null;
  }

  // Using reduce() method
  let object = arr5.reduce((acc, element, index) => {
    return {
      ...acc,
      [element]: arr6[index],
    };
  }, {});
  console.log(object);
};

convertToObject(ar5, ar6);

/*  ------------------------------------------------------------------------
Using Loop :
------------------------------------------------------------------------  */
let ar7 = [0, 1, 10, 11];
let ar8 = ["Zoro", "One", "Two", "Three"];
let arrayToObject = function (arr7, arr8) {
  if (arr7.length != arr8.length || arr7.length == 0 || arr8.length == 0) {
    console.log("ERROR 🔴");
    return null;
  }
  let objResult = {};
  for (let i = 0; i < arr7.length; i++) {
    objResult[arr7[i]] = arr8[i];
  }
  console.log(objResult);
};
arrayToObject(ar7, ar8);

/*  --------------------------------------------------------------------------
Object.fromEntries() method : A standard built-in object which is used to
transform a list of key-value pairs into an object.
------------------------------------------------------------------------    */
let ar9 = ["🔵", "🤍", "🟩", "🫐", "🦩"];
let ar10 = ["Blue", "White", "Green", "Purple", "Pink"];
let toObj = function (arr9, arr10) {
  if (arr9.length != arr10.length || arr9.length == 0 || arr10.length == 0) {
    console.log("ERROR 😡");
    return null;
  }
  let objt = Object.fromEntries(
    arr9.map((element, index) => [element, arr10[index]])
  );
  console.log(objt);
};
toObj(ar9, ar10);
