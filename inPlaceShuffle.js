// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array
// must have the same probability of ending up in each spot in the final array.


//helper function as described in the problem
const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

const inPlaceShuffle = (array) => {
  // to make sure that the entire process has an even distribution of solutions,
  // we need to walk through the solution and only pick from the remaining choices,
  // shuffling the deck one card at a time.
  // but first check that we can shuffle the deck
  if (array.length < 2) return array;
  // iterate through the indices
  for( let i = 0; i < array.length; i += 1) {
    // and find a random spot from the current indice, onward
    const swapIndex = getRandom(i, array.length - 1)
    // then swap the values and continue
    if (swapIndex !== i ) {
      const swapVal = array[swapIndex];
      array[swapIndex] = array[i];
      array[i] = swapVal;
    }
  }
}



let matrix = Array(10).fill(null).map( () => Array(10).fill(null).map((val,i) => i))
matrix.forEach( x => inPlaceShuffle(x));
console.log(matrix);