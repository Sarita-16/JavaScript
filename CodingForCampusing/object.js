const obj = {
  name: "SaRiTa",
  age: 22,
  favColor: "Blue",
  "is-student": true,
};
console.log(obj);
console.log(obj.name); // .dot notetion
console.log(obj["is-student"]); // [] bracket notation

// Addition a key-value pair to obj
obj.hobby = "drawing";
console.log(obj);

// Deletion
delete obj["is-student"];
console.log(obj);

// Add function as value
obj.sayMyName = function () {
  console.log(this.name);
};
obj.sayMyName();

// Objects Methods
/* 
1) .keys()
2) .values()
3) .entries()
*/

// Object.keys() : It's a static method returns an array.
console.log(Object.keys(obj));

// Object.values() : It's a static method returns an array.
console.log(Object.values(obj));

// Object.entries() : Return an array consisting of enumerable property [key, value] pairs which are passed as the parameter.
console.log(Object.entries(obj)[0]); // [0] = index
