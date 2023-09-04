/*  ----------------------------------------------------------------------------------
slice() method :  Extract a part of an array and returns a new array containing the 
extracted elements. It does not change the original array.
---------------------------------------------------------------------------------   */
const arr = ["@", "50", "Sarita", "skm", "4", "BTS", "0", "CU"];
let newArr = arr.slice(0, 5);
console.log(newArr);

/*  ------------------------------------------------------
For Loop
----------------------------------------------------    */
const ar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const result = [];
for (let i = 0; i < 6; i++) {
  result.push(ar[i]);
}
console.log(result);

/*  --------------------------------------------------------------------------------
splice() method :  To add or remove elements from an array. 
We can use it to remove all elements after the first N elements.
-------------------------------------------------------------------------------   */
const bts = ["RM", "Jin", "Suga", "JHope", "Jimin", "V", "JK"];
const maknae = bts.splice(4, 7);
console.log(maknae);

/*  -------------------------------------------------------------------------------
filter() method : It iterates over the entire array.
------------------------------------------------------------------------------   */
const ary = ["a", "b", "c", "d", "e", "f", "g", "h", "y", "z"];
const newAry = ary.filter((ele, index) => index < 4);
console.log(newAry);
