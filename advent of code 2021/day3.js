// part 1
const text = document.querySelector('pre').innerText;
let binaryNums = text.trim().split("\n")
let length = binaryNums.length
let arrayLength = binaryNums[0].length

binaryNums = binaryNums.map(x => x.split(""))
	.map(binaryArray =>  binaryArray.map( char => parseInt(char)))

let accumulator = new Array(arrayLength).fill(0)
const gammaRateBinary = binaryNums.reduce((acc, cur) => (
	cur.forEach((_,i) => acc[i] += cur[i]), accumulator))
  .map( oneCount => oneCount>length/2 ? 1 : 0)

const epsilonRateBinary = gammaRateBinary.map(b => b?0:1)

const gammaRate = parseInt(gammaRateBinary.join(""), 2)
const epsilonRate = parseInt(epsilonRateBinary.join(""), 2)

console.log(gammaRate, epsilonRate, epsilonRate*gammaRate)