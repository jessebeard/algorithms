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
 * @return {number[][]}
 */

// lets try an iterative solution first

// I think we will again use a stack for the nextlevel
// traverse the currentLevel (stack) 
// add all nodes to a stack, nextLevel
// then push all values of nextLevel into an array 
// also push the nodes into the now empty currentLevel stack
// continue until both stacks are empty 

// NOTE: the result matrix will need to have the root value 
// pushed into it before the iterative process begins.



var levelOrderIterative = function(root) {
  let resultMatrix = [];
  if (!root) return resultMatrix;
  let currentLevel = [root];
  resultMatrix.push([root.val])
  do {
    let nextLevel = [];
    let currentLevelOrderedValues = [];
    while(currentLevel.length > 0) {
      const currentNode = currentLevel.pop();
      if(currentNode.right) nextLevel.push(currentNode.right);
      if(currentNode.left) nextLevel.push(currentNode.left);
    }
    while(nextLevel.length > 0) {
      let node = nextLevel.pop()
      currentLevelOrderedValues.push(node.val);
      currentLevel.push(node)
    }
    if(currentLevelOrderedValues.length > 0) resultMatrix.push(currentLevelOrderedValues);
  }while(currentLevel.length > 0);
  return resultMatrix;
};

// I was unhappy waith the overall "flow", and upon reflection
// recognized if the inner while loops flipped and created 
// currentLevel in the do-while, and started/checked on nextLevel.
// the result would be no messy delete loop, no lengthCheck
// and the entire function would be more readable.

// side note, this took <5 mins. 
var levelOrderIterative = function(root) {
  let resultMatrix = [];
  if (!root) return resultMatrix;
  let nextLevel = [root];
  do {
    let currentLevel = [];
    let currentLevelOrderedValues = [];
    while(nextLevel.length > 0) {
      let node = nextLevel.pop()
      currentLevelOrderedValues.push(node.val);
      currentLevel.push(node)
    }
    resultMatrix.push(currentLevelOrderedValues);
    while(currentLevel.length > 0) {
      const currentNode = currentLevel.pop();
      if(currentNode.right) nextLevel.push(currentNode.right);
      if(currentNode.left) nextLevel.push(currentNode.left);
    }
  }while(nextLevel.length > 0);
  return resultMatrix;
};
// much better 