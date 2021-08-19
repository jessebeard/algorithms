/****Prompt****
~~~~~~~~~~~~~~~
A binary string is monotone increasing if it 
consists of some number of 0's (possibly none), 
followed by some number of 1's (also possibly none).

You are given a binary string s. You can flip s[i] 
changing it from 0 to 1 or from 1 to 0.

Return the minimum number of flips to make s 
monotone increasing.

****Examples****
~~~~~~~~~~~~~~~~
Input: s = "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
I
nput: s = "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

Input: s = "00011000"
Output: 2
Explanation: We flip to get 00000000.


***** Approach *****
~~~~~~~~~~~~~~~~~~~~
a good base case to think about is 100101, because it has the 
leading 1, which is a key to thinking about this problem, for 
me at least. 

Because of the way JS works, we must first convert the string
to an array, and to take advantage it being binary, convert 
the array to integers. 
Iterating through this array, the best way to think about it 
is to consider THE MINIMUM flips needed up to that spot, 
for that spot to either be 1 or 0, and still be monotonic,
also consider that at the end of the array 0s will have 
simply fliped every 1 in the whole array. 
_________________________________________
    postion     |  if 1  | if 0  |  all 1
_________________________________________
    1<00101     |  0     |   1   |   0
    10<0101     |  1     |   1   |   1
    100<101     |  2     |   1   |   2  <
    1001<01     |  1     |   2   |   2  < this is the transition 
    10010<1     |  2     |   2   |   3
    100101<     |  2     |   3   |   3  
yup 3 and 3, but the answer is 2. 

I marked a spot as a transition, where all 1's stay the same but the 
answer reduces, this is because(obviously) the leading 1 is the only
thing that must be flipped, but how do we count backwards? Well 
instead of keeping track of all the 1s, keep track of the minimum 
between 1 and 0 when tracking the flips to 1.
so as we iterated through the above we would have 0,1,1,1,2,2.

Now after wrapping my mind around this I wanted to take a functional
approach to the problem, knowing full well that a iterative approach
would likely be faster, it seemed good, to me at least, to solve this 
one functionally. 

I have a taste for functional solutions and the latest greatest javascipt 
so I wrote some pseudo code:
 (spread the string into an char array).(create a new array of integers not strings).
 (iterate through the array keeping track of the minimum between flipping to one and the flips for zero)
 (return the minimum)
This sounded like a good place for Array.prototype.reduce but the problem becomes, how do you count 1s
and 0s? you can use an array for the accumulator to store the 1s and the 0s, per above, giving me this code 

*/

const minFlipsMonoIncr = (s) => (
  [...s].map(char=>char=='1'?1:0).reduce(([zeros, ones],x)=>[Math.min(ones+x, zeros-x+1), ones+x],[0,0])[0]
);

/*

To drasitcally speed this up and reduce memory consumption, you could use an iterative approach
and just look at the characters, rather than creating a boolean array. But to my eyes, this code is much 
easier to understand.
*/
