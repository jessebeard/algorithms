/***
 
*****Prompt*****
Given a sorted integer array nums and an integer n, 
add/patch elements to the array such that any number 
in the range [1, n] inclusive can be formed by the sum of some elements in the array.

Return the minimum number of patches required.

*****Examples**** 

Input: nums = [1,3], n = 6
Output: 1

Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.


Input: nums = [1,5,10], n = 20
Output: 2
Explanation: The two patches can be [2, 4].


Input: nums = [1,2,2], n = 5
Output: 0
 

*****Constraints*****

1 <= nums.length <= 1000
1 <= nums[i] <= 104
nums is sorted in ascending order.
1 <= n <= 231 - 1

****Pattern/Thoughts*****

as long as you start with 1, as you iterate through the sorted array, 
as long as the next number is less than running total + 1, you can continue
to create all possible subsequences.

Consider for a moment the effiency of binary representation. [1,2,4,8,16] 
gives you in combination.
then recognize that at any point in the array you can patch in the next "binary"
representation in the array. 
For example, given
nums = [1,2,2]
n = 9

at the end of the array, you have a running total of 5, so the next "binary" 
step is 6.
voila, that the pattern to follow, so just code it up 

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

/*thoughts---
numsArr is sorted, which is a big hint.
*/

var minPatches = function(nums, n) {
    let i = 0;
    let runningSum = 0;
    let patches = 0;
    //follow this pattern until we sum to n
    while(runningSum < n) {
        // if we can't create nums[i] or we've reached the end of nums and can't create n.
        // we create nums[i] only if it is lower or equal to runningSum+1.
        if(runningSum+1 < nums[i] || (i >= nums.length && runningSum+1 < n)) {
            // we need a patch, so iterate the counter
            patches++;
            // and patch the next number in the sequence
            runningSum += (runningSum+1);
        } else {
            // otherwise we are continuing through a suitable array,
            // so add that number in the sequenc to the running sum, 
            runningSum += nums[i];
            // and iterate to the next number
            i++;
        }
    }
    return patches;
};