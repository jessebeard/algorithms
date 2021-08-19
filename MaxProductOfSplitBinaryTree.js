  var maxProduct = function(root) {
    let totalSum = 0
    const sumLeaves = (r) => {                 
      totalSum += r.val;
      if(r.left !== null) sumLeaves(r.left)
      if(r.right !== null) sumLeaves(r.right)
    };
    sumLeaves(root)
    let maxProd = 1;
    const findMaxProd = (head, m) => {
     if(head === null) return 0;
     let r = findMaxProd(head.right, m)
     let l = findMaxProd(head.left, m)
     let curr = l + r + head.val;
     maxProd = Math.max(maxProd, curr * (totalSum-curr)) // store the max product found at each step
     return curr;                                        // this function recurses through the whole BT, 
    }                                                    // so it intermediary steps will be overwritten.  
    findMaxProd(root, maxProd)
    
    return maxProd % (10**9 + 7);
};
