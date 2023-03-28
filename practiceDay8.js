// Find 2nd largest element from an Array
let secondLargest = function (arr) {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1); // position : arr.indexOf(max) ; How many number wants to delete : 1
  max = Math.max(...arr);
  console.log("2nd largest element in an Array is : " + max);
};
secondLargest([8, 10, 5, 3, 9, 4, 2, 0]);

// Remove duplicates from an Array using foreach() method : [1,1,3,9,3] --> [1,3,9]
let duplicates = function (arr) {
  let count = {};
  let arr1 = [];
  arr.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
      arr1.push(element);
      //console.log(element);
    }
  });
  console.log(
    "\nAfter eleminating the duplicates value from the Array using foreach & slice() method is : "
  );
  console.log(arr1);
};
duplicates([1, 1, 3, 9, 3]);

// Remove duplicates from an Array using set() method
let duplicate = function (arr) {
  let unique = [...new Set(arr)]; //set() method : create collections of unique values
  console.log(
    "\nAfter eleminating the duplicates value the Array using set() method is : "
  );
  console.log(unique);
};
duplicate([1, 1, 3, 9, 3, 8, 9, 10]);
