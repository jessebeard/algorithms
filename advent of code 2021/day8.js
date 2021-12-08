// part 1

{
  const lines = document.querySelector('pre').innerText.trim().split("\n")
  let displays = lines.map(x => x.split("|")[1].trim().split('\ '))
  const digits = lines.map(x => x.split("|")[0].trim().split('\ '))

  const findDiff = (word1, word2) => {
    const w1 = new Set(Array.from(word1))
    const w2 = new Set(Array.from(word2))
     w2.forEach(x => w1.delete(x))
    return Array.from(w1)[0]
  }
  let numMap = new Array(lines.length).fill({})
  for (let i=0; i<2; i+=1){
    const digitsArr = digits[i].sort((c,p) => c.length>p.length);
    console.log(digitsArr)

  }



  let result = displays.reduce((a,c) => a + c
    .reduce((a,c) => {
      if (c.length!==5 && c.length!==6){
        return a+1
      }
      return a
    }, 0), 0 )
  console.log(result)
}

// part 2

{
  const lines = document.querySelector('pre').innerText.trim().split("\n")
  let displays = lines.map(x => x.split("|")[1].trim().split('\ '))
  const digits = lines.map(x => x.split("|")[0].trim().split('\ '))
  const findDiff = (word1, word2, size=false) => {
    const w1 = new Set(Array.from(word1))
    const w2 = new Set(Array.from(word2))
     w2.forEach(x => w1.delete(x))
    return Array.from(w1).length
  }
  let threeRef, sixRef, nineRef, fiveRef
  const findThree = (arr) => {
    for(let i = 3; i < 6; i += 1){
      if (!~~findDiff(arr[0], arr[i])) {
        threeRef = arr[i]
        return new Set(arr[i])
      }
    }
  }
  const findSix = (arr) => {
    for(let i = 6; i < 9; i += 1){
      if (findDiff(arr[0], arr[i])) {
        sixRef = arr[i]
        return new Set(arr[i])
      }
    }
  }
  const findNine = (arr, three) => {
    for(let i = 6; i < 9; i += 1){
      findDiff(threeRef, arr[i])
      if (!~~findDiff(three, arr[i])) {
        nineRef = arr[i]
        return new Set(arr[i])
      }
    }
  }
  const findFive = (arr, six, three) => {
    for(let i = 3; i < 6; i += 1){
      if(arr[i] !== threeRef && findDiff(arr[i], sixRef) === 0){
        fiveRef = arr[i]
        return new Set(arr[i])
      }
    }
  }
  const findTwo = (arr, three, five) => {
    for(let i = 3; i < 6; i += 1){
      if(arr[i] !== threeRef && arr[i] !== fiveRef) return new Set(arr[i])
    }
  }
  const findZero = (arr, six, nine) => {
    for(let i = 6; i < 9; i += 1){
      if(arr[i] !== sixRef && arr[i] !== nineRef) return new Set(arr[i])
    }
  }
  const numMap = new Array(lines.length).fill().map((x) => new Map())
  for (let i=0; i<lines.length; i+=1){
    const dArr = digits[i].sort((c,p) => c.length>p.length);
    const map = numMap[i]
    const one = new Set(dArr[0])
    const four = new Set(dArr[2])
    const seven = new Set(dArr[1])
    const eight = new Set(dArr[9])
    const three = findThree(dArr)
    const six = findSix(dArr)
    const nine = findNine(dArr, three)
    const zero = findZero(dArr, six, nine)
    const five = findFive(dArr, six, three)
    const two = findTwo(dArr, three, five)
    map.set(one,1);
    map.set(two,2);
    map.set(three,3);
    map.set(four,4);
    map.set(five,5);
    map.set(six,6);
    map.set(seven,7);
    map.set(eight,8);
    map.set(nine,9);
    map.set(zero,0);
  }

  let result = displays.reduce((acc,cur,idx) => {
    const nums = numMap[idx]
    return acc + cur.reduce((a,word,i) => {
      for (const [k,v] of Array.from(nums.entries())) {
        if(word.length === k.size){
          const match = Array.from(word)
            .reduce((b,char)=> b && k.has(char)? true: false, true)
          if (match) {
            return a + v*10**(3-i)
          }
        }
      }
      return a
    }, 0)
  }, 0)
  console.log(result)
}
