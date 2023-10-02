let arr = ["5", "sarita", "#", "7", true, null, [0]];
console.log(arr);

// Iterate all the elements
for (let i of arr) {
  console.log(i);
}

// Add an element to the end of the array
arr.push("Mollah");
console.log(arr);

// Add an element in the begining of the array
arr.unshift(100);
console.log(arr);

// Remove an element from the end of the array
arr.pop();
console.log(arr);

// Remove an element from the begining of the array
arr.shift();
console.log(arr);

// Map : It applies a given function on all the elements of the array and returns the updated array.
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = ar.map((i) => i * 5);
console.log(newArr1);

// Reduce : All the elements of the array to a single value by repeatedly applying a function.
let newArr2 = ar.reduce((sum, item) => sum + item, 0);
console.log(newArr2);

// Filter : It filters the elements of the array and returns the array which satisfy the condition.
let newArr3 = ar.filter((i) => i % 2 == 0);
console.log(newArr3);

// Concat : This method does not change the existing arrays, but instead returns a new array.
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["v", "w", "x", "y", "z"];
let newArr4 = arr1.concat(arr2);
console.log(newArr4);

// Slice : Returns selected elements in an array, as a new array.
let newArr5 = newArr4.slice(4, 6); // -1 = z, -2 = y & so on
console.log(newArr5);

// Splice :  Adds & removes array elements. It overwrites the original array.
arr1.splice(2, 0, "Sarita"); //Inserts at index 2
console.log(arr1);
arr2.splice(1, 2); // remove at index 1, 2 elements
console.log(arr2);
ar.splice(3, 1, "BTS"); // Replaces 1 element at index 3
console.log(ar);
