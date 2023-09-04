/*  ****************************************************************************************************************
In JavaScript, there are two ways to copy objects:
shallow copy & deep copy.
Shallow copy : creates a new object with references to the same memory locations as the original object.
deep copy : creates a new object with new memory locations for all of its properties & nested objects or arrays.
****************************************************************************************************************   */

/*  ------------------------------------------------------------
spread operator : Concise & easy way to copy an array by value.
----------------------------------------------------------    */
const originalArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
const cloneArr = [...originalArr];
console.log(cloneArr);

/*  ---------------------------------------------------------------
Array.from() method : Creates a new array from an existing array, 
using an optional mapping function to transform the values 
in the new array.
---------------------------------------------------------------  */
const orgArr = ["a", "b", "c", "d", "e", "x", "y", "z"];
const result = Array.from(orgArr);
console.log(result);

/*  --------------------------------------------------------------
slice() method : Create a copy of an array by its value. 
This method creates a new array with a subset of the elements
from the original array.
------------------------------------------------------------    */
const arr = ["$", "!", "%", "#", "@", "*", "&"];
const newArr = arr.slice(arr);
console.log(newArr);

/*  --------------------------------------------------------------
structuredClone() method
-------------------------------------------------------------   */
const ary = ["namjooni", "jini", "lil meow", "hobi", "jimini", "v", "jkyyy"];
const newAry = structuredClone(ary);
console.log(newAry);
