# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root == None:
            return []
        result = []
        current = [root]
        while current:
            a = []
            n = []
            for x in current:
                a.append(x.val)
                if x.left != None:
                    n.append(x.left)
                if x.right != None:
                    n.append(x.right)
            result.append(a)
            current = n
        return result

# https://leetcode.com/submissions/detail/746175380/
