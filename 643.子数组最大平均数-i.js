/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = [0];
  for (let index = 0; index < k; index++) {
    sum[0] += nums[index];
  }
  let i = 1;
  let j = k;
  while (j < nums.length) {
    sum[i] = sum[i - 1] + nums[j] - nums[i - 1];
    i++;
    j++;
  }
  return Math.max(...sum) / k;
};
// @lc code=end
