""""
# You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

#     numberOfBoxesi is the number of boxes of type i.
#     numberOfUnitsPerBoxi is the number of units in each box of the type i.

# You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

# Return the maximum total number of units that can be put on the truck.
"""
def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
    boxTypes.sort(reverse=True, key=lambda x: x[1])
    truck, i, result = 0, 0, 0
    while truck < truckSize and i < len(boxTypes):
        total = boxTypes[i][0] * boxTypes[i][1]
        if truck + boxTypes[i][0] < truckSize:
            truck += boxTypes[i][0]
            result += total
        else:
            result += (truckSize - truck) * boxTypes[i][1]
            truck = truckSize
        i += 1
    return result


# https://leetcode.com/submissions/detail/736121118/
