/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  if (nums.every(x => x === nums[0])) return 1
  let lowestIndex = 0;
  let highestLeft = nums[0]
 
  nums.map((x,i) => lowestIndex = nums[lowestIndex] > x ? i : lowestIndex);
  for (let i = 0; i < lowestIndex; i += 1){
      if (nums[i] > highestLeft) highestLeft = nums[i]
  }
  let finished = 0;
  let finalLeftIndex;
  while(!finished){
    finalLeftIndex  = nums.length - 1;
    while ((nums[finalLeftIndex - 1] >= highestLeft)) {
      finalLeftIndex -= 1;
    }
    let old = highestLeft;
    for (let i = lowestIndex; i < finalLeftIndex; i += 1){
      if (nums[i] > highestLeft) highestLeft = nums[i]
    }
    console.log(old, highestLeft)
    finished = old === highestLeft ? 1 : 0
   
  }    
  return finalLeftIndex || 1;
};
