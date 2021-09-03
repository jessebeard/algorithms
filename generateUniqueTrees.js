/***

****Prompt****
Given an integer n, 
return all the structurally unique BST's (binary search trees), 
which has exactly n nodes of unique values from 1 to n. 
Return the answer in any order.

*****Examples****

1    1       2        3    3  
 \    \     / \      /    /
  3    2   1   3    2    1
 /      \          /      \ 
2        3        1        2

input: n=3
output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Input: n = 1
Output: [[1]]

 

Constraints:
1 <= n <= 8


***/
var generateTrees1 = function(n) {
   if (n === 0) {
       return [];
   }
    
    function buildTree(start, end) {
        if (start > end)  {
            return [null]
        };
        let result = [];
        
        for (let i = start; i<= end; i++) {
            const rightTrees = buildTree(i + 1, end);
            const leftTrees = buildTree(start, i-1);
            
            for(let left of leftTrees)  {
                for(let right of rightTrees)  {
                    const root = new TreeNode(i, left, right);
                    result.push(root);
                }
            }
        }
        return result;
        
    }
    
    return buildTree(1,n);
};


// I prefer a functional approach, but the performance really sucked here. I'll leave it anyway because I like it. 

var generateTrees = function(n) {
  const helper = (start, end) => (
    start <= end 
      ? Array.from({ length: end - start + 1 }, (_, i) => i + start)
        .reduce((a, elem) => helper(start, elem - 1)
        .reduce((a, x) => helper(elem + 1, end)
        .reduce((a, y) => [...a, new TreeNode(elem, x, y)], a), a), []) 
      : [null]
   )
  return helper(1,n)
};
