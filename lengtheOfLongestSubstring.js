/***

****Prompt****

Given a string s, find the length of the longest substring without repeating characters.

 

*****Example****

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.



Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Input: s = ""
Output: 0
 

*****Constraints*****

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

***/



var lengthOfLongestSubstring = function(s) {
  let sArr = Array.from(s);
  let longest = 0;
  let current = [];
  sArr.forEach((c)=>{
    if(current.indexOf(c) === -1){ 
      current.push(c)
    } else if (current.indexOf(c) !== -1){
      let newStart = current.indexOf(c) + 1
      current = current.slice(newStart)
      current.push(c)
    }
    if(longest < current.length) {longest = current.length }
  })
  
  return longest;
};
