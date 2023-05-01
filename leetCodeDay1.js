/*  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].  */

var twoSum = function (nums, target) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i == j) {
        j++;
      }
      let sum = nums[i] + nums[j];
      if (sum == target) {
        temp.push(i);
        temp.push(j);
        console.log("The indices of the target value : " + temp);
        break;
      }
    }
  }
};

twoSum([5, 2, 9, 4, 1], 7);
