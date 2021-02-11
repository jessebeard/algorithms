function findRepeat(numbers) {
  // we are looking at a special case of an array, which contains
  // values 1..n and has a length of n + 1. As such it must contain at
  // least one reapeat. We aim to find a repeated number with the key constraint
  // being O1 MEMORY.
  //the idea is to try and traverse the array in a torise hare style in
  // order to find the duplicate
  //
  //Tortoise and Hare
  //* for ( let i = 0, j = 0, k = 0; i < numbers.length * 2 ; i += 1) {
  //*   if (numbers[j] === numbers[numbers[k]]){
  //*      return numbers[k]
  //*   } else {
  //*     j = numbers[j];
  //*     k = numbers[numbers[k]]
  //*   }
  //* }
  //* return false;
  // this actually warks for the first two tests, if only by coincidence. But it
  // does teach us a lesson we can also reason -- a repeat will exist in a "loop"
  // of the linked list
  //...
  // because of the properties of the array, we can reason that the last index
  // resembles the head of a linked list, it will never have a pointer to it,
  // once we are in the linked list, we no that its start will be a repeat.

  const maxVal = numbers.length - 1;

  // STEP 1 - get in the loop
  let position = maxVal + 1;
  for (let i = 0; i < maxVal; i++) {
    position = numbers[position - 1];
  }
  // STEP 2 - find the length of the cycle
  // remembering a position and count the steps to get back
  const positionMemo = position;
  let current = numbers[position - 1];
  let stepCount = 1;
  while (current !== positionMemo) {
    current = numbers[current - 1];
    stepCount += 1;
  }
  // STEP 3 - get the first node of the cycle.
  let head = maxVal + 1;
  let tail = maxVal + 1;
  for (let i = 0; i < stepCount; i++) {
    head = numbers[head - 1];
  }
  while (head !== tail) {
    tail = numbers[tail - 1];
    head = numbers[head - 1];
  }
  return tail

}

// Tests

let desc = 'just the repeated number';
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc)

desc = 'short array';
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([1, 5, 2, 3, 4, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([4, 1, 4, 8, 4, 3, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`no ${desc} ... FAIL: ${a} != ${b}`);
  }
}