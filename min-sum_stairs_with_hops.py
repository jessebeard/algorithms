#!/bin/python3
# Complete the 'minSumStairsWithHops' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY steps
#  2. INTEGER k
#
# so we will want to initialize an array with k + 1 slots
# this array will represent the previous starting points
# for the current step as we move up the array
# we will then fill that array with the minimum value for that step and
def minSumStairsWithHops(steps, k):
    # Write your code here
    dp = [0]*(k)
    for i in range(len(steps)):
      index = i % k
      dp[index] = min(dp) + steps[i]
    return min(dp)