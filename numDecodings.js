/***


A message containing letters from A-Z can be encoded into numbers using the following mapping:
'A' -> "1"
'Z' -> "26"


To decode an encoded message, all the digits must be grouped then mapped back into letters
using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.


*****Examples*****

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").


*****Constraints*****

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).


***/



var numDecodings = function(s) {
  let answer = 0;
  let invalid = false;
  let arr = Array.from(s);
  const length = s.length;
  let result = []
  if(arr[0] === '0') return answer;
  const recursiveCounter = (str,i) => {
    if(invalid) return;
    if(i===length-1 && str[i] !== '0' ){
    answer++;
    } else {
      if(str[i] === '0' && (str[i-1] !== '1' && str[i-1] !== '2')) invalid = true
      else if(str[i] === '1') {
        if(length-2 === i) answer++
        if(str[i+3] !== '0' || str[i+2] !== '0')recursiveCounter(str,i+2)
        if(str[i+2] !== '0' || str[i+1] === '1' || str[i+1] === '2' )recursiveCounter(str, i+1)
      }else if(str[i] === '2' && parseInt(str[i+1]) <7){
        if(length-2 === i) answer++
        if(str[i+3] !== '0' || str[i+2] !== '0')recursiveCounter(str, i+2);
        if(str[i+2]!== '0' || str[i+1] === '1' || str[i+1] === '2')recursiveCounter(str,i+1)
      } else if(parseInt(str[i])>1){
      recursiveCounter(str,i+1);
      }
    }
  }
  recursiveCounter(arr,0,arr.length)
	return(answer)
};

var numDecodingsII = function(s) {
  if(s.charAt(0) =='0') return 0;
  let n = s.length;
  let dp = new Array(n).fill(0) ;
  dp[n]=1 ;
  for(let i = n-1 ; i >= 0 ; i--){
    if(s.charAt(i)!='0') {
      dp[i] = dp[i+1] ;
      if(i < n-1 && (s.charAt(i)=='1' || s.charAt(i)=='2' && s.charAt(i+1)<'7')){
        dp[i]+=dp[i+2];
      }
    }
  }
  return dp[0] !== dp[0]?0:dp[0];
}


const numDecodingsIII = (s) => {
  if(s[0] =='0') return 0;
  let length = s.length;
  let m1 = 1, m2 = 0; //two memos
  for(let i = length-1 ; i >= 0 ; i--){
    let c = 0; // current position value initializatino
		if(s[i]!='0') {
      c = m1; // if it's not zero it is a valid up to this point
      if(i < length-1 && (s[i]=='1' || s[i]=='2' && s[i+1]<'7')){
        // if not at the end AND it forms a double digit lookup
        c += m2; // add the total from two slots forward
      }
    }
    m2 = m1; // update memos
    m1 = c;
  }
  return m1 !== m1?0:m1; // if the number becomes NaN we want to return 0
}

const testA = '111212111211'
const testB = '123412412569234'
const testC = '221310'

console.log(numDecodings(testA))
console.log(numDecodingsII(testA))
console.log(numDecodingsIII(testA))
console.log(numDecodings(testB))
console.log(numDecodingsII(testB))
console.log(numDecodingsIII(testB))
console.log(numDecodings(testC))
console.log(numDecodingsII(testC))
console.log(numDecodingsIII(testC))

/***
this is a dynamic aproach that buids the answer out in an array, here dp
starting from the end it each entry in the dp array represents the total number of combinaitons up to that point.
skipping 0, if it skips twice, the array will remain 0.
***/
