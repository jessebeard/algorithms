# Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

def hammingWeight(self, n: int) -> int:
        result = 0
        for x in bin(n):
            if x!="b" and int(x)==1: result += 1
        return result

# https://leetcode.com/submissions/detail/736243831/

# or using bit twidiling

def hammingWeight(self, n: int) -> int:
    result = 0
    for _ in range(32):
        cur = 1 & n
        if cur == 1: result += 1
        n = n >> 1
    return result
# https://leetcode.com/submissions/detail/736245980/
