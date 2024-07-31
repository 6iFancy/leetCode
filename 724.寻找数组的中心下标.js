/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //   let left = 0,
  //     right = 0;
  //   for (const x of nums) {
  //     right += x;
  //   }
  //   const ans = nums.findIndex((item, i) => {
  //     left += nums[i - 1] || 0;
  //     right = right - item;
  //     return left == right;
  //   });
  //   console.log(ans);

  const total = nums.reduce((a, b) => a + b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] == total) {
      return i;
    } else {
      sum += nums[i];
    }
  }
  return -1;
};
// @lc code=end
