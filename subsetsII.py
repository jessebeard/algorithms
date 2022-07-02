
# Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

# The solution set must not contain duplicate subsets. Return the solution in any order.


def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        def recursiveHelper(self, nums: List[int], res=set([]), cur=()) -> Set[List[int]]:
            result = res
            current = ( *cur, )
            for i in range(len(nums)):
                nxt  = ( *current, nums[i] )
                result.add(nxt)
                result = recursiveHelper(self, nums[i+1::], result, nxt)
            return result
        result = recursiveHelper(self, sorted(nums))
        print(result)
        return [[], *([*x] for x in result) ]

# https://leetcode.com/submissions/detail/736217949/
