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

// part 2
const text = document.querySelector('pre').innerText;
const rayArray = text.trim().split('\n')
  .map(line => line.match(/[0-9]+/g).map(x => parseInt(x)))

const map =  new Array(999).fill().map(_ =>new Array(999).fill(0))

rayArray.forEach(([x1,y1,x2,y2]) => {
  if (x1 === x2){
    const end = Math.max(y2,y1)
    const start = Math.min(y2,y1)
    for(let y = start; y<=end; y++){
      map[y][x1] += 1
    }
  } else if (y1 == y2) {
    const end = Math.max(x2,x1)
    const start = Math.min(x1,x2)
    for(let x = start; x<=end; x++){
      map[y1][x] += 1
    }
  } else {
    if(x1>x2 && y1>y2){
      for(let x = x1, y = y1; x>=x2; x--, y--){
        map[y][x] += 1
      }
    } else if(x1<x2 && y1<y2) {
      for(let x = x1, y = y1; x<=x2; x++, y++){
        map[y][x] += 1
      }
    } else if(x1>x2 && y1<y2) {
      for(let x = x1, y = y1; x>=x2; x--, y++){
        map[y][x] += 1
      }
    } else if(x1<x2 && y1>y2) {
      for(let x = x1, y = y1; x<=x2; x++, y--){
        map[y][x] += 1
      }
    }
  }
})
const result = map.reduce((acc,cur) => acc += cur.reduce((a,c)=>c>1?a+1:a, 0),0)
console.log(result)

// using matchAll and a case statement
const text = document.querySelector('pre').innerText;
const re = /^([0-9]+).([0-9]+)[^0-9]+([0-9]+).([0-9]+)$/mg
const rayArray = Array.from(text.trim().matchAll(re));
const map =  new Array(999).fill().map(_ =>new Array(999).fill(0))
rayArray.forEach(([_,x1,y1,x2,y2]) => {
  [x1,x2,y1,y2] = [x1,x2,y1,y2].map(x => parseInt(x))
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
   } else {
    switch(~~(x1>x2) + ~~(y1>y2) *2){
      case(0):  // coord 1 / coord 2
        for(let x = x1, y = y1; x<=x2; x++, y++){
          map[y][x] += 1
        }
        break
      case(1): // coord 2 \ coord 1
        for(let x = x1, y = y1; x>=x2; x--, y++){
          map[y][x] += 1
        }
        break
      case(2): // coord 1 \ coord 2
        for(let x = x1, y = y1; x<=x2; x++, y--){
          map[y][x] += 1
        }
        break
      case(3): // coord 2 / coord 1
        for(let x = x1, y = y1; x>=x2; x--, y--){
          map[y][x] += 1
        }
        break
    }
 }
})
const result = map.reduce((acc,cur) => acc += cur.reduce((a,c)=>c>1?a+1:a, 0),0)
console.log(result)
