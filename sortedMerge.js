const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (arr1, arr2) => {
  let i = 0; // i-> arr1
  let j = 0; // j -> arr2
  let result = [];
  do {
    if (arr1[i] >= arr2[j]) {
      result.push(arr2[j])
      j++
    } else {
      result.push(arr1[i])
      i++
    }
    console.log('here')
  } while ( i < arr1.length && j < arr2.length )
  let remainder = i < arr1.length ? arr1.splice(i) : arr2.splice(j)
  remainder.every( x => result.push(x) );
  return result;
};


console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 1ßß