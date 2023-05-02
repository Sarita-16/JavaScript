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
let romanToInt = function (word) {
  let sum = 0;
  let value = 0;
  for (let i = 0; i < word.length; i++) {
    let char = [];
    char = word.split("");
    if (char[i] == "I") {
      value = 1;
    } else if (char[i] == "V") {
      value = 5;
    } else if (char[i] == "X") {
      value = 10;
    } else if (char[i] == "L") {
      value = 50;
    } else if (char[i] == "C") {
      value = 100;
    } else if (char[i] == "D") {
      value = 500;
    } else if (char[i] == "M") {
      value = 1000;
    }
    sum = sum + value;
  }
  console.log("Roman to Integechar : " + sum);
};
romanToInt("MCMXCIV");
