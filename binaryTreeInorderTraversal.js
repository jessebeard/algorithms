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
 * @return {number[]}
 */

// 
/*
Iterative approach first:
Building on the idea of using a stack from PreorderTraversal
here we will populate a stack with the left hand nodes in 
one part of a loop and in the other part of a loop we 
will depopulate the stack, push in that value and check if it
has a right side value. 
*/

var inorderTraversalIterative = function(root) {
  // all objects are passed by ref, so root is really a pointer
  let result = [];
  let stack = [];
  while(stack.length !== 0 || root){ 
   if(root){
     stack.push(root)
     root = root.left
   } else {
       root = stack.pop()
       result.push(root.val)
       root = root.right
   }
  }
  return result
};
