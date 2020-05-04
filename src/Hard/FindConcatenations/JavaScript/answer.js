const runTests = require('../../../RunTests/JavaScript/index')

function findCompoundWords( words ){
  const wordsMappedByLength =  mapWordsByLength( words ) 
  const possibleCombinationsByLength = findPossibleSums( [...wordsMappedByLength.keys()] )
  const possibleCombinationsMappedByWord = getCombinationsMappedByWord( words, wordsMappedByLength, possibleCombinationsByLength )
  const compoundWords = []
  
  possibleCombinationsMappedByWord.forEach( ( values, word ) => { 
    const isCompound = processWordToFindCombinations( values, word)
    if( isCompound ) compoundWords.push(word)
  })


  return compoundWords
}

function processWordToFindCombinations( values, word ){

  const { words } = values
  let replacedWord = word
  const sortedWordsByLength = words.sort( (a,b) => b.length - a.length)
  sortedWordsByLength.forEach( possibleWord => {
    let tempPrevious = replacedWord
    while(true){
      tempPrevious = replacedWord
      replacedWord = replacedWord.replace( possibleWord, '' )
      if ( tempPrevious === replacedWord ) break
    }
  })

  return !replacedWord
}

function getCombinationsMappedByWord( words, wordsMappedByLength, possibleCombinationsByLength ){

  const combinationsMappedByWord = new Map()
  words.forEach( word => {
    const combinationsByLength = possibleCombinationsByLength.get( word.length )
    const filteredPossibleCombinationWords = getWordsByGivenLengths( possibleCombinationsByLength, word, wordsMappedByLength  )
    const filteredLengths = getLengthsByGivenWords( filteredPossibleCombinationWords, combinationsByLength )
    const wordValues = { words: filteredPossibleCombinationWords, combinations: filteredLengths }
    if ( filteredPossibleCombinationWords.length ) combinationsMappedByWord.set( word, wordValues )
  })
  return combinationsMappedByWord
}

function getWordsByGivenLengths( possibleCombinationsByLength, word, wordsMappedByLength ) {
  const combinationsByWord = new Set()
  let possibleCombinationWords = []
  possibleCombinationsByLength.get( word.length ).forEach( combination => combination.forEach( w => combinationsByWord.add(w)))
  Array.from(combinationsByWord).forEach( length => possibleCombinationWords.push( ...wordsMappedByLength.get(length)))
  const filteredPossibleCombinationWords = possibleCombinationWords.filter( substring => word.includes(substring))
  return filteredPossibleCombinationWords
}

function getLengthsByGivenWords( filteredPossibleCombinationWords, combinationsByLength  ){
  const allowedLengths = filteredPossibleCombinationWords.map( word => word.length )
  return combinationsByLength.filter( combination => !combination.some( number => !allowedLengths.includes(number)))
}

function mapWordsByLength( words ) {
  const wordsMappedByLength = new Map()
  words.sort().forEach( word => {
    const wordLength = word.length
    const newLengthList = wordsMappedByLength.has( wordLength ) ? [ ...wordsMappedByLength.get( wordLength), word ] : [ word ]
    wordsMappedByLength.set( wordLength, newLengthList )    
  })
  return wordsMappedByLength
}

function findPossibleSums( numbers ){
  const combinationsMap = new Map()
  numbers.forEach( (number, index) => {
    const subArray = numbers.slice(0, index)
    const combinations = []
    findCombinationsUtil( [] , 0, number, number, combinations )
    const validCombinations = [...combinations].filter( combination => {
      const isInvalid = combination.some( combinationNumber => !subArray.includes(combinationNumber) )
      const isCombination = combination.length > 1
      return isCombination && !isInvalid
    })
    combinationsMap.set( number, validCombinations )
  })
  return combinationsMap
}

function findCombinationsUtil( arr, index, num, reducedNum, answers ){
  if (reducedNum < 0 ) return answers
  if (reducedNum === 0 ) return answers.push( arr.slice( 0, index ) )
  let prev = index === 0 ? 1 : arr[index - 1]

  for( let k = prev; k < num + 1; k++ ){
    arr[index] = k
    findCombinationsUtil( arr, index + 1, num, reducedNum - k, answers  )
  }
}

runTests( findCompoundWords )