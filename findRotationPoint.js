const findRotationPoint = (words) => {
  // a = 97, z = 122
  let lastIndex = words.length;
  // if ( size < 3 ) throw Error('need at least 3 strings to find a rotation point!');
  let firstIndex = 0
  let last = words[0]
  let result = false
  do {
    // find the halfway index
    let halfway = Math.floor((lastIndex - firstIndex)/2) + firstIndex
    // and get its value
    let current = words[halfway]
    // set the next value to the next value unless the conditions for the special case of 2 are met
    let next = (halfway === lastIndex -1 && lastIndex !== 1) ? words[0] : words[halfway + 1];
    // find the first index where the the current word and comparator have different letters
    let sortIndex = 0
    while ( next.charCodeAt(sortIndex) === current.charCodeAt(sortIndex) && sortIndex < next.length ){
      sortIndex++
    }
    //if the next word comes before the current word, we've found our rotation point.
    if (next.charCodeAt(sortIndex) < current.charCodeAt(sortIndex)) { result = halfway + 1 }
   // else either
    else {
      if ( last.charCodeAt(sortIndex) > current.charCodeAt(sortIndex) ) {
        // shift left or
        lastIndex = halfway;
      } else  {
        // shift right
        firstIndex = halfway };
    }

  // Find the rotation point in the vector
  } while (result === false)

  return result;
}














// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}