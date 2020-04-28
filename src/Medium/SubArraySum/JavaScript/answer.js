const runTests = require('../../../RunTests/JavaScript/index')

function subArraySum( numbers, target ){

  let subArray = []
  let currentSum = 0
  let index = 0

  while ( currentSum !== target ) {

    const currentNumber = numbers[index++]
    currentSum += currentNumber
    subArray.push( currentNumber )

    while( currentSum > target ) {
      currentSum -= subArray.shift()
    }

  }

  return subArray
}



console.log( subArraySum( [1, 3, 2, 5, 7, 2], 14) ) // [2, 5, 7]
//runTests( subArraySum )
