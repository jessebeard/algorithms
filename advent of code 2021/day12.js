{
  const ALPHASPLIT = 91
  const log = console.log.bind(this)
  log.matrix = (m, ...args) => {
    log( m.reduce((acc,l) => acc + l.reduce((a,c)=> a+c,'')+'\n', '\n'), ...args)
  }

  class CaveNode {
    constructor(){
			this.connections = []
      this.isBigCave = false
    }
  }
  const linkTuples = document.querySelector('pre').innerText.trim()
                  .split('\n').map(line =>line.split('-'))
  const caves = { 'start': new CaveNode(), 'end': new CaveNode()}
  // load caves
  linkTuples.forEach(([f,s]) => {
    if(caves[f] === undefined) {
      caves[f] = new CaveNode()
    }
    caves[f].connections.push(s)
    caves[f].isBigCave = f.charCodeAt(1) < ALPHASPLIT
    if(caves[s] == undefined) {
      caves[s]= new CaveNode()
    }
    caves[s].connections.push(f)
    caves[s].isBigCave = s.charCodeAt(1) < ALPHASPLIT
  })
	const paths = []
 	const dfs = (node, visited, path) => {
    if (!caves[node].isBigCave) {
      visited.add(node)
    }
    caves[node].connections.forEach( (n) => {
      if (n === 'end') {
        paths.push([...path, 'end'])
      } else if (!visited.has(n)){
        path.push(node)
        dfs(n, visited, path)
        path.pop()
      }
    })
    visited.delete(node)
   }
   dfs('start', new Set(), [])
   log(paths)
}

{
  const ALPHASPLIT = 91
  const log = console.log
  log.matrix = (m, ...args) => {
    log( m.reduce((acc,l) => acc + l.reduce((a,c)=> a+c,'')+'\n', '\n'), ...args)
  }

  class CaveNode {
    constructor(){
			this.connections = []
      this.isBigCave = false
    }
  }
  const linkTuples = document.querySelector('pre').innerText.trim()
                  .split('\n').map(line =>line.split('-'))
  const caves = { 'start': new CaveNode(), 'end': new CaveNode()}
  // load caves
  linkTuples.forEach(([f,s]) => {
    if(caves[f] === undefined) {
      caves[f] = new CaveNode()
    }
    caves[f].connections.push(s)
    caves[f].isBigCave = f.charCodeAt(1) < ALPHASPLIT
    if(caves[s] == undefined) {
      caves[s]= new CaveNode()
    }
    caves[s].connections.push(f)
    caves[s].isBigCave = s.charCodeAt(1) < ALPHASPLIT
  })
	let paths = 0
  const dfs = (node, visited, hasDoubleVisited) => {
   if (!hasDoubleVisited || !visited.has(node)) {
      if (!caves[node].isBigCave && visited.has(node)) {
        hasDoubleVisited = true;
      }
      if (!caves[node].isBigCave){
        visited.add(node);
      }

      caves[node].connections.forEach((n) => {
      if (n.length === 3) {
        paths++
       } else if (n.length === 2) {
          dfs(n, new Set(visited), hasDoubleVisited);
        }
      });
    }
  };
   dfs('start', new Set(), false)
   log(paths)
}

