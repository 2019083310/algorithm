/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // BFS思想
  let queue = [n];
  let visited = {};
  let level = 0;
  while (queue.length > 0) {
    level++;
    for (let i = 0, len = queue.length; i < len; i++) {
      let cur = queue.shift()
      for (let j = 1; j * j <= cur; j++) {
        const tmp = cur - j * j;
        if (tmp === 0) return level;
        if (!visited[tmp]) { //避免相同值的节点进行重复操作
          visited[tmp] = true
          queue.push(tmp)
        }
      }
    }
  }
};