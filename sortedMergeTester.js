


const MyCode = (arr1, arr2) => {
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
  } while ( i < arr1.length && j < arr2.length )
  let remainder = i < arr1.length ? arr1.splice(i) : arr2.splice(j)
  remainder.every( x => result.push(x) );
  return result;
};


function TheirCode(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];

    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;

    while (currentIndexMerged < (myArray.length + alicesArray.length)) {

      const isMyArrayExhausted = currentIndexMine >= myArray.length;
      const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
        (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

        mergedArray[currentIndexMerged] = myArray[currentIndexMine];
        currentIndexMine++;

        // Case: next comes from Alice's array
      } else {
        mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
        currentIndexAlices++;
      }

      currentIndexMerged++;
    }

    return mergedArray;
  }



const sortedMergeTest = () => {
  const RUNS = 4
  const arrays = new Array(RUNS).fill().map(a => new Array(25).fill().map((a, i) => a = Math.floor(i * Math.random() * 10 )).sort((a,b) => a - b));
  const test1 = [];
  const test2 = [];
  console.time('test1')
  for ( let i = 0, j = RUNS-1; i < RUNS/2; i++, j--) {
    test1.push(MyCode(arrays[j], arrays[i]))
  }
  console.timeLog('test1');
 // console.timeEnd('test1')
 console.time('test2')
 for ( let i = 0, j = RUNS-1; i < RUNS/2; i++, j--) {
   test2.push(TheirCode(arrays[j], arrays[i]))
  }
  console.timeLog('test2');
  //  console.timeEnd('test2')
  console.log(test1)
  console.log(test2)
  if (JSON.stringify(test1) === JSON.stringify(test2)) {
    console.log('they are the same')
  } else {
    console.log('they differ')
  }
};
sortedMergeTest()
