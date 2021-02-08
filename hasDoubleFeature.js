const hasDoubleFeature = (flightLength, movieLengths) => {
  const checked = new Set;
  for( let i = 0; i < movieLengths.length; i += 1) {

    if (!checked.has(movieLengths[i])) {
      // if ( i === 3 ) console.log('ya garbage', checked.has(movieLengths[i]), movieLengths[i]);
      const remainder = movieLengths.length -  i
      for (let j = i + 1; j <= remainder; j+=1) {
        if ( movieLengths[i] + movieLengths[j] === flightLength ) return true;
      }
    }
  }
  return false;
}

const duration = 150;
const list = [ 90, 30, 20, 30, 40, 50]

console.log( hasDoubleFeature( duration, list ) ? "true" : "false" )