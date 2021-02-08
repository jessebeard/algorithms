function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served
  let DILIS = -1;
  let TOLIS = -1; //TOLIS = Last Index Served
  let failed = false;
  try {
    if (takeOutOrders.length === ( 0 || undefined) ) {
      if(takeOutOrders[TOLIS+1] === item) TOLIS += 1
      else { throw false}
    }
    if (dineInOrders.length === ( 0 || undefined) ) {
      if(dineInOrders[DILIS+1] === item) DILIS += 1
      else { throw false}
    }
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

 var todayTO = []
 var todayDI = [9, 7, 8, 34]
 var todaySO = [ 9, 7, 8, 34]
 console.log(isFirstComeFirstServed(todayTO, todayDI, todaySO))


console.log(isFirstComeFirstServed([55, 9], [7, 8], [55, 7, 8, 9]))