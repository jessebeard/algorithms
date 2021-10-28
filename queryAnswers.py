#!/bin/python3

import math
import os
import random
import re
import sys
from collections import defaultdict


#
# Complete the 'queryAnswers' function below.
#
# The function is expected to return a FLOAT_ARRAY.
# The function accepts following parameters:
#  1. 2D_STRING_ARRAY equations
#  2. FLOAT_ARRAY values
#  3. 2D_STRING_ARRAY queries
#
"""
thinking about a graph, I don't ever need
to revisit that node again.
a/b = 3, a/c =2, b/d =4, d/e =2, d/f = 3 f/b =4
a:  b:3
    c:4
b:  a:1/3
    d:4
    f:1/4
c:  a:1/2
d:  b:1/4
    e:2
f:  d:1/3
    b:4


"""



def queryAnswers(equations, values, queries):
    graph = defaultdict(dict)
    result = []
    def dfs_helper(node: str, target: str, total: float, visited: set) -> str:
        visited.add(node)
        answer = -1.0
        if target in graph[node]:
            print(graph[node], graph[node][target])
            return total * graph[node][target]
        for key, value in graph[node].items():
            if key not in visited:
                answer = dfs_helper(key, target, total*value, visited)
            if answer != -1.0: return answer
        return answer


    for (divisor,dividend),value in zip(equations, values):
        graph[divisor][dividend] = value
        graph[dividend][divisor] = 1/value

    for divisor,dividend in queries:
        if divisor not in graph and dividend not in graph:
            result.append(-1.0)
        elif divisor == dividend:
            result.append(1.0)
        else:
            result.append(dfs_helper(divisor,dividend,1, set()))

    return result