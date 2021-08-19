/****

a = new Array(40).fill().map((a, i) => a = Math.floor(i * Math.random() * 10 )).sort( (a,b) => a - b );

let emptyArr = []
b = [] ? 'true' : 'false'


***/

// I don't know where I found this problem, or why I settled on a try/catch block 

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served
  let TOLIS = -1; //LIS = Last Index Served
  let DILIS = -1;
  let failed = false;
  try {
    servedOrders.forEach((item, i) => {
      if(takeOutOrders[TOLIS+1] === item) TOLIS += 1
      else if(dineInOrders[DILIS+1] === item) DILIS += 1
      else { throw false}
    })
    if (takeOutOrders[TOLIS+1] !== undefined || dineInOrders[DILIS+1] !== undefined) throw false;
  }
 catch(e) {
   return e;
 }
 return true;
};
/***** Tests *****
var todayTO = []
var todayDI = [9, 7, 8, 34]
var todaySO = [ 9, 7, 8, 34]
console.log(isFirstComeFirstServed(todayTO, todayDI, todaySO))


console.log(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]))


console.log(emptyArr.length);
***/
