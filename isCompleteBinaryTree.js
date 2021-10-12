var isCompleteTree = function(root) {
  // essentially breadth first search
let stack = [root];
  // keep track of the last node in bfs
let wasNull = false;
while (stack.length > 0) {
  let nextStack = [];
  // if that node is null and a populated node
  // follows, return false.
  let levelSize = stack.length;
  for (let i = 0; i < levelSize; i += 1) {
    let current = stack.pop();
    if (!!current && wasNull) return false;
    if (!current) wasNull = true;
    else {
      nextStack.push(current.left);
      nextStack.push(current.right);
    }
  }
  stack = nextStack.reverse();
}
  // else return true.
return true;
};
