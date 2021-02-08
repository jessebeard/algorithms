const makeWordCountMap = ( str ) => {
  const strArr = str.toLowerCase().split('');
  const wordMap = new Map();
  let curWord = '';
  strArr.forEach((letter) => {
    if((letter.charCodeAt(0) < 123
      && letter.charCodeAt(0) > 96 )
    || (letter.charCodeAt(0) === 45 && curWord !== '' )) {
      curWord += letter;
    } else {
        if( curWord !== '') {
        if(wordMap.has(curWord)){
          wordMap.set(curWord, wordMap.get(curWord) +1)
        } else { wordMap.set(curWord, 1) }
      curWord = '';
      }
    }
  })
  return wordMap;
};

const smplA = `"After beating the eggs, Dana read the next step:"
"Add milk and egg-whites, then add flour and sugar."`

console.log(makeWordCountMap(smplA));