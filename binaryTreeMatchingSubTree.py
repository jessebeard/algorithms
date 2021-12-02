 def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # first use BFS to find matching nodes.
    currentLevel = [root]
    matchingNodes = []
    while currentLevel:
        nextLevel = []
        for node in currentLevel:
            if node.val == subRoot.val:
                # store matching node in list
                matchingNodes.append(node)
            if node.left:
                nextLevel.append(node.left)
            if node.right:
                nextLevel.append(node.right)
        currentLevel = nextLevel
    # use an iterative approach to check for matching subTree
    for possibleRoot in matchingNodes:
        # using stacks to store the next node in memory
        mainStack = [possibleRoot]
        subStack = [subRoot]
        isMatch = True
        while mainStack and subStack and isMatch:
            subTop = subStack.pop()
            mainTop = mainStack.pop()
            # check if both entries are None
            # if they are continue to the next iteration
            if not subTop and not mainTop:
                continue
            # check if entries are not matching
            # set flag and break out of while loop
            elif not subTop or not mainTop or subTop.val != mainTop.val:
                isMatch = False
                break
             # otherwise continue with inOrder traversal
            else:
                mainStack.append(mainTop.left)
                subStack.append(subTop.left)
                mainStack.append(mainTop.right)
                subStack.append(subTop.right)
        # check if one of the stacks has extra nodes left over
        if mainStack or subStack:
            isMatch = False
        # if we get here and is Match is still set to True
        # the subtrees Match otherwise check the next possibleRoot
        if isMatch:
            return True
    # if we haven't found a matching subtree after checking all of the
    # matching nodes, return False.
    return False
