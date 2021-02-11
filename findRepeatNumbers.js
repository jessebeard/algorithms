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