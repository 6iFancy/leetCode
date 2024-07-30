/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0,
    right = 0,
    num = 0,
    result = 0;
  while (right < nums.length) {
    num += 1 ^ nums[right];
    while (num > 1) {
      num -= 1 ^ nums[left];
      left++;
    }
    result = Math.max(result, right - left);
    right++;
  }
  return result;
  console.log(result);
};
// @lc code=end
