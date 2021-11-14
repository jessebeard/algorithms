#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'numberOfChanges' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#

def numberOfChanges(grid):
    height = len(grid)
    width = len(grid[0])
    moves = ((0,1),(1,0),(0,-1),(-1,0))
    counter = 0


    def dfsHelper(x,y,island: set):
        for dx,dy in moves:
            nx,ny = dx+x,dy+y
            if 0<=nx<width and 0<=ny<height:
                if not (nx,ny) in island and grid[ny][nx] == 1:
                    island.add((nx,ny))
                    dfsHelper(nx,ny, island)

    island1 = set()
    island2 = set()
    foundFirstIsland = False
    for i in range(height):
        for j in range(width):
            if not foundFirstIsland and grid[i][j] == 1:
                island1.add((j,i))
                dfsHelper(j,i,island1)
                foundFirstIsland = True
            elif foundFirstIsland and grid[i][j] == 1:
                if not (j,i) in island1:
                    island2.add((j,i))
                    dfsHelper(j,i,island2)
                    break



    def bfsHelper(positionList, count, endIsland, checked):
        nextPositionList = set()
        for x,y in positionList:
            for dx,dy in moves:
                nx,ny = x+dx,y+dy
                if 0<=nx<width and 0<=ny<height and not (nx,ny) in nextPositionList:
                    if (nx,ny) in endIsland:
                        return count
                    elif grid[ny][nx] == 0:
                        nextPositionList.add((nx,ny))
        return bfsHelper(nextPositionList, count+1, endIsland, checked.union(positionList))

    big,small = (island1,island2) if len(island1) >= len(island2) else (island2,island1)
    positionSet = set()
    return bfsHelper(small, 0, big, small)
