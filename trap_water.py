# lc 42
def trap(self, height: List[int]) -> int:
    l, r = 0, len(height)-1
    lMax, rMax = height[0], 0
    totalRain = 0
    while l <= r:
        if lMax >= rMax:
            if rMax > height[r]:
                totalRain += rMax-height[r]
                r -= 1
            else:
                rMax = height[r]
                r -= 1
        else:
            if lMax > height[l]:
                totalRain += lMax-height[l]
                l += 1
            else:
                lMax = height[l]
                l += 1
    return totalRain
