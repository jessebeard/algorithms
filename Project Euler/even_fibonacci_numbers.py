print("Find the even Fibonaccis up to what number?")
n = int(input())

def even_fibonacci_numbers(k:int) -> int:
    p = 1
    c = 2
    response = 0
    while c < k:
        if c % 2 == 0:
            response += c
        m = c
        c = c + p
        p = m 
    print(response)
even_fibonacci_numbers(n)
