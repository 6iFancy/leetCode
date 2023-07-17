/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const y = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = s.split("");
  const filterArr = arr
    .map((s, i) => {
      return { s, i };
    })
    .filter((f) => y.includes(f.s));

  for (let i = 0; i < filterArr.length; i++) {
    arr[filterArr[i].i] = filterArr[filterArr.length - 1 - i].s;
  }
  return arr.join("");
};
// @lc code=end
