/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

//This is my clean room JS implementation of "find k closest elements in a sorted array"
const binarySearch = (arr, hi, lo, x) => { 
  if(hi === lo + 1) return lo;
  let mid = Math.floor((hi-lo)/2) + lo;
  if(arr[mid] > x) return binarySearch(arr, mid, lo, x);
  else if(arr[mid] < x) return binarySearch(arr, hi, mid, x);
  else if(arr[mid] === x) return mid;
 }
var findClosestElements = function(arr, k, x) {
  // if they want the whole list, give it to them
  if (arr.length <= k) return arr;
  // check if x is outside the range of the array, return first or last k elements
  if (arr[0] > x) return arr.slice(0,k);
  if (arr[arr.length-1] < x) return arr.slice(arr.length-k, arr.length)
    
  // find the sorted position of x in arr, using BS.
  let xPosition = binarySearch(arr, arr.length-1, 0, x);
    
  // checking left and right against eachother in a loop of k length
  let left = xPosition
  let right = xPosition + 1
  let result = [];
  for (let i = k; k !== 0; k -= 1) {
      if (Math.abs(arr[left]-x) <= Math.abs(arr[right]-x) || right === arr.length) result.unshift(arr[left--]);
      else if (Math.abs(arr[left]-x) >= Math.abs(arr[right]-x) || left === -1) result.push(arr[right++]);
      else if (Math.abs(arr[left]-x) === Math.abs(arr[right]-x)) result.push(arr[left--]) ;
  } 
  return result;
};



// A beautiful clever solution, I learned from this, but didn't come up with the core logic. 
var findClosestElements = function(arr, k, x) {
  const n = arr.length;
  
  let left = 0;
  let right = n-k;
  
  while (left < right) {
    const leftBound = left + Math.floor((right-left)/2);
    const avg = arr[leftBound+k] + Math.floor((arr[leftBound]-arr[leftBound+k]) / 2);
    
    if (avg < x) left = leftBound+1;
    else right = leftBound;
  }
  
  return arr.slice(left,left+k);
};
