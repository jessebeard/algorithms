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

/* 
recursive solution, again, trivial to implement
*/

const inorderTraversalRecursive = (root) => {
  if(!root) return [];
  let result = [];
    (function recursiveTraversal(node, resultArray) {
      if(node.left) recursiveTraversal(node.left, resultArray)
      resultArray.push(node.val)
      if(node.right) recursiveTraversal(node.right, resultArray)
    })(root, result);
  return result;
}


/* 
sort of similar to my first iterative attempt at solving preorder,
uses a Set to keep track of where its been and a stack to 
keep track of where it needs to go.
*/


var inorderTraversal = function(root) {
  if (root === null) {
      return [];
  }
  
  const queue = [root];
  
  const result = [];
  const visited = new Set();
  
  const addToResult = (nodeToAdd) => {
      if (visited.has(nodeToAdd)) {
          return;
      }
      
      result.push(nodeToAdd.val);
      visited.add(nodeToAdd);
          }
  
  while(queue.length > 0) {
      let node = queue[queue.length - 1];
      
      if (node.left && !visited.has(node.left)) {
          queue.push(node.left); 
      } else if (node.right && !visited.has(node.right)) {
          addToResult(node);
          queue.push(node.right); 
      } else {
          addToResult(node);
          queue.pop(); 
      }
  } 
  
  return result;
};