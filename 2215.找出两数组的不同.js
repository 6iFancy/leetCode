/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const numbers1 = new Set(nums1);
  const numbers2 = new Set(nums2);
  const result = [
    [...numbers1].filter((item) => !numbers2.has(item)),
    [...numbers2].filter((item) => !numbers1.has(item)),
  ];
  return result;
};
findDifference([1, 2, 3], [2, 4, 6]);
// @lc code=end
