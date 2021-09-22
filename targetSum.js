/***
 * Prompt *
 * You are given an integer array nums and an integer target
 * 
 * You want to build an expression out of nums by adding one of the symbols 
 * '+' and '-' before each integer in nums and then concatenate all the integers.
 * 
 * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 
 * and concatenate them to build the expression "+2-1".
 * Return the number of different expressions that you can build, 
 * which evaluates to target.
 */

// fairly straight forware solution with memoization. 
// first step was to build a recursive solution that returned the answer
// this wouldn't pass because its exponential time, where it branches at every
// index O(2^nums)
// space complexity would be  the same. 

var findTargetSumWays = function(nums, target) {
  let memo = new Map();
  return (function recurse (index, total) {
    if (index === nums.length) return total === target ? 1 : 0
    let current = nums[index];
    return result = recurse(index + 1, total + current) + recurse(index + 1, total - current);
   })(0,0);
};
 
// my next step was to add a memo for each index with a same total:
// if we have already gone from a given total to the end from a certain
// step, we can shortcut that with a hash map.

var findTargetSumWays = function(nums, target) {
  let memo = new Map();
  return (function recurse (index, total) {
    if (index === nums.length) return total === target ? 1 : 0
    let key = `${index}:${total}`
    if (memo.has(key)) return memo.get(key)
    let current = nums[index];
    let result = recurse(index + 1, total + current) + recurse(index + 1, total - current);
    memo.set(key, result);
    return result;
   })(0,0);
};



