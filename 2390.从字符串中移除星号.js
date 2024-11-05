/*
 * @lc app=leetcode.cn id=2390 lang=javascript
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let arr = [];
  for (let char of s) {
    char == "*" ? arr.pop() : arr.push(char);
  }
  return arr.join("");
};
const str = "leet**cod*e";
console.log(removeStars(str));

// @lc code=end
