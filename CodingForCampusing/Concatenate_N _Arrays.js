/* ------------------------------------------------------------------------
push() method 
------------------------------------------------------------------------ */
const arr1 = ["5", "s", "k", "0", "m"];
const arr2 = ["*", "2", "t", "h", "@"];
const arr3 = ["5", "8"];
arr1.push(...arr2);
console.log(arr1);

/*  -----------------------------------------------------------------------
concat() method : Merge N arrays together.
This method does not alter the original arrays & returns the new Array.
----------------------------------------------------------------------   */
const ar1 = ["1", "2", "3"];
const ar2 = ["4", "5", "6"];
const ar3 = ["7", "8", "9"];
const newAr = ar1.concat(ar2, ar3);
console.log(newAr);

/*  -----------------------------------------------------------------------
Spread Operator : This method is faster and less memory intensive
than the concat() method.
----------------------------------------------------------------------   */
const ary1 = ["a", "b", "c", "d", "e"];
const ary2 = ["f", "g", "h"];
const ary3 = ["i"];
const newAry = [...ary1, ...ary2, ...ary3];
console.log(newAry);
