/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const map = new Map();
  const col = [];
  for (let i = 0; i < grid.length; i++) {
    let rowStr = "";
    let colStr = "";
    for (let j = 0; j < grid.length; j++) {
      rowStr += grid[i][j] + ",";
      colStr += grid[j][i] + ",";
    }
    map.set(rowStr, (map.get(rowStr) || 0) + 1);
    col.push(colStr);
  }
  let ans = 0;
  col.forEach((item) => {
    if (map.has(item)) ans += map.get(item);
  });
  console.log(map, col, ans);
};
const grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
equalPairs(grid);
// @lc code=end
