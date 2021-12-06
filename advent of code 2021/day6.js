{
  const DAYS = 256
  const ages = document.querySelector('pre').innerText.match(/[0-9]/g).map(x => parseInt(x));
  let cycleCount = new Array(9).fill(0)
  ages.forEach(x => cycleCount[x]++)
  for (let i = 0; i<DAYS; i++){
    if (i === 80) console.log(`After 80 days ${cycleCount.reduce((a,c) => a+c)} fish`);
    const nextCycle = new Array(9).fill(0);
    cycleCount.forEach((val, idx) => {
      if(idx === 0) {
        nextCycle[6] = nextCycle[8] = val;
      } else {
        nextCycle[idx-1] += val;
      }
    })
    cycleCount = nextCycle;
  }
  console.log(`After 256 days ${cycleCount.reduce((a,c) => a+c)} fish`)
}
