/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //   let i = 0;
  //   let j = nums.length - 1;
  //   while (i <= j) {
  //     if (nums[i] == 0) {
  //       nums.splice(i, 1);
  //       nums.push(0);
  //       j--;
  //       i--;
  //     }
  //     i++;
  //   }
  let s = 0;
  nums.forEach((num) => {
    if (num != 0) {
      nums[s++] = num;
    }
  });
  for (let i = s; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
