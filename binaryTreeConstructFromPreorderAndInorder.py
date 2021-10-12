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
      print (parentNode.val == inorder[inorderIndex] )
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