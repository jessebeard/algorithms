/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

/*thoughts---
numsArr is sorted, which is a big hint.
*/

var minPatches = function(nums, n) {
    let index = 0;
    let runningSum = 0;
    let patchCount = 0;
    //follow this pattern until we sum to n
    while(runningSum < n) {
        // if we can't create nums[index] or we've reached the end of nums and can't create n.
        // we create nums[index] only if it is lower or equal to runningSum+1.
        if(runningSum+1 < nums[index] || (index >= nums.length && runningSum+1 < n)) {
            patchCount++;
            // patchrunningSum the next number in the sequence.
            runningSum += (runningSum+1);
        // if we can create nums[index].
        } else {
            // we can create anything from current runningSum to (runningSum + nums[index]).
            runningSum += nums[index];
            index++;
        }
    }
    return patchCount;
};