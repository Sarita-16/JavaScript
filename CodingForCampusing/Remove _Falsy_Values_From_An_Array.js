/*  ------------------------------------------------------------------
for..each loop
------------------------------------------------------------------  */
let removeFalsy = function (arr1) {
  let newArr1 = [];
  // Iterate the array using the forEach loop
  arr1.forEach((element) => {
    // check for the truthy value
    if (element) {
      newArr1.push(element);
    }
  });
  console.log(newArr1);
};
removeFalsy([25, "", 0, NaN, undefined, false, [], null, true]);

/*  ------------------------------------------------------------------
Array.filter()
----------------------------------------------------------------    */
let arr2 = ["!", 5, NaN, null, false];
function remFalsy(arr2) {
  return arr2.filter((element) => {
    if (element) {
      return element;
    }
  });
}
console.log(remFalsy(arr2));
