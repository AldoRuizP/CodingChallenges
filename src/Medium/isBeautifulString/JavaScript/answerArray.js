const runTests = require('../../../RunTests/JavaScript/index')

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')

function isBeautifulString(inputString) {
  const isNotBeautiful = alphabetArray.some( (_, index) => index > 0 && compareCurrentAndPrevious(index, inputString) )
  return !isNotBeautiful
}

function compareCurrentAndPrevious( index, inputString ) {
  return getIncidencesFromArray(index - 1, inputString)  < getIncidencesFromArray(index, inputString)
}

function getIncidencesFromArray( index, string ){
  const regex = new RegExp( alphabetArray[index], 'g' )
  return ( string.match( regex ) || [] ).length
}

runTests(isBeautifulString)