/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let m = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let f1 = i - 1 >= 0 ? flowerbed[i - 1] : 0;
    let f2 = i + 1 < flowerbed.length ? flowerbed[i + 1] : 0;
    if (!(flowerbed[i] + f1 + f2)) {
      flowerbed[i] = 1;
      m++;
    }
  }
  return n <= m;
};
// @lc code=end
