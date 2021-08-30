const fib = (n) => {
  let oneStep = 0
  let twoStep = 1
  if ( n === 0 ) return oneStep;
  if ( n === 1 ) return twoStep;
  for (let i = 0; i < n; i += 1 ) {
    const memo  =  oneStep + twoStep;
    twoStep = oneStep;
    oneStep = memo;
  }
  return oneStep;
}
//result: https://leetcode.com/submissions/detail/481185769
//NOTE: given the constraint of  0 <= n <= 30, my first solution was to just write a switch statement.
