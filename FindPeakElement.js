// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. 
// If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

// lc 162 | time ~7 min 
// mistakes: typo'd nums -> num, repeated return left at the bottom

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left + 1 < right) {
        let mid = ~~((left + right) / 2);
        if (nums[mid]> nums[mid - 1]) left = mid;
        else right = mid;
    }
    if (nums[left] > nums[right]) return left;
    else return right;
};
