const possiblePalindrome = (arrStr) => {
  const arrArray = arrStr.split('');
  const letterCounts = {};
  for (const entry of arrArray) {
    letterCounts[entry] = !!letterCounts[entry] > 0 ? letterCounts[entry] + 1 : 1;
  }

  console.log(letterCounts, arrArray, `${arrArray.length % 2}, and ${Object.values(letterCounts).reduce((a,c)=>a+(c%2),0)}.` )
  return Object.values(letterCounts).reduce(
      (acc, cur) => acc + (cur % 2),0)
    === arrStr.length % 2
    ? true
    : false
}


console.log(possiblePalindrome('civic'))