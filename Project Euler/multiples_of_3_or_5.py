print('what do you want to find the values under?')
j = int(input()) 
print('what do you want multiples? \n format=num1,num2,...')
k = tuple(int(x) for x in input().split(","))

def added_multiples_of_numbers(n:int, t:tuple()) -> int :
    n -= 1
    response = 0
    processed = set()
    for num in t:
        m = n//num
        adder = 0
        for _ in range(m):
            adder += num
            c = True
            for checked in processed:
                c = not adder%checked == 0
            if c:
                response += adder
        processed.add(num)
    print(response)

added_multiples_of_numbers(1000,(5,3))
added_multiples_of_numbers(j,k)
