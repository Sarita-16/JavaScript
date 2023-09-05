/*  ------------------------------------------------------------------------------
Spread Operator & Set() object : 
Spread is used to merge two arrays & 
then Set() object to remove the duplicate items from the merged array.
----------------------------------------------------------------------------    */
let arr1 = ["1", "2", "3", "4", "5"];
let arr2 = ["3", "6", "8"];
let arr3 = ["8", "2"];
let newArr = [...arr1, ...arr2, ...arr3];
let mergeArr = [...new Set(newArr)];
console.log(mergeArr);

/*  ------------------------------------------------------------------------------- 
concat() method & Set() object :
concate is used to merge two arrays &
then Set() object to remove the duplicate items from the merged array.
------------------------------------------------------------------------------   */
let ar1 = ["a", "b", "c"];
let ar2 = ["c", "d", "e"];
let ar3 = ["e"];
let newAr = ar1.concat(ar2, ar3);
let mergeAr = [...new Set(newAr)];
console.log(mergeAr);

/*  -------------------------------------------------------------------------------
concat() method & filter :
concat is used to merge two arrays & 
then filter is used to remove the duplicate items from the merged array.
-----------------------------------------------------------------------------    */
let ary1 = ["@", "W", "4", "S"];
let ary2 = ["$", "W", "7", "^", "*"];
let newAry = ary1.concat(ary2.filter((item) => ary1.indexOf(item) < 0));
console.log(newAry);

//  *******************************************************************************************************************
//  *******************************************************************************************************************
/*  Array.of() Method : Creates a new array with the same elements as the original array.   */
const array = ["0", "20", "40", "60", "80"];
const clonedArray = Array.of(...array);
console.log(clonedArray);
