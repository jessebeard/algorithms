# lc 57
"""

"""
def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    # first thought, use BS to find correct start, then consume intervals until the
    # the end is included.
    if len(intervals) == 0:
        return [newInterval]

    # search for target sub-function
    def find_target(target, l=0):
        # basic Binary Search, used for both low and high
        r = len(intervals) - 1
        while l <= r:
            mid = (l + r) // 2
            if intervals[mid][0] <= target <= intervals[mid][1]:
                return mid
            elif target > intervals[mid][1]:
                l = mid + 1
            else:
                r = mid - 1
        return l

    # find and replace sub-function
    def find_replace():
        lo_index = find_target(newInterval[0])
        hi_index = find_target(newInterval[1], lo_index)
        intervals_count = len(intervals)
        replacement_interval = newInterval
        # find the lowest between the lower-index interval and the inserted interval
        if lo_index < intervals_count and intervals[lo_index][0] <= replacement_interval[0] <= intervals[lo_index][1]:
            replacement_interval[0] = intervals[lo_index][0]
        # if the replacement interval is goin
        # find the highest between the included, higher index interval and the inserted interval
        # also check to see if the value is being tacked on, or replacing the final value
        if hi_index < intervals_count and intervals[hi_index][0] <= replacement_interval[1]:
            replacement_interval[1] = max(intervals[hi_index][1], replacement_interval[1])
            intervals[lo_index:hi_index+1] = [replacement_interval]
            return intervals
        # if the code reaches here, the right side "slotted" into the intervals
        intervals[lo_index:hi_index] = [replacement_interval]
        return intervals

    return find_replace()

# went into this one feeling good, got absolutely demolished.
# partially because my go-to binary search method is really bad for this,
# this problem does not lend itself to post processing, resolving to learn
# bisect in the STL, and not going to let myself get caught up in another
# problem. during this GRIND. ITS SUPPOSED TO BE A GRIND.
