/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// This problem specifies a perfect tree, 
// should work for an imperfect tree too. 

var connect = function(root) {
    if(!root) return root
    let stack = [root];
    while(stack.length) {
        let nextLevel = []
        for (let i = 0; i < stack.length; i += 1) {
        let node = stack[i]
        if(node.left) nextLevel.push(node.left);
        if(node.right) nextLevel.push(node.right);
        if(i < stack.length-1){
            node.next = stack[i+1]  
        } else {
            node.next = null
        }
        }
        stack = nextLevel;
    }
    return root  
};