/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let start = 0;
  for (let i = 1; i <= chars.length; i++) {
    if (i == chars.length || chars[i] != chars[start]) {
      let num = i - start;
      if (num > 1) {
        const nums = String(num).split("");
        chars.splice(start + 1, num - 1, ...nums);
        i = start + nums.length + 1;
      }
      start = i;
    }
  }
  return chars.length;
};
// @lc code=end
