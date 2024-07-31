/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let sum = 0,
    max = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    max = Math.max(max, sum);
  }
  console.log(max);
  return max;
};
// @lc code=end
