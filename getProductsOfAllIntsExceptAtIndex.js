const getProductsOfAllIntsExceptAtIndex = ( intArray ) => {
  //create an array with the cumulative values of the right side of the array.
  const rightHandCumulativeValues = []
  //populate the array
  let memo = intArray[intArray.length - 1];
  for ( i = intArray.length -2; i >= 0; i -= 1) {
    rightHandCumulativeValues.unshift(memo);
    memo = memo * intArray[i];
  }
  const result = [];
  //pop first value of that array to result array
  result.push(rightHandCumulativeValues.shift());
  //create running total of left side
  let leftHandRunningTotal = intArray[0]
  //iterate through both arrays, multiplying the running total with the next value in the right hand array,
  for ( let i = 0; i < rightHandCumulativeValues.length; i += 1) {
    result.push(rightHandCumulativeValues[i] * leftHandRunningTotal)
    // then adjust the running total
    leftHandRunningTotal = leftHandRunningTotal * intArray[i + 1];
  }
  result.push(leftHandRunningTotal);
  return result
}

const sampleA = [1, 7, 3, 4];

console.log(getProductsOfAllIntsExceptAtIndex(sampleA));
