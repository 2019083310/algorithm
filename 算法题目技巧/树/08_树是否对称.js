/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const check = (p, q) => {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}

var isSymmetric = function (root) {
  return check(root, root)
};