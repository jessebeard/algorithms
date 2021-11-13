#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'climbStairs' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

# naive answer would be a decision tree storing the largest cummulative number towards the bottom of the tree
# branching factor of 2 with a maximum depth of the lengh of the stairs
# O(2^n) we can do better
'''
much better would be math
                __
              ____
            ______
          ________
        _8_________ this is fibonacci's sequence,
      _5___________ but the challenge was to solve
    _3_____________ this with dp.
  _2_______________
_1_________________
'''
# at each position x in the stairs, the maximum in the number of steps k is k@x-1 + k@x-2... essentially fibonacci's sequence!
# there is a way to solve this with matrix multiplication, and algorithm that arrives at O(logn) time, but we aren't here for dynamic programming
# so the dynamic solution is to keep track of the previous 2 posisitons giving us O(n) time and O(1) space.
def climbStairs(n):
  dp = [0,1] #where dp[0] is k-2 and dp[1] is k-1
  for i in range(n):
    memo = dp[1]
    dp[1] = dp[1] + dp[0]
    dp[0] = memo

  return dp[1]