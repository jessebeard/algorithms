  # LC 1465 - Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
  
#   You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

# horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
# verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
# Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:
      horizontalCuts.sort()
      verticalCuts.sort()
      last = 0
      h_max = 0
      for cut in horizontalCuts:
          h_max = max(h_max, cut - last)
          last = cut
      h_max = max(h_max, h-last)
      last = 0 
      v_max = 0
      for cut in verticalCuts:
          v_max = max(v_max, cut - last)
          last = cut
      v_max = max(v_max, w - last)
      return (v_max * h_max) % (10**9 +7)
    
# https://leetcode.com/submissions/detail/736748992/
