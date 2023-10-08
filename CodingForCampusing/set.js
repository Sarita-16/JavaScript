const set = new Set([1, 2, 3]);

// Add an element
set.add(4);

// To check an existing element
console.log("Present : " + set.has(2));

// Delete an element
set.delete(4);

// To check the length of Set
console.log("Size : " + set.size);

// Delete all the elements of Set
set.clear();

// print the outputs
for (let item of set) {
  console.log(item);
}
