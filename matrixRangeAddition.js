/***
 *****Prompt*****
You are given an m x n matrix M initialized with
all 0's and an array of operations ops, 
where ops[i] = [ai, bi] 
means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
Count and return the number of maximum integers 
in the matrix after performing all the operations.

 

*****Example*****

0 | 0 | 0       1 | 1 | 0       2 | 2 | 1
0 | 0 | 0   =>  1 | 1 | 0  =>   2 | 2 | 1
0 | 0 | 0       0 | 0 | 0       1 | 1 | 1


Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
Example 3:

Input: m = 3, n = 3, ops = []
Output: 9
 

*****Constraints*****

1 <= m, n <= 4 * 104
0 <= ops.length <= 104
ops[i].length == 2
1 <= ai <= m
1 <= bi <= n
***/


var maxCount = function(m, n, ops) {
  if(ops.length === 0) return m * n 
  let uniqueOps = Array.from(new Set(ops));
  let maxArea = uniqueOps.reduce(([x,y],c)=> [Math.min(x,c[0]), Math.min(y,c[1])])
  return maxArea[0] * maxArea[1];
};

///or in one line,broken up here for legibility
const maxCount1liner = (m,n,ops) => (
  Array.from(new Set(ops))
    .reduce(([x,y],c)=> [Math.min(x,c[0]), Math.min(y,c[1])], [m,n])
    .reduce((a,c) => a * c , 1)
)

// note: I really feel like I'm getting the hang of recognizing and implementing
// greedy algorithms, I had this entire problem finishied in less than 15 minutes
// from first looking at it. Yay me!
