  /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  // create letters array
  let letters = Array.from(s);
  // create matrix, empty
  let m = new Array(numRows).fill(null).map(()=> new Array)
  const diagonalLength = numRows - 2;
  let isVertical = true
  let verticalCount = 0
  let diagonalCount = 0
  // push letters into subsequent rows for numRows
  while(letters.length > 0){
    if(isVertical){
     let currentLetter = letters.shift()
      m[verticalCount].push(currentLetter)
      verticalCount += 1;    
      }
    if(verticalCount === numRows) {
      isVertical = false
      verticalCount = 0
    }
    if(!isVertical && numRows !== 2){
      let nextDiagRow = numRows - 2 - diagonalCount;
      let currentLetter = letters.shift()
      m.forEach((x,i)=> {
          if(i===nextDiagRow){
              x.push(currentLetter)
          } else { x.push(0) }
      })
      diagonalCount += 1;
    }
    if(diagonalCount === diagonalLength) {
      isVertical = true;
      diagonalCount = 0
    }
  }
  let result = []
  for (let i = 0; i < numRows; i += 1){
     const rowLength = m[i].length
     m[i].forEach((x)=>{
         if(x) result.push(x)
     })
  }
  let answer = ''
  result.forEach((l)=> answer = answer.concat('',l))
  return answer
};
