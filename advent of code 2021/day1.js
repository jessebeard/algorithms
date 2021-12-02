const textArr = document.querySelector('pre').innerText;
const depths = textArr.split("\n").map(x => parseInt(x))
depths.pop()

let count = 0
for(let i = 1; i < depths.length; i++){
  if (depths[i-1] < depths[i]) count++
}
console.log(count)
// part 2
let count2 = 0
let last = depths[0] + depths[1] + depths[2]
for(let i = 3; i < depths.length; i++){
  const current = last - depths[i-3] + depths[i]
  if (last < current) count2++
  last = current
}
console.log(count2)