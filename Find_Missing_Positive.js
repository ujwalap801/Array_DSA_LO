/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let n = nums.length;

  for (let i = 0; i < n; ) {
    let element = nums[i];
    let correctIndex = element - 1;

   
    if (element > 0 && element <= n && nums[correctIndex] !== element) {
     
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  // Second pass: find first missing
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers are in place
  return n + 1;
};
