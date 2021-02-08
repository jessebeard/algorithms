function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  const size = array.length;
  for ( let i = 0 ; i < size ; i += 1){
    const RI = getRandom(i, size -1);
    console.log(array, array[RI], array[i], RI, i)
      let nextItem = array[RI];
      array[RI] = array[i];
      array[i] = nextItem;
  }
  // Shuffle the input in place


}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);