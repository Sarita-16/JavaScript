const map = new Map([
  ["a", 1],
  ["b", 2],
]);

// Add a new value
map.set("c", 3); // set = method

// exist in map
console.log(map.has("a"));

// delete a key value pair
map.delete("c");

// to check the no. of key value-pairs
console.log(map.size);

// delete all key value pairs
map.clear();

// print the map
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
