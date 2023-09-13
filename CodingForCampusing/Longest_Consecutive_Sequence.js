const longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    // Check if num-1 exists in the set. If not, then num is the start of a new streak.
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Increment the current streak as long as the next consecutive number exists in the set.
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update the longest streak if the current streak is longer.
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  console.log(longestStreak);
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
