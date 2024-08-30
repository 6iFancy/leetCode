/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const arrMap = new Map();
  arr.forEach((item) => {
    arrMap.has(item)
      ? arrMap.set(item, arrMap.get(item) + 1)
      : arrMap.set(item, 1);
  });
  const arrSet= new Set([...arrMap.values()]);
  return arrMap.size === arrSet.size;
};
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);
// @lc code=end
