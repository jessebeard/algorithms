// lc 485 / easy / ~10 mins


var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let current = 0
    for (let i = 0; i < nums.length; i += 1){
      if (nums[i] === 1){
        current += 1;
      } else if ( current > 0 ) {
        max = Math.max(current, max);
        current = 0;
      }
    } 
    max = Math.max(current, max);
    return max;
};

// note: very easy. 