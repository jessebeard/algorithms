// very fast solution for part 2
{
  // const positions = document.querySelector('pre').innerText.match(/[0-9]+/g).map(x => parseInt(x));

  //~~~~~~~~~~Generate (larger) mock sets~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const positions = []
  const dupes = []
  for (let i = 0; i < 500; i++){
    dupes.push(Math.abs(~~(Math.random() * 100000) - 50000))
  }
  for (let i = 0; i < 100000; i++){
    positions.push(~~(Math.random() * 100000))
  }
  for (let i = 0; i < 10000; i++){
    dupes.forEach(x=>positions.push(x))
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const posDict = {}
  positions.forEach((x) => {posDict[x] = posDict[x]+1 || 1})
  const posCount = []
  for (const [key, value] of Object.entries(posDict)) {
    posCount.push([parseInt(key),value])
  }
  const costFinder = (ip,rp) => {
    const dist = Math.abs(rp-ip)
    return (dist+1) * (dist/2)
  }
  const mean = Math.round((positions.reduce((a,c) => a+c))/positions.length)
  let current = mean;
  let result2 = posCount.reduce((a, [position,count]) => a += costFinder(position,mean) * count, 0)
  let result2l = posCount.reduce((a, [position,count]) => a += costFinder(position,current-1) * count, 0)
  let result2r = posCount.reduce((a, [position,count]) => a += costFinder(position,current+1) * count, 0)
  while(result2 > result2l){
    current -= 1
    result2 = result2l
    result2l = posCount.reduce((a, [position,count]) => a += costFinder(position,current-1) * count, 0)
  }
  while(result2 > result2r){
    current += 1
    result2 = result2l
    result2l = posCount.reduce((a, [position,count]) => a += costFinder(position,current+1) * count, 0)
  }

  console.log(result2)
}
// solution for part 1, worked for me, but might not work generally
{
  const positions = document.querySelector('pre').innerText.match(/[0-9]+/g).map(x => parseInt(x));
  console.log(positions)
  const posDict = {}
  positions.forEach((x) => {posDict[x] = posDict[x]+1 || 1})
  const posCount = []
  for (const [key, value] of Object.entries(posDict)) {
    posCount.push([key,value])
  }
  const dp = posCount.map(x => parseInt(x[0]))
  const resultdp = dp.map( x => posCount.reduce((a, [position,count]) => a += Math.abs(position-x) * count, 0))
  const result = resultdp.reduce((a,c) => Math.min(a,c))
  console.log(result)
}
