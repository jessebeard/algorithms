# Project Euler #4
from time import time
from helpers.prime_factorization import prime_factorization
from itertools import count, permutations


# brute force
def isPalindrome(n:int) -> bool:
    return str(n) == str(n)[::-1]

palindromes = []
start = time()
for x in range(999,0,-1):
    for y in range(999,0,-1):
        cur = x*y
        if isPalindrome(cur):
            palindromes.append(cur)

print(max(palindromes))
print(f"it took {time() - start} seconds")

# Building on Prime Factorization

start = time()
found = False
for x in range(999,100,-1):
    if found:
        break
    pp = int("".join((str(x),str(x)[::-1])))
    primes = prime_factorization(pp)
    primes_list = list()
    for prime, count in primes:
        for _ in range(count):
            primes_list.append(prime)
    permutes = permutations(primes_list)
    for combination in permutes:
        is_product = True
        x, y  =  1, 1
        for prime in combination:
            if len(str(x * prime)) < 4:
                x *= prime
            elif len(str(y * prime)) < 4:
                y *= prime
            else:
                is_product = False
                break
        if len(str(x)) > 4 or len(str(y)) > 4:
            is_product = False
        if is_product:
            print(pp, x, y)
            found = True
            break
            
print(f"it took {time() - start} seconds")
        

