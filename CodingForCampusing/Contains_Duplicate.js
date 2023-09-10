/*  -------------------------------------------------
Using Loops
-----------------------------------------------    */
let containsDuplicate = function (nums) {
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        flag = 1;
        break;
      }
    }
  }
  if (flag == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};
containsDuplicate([1, 2, 3, 4, 5]);

/*  ------------------------------------------------
Using set
----------------------------------------------    */
let Duplicate = function (arr) {
  const s = new Set(arr);
  console.log(s.size !== arr.length);
};
Duplicate([8, 5, 0, 4, 0]);
