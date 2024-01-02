/*
 * @lc app=leetcode.cn id=1679 lang=javascript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let i = 0,
    j = nums.length - 1,
    count = 0;
  nums.sort((a, b) => a - b);
  while (i < j) {
    if (nums[i] + nums[j] == k) {
      i++;
      j--;
      count++;
    } else if (nums[i] + nums[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return count;
};
// @lc code=end
