/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const posarr = [-1];
  for (let i = 0; i < nums.length; i++) {
    nums[i] == 0 && posarr.push(i);
  }
  let max = k >= posarr.length - 1 ? nums.length : k;
  debugger;
  posarr.push(nums.length);
  for (let i = 1; i < posarr.length - k; i++) {
    const temp = posarr[i + k] - posarr[i - 1] - 1;
    if (max < temp) {
      max = temp;
    }
  }
  //   let i = 0, // 当前位置
  //     j = 0, // 几个0
  //     l = 0, // 起始位
  //     max = k > nums.length ? nums.length : k;
  //   while (l < nums.length - k) {
  //     j = 0;
  //     i = l;
  //     while (j < k && i < nums.length) {
  //       if (nums[i] == 0) j++;
  //       i++;
  //     }
  //     while (j == k && i < nums.length && nums[i] == 1) {
  //       i++;
  //     }
  //     if (max < i - l) max = i - l;
  //     l++;
  //     debugger;
  //   }
  console.log(max);
  return max;
};
// @lc code=end
