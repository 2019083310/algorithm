/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let ret = 0
  let upRets = [0] // 第一行第一列特殊边界处理

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      let top = isNaN(upRets[j]) ? Number.MAX_SAFE_INTEGER : upRets[j] // 是否为第一行，如果是，则不能由上侧来，只能由左侧
      let left = isNaN(upRets[j - 1]) ? top : upRets[j - 1] // 是否为第一列，如果是，则不能由左侧来，只能由上侧
      ret = Math.min(top, left) + grid[i][j]
      upRets[j] = ret
    }
  }
  return ret

}