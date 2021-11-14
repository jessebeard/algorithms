#lc 188
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
      if len(prices) == 0 or k == 0: return 0
      buys = [-prices[0]] * k
      sell = [0]*k

      for price in prices:
        for i in range(k-1,-1,-1):
          sell[i] = max(sell[i], buys[i] + price)
          if not i == 0:
            buys[i] = max(buys[i], sell[i-1] - price)
          else:
            buys[i] = max(buys[i], -price)
      return max(sell)