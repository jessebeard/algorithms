# lc 238
def productExceptSelf(self, nums: List[int]) -> List[int]:
    zeros_index = []
    total_product = 1
    for i in range(len(nums)):
        if nums[i] == 0:
            zeros_index.append(i)
            if len(zeros_index) > 1:
                return [0] * len(nums)
            continue
        total_product *= nums[i]
    if len(zeros_index) == 1:
        result = [0] * len(nums)
        result[zeros_index[0]] = total_product
        return result
    result = []
    for num in nums:
        result.append(total_product//num)
    return result
