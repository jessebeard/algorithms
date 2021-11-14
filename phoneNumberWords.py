class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
      result = []
      length = len(digits)
      if length==0: return result

      def getLetters(n: int) -> List[str]:
        if n==2: return ['a','b','c']
        if n==3: return ['d','e','f']
        if n==4: return ['g','h','i']
        if n==5: return ['j','k','l']
        if n==6: return ['m','n','o']
        if n==7: return ['p','q','r','s']
        if n==8: return ['t','u','v']
        if n==9: return ['w','x','y','z']

      def backtracking(i:int, word:str):
        if i==length:
          result.append(word)
          return

        letters = getLetters(int(digits[i]))
        for l in letters:
          newWord = word + l
          backtracking(i+1,newWord)

      backtracking(0,'')

      return result
