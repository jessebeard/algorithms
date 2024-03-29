t/***
*****Prompt*****
You are given two non-empty linked lists representing two non-negative integers.
 The most significant digit comes first and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*****Examples*****
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Input: l1 = [0], l2 = [0]
Output: [0]


*****Constraints*****

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

***/


var addTwoNumbers = function(l1, l2) {
  const createStringFromLL = (LL, s) => {
    let string = s + `${LL.val}`
    if(LL.next) return createStringFromLL(LL.next, string)
    else return string;
  }
  let top = BigInt(createStringFromLL(l1,''));
  let bottom = BigInt(createStringFromLL(l2,''));
  let result = BigInt(top + bottom);
  let resultArr = Array.from(result.toString()).map(x=>parseInt(x))
  let answer = new ListNode(0)
  const buildLLfromArr = (arr, i, LL) => {
    LL.val = arr[i]
    if(arr.length > i + 1){
    LL.next = new ListNode(0)
    buildLLfromArr(arr, i+1, LL.next)
    }
  }
  buildLLfromArr(resultArr, 0, answer)
  return answer;
};
