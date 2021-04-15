/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// notes: less than 200 nodes.
//        must preserve relative order.
//      < x | partition wall | >= x 
// [1] https://kangax.github.io/compat-table/es6/

var partition = function(head, x) {
  // we create two tails and heads, for the two partitions
  this.newHead = new ListNode();
  this.tail = this.newHead;
  this.headGTOET = new ListNode();
  this.tailGTOET = this.headGTOET;

  while (head !== null){
    const currentNode = new ListNode(head.val)
    if ( head.val < x ) {
      this.newHead
      if ( this.tail === undefined ) {
        this.newHead = currentNode;
        this.tail = currentNode;
      } else { 
        this.tail.next = currentNode
        this.tail = this.tail.next
      }
    } else {
      if ( this.tailGTOET === undefined ) {
        this.headGTOET = currentNode;
        this.tailGTOET = currentNode;
      } else { 
        this.tailGTOET.next = currentNode
        this.tailGTOET = this.tailGTOET.next
      }
    } 
    head = head.next
  }
  this.tail.next = this.headGTOET.next;
  return this.newHead.next
};

// results https://leetcode.com/submissions/detail/480847162/
