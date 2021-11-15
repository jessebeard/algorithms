from .prime_factorization import prime_factorization
from collections import defaultdict

def lcm(nums:tuple[int]) -> int:
    primes = defaultdict(lambda: 0)
    result = 1
    for num in nums:
        factorization = prime_factorization(num)
        for prime, factor in factorization:
            primes[prime] = max(primes[prime], factor)
    for prime, factor in primes.items():
        result *= prime**factor
    return result



