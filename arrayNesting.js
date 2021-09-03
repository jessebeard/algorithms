/***

You are given an integer array nums of length n 
where nums is a permutation of the numbers in the range [0, n - 1].

You should build a set 
s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... }
subjected to the following rule:

    The first element in s[k] starts with the selection of the element nums[k] of index = k.
    The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
    We stop adding right before a duplicate element occurs in s[k].

Return the longest length of a set s[k].

 

****Examples****

Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}

Input: nums = [0,1,2]
Output: 1

 

****Constraints****

1 <= nums.length <= 105
0 <= nums[i] < nums.length
All the values of nums are unique.

***/


var arrayNesting = function(nums) {
  let checked = new Array(nums.length).fill(-1)
  let count = 0 
  let i = 0;
  let longest = 0
  let solved = false;
  let nextIndex = 0
  let start = nums[nextIndex]
  while(i < nums.length && !solved){
    if(nums[nextIndex] === start){
      count = 0
      nextIndex = checked.indexOf(-1);
      start = nums[nextIndex]
      solved = longest  > (nums.length/2)+1
    }
    count += 1;
    checked[nextIndex] = nums[nextIndex];
    longest = Math.max(count, longest);
    nextIndex = nums[nextIndex];
    i += 1;
  }
  return longest;
};
