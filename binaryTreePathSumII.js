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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    // result will be an array
  let result = [];
    // recurisve function which takes a node, a path array, a target
  if (!root) return result;
  (function recursivePathAdder(node, path, target) {
    path.push(node.val)
    // if node is leaf
    if(!node.right && !node.left){
      // if target - node value is 0 add value to path array
      if(target - node.val === 0){
       let currentPath = path.map(x=>x);
      // push path array to result array
        result.push(currentPath);
      }
    // else node is not a leaf 
    } else {
      // push value to path array
      // if has left child 
      if(node.left){
        // recurse on left child with target - path
        recursivePathAdder(node.left, path.map(x=>x), target-node.val)
      }
      // same for right child
      if(node.right){
        recursivePathAdder(node.right, path.map(x=>x), target-node.val)
      }
    }
  })(root, new Array, targetSum)
  // return result array 
  return result;
};