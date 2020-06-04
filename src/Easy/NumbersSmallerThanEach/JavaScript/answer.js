const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that finds how many items are smaller than each item in a given array
 * @param { number[] } numbers - An array of numbers
 * @returns { number[] } - An array with the number of elements smaller than each item in the original array
 */
function myFunction( numbers ){
  const sortedNumbers = numbers.slice().sort( (a,b) => a - b )
  return numbers.map( num => sortedNumbers.indexOf( num ) )
}

runTests( myFunction )
