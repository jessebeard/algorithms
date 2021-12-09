{
  const lines = document.querySelector('pre').innerText.trim().split("\n")
  const dM = lines.map(x => x.split("").map(x=> parseInt(x)))
  const dirs = [[1,0],[0,1],[-1,0],[0,-1]]
  const lowPoints = []
  const basinSizes = []
  const checked = new Set()
  const findBasinSize = (x,y,set) => {
    let count = 1
    dirs.forEach(([dx,dy])=> {
      const nY = dy+y
      const nX = dx+x
      if ( nX>=0 && nX!==dM[0].length
      && nY>=0 && nY<dM.length
      && dM[nY][nX] < 9 && dM[nY][nX] > dM[y][x]
      && !set.has(`${nX},${nY}`)) {
        set.add(`${nX},${nY}`)
        count += findBasinSize(nX, nY, set)
      }
    })
    return count;
  }

  dM.forEach((line, y)=> line.forEach((loc, x)=> {
    const isLow = dirs.reduce((a, [dx,dy])=> {
      if (a && dx+x>=0 && dx+x!==line.length
         && dy+y>=0 && dy+y<dM.length){
        return dM[dy+y][dx+x] > loc
      }
      return a
    }, true)
    if (isLow){
      lowPoints.push([x,y])
      basinSizes.push(findBasinSize(x,y,checked,0))
    }
  }))
  console.log(`there are`)
  console.log(lowPoints.reduce((a,[x,y]) => dM[y][x]+1+a, 0))
  console.log(`danger zones, and the product of the area of the 3 biggest is`)
  console.log(basinSizes.sort((c,l) => c<l).slice(0,3).reduce((a,c) => a*c,1))
}
