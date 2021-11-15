def nth_prime(n:int) -> int:
    primes = [2,3]
    s = 6
    prime_count = 2
    last_prime = 3

    while prime_count < n:
        pair = (s+1, s-1)
        for x in pair:
            p = True
            for prime in primes:
                if x%prime == 0:
                    p = False
                    break
            if p:
                primes.append(x)
                prime_count += 1
                last_prime = x
        
        s += 6
    return last_prime
