/*
Given a characters array letters that is sorted in non-decreasing order 
and a character target, return the smallest character 
in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
*/
// lc 722 | 5 mins read/understand, 3 mins plan, 12 mins write | passed first attempt

const letterValues = {
    a:1, n:14,
    b:2, o:15,
    c:3, p:16,
    d:4, q:17,
    e:5, r:18,
    f:6, s:19,
    g:7, t:20,
    h:8, u:21,
    i:9, v:22,
    j:10, w:23,
    k:11, x:24,
    l:12, y:25,
    m:13, z:26
  };
  
  
  var nextGreatestLetter = function(letters, target) {
      let left = 0;
      let right = letters.length - 1;
      let targetVal = letterValues[target]
      while (left + 1 < right) {
          let mid = ~~((left + right) / 2);
          let lastVal = letterValues[letters[mid -1]];
          let currentVal = letterValues[letters[mid]];
          if (lastVal<= targetVal && currentVal > targetVal) return letters[mid];
          if (currentVal <= targetVal) left = mid;
          else right = mid;
      }
      let leftVal = letterValues[letters[left]];
      let rightVal = letterValues[letters[right]];
      if (leftVal > targetVal) return letters[left];
      if (leftVal <= targetVal && rightVal > targetVal) return letters[right];
      if (rightVal <= targetVal) return letters[0];
  };