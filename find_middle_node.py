#lc 2095
"""
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# below si plotting out tortoise and hare
# for post processing to find middle node by definition
# # # # #
# T H
#   T   H
# # # # # #

class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head.next:
            return None
        if not head.next.next:
            head.next = None
            return head
        tortoise = head
        hare = head
        while hare.next and hare.next.next:
            tortoise = tortoise.next
            hare = hare.next.next
        if hare.next and tortoise != head:
            tortoise = tortoise.next
        tortoise.val = tortoise.next.val
        tortoise.next = tortoise.next.next
        return head
