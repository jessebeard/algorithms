from math import sqrt

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
    return tuple(zip(factors, exponents))