const greatestProductOfThree = (inputArr) => {
  if (inputArr.length < 3) throw Error;
  // Calculate the highest product of three numbers
    // array will always have at least 3 items
    let h1, h2, h3;
    let l1, l2;
    inputArr.forEach((item, i) => {

      if( item > h1 | !h1) {h3 = h2; h2 = h1; h1 = item}
      else if( item > h2 | !h2 ) {h3 = h2; h2 = item;}
      else if( item > h3 | !h3 ) h3 = item;
      if( item < l1 | !l1) {l3 = l2; l2 = l1; l1 = item;}
      else if( item < l2 | !l2 ) l2 = item;
    })
  // check for positive numbers
  if ( h1 > 0 ) {
    const greatestTuple = l1 * l2 > h2 * h3 ? l1 * l2 : h2 * h3;
    return h1 * greatestTuple;
  } else {return h1 * h2 * h3}
}

  // if yes
    // find largest and smallest numbers
    // find 2nd and 3rd largest postive numbers
    // find largest and second largest negative numbers
    // multiply and compare.
  //if no positive number
   // 0 ? return 0
   // find lowest 3 negative numbers.

console.log(greatestProductOfThree([1,2,3,0]))
console.log(greatestProductOfThree([1,2,3,4,5,6,7]))
console.log(greatestProductOfThree([1,2,3,-4,-5,-6]))
console.log(greatestProductOfThree([1,2,3,4,5,-6]))
console.log(greatestProductOfThree([1,2,3,-4,-5,6]))
console.log(greatestProductOfThree([-1,-2,-3,-4,-5,-6,0]))
