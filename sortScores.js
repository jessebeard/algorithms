const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const sortScores = (scores, maxScore) => {
  const scoreCounts = new Array(maxScore + 1).fill(0);
  scores.forEach(s => scoreCounts[s]++);
  const sortedScores = [];
  for (let i = maxScore; i >= 0; i--) {
    const count = scoreCounts[i];
   for (let j = 0; j < count; j++) {
     sortedScores.push(i);
   }
  }
  return sortedScores
}

//or more succinctly

const succinctSort = (scores, maxScore) => {
  const scoreTable = new Array(maxScore + 1).fill(0)
  scores.forEach(s=> scoreTable[s]++)
  return scoreTable.map( (s, i) =>  { if ( s > 0 ) return i}).filter( x => x !== undefined ).reverse()
};

console.log(succinctSort(unsortedScores,HIGHEST_POSSIBLE_SCORE))
// returns [91, 89, 65, 53, 41, 37]