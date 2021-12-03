// part 1
const text = document.querySelector('pre').innerText;
let binaryNums = text.trim().split("\n")
const length = binaryNums.length
const arrayLength = binaryNums[0].length

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

// part 2
const text = document.querySelector('pre').innerText;
const binaryStringsArray = text.trim().split("\n");
const arrayLength = binaryStringsArray[0].length;

const binaryArrayList = binaryStringsArray.map(x => x.split(""))
  .map(binaryArray => binaryArray.map(char => parseInt(char)));

let index = 0
let o2binary = [...binaryArrayList]
while (o2binary.length > 1) {
  const length = o2binary.length;
  const currentMost = o2binary
    .reduce((acc, cur) => acc += cur[index], 0);
  const filterTarget = currentMost >= length/2 ? 1 : 0;
  o2binary = o2binary
		.filter(num => num[index] === filterTarget);
  index += 1;
}
const o2value = parseInt(o2binary[0].join(''), 2)

index = 0
let co2scrubBinary = [...binaryArrayList]
while (co2scrubBinary.length > 1) {
  const length = co2scrubBinary.length;
  const currentMost = co2scrubBinary
    .reduce((acc, cur) => acc += cur[index], 0);
  const filterTarget = currentMost >= length/2 ? 0 : 1;
  co2scrubBinary = co2scrubBinary
		.filter(num => num[index] === filterTarget);
  index += 1;
}
const co2scrubValue = parseInt(co2scrubBinary[0].join(''), 2)

console.log(o2value, co2scrubValue, o2value * co2scrubValue)
