def longestCommonSubsequence(text1, text2):
  m, n = len(text1), len(text2)
  dp = [0]*m
  for i in range(n):
    current = [0]*m
    for j in range(m):
      if text2[i] == text1[j]:
        if j > 0:
         current[j] = dp[j-1] + 1
        else:
          current[j] = 1
      elif j > 0:
        current[j] = max(current[j-1], dp[j])
    dp = current
  return dp[m-1]
testA = longestCommonSubsequence('ababaabababababbbabbababababababbbababaabababababbbabbababababababbb', 'bababababababababbaaaabbbbbabababbaabbabababbabbabababbbbabbaabbab')
print(f'testA passes: {testA == 57}, testA returns {testA}')

"""discussion"""
    # basic idea: use an array to store the largest substring up to that point
    # example
    #      abcde    or  abcde
    #    a 10000        11111
    #    c 10200        11222
    #    e 10203        11223
    #    b 12203        12223
    #    d 12233        12233
    #    e 12234        12234
    # return 3