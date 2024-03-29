/***
*****Prompt*****
Suppose an array of length n sorted in ascending order
is rotated between 1 and n times. For example, 
the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

*****Examples*****
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

*****Constraints*****

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
 ***/


// returning to the problem after much BT practice

// lc 153 | 13 mins | 1 attempt/ 0 bugs | Medium | 24-9-21

var findMin = function(nums) {
 let left = 0;
 let right = nums.length - 1;
 while (left + 1 < right) {
   let mid = ~~((left + right) / 2);
   if (nums[left] > nums[right]) { // (sub) array is rotated
     if(nums[left] < nums[mid]) left = mid // left side is sorted
     else right = mid;
   }
   else return nums[left];  // (sub) array is sorted, last element smallest
 }
 if (nums[left] < nums[right]) return nums[left] 
 else return nums[right];
};

//My first approach, full recursive.
var findMin = function(nums, li, ri) {
    if(li === undefined){ 
      li = 0
      ri = nums.length-1;
      if(nums[li] <= nums[ri]) return nums[li];
    }
    if(li===ri) return nums[li];
    let mi = ~~((ri+li)/2)
    if(nums[mi] > nums[ri])return findMin(nums,mi+1,ri)
    else return findMin(nums,li,mi)
  };

// second approach, using a while loop
const findMin2 = (nums) =>{
    let ri = 0
    let li = nums.length - 1;
    
    while(ri < li) {
        let mi = Math.floor((ri + li) / 2);
        if(nums[mi] > nums[li]) {
            ri = mi + 1;
        } else {
            li = mi;
        }
    }
    
    return nums[ri];

}