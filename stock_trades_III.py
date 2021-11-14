'''
[3,3,5,0,0,3,1,4]
[1,3,0,3,1,5,2,8]

'''

# looks like a greedy algorithm to me.
# will need to keep track of 2 high and low points,
# low points fan be thought of as profit less price
# high points can be thought of as profit
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
      buy1 = prices[0]
      buy2 = -prices[0]
      profit1 = 0
      profit2 = 0

      for price in prices:
        profit2 = max(profit2, buy2 + price)
        buy2 = max(buy2, profit1 - price)
        profit1 = max(profit1, price - buy1)
        buy1 = min(buy1, price)

      return max(profit1, profit2)


