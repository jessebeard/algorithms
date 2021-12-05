// part 1
const text = document.querySelector('pre').innerText;
const rayStringArray = text.trim().split(/\s+/);
const rayArrLength = rayStringArray.length;

const coordArray = rayStringArray.map(x => x.split(" -> "))
  .filter( x => x[0] !== '->')
  .map(coords => coords[0].split(',').map( num => parseInt(num)));

for (let i =1 ; i < coordArray.length; i++){
	if(i%2 == 1){
    coordArray[i-1] = [...coordArray[i-1], ...coordArray[i]]
  }
}
rayArray = coordArray.filter(x => x.length === 4)
const map =  new Array(999).fill().map(_ =>new Array(999).fill(0))
rayArray.forEach(([x1,y1,x2,y2]) => {
  if (x1 === x2){
    const end = Math.max(y2,y1)
    const start = Math.min(y2,y1)
    for(let i = start; i<=end; i++){
      map[i][x1] += 1
    }
  } else if (y1 == y2) {
    const end = Math.max(x2,x1)
    const start = Math.min(x1,x2)
    for(let i = start; i<=end; i++){
      map[y1][i] += 1
    }
  }
})
const result = map.reduce((acc,cur) => acc += cur.reduce((a,c)=>c>1?a+1:a, 0),0)
console.log(result)
