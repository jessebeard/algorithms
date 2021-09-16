// lc 112
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 13 min
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    // create result boolean for short circuit operation
    let result = false;
    (function recursiveNodeAdder(node, total) {
        // if result is not true
        if(!result){
          // add node value to total
          total += node.val
          // if node is a leaf 
          if(!node.left && !node.right){
            // if total equals target, result set to true
            if(total === targetSum) result = true;
          // else node is not leaf
          } else {
            // if left child exists, recurse
            if(node.left) recursiveNodeAdder(node.left, total)
            // if right child exists, recurse
            if(node.right) recursiveNodeAdder(node.right, total)
          }
        }
    })(root, 0)
    return result
};

/* 

This answer works, but there is a better answer still

*/

