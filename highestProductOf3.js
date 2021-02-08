const highestProductOf3 = (intArray) => {
  let h1, h2, h3, l1, l2;
  intArray.forEach( int => {
  if ( int > 0 ) {
      if ( h1 === undefined || int > h1 ) {
        h3 = h2;
        h2 = h1;
        h1 = int;
      } else if ( h2 === undefined || int > h2 ) {
        h3 = h2;
        h2 = int;
      } else if ( h3 === undefined || int > h3 ) {
        h3 = int;
      }
    } else {
      if ( l1 === undefined || int < l1 ) {
        l2 = l1;
        l1 = int;
      } else if ( l2 === undefined || int < l2 ) {
        l2 = int;
      }
    }
    })
  if (l2 * l1 * h1 > h1 * h2 * h3) {
    console.log( l1, l2, h1, h2, h3)
    return l2 * l1 * h1;
  } else {
    return h1 * h2 * h3;
  }
}

const sampleA = [ -10 , -8, 3 , 4, 2, 1]
const sampleB = [ -10 , -8, 12, 44, 1, 5]
console.log(highestProductOf3(sampleA), highestProductOf3(sampleB))