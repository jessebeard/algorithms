/**
 * @param {number[]} nums
 * @return {number}
 */


// lc 162
// completed in ~9 mins 

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;
    while (left + 1 < right) {
      let mid = ~~((left + right) / 2);
      let isPeak = nums[mid-1] < nums[mid] && nums[mid] > nums[mid + 1];
      if (isPeak) return mid;
      if (nums[mid] < nums[mid - 1]) right = mid;
      else left = mid;
    }
    if (nums[left] > nums[right]) return left;
    return right;
  };