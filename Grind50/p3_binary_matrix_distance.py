# lc 542
"""
Given an m x n binary matrix mat,
return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
"""
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        y_length = len(mat)
        x_length = len(mat[0])
        # works because 0's remain 0, and it isn't truly boolean
        result = mat

        for y in range(y_length):
            for x in range(x_length):
                if mat[y][x] != 0:
                    up = mat[y-1][x] if y > 0 else float('inf')
                    left = mat[y][x-1] if x > 0 else float('inf')
                    result[y][x] = min(up, left)+1
        # then iterate from bottom to top left to right
        for y in range(y_length-1,-1,-1):
            for x in range(x_length-1,-1,-1):
                if mat[y][x] != 0:
                    down = mat[y+1][x] if y<y_length-1 else float('inf')
                    right = mat[y][x+1] if x<x_length-1 else float('inf')
                    result[y][x] = min(result[y][x], min(down,right)+1)
        return result

# this one took me 25 minutes, which I suppose is too long, but I cranked it
# out once I thought of it, and it is wayy past my bedtime.
