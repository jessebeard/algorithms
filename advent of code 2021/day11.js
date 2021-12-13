{
  const ITERATIONS = 1000
  const DIRS = [[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]]
  const log = console.log.bind(this)
  log.matrix = (m, ...args) => {
    log( m.reduce((acc,l) => acc + l.reduce((a,c)=> a+c,'')+'\n', '\n'), ...args)
  }

  const octoGrid = document.querySelector('pre').innerText.trim()
                  .split('\n').map(line =>line.split('').map( s => parseInt(s)))

  octoGrid.forEvery = (callBack) => {
  	for (let i = 0; i < octoGrid.length; i += 1){
      for (let j = 0; j < octoGrid[0].length; j += 1){
        octoGrid[i][j] = callBack(octoGrid[i][j], [j, i])
      }
    }
  };
  let counter = 0
  let answer = 0
  for (let i = 1; i <= ITERATIONS; i += 1){
    let currentStep = 0
		octoGrid.forEvery( octopus => octopus+1 );
  	let toFlash = [];
    let hasFlashed = new Set()
  	octoGrid.forEvery( (octopus, coords) => {
      if(octopus > 9){
        toFlash.push(coords)
      }
      return octopus;
    })
    while(toFlash.length > 0){
		  toFlash.forEach(([x,y]) => {
        DIRS.forEach(([dx,dy]) => {
          if (dy+y<=9 && dy+y>=0
					&& dx+x<=9 && dx+x>=0){
            octoGrid[dy+y][dx+x] = octoGrid[dy+y][dx+x] + 1
          }
        })
       currentStep++
       hasFlashed.add(`${x}${y}`)
     })
     toFlash = []
     octoGrid.forEvery( (octopus, [x,y]) => {
      if(octopus > 9 && !hasFlashed.has(`${x}${y}`)) toFlash.push([x,y])
       return octopus
     })
   }
   if (currentStep === 100) {
			 log(i)
       break
   }
   counter += currentStep
	 if(i === 100) answer = counter
   octoGrid.forEvery( o => o>9 ? 0 : o)
  }
 log(answer)
}
