/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let max = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      max++;
    }
  }
  let vowelNum = max;
  for (let i = 1; i <= s.length - k; i++) {
    vowels.includes(s[i - 1]) && vowelNum--;
    vowels.includes(s[i + k - 1]) && vowelNum++;
    console.log(i - 1, s[i - 1], i + k - 1, s[i + k - 1], vowelNum);
    max = vowelNum > max ? vowelNum : max;
  }
  return max;
};
// @lc code=end
