const findMaxDepth = (root) =>{
  if (root === null) return 0
  let maxDepth = 1;
  let stack = [[root, 1]];
  while (stack.length > 0){
    let tuple = stack.pop();
    let [node, depth] = [tuple[0], tuple[1]];
    if (!node.right && !node.left) {
        maxDepth = Math.max(depth, maxDepth);
    } else {
        if (node.right) stack.push([node.right, depth + 1]);
        if (node.left) stack.push([node.left, depth + 1]);
    }
  }
  return maxDepth;
}


function solution(root) {
  let traversal = []
  let stack = [[root,[]]];
  while (stack.length > 0){
    let tuple = stack.pop();
    let [node, path] = [tuple[0],tuple[1]];
    if (!node.right && !node.left) {
      if(traversal.length < path.length) traversal = [...path];
    } else {
      if (node.right){
        stack.push([node.right, [...path, 'r']]);
      }
      if (node.left){
        stack.push([node.left, [...path, 'l']]);
      }
    }
  }
  let maxDepth = traversal.length;
  let farthestNode = 0;
  let currentNode = root;
  for (let i = 0; i < maxDepth; i += 1){
    let nodeToCheck = traversal[i] === 'l' ? currentNode.right : currentNode.left;
    let nodeDepth = findMaxDepth(nodeToCheck)
    farthestNode = Math.max(farthestNode, nodeDepth - i)
    currentNode = traversal[i] === 'l' ? currentNode.left : currentNode.right;
  }
  console.log(maxDepth, farthestNode, traversal)
  return maxDepth + farthestNode;
}