// implement a binary search approach to finding if a given 
// int is perfect square (e.g. 16 -> true, 15 -> false) 
// lc 367 | finished in 8 mins

var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    while (left + 1 < right) {
        let mid = ~~((left + right) / 2)
        let square = mid ** 2;
        if (square === num) return true;
        if (square < num) left = mid;
        if (square > num) right = mid;
    }
    if (left ** 2 === num || right ** 2 === num) return true;
    return false;
};