/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

  let length = str1.length < str2.length ? str1.length : str2.length;

  for (let i = length; i > 0; i--) {
    if (str1.length % i == 0 && str2.length % i == 0) {
      const gcd = str1.slice(0, i);
      let gcd1 = gcd;
      let gcd2 = gcd;
      if (
        str1 ==  gcd1.repeat(str1.length / i) &&
        str2 == gcd2.repeat(str2.length / i)
      ) {
        return gcd;
      }
    }
  }
  return "";
};
// @lc code=end
