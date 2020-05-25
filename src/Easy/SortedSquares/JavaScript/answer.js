const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that squares all the numbers in an array, and returns them sorted
 * @param { number[] } numbers - An array or sorted numbers which can be positive or negative
 * @returns { number[] } - An array of positive numbers
 */
function sortedSquares( numbers ){
  return numbers.map( num => Math.pow(num, 2)).sort( (a,b) => a - b )
}

runTests( sortedSquares )
