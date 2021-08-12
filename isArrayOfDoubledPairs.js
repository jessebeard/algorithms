var canReorderDoubled = function(arr) {
  let a = arr.map(x=>x).sort((x,y)=> Math.abs(y)-Math.abs(x))
  console.log(a)
  let result =true;
  for(let i = 0; i < arr.length-1; i += 1){
    if(a[i] === '') continue 
    if(a[i] === 0){
      a[i] = ''
      if(a.indexOf(0) !== -1) a[a.indexOf(0)] = ''
      else result = false
    }
    else if ( a.indexOf(a[i]/2) !== -1 && a[i] % 2 !== 1) a[a.indexOf(a[i]/2)] = '', a[i] = '';
    else if(a.indexOf(a[i]*2) !== -1) a[a.indexOf(a[i]*2)] = '', a[i]=''
    else console.log(a[i],i), result = false
   }
  return result
};
