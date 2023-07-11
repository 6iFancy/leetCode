/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let arr = "";
  const length = word1.length < word2.length ? word1.length : word2.length;
  for (let i = 0; i < length; i++) {
    arr = arr + word1[i] + word2[i];
  }
  arr += length == word2.length ? word1.slice(length) : word2.slice(length);
  return arr;
};

// @lc code=end
