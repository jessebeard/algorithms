{
  const log = console.log
  log.matrix = (m, ...args) => {
    log( m.reduce((acc,l) => acc + l.reduce((a,c)=> a+c,'')+'\n', '\n'), ...args)
  }

  const manual = document.querySelector('pre').innerText.trim()
                  .split('\n\n')
	const instructions = manual[1].split('\n')
  const dotCoords =manual[0].split('\n').map(x => x.split(','))
  log(dotCoords)
 	const [Ymax, Xmax] = dotCoords.reduce(([ym,xm], [y,x]) => {
    ym = Math.max(ym, y)
    xm = Math.max(xm, x)
  }, [0,0])
  lod(Ymax, Xmax)
}

{
  const log = console.log
  log.matrix = (m, ...args) => {
    log( m.reduce((acc,l) => acc + l.reduce((a,c)=> a+c,'')+'\n', '\n'), ...args)
  }

  const manual = document.querySelector('pre').innerText.trim()
                  .split('\n\n')
	const instructions = manual[1].split('\n').map(x => x.split(' -> '))
  let startString = manual[0].split('\n')[0]
  const countObj = {}
  const pairMap = {}
  for ([p,m] of instructions){
    pairMap[p] = m
  }
  const pairsBecomeA20 = {}
  for ( k in pairMap) {
    let curString  = k
		let nextstring = ''
    for( let j = 0; j < 20; j +=1){
      for( let i = 0; i < curString.length-1; i += 1){
        nextstring += curString[i]
        nextstring += pairMap[curString[i]+curString[i+1]]
      }
      nextstring += curString[curString.length-1]
      curString = nextstring
      nextstring = ''
    }
    const countObj = {}
    for ( let i = 0; i< curString.length-1; i+=1){
      if (countObj[curString[i]]){
        countObj[curString[i]] += 1
      } else {
        countObj[curString[i]] = 1
      }
    }
    log(countObj)
    pairsBecomeA20[k] = countObj
  }
  log(pairsBecomeA20)
  const pairsBecomeA40 = {}
  for ( k in pairMap) {
    let curString  = k
  	let nextstring = ''
    for( let j = 0; j < 20; j +=1){
      for( let i = 0; i < curString.length-1; i += 1){
        nextstring += curString[i]
        nextstring += pairMap[curString[i]+curString[i+1]]
      }
      nextstring += curString[curString.length-1]
      curString = nextstring
      nextstring = ''
    }
    const countObj = {}
    for ( let i = 0; i< curString.length-1; i+=1){
      const thisPair = curString[i] + curString[i+1]
      //console.log(thisPair)
	  	for ( key in pairsBecomeA20[thisPair] ) {
        //log(key)
        if (countObj[key] !== undefined){
          countObj[key] += pairsBecomeA20[thisPair][key]
        } else {
          countObj[key] = pairsBecomeA20[thisPair][key]
        }
      }
    }
    log(countObj)
    pairsBecomeA40[k] = countObj
  }
  log(pairsBecomeA40)
  const finalCountObj = {}
  for ( let i = 0; i< startString.length-1; i+=1){
    const thisPair = startString[i] + startString[i+1]
    log(pairsBecomeA40[thisPair])
	  for ( key in pairsBecomeA40[thisPair] ) {
      if (finalCountObj[key]){
        finalCountObj[key] += pairsBecomeA40[thisPair][key]
      } else {
        finalCountObj[key] = pairsBecomeA40[thisPair][key]
      }
    }
  }
  finalCountObj[startString[startString.length-1]] += 1
  log(finalCountObj)
  let min = 10**50
  let max = -5
  for( k in finalCountObj){
    min = Math.min(min, finalCountObj[k])
    max = Math.max(max, finalCountObj[k])
  }

   log(max - min)
}