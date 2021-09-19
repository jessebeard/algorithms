/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 
 * Prompt:
 * Construct a binary tree given the preorder and post order traversal
       * @param {number[]} preorder
       * @param {number[]} inorder
       * @return {TreeNode}
**/


 var buildTree = function(preorder, inorder) {
    let root = new TreeNode(preorder[0]);
    let preorderIndex = 1;
    let stack = [root];
    let stackIndex = 0;
    let inorderIndex = 0;
    while(preorderIndex < preorder.length){
      let isLeft = true;
      let parentNode = stack[stackIndex];   
      let currentNode = new TreeNode(preorder[preorderIndex]);
      let cleanStack = parentNode.val === inorder[inorderIndex];
      while(cleanStack){
        isLeft = false
        parentNode = stack[stackIndex]
        stack.pop();
        stackIndex -= 1;
        inorderIndex += 1;
        if(stackIndex >= 0){
          cleanStack = stack[stackIndex].val === inorder[inorderIndex]
        } else {
          cleanStack = false
        }
      }
      if(isLeft) {
        parentNode.left = currentNode
      } else {
        parentNode.right = currentNode
      }
      stack.push(currentNode);
      stackIndex++
      preorderIndex++
  }
  return root;
};
