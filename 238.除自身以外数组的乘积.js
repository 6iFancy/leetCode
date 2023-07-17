/*
 * @lc app=leetcode.cn id=238 lang=iavascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let length = nums.length,
    l = 1,
    r = 1,
    answer = new Array(length).fill(1);
  for (let i = 0; i < length; i++) {
    answer[i] *= l;
    answer[length - i - 1] *= r;
    l *= nums[i];
    r *= nums[length - i - 1];
  }
  return answer;
};
// @lc code=end
