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

/***
 * Discussion *
 * I like to think of postorder as a mirrored
 * preorder
 *    i.e. instead of going left we go right, and at the 
 * end we reverse "backwards preorder" to get postorder.
*/

var postorderTraversalIterative2 = function(root) {
  let result = [];
  if(root){
    let untraversedStack = [root] // need to be traversed
    let orderedStack = []; // post order of nodes
    while(untraversedStack.length > 0){
      let node = untraversedStack.pop();
      if(node.left) untraversedStack.push(node.left);
      if(node.right) untraversedStack.push(node.right) 
    }
  }
  return result.reverse();
};


