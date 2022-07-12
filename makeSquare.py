# lc 437 - matchsticks to square

# You are given an integer array matchsticks
# where matchsticks[i] is the length of the ith matchstick.
# You want to use all the matchsticks to make one square.
# You should not break any stick, but you can link them up,
# and each matchstick must be used exactly one time.

#Return true if you can make this square and false otherwise.



from functools import cache
class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        check  = sum(matchsticks)
        if check%4 != 0:
            return False
        target = check//4
        matchsticks.sort(reverse=True)
        @cache
        def helper(a=0,b=0,c=0,d=0,i=0):
            nonlocal matchsticks, target
            if max(a,b,c,d) > target or i > len(matchsticks):
                return False
            if a == b == c == target:
                return True
            x = [a,b,c,d]
            x.sort()
            a,b,c,d = x
            return helper(a+matchsticks[i],b,c,d,i+1) or helper(a,b+matchsticks[i],c,d,i+1) or helper(a,b,c+matchsticks[i],d,i+1) or helper(a,b,c,d+matchsticks[i],i+1)
        return helper()


# https://leetcode.com/submissions/detail/745435381/
