# first version uses a stack to traverse through the trees.
# second version uses a dictionary to map the inorder values to their index. This isn't as fast as the first version but is clever and cleaner.
def buildTree(preorder, inorder):
    root = TreeNode(preorder[0])
    preorderIndex = 1
    inorderIndex = 0
    stack = [root]
    stackIndex = 0
    while(preorderIndex < len(preorder)):
      isLeft = True
      parentNode = stack[stackIndex]
      currentNode = TreeNode(preorder[preorderIndex])
      isComplete = parentNode.val == inorder[inorderIndex]
      while(isComplete):
        isLeft = False
        parentNode = stack[stackIndex]
        stackIndex -= 1
        inorderIndex += 1
        stack.pop()
        if stackIndex >= 0:
          isComplete = stack[stackIndex].val == inorder[inorderIndex]
        else:
          isComplete = False
      if isLeft is True:
        parentNode.left = currentNode
      else:
        parentNode.right = currentNode
      stack.append(currentNode)
      preorderIndex += 1
      stackIndex += 1
    return root

# https://leetcode.com/submissions/detail/747274992/


from functools import cache
def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    inorder_value_to_index = {}

    for i, v in enumerate(inorder):
        inorder_value_to_index[v] = i

    @cache
    def divide_and_conquer(preorder_i:int, left:int, right:int):
        nonlocal inorder, preorder, inorder_value_to_index, divide_and_conquer
        if left > right: return None

        root = TreeNode(preorder[preorder_i])
        inorder_index = inorder_value_to_index[preorder[preorder_i]]

        root.left = divide_and_conquer(preorder_i + 1, left, inorder_index - 1)

        next_right_preorder_i = preorder_i + (inorder_index - left) + 1
        root.right = divide_and_conquer(next_right_preorder_i, inorder_index + 1, right)

        return root

    return divide_and_conquer(0, 0, len(preorder) - 1)

# https://leetcode.com/submissions/detail/747271556/
