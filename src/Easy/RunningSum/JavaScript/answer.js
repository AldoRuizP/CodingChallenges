const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that given an array, returns the sum of each element until i
 * @param { number[] } numbers - An array of integers
 * @returns { number[] } - An array of integers with the running sum of the given array
 */
function runningSum( numbers ){
  let sum = 0
  return numbers.map( num => sum += num )
}

runTests( runningSum )
