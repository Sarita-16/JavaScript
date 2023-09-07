function createObject(keys, values) {
  let result = {};
  let length = Math.min(keys.length, values.length);
  for (let i = 0; i < length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}
debugger;
// Example usage:
let a = [1, 2, 3];
let b = ["ram", "shyam", "sita", "gita"];
let result = createObject(a, b);
console.log(result);
