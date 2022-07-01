class FreqStack:
    def __init__(self):
        self.element_counts = dict()
        self.orders = dict()
        self.greatest = 0


    def push(self, val: int) -> None:
        if val in self.element_counts:
            self.element_counts[val] += 1
            if self.element_counts[val] in self.orders:
                self.orders[self.element_counts[val]].append(val)
            else:
                self.orders[self.element_counts[val]] = [val]
        else:
            self.element_counts[val] = 1
            if 1 in self.orders:
                self.orders[1].append(val)
            else:
                self.orders[1] = [val]
        self.greatest = max(self.element_counts[val], self.greatest)


    def pop(self) -> int:
        result = self.orders[self.greatest].pop()
        self.element_counts[result] -= 1
        if len(self.orders[self.greatest]) == 0:
            self.greatest -= 1
        return result

# or, using stdlib funcitons
# better average run time but worse marginally worse memory consumption

from collections import defaultdict

class FreqStack:
    def __init__(self):
        self.element_counts = defaultdict(int)
        self.orders = defaultdict(list)
        self.greatest = 0


    def push(self, val: int) -> None:
        if val in self.element_counts:
            self.element_counts[val] += 1
            self.orders[self.element_counts[val]].append(val)
        else:
            self.element_counts[val] = 1
            self.orders[1].append(val)
        self.greatest = max(self.element_counts[val], self.greatest)


    def pop(self) -> int:
        result = self.orders[self.greatest].pop()
        self.element_counts[result] -= 1
        if len(self.orders[self.greatest]) == 0:
            self.greatest -= 1
        return result
