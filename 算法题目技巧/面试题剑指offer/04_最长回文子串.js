/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 暴力解法
  let res = 1
  let maxLen = s[0]
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const str = s.slice(i, j + 1)
      if (isPalindrome(str) && str.length > res) {
        res = str.length
        maxLen = str
      }
    }
  }
  return maxLen
};

function isPalindrome(s) {
  let end = s.length - 1
  for (let i = 0; i <= end; i++) {
    if (s[i] !== s[end]) {
      return false
    }
    end--
  }
  return true
}