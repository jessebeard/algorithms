// lc#101

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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    let result = true;
    // define recursive function, 1 nodes.
    if(!root.right && !root.left) return true;
    if((root.right && !root.left) || (!root.right && root.left)) return false;
    (function recursiveNodeChecker(left, right){
      // short circuit
      if(result){
        if(left.val !== right.val){
            result = false
        } else {
          if(left.left && right.right){
            recursiveNodeChecker(left.left, right.right);
          } else if ((left.left && !right.right) || (!left.left && right.right)){
              result = false;
          }
          if(left.right && right.left){
              recursiveNodeChecker(left.right, right.left)
          } else if ((left.right && !right.left) || (!left.right && right.left)){
              result = false;
          }  
        }
      }
    })(root.left, root.right);
    return result;
    // if funciton passes, return true.
};