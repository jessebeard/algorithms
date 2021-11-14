class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
      result = []
      d = []; '''dot indexes'''
      l = len(s)

      def formatString():
        return '.'.join([s[:d[0]],s[d[0]:d[1]],s[d[1]:d[2]],s[d[2]:]])

      def isValidIP(slice):
        if len(slice) > 3 or len(slice) == 0: return False
        if len(slice) > 1 and slice[0] == '0': return False
        if int(slice) <= 255: return True

      def backtracking():
        if len(d) == 3:
          if isValidIP(s[d[2]:]):
            result.append(formatString())
        else:
          start = d[-1] if len(d) > 0 else 0
          for end in range( min(start+3, l-1)):
            if isValidIP(s[start:end+1]):
              d.append(end+1)
              backtracking()
              d.pop()

      backtracking()
      return result
