/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 *

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


// lc 278
// finished 11 mins
// first try  

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let left = 0;
      let right = n;
      while (left + 1 < right) {
        let mid = ~~((left + right) / 2);
        let isBad = isBadVersion(mid);
        if(isBad) right = mid;
        else left = mid;
      }
      return right;
    };
};