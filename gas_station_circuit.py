# lc 134

class Solution:
    # if total(gas) >= total(cost) there should be a solution 
    # with that intuition, it seems if we keep track of the net gas used,
    # given that there is only one solution,
    # there should be an inversion point somewhere in the route
    # at that inversion net gas should go from negative to positive
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1
        dp = [0] * (len(gas)+1)
        for i in range(len(gas)):
            dp[i+1] = dp[i] + gas[i] - cost[i]
        else:
            return dp.index(min(dp))


    # optimizing for memory.

    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas = 0
        total_cost = 0
        remaining = 0
        idx = -1
        for i in range(len(gas)):
            total_gas += gas[i]
            total_cost += cost[i]
            remaining += gas[i] - cost[i]
            if remaining < 0:
                remaining = 0
                idx = i 
        if total_gas < total_cost:
            return -1
        else:
            return idx+1