/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const greatestIndependentSet = (root) => {
return (function highestNodes(node) {
  if (node === null) return 0;
  let skipLevel = highestNodes(node.left) + highestNodes(node.right)
  let withLevel = node.val;
  if (node.left !== null){
      withLevel += highestNodes(node.left.left) + highestNodes(node.left.right)
  }
  if (node.right !== null){
      withLevel += highestNodes(node.right.left) + highestNodes(node.right.right)
  }
  return Math.max(skipLevel, withLevel);
}) (root)}