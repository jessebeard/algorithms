#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'timeLeft' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#

def timeLeft(grid):
    # Write your code here
    height = len(grid)
    width = len(grid[0])
    moves = ((0,1),(1,0),(0,-1),(-1,0))
    cellCount = 0
    resultCounter = 0

    def bfsHelper(infectedCells):
        nonlocal cellCount, resultCounter
        if cellCount == 0: return
        newInfectedCells = []
        for posX, posY in infectedCells:
           for dx,dy in moves:
               nx,ny = posX+dx,posY+dy
               if 0<=nx<width and 0<=ny<height:
                  if grid[ny][nx] == 1:
                    newInfectedCells.append((nx,ny))
                    grid[ny][nx] = 2
        resultCounter += 1
        cellCount -= len(newInfectedCells)
        if not len(newInfectedCells) == 0:
            bfsHelper(newInfectedCells)

    initialInfections = []
    for y in range(height):
        for x in range(width):
            if grid[y][x] == 2:
                initialInfections.append((x,y))
            elif grid[y][x] == 1:
                cellCount += 1


    bfsHelper(initialInfections)
    return resultCounter if cellCount == 0 else -1

