const runTests = require('../../../RunTests/JavaScript/index')

function findCompoundWords( words ){

  const wordsMappedByLength = new Map()

  words.sort().forEach( word => {
    const wordLength = word.length
    const newLengthList = wordsMappedByLength.has( wordLength ) ? [ ...wordsMappedByLength.get( wordLength), word ] : [ word ]
    wordsMappedByLength.set( wordLength, newLengthList )    
  })

  const possibleCombinations = findPossibleSums( [...wordsMappedByLength.keys()] )

  //console.log( possibleCombinations )

  words.forEach( word => {

    let possibleCombinationsByLength = [] 

    possibleCombinations.get(word.length).forEach( combination => { 
      possibleCombinationsByLength = [...possibleCombinationsByLength, ...combination]
    })

    const possibleCombinationsByLengthSet = new Set(possibleCombinationsByLength)
    let possibleCombinationWords = []

    Array.from(possibleCombinationsByLengthSet).forEach( length => {
      const words = wordsMappedByLength.get(length)
      possibleCombinationWords = [ ...possibleCombinationWords, ...words]
    })

    findWordCombination( word, possibleCombinationWords, possibleCombinations.get(word.length) )





  })

}

function findWordCombination( word, words, possibleCombinations ){

  if ( !words.length ) return

  console.log( word, words, possibleCombinations )





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