const runTests = require('../../../RunTests/JavaScript/index')

function findCompoundWords( words ){

  const wordsMappedByLength =  mapWordsByLength( words ) 
  const possibleCombinationsByLength = findPossibleSums( [...wordsMappedByLength.keys()] )

  words.forEach( word => {
    const wordLength = word.length
    const possibleCombinationsByLengthForThisWord = possibleCombinationsByLength.get( wordLength )
    let possibleWordCombinationsByLength = [] 
    possibleCombinationsByLength.get( wordLength ).forEach( combination => possibleWordCombinationsByLength.push( ...combination  ))
    const possibleCombinationsByLengthSet = new Set(possibleWordCombinationsByLength)
    let possibleCombinationWords = []
    Array.from(possibleCombinationsByLengthSet).forEach( length => possibleCombinationWords.push( ...wordsMappedByLength.get(length)))
    const filteredPossibleCombinationWords = possibleCombinationWords.filter( substring => word.includes(substring))



    const allowedLengths = filteredPossibleCombinationWords.map( word => word.length )
    const allowedLengthsSet = new Set()
    allowedLengths.forEach( length => allowedLengthsSet.add(length))


    const possibleCombinationsByLengthForThisWordFiltered = possibleCombinationsByLengthForThisWord.filter( combination => {
      const allowedLengthsArray = Array.from( allowedLengths )
      const hasInvalid = combination.some( number => !allowedLengthsArray.includes(number))
      return !hasInvalid
    })



    findWordCombination( word, filteredPossibleCombinationWords, possibleCombinationsByLengthForThisWordFiltered )
  })

}


function findWordCombination( word, words, possibleCombinations ){

  if ( !words.length ) return

  console.log( word, words, possibleCombinations )





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

findCompoundWords( [, "a", "tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"] )


//runTests( myFunction )