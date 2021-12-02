# lc 973
def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
    distance = []
    for point in points:
        distance.append(sqrt(point[0]**2 + point[1]**2))
    sorted_points = sorted(zip(distance,points))
    result = []
    for i in range(k):
        result.append(sorted_points[i][1])
    return result