!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'numberOfIslands' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#

def numberOfIslands(grid):
    height = len(grid)
    width = len(grid[0])
    moves = ((-1,0),(0,1),(1,0),(0,-1))

    def dfsHelper(x,y):
        for dx,dy in moves:
            nx,ny = x+dx,y+dy
            if 0<=nx<width and 0<=ny<height and grid[ny][nx]==1:
                    grid[ny][nx] = 0
                    dfsHelper(nx,ny)

    result = 0
    for i in range(height):
        for j in range(width):
            if grid[i][j] == 1: # 1 = land
                grid[i][j] = 0
                print(i,j)
                result += 1
                dfsHelper(j,i)

    return result