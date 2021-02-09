// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array
// must have the same probability of ending up in each spot in the final array.


//helper function as described in the problem
const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const inPlaceShuffle = (array) => {
}
let matrix = Array(10).fill(null).map( () => Array(10).fill(null).map((val,i) => i))
matrix.forEach( x => inPlaceShuffle(x));
console.log(matrix);
for ( let i = 0; i < matrix.length; i += 1) {
  inPlaceShuffle(matrix[i])
}
console.log(matrix)