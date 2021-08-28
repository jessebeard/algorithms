/***
 *****Prompt***** 
 * One way to serialize a binary tree is to use preorder traversal. 
 * When we encounter a non-null node, we record the node's value. 
 * If it is a null node, we record using a sentinel value such as '#'.
         9
        / \
       3   2
      /\    \
     4  1    6
For example, the above binary tree can be serialized to t
he string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.

Given a string of comma-separated values preorder, 
return true if it is a correct preorder traversal serialization of a binary tree.

It is guaranteed that each comma-separated value in the string 
must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid.

For example, it could never contain two consecutive commas, such as "1,,3".
Note: You are not allowed to reconstruct the tree.

*****Examples*****

Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true

Input: preorder = "1,#"
Output: false

Input: preorder = "9,#,#,1"
Output: false
 

*****Constraints*****
1 <= preorder.length <= 104
preorder consist of integers in the range [0, 100] and '#' separated by commas ','.
***/


// an iterative solution that is easy on memory, just iterates through the array, nothing on the call stack

var isValidSerialization1 = function(preorder) {
    if(preorder === '#') return true
    let pArr = preorder.split(',');
    let isValid = pArr[0] !== '#'
    let i = 1;
    let expected = 2;
    while(isValid && i<pArr.length && expected !== 0){
      if(pArr[i] !== '#'){
        i++, expected++;
      } else {
          i++, expected--;
      }
      if(expected<0) isValid = false;
    }
    if(expected !== 0 || i !== pArr.length) isValid = false;
    return isValid;
};
  

// A recursive solution that I would expect to be faster, but at the cost of loading up the callstack 

const validLength = (a,i) => { // function should return length of valid array
  if(i>=a.length) {  // if reached the end return a failing value, also short circuit
    return 100001;   // 
  } else if(a[i] === "#") { // if # pass next index 
    return i+1;
  } else {
    let left = validLength(a, i+1); // is number, check next, continue until end of numbers
    return validLength(a, left); //catch and return final #
   }
}
const isValidSerialization = function(preorder) {
  let pArr = preorder.split(',');
  const end = validLength(pArr, 0);
  return end === pArr.length 
}
  
  