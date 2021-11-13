##lc 122


def maxProfit(self, prices: List[int]) -> int:
  # greedy algorithm with memo
  result = 0
  # keep track of last lowest
  last_lowest = prices[0]
  # keep track of current high
  last_high = 0
  # at each index
  for i in range(1,len(prices)):
    if last_high > prices[i]:
      result += last_high - last_lowest
      last_lowest = prices[i]
      last_high = prices[i]
    elif last_lowest > prices[i]:
      last_lowest = prices[i]
    elif prices[i] > last_high:
      last_high = prices[i]
  # post processing
  if last_high > last_lowest:
    result += last_high - last_lowest

  return result