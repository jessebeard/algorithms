from math import sqrt
from time import time
prompt = "What number would you like to find the prime \
factorization of?"
input_value = int(input(prompt))

def prime_factorization(n:int) -> tuple[int, int]:
    r = n
    primes, factors, exponents = [2,3], [], []
    s = 6
    t = sqrt(n)
    if r%2 == 0:
        e = 0
        while r%2 == 0:
            r = r//2
            e += 1
        factors.append(2)
        exponents.append(e)

    if r%3 == 0:
        e = 0
        while r%3 == 0:
            r = r//3
            e += 1
        factors.append(3)
        exponents.append(e)

    while r > 1:
        if s-2 > t:
            factors.append(r)
            exponents.append(1)
            break
        pair = (s+1, s-1)
        for x in pair:
            p = True
            for prime in primes:
                if x%prime == 0:
                    p = False
                    break
            if p:
                primes.append(x)
                if r%x == 0:
                    factors.append(x)
                    e = 0
                    while r%x == 0:
                        e += 1
                        r = r//x
                    exponents.append(e)
                t = sqrt(r)
        
        s += 6
    print(s)
    return tuple(zip(factors, exponents))
start = time()
#print(prime_factorization(input_value))
#print(f"took {time()-start} seconds")
def prime_factorization2(n:int) -> tuple[int, int]:
    r = n
    primes, factors, exponents = [], [], []
    s = 2
    t = sqrt(n)
    while r > 1:
        if s > t:
            factors.append(r)
            exponents.append(1)
            break
        p = True
        for prime in primes:
            if s%prime == 0:
                p = False
                break
        if p:
            primes.append(s)
            if r%s == 0:
                factors.append(s)
                e = 0
                while r%s == 0:
                    e += 1
                    r = r//s
                exponents.append(e)
            t = sqrt(r)
        
        s += 1
    print(s)
    return tuple(zip(factors, exponents))
start = time()
print(prime_factorization2(input_value))
print(f"took {time()-start} seconds")
