# LC 136 - Single Number

# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

def singleNumber(self, nums: List[int]) -> int:
    result = 0
    for x in nums:
        result ^= x
    return result

# https://leetcode.com/submissions/detail/736247660/
