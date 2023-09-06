let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"];

// Checking if the array lengths are same
// and none of the array is empty
function convertToObj(a, b) {
  if (a.length != b.length || a.length == 0 || b.length == 0) {
    return null;
  }

  // Using reduce() method
  debugger;
  let object = a.reduce((acc, element, index) => {
    return {
      ...acc,
      [element]: b[index],
    };
  }, {});

  return object;
}
console.log(convertToObj(a, b));
