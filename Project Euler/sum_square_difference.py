# PE#6
CEILING = 100
nums = range(1, CEILING+1)
sum_of_squares = 0
square_of_sums = 0
for num in nums:
    sum_of_squares += num**2
for num in nums:
    square_of_sums += num
square_of_sums = square_of_sums**2
print(square_of_sums-sum_of_squares) 
