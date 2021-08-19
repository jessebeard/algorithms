/***
*****Prompt*****
Given the root of a binary tree, split the binary tree into two subtrees 
by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. 
Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.

 

*****Examples*****
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the edge between 1-2 fand get 2 binary trees(2-4-5) (1-3-6) with sum 11 and 10. Their product is 110 (11*10)

Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the edge and get 2 binary trees(1-2-3)(4-5-6) with sum 15 and 6.Their product is 90 (15*6)

Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025

Input: root = [1,1]
Output: 1
 

*****Constraints*****

The number of nodes in the tree is in the range [2, 5 * 104].
1 <= Node.val <= 104  

*****Hint*****
If we know the sum of a subtree, the answer is max( (total_sum - subtree_sum) * subtree_sum) in each node.


***/


var maxProduct = function(root) {
    let totalSum = 0
    const sumLeaves = (r) => {                 
      totalSum += r.val;
      if(r.left !== null) sumLeaves(r.left)
      if(r.right !== null) sumLeaves(r.right)
    };
    sumLeaves(root)
    let maxProd = 1;
    const findMaxProd = (head, m) => {
     if(head === null) return 0;
     let r = findMaxProd(head.right, m)
     let l = findMaxProd(head.left, m)
     let curr = l + r + head.val;
     maxProd = Math.max(maxProd, curr * (totalSum-curr))
     return curr
    } 
    findMaxProd(root, maxProd)
    
    return maxProd % (10**9 + 7);
};
