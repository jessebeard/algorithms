/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// [9,3,15,20,7];
// [9,15,7,20,3];


var buildTree = function(inorder, postorder) {
    // root = postorder.pop()
    let root = new TreeNode(postorder.pop());
    // create not children stack []
    let nodeStack = [root];
    let stackIndex = nodeStack.length-1
    let inorderValue = inorder.pop();
    while(postorder.length) {
      let currentNode = new TreeNode(postorder.pop());
      let parentNode =  nodeStack[stackIndex];
      let isLeftChild = false;
      let isVisited = inorderValue === parentNode.val
      while(isVisited) {
        isLeftChild = true;
        inorderValue = inorder.pop();
        parentNode = nodeStack.pop();
        stackIndex--;
        if(stackIndex > -1) {
          isVisited = inorderValue === nodeStack[stackIndex].val
        } else { 
          isVisited = false;
        }
      }
      console.log(currentNode, parentNode)
      if(isLeftChild){
        parentNode.left = currentNode;
      } else {
        parentNode.right = currentNode
      }
      nodeStack.push(currentNode);
      stackIndex++;
      
    }
    return root
  }
    