from collections import defaultdict

def threeSum(self, nums: List[int]) -> List[List[int]]:
    d = set()
    nums.sort()
    result = set()
    checked = defaultdict(lambda: 0)
    for i in range(len((nums))):
        if not checked[nums[i]] == 2:
            checked[nums[i]] += 1
            for j in range(i+1, len((nums))):
              query = nums[i] + nums[j]
              if -query in d:
                  result.add((nums[i],nums[j],-query))
        d.add(nums[i])

    return list(result)