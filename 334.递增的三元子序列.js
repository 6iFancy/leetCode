/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }
  let first = nums[0],
    second = Number.MAX_VALUE;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (num > second) {
      return true;
    } else if (num > first) {
      second = num;
    } else {
      first = num;
    }
  }
  return false;
};
// @lc code=end
