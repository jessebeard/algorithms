

/*
Discussion:

this is my first real attempt at an itterative approach to a binary tree traversal.
not an optimal solution, a stack is better. 

but the logic is as follows
// create result array
// create hashtable(map) nodesVisited
    // each key will be a node
    // each value will be is own hashtable storing the parent and if its children have been visited
// create currentNode "pointer" at root;
// create isLeft boolean;
// create parentNode "pointer" initialized to null;
// while currentNode is not null
    // if its not in the nodesVisited Map
        // add currentNode value to result array
        // add the currentNode to the hash table
            // the values of its hashTable should be
            // {parent: parentNode, left: null, right: null}
        // if isLeft not undefinied and true
            // set the hashtable value for its parent to report that the left child has been visited
        // if isLeft not undefined and false
            // set the hashtable value for its paretent to report the right child is visited
// if node has children, set parentNode to currentNode
    //if node has left child and hash table reports it unvisited 
        // set it to the currentNode  
        // isLeft boolean true
    //else if node has right child and hashtable reports it unvisited 
        // set it to the currentNode 
        // isLeft boolean false
// else set currentNode to the parentNode from the nodesVisited hashtable
*/





var preorderTraversal = function(root) {
    let result = [];
    let nodesVisited = new Map()
    let currentNode = root
    let isLeft = undefined
    let parentNode = null;
    while(currentNode !== null){
        if(!nodesVisited.has(currentNode)){
          result.push(currentNode.val)
          nodesVisited.set(currentNode, {parent: parentNode, left: !currentNode.left, right: !currentNode.right})
          if(isLeft !== undefined && isLeft === true){
            let temp = nodesVisited.get(parentNode)
            temp.left = true
          }
          if(isLeft !== undefined && isLeft === false){
            let temp = nodesVisited.get(parentNode)
            temp.right = true
          }
        }
        let nodesVisitedRef = nodesVisited.get(currentNode)
        if((currentNode.left && !nodesVisitedRef.left) || (currentNode.right && !nodesVisitedRef.right)){
            if(currentNode.left && !nodesVisitedRef.left){
                parentNode = currentNode
                currentNode = currentNode.left;
                isLeft = true;
            } else if(currentNode.right && !nodesVisitedRef.right) {
                parentNode = currentNode;
                currentNode = currentNode.right;
                isLeft = false; 
            } 
        } else {
            currentNode = nodesVisitedRef.parent;
             if(currentNode !== null){
                parentNode = currentNode.parent;
               }
        }
    }
    return result;
};

