const findRotationPoint = (words) => {
  // a = 97, z = 122
  let size = words.length;
  // if ( size < 3 ) throw Error('need at least 3 strings to find a rotation point!');
  let lastIndex = 0
  let last = words[0]
  let result = false
  do {
    let halfway = Math.floor((size - lastIndex)/2) + lastIndex
    current = words[halfway]
    let next = (halfway === size -1 && size !== 1) ? words[0] : words[halfway + 1];
    let sortIndex = 0
    while ( next.charCodeAt(sortIndex) === current.charCodeAt(sortIndex) && sortIndex < next.length ){
      sortIndex++
    }
    if (next.charCodeAt(sortIndex) < current.charCodeAt(sortIndex)) { result = halfway + 1 }
    else {
      if ( halfway === 0) { size = Math.floor(words.length/2)
      } else if ( last.charCodeAt(sortIndex) > current.charCodeAt(sortIndex) ) {
        size = halfway;
        current = last;
      } else  {
        current = last;
        lastIndex = halfway };
    }

  // Find the rotation point in the vector
  }while(result === false)

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