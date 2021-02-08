const stockPrices = [10, 7, 5, 8, 11, 9];

const getMaxProfit = (prices) => {
  let best;
  let min = prices[0]
  prices.forEach( (p, i) => {
    if ( p < min ) {
      min = p
    };
    if ( (p - min) > best) {
      best = p - min
    };
    if ( best === undefined && i !== 0) {
      best = p - min;
    };
  })
  return best;
};
console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)