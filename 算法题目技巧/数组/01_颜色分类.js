/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.unshift(0)
    } else if (nums[i] === 2) {
      nums.splice(i, 1)
      nums.push(2)
      i--
      len--
    }
  }

  return nums
};