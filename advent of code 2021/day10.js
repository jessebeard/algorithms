{
  const lines = document.querySelector('pre').innerText.trim()
                          .split('\n').map(line =>line.split(''))
  const scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
  }
  console.log(lines)
  const l = new Set(['(', '[','{','<'])
  const r = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
  }
  const checkMatch = (char,arr) => {
    if (l.has(char)) arr.push(r[char])
    else return !(char == arr.pop())
    return false
  }
  console.log(lines.reduce ((acc,strArr) => {
      let stack = [strArr[0]];
    let done = false
      for (let i =1; i < strArr.length; i++){
          if(checkMatch(strArr[i], stack)) return scores[strArr[i]] + acc
    }
      //console.log(acc)
    return acc
  }, 0))
  }

// part 2