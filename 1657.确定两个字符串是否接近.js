/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  /**
   * 长度相同
   * 字符种类相同
   * 字符出现次数相同
   */
  if (word1.length != word2.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let index = 0; index < word1.length; index++) {
    const item1 = word1[index];
    const item2 = word2[index];
    map1.has(item1) ? map1.set(item1, map1.get(item1) + 1) : map1.set(item1, 1);
    map2.has(item2) ? map2.set(item2, map2.get(item2) + 1) : map2.set(item2, 1);
  }
  console.log("map1, map2");
  console.log(map1, map2);
  if (map1.size != map2.size) return false;
  for (const [key] of map1) {
    if (!map2.has(key)) return false;
  }
  console.log("for of end");
  const map3 = new Map();
  const map4 = new Map();
  console.log(map1.values());
  const map1Values = Array.from(map1.values());
  const map2Values = Array.from(map2.values());
  console.log(map1Values, map2Values);

  for (let index = 0; index < map1.size; index++) {
    const item1 = map1Values[index];
    const item2 = map2Values[index];
    map3.has(item1) ? map3.set(item1, map3.get(item1) + 1) : map3.set(item1, 1);
    map4.has(item2) ? map4.set(item2, map4.get(item2) + 1) : map4.set(item2, 1);
  }
  console.log("map3, map4");
  console.log(map3, map4);
  for (const [key, value] of map3) {
    if (!map4.has(key) || value != map4.get(key)) return false;
  }
};
const word3 = "cabbba";
const word4 = "abbccc";
closeStrings(word3, word4);
// @lc code=end
