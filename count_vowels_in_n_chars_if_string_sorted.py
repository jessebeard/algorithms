def count_vowels_if_sorted_in_n2(n:int, s: str) -> int:
    listNodes = [[1],[0],[1],[0],[1],[0],[1],[0],[1],[0]]
    lookuptable = [0,1,1,1,2,3,3,3,4,5,5,5,5,5,6,7,7,7,7,7,8,9,9,9,9,9]

    for char in s:
        listNodes[lookuptable[ord(char) - ord("a")]]\
        .append(listNodes[lookuptable[ord(char) - ord("a")]][0])
    # post processing
    resultArr, result = [], 0
    while len(resultArr) < n:
        for node in listNodes:
            if len(node) > 1:
                for i in range(1,len(node)):
                    if len(resultArr) > n-1:
                        break
                    resultArr.append(node[i])
    for i in range(n):
        result += resultArr[i]
    print(listNodes)
    print(resultArr)
    return result


def count_vowels_if_sorted_in_n(self, inStr):
    vowels = 0
    letters = 0
    leest = [0]*26
    for c in [char.lower() for char in inStr]:
        leest[ord(c) - ord('a')]+=1
    print(leest)
    for i in range(len(leest)):
        print(vowels)
        if(letters >= 7):
            return vowels - (letters - 7)
        if(i in {0, 4, 8, 14, 20}):
            vowels += leest[i]
        letters += leest[i]
    return vowels

print(
count_vowels_if_sorted_in_n( 7,
'asaslknlceoaklnflknceanceknocwckowencdlkfhaneo')
)

print(
count_vowels_if_sorted_in_n( 7,
'abcdefghijklmnopqrstuvwxyz')
)

print(
count_vowels_if_sorted_in_n( 7,
'abcdefghijklmnopqrstuvwxyz')
)
