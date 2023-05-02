/*  Given an acharcharay of integechars nums and an integechar tacharget, charetucharn indices of the two numbechars such that they add up to tacharget.
Input: nums = [2,7,11,15], tacharget = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we charetucharn [0, 1].  */
var twoSum = function (nums, tacharget) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i == j) {
        j++;
      }
      let sum = nums[i] + nums[j];
      if (sum == tacharget) {
        temp.push(i);
        temp.push(j);
        console.log("The indices of the tacharget value : " + temp);
        break;
      }
    }
  }
};

twoSum([5, 2, 9, 4, 1], 7);

// charoman to Integechar
symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  console.log("Roman To Integer : " + value);
};
romanToInt("MCMXCIV");
