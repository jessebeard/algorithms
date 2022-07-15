# LC 695 Max Area of Island
# You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

#The area of an island is the number of cells with a value 1 in the island.

#Return the maximum area of an island in grid. If there is no island, return 0.

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:

        def checkIsland(self, location, size=0):
            nonlocal grid
            if grid[location[0]][location[1]] == 1:
                size += 1
                grid[location[0]][location[1]] = 0
                dirs = [[1,0],[0,1],[-1,0],[0,-1]]
                for d in dirs:
                    nextCell = [location[0] + d[0], location[1] + d[1]]
                    if 0 <= nextCell[0] < len(grid) and 0 <= nextCell[1] < len(grid[0]):

                        size = checkIsland(self, nextCell, size)
            return size
        max_length = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                size = checkIsland(self, [i,j])
                max_length = max(max_length, size)
        return max_length

# https://leetcode.com/submissions/detail/748026306/
