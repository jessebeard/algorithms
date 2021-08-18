var addTwoNumbers = function(l1, l2) {
  const createListNode = (t, b, c, l) => {
    if(!t && !b && !c) return;
    let newNode = new ListNode(0);
    let total;
    if(t && !b )  {
      total = c?t.val+1:t.val;
    } else if (!t && b) {
      total = c?b.val+1:b.val
    } else if (!t && !b && c){
      total = 1
    } else {
      total = c?t.val+b.val+1:t.val+b.val
    }
    let isCarry = ~~((total)/10)
    newNode.val = total % 10

    l.next = newNode; 
    return createListNode((t?t.next:null), (b?b.next:null), isCarry, newNode);
  }
  let result = new ListNode(0);
  createListNode(l1, l2, false, result)
  return result.next ;
};
