/* 
This solution beat all others at the time of writing for memory usage, and 77% for run time. 
https://leetcode.com/submissions/detail/515983042/?from=explore&item_id=3799

***** Prompt *****
An n-bit gray code sequence is a sequence of 2n integers where:

Every integer is in the inclusive range [0, 2n - 1],
The first integer is 0,
An integer appears no more than once in the sequence,
The binary representation of every pair of adjacent integers differs by exactly one bit, and
The binary representation of the first and last integers
differs by exactly one bit.
Given an integer n, return any valid n-bit gray code sequence.

 * @param {number} n
 * @return {number[]}
 *
 * simple pattern: each additional bit goes backwards through the results with the bit tacked on. 
 *  e.x. 000,001,011,010 (think 0, 1, 11, 10)
 *       110,111,101,100 (now backwards, 10, 11, 1, 0)
 *
 */


var grayCode = function(n) {
  let resultArr = [0,1]
  if (n === 1) return resultArr;
  for (let i = 1; i < n; i += 1){
    let currentBinaryIteration = Math.pow(2, i)
    let iterationResultsArr = []
    let numberIterationsThisCycle = resultArr.length
    for (let j = numberIterationsThisCycle - 1; j >= 0; j -= 1) {
      iterationResultsArr.push(currentBinaryIteration | resultArr[j])
    }
    resultArr = resultArr.concat(iterationResultsArr);
  }
  return resultArr;
};

