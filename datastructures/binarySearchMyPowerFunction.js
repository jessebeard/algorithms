//create a power function 

//lc 50 | solved 12 mins

var myPow = function(x, n) {
    if (n === 0) return 1
    let result = n % 2 === 0 
        ? myPow(x * x, (Math.abs(n) / 2)) 
        : myPow(x * x, ((Math.abs(n)-1) / 2)) * x;
    
    if (n < 0) return 1 / result;
    return result;
};